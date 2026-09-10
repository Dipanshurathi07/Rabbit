const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Product = require("./Models/Product.js");
const User = require("./Models/User.js");
const Cart = require("./Models/Cart.js");
const products = require("./Data/products.js");
const { getProductImages } = require("./utils/productImages.js");

const classifyProduct = (product) => {
  const name = product.name.toLowerCase();
  const bottomWearTerms = [
    "jeans",
    "jogger",
    "pants",
    "trouser",
    "shorts",
    "legging",
    "skirt",
    "culotte",
    "palazzo",
    "sweatpants",
    "chino",
    "track pant"
  ];

  const category = bottomWearTerms.some((term) => name.includes(term))
    ? "Bottom Wear"
    : "Top Wear";

  return {
    ...product,
    category,
    gender: Array.isArray(product.gender) ? product.gender : [product.gender]
  };
};

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB: ${mongoose.connection.host}/${mongoose.connection.name}`);

    const deletedProducts = await Product.deleteMany({});
    const deletedUsers = await User.deleteMany({});
    const deletedCarts = await Cart.deleteMany({});
    console.log(`Deleted products: ${deletedProducts.deletedCount}`);
    console.log(`Deleted users: ${deletedUsers.deletedCount}`);
    console.log(`Deleted carts: ${deletedCarts.deletedCount}`);
    const createUser = await User.create({
      name: "John",
      email: "dipanshuchaudhary13@gmail.com",
      password: "123456",
      role: "admin"
    });

    const userID = createUser._id;
    const sampleData = products.map((product, index) => ({
      ...classifyProduct(product),
      user: userID,
      images: getProductImages(product, index)
    }));

    const insertedProducts = await Product.insertMany(sampleData);
    console.log(`Inserted products: ${insertedProducts.length}`);
  } catch (err) {
    console.error("Seeding failed:", err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedData();