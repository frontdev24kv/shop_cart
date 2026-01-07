import { useState } from "react";

import initialState from "./assets/products.json";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState(initialState);
  const [cart, setCart] = useState([]);

  const addGoodToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  return (
    <div className="min-h-dvh bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <a
              href="#"
              className="text-sm font-semibold text-slate-900 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            >
              Продукти
            </a>

            <a
              href="#"
              className="relative inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            >
              Кошик
              <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-slate-900 px-2 py-0.5 text-xs font-bold text-white">
                {cart.length}
              </span>
            </a>
          </nav>
        </header>
        <ul className="list-none flex flex-wrap gap-6">
          {products.map((good, i) => (
            <li key={i} className="w-full sm:w-50 lg:w-100">
              <ProductCard addGoodToCart={addGoodToCart} product={good} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
