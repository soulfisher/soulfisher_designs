import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

const AdvertisementCard = () => {
  return (
    <article
      className={`h-[450px]  flex  items-center justify-center overflow-hidden rounded-lg p-10 bg-[url('https://psdtowpwork.com/wp/graptor/main/wp-content/uploads/2021/11/call.jpg')] bg-center bg-no-repeat bg-cover relative isolate`}
    >
      <div className="absolute inset-0 bg-purple/90"></div>
      <div
        className={
          "flex text-center font-rubik relative text-white z-10 items-center justify-center flex-col"
        }
      >
        <div className="size-[70px] text-xl rounded-full bg-white text-purple grid place-content-center animate-shadows mb-10">
          <FaPhone />
        </div>
        <span className={"text-[25px] font-bold mb-6"}>
          Have any Questions? Call us Today!
        </span>

        <Link className="text-[25px] font-extrabold" href="tel:+1245698909">
          + 124 569 89 09
        </Link>
      </div>
    </article>
  );
};
export default AdvertisementCard;
