import { useRouter } from "next/router";

const DetailProductPage = () => {
  const { query } = useRouter();
  return (
    <div className="">
      <h1>Detail Product</h1>
      <p>Product: {query.id}</p>
    </div>
  )
}

export default DetailProductPage;