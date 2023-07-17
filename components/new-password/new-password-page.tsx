import React from "react";
import NewPassword from "./new-password";
import { TransitionImage } from "../transitionimage";

function PasswordPage() {
  return (
    <div className="flex rounded-2xl bg-white min-h-screen">
      <NewPassword />
      <TransitionImage />
    </div>
  );
}

export default PasswordPage;
