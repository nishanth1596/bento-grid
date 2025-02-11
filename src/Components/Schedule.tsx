import Img from "../assets/illustration-schedule-posts.webp";

function Schedule() {
  return (
    <div className="bg-Purple100 rounded-[.63rem] py-8 md:col-span-2 md:row-span-2 lg:col-start-4 lg:row-start-1 lg:overflow-hidden lg:py-[3.18rem]">
      <h3 className="text-Black lg:text-32px text-center text-[1.63rem] leading-6 font-medium tracking-[-.96px] lg:px-8 lg:text-left lg:leading-7 lg:tracking-[-2px]">
        Schedule to social media
      </h3>
      <img
        className="mx-auto mt-6 w-[90%] md:w-[57.3%] lg:mx-0 lg:-mr-[133px] lg:ml-8 lg:w-full"
        src={Img}
        alt="A data showing the most active time of the audience at every 3hrs starting from 12am to 9pm"
      />
      <p className="text-Black mx-8 mt-6 text-center text-lg leading-5 font-normal md:w-[57.3%] md:place-self-center lg:w-auto lg:text-left">
        Optimize post timings to publish content at the perfect time for your
        audience
      </p>
    </div>
  );
}

export default Schedule;
