import { FaCode } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { BsVectorPen } from "react-icons/bs";
const Spec_page = () => {
  return (
    <>
      <div className="h-full w-full px-[59px]">
        <div className="flex flex-col overflow-hidden text-[40px] text-white mt-10">
          <h1 className="font-bold">My{" "}
            <span className="text-[#FF5C00]">Specializations</span>
          </h1>
          <div className="mt-10 space-y-10">
            {/*box One*/}
            <div className="border-[#FF5C00] border-1 p-7 h-[170px] rounded-2xl relative">
              <FaCode className="text-[#FF5C00] text-[30px] absolute right-7" />
              <h1 className="text-[20px] font-bold">Front end-developer</h1>
              <h1 className="text-[20px]">Front-end is where I weave code and creativity to shape
                captivating and user-centric digital experiences.</h1>
            </div>
            {/*box Two*/}
            <div className="border-[#FF5C00] border-1 p-7 h-[170px] rounded-2xl relative">
              <TfiWorld className="text-[#FF5C00] text-[30px] absolute right-7" />
              <h1 className="text-[20px] font-bold">UI/UX Designer</h1>
              <h1 className="text-[20px]">UI/UX design is my palette for blending art and user psychology
                into seamless and delightful interactions.</h1>
            </div>
            {/*box Three*/}
            <div className="border-[#FF5C00] border-1 p-7 h-[170px] rounded-2xl relative">
              <BsVectorPen className="text-[#FF5C00] text-[30px] absolute right-7" />
              <h1 className="text-[20px] font-bold">Graphic designer</h1>
              <h1 className="text-[20px]">As a graphic designer, I transform ideas into visually striking and
                impactful designs.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Spec_page;
