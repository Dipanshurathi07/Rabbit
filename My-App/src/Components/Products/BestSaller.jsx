import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import UmayAlsoLike from "./UmayAlsoLike";
import TopWearForWomens from "./TopWearForWomens";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fatchSimilarProducts, fatchProductById ,fetchTopWearProducts} from "../../Redux/Slice/productSlice";
import { addToCart } from "../../Redux/Slice/cartSlice";

// const similarProduct = []; // agar API se laoge to yaha remove kar dena

// const topWearForWomens = [
//   {
//     _id: 1,
//     name: "Women Floral Dress",
//     price: 1899,
//     images: [{ url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c", altText: "Women Floral Dress" }]
//   },
//   {
//     _id: 2,
//     name: "Women Casual Top",
//     price: 799,
//     images: [{ url: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03", altText: "Women Casual Top" }]
//   },
//   {
//     _id: 3,
//     name: "Women Denim Jacket",
//     price: 2499,
//     images: [{ url: "https://images.unsplash.com/photo-1520975922327-6c6a7a9b7c88", altText: "Women Denim Jacket" }]
//   },
//   {
//     _id: 4,
//     name: "Women Crop Top",
//     price: 599,
//     images: [{ url: "https://images.unsplash.com/photo-1554568218-0f1715e72254", altText: "Women Crop Top" }]
//   },
//   {
//     _id: 5,
//     name: "Women Hoodie",
//     price: 1599,
//     images: [{ url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", altText: "Women Hoodie" }]
//   },
//   {
//     _id: 6,
//     name: "Women Blazer",
//     price: 2999,
//     images: [{ url: "https://images.unsplash.com/photo-1593032465171-8f0c9b7b63c4", altText: "Women Blazer" }]
//   },
//   {
//     _id: 7,
//     name: "Women T-Shirt",
//     price: 499,
//     images: [{ url: "https://images.unsplash.com/photo-1520974735194-6c3bfa7a17c0", altText: "Women T-Shirt" }]
//   },
//   {
//     _id: 8,
//     name: "Women Shirt",
//     price: 999,
//     images: [{ url: "https://images.unsplash.com/photo-1520974735194-3b1c5b6f1c1b", altText: "Women Shirt" }]
//   }
// ];

const BestSaller = ({productId}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const {id} = useParams();
  const { topWearProducts, selectedProduct, similarProducts, loading, error } = useSelector(
  (state) => state.product
);
  const {guestId,user} = useSelector((state)=>state.auth);
  const userId = user?._id;
  const [mainImage, setMainImage] = useState("");
  const [count, setCount] = useState(1);
  const [selectSize, setSelectSize] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  
  const safeColors = Array.isArray(selectedProduct?.colors) ? selectedProduct.colors : [];
  const safeSizes = Array.isArray(selectedProduct?.sizes) ? selectedProduct.sizes : [];

  const productFetchId =  productId || id;
  const productOptions = [selectedProduct, ...(Array.isArray(similarProducts) ? similarProducts : [])]
    .filter(Boolean)
    .slice(0, 3);
  useEffect(()=>{
    if(productFetchId){
      dispatch(fatchProductById(productFetchId))
      dispatch(fatchSimilarProducts(productFetchId));
      dispatch(fetchTopWearProducts());
    }
  },[dispatch,productFetchId])
  // 🔥 set main image safely
  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
    setCount(1);
    setSelectSize("");
    setSelectColor("");
  }, [selectedProduct]);

  const HandleCart = () => {
    if (!selectColor || !selectSize) {
      toast.error("Please select color and size", { duration: 1000 });
      return;
    }

    setButtonDisabled(true);

    dispatch(addToCart({
      productId : productFetchId,
      quantity : count,
      size : selectSize,
      color : selectColor,
      guestId,
      userId
    })).then(()=>{
      toast.success("Add to Cart Successfully",{
        duration:1000
      });
    }).finally(()=>{
      setButtonDisabled(false);
    })
  };

  if (loading) return <h1 className="text-center">Loading...</h1>;
  if (error) return <h1 className="text-center">{error}</h1>;
  if (!selectedProduct) return <h1 className="text-center">No Product Found</h1>;
  
  return (
    <section className="p-6" key={productFetchId}>
      <Toaster />
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row gap-6">

          {/* LEFT IMAGES */}
          <div className="flex flex-col">
            <img
              src={mainImage}
              alt="Main"
              className="w-[400px] h-[400px] object-contain rounded-lg bg-gray-50"
            />

            <div className="flex gap-3 mt-3">
              {productOptions.map((product) => (
                <button
                  key={product._id}
                  type="button"
                  onClick={() => navigate(`/product/${product._id}`)}
                  className={`w-20 border p-1 ${product._id === selectedProduct._id ? "border-black" : "border-gray-200"}`}
                  title={`${product.name} - $${(product.discountPrice || product.price).toFixed(2)}`}
                >
                  <img
                    src={product.images?.[0]?.url}
                    alt={product.name}
                    className="w-full h-16 object-contain bg-gray-50"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div>
            <h1 className="text-2xl font-bold">{selectedProduct.name}</h1>
            {selectedProduct.discountPrice && selectedProduct.discountPrice < selectedProduct.price && (
              <p className="line-through text-gray-500">$ {selectedProduct.price.toFixed(2)}</p>
            )}
            <p className="text-xl font-semibold">$ {(selectedProduct.discountPrice || selectedProduct.price).toFixed(2)}</p>

            <p className="mt-3">{selectedProduct.description}</p>

            {/* COLORS */}
            <h3 className="mt-4">Color:</h3>
            <div className="flex gap-2">
              {safeColors.map((color, i) => (
                <div
                  key={i}
                  onClick={() => setSelectColor(color)}
                  className={`w-6 h-6 rounded-full cursor-pointer ${
                    selectColor === color ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* SIZES */}
            <h3 className="mt-4">Size:</h3>
            <div className="flex gap-2">
              {safeSizes.map((size, i) => (
                <button
                  key={i}
                  onClick={() => setSelectSize(size)}
                  className={`px-3 py-1 border ${
                    selectSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* QUANTITY */}
            <div className="flex gap-3 mt-4">
              <button onClick={() => setCount(count - 1)} disabled={count <= 1}>
                -
              </button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>

            {/* ADD TO CART */}
            <button
              onClick={HandleCart}
              className="bg-black text-white px-5 py-2 mt-4"
            >
              {buttonDisabled ? "Adding..." : "Add to Cart"}
            </button>

            {/* DETAILS */}
            <div className="mt-6">
              <p><b>Brand:</b> {selectedProduct.brand}</p>
              <p><b>Material:</b> {selectedProduct.material || "Not specified"}</p>
            </div>
          </div>
        </div>

        {/* SIMILAR */}
        <h2 className="text-center mt-10 text-xl">
          You May Also Like
        </h2>
        <UmayAlsoLike similarProduct={similarProducts} loading={loading} error={error}/>
      </div>

      {/* TOP WEAR */}
      <div className="p-4">
        <h1 className="text-center text-xl mt-6">
          Top Wears for Womens
        </h1>
        <TopWearForWomens topWear={topWearProducts} loading={loading} error={error}/>
      </div>
    </section>
  );
};

export default BestSaller;