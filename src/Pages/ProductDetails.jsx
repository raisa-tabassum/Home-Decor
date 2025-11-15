import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import { updateList } from "../Utils/localStorage";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  //   console.log(products);

  const product = products.find((p) => p.id === Number(id));

  if (loading) {
    return <p>Loading...</p>;
  }
  //   console.log(product);
  const { name, image, category, price, description } = product || {};

  //   const handleAddToWishlist = () => {
  //     const existingList = JSON.parse(localStorage.getItem("wishlist"));
  //     let updatedList = [];
  //     if (existingList) {
  //       const isDuplicate = existingList.some((p) => p.id === product.id);

  //       product.quantity = product.quantity + 1;

  //       if (isDuplicate) return alert("Sorry,already added");
  //       updatedList = [...existingList, product];
  //     } else {
  //       updatedList.push(product);
  //     }
  //     localStorage.setItem("wishlist", JSON.stringify(updatedList));
  //   };

  return (
    <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="h-84 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Category : {category}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => updateList(product)}
            className="btn btn-outline"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
