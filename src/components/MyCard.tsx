import { FaInstagram, FaLinkedin, FaGoogle, FaFacebook } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const MyCard = () => {
  return (
    <>
      <div className="bg-[#1D1C1D] h-[695px] w-[395px] rounded-2xl flex flex-col px-[34px] py-[19px] items-center relative border-[1px] border-[#FFFFFF33] overflow-hidden">
        <div className="absolute top-[19px] flex text-[32px] w-full px-[35px]">
          <h1 className="text-[#FF5C00]">T</h1>
          <h1 className="text-white">hanawat</h1>
        </div>
        {/*ส่วนรูปโปรไฟล*/}
        <div className="bg-amber-50 absolute top-[67px] h-[324px] w-[325px] rounded-2xl">
          <Image src="/larva.jpg" alt="Profile" layout="fill" objectFit="cover" className="rounded-2xl"/>
        </div>
        <h1 className="text-white absolute top-[399px] text-[24px]">STD ID:6519410033</h1>
        <h1 className="text-[#7D7373] absolute top-[439px] text-[20px]">Fullstack Web Developer</h1>
        <div className="text-white text-[40px] absolute top-[509px] flex space-x-[28px]">
          <FaFacebook className="hover:text-blue-300 active:text-blue-500 duration-150"/>
          <AiOutlineX className="hover:text-blue-300 active:text-blue-500 duration-150"/>
          <FaInstagram className="hover:text-blue-300 active:text-blue-500 duration-150"/>
          <FaLinkedin className="hover:text-blue-300 active:text-blue-500 duration-150"/>
          <FaGoogle className="hover:text-blue-300 active:text-blue-500 duration-150"/>
        </div>
        <button className="absolute top-[607px] bg-[#FF5C00] h-[58px] w-[312px] rounded-4xl flex justify-center items-center text-[29px] hover:bg-amber-400 active:bg-amber-700 duration-150">
          <h1>HIRE ME!</h1>
        </button>
      </div>
    </>
  )
}

export default MyCard;
