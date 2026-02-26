import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
const Skill_page = () => {
  return (
    <>
      <div className="h-full w-full px-[59px]">
        <div className="flex flex-col overflow-hidden text-[40px] text-white mt-10">
          <h1 className="text-[48px] font-bold">My{" "}
            <span className="text-[#FF5C00]">Skills</span>
          </h1>
          {/*Zone Skill Box*/}
          <div className="flex space-x-10 mt-5">
            {/*One*/}
            <div className="flex flex-col w-[158px]">
              <div className="w-[158px] h-[218px] border-[1px] border-[#FF5C00] rounded-full flex flex-col items-center relative">
                <FaReact className='text-[75px] top-14 absolute  text-[#61DBFB]' />
                <h1 className='text-[#FF5C00] text-[24px] absolute bottom-7'>60%</h1>
              </div>
              <h1 className="text-[20px] flex justify-center mt-5">React</h1>
            </div>
            {/*Two*/}
            <div className="flex flex-col w-[158px]">
              <div className="w-[158px] h-[218px] border-[1px] border-[#FF5C00] rounded-full flex flex-col items-center relative">
                <IoLogoFigma className='text-[75px] top-14 absolute' />
                <h1 className='text-[#FF5C00] text-[24px] absolute bottom-7'>85%</h1>
              </div>
              <h1 className="text-[20px] flex justify-center mt-5">Figma</h1>
            </div>
            {/*Three*/}
            <div className="flex flex-col w-[158px]">
              <div className="w-[158px] h-[218px] border-[1px] border-[#FF5C00] rounded-full flex flex-col items-center relative">
                <TbBrandCss3 className='text-[75px] top-14 absolute' />
                <h1 className='text-[#FF5C00] text-[24px] absolute bottom-7'>80%</h1>
              </div>
              <h1 className="text-[20px] flex justify-center mt-5">HTML/CSS</h1>
            </div>
          </div>
          <div className="flex space-x-10 mt-7">
            {/*One*/}
            <div className="flex flex-col w-[158px]">
              <div className="w-[158px] h-[218px] border-[1px] border-[#FF5C00] rounded-full flex flex-col items-center relative">
                <SiNextdotjs className='text-[75px] top-14 absolute' />
                <h1 className='text-[#FF5C00] text-[24px] absolute bottom-7'>90%</h1>
              </div>
              <h1 className="text-[20px] flex justify-center mt-5">Next.js</h1>
            </div>
            {/*Two*/}
            <div className="flex flex-col w-[158px]">
              <div className="w-[158px] h-[218px] border-[1px] border-[#FF5C00] rounded-full flex flex-col items-center relative">
                <FaNodeJs className='text-[75px] top-14 absolute' />
                <h1 className='text-[#FF5C00] text-[24px] absolute bottom-7'>60%</h1>
              </div>
              <h1 className="text-[20px] flex justify-center mt-5">Java Script</h1>
            </div>
            {/*Three*/}
            <div className="flex flex-col w-[158px]">
              <div className="w-[158px] h-[218px] border-[1px] border-[#FF5C00] rounded-full flex flex-col items-center relative">
                <FaGithub className='text-[75px] top-14 absolute' />
                <h1 className='text-[#FF5C00] text-[24px] absolute bottom-7'>91%</h1>
              </div>
              <h1 className="text-[20px] flex justify-center mt-5">GitHub</h1>
            </div>           
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill_page;
