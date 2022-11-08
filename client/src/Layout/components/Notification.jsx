import React from "react";
import { Content, Dropdown } from "../../interface/dropdown";
import { BsBellFill } from "react-icons/bs";
// import { RiMoreLine } from "react-icons/ri";
import { notifications } from "../../data/dummyData";

const Notification = () => {

  const notificationsArray=[...notifications]
  // const [notificationsArray, setNotificationsArray] = useState([
  //   ...notifications,
  // ]);

  // const handleUnread = () => {
  //   const notification = notifications.filter((item) => item.isRead === false);
  //   setNotificationsArray((notificationsArray) => notification);
  // };
  // const handleAll = () => {
  //   setNotificationsArray((notificationsArray) => notifications);
  // };

  return (
    <>
      <Dropdown
        className={
          "absolute right-0 z-10 mt-4  origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-4"
        }
        icon={<Icon />}
      >
         <div className=" max-h-[24rem] overflow-y-scroll">
        {notificationsArray &&
          notificationsArray.map((notice) => (
            <Content key={notice.id} link={notice.link}>
              <div className="w-96 p-2 flex justify-between items-center gap-3">
                <div className="pr-2 grid grid-cols-6 w-80">
                  <div className="col-span-1 h-10 w-10 relative rounded-full bg-gray-300">
                    <div className={`absolute bottom-0 left-0 h-3 w-3 rounded-full bg-blue-500 ${notice.isRead?"invisible":"visible"}`}> </div>
                  </div>
                  <p
                    className={` col-span-5 ${
                      notice.isRead ? "font-light" : " font-medium"
                    } `}
                  >
                    {notice.notice}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-xs text-neutral-500 ">14m</div>
                </div>
              </div>
            </Content>
          ))}  
         </div>
      </Dropdown>
    </>
  );
};

export default Notification;

const Icon = () => {
  return (
    <div className="h-12 w-12 rounded-full flex items-center justify-center bg-neutral-200 text-neutral-600">
      <BsBellFill size={21} />
    </div>
  );
};
