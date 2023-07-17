import React, {
  ReactNode,
  useState,
  ComponentProps,
  MouseEventHandler,
} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Form } from "./form";
import { TransitionImage } from "./transitionimage";

const initialValues = {
  title: "edit",
  component: null,
  opened: false,
};

function PrimaryButton({ hometext }: { hometext: string }) {
  return (
    <button className="px-24 py-12 text-[#195B3E] bg-white font-16 font-medium rounded-lg hover:opacity-70 transition hover:duration-1000 hover:ease-in">
      {hometext}
    </button>
  );
}

function PrimaryButton1({
  hometext,
  onClick,
}: {
  hometext: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="px-24 py-12 text-[#195B3E] bg-white font-16 font-medium rounded-lg hover:opacity-70 transition hover:duration-1000 hover:ease-in mx-auto"
      onClick={onClick}>
      <Link href="./sign-up"></Link>
      {hometext}
    </button>
  );
}

export function Homepage() {
  const [state, setState] = useState<{
    title: string;
    component: ReactNode;
    opened: boolean;
  }>(initialValues);

  const { push } = useRouter();

  return (
    <div className="bg-[url(/landing.png)] bg-cover bg-center bg-no-repeat px-7.5 grid gap-y-20">
      <header>
        <nav className="flex justify-between items-center pt-68">
          <figure className="w-[clamp(90px,9vw,147px)] relative h-[clamp(28px,2.2vw,36px)]">
            <Image src="/vector.svg" alt="homepage logo" fill />
          </figure>

          <PrimaryButton hometext="Get Started" />
        </nav>
      </header>

      <article className="grid">
        <div className="pb-48">
          <h3 className="text-center font-light text-32 text-white">
            Streamline your
          </h3>
          <h2 className="text-center text-48 text-white font-bold pb-24">
            Commodity Grading Process with Ease
          </h2>

          <p className="text-center text-20 max-w-[clamp(600px,47vw,755px)] mx-auto text-white">
            With advanced algorithms and intuitive interfaces, our solution
            empowers you to efficiently evaluate quality, determine value, and
            make informed decisions.
          </p>
        </div>
        <button className="pb-65 grid place-content-center">
          <Link
            href="./sign-up"
            className="px-24 py-12 text-[#195B3E] bg-white font-16 font-medium rounded-lg hover:opacity-70 transition hover:duration-1000 hover:ease-in mx-auto"
            onClick={() => {
              push("/sign-up");
            }}>
            Get Started
          </Link>
        </button>

        <div className="relative pt-24 px-28 mx-auto bg-[#999999] rounded-t-2xl">
          <img src="/lowerimage.png" alt="" />
        </div>
      </article>
    </div>
  );
}

{
  /*  TODO 
   
   Method to learn more about Modal setting using state!
   
   <Modal title={state.title} opened={state.opened} onClose={state.close}>
          {state.component}
        </Modal> */
}
