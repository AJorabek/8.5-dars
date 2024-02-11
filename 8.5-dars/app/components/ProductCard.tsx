const ProductCard = () => {
  return (
    <div className="border border-grayshade rounded-lg p-5">
      <img src="" alt="" width={250} height={200} />
      <h3 className="font-bold">title</h3>
      <p className="truncate mb-3">paragraph</p>
      <span className="px-2 py-1 bg-slate-400 rounded-full mb-2 inline-block">
        category
      </span>
      <div className="flex justify-between">
        <span>$ 1,200$</span>
        <button className="bg-purpleshade px-4 py-2 rounded-lg mb-2 text-white">
          add to card
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
