"use client";

import {
  Environments,
  initializePaddle,
  Paddle,
  CheckoutOpenLineItem,
} from "@paddle/paddle-js";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface PaymentComponentProps {
  items: CheckoutOpenLineItem[];
  children: React.ReactNode;
}

export default function PaymentComponent({
  items,
  children,
}: PaymentComponentProps) {
  const [paddle, setPaddle] = useState<Paddle>();

  useEffect(() => {
    initializePaddle({
      environment: process.env.NEXT_PUBLIC_PADDLE_ENV! as Environments,
      token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
    }).then((paddle) => setPaddle(paddle));
  }, []);

  const handleCheckout = () => {
    if (paddle) {
      paddle.Checkout.open({
        items,
        settings: {
          variant: "one-page",
          displayMode: "overlay",
          successUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/sucess`,
        },
      });
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      className="flex-1 p-5 justify-center bg-primary max-w-[300px] cursor-pointer font-bold"
    >
      {children}
    </Button>
  );
}
