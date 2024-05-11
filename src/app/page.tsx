import Link from "next/link";
import Navbar from "./components/Navbar";
import lb from "../imgs/bgg.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="font-compact mt-40 text-center font-semibold text-6xl">
        Crafting good looking, easy to use and
        <br />
        catch on the eye designs & products
      </h1>
      <h1 className="font-compact mt-12 text-center font-semibold text-2xl">
        Akanksha Pilli - Freelance UI/UX Designer and Developer
      </h1>
      <div className="mt-12 flex justify-center itens-center">
        <button className="rounded-full inline-flex border-solid border-slate-300 border-t-2 hover:bg-neutral-900 hover:border-b-2 hover:border-t-0 active:border-0 active:translate-y-1 items-center font-compact text-lg px-6 bg-neutral-800 justify-center font-semibold">
          <Link
            target="_blank"
            className="active:border-0 active:translate-y-1"
            href="https://589ot3d9quf.typeform.com/to/EtUAEIUb"
          >
            Work with me
          </Link>
          <svg
            className="ml-4 w-3 h-10"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M2.5 5C1.83696 5 1.20108 4.73661 0.732235 4.26777C0.263395 3.79892 0 3.16304 0 2.5C0 1.83696 0.263395 1.20107 0.732235 0.732233C1.20108 0.263392 1.83696 0 2.5 0H17.5C18.163 0 18.7989 0.263392 19.2678 0.732233C19.7366 1.20107 20 1.83696 20 2.5V17.5C20 18.163 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20C16.837 20 16.2011 19.7366 15.7322 19.2678C15.2634 18.7989 15 18.163 15 17.5V8.535L4.2675 19.2675C3.796 19.7229 3.16449 19.9749 2.509 19.9692C1.85351 19.9635 1.22647 19.7006 0.762954 19.237C0.299434 18.7735 0.036512 18.1465 0.030816 17.491C0.0251199 16.8355 0.277106 16.204 0.732501 15.7325L11.465 5H2.5Z"
              fill="#E7E8E8"
            />
          </svg>
        </button>
      </div>

      <section className="flex mt-24 min-h-screen justify-center bg-black pt-20">
        <div className="w-80">
          <h2 className="mb-7 -ml-72 font-compact mt-12 font-semibold text-4xl text-white">
            Services
          </h2>
          <ul className="-ml-52">
            <li className="relative flex gap-6 pb-5">
              <div className="before:absolute before:top-7 before:left-3.5 before:h-full before:w-[6px] before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold text-2xl">UX Design</p>
                <p
                  className="mt-2 ml-8 w-96 text-justify font-base text-lg "
                  style={{ width: "600px" }}
                >
                  Crafting seamless user experiences that blend intuitive
                  navigation with human-centric design principles, ensuring your
                  digital platform resonates with your audience.
                </p>
              </div>
            </li>
            <li className="relative flex mt-6 gap-6 pb-5">
              <div className="before:absolute before:top-7 before:left-3.5 before:h-full before:w-[6px] before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold text-2xl">UI Design</p>
                <p
                  className="mt-2 ml-8 w-96 text-justify font-base text-lg "
                  style={{ width: "600px" }}
                >
                  Transforming concepts into visually stunning interfaces with a
                  keen focus on usability, consistency, and brand identity,
                  elevating your digital presence.
                </p>
              </div>
            </li>
            <li className="relative flex mt-6 gap-6 pb-5">
              <div className="before:absolute before:top-7 before:left-3.5 before:h-full before:w-[6px] before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold text-2xl">Web Design</p>
                <p
                  className="mt-2 ml-8 w-96 text-justify font-base text-lg "
                  style={{ width: "600px" }}
                >
                  Weaving together aesthetics and functionality to deliver
                  captivating and responsive websites that captivate users and
                  drive engagement.
                </p>
              </div>
            </li>
            <li className="relative flex mt-6 gap-6 pb-5">
              <div className="before:absolute before:top-7 before:left-3.5 before:h-full before:w-[6px] before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold text-2xl">Web Development</p>
                <p
                  className="mt-2 ml-8 w-96 text-justify font-base text-lg "
                  style={{ width: "600px" }}
                >
                  Crafting dynamic and user-friendly digital experiences by
                  seamlessly integrating intuitive navigation and human-centric
                  design principles, ensuring your online platform resonates
                  deeply with your audience.
                </p>
              </div>
            </li>
            <li className="relative flex mt-6 gap-6 pb-5">
              <div className="before:absolute before:top-7 before:left-3.5 before:h-full before:w-[6px] before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold text-2xl">iOS App Development</p>
                <p
                  className="mt-2 ml-8 w-96 text-justify font-base text-lg "
                  style={{ width: "600px" }}
                >
                  Transforming innovative concepts into visually stunning
                  interfaces on iOS devices, with a keen focus on usability,
                  consistency, and brand identity, enhancing your digital
                  presence and user engagement.
                </p>
              </div>
            </li>
            <li className="relative flex mt-6 gap-6 pb-5">
              <div className="before:absolute before:top-7 before:left-3.5 before:h-full before:w-[6px] before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold text-2xl">Visual Design Harmony</p>
                <p
                  className="mt-2 ml-8 w-96 text-justify font-base text-lg "
                  style={{ width: "600px" }}
                >
                  Harmonizing colors, typography, and imagery to create visually
                  cohesive and impactful designs that leave a lasting impression
                  on your audience.
                </p>
              </div>
            </li>
            <li className="relative flex mt-6 gap-6 pb-5">
              <div className="before:absolute before:top-7 before:left-3.5 before:h-full before:w-[6px] before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold text-2xl">
                  Interactive Prototyping
                </p>
                <p
                  className="mt-2 ml-8 w-96 text-justify font-base text-lg "
                  style={{ width: "600px" }}
                >
                  Bringing ideas to life through interactive prototypes,
                  refining designs iteratively to ensure optimal usability and
                  engagement.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-center min-h-screen justify-center bg-black pt-20">
        <div className="w-80">
          <h2 className="mb-7 -ml-72 font-compact mt-12 font-semibold text-4xl text-white">
            Work History
          </h2>
          <ul className="-ml-52">
            <li className="relative flex gap-6 pb-5">
              <div className="before:absolute before:top-7 before:left-3.5 before:h-full before:w-[6px] before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold text-2xl">2024</p>
                <p className="mt-4 ml-8 w-96 text-justify font-base text-lg">
                  UI/UX Designer Intern at CodSoft
                </p>
                <p className="mt-6 ml-8 w-96 text-justify font-base text-lg">
                  UI/UX Designer Intern at Coders Cave
                </p>
              </div>
            </li>
            <li className="relative flex mt-6 gap-6 pb-5">
              <div className="before:absolute before:top-7 before:left-3.5 before:h-full before:w-[6px] before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold text-2xl">2023</p>
                <p className="mt-4 ml-8 w-96 text-justify font-base text-lg">
                  UI/UX Designer Intern at Extion Infotech
                </p>
                <p className="mt-6 ml-8 w-96 text-justify font-base text-lg">
                  UI/UX Designer Intern at Evolve Intern
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-32 -ml-60">
          <button className="rounded-full inline-flex border-solid border-slate-300 border-t-2 hover:bg-neutral-900 hover:border-b-2 hover:border-t-0 active:border-0 active:translate-y-1 items-center font-compact text-lg px-6 bg-neutral-800 justify-center font-semibold">
            <Link
              target="_blank"
              className="active:border-0 active:translate-y-1"
              href="https://github.com/Akankshapilli?tab=repositories"
            >
              See my works
            </Link>
            <svg
              className="ml-4 w-3 h-10"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M2.5 5C1.83696 5 1.20108 4.73661 0.732235 4.26777C0.263395 3.79892 0 3.16304 0 2.5C0 1.83696 0.263395 1.20107 0.732235 0.732233C1.20108 0.263392 1.83696 0 2.5 0H17.5C18.163 0 18.7989 0.263392 19.2678 0.732233C19.7366 1.20107 20 1.83696 20 2.5V17.5C20 18.163 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20C16.837 20 16.2011 19.7366 15.7322 19.2678C15.2634 18.7989 15 18.163 15 17.5V8.535L4.2675 19.2675C3.796 19.7229 3.16449 19.9749 2.509 19.9692C1.85351 19.9635 1.22647 19.7006 0.762954 19.237C0.299434 18.7735 0.036512 18.1465 0.030816 17.491C0.0251199 16.8355 0.277106 16.204 0.732501 15.7325L11.465 5H2.5Z"
                fill="#E7E8E8"
              />
            </svg>
          </button>
        </div>
      </section>
      <div className="flex flex-col items-center justify-between">
        <div className="relative w-full">
          <div className="absolute -z-10 w-full">
            <Image
              src={lb}
              alt="bg img"
              className="w-full"
              width={1000}
              height={1000}
            />
          </div>
          <h1 className="font-compact mt-40 text-center font-semibold text-6xl">
            Have an idea?
          </h1>
          <h1 className="font-compact mt-8 text-center font-semibold text-4xl">
            Let's talk about it
          </h1>
          <div className="mt-8 flex justify-center itens-center">
            <button className="rounded-full inline-flex border-solid border-slate-300 border-t-2 hover:bg-neutral-900 hover:border-b-2 hover:border-t-0 active:border-0 active:translate-y-1 items-center font-compact text-lg px-6 bg-neutral-800 justify-center font-semibold">
              <Link
                target="_blank"
                className="active:border-0 active:translate-y-1"
                href="https://589ot3d9quf.typeform.com/to/EtUAEIUb"
              >
                Work with me
              </Link>
              <svg
                className="ml-4 w-3 h-10"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M2.5 5C1.83696 5 1.20108 4.73661 0.732235 4.26777C0.263395 3.79892 0 3.16304 0 2.5C0 1.83696 0.263395 1.20107 0.732235 0.732233C1.20108 0.263392 1.83696 0 2.5 0H17.5C18.163 0 18.7989 0.263392 19.2678 0.732233C19.7366 1.20107 20 1.83696 20 2.5V17.5C20 18.163 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20C16.837 20 16.2011 19.7366 15.7322 19.2678C15.2634 18.7989 15 18.163 15 17.5V8.535L4.2675 19.2675C3.796 19.7229 3.16449 19.9749 2.509 19.9692C1.85351 19.9635 1.22647 19.7006 0.762954 19.237C0.299434 18.7735 0.036512 18.1465 0.030816 17.491C0.0251199 16.8355 0.277106 16.204 0.732501 15.7325L11.465 5H2.5Z"
                  fill="#E7E8E8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
