import React from "react";
import Image from "next/image";
import { MdiArrowLeft } from "./arrow";
import Link from "next/link";

function Reset() {
  return (
    <div className="bg-[url(/sign_up_bg.png)] bg-no-repeat pt-76 w-1/2 mx-auto pb-178 px-[9%] max-h-screen form bg-left-bottom h-screen">
      <header className="flex gap-1 pb-150">
        <div className="relative w-31 h-31">
          <Image src="/logo.png" alt="logo" fill></Image>
        </div>
        <div>
          <h2 className="uppercase font-bold text-[#195B3E] leading-[1.1]">
            Commodity
          </h2>
          <h4 className="text-12 text-[#195B3E] leading-[1.1]">
            Grading System
          </h4>
        </div>
      </header>

      <section className="max-w-[360px] grid place-content-center">
        <div className="relative w-56 h-56 mb-24 flex justify-center place-self-center">
          <Image src="/featuredicon.png" fill alt="reset logo"></Image>
        </div>
        <div className="grid gap-3 place-content-center pb-31">
          <h2 className="text-[#4A4C58] text-32 font-semibold place-self-center">
            Password reset
          </h2>
          <p className="text-[#8F9198] text-16 text-center">
            Your password has been successfully reset. Click below to log in
            magically.
          </p>
        </div>

        <Link
          href="./sign-up"
          className="py-10 px-18 rounded-lg bg-[#195B3E] signinbtn text-white text-center">
          <button>Continue</button>
        </Link>

        <Link href="./sign-up" className="place-self-center">
          <div className="pt-31 flex gap-1 place-self-center">
            <MdiArrowLeft />
            <span className="text-16 font-medium text-[#4A4C58]">
              Back to Sign in
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default Reset;
