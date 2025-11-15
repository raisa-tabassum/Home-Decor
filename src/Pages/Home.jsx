import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";

const Home = () => {
  // const products = useLoaderData();
  const {products, loading, error} = useProducts();
  // console.log(data);
  const featuredProducts = products.slice(0, 6);
  console.log(products);
  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <h1 className="text-3xl font-semibold">Featured Products</h1>
        <Link to="/products" className="btn btn-outline">
          See All Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
