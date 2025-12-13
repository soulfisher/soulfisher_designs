import { twMerge } from "tailwind-merge";
//method call
const SocialIcon = ({ Icon, className, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        "text-base text-inherit transition-all duration-300 ",
        className
      )}
    >
      <Icon />
    </div>
  );
};
export default SocialIcon;
