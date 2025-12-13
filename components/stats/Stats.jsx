import { VscLightbulbSparkle } from "react-icons/vsc";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { IoExtensionPuzzle } from "react-icons/io5";
import NumberTicker from "../ui/number-ticker";

const Stats = () => {
  return (
    <div
      style={{ backgroundImage: "url('/placeholder.png')" }}
      className="bg-black text-white bg-fixed bg-left-top bg-cover bg-no-repeat py-20 md:py-40 "
    >
      <section className="px-container max-w-container mx-auto">
        <div className="gap-16 sm:gap-20  grid  sm:grid-cols-2 lg:grid-cols-4">
          <article className="flex group text-white flex-col justify-center text-center  items-center gap-5">
            <VscLightbulbSparkle className="text-6xl text-white " />
            <div className="flex flex-col">
              <h3 className="text-5xl leading-none font-bold ">
                <NumberTicker className="text-white " value={3480} />
              </h3>
              <p className="text-center mt-1 text-nowrap">Project Completed</p>
            </div>
          </article>
          <article className="flex group text-white flex-col justify-center text-center  items-center gap-5">
            <FaPeopleGroup className="text-6xl text-white " />
            <div className="flex flex-col">
              <h3 className="text-5xl leading-none font-bold ">
                <NumberTicker className="text-white " value={428} />
              </h3>
              <p className="text-center mt-1 text-nowrap">IT Specialist</p>
            </div>
          </article>
          <article className="flex group text-white flex-col justify-center text-center  items-center gap-5">
            <IoIosPeople className="text-6xl text-white " />
            <div className="flex flex-col">
              <h3 className="text-5xl leading-none font-bold ">
                <NumberTicker className="text-white " value={6980} />
              </h3>
              <p className="text-center mt-1 text-nowrap">Happy Clients </p>
            </div>
          </article>
          <article className="flex group text-white flex-col justify-center text-center  items-center gap-5">
            <IoExtensionPuzzle className="text-6xl text-white " />
            <div className="flex flex-col">
              <h3 className="text-5xl leading-none font-bold ">
                <NumberTicker className="text-white " value={256} />
              </h3>
              <p className="text-center mt-1 text-nowrap">Smart Solution </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
export default Stats;
