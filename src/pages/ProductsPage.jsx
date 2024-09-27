import React, { useEffect, useState } from "react";
import ProductsService from "../services/productsService";
import SingleProductPage from "./ProductCard";
import LoadingComponent from "../components/LoadingComponent";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";

function ProductsPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => {
        setAllProducts(res.data.products);
        setIsLoading(true);
        toast.success("Stigli su podaci");
      })
      .catch((err) => console.log(err));
  }, []);
  return isLoading ? (
    <div className="container mx-auto flex jusify-center flex-wrap gap-6">
      {allProducts.map((prod, i) => {
        return <ProductCard product={prod} id={i} key={i} />;
      })}
    </div>
  ) : (
    <LoadingComponent />
  );
}

export default ProductsPage;
