export const CartPage = ({ cart, setIsOpenCart, removeGood }) => {
  return (
    <div
      onClick={() => setIsOpenCart(false)}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <button
            onClick={() => setIsOpenCart(false)}
            className="text-gray-400 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Empty state */}
        {!cart.length && (
          <p className="text-center text-gray-500 py-10">
            Your cart is empty 🛒
          </p>
        )}

        {/* Cart items */}
        {cart.length > 0 && (
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {cart.map((prod) => (
              <div
                key={prod.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{prod.name}</h3>
                  <p className="text-sm text-gray-500">${prod.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300">
                    −
                  </button>

                  <span className="w-6 text-center font-medium">1</span>

                  <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300">
                    +
                  </button>
                  <button 
                  onClick={() => removeGood(prod)}
                  className='border-0 rounded bg-red-400 hover:bg-red-500 text-white px-2'
                  >
                    del
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t pt-4 mt-4 flex justify-between items-center">
            <span className="font-semibold text-lg">
              Total: $
              {cart.reduce((sum, p) => sum + p.price, 0)}
            </span>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
