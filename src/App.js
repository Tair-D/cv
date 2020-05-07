import React from "react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Dospayev Tair</title>
      </Helmet>
      <section className="bg-gray-100">
        <section className="container mx-auto">
          <section className="flex flex-wrap">
            <section className="w-full xl:w-1/2 lg:w-1/2 shadow-lg xl:mt-12 lg:mt-12 rounded-lg xl:-ml-2 lg:-ml-2">
              <section className="flex">
                <img
                  className="rounded-full h-32 shadow-xl border-black mt-6 ml-8 mb-4"
                  src={require("./images/me.jpg")}
                />
                <section className="w-full ml-16 xl:ml-20 lg:ml-20 mt-6 ">
                  <h1 className="text-2xl xl:text-3xl lg:text-3xl font-extrabold">
                    Dospayev Tair{" "}
                  </h1>
                  <p className="text-base xl:text-xl lg:text-xl font-hairline">
                    Software Developer
                  </p>
                  <div class="flex flex-wrap mt-2">
                    <img src="https://img.icons8.com/material-sharp/24/000000/telegram-app.png" />
                    <span class="ml-2 text-gray-600">@tairD</span>
                  </div>
                  <span class="text-gray-600 mt-2">+7 771 999 29 28</span>
                  <p class="text-gray-600 pb-2">tair.dospayev@gmail.com</p>
                </section>
              </section>
            </section>
            <section className="w-full invisible xl:visible lg:visible xl:w-1/2 lg:w-1/2 shadow-lg rounded-lg -mt-32 xl:mt-12 lg:mt-12 xl:ml-2 lg:ml-2 ">
              <h1 className="text-2xl font-bold mt-6 mx-10 pb-2 border-b border-black ">
                Profile
              </h1>
              <p className="px-12 text-left pb-2">
                Hello, my name is Tair. I am software developer. Software developer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Passionate about UI / UX and modern web technologies.
              </p>
            </section>
          </section>
          <section className="flex flex-wrap -mt-16 xl:mt-20 lg:mt-20 md:mt-0 sm:mt-0">
            <section className="w-full lg:w-1/2 xl:w-1/2 shadow-lg rounded-lg xl:-ml-2 lg:-ml-2">
              <h1 className="text-2xl font-bold  mt-6 mx-10 pb-2 border-b border-black ">
                Experience
              </h1>
              <div className="px-12 pb-12">
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
                    * Creating new features, functionality on the existing
                    sites.
                  </p>
                </section>
              </div>
            </section>
            <section className="w-full lg:w-1/2 xl:w-1/2 xl:ml-2 lg:ml-2">
              <section className=" shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mt-6 mx-10 pb-2 border-b border-black ">
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
              <section className=" shadow-sm xl:shadow-lg rounded-lg mt-2">
                <h1 className="text-2xl font-bold mt-6 mx-10 pb-2 border-b border-black ">
                  Programming Skills
                </h1>
                <section className="flex flex-row pb-2">
                  <section className=" w-1/2 pl-12 text-base">
                    <p className="mt-1 text-sm">JavaScript</p>
                    <p className="mt-1 text-sm">React JS</p>
                    <p className="mt-1 text-sm">Swift</p>
                    <p className="mt-1 text-sm">C#</p>
                  </section>
                  <section className=" w-1/2 pl-3 text-base">
                    <p className="mt-1 text-sm">PHP</p>
                    <p className="mt-1 text-sm">HTML</p>
                    <p className="mt-1 text-sm">Tailwind CSS</p>
                    <p className="mt-1 text-sm">Mysql</p>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
