import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../index";
import Main from "../main";

const MainLayout = () => {
  const [isOpen, setIsOpen] =useState (true);

  const handleOpen =() =>(
    setIsOpen((prevIsOpen)=>!prevIsOpen)
  )

  return (
    <main className=" relative h-screen w-screen bg-neutral-100  flex">
      <Sidebar toggle={isOpen} handleToggle={handleOpen}/>
      <div className={`${isOpen?" ":""} h-full w-full large:w-[calc(100vw-16rem)]  duration-300 overflow-hidden`}>
        <Header />
        <Main className={'h-full w-full'}>
        <Outlet/></Main>
      </div>
    </main>
  );
};

export default MainLayout;
