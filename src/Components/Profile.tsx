import platformImg from "../assets/illustration-multiple-platforms.webp";
import calendarImg from "../assets/illustration-consistent-schedule.webp";

function Profile() {
  return (
    <div className="dropShadow md:col-span-2 md:grid md:grid-cols-2 md:gap-x-8 lg:col-start-2 lg:col-end-4">
      <div className="bg-White rounded-[.63rem] p-4 md:p-6 lg:overflow-hidden lg:p-0">
        <img
          className="w-full lg:mt-6 lg:-mr-20 lg:ml-6 lg:w-[311px]"
          src={platformImg}
          alt="illustration of multiple platforms with followers as 12k and 8k"
        />
        <h3 className="text-Black lg:text-32px mt-4 text-[1.63rem] leading-6 font-medium tracking-[-.96px] md:mt-[3.41rem] md:px-6 lg:pb-6 lg:leading-7">
          Manage multiple accounts <span className="">and platforms.</span>
        </h3>
      </div>

      <div className="bg-Yellow500 mt-8 overflow-hidden rounded-[.63rem] p-4 md:mt-0 md:p-6 md:pb-0 lg:pb-0">
        <h3 className="text-Black text-[1.63rem] leading-6 font-medium tracking-[-.96px] md:text-[1.75rem] md:leading-[1.625rem]">
          Maintain a consistent posting schedule
        </h3>
        <img
          src={calendarImg}
          alt="August 2024 week1 consistent check report"
          className="mt-4 -mb-5 w-[67%] md:-mb-[2px] md:h-[69.78%] md:w-[74.2%] lg:mt-6 lg:-mb-16 lg:h-auto lg:w-auto"
        />
      </div>
    </div>
  );
}

export default Profile;
