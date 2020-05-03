import React from "react";

// const BackgroundSvg = () => (
//   <svg xmlns="http://www.w3.org/2000/svg">
//     <circle cx="10" cy="10" r="140" fill="#80e3f0" />
//     <circle cx="250" cy="250" r="140" fill="#80e3f0" />
//   </svg>
// );

function App() {
  return (
    <section className="bg-gray-100">
      <section className="flex flex-row ">
        <section className="xl:w-1/4 mt-12 ml-48">
          <img
            className="rounded-lg h-56 shadow-xl"
            src={require("./images/me.jpg")}
          />
        </section>
        <section className="xl:w-3/4 mr-48 shadow-lg mt-12 rounded-lg">
          <h1 className="ml-20 mt-8 text-3xl font-extrabold">Dospayev Tair </h1>
          <span className="ml-20 text-xl text-indigo-500">iOS Developer</span>
          <p className=" ml-20">
            Hello, my name is Tair. I am iOS and front-end developer and hard
            problem solver.
          </p>
        </section>
      </section>
      <section className="flex mt-32 mr-48 ml-48">
        <section className="xl:w-3/5 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold  mt-6 ml-10">Experience</h1>
          <div className="ml-12 mb-12">
            <section id="current project">
              <h2 className=" text-xl font-semibold">Senim</h2>
              <p className="text-xs font-semibold">(01.2020-present)</p>
              <p className=" text-base mt-2">iOS Developer.</p>
              <p className=" text-sm">* Building codebases using Swift.</p>
              <p className=" text-sm">
                * Creating new features, refactoring on the existing
                application.
              </p>
            </section>
            <section id="kas" className="mt-4">
              <h2 className=" text-xl font-semibold">KazAeroSpace</h2>
              <p className="text-xs font-semibold"> (08/2018 - 01/2020)</p>
              <p className=" text-base mt-2">Fullstack Developer.</p>
              <p className=" text-sm">* Responsive web-site development.</p>
              <p className=" text-sm">
                * Building codebases using React Redux / PHP (Laravel).
              </p>
              <p className=" text-sm">
                * Creating new features, functionality on the existing sites.
              </p>
            </section>
          </div>
        </section>
        <section className="xl:w-2/5 shadow-lg rounded-lg ml-32">
          <h1 className="text-2xl font-bold mt-6 ml-10">Education</h1>
          <div className="ml-12 mb-12">
            <section id="lists">
              <section id="bachelor">
                <h2 className=" text-xl font-semibold">
                  Eurasian National University (19')
                </h2>
                <p className="text-sm">
                  Bachelor in Mathematical and computer modeling
                </p>
              </section>
              <section id="master" className="pt-4">
                <h2 className=" text-xl font-semibold">
                  Eurasian National University (present)
                </h2>
                <p className="text-sm">Master in Computer science</p>
              </section>
            </section>
          </div>
        </section>
      </section>
      <section className="flex mt-32 mr-48 ml-48">
        <section className="xl:w-3/5 shadow-lg rounded-lg">
          <h1 className="text-xl mt-6 ml-10">Programming Skill</h1>
          <section className="flex flex-row pb-6">
            <section className=" xl:w-1/2 pl-20 text-base">
              <p className="mt-5">Swift</p>
              <p className="mt-5">JavaScript</p>
              <p className="mt-5">React JS</p>
              <p className="mt-5">C#</p>
            </section>
            <section className=" xl:w-1/2 pl-20 text-base">
              <p className="mt-5">PHP</p>
              <p className="mt-5">HTML</p>
              <p className="mt-5">Tailwind CSS</p>
              <p className="mt-5">Mysql</p>
            </section>
          </section>
        </section>
        <section className="xl:w-2/5 shadow-lg rounded-lg ml-32">
          <h1 className="text-xl mt-6 ml-10">Favorites</h1>
        </section>
      </section>
      <section className="flex mt-20 mr-48 ml-48 shadow-lg rounded-lg">
        <p className="text-sm mr-4">tair.dospayev@gmail.com</p>
        <p className="text-sm mr-4">tair.dospayev@gmail.com</p>
        <p className="text-sm mr-4">tair.dospayev@gmail.com</p>
        <p className="text-sm mr-4">tair.dospayev@gmail.com</p>
      </section>
    </section>
  );
}

export default App;
