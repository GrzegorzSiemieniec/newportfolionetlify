"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "./fontawesome";
import BackToTopButton from "./BackToTop";
import yourImage from "../img/logo.png";
import vue from "../img/vue.png";
import next from "../img/next.png";
import git from "../img/git.png";
import php from "../img/php.png";
import html from "../img/html.png";
import js from "../img/js.png";
import node from "../img/node.png";
import tailwind from "../img/tailwind.png";
import react from "../img/react.png";
import mongodb from "../img/mongodb.png";

import papugi from "../img/papugi.png";

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
      const email = 'grzegorz021104@gmail.com';
      window.location.href = `mailto:${email}`;
    };

    const defaultBackground = 'linear-gradient(90deg, rgba(102,0,117,1) 0%, rgba(195,42,91,0.8995973389355743) 100%)';

    const buttonStyles = {
      backgroundImage: isHovered
        ? 'linear-gradient(to right, #4F46E5, #6E8EF9, #8FBCFF)'
        : defaultBackground,
      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      transition: 'transform 0.3s ease-in-out, background-image 0.3s ease-in-out',
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
      x: -300,
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
      <div className="menu bg-gradient-to-r from-[#8121D0] via-[#5a2983] to-[#291C3A] w-full inline-flex h-24 my-auto">
        <Image
          src={yourImage}
          alt="Your Image Description"
          width={270}
          height={50}
        />

        <ul className="menuLi text-white text-2xl inline-flex my-auto">
          <li className=" xl:ml-14  lg:ml-14 md:ml-10 hover:scale-125 transition-transform">
            <a href="#home">Home</a>
          </li>
          <li className="xl:ml-14 lg:ml-14 md:ml-10 hover:scale-125 transition-transform">
            <a href="#aboutme">About</a>
          </li>
          <li className="xl:ml-14 lg:ml-14 md:ml-10 hover:scale-125 transition-transform">
            <a href="#skills">Skills</a>
          </li>
          <li className="xl:ml-14 lg:ml-14 md:ml-10 hover:scale-125 transition-transform">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <div
        id="home"
        className="introduction bg-[#331C52] w-full pl-24 h-fit pt-52 transition-transform transform"
      >
        <p className="font-bold text-[#9d7fc7] text-8xl pb-8">
          <Typewriter
            options={{
              delay: 30,
            }}
            onInit={(typewriter) => {
              typewriter.start().typeString("I'm a React<br />Developer");
            }}
          />
        </p>
        <p className=" text-5xl pb-6">Grzegorz Siemieniec</p>
        <ul className="inline-flex">
          <li className="mr-3">
            <a href="https://github.com/GrzegorzSiemieniec">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-8 h-8 text-[#9d7fc7] rounded-lg hover:cursor-pointer"
              />
            </a>
          </li>
          <li className="ml-3">
            <a href="https://www.linkedin.com/in/grzegorz-siemieniec-526539250/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-8 h-8 text-[#9d7fc7] rounded-lg mb-20 hover:cursor-pointer"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        id="skills"
        className="skills h-28 bg-[#291C3A] w-full transition-transform transform pt-2 flex"
      >
        <motion.p
          className=" inline-flex justify-center items-center"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={Skills}
        >
          <span className="xl:text-8xl font-bold xl:mr-5 lg:mr-4 md:mr-4 xl:pl-24 lg:pl-7 md:pl-5 lg:text-8xl md:text-7xl sm:text-9xl">6</span>
          <p className="xl:text-4xl lg:text-4xl md:text-3xl items-center text-[#DCCFED]">
            <span>PROJECTS</span> <span className="block">COMPLETED</span>
          </p>

          <span className="xl:text-8xl font-bold xl:mr-5 lg:mr-4 md:mr-4 xl:ml-24 lg:ml-20 md:ml-14 lg:text-8xl md:text-7xl">1</span>
          <p className="xl:text-4xl lg:text-4xl md:text-3xl items-center text-[#DCCFED]">
            <span>YEAR OF</span>
            <span className="block">EXPERIENCE</span>
          </p>
        </motion.p>
      </div>
      <div
        id="aboutme"
        className="about h-fit bg-[#E1EBED] transition-transform transform w-full"
      >
        <p className="text-[#291C3A] xl:text-4xl lg:text-4xl md:text-3xl font-bold xl:pl-24 mt-20 mb-12 lg:pl-7 md:pl-5">
          About me
        </p>
        <motion.p
          className=" text-[#291C3A] xl:text-3xl lg:text-3xl md:text-2xl xl:pl-24 mt-10 mb-12 lg:pl-7 md:pl-5"
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
        <p className="text-[#291C3A] xl:text-4xl lg:text-4xl md:text-3xl font-bold mt-20 mb-12 float-right xl:pr-24 lg:pr-7 md:pl-5">
          My Skills
          <p className=" text-[#291C3A] xl:text-3xl lg:text-3xl md:text-2xl mt-10 mb-12 font-normal xl:pr-24 lg:pr-7 md:pr-5">
            Technologies I have been working recently
          </p>
          <motion.ul
            className=" inline-grid grid-cols-5 gap-5 my-auto mx-auto xl:pr-24 lg:pr-7 md:pr-5"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={Skills}
          >
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white p-5">
              <Image
                src={vue}
                alt="Your Image Description"
                width={86}
                height={86}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white pt-2">
              <Image
                src={next}
                alt="Your Image Description"
                width={96}
                height={96}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white p-5">
              <Image
                src={git}
                alt="Your Image Description"
                width={86}
                height={86}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white pt-5">
              <Image
                src={node}
                alt="Your Image Description"
                width={100}
                height={100}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white p-5">
              <Image
                src={js}
                alt="Your Image Description"
                width={86}
                height={86}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white">
              <Image
                src={mongodb}
                alt="Your Image Description"
                width={100}
                height={100}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white p-5">
              <Image
                src={react}
                alt="Your Image Description"
                width={86}
                height={86}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white pl-1">
              <Image
                src={tailwind}
                alt="Your Image Description"
                width={88}
                height={88}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white pl-1 pt-6">
              <Image
                src={php}
                alt="Your Image Description"
                width={88}
                height={88}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white p-5">
              <Image
                src={html}
                alt="Your Image Description"
                width={86}
                height={86}
              />
            </li>
          </motion.ul>
        </p>
      </div>
      <motion.div
        id="projects"
        className="about h-fit bg-[#E1EBED] transition-transform transform w-full"
      >
        <p className="text-[#291C3A] xl:text-4xl lg:text-4xl md:text-3xl font-bold xl:pl-24 mt-20 mb-12 lg:pl-7 md:pl-5">
          My Projects
        </p>
        <p className=" text-[#291C3A] xl:text-3xl lg:text-3xl md:text-2xl xl:pl-24 mt-10 mb-12 lg:pl-7 md:pl-5">
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
            // dla lg 3 dla md 3 i sm 2
            className= "mb-52 text-center hover:cursor-grab select-none xl:h-[430px] lg:h-[365px] md:h-[340px]"
          >
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5">
              <div className=" bg-[#DCCFED] xl:h-[420px] xl:w-[280px] lg:h-[355px] lg:w-[220px] md:w-[200px] md:h-[330px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  // dla lg 150 dla md 130 i sm
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-sm">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px]">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm"> View Code</span>
                   
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5">
              <div className=" bg-[#DCCFED] xl:h-[420px] xl:w-[280px] lg:h-[355px] lg:w-[220px] md:w-[200px] md:h-[330px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  // dla lg 150 dla md 130 i sm
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-sm">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px]">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm"> View Code</span>
                   
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5">
              <div className=" bg-[#DCCFED] xl:h-[420px] xl:w-[280px] lg:h-[355px] lg:w-[220px] md:w-[200px] md:h-[330px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  // dla lg 150 dla md 130 i sm
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-sm">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px]">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm"> View Code</span>
                   
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5">
              <div className=" bg-[#DCCFED] xl:h-[420px] xl:w-[280px] lg:h-[355px] lg:w-[220px] md:w-[200px] md:h-[330px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  // dla lg 150 dla md 130 i sm
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-sm">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px]">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm"> View Code</span>
                   
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5">
              <div className=" bg-[#DCCFED] xl:h-[420px] xl:w-[280px] lg:h-[355px] lg:w-[220px] md:w-[200px] md:h-[330px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  // dla lg 150 dla md 130 i sm
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-sm">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px]">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm"> View Code</span>
                   
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" xl:pl-24 lg:pl-7 md:pl-5">
              <div className=" bg-[#DCCFED] xl:h-[420px] xl:w-[280px] lg:h-[355px] lg:w-[220px] md:w-[200px] md:h-[330px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  // dla lg 150 dla md 130 i sm
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] xl:text-2xl font-bold lg:text-lg md:text-lg">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 xl:text-lg mb-[20px] lg:text-sm md:text-sm">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] xl:w-[255px] text-white underline xl:h-[35px] rounded-xl lg:w-[200px] lg:h-[35px] md:h-[35px] md:w-[150px]">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2"
                    />
                    <span className="xl:text-base lg:text-sm md:text-sm"> View Code</span>
                   
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
        className="text-[#291C3A] mt-20 mb-8 xl:text-6xl lg:text-6xl md:text-5xl font-extrabold">Start working with me.</motion.h1>

        <motion.p 
        initial="hide"
        whileInView="show"
        exit="hide" 
        className=" text-[#291C3A] font-bold mb-12 text-xl opacity-60">grzegorz021104@gmail.com</motion.p>

        <button
          onClick={handleEmailClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            ...buttonStyles,
            background: isHovered
              ? buttonStyles.backgroundImage
              : 'linear-gradient(to right, #Fuchsia, #FF00FF, #FF69B4)',
          }}
          className=" border-t shadow-lg font-serif text-lg font-bold text-grey-lightest mb-24 w-[170px] h-[60px] rounded-xl">Contact Me</button>
          
      </div>
      <div className="footer bg-[#291C3A] w-full h-44 mx-auto">
        <Image
          src={yourImage}
          alt="Your Image Description"
          width={270}
          height={50}
          className="mx-auto"
        />
        <div className=" flex justify-center">
          <motion.p
            className=" inline float-left"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={textFromLeftAnimationFooter}
          >
            Designed and build by
            <p className=" inline bg-gradient-to-r from-[#c188f0] via-[#b666f8] to-[#e50dec] bg-clip-text text-transparent">
            &nbsp;Grzegorz Siemieniec&nbsp;
            </p>
            ©2024
          </motion.p>
        </div>
      </div>
      <BackToTopButton />
    </main>
  );
}
