import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsService from "../services/productsService";
import LoadingComponent from "../components/LoadingComponent";

function SingleProductPage() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    ProductsService.getSingleProduct(id)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCurrentImage(i) {
    setCurrentImage(i);
  }

  return isLoading ? (
    <div className="container mx-auto">
      <div>
        <img src={product.images[currentImage]} className="w-[300px] h-[300px] object-contain" alt="" />
      </div>
      <div className="flex gap-2">
        {product.images.map((img, i) => {
          return (
            <img
              key={i}
              className="w-[100px]"
              src={img}
              alt=""
              onClick={() => handleCurrentImage(i)}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <LoadingComponent />
  );
}

export default SingleProductPage;
