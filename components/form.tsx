import React, { FormEvent, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext, IContextType } from "@/pages/_app";
import { LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAmp } from "next/amp";

export function Form() {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthUser } = useContext(AuthContext) as IContextType;

  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://commodity-grading-system.onrender.com/api/login/",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      console.log(data);
      setAuthUser(data);
      localStorage.setItem("my-details", JSON.stringify(data));
      data.token && push("/dashboard");

      toast.success("Logged in successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      toast.error("Incorrect Credentials");
    }
  };

  // HandleSubmit function

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchDetails();
    console.log(email, password);
  };
  return (
    <div className="bg-[url(/sign_up_bg.png)] bg-no-repeat pt-76 w-1/2 mx-auto pb-178 px-[9%] min-h-screen overflow-y-scroll form bg-left-bottom flex flex-col justify-center">
      <header className="flex gap-1 pb-69">
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

      <section>
        <section className="grid gap-31">
          <div className="grid gap-1">
            <h2 className="text-[#4A4C58] text-32 font-semibold leading-[140%]">
              Sign in
            </h2>
            <p className="text-16 leading-[150%] font-normal">
              Enter your email and password to sign in!
            </p>
          </div>

          <form className="grid gap-24" onSubmit={HandleSubmit}>
            <fieldset className="grid gap-2">
              <label
                htmlFor="email"
                className="text-[#2C2F3C] text-16 font-medium">
                Your work Email<span className="text-red-500">*</span>
              </label>
              <div className="py-10 px-16 inputdiv">
                <input
                  type="email"
                  placeholder="e.g mail@africaexchange.com"
                  required
                  className="w-full focus:outline-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </fieldset>

            <fieldset>
              <PasswordInput
                placeholder="••••••••"
                label="Password"
                description=""
                withAsterisk
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
                required
                classNames={{
                  root: "!focus:outline !focus:outline-0",
                  input:
                    "!h-[44px] !text-center flex items-center !outline !outline-0 !focus:outline-0",
                  innerInput:
                    "!self-center !focus:outline-0 !h-full outline active:outline-0",
                }}
              />
            </fieldset>

            <fieldset className="flex justify-between ">
              <label
                htmlFor="remember_password"
                className="text-16 text-[#8F9198] flex gap-2 focus:outline-0">
                <input type="checkbox" className="bg-[#195B3E]" remember-me />{" "}
                <span>Remember me</span>
              </label>
              <Link
                href="./password-reset-page"
                className="text-[#195B3E] text-16 font-medium">
                Forgot password?
              </Link>
            </fieldset>

            <button
              className="py-10 px-18 rounded-lg bg-[#195B3E] signinbtn text-white"
              type="submit">
              Sign in
            </button>
          </form>
        </section>

        <p className="text-[#4A4C58] text-12 font-bold uppercase leading-[160%] py-16 text-center">
          OR
        </p>

        <Link href="/sso" className=" text-center">
          <button className="py-10 px-18 rounded-lg bg-white gap-1 signinbtn1 flex w-full relative justify-center items-center">
            <span>Sign in with</span>
            <img src="/afex_logo.png" className="absoluteS" /> <span>SSO</span>
          </button>
        </Link>
      </section>
      <LoadingOverlay visible={loading} />
      <ToastContainer />
    </div>
  );
}
