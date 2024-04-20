"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "./fontawesome";
import BackToTopButton from "./BackToTop";
import Typewriter from "typewriter-effect";

import {
  motion,
  useAnimation,
  useTransform,
  useSpring,
  useCycle,
  useScroll,
  Variants,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEmailClick = () => {
    const email = "grzegorz021104@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  const defaultBackground =
    "linear-gradient(90deg, rgba(102,0,117,1) 0%, rgba(195,42,91,0.8995973389355743) 100%)";

  const buttonStyles = {
    backgroundImage: isHovered
      ? "linear-gradient(to right, #4F46E5, #6E8EF9, #8FBCFF)"
      : defaultBackground,
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out, background-image 0.3s ease-in-out",
  } as React.CSSProperties;

  const introPictureVariants: Variants = {
    hide: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const textFromLeftAnimationFooter: Variants = {
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const Skills: Variants = {
    hide: {
      opacity: 0,
      y: 400,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <main className="flex flex-col items-center font-Inter select-none max-w-full scrollbar-none">
      <div className="menu bg-gradient-to-r from-[#8121D0] via-[#5a2983] to-[#291C3A] w-full inline-flex h-auto p-5 my-auto items-center justify-center">
        <ul className="menuLi text-white xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-sm inline-flex my-auto">
          <li className="hover:scale-125 transition-transform">
            <a href="#aboutme">About</a>
          </li>
          <li className="xl:ml-14 lg:ml-14 md:ml-10 sm:ml-8 ml-8 hover:scale-125 transition-transform">
            <a href="pdf/CV.pdf" target="_blank">
              Resume
            </a>
          </li>
          <li className="xl:ml-14 lg:ml-14 md:ml-10 sm:ml-8 ml-8 hover:scale-125 transition-transform">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <div
        id="home"
        className="introduction bg-[#331C52] w-full xl:pl-24 lg:pl-7 md:pl-7 sm:pl-7 h-fit xl:pt-52 lg:pt-44 md:pt-36 sm:pt-20 pt-16 pl-6 transition-transform transform"
      >
        <p className="font-bold text-[#9d7fc7] xl:text-8xl ld:text-8xl md:text-7xl sm:text-7xl text-4xl pb-5">
          <Typewriter
            options={{
              delay: 30,
            }}
            onInit={(typewriter) => {
              typewriter.start().typeString("I'm a React<br />Developer");
            }}
          />
        </p>
        <p className=" xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl text-base pb-5">
          Grzegorz Siemieniec
        </p>
        <ul className="inline-flex">
          <li className="mr-3">
            <a href="https://github.com/GrzegorzSiemieniec">
              <FontAwesomeIcon
                icon={faGithub}
                className="xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-7 sm:h-7  w-4 h-4 text-[#9d7fc7] rounded-lg xl:mb-20 lg:mb-20 md:mb-16 sm:mb-14 mb-8 hover:cursor-pointer"
              />
            </a>
          </li>
          <li className="ml-3">
            <a href="https://www.linkedin.com/in/grzegorz-siemieniec-526539250/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-7 sm:h-7  w-4 h-4 text-[#9d7fc7] rounded-lg xl:mb-20 lg:mb-20 md:mb-16 sm:mb-14 mb-8 hover:cursor-pointer"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        id="skills"
        className="skills h-auto bg-[#291C3A] w-full transition-transform transform flex sm:pl-7 xl:pl-24 lg:pl-7 md:pl-7 pl-5 pt-2 pb-2"
      >
        <motion.p
          className=" inline-flex justify-center items-center"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={Skills}
        >
          <span className="xl:text-8xl font-bold xl:mr-5 lg:mr-4 md:mr-4 lg:text-8xl md:text-7xl sm:text-7xl text-3xl">
            6
          </span>
          <p className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-sm items-center text-[#DCCFED] pl-2">
            <span>PROJECTS</span> <span className="block">COMPLETED</span>
          </p>

          <span className="xl:text-8xl font-bold xl:mr-5 lg:mr-4 md:mr-4 xl:pl-24 lg:pl-7 md:pl-7 sm:pl-7 pl-5 lg:text-8xl md:text-7xl sm:text-7xl text-3xl">
            1
          </span>
          <p className="xl:text-4xl lg:text-4xl md:text-3xl text-sm pl-2 items-center text-[#DCCFED]">
            <span>YEAR OF</span>
            <span className="block">EXPERIENCE</span>
          </p>
        </motion.p>
      </div>
      <div
        id="aboutme"
        className="about h-auto bg-[#E1EBED] transition-transform transform w-full"
      >
        <p className="text-[#291C3A] xl:text-4xl lg:text-4xl md:text-3xl font-bold  xl:mt-20 xl:mb-12 lg:mt-20 lg:mb-12 md:mt-16 md:mb-10 sm:mt-14 sm:mb-10 xl:pl-24 lg:pl-7 md:pl-7 sm:pl-5 pl-3 mt-8 mb-4 text-xl">
          About me
        </p>
        <motion.p
          className=" text-[#291C3A] xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xl:pl-24 pb-32 lg:pl-7 md:pl-7 sm:pl-5 pl-3 text-base"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={Skills}
        >
          I am a enthusiast of Node.js family frameworks, <br />
          and I am capable of creating websites using technologies <br />
          such as Vue.js, React.js, Next.js (utilizing TypeScript). <br />
          I can also write programs in Node.js, <br />
          but I am more passionate about building websites :)
        </motion.p>
        <p className="text-[#291C3A] xl:text-4xl lg:text-4xl md:text-3xl font-bold  xl:mt-20 xl:mb-12 lg:mt-20 lg:mb-12 md:mt-16 md:mb-10 sm:mt-14 sm:mb-10 xl:pr-24 lg:pr-7 md:pr-5 sm:pr-5 pr-3 pl-3 mt-8 pb-32 text-xl float-right">
          My Skills
          <p className=" text-[#291C3A] xl:text-3xl lg:text-3xl md:text-2xl mt-4 pb-8 font-normal xl:pr-24 lg:pr-7 md:pr-5 sm:pr-5 text-base">
            Technologies I have been working recently
          </p>
          <motion.ul
            className=" inline-grid grid-cols-4 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3 gap-3 my-auto mx-auto xl:pr-24 lg:pr-7 md:pr-5 sm:pr-5 pb-16"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={Skills}
          >
            <li className="xl:w-24 xl:h-24 lg:h-24 lg:w-24 md:w-20 md:h-20 sm:w-20 sm:h-20 w-14 h-14 bg-[#4f3e63] rounded-lg text-white p-4">
              <Image
                src="/img/vue.png"
                alt="Vue icon"
                sizes="100vw"
                width={100}
                height={100}
              />
            </li>
            <li className="xl:w-24 xl:h-24 lg:h-24 lg:w-24 md:w-20 md:h-20 sm:w-20 sm:h-20 w-14 h-14 bg-[#4f3e63] rounded-lg text-white pt-1 ">
              <Image
                src="/img/next.png"
                alt="Next icon"
                sizes="100vw"
                width={100}
                height={100}
              />
            </li>
            <li className="xl:w-24 xl:h-24 lg:h-24 lg:w-24 md:w-20 md:h-20 sm:w-20 sm:h-20 w-14 h-14 bg-[#4f3e63] rounded-lg text-white p-3">
              <Image
                src="/img/git.png"
                alt="Git icon"
                sizes="100vw"
                width={100}
                height={100}
              />
            </li>
            <li className="xl:w-24 xl:h-24 lg:h-24 lg:w-24 md:w-20 md:h-20 sm:w-20 sm:h-20 w-14 h-14 bg-[#4f3e63] rounded-lg text-white pt-4 ">
              <Image
                src="/img/node.png"
                alt="Node icon"
                sizes="100vw"
                width={100}
                height={100}
              />
            </li>
            <li className="xl:w-24 xl:h-24 lg:h-24 lg:w-24 md:w-20 md:h-20 sm:w-20 sm:h-20 w-14 h-14 bg-[#4f3e63] rounded-lg text-white p-3">
              <Image
                src="/img/js.png"
                alt="JS icon"
                sizes="100vw"
                width={100}
                height={100}
              />
            </li>
            <li className="xl:w-24 xl:h-24 lg:h-24 lg:w-24 md:w-20 md:h-20 sm:w-20 sm:h-20 w-14 h-14 bg-[#4f3e63] rounded-lg text-white p-1 ">
              <Image
                src="/img/mongodb.png"
                alt="Mongodb icon"
                sizes="100vw"
                width={100}
                height={100}
              />
            </li>
            <li className="xl:w-24 xl:h-24 lg:h-24 lg:w-24 md:w-20 md:h-20 sm:w-20 sm:h-20 w-14 h-14 bg-[#4f3e63] rounded-lg text-white p-3">
              <Image
                src="/img/react.png"
                alt="React icon"
                sizes="100vw"
                width={100}
                height={100}
              />
            </li>
            <li className="xl:w-24 xl:h-24 lg:h-24 lg:w-24 md:w-20 md:h-20 sm:w-20 sm:h-20 w-14 h-14 bg-[#4f3e63] rounded-lg text-white p-2">
              <Image
                src="/img/tailwind.png"
                alt="Tailwind icon"
                sizes="100vw"
                width={100}
                height={100}
              />
            </li>
            <li className="xl:w-24 xl:h-24 lg:h-24 lg:w-24 md:w-20 md:h-20 sm:w-20 sm:h-20 w-14 h-14 bg-[#4f3e63] rounded-lg text-white p-3 xl:visible lg:visible md:visible sm:invisible invisible">
              <Image
                src="/img/html.png"
                alt="HTML icon"
                sizes="100vw"
                width={100}
                height={100}
              />
            </li>
            <li className="xl:w-24 xl:h-24 lg:h-24 lg:w-24 md:w-20 md:h-20 sm:w-20 sm:h-20 w-14 h-14 bg-[#4f3e63] rounded-lg text-white pt-5 p-1 xl:visible lg:visible md:visible sm:invisible invisible">
              <Image
                src="/img/php.png"
                alt="PHP icon"
                sizes="100vw"
                width={100}
                height={100}
              />
            </li>
          </motion.ul>
        </p>
      </div>
      <motion.div
        id="projects"
        className="about h-fit bg-[#E1EBED] transition-transform transform w-full"
      >
        <p className="text-[#291C3A] xl:text-4xl lg:text-4xl md:text-3xl font-bold  xl:mt-20 xl:mb-12 lg:mt-20 lg:mb-12 md:mt-16 md:mb-10 sm:mt-14 sm:mb-10 xl:pl-24 mt-20 mb-12 lg:pl-7 md:pl-7 sm:pl-5 pl-3 text-xl">
          My Projects
        </p>
        <p className=" text-[#291C3A] xl:text-3xl lg:text-3xl md:text-2xl mt-10 mb-12 font-normal xl:pl-24 lg:pl-7 md:pl-5 sm:pl-5 pl-3 text-base pb-8">
          Some Things I have build so far
        </p>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introPictureVariants}
        >
          <Swiper
            slidesPerView={4}
            className="xl:mb-52 lg:mb-52 md:mb-44 sm:mb-36 text-center hover:cursor-grab select-none xl:h-[442px] lg:h-[389px] md:h-[360px] sm:h-[338px] h-[338px]"
          >
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5 sm:pl-5 pl-3">
              <div className=" bg-[#DCCFED] xl:h-[440px] xl:w-[280px] lg:h-[370px] lg:w-[220px] md:w-[200px] md:h-[355px] sm:w-[180px] sm:h-[335px]  w-[140px] h-[335px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  src="/img/papugi.png"
                  alt="Miniatur"
                  sizes="100vw"
                  width={200}
                  height={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg sm:text-base text-md">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-base sm:text-base text-sm">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px] sm:h-[30px] sm:w-[160px] w-[125px] h-[30px] text-[12px] inline-flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-4 sm:h-4 h-4 w-4 pl-1 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm">
                      {" "}
                      View Code
                    </span>
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5 sm:pl-5 pl-3">
              <div className=" bg-[#DCCFED] xl:h-[440px] xl:w-[280px] lg:h-[370px] lg:w-[220px] md:w-[200px] md:h-[355px] sm:w-[180px] sm:h-[335px]  w-[140px] h-[335px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  // src="/img/papugi.png"
                  alt="Miniature"
                  sizes="100vw"
                  width={200}
                  height={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg sm:text-base text-md">
                  Lorem Ipsum
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-base sm:text-base text-sm">
                  Lorem Ipsum
                </p>
                <a href="#">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px] sm:h-[30px] sm:w-[160px] w-[125px] h-[30px] text-[12px] inline-flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-4 sm:h-4 h-4 w-4 pl-1 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm">
                      {" "}
                      View Code
                    </span>
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5 sm:pl-5 pl-3">
              <div className=" bg-[#DCCFED] xl:h-[440px] xl:w-[280px] lg:h-[370px] lg:w-[220px] md:w-[200px] md:h-[355px] sm:w-[180px] sm:h-[335px]  w-[140px] h-[335px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  // src="/img/papugi.png"
                  alt="Miniature"
                  sizes="100vw"
                  width={200}
                  height={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg sm:text-base text-md">
                  Lorem Ipsum
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-base sm:text-base text-sm">
                  Lorem Ipsum
                </p>
                <a href="#">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px] sm:h-[30px] sm:w-[160px] w-[125px] h-[30px] text-[12px] inline-flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-4 sm:h-4 h-4 w-4 pl-1 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm">
                      {" "}
                      View Code
                    </span>
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5 sm:pl-5 pl-3">
              <div className=" bg-[#DCCFED] xl:h-[440px] xl:w-[280px] lg:h-[370px] lg:w-[220px] md:w-[200px] md:h-[355px] sm:w-[180px] sm:h-[335px]  w-[140px] h-[335px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  // src="/img/papugi.png"
                  alt="Miniature"
                  sizes="100vw"
                  width={200}
                  height={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg sm:text-base text-md">
                  Lorem Ipsum
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-base sm:text-base text-sm">
                  Lorem Ipsum
                </p>
                <a href="#">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px] sm:h-[30px] sm:w-[160px] w-[125px] h-[30px] text-[12px] inline-flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-4 sm:h-4 h-4 w-4 pl-1 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm">
                      {" "}
                      View Code
                    </span>
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5 sm:pl-5 pl-3">
              <div className=" bg-[#DCCFED] xl:h-[440px] xl:w-[280px] lg:h-[370px] lg:w-[220px] md:w-[200px] md:h-[355px] sm:w-[180px] sm:h-[335px]  w-[140px] h-[335px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  // src="/img/papugi.png"
                  alt="Miniature"
                  sizes="100vw"
                  width={200}
                  height={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg sm:text-base text-md">
                  Lorem Ipsum
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-base sm:text-base text-sm">
                  Lorem Ipsum
                </p>
                <a href="#">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px] sm:h-[30px] sm:w-[160px] w-[125px] h-[30px] text-[12px] inline-flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-4 sm:h-4 h-4 w-4 pl-1 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm">
                      {" "}
                      View Code
                    </span>
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5 sm:pl-5 pl-3">
              <div className=" bg-[#DCCFED] xl:h-[440px] xl:w-[280px] lg:h-[370px] lg:w-[220px] md:w-[200px] md:h-[355px] sm:w-[180px] sm:h-[335px]  w-[140px] h-[335px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  // src="/img/papugi.png"
                  alt="Miniature"
                  sizes="100vw"
                  width={200}
                  height={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg sm:text-base text-md">
                  Lorem Ipsum
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-base sm:text-base text-sm">
                  Lorem Ipsum
                </p>
                <a href="#">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px] sm:h-[30px] sm:w-[160px] w-[125px] h-[30px] text-[12px] inline-flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-4 sm:h-4 h-4 w-4 pl-1 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm">
                      {" "}
                      View Code
                    </span>
                  </button>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.div>

      <div
        id="contact"
        className="about h-fit bg-[#E1EBED] transition-transform transform w-full flex items-center justify-center flex-col"
      >
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="hide"
          className="text-[#291C3A] mt-20 mb-8 xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold text-2xl"
        >
          Start working with me.
        </motion.h1>

        <motion.p
          initial="hide"
          whileInView="show"
          exit="hide"
          className=" text-[#291C3A] font-bold mb-12 xl:text-xl lg:text-xl md:text-lg sm:text-base text-md opacity-60"
        >
          grzegorz021104@gmail.com
        </motion.p>

        <button
          onClick={handleEmailClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            ...buttonStyles,
            background: isHovered
              ? buttonStyles.backgroundImage
              : "linear-gradient(to right, #Fuchsia, #FF00FF, #FF69B4)",
          }}
          className=" border-t shadow-lg font-serif text-lg font-bold text-grey-lightest mb-24 xl:w-[170px] xl:h-[60px] lg:w-[170px] lg:h-[60px] md:w-[150px] md:h-[60px] sm:w-[150px] sm:h-[60px] w-[150px] h-[60px] rounded-xl"
        >
          Contact Me
        </button>
      </div>
      <div className="footer bg-[#291C3A] w-full h-44 mx-auto">
        <Image
          src="/img/logo.png"
          alt="Logo CezikDev"
          width={300}
          height={300}
          className="mx-auto"
        />
        <div className=" justify-center items-center flex">
          <motion.p
            className=" inline-flex float-left"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={textFromLeftAnimationFooter}
          >
            <p className=" text-[10px] xl:text-xl lg:text-xl md:text-base sm:text-md">
              ©2024 Designed and build by
            </p>
            <p className=" inline bg-gradient-to-r from-[#c188f0] via-[#b666f8] to-[#e50dec] bg-clip-text text-transparent xl:text-xl lg:text-xl md:text-base sm:text-md text-[10px]">
              &nbsp;Grzegorz Siemieniec&nbsp;
            </p>
          </motion.p>
        </div>
      </div>
      <BackToTopButton />
    </main>
  );
}
