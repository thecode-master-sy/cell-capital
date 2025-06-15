"use client";
import { ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-black text-white  pt-16 overflow-hidden">
      <div className="grid grid-cols-6 lg:grid-cols-12 md:grid-cols-8 px-4 gap-y-16">
        <div className="lg:col-span-7 col-span-full">
          <h2 className="text-heading-one font-bold">Get Free Grant Updates</h2>

          <form className="mt-7 max-w-[600px]">
            <div className="w-full border-b border-cellcapital-light pb-4 justify-between flex">
              <input
                placeholder="Your Email"
                className=" flex-1 focus:outline-none foucs:border-none text-heading-paragraph"
              />
              <button className="cursor-pointer text-heading-one">
                <ArrowRight size={30} />
              </button>
            </div>
            <p className="text-caption text-muted-foreground max-w-[45ch] mt-4">
              By submitting your email, you’llget grant updates directly in your
              inbox from cell capital. You can unsubscribe at any time.
            </p>
          </form>
        </div>

        <div className="uppercase text-caption lg:col-start-9 lg:col-span-2">
          <span className="text-muted-foreground">Pages</span>

          <ul className="flex gap-1 flex-col mt-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/grants">Secure grants</Link>
            </li>
            <li>
              <Link href="/business-plans">Business plans</Link>
            </li>
            <li>
              <Link href="/custom-quote">Custom quote</Link>
            </li>
          </ul>
        </div>

        <div className="uppercase text-caption lg:col-start-11 col-start-3">
          <span className="text-muted-foreground">social</span>

          <ul className="flex gap-1 flex-col mt-2">
            <li>
              <a href="https://linkedin.com">Linkedin</a>
            </li>
            <li>
              <a href="https://twitter.com"> x(twitter)</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://tiktok.com">Tiktok</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <div className="px-4 pb-2 flex justify-between items-center ">
          <span className="text-caption uppercase">©2025 Cell Capital</span>
          <span className="uppercase  text-caption cursor-pointer">
            Privacy Policy
          </span>
          <span className="flex gap-2 items-center cursor-pointer text-caption  uppercase">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </span>
        </div>
        <div className=" border-t border-cellcapital-light"></div>
      </div>

      <div className="py-3">
        <h1 className="font-bold text-[20vw] leading-[100%] text-primary text-center">
          Cell Capital
        </h1>
      </div>
    </footer>
  );
}
