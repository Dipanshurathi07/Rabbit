import React, { useState } from "react";
import { useNavigate } from "react-router";

const EditProduct = () => {
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    material: "",
    gender: "",
    images: [
      { url: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=880" },
      { url: "https://images.unsplash.com/photo-1635650804060-bb009bcb2ea5?w=600" },
    ],
  });

  /* SIMPLE INPUT HANDLER */
  const handleInput = (e) => {
    const { name, value } = e.target;
      setProductData((prev) => ({
        ...prev,
        [name]: value,
      }));
  };

  /* IMAGE UPLOAD */
  const handleImageUpload = (e) => {
    const files = e.target.files;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/products");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-lg border rounded-md">
      <h1 className="mb-6 text-3xl font-bold">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* PRODUCT NAME */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            name="name"
            value={productData.name}
            onChange={handleInput}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            rows="4"
            name="description"
            value={productData.description}
            onChange={handleInput}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* PRICE */}
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInput}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* COUNT IN STOCK */}
        <div>
          <label className="block text-sm font-medium mb-1">Count in Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleInput}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* SKU */}
        <div>
          <label className="block text-sm font-medium mb-1">SKU</label>
          <input
            name="sku"
            value={productData.sku}
            onChange={handleInput}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <input
            name="category"
            value={productData.category}
            onChange={handleInput}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* BRAND */}
        <div>
          <label className="block text-sm font-medium mb-1">Brand</label>
          <input
            name="brand"
            value={productData.brand}
            onChange={handleInput}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* SIZES */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Sizes (comma-separated)
          </label>
          <input
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={handleInput}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* COLORS */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Colors (comma-separated)
          </label>
          <input
            name="colors"
            value={productData.colors.join(", ")}
            onChange={handleInput}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* MATERIAL */}
        <div>
          <label className="block text-sm font-medium mb-1">Material</label>
          <input
            name="material"
            value={productData.material}
            onChange={handleInput}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* GENDER */}
        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            name="gender"
            value={productData.gender}
            onChange={handleInput}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select</option>
            <option>Men</option>
            <option>Women</option>
            <option>Unisex</option>
          </select>
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block text-sm font-medium mb-2">Upload Image</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />

          <div className="flex gap-3 mt-3">
            {productData.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt="preview"
                className="w-16 h-16 object-cover border rounded"
              />
            ))}
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
