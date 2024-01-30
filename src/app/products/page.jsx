import Features from "@/components/Products/Features";
import ProductsPage from "@/components/Products/Prodeucts";
import React from "react";

const Products = () => {
  return (
    <div className="bg-gradient-to-b from-[#262A4B] via-[#31586D] to-[#419A9F]">
      <ProductsPage />
      <Features />
    </div>
  );
};

export default Products;
