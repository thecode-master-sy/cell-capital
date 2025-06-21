"use client";
import { Minus, Plus, X } from "lucide-react";

import { CartItem, useCart } from "./providers/cart-provider";

export default function CartItemComponent({ product }: { product: CartItem }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  return (
    <div className="p-4 bg-background-gray relative rounded-sm flex gap-4">
      <img
        className="w-[100px] aspect-[1/1] rounded-sm"
        src={`/${product.image}`}
      />

      <div>
        <p className="text-paragraph">{product.name}</p>

        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => decreaseQuantity(product.id)}
            className="flex justify-center items-center rounded-full w-[28px] h-[28px] cursor-pointer"
          >
            <Minus size={14} />
          </button>

          <span>{product.quantity}</span>

          <button
            onClick={() => increaseQuantity(product.id)}
            className="flex justify-center items-center rounded-full w-[28px] h-[28px] cursor-pointer"
          >
            <Plus size={14} />
          </button>
        </div>

        <div className="mt-4">
          <p className="text-paragraph font-bold tracking-wider">
            ${product.price * product.quantity}
          </p>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(product.id)}
        className="absolute top-2 right-2 cursor-pointer"
      >
        <X size={14} />
      </button>
    </div>
  );
}
