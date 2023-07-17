import React, { useState } from "react";
import { TransitionImage } from "./transitionimage";
import Reset from "./reset";
import Password from "./password-reset";

export default function ResetPage() {
  return (
    <div className="flex rounded-2xl bg-white">
      <Reset />
      <TransitionImage />
    </div>
  );
}
