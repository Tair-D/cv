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
      <section className="container mx-auto">
        <section className="flex">
          <section className="xl:w-1/2 lg:w-1/2 shadow-lg mt-12 rounded-lg">
            <section className="flex">
              <img
                className="rounded-full h-32 shadow-xl border-black mt-6 ml-8 mb-4"
                src={require("./images/me.jpg")}
              />
              <section className="w-full ml-20 mt-6 ">
                <h1 className="text-3xl font-extrabold">Dospayev Tair </h1>
                <p className="text-xl font-hairline">Software Developer</p>
                <div class="flex flex-wrap mt-2">
                  <img src="https://img.icons8.com/material-sharp/24/000000/telegram-app.png" />
                  <span class="ml-2 text-gray-600">@tairD</span>
                </div>
                <p class="text-gray-600">tair.dospayev@gmail.com</p>
              </section>
            </section>
          </section>
          <section className="xl:w-1/2 lg:w-1/2 shadow-lg mt-12 rounded-lg ml-2">
            <h1 className="text-2xl font-bold mt-6 ml-10 pb-2 border-b border-black ">
              Profile
            </h1>
            <p className="pl-12">
              Hello, my name is Tair. I am iOS and front-end developer and hard
              problem solver.
            </p>
            {/* </section> */}
          </section>
        </section>
        <section className="flex mt-20">
          <section className="xl:w-1/2 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold  mt-6 ml-10 pb-2 border-b border-black ">
              Experience
            </h1>
            <div className="pl-12 pb-12">
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
          <section className="xl:w-1/2 ml-2 ">
            <section className=" shadow-lg rounded-lg">
              <h1 className="text-2xl font-bold mt-6 ml-10 pb-2 border-b border-black ">
                Education
              </h1>
              <div className="ml-12 mb-12">
                <section id="lists">
                  <section id="master">
                    <h2 className=" text-xl font-semibold">
                      Eurasian National University
                    </h2>
                    <p className="text-xs font-semibold">
                      {" "}
                      (09/2019 - present)
                    </p>
                    <p className="text-sm">Master in Computer science</p>
                  </section>
                  <section id="bachelor" className="mt-4">
                    <h2 className=" text-xl font-semibold">
                      Eurasian National University
                    </h2>
                    <p className="text-xs font-semibold">
                      {" "}
                      (09/2015 - 06/2019)
                    </p>
                    <p className="text-sm pb-6">
                      Bachelor in Mathematical and computer modeling
                    </p>
                  </section>
                </section>
              </div>
            </section>
            <section className="shadow-lg rounded-lg mt-2">
              <h1 className="text-2xl font-bold mt-6 ml-10 pb-2 border-b border-black ">
                Programming Skills
              </h1>
              <section className="flex flex-row pb-6">
                <section className=" xl:w-1/2 pl-12 text-base">
                  <p className="mt-1 text-sm">JavaScript</p>
                  <p className="mt-1 text-sm">React JS</p>
                  <p className="mt-1 text-sm">Swift</p>
                  <p className="mt-1 text-sm">C#</p>
                </section>
                <section className=" xl:w-1/2 pl-3 text-base">
                  <p className="mt-1 text-sm">PHP</p>
                  <p className="mt-1 text-sm">HTML</p>
                  <p className="mt-1 text-sm">Tailwind CSS</p>
                  <p className="mt-1 text-sm">Mysql</p>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="flex mt-20 mr-48 ml-48 shadow-lg rounded-lg">
          <p className="text-sm mr-4">tair.dospayev@gmail.com</p>
          <p className="text-sm mr-4">tair.dospayev@gmail.com</p>
          <p className="text-sm mr-4">tair.dospayev@gmail.com</p>
          <p className="text-sm mr-4">tair.dospayev@gmail.com</p>
        </section>
      </section>
    </section>
  );
}

export default App;
