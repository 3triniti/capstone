import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SpecialEvents2 from "../Images/specialEvents2.jpg";

const SpecialEvents = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="z-10 bg-service2 bg-center w-screen h-96 bg-no-repeat font-tangerine font-normal text-7xl text-teal-500 text-center pt-72">
          Special Events
        </div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <div>
          <h1 className="font-open font-thin text-4xl ml-10 mr-10 text-center text-teal-400 mt-8">
            All moments have meaning and importance, they are special for the
            ones involved
          </h1>
        </div>
        <div>
          <div className="flex pt-10 mb-10">
            <img src={SpecialEvents2} className=" w-80 h-96 pl-8" alt="" />
            <div className="">
              <p className="font-open font-thin text-base text-black text-left ml-10 mr-8 mb-10">
                Tea ceremony is used as a purification ritual for the mind and
                spirit, before a wedding, going to war, or important milestones
                in life. We also offer ceremonies for more modern affairs, such
                as, business meetings, birthday parties, retreats,and special
                announcements. We offer tea ceremony as a spiritual cleansing
                for birthdays, and other important moments in life, etc. We also
                perform ceremonies for casual home parties or any other events.
              </p>
              <p className="font-open font-thin text-base text-black text-left ml-10 mr-8">
                Special Events, such as baby showers and marriage engagement
                parties are smaller events, but are equally important milestones
                that are sacred to the most important members of that event.
                These engagements provide platforms for life long bondings. Tea
                Ceremony is a ritual that offers the effects of a christening,
                and cements a bonding for all envolved. There are also going
                away parties that could be very emotional, and cause feelings of
                loss. Tea Ceremony can be a way to make sure those bonds are
                felt in a deeper sense, and remind all envolved that there is
                always path to return. Business affairs require a level of
                communication and concentration. Envolving Tea Ceremony in
                business events provides a calming presence that can put all at
                ease and open channels of communication. Regardless of the
                purpose or how special the events is, Tea Ceremony is supportive
                activity that combines mind, body, and spirit.
              </p>
            </div>
          </div>
          <h1 className="font-open font-thin text-4xl text-right text-teal-400 mb-20 mr-20 -mt-24">
            Create everlasting memories
          </h1>
          <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SpecialEvents;