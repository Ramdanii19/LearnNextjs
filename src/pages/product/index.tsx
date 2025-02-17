import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login")
    }
  }, []);

  useEffect(() => {
    fetch('/api/product')
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data)
      });
  }, []);
  return (
    <div className="" >
      <h1>Product Pagef</h1>
      {products.map((product: productType) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div >
  )
};

export default ProductPage;