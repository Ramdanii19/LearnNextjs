import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login")
    }
  }, [])
  return (
    <div className="" >
      <h1>Product Pagef</h1>
    </div >
  )
};

export default ProductPage;