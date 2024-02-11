import Categories from "./components/Categories";
import Products from "./components/Products";

const page = () => {
  return (
    <main>
      <div className="flex justify-between  container p-14">
        <Products />
        <Categories />
      </div>
    </main>
  );
};

export default page;
