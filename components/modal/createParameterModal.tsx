import { Modal } from "@mantine/core";
import React from "react";

interface CreateParamType {
  opened: boolean;
  close: () => void;
}

function CreateParameterModal({ opened, close }: CreateParamType) {
  return (
    <div className="create-param">
      <Modal
        opened={opened}
        onClose={close}
        title="Creating a new Parameter Name"
        centered
        classNames={{ root: "!rounded-2xl" }}>
        <div className="pt-40 flex flex-col gap-2">
          <h3 className="text-[#4A4C58] text-12">Parameter Name</h3>
          <div className="flex flex-col gap-24">
            <div
              className="p-16 text-[#C1C2C6] text-12 rounded-lg border border-[#DADADD] bg-white"
              style={{
                boxShadow:
                  "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              }}>
              <input type="text" placeholder="Enter parameter name" />
            </div>

            <button
              className="px-24 py-12 bg-[#195B3E] text-white rounded-lg w-fit"
              onClick={close}>
              Create Parameter
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CreateParameterModal;
