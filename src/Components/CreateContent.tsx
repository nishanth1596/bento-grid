import createPostImg from "../assets/illustration-create-post.webp";
import postImg from "../assets/illustration-ai-content.webp";

function CreateContent() {
  return (
    <div className="mr-[-5px] rounded-[.63rem] md:col-span-2 md:mr-0 md:grid md:grid-cols-2 md:gap-x-8 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4 lg:grid-cols-1 lg:gap-y-8">
      <div className="bg-Yellow100 rounded-[.63rem ] p-8 md:p-6 md:pt-[4.69rem] lg:pt-[4.9rem]">
        <h3 className="text-32px lg:text-40px leading-7 font-medium tracking-[-.96px] md:text-4xl md:leading-[1.875rem] lg:leading-9 lg:tracking-[-2px]">
          Create and schedule content{" "}
          <span className="text-Purple500 italic">quicker.</span>
        </h3>
        <img
          className="mt-6 w-[67%] lg:w-full"
          src={createPostImg}
          alt="A button showing create post with a diamond shaped star icon next to it"
        />
      </div>

      <div className="mt-8 rounded-[.63rem] bg-yellow-500 p-6 md:mt-0 lg:pr-0 lg:pb-0">
        <h3 className="text-Black lg:text-40px text-[2rem] leading-7 font-medium md:text-4xl lg:leading-9">
          Write your content using AI.
        </h3>
        <img
          className="mt-6 w-[75.6%] lg:mt-[3.47rem] lg:w-full lg:pr-3"
          src={postImg}
          alt="An AI chatbox providing answer to the prompt 'Give me a 5tips to growth my follower on Insta!'. Response recieved is 'Certainly, Here are five tips to help you grow your instagram...'."
        />
      </div>
    </div>
  );
}

export default CreateContent;
