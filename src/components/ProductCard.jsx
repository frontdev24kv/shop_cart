import React from "react";

const ProductCard = ({ product, addGoodToCart }) => {
  const { name, price, quantity, description } = product;

  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg w-100">
      <div className="mb-4">
        <h3 className="text-lg font-semibold leading-snug text-slate-900">
          {name}
        </h3>

        <div className="mt-2 flex items-baseline justify-between gap-3">
          <h4 className="text-xl font-bold text-slate-900">{price} $</h4>
          <p className="text-sm text-slate-500">{quantity}</p>
        </div>
      </div>

      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      <button
        onClick={() => addGoodToCart(product)}
        type="button"
        className="mt-auto inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 active:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Додати до кошика
      </button>
    </div>
  );
};

export default ProductCard;
