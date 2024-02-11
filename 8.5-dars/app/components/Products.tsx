import ProductCard from "./ProductCard";

// const getProducts = async () => {
//   const res = await fetch("https://fakeapi.platzi.com/en/rest/products/");
//   return res.json();
// };

const Products = async () => {
  //   const products = getProducts();
  //   console.log(products);

  return (
    <div className="mt-4 grid grid-cols-2 gap-5 product-wrapper">
      <ProductCard />
    </div>
  );
};

export default Products;
