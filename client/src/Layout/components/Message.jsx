import React from "react";
import { BsSearch, BsFillChatSquareFill } from "react-icons/bs";
import { Dropdown, Content } from "../../interface/dropdown";
import { messages } from "../../data/dummyData";

const Icon = () => {
  return (
    <div className='h-12 w-12 rounded-full flex items-center justify-center bg-neutral-200 text-neutral-600'>
      <BsFillChatSquareFill size={21}/>
    </div>
  )
}

const Message = () => {
  return (
    <Dropdown className={"absolute right-0 z-10 mt-2  origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-4"}  icon={<Icon/>}>
      <div className=" relative flex items-center h-10 w-full rounded-full mb-6">
        <input
          type="text"
          name="price"
          id="pribce"
          className="w-full bg-neutral-50 rounded-full shadow-md h-10 px-5  outline-none text-neutral-500 outline-offset-0 focus:bg-neutral-100 active:bg-neutral-200 focus:outline-neutral-200/80 ease-in-out duration-200 "
          placeholder="Search Messages"
        />
        <div className="absolute right-0  text-neutral-400 h-full w-16 hover:bg-neutral-200 hover:text-neutral-500 ease-in-out duration-200 delay-75 rounded-full flex items-center justify-center">
          <BsSearch size={21} />
        </div>
      </div>
      <div className=" max-h-[24rem] overflow-y-scroll">
        {messages && messages
          ? messages.map((message) => (
              <Content className={'py-2'} key={message.id} link={message.link}>
                <div className="w-full flex gap-4 px-2 items-center">
                  <div className="relative h-14 w-14 rounded-full ">
                    <img
                      className="absolute h-full w-full rounded-full object-cover"
                      src={message.src}
                      alt="ProfilePicture"
                    />
                    {message.isOnline && message.isOnline ? (
                      <div className="absolute h-3 w-3 right-1 bottom-0 rounded-full bg-green-400 ring-2 ring-white"></div>
                    ) : (
                      <div className="absolute h-3 w-3 right-1 bottom-0 rounded-full bg-red-500 ring-2 ring-white"></div>
                    )}
                  </div>
                  <div>
                    <p className="font-light text-base">{message.user}</p>
                    <p
                      className={`${
                        message.isRead
                          ? "text-neutral-400 font-light"
                          : "text-neutral-600 font-medium"
                      } w-56 text-sm  text-neutral-500`}
                    >
                      {message.messages}
                    </p>
                  </div>
                </div>
              </Content>
            ))
          : null}
      </div>
      <hr />
      <button className="w-full text-sm text-center mt-2">
        See All Messages
      </button>
    </Dropdown>
  );
};

export default Message;
