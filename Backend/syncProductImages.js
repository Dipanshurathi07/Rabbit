const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./Models/Product.js");
const products = require("./Data/products.js");

dotenv.config();

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

const bottomWearTerms = [
  "jeans", "jogger", "pants", "trouser", "shorts", "legging", "skirt",
  "culotte", "palazzo", "sweatpants", "chino", "track pant"
];

const getCategory = (name) => bottomWearTerms.some((term) => name.toLowerCase().includes(term))
  ? "Bottom Wear"
  : "Top Wear";

const syncProductImages = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  let updated = 0;
  let skipped = 0;

  for (const [index, product] of products.entries()) {
    const category = getCategory(product.name);
    const gender = Array.isArray(product.gender) ? product.gender[0] : product.gender;
    const pool = imagePools[`${gender}|${category}`];

    if (!pool) {
      skipped += 1;
      continue;
    }

    const pick = (offset) => pool[(index * 3 + offset) % pool.length];
    const images = [0, 1, 2].map((offset) => ({
      url: pick(offset),
      altText: `${product.name} ${offset === 0 ? "front" : offset === 1 ? "detail" : "lifestyle"} view`
    }));

    const result = await Product.updateOne({ sku: product.sku }, { $set: { images } });
    updated += result.matchedCount;
    skipped += result.matchedCount === 0 ? 1 : 0;
  }

  console.log(`Product images synced: ${updated}; skipped: ${skipped}`);
  await mongoose.disconnect();
};

syncProductImages().catch(async (error) => {
  console.error("Product image sync failed:", error.message);
  await mongoose.disconnect();
  process.exitCode = 1;
});