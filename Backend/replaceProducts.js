const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./Models/Product.js");
const User = require("./Models/User.js");
const products = require("./Data/products.js");
const { getProductImages } = require("./utils/productImages.js");

dotenv.config();

const replaceProducts = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  const owner = await User.findOne({ role: "admin" }) || await User.findOne();
  if (!owner) {
    throw new Error("No user found. Create an admin/user before importing products.");
  }

  const normalizedProducts = products.map((product, index) => ({
    ...product,
    gender: Array.isArray(product.gender) ? product.gender : [product.gender],
    images: getProductImages(product, index),
    user: owner._id
  }));

  const deleted = await Product.deleteMany({});
  const inserted = await Product.insertMany(normalizedProducts, { ordered: true });

  console.log(`Deleted products: ${deleted.deletedCount}`);
  console.log(`Inserted products: ${inserted.length}`);
  console.log(`Images assigned by product title, category, and gender`);
};

replaceProducts()
  .then(() => mongoose.disconnect())
  .catch(async (error) => {
    console.error("Product replacement failed:", error.message);
    await mongoose.disconnect();
    process.exitCode = 1;
  });