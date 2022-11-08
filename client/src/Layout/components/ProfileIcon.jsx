import React from "react";
import { Content, Dropdown } from "../../interface/dropdown";
import {BsPersonCircle, BsFillGearFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

const Icon = () => {
  return (
    <div className="h-12 w-12 rounded-full flex items-center justify-center bg-neutral-200 text-neutral-600 ">
      <div className="h-full aspect-square object-cover overflow-hidden rounded-full ">
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="ProfilePicture"
        />
      </div>
    </div>
  );
};
const ProfileIcon = () => {
  return (
    <Dropdown icon={<Icon />}>
      <div className="w-56 p-4 ">
        <Content link="/">
          <div className="flex items-center p-2 gap-3">
            <BsPersonCircle size={18} />
            <p>View Profile</p>
          </div>
        </Content>
        <Content link="/">
          <div className="flex items-center p-2 gap-3">
            <BsFillGearFill size={18} />
            <p>Account Settings</p>
          </div>{" "}
        </Content>
        <Content link="/">
          <div className="flex items-center p-2 gap-3">
            <AiOutlineLogout size={18} />
            <p>Log Out</p>
          </div>
        </Content>
      </div>
    </Dropdown>
  );
};

export default ProfileIcon;
