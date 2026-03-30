const express = require("express");
const Product = require("../Models/Product.js");
const Cart = require("../Models/Cart.js");
const products = require("../Data/products.js");
const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

const getCart = async (guestId, userId) => {
  if (userId) {
    return await Cart.findOne({ userId: userId })
  } else if (guestId) {
    return await Cart.findOne({ guestId })
  } else {
    return null;
  }
}

// GET CART
router.get("/", async (req, res) => {
  try {
    const { userId, guestId } = req.query;
    const cart = await getCart(guestId, userId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("POST /api/cart body:", req.body);
    const { userId, guestId, color, size, productId } = req.body;
    // normalize quantity to number
    const quantity = parseInt(req.body.quantity, 10) || 1;
    const cart = await getCart(guestId, userId);
    //cart exist mtlb guest ya userId bani hui h 
    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) =>
          (p.productId?.toString ? p.productId.toString() : p.productId) === (productId?.toString ? productId.toString() : productId) &&
          (p.size || "").toLowerCase() === (size || "").toLowerCase() &&
          (p.color || "").toLowerCase() === (color || "").toLowerCase()
      )
      //it will return -1 if not exist 
      if (productIndex > -1) { //exist
        //increase quantity
        cart.products[productIndex].quantity = (cart.products[productIndex].quantity || 0) + quantity;
      } else {
        //add new Product
        const product = await Product.findById(productId);
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        } else {
          cart.products.push({
            productId: product._id,
            name: product.name,
            image: product.images?.[0]?.url || "",
            price: product.price,
            color,
            size,
            quantity
          })
        }
      }
      //calcute totalPrice
      cart.totalPrice = cart.products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      await cart.save();
      return res.json(cart);
    } else {
      const product = await Product.findById(productId);
      const newcart = await Cart.create({
        userId: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + Date.now(),

        products: [
          {
            productId: product._id,
            name: product.name,
            image: product.images?.[0]?.url || "",
            price: product.price,
            size,
            color,
            quantity
          }
        ],

        totalPrice: product.price * quantity
      });
      await newcart.save();

      return res.status(200).json(newcart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error")

  }
})
//we need to write to increase product quantity
router.put("/", async (req, res) => {
  const { userId, guestId, size, color, quantity, productId } = req.body
  try {
    console.log("PUT /api/cart body:", req.body);
    let cart = await getCart(guestId, userId);

    // If cart doesn't exist, create it with this product
    if (!cart) {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      const newCart = await Cart.create({
        userId: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + Date.now(),
        products: [
          {
            productId: product._id,
            name: product.name,
            image: product.images?.[0]?.url || "",
            price: product.price,
            size,
            color,
            quantity
          }
        ],
        totalPrice: product.price * quantity
      });
      await newCart.save();
      return res.status(200).json(newCart);
    }

    const productIndex = cart.products.findIndex((p) =>
      (p.productId?.toString ? p.productId.toString() : p.productId) === (productId?.toString ? productId.toString() : productId) &&
      (p.size || "").toLowerCase() === (size || "").toLowerCase() &&
      (p.color || "").toLowerCase() === (color || "").toLowerCase()
    );

    if (productIndex > -1) {
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;
      } else {
        cart.products.splice(productIndex, 1);
      }
      cart.totalPrice = cart.products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      await cart.save();
      return res.status(200).json(cart);
    }

    // If product not found in existing cart, add it
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    cart.products.push({
      productId: product._id,
      name: product.name,
      image: product.images?.[0]?.url || "",
      price: product.price,
      size,
      color,
      quantity
    });
    cart.totalPrice = cart.products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    await cart.save();
    return res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
})
router.delete("/", async (req, res) => {
  const { userId, guestId, productId, size, color } = req.body;

  try {
    console.log('DELETE /api/cart body:', req.body);
    const cart = await getCart(guestId, userId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // log current products for debugging
    console.log('Before filter products:', cart.products.map(p => ({ id: p.productId?.toString?.() || p.productId, size: p.size, color: p.color })));

    // remove item: keep products that do NOT match all three attributes
    cart.products = cart.products.filter((p) => {
      const pid = p.productId && p.productId.toString ? p.productId.toString() : String(p.productId);
      const match = pid === (productId && productId.toString ? productId.toString() : String(productId))
        && (p.size || '').toLowerCase() === (size || '').toLowerCase()
        && (p.color || '').toLowerCase() === (color || '').toLowerCase();
      return !match;
    });

    console.log('After filter products:', cart.products.map(p => ({ id: p.productId?.toString?.() || p.productId, size: p.size, color: p.color })));

    // recalc total
    cart.totalPrice = cart.products.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// router.get reh gya h abhi   

router.post("/merge", async (req, res) => {
  const { userId, guestId } = req.body;

  try {
    // guestId is a string (e.g. guest_12345), not an ObjectId
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ userId });

    if (!guestCart || !guestCart.products?.length) {
      // Nothing to merge, but not an error.
      if (userCart) {
        return res.status(200).json({ message: "No guest cart to merge", userCart });
      }
      return res.status(200).json({ message: "No guest cart to merge", userCart: null });
    }

    if (!userCart) {
      guestCart.userId = userId || undefined;
      guestCart.guestId = undefined;
      await guestCart.save();
      return res.status(200).json(guestCart);
    }

    // merge logic
    guestCart.products.forEach((guestItem) => {
      const productIndex = userCart.products.findIndex(
        (p) =>
          p.productId.toString() === guestItem.productId.toString() &&
          p.size === guestItem.size &&
          p.color === guestItem.color
      );

      if (productIndex > -1) {
        userCart.products[productIndex].quantity += guestItem.quantity;
      } else {
        userCart.products.push(guestItem);
      }
    });

    userCart.totalPrice = userCart.products.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    await userCart.save();

    await Cart.findOneAndDelete({ guestId });

    res.status(200).json({ message: "Cart merged successfully", userCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;
