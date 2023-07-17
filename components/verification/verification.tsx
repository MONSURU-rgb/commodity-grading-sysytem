import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { MdiArrowLeft } from "../arrow";

import { PinInput, Group } from "@mantine/core";

function DemoOtp({
  isInput,
  setIsInput,
}: {
  isInput?: string;
  setIsInput?: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Group position="center">
      <PinInput
        placeholder=""
        oneTimeCode
        aria-label="One time code"
        mask
        required
      />
    </Group>
  );
}

function VerificationPage(): React.JSX.Element {
  // const [isInput, setIsInput] = useState("");
  const { push } = useRouter();
  return (
    <div className="bg-[url(/sign_up_bg.png)] bg-no-repeat pt-76 w-1/2 mx-auto pb-178 px-[9%] form bg-left-bottom">
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

      <section>
        <section className="grid gap-31 max-w-fit">
          <div className="grid gap-3">
            <h2 className="text-[#4A4C58] text-32 font-semibold leading-[140%]">
              Enter Verification Code
            </h2>
            <p className="text-16 leading-[150%] font-normal">
              <span className="text-[#8F9198]">
                We just sent a 4-digit code to your email address;
              </span>
              <br />
              <span className="text-[#195B3E] font-semibold">
                ayuxxx@africaexchange.com
              </span>
            </p>
          </div>
          <form
            action="
         "
            onSubmit={(e) => {
              e.preventDefault();

              push("./new-password-page");
            }}>
            {" "}
            <div>
              <div className="w-full pb-3">
                <DemoOtp />
              </div>
            </div>
            <button
              type="submit"
              className="py-10 px-18 rounded-lg bg-[#195B3E] w-full signinbtn text-white text-center">
              Verify
            </button>
          </form>
          <div className="text-16 flex justify-center gap-2">
            <span className="text-[#4A4C58]">Didn’t see code?</span>
            <button className="text-[#195B3E] font-semibold">
              Resend code
            </button>
          </div>
          <Link href="./sign-up" className="flex justify-center">
            <div className="flex gap-1 place-self-center">
              <MdiArrowLeft />
              <span className="text-16 font-medium text-[#4A4C58]">
                Back to Sign in
              </span>
            </div>
          </Link>
        </section>
      </section>
    </div>
  );
}

export default VerificationPage;
