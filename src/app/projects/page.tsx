import Image from 'next/image'
const Projects_page = () => {
  return (
    <>
      <div className="h-full w-full px-[59px]">
        <div className="flex flex-col overflow-hidden text-[40px] text-white mt-10">
          <h1 className="font-bold text-[48px]">Featured{" "}
            <span className="text-[#FF5C00]">Projects</span>
          </h1>
          <h1 className="text-[24px] font-bold mt-5">Manage Task App - fullstack web development</h1>
          <h1 className="text-[20px] text-[#7D7373] mt-5">
            Here`s my latest project built with Next.js and Laravel,
          </h1>
          <h1 className="text-[20px] text-[#7D7373]">
            using TailwindCSS on the front-end.
          </h1>
          <h1 className="text-[20px] text-[#7D7373]">
            Watch the video to see the responsive landing page in action!
          </h1>
          {/*Photo*/}
          <div className='w-full flex justify-center mt-10'>
            <Image src="/photox.png" alt="Project Image" className="mt-5" width={500} height={300} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects_page;
