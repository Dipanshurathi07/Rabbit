const express = require("express");
const Product = require("../Models/Product.js")
const { protect, admin } = require("../middleware/authMiddleware.js");
const { findById } = require("../Models/User.js");
const products = require("../Data/products.js");
const router = express.Router();

//create a new Product
//only admin can add product
router.post("/", protect, admin, async (req, res) => {
  try {
    const { name, description, price, discountPrice, countInStock, category, brand, sizes, colors, collections, materail, gender, images, isFeatured, isPublished, tags, dimentions, weight, sku } = req.body;

    const product = new Product({
      name, description, price, discountPrice, countInStock, category, brand, sizes, colors, collections, materail, gender, images, isFeatured, isPublished, tags, dimentions, weight, sku, user: req.user._id
      //id of admin who created it
    })
    const createdProduct = await product.save();
    res.status(201).json(createdProduct)
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error")

  }
})
router.put("/:id", protect, admin, async (req, res, next) => {
  const { name, description, price, discountPrice, countInStock, category, brand, sizes, colors, collections, material, gender, images, isFeatured, isPublished, tags, dimentions, weight, sku } = req.body;
  const product = await Product.findById(req.params.id);
  try {
    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished = isPublished || isPublished !== undefined ? isPublished : product.isFeatured;
      product.tags = tags || product.tags;
      product.dimentions = dimentions || product.dimentions;
      product.weight = weight || product.weight;
      product.sku = sku || product.sku;
      await product.save();

    } else {
      res.status(404).json({ Message: "Product not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
})
router.delete("/:id", protect, admin, async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.send("Successfull delete")
    } else {
      res.status(404).json({ message: "Product not found" })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Server Error" })
  }

})
router.get("/", async (req, res) => {
  try {
    const {
      category,
      gender,
      color,
      size,
      material,
      minPrice,
      maxPrice,
      brand,
      collection,
      sortBy,
      search,
      limit
    } = req.query;

    const queryObj = {};
    let sort = {};
    if (collection && collection.toLowerCase() !== "all") {
      if (collection.toLowerCase() === "men") {
        queryObj.gender = "Men";
      } else if (collection.toLowerCase() === "women") {
        queryObj.gender = "Women";
      } else if (collection.toLowerCase() === "topwear") {
        queryObj.category = "Top Wear";
      } else if (collection.toLowerCase() === "bottomwear") {
        queryObj.category = "Bottom Wear";
      } else {
        queryObj.collection = collection;
      }
    }
    if (category && category.toLowerCase() !== "all") {
      queryObj.category = category;
    }
    if (gender) {
      queryObj.gender = gender;
    }
    if (color) {
      queryObj.colors = { $in: color.split(",") };
    }
    if (size) {
      queryObj.sizes = { $in: size.split(",") };
    }

    if (material) {
      queryObj.material = { $in: material.split(",") };
    }

    if (minPrice || maxPrice) {
      queryObj.price = {};
      if (minPrice) {
        queryObj.price.$gte = Number(minPrice);
      }
      if (maxPrice) {
        queryObj.price.$lte = Number(maxPrice);
      }
    }

    if (brand) {
      queryObj.brand = { $in: brand.split(",") };
    }

    if (search) {
      queryObj.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } }
      ];
    }

    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
        default:
          break;
      }
    }
    const products = await Product
      .find(queryObj)
      .sort(sort)
      .limit(Number(limit) || 0);

    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});
router.get("/best-seller", async (req, res) => {
  try {
    const bestSeller = await Product.findOne().sort({ rating: -1 });
    if (bestSeller) {
      res.json(bestSeller)
    } else {
      res.status(404).json({ Message: "No best seller found" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Server Error" })

  }
})

router.get("/new-arrivals", async (req, res) => {
  try {
    const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(8);
    if (newArrivals) {
      res.json(newArrivals)
    } else {
      res.status(404).json({ Message: "No new Arrivals found" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Server Error" })

  }
})


router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ Message: "Product not found" })
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
})
router.get("/similar/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).send("Product not Found");
    }

    const similarProducts = await Product.find({
      _id: { $ne: id },
      category: product.category,
      gender: product.gender
    }).limit(4);

    res.status(200).json(similarProducts);

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;