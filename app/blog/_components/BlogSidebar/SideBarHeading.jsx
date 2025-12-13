const SideBarHeading = ({ children }) => {
  return (
    <div className="text-[28px]   font-bold font-rubik text-navy-blue">
      {children}

      <span className="block h-[3px] bg-purple w-[50px]"></span>
    </div>
  );
};
export default SideBarHeading;
