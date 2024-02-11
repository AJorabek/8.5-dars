const page = () => {
  return (
    <>
      <div className="p-5">
        <div className="flex flex-col gap-4 justify-center text-center items-center">
          <img
          width={384}
          height={384}
            src="https://react-shop-siza.vercel.app/assets/emptycart-I-xVG23o.png"
            alt="paying cart image"
          />
          <h1 className="font-serif cart-text">Your cart is empty</h1>
          <p className="font-sans">Start adding items to enjoy shopping!</p>
        </div>
      </div>
    </>
  );
};

export default page;
