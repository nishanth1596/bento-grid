import starIcons from "../assets/illustration-five-stars.webp";

function Hero() {
  return (
    <div className="text-White bg-Purple500 rounded-[.63rem] px-8 py-10 text-center md:col-span-2 md:px-[4.75rem] md:py-[4.5rem] lg:col-start-2 lg:col-end-4">
      <h1 className="lg:text-62px text-[2.875rem] leading-[2.63rem] font-medium tracking-[-.64px] md:text-[3.375rem] md:leading-12 lg:leading-14 lg:tracking-[-3px]">
        Social Media <span className="text-Yellow500">10X</span>{" "}
        <span className="italic">Faster</span> with AI
      </h1>
      <h2 className="sr-only"></h2>
      <img
        className="mt-6 place-self-center px-[2.72rem] md:w-[53%]"
        src={starIcons}
        alt="5 stars Icon"
      />
      <p className="mt-2 text-lg leading-5 font-normal">
        Over 4,000 5-star reviews
      </p>
    </div>
  );
}

export default Hero;
