import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import yukata3 from "../Images/yukata3.jpg";
import yukata from "../Images/Yukata.jpg";

const Workshops = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-yukata2 bg-center h-96 font-tangerine font-normal text-7xl text-teal-500 text-center pt-72">
          Yukata Rental
        </div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <h1 className="font-open font-thin text-4xl text-center text-teal-400 mt-12 ml-72">
          Experience the ancient ritual of Yukata wearing
        </h1>
        <div className="flex">
          <div className="font-open font-thin text-lg text-black text-left mr-10 mb-16"></div>
          <img src={yukata3} className="w-80 h-96 -mt-8" alt="" />
          <div>
            <p className="font-open font-thin text-lg text-black text-left ml-10 mr-10 mb-4 mt-12">
              Yukata literally means "bathing cloth", and it was originally
              intended to be just that. Traditionally, the garment is worn after
              bathing in a communal bath, functioning as a quick way to cover
              the body and to absorb remaining moisture. Fittingly, the yukata
              is often worn in hot spring (onsen) towns. The yukata is made from
              light, breezy, absorbent material like thin cotton or breathable
              synthetic material. It can be as basic or as extravagant as you
              like and these days it's most often worn during summer events like
              hanabi (fireworks) festivals.
            </p>
            <p className="font-open font-thin text-lg text-black text-left ml-10 mr-10 mb-4">
              In terms of essentials, you need to wear some sort of underwear,
              and you’ll need koshihimo or ribbons to tie the yukata
              comfortably. On top of that you’ll need an obi or some sort of
              belt, and you’ll want to wear some sandals too if you’re leaving
              the house. That’s the basics. The traditional style for obi is
              hanhaba (half-width) obi for women and thinner kakuobi for men.
              For a more dramatic look, women can also wear nagoya obi, which is
              very wide. It doesn’t have to be an obi though! Any long piece of
              fabric such as a scarf can be tied in the same way. Alternatively,
              you can wear a shorter belt, rope or strip of fabric, whatever you
              think looks best.
            </p>
            <p className="font-open font-thin text-lg text-black text-left ml-10 mr-8 mb-4">
              We offer rental service so that you can enjoy our yukata and
              stroll through town, as people did in our past. You can experience
              a little of ancient Japanese time.
            </p>
            <p className="font-open font-thin text-lg text-left ml-10 mr-8 mb-16">
              As part of the service, we will assist dressing you in the yukata
              (if needed), to ensure that it is worn properly.
            </p>
            <img
              src={yukata}
              className="w-72 h-96 -ml-72 -mt-60 mb-16"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
      <Footer />
    </div>
  );
};

export default Workshops;
