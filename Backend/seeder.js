const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Product = require("./Models/Product.js");
const User = require("./Models/User.js");
const Cart = require("./Models/Cart.js");
const products = require("./Data/products.js");

mongoose.connect(process.env.MONGODB_URI);

const imagePools = {
  "Men|Top Wear": [
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
  ],
  "Women|Top Wear": [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
  ],
  "Men|Bottom Wear": [
    "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1506629905607-ef2581f5b166?auto=format&fit=crop&w=900&q=80"
  ],
  "Women|Bottom Wear": [
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80"
  ]
};

const buildProductImages = (product, index) => {
  const pool = imagePools[`${product.gender[0]}|${product.category}`];
  const pick = (offset) => pool[(index * 3 + offset) % pool.length];
  return [
    { url: pick(0), altText: `${product.name} front view` },
    { url: pick(1), altText: `${product.name} detail view` },
    { url: pick(2), altText: `${product.name} lifestyle view` }
  ];
};

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
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

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
      images: buildProductImages(classifyProduct(product), index)
    }));

    await Product.insertMany(sampleData);
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedData();