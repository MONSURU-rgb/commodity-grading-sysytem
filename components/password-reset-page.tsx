import React from "react";
import Password from "./password-reset";
import { TransitionImage } from "./transitionimage";
import Reset from "./reset";

function PasswordReset() {
  return (
    <div className="flex rounded-2xl bg-white h-screen">
      <Password />
      <TransitionImage />
    </div>
  );
}

export default PasswordReset;
