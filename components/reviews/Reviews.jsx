import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Michael Carter",
    username: "@mcarter",
    body: "The IT solutions provided by this company completely transformed our business processes. Highly recommended!",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Samantha Lee",
    username: "@samlee",
    body: "Their innovative approach and reliable support make them stand out in the IT industry. Fantastic service!",
    img: "https://avatar.vercel.sh/samantha",
  },
  {
    name: "David Johnson",
    username: "@djohnson",
    body: "We’ve seen significant improvements in efficiency thanks to their tailored IT solutions. Couldn’t be happier!",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Emily Brown",
    username: "@ebrown",
    body: "The team is incredibly responsive and knowledgeable. Their solutions have streamlined our operations perfectly.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Chris Taylor",
    username: "@ctaylor",
    body: "From consultation to implementation, their service has been top-notch. They’ve earned our trust completely.",
    img: "https://avatar.vercel.sh/chris",
  },
  {
    name: "Sophia Martinez",
    username: "@smartinez",
    body: "Their expertise in IT solutions is unmatched. They’ve helped us scale effectively while optimizing costs.",
    img: "https://avatar.vercel.sh/sophia",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-full max-w-80  cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <div className="text-sm font-medium dark:text-white">{name}</div>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function Reviews() {
  return (
    <section className=" py-20">
      <header className="text-center px-container mb-14">
        <span
          data-aos="fade-up"
          className="font-medium text-blue-500 inline-block mb-3"
        >
          Our Satisfied Clients
        </span>
        <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
          Trusted by Professionals
        </h2>
      </header>

      <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}

export default Reviews;
