import Image from "next/image";
import React from "react";
import img from "/public/assets/developer-pic-1.png";
import Text from "@/components/animatedtext/Text";
import Link from "next/link";
import {BsBoxArrowInUpRight} from "react-icons/bs"
import Hire from "@/components/hireme/Hire";
const Home = () => {
  return (
    <div className="flex items-start text-dark w-full min-h-screen dark:text-light">
      <div className="flex items-center justify-between w-full">
        <div className="ml-24 w-1/2">
          <Image src={img} className="w-full h-auto object-cover" alt="Image" />
        </div>
        <div className="w-1/2">
          <Text Text="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
          <p className="my-4 text-base font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
            doloribus similique. Quo nulla vitae, possimus magnam vel assumenda
            quidem ipsum sit consectetur, cumque distinctio error quos,
            cupiditate tempora quam ducimus!
          </p>
          <div className="flex items-center self-start mt-2">
            <Link href={"/CV.pdf"} target="_blank" className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark" download={true}>Resume <BsBoxArrowInUpRight className="w-6 ml-1"/></Link>
            <Link href={"mailto:abgc@gmail.com"} target="_blank" className="ml-4 text-2xl font-medium capitalize text-dark underline dark:text-light">Contact</Link>
          </div>
        </div>
      </div>
      <Hire/>
    </div>
  );
};

export default Home;
