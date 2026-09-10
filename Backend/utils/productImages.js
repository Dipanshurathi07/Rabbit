const imagePools = {
  "Men|Top Wear": [
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
  ],
  "Women|Top Wear": [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
  ],
  "Men|Bottom Wear": [
    "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80"
  ],
  "Women|Bottom Wear": [
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=80"
  ]
};

const bottomWearTerms = [
  "jeans", "jogger", "pants", "trouser", "shorts", "legging", "skirt",
  "culotte", "palazzo", "sweatpants", "chino", "track pant"
];

const getProductCategory = (name) => bottomWearTerms.some((term) =>
  name.toLowerCase().includes(term)
) ? "Bottom Wear" : "Top Wear";

const getProductImages = (product, index = 0) => {
  if (Array.isArray(product.images) && product.images.length) {
    return product.images;
  }

  const gender = Array.isArray(product.gender) ? product.gender[0] : product.gender;
  const category = getProductCategory(product.name);
  const pool = imagePools[`${gender}|${category}`] || [];

  return pool.slice(0, 2).map((url) => ({
    url,
    altText: `${product.name} product image`
  }));
};

module.exports = { getProductCategory, getProductImages };
