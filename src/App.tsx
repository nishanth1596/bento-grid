import CreateContent from "./Components/CreateContent";
import Followers from "./Components/Followers";
import Hero from "./Components/Hero";
import Profile from "./Components/Profile";
import Schedule from "./Components/Schedule";

function App() {
  return (
    <div className="flex justify-center">
      <header className="sr-only">
        <h1>Bento Grid</h1>
      </header>
      <main>
        <div className="lg:grid-rows-[324fr 247fr 246fr] mx-4 mt-8 mb-10 grid grid-cols-1 gap-y-8 md:mx-10 md:mt-[3.25rem] md:mb-[4.73rem] md:grid-cols-2 lg:mt-[5.19rem] lg:grid-cols-4 lg:gap-x-8 xl:mx-40 xl:max-w-[70rem]">
          <Hero />
          <Profile />
          <Schedule />
          <Followers />
          <CreateContent />
        </div>
      </main>
    </div>
  );
}

export default App;
