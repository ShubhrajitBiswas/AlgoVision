import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from '../../style';
import GetStarted from '../ui/GetStarted';

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} items-start`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px- pt-0`}
      >
        {/* Text Content */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Learn,
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Visualise &</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Master Algorithms.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          AlgoVision offers a dynamic platform to visualize algorithms, making
          complex concepts accessible and engaging for learners.
        </p>
      </div>
      {/* Animation Section */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-0 relative items-start`}
      >
        <div className="w-[100%] h-[100%] relative z-[5] mb-0 -mt-25">
          <DotLottieReact
            src="https://lottie.host/ab4fb3f7-87f4-42f1-9d6b-f9f9426dc4d9/uccYsxhWsE.lottie"
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="absolute z-[0] w-[40%] h-[55%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[20%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[20%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
