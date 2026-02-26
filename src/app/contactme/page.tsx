const Contact_page = () => {
  return (
    <>
      <div className="h-full w-full px-[59px]">
        <div className="flex flex-col overflow-hidden text-[40px] text-white mt-10">
          <h1 className="font-bold">Contact{" "}
            <span className="text-[#FF5C00]">
              Me
            </span>
          </h1>
          <h1 className="text-[24px] mt-4">Let’s get in touch!</h1>
          {/*Form*/}
          <div className="flex w-full mt-15">
            <div className="flex flex-col relative">
              <input
                type="email"
                id="email_1"
                className="peer h-11 w-70 border-b-2 border-[#FF5C00] bg-transparent pt-4 text-white placeholder-transparent outline-none transition-all focus:border-gray-500"
                placeholder="Email"
              />
              <label
                htmlFor="email_1"
                className="absolute left-0 top-2 text-gray-500 text-[16px] transition-all 
                    peer-placeholder-shown:text-[#FF5C00] peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-2
                    peer-focus:-top-3 peer-focus:text-[#FF5C00] peer-focus:text-[12px]
                    peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[#FF5C00] peer-[:not(:placeholder-shown)]:text-[12px]"
              >
                Email
              </label>
            </div>
            <div className="flex flex-col">
              <div className="">
                <div className="flex flex-row relative ml-14">
                  <input
                    type="phone"
                    id="phone_1"
                    className="peer h-11 w-70 border-b-2 border-[#FF5C00] bg-transparent pt-4 text-white placeholder-transparent outline-none transition-all focus:border-gray-500"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="phone_1"
                    className="absolute left-0 top-2 text-gray-500 text-[16px] transition-all 
                        peer-placeholder-shown:text-[#FF5C00] peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-2
                        peer-focus:-top-3 peer-focus:text-[#FF5C00] peer-focus:text-[12px]
                        peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[#FF5C00] peer-[:not(:placeholder-shown)]:text-[12px]"
                  >
                    PHONE
                  </label>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
          {/*line Two*/}
          <div className="flex w-full mt-10">
            <div className="flex flex-col relative">
              <input
                type="name"
                id="name_1"
                className="peer h-11 w-70 border-b-2 border-[#FF5C00] bg-transparent pt-4 text-white placeholder-transparent outline-none transition-all focus:border-gray-500"
                placeholder="Name"
              />
              <label
                htmlFor="name_1"
                className="absolute left-0 top-2 text-gray-500 text-[16px] transition-all 
                    peer-placeholder-shown:text-[#FF5C00] peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-2
                    peer-focus:-top-3 peer-focus:text-[#FF5C00] peer-focus:text-[12px]
                    peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[#FF5C00] peer-[:not(:placeholder-shown)]:text-[12px]"
              >
                Name
              </label>
            </div>
            <div className="flex flex-col">
              <div className="">
                <div className="flex flex-row relative ml-14">
                  <input
                    type="address"
                    id="address_1"
                    className="peer h-11 w-70 border-b-2 border-[#FF5C00] bg-transparent pt-4 text-white placeholder-transparent outline-none transition-all focus:border-gray-500"
                    placeholder="Address"
                  />
                  <label
                    htmlFor="address_1"
                    className="absolute left-0 top-2 text-gray-500 text-[16px] transition-all 
                        peer-placeholder-shown:text-[#FF5C00] peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-2
                        peer-focus:-top-3 peer-focus:text-[#FF5C00] peer-focus:text-[12px]
                        peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[#FF5C00] peer-[:not(:placeholder-shown)]:text-[12px]"
                  >
                    Address
                  </label>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
          {/*Line Three*/}
          <div className="flex w-full mt-10">
            <div className="flex flex-col relative">
              <input
                type="content"
                id="content_1"
                className="peer h-11 w-70 border-b-2 border-[#FF5C00] bg-transparent pt-4 text-white placeholder-transparent outline-none transition-all focus:border-gray-500"
                placeholder="Content"
              />
              <label
                htmlFor="content_1"
                className="absolute left-0 top-2 text-gray-500 text-[16px] transition-all 
                    peer-placeholder-shown:text-[#FF5C00] peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-2
                    peer-focus:-top-3 peer-focus:text-[#FF5C00] peer-focus:text-[12px]
                    peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[#FF5C00] peer-[:not(:placeholder-shown)]:text-[12px]"
              >
                Content
              </label>
            </div>
          </div>
          {/**/}
          <div className="flex mt-20">
            <input type="checkbox" className="border-1 border-gray-500 h-4 w-4 rounded-sm  checked:bg-[#FF5C00] 
                checked:border-[#FF5C00] appearance-none" />
            <h1 className="text-[12px] ml-3">I would like to receive the newsletter.</h1>
          </div>
          <button className="w-70 rounded-2xl h-[37px] bg-[#FF5C00] mt-12 hover:bg-orange-400 active:bg-orange-700 duration-150">
            <h1 className="text-[20px]">Submit</h1>
          </button>
        </div>
      </div>
    </>
  )
}

export default Contact_page;
