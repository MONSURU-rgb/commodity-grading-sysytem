import { PasswordInput } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

function NewSSOInput({ label }: { label: string }) {
  return (
    <div className="">
      <PasswordInput
        placeholder="*************"
        label={label}
        description=""
        withAsterisk
        required
      />
    </div>
  );
}

function SSOPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { push } = useRouter();

  return (
    <div className="bg-[url(/ssobg.png)] bg-cover pt-100 flex gap-150">
      <section className="pl-100 flex flex-col gap-150 items-start sso">
        <figure className="relative w-100 h-31">
          <Image
            src="/afex-logo.svg"
            alt="Afex logo"
            fill
            className="object-fill"></Image>
        </figure>
        <article className="flex flex-col gap-40 justify-center items-center">
          <figure className="relative w-310 h-300">
            <Image src="/secure-login.png" alt="secure login" fill></Image>
          </figure>

          <article className="flex flex-col justify-center">
            <h2 className="text-[#54565B] text-28 font-semibold leading-[140%]">
              Streamline your Login Experience with SSO{" "}
            </h2>

            <p className="text-[#9FA19C] text-16 max-w-[520px] text-center flex flex-col justify-center">
              <span>
                Welcome to our Single Sign-On login page! With just one set of
                login
              </span>
              <span>
                credentials, you can now access all your favorite applications
                and services
              </span>{" "}
              <span>
                without the need to enter multiple usernames and passwords
              </span>
            </p>
          </article>
        </article>
      </section>

      <section className="p-40 mt-100 ssoform flex flex-col gap-48 min-w-[386px] pb-40 mb-150 sso">
        <h2 className="pt-26 text-24 font-semibold text-[#54565B]">
          Sign in with SSO
        </h2>
        <form
          action="
       "
          className="flex flex-col gap-31"
          onSubmit={(e) => {
            e.preventDefault();
            if (email === "alalade191@gmail.com") {
              push("/dashboard");
            }
          }}>
          {" "}
          <fieldset className="grid gap-2">
            <label
              htmlFor="email"
              className="text-[#2C2F3C] text-16 font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="py-10 px-16 inputdiv">
              <input
                type="email"
                placeholder="Enter email address"
                required
                className="w-full focus:outline-0 text-14"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </fieldset>
          <article className="flex flex-col gap-56">
            <fieldset className="grid gap-12">
              <NewSSOInput label="Password" />
              <Link
                href="./reset-page"
                className="text-[#C81107] text-12 font-semibold justify-self-end">
                Forgot Password?
              </Link>
            </fieldset>

            <button className="bg-[#C81107] text-12 font-semibold text-white py-16 w-full text-center rounded-lg mb-80">
              Sign In
            </button>
          </article>
        </form>
      </section>
    </div>
  );
}

export default SSOPage;
