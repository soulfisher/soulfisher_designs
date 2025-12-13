const Reply = () => {
  return (
    <section>
      <div>
        <h2 className="text-5xl mb-1   font-bold font-rubik">Leave A Reply</h2>
        <span className="block h-[3px] bg-purple w-[50px]"></span>
      </div>
      <div className="flex flex-col mt-14 ">
        <form className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label
                className="font-semibold font-rubik inline-block pb-4"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name*"
                className="text-gray w-full  placeholder:text-gray py-4 px-8 bg-[#FBFBFB] border border-[#EBEBEB] focus-visible:outline-purple rounded-md"
              />
            </div>

            <div>
              <label
                className="font-semibold font-rubik inline-block pb-4"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email*"
                className="text-gray w-full placeholder:text-gray py-4 px-8 bg-[#FBFBFB] border border-[#EBEBEB] focus-visible:outline-purple rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              className="font-semibold font-rubik inline-block pb-4"
              htmlFor="comment"
            >
              Comment
            </label>
            <textarea
              id="comment"
              placeholder="Write Message*"
              className="text-gray w-full min-h-[216px] placeholder:text-gray py-4 px-8 bg-[#FBFBFB] border border-[#EBEBEB] focus-visible:outline-purple rounded-md"
            />
          </div>
          <button className="h-10 text-sm  uppercase text-white bg-purple rounded-md grid place-content-center w-full sm:w-fit px-5 hover:bg-navy-blue duration-500 transition-colors text-center">
            post comment
          </button>
        </form>
      </div>
    </section>
  );
};
export default Reply;
