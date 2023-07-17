import React, { Dispatch, SetStateAction } from "react";

type SetIsVisibleProp = Dispatch<SetStateAction<boolean>>;
type setPhoneNumberProp = Dispatch<SetStateAction<string>>;

function FormEdit({
  setIsVisible,
  phoneNumber,
  setPhoneNumber,
}: {
  setIsVisible: SetIsVisibleProp;
  phoneNumber: string;
  setPhoneNumber: setPhoneNumberProp;
}) {
  return (
    <form action="" className="grid gap-26">
      <fieldset
        className="py-3 px-5 flex flex-col w-full"
        style={{
          borderRadius: "14.205px",
          border: "0.888px solid #DADADD",
        }}>
        <div
          className="text-16 font-medium
                text-[#C1C2C6] focus:outline-0">
          Phone Number
        </div>

        <input
          type="tel"
          placeholder={phoneNumber}
          className="text-[#4B4B4B] text-24 font-medium focus:outline-0"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </fieldset>

      <button
        className="px-24 py-12 bg-[#195B3E] text-white rounded-lg w-fit"
        onClick={() => {
          setIsVisible(true);
        }}>
        Save Edit
      </button>
    </form>
  );
}

export default FormEdit;
