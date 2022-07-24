import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="App w-full h-full">
      <header className="w-full h-20 sticky top-0">
        <Navbar />
      </header>
      <div className="w-full h-full flex flex-col justify-center items-center py-8">
        {/* Intro */}
        <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center py-8 bg-gray-100">
          <div
            className="px-8 py-4 flex flex-col justify-center items-start"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="py-4 text-5xl font-bold">
              Your{" "}
              <span
                style={{
                  background:
                    "-webkit-linear-gradient(315deg,#42d392 25%,#647eff)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Best Value
              </span>{" "}
              Position
            </h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              numquam est quidem fugiat, maxime debitis natus quisquam? Soluta
              sunt neque ullam, obcaecati deleniti maiores nostrum consectetur
              placeat molestias, aliquam expedita.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-md">
              Start free trial!
            </button>
          </div>
          <div className="flex justify-center items-center px-12 py-8 w-full lg:w-1/2 xl:w-1/3">
            <img
              src="./assets/image01.png"
              alt="browser contents"
              className="rounded-md"
            ></img>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="w-full flex flex-col justify-center items-center py-8 gap-8">
          <div>
            <h1 className="text-lg">Some World's Best Companies</h1>
          </div>
          <div>
            <ul className="flex flex-row flex-wrap justify-center items-center gap-8 max-w-3xl">
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company01.png"
                  alt="company01"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company02.png"
                  alt="company02"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company03.png"
                  alt="company03"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company04.png"
                  alt="company04"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company05.png"
                  alt="company05"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company06.png"
                  alt="company06"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company01.png"
                  alt="company01"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company02.png"
                  alt="company02"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company03.png"
                  alt="company03"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company04.png"
                  alt="company04"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company05.png"
                  alt="company05"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
              <li className="w-32 h-20 mt-0 rounded-full shrink-0 flex justify-center items-center">
                <img
                  src="./assets/company06.png"
                  alt="company06"
                  className="rounded-md max-w-full max-h-full"
                ></img>
              </li>
            </ul>
          </div>
        </div>

        {/* Commends? */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center p-8 gap-8 bg-black">
          <div className="w-auto max-w-xl lg:w-1/2 flex flex-col justify-center items-start px-8 py-4 gap-4 rounded-md bg-gray-100">
            <h1 className="text-lg font-bold">
              Keys to writing copy that actually converts and sells users
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              commodi sunt nihil earum provident voluptatum voluptatem explicabo
              quibusdam eaque, debitis rerum obcaecati placeat eos cumque iste
              dolorem vitae, eligendi velit.
            </p>
            <button>Read more</button>
          </div>
          <div className="w-auto max-w-xl lg:w-1/2 flex flex-col justify-center items-start px-8 py-4 gap-4 rounded-md bg-gray-100">
            <h1 className="text-lg font-bold">
              Keys to writing copy that actually converts and sells users
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              commodi sunt nihil earum provident voluptatum voluptatem explicabo
              quibusdam eaque, debitis rerum obcaecati placeat eos cumque iste
              dolorem vitae, eligendi velit.
            </p>
            <button>Read more</button>
          </div>
        </div>

        {/* ?? */}
        <div className="w-full flex justify-center items-center px-8 py-4 bg-gray-200">
          <Carousel className="max-w-7xl">
            <div>
              <img src="./assets/image02.png" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="./assets/image03.png" />
              <p className="legend">Legend 2</p>
            </div>
          </Carousel>
        </div>

        {/* ??? */}
        <div className="w-full flex justify-center items-center p-8 bg-white">
          <div className="w-full flex flex-wrap justify-center items-start gap-4">
            <ul className="w-1/4 p-8">
              <li>
                <h1 className="text-lg">Products</h1>
              </li>
              <li>
                <span>Product 1</span>
              </li>
              <li>
                <span>Product 2</span>
              </li>
              <li>
                <span>Product 3</span>
              </li>
              <li>
                <span>Product 4</span>
              </li>
            </ul>
            <ul className="w-1/4 p-8">
              <li>
                <h1 className="text-lg">About Us</h1>
              </li>
              <li>
                <span>Jason</span>
              </li>
            </ul>
            <ul className="w-1/4 p-8">
              <li>
                <h1 className="text-lg">Sponsors</h1>
              </li>
              <li>
                <span>Sponsor 1</span>
              </li>
              <li>
                <span>Sponsor 2</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full flex justify-center items-center px-8 bg-white">
          <p>© 2022 Jason Company</p>
        </div>
      </div>
    </div>
  );
}

export default App;
