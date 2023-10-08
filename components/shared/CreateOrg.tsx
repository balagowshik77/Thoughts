"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { CreateOrganization } from "@clerk/nextjs";

const CreateOrg = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <Button className="user-card_btn" onClick={() => setPopup(true)}>
        Create
      </Button>
      {popup ? (
        <div
          className="bg-[#060605cb] z-50 top-0 left-0 fixed flex flex-col justify-center items-center h-full w-full"
          
        >
            <Button className="user-card_btn mr-[-300px] mb-4" onClick={() => setPopup(false)}>
        Close
      </Button>
          <CreateOrganization />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default CreateOrg;
