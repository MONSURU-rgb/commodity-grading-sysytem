import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { PasswordInput } from "@mantine/core";
import { MdiArrowLeft } from "../arrow";
import { ToastContainer, toast } from "react-toastify";

function NewPWord({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="">
      <PasswordInput
        placeholder="••••••••"
        label={label}
        description=""
        withAsterisk
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        required
        classNames={{
          root: "",
          input: "!h-[44px] !text-center flex items-center",
          innerInput: "!self-center !focus:outline !focus:outline-0 !h-full",
        }}
      />
    </div>
  );
}

function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { push } = useRouter();
  return (
    <div className="bg-[url(/sign_up_bg.png)] bg-no-repeat pt-76 w-1/2 mx-auto pb-178 px-[9%] min-h-screen form bg-left flex flex-col justify-center">
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
              Set new password
            </h2>
            <p className="text-16 leading-[150%] font-normal">
              Create a new password. Your new password must be different to
              previously used passwords.
            </p>
          </div>

          <form
            className="grid gap-24"
            onSubmit={(e) => {
              e.preventDefault();
              if (newPassword === confirmPassword) {
                push("/reset-page");
              } else {
                toast.error("Please enter your new password again.");
              }
            }}>
            <fieldset className="grid gap-2">
              <NewPWord
                label="Password"
                value={newPassword}
                setValue={setNewPassword}
              />
            </fieldset>

            <fieldset className="grid gap-2">
              <NewPWord
                label="Confirm Password"
                value={confirmPassword}
                setValue={setConfirmPassword}
              />
            </fieldset>

            <button
              className="py-10 px-18 rounded-lg bg-[#195B3E] signinbtn text-white"
              type="submit">
              Submit
            </button>
          </form>
        </section>

        <Link href="./sign-up" className="flex justify-center">
          <div className="pt-31 flex gap-1 place-self-center">
            <MdiArrowLeft />
            <span className="text-16 font-medium text-[#4A4C58]">
              Back to Sign in
            </span>
          </div>
        </Link>
      </section>
      <ToastContainer />
    </div>
  );
}

export default NewPassword;
