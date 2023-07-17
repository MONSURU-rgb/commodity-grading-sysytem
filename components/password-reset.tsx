import React, { useContext, useState } from "react";
import Image from "next/image";
import { MdiArrowLeft } from "./arrow";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext, IContextType } from "@/pages/_app";

function Password() {
  const [email, setEmail] = useState("");
  const { setAuthUser } = useContext(AuthContext) as IContextType;

  const password = async () => {
    try {
      const resp = await fetch(
        "https://expertportal-production.up.railway.app/api/auth/forget-password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await resp.json();
      if (!data?.error) {
        push("/verification");
      }

      setAuthUser(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const { push } = useRouter();
  return (
    <div className="bg-[url(/sign_up_bg.png)] bg-no-repeat pt-76 w-1/2 mx-auto pb-178 px-[9%] max-h-screen bg-bottom">
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
          <Image src="/key.png" fill alt="password reset logo"></Image>
        </div>
        <div className="grid gap-3 place-content-start pb-31">
          <h2 className="text-[#4A4C58] text-32 font-semibold place-self-start">
            Forgot password?
          </h2>
          <p className="text-[#8F9198] text-16 text-center">
            No worries, we’ll send you reset instructions.
          </p>
        </div>

        <form
          action="
              "
          onSubmit={(e) => {
            e.preventDefault();
            password();
          }}>
          <fieldset className="grid gap-2 pb-24">
            <label
              htmlFor="email"
              className="text-[#2C2F3C] text-16 font-medium">
              Email address <span className="text-red-500">*</span>
            </label>
            <div className="py-10 px-16 inputdiv">
              <input
                type="email"
                placeholder="e.g mail@africaexchange.com"
                required
                className="w-full focus:outline-0 text-16"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </fieldset>

          <button className="py-10 px-18 rounded-lg bg-[#195B3E] signinbtn text-white text-16 w-full">
            Reset password
          </button>
        </form>

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

export default Password;
