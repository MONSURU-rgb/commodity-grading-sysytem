import React from "react";
import VerificationPage from "./verification";
import { TransitionImage } from "../transitionimage";

function Verification(): React.JSX.Element {
  return (
    <div className="flex rounded-2xl bg-white h-screen">
      <VerificationPage />
      <TransitionImage />
    </div>
  );
}

export default Verification;
