import React, { useState } from "react";
import { Form } from "./form";
import { TransitionImage } from "./transitionimage";
import Reset from "./reset";

export default function SignUp() {
  const [state, setState] = useState(true);
  return (
    <div className="flex rounded-2xl bg-white h-screen">
      <Form />
      <TransitionImage />
    </div>
  );
}
