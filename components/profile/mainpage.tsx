import Image from "next/image";
import { useContext, useState } from "react";
import React from "react";
import clsx from "clsx";
import FormEdit from "./form-edit";
import { AuthContext, IContextType } from "@/pages/_app";
import { useRouter } from "next/router";

function Mainpage() {
  const [isVisible, setIsVisible] = useState(true);
  const { authUser } = useContext(AuthContext) as IContextType;
  const { push } = useRouter();

  const [phoneNumber, setPhoneNumber] = useState("+234 810 6545 067");

  return (
    <div className="ml-[clamp(180px,14vw,200px)] w-full">
      <div className="mb-34">
        <div className="bg-[url(/profilebg.png)] mt-31 ml-31 mr-40 bg-cover h-[clamp(200px,17.4vw,278px)]"></div>
        <div className="-mt-31 ml-31 mr-40 flex bg-white rounded-b-2xl pt-2 pb-2">
          <div className="bg-white p-2 rounded-bl-2xl">
            <div className="-mt-7 rounded-bl-2xl">
              <div className="relative w-[clamp(80px,6.8vw,109px)] h-[clamp(80px,6.8vw,109px)] p-3 bg-white rounded-full">
                <Image
                  src="/ayoprofileimg1.png"
                  fill
                  alt="profile image"></Image>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full mr-40 items-center">
            <div>
              <h2 className="text-[#4A4C58] text-24 font-semibold">
                {authUser?.first_name} {authUser?.last_name}
              </h2>
              <h3 className="text-[#8F9198] text-14">{authUser?.email}</h3>
              <h3 className="text-[#8F9198] text-14">Admin</h3>
            </div>

            <button
              className="px-31 py-2 text-[#E1261C] bg-[#F2E7E6] rounded-lg logbutt"
              onClick={() => {
                localStorage.removeItem("my-details");

                push("/sign-up");
              }}>
              Log out
            </button>
          </div>
        </div>
      </div>

      <div className="p-31 profile-details ml-31 mr-40 w-[clamp(450px,37vw,600px)] mb-[clamp(60px,5vw,84px)]">
        <div className="flex gap-40 pb-48">
          <button
            className={clsx(
              "py-3 px-24 rounded-lg text-16 text-[#8F9198]",
              isVisible ? "bg-[#195B3E]  text-white" : "bg-[#F0F0F1]"
            )}
            onClick={() => {
              setIsVisible(true);
            }}>
            Profile
          </button>
          <button
            className={clsx(
              "py-3 px-24 rounded-lg text-16 text-[#8F9198]",
              isVisible ? "bg-[#F0F0F1]" : "bg-[#195B3E] text-white"
            )}
            onClick={() => {
              setIsVisible(false);
            }}>
            Edit Profile
          </button>
        </div>

        {isVisible ? (
          <section className="grid gap-[26px]">
            <div className="flex justify-between rounded-[14px] py-12 px-[21px] userid items-center">
              <h3 className="text-16 font-medium text-[#C1C2C6]">User ID</h3>
              <h2 className="text-[#4B4B4B] text-24 font-medium">
                KD/2023/1605
              </h2>
            </div>

            <div className="flex justify-between rounded-[14px] py-12 px-[21px] userid items-center">
              <h3 className="text-16 font-medium text-[#C1C2C6]">
                Phone Number
              </h3>
              <h2 className="text-[#4B4B4B] text-24 font-medium">
                {phoneNumber}
              </h2>
            </div>

            <div className="flex justify-between rounded-[14px] py-12 px-[21px] userid items-center">
              <h3 className="text-16 font-medium text-[#C1C2C6]">
                Date Joined
              </h3>
              <h2 className="text-[#4B4B4B] text-24 font-medium">14/04/2023</h2>
            </div>
          </section>
        ) : (
          <FormEdit
            setIsVisible={setIsVisible}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        )}
      </div>
    </div>
  );
}

export default Mainpage;
