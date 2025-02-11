import growthImg from "../assets/illustration-audience-growth.webp";
import followersImg from "../assets/illustration-grow-followers.webp";

function Followers() {
  return (
    <div className="md:grid-rows-[246fr 131fr] rounded-[.63rem] md:col-span-2 md:grid md:gap-8 lg:col-start-2 lg:col-end-6 lg:row-start-3 lg:row-end-4 lg:grid-cols-3">
      <div className="bg-Purple500 rounded-[.63rem] pt-6 md:flex md:items-center md:justify-between md:gap-10 md:px-[5.1rem] md:py-6 lg:col-start-2 lg:col-end-4 lg:justify-start lg:gap-3 lg:px-6">
        <img
          src={followersImg}
          alt="Followers growth showing data"
          className="mx-auto w-[66.4%] md:mx-0 md:w-[43.2%] lg:w-[45%]"
        />
        <h3 className="text-White lg:text-40px mt-10 px-11 pb-6 text-center text-[2rem] leading-7 font-medium tracking-[-.96px] md:mt-0 md:w-[37.5%] md:px-0 md:pb-0 md:text-left lg:w-auto lg:leading-9 lg:tracking-[-2px]">
          Grow followers with non-stop content.
        </h3>
      </div>

      <div className="bg-White mt-8 rounded-[.63rem] py-6 pl-6 md:mt-0 md:grid md:grid-cols-2 md:items-center md:pr-6 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:grid-cols-1 lg:pr-0">
        <h3 className="text-Black text-lg leading-5 font-normal md:justify-self-start">
          <span className="lg:text-62px mb-3.5 block text-[2.88rem] leading-[2.63rem] font-medium tracking-[-.64px] md:text-[3.375rem] md:leading-12 lg:leading-14">
            &gt;56&#37;
          </span>
          faster audience growth
        </h3>

        <img
          className="mt-6 w-[56.1%] md:mt-0 md:justify-self-end lg:mt-[2.4rem] lg:w-full lg:justify-self-start lg:pr-[3.38rem]"
          src={growthImg}
          alt="Three emoticons; one woman making love symbol with hand, a man face covered with a mask, one man showing thumbs up"
        />
      </div>
    </div>
  );
}

export default Followers;
