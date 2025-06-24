import React from 'react'
import styles from '../../style'
import { techStack, socialMedia } from '../../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            An easy way to understand the algorithms.         
          </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          <div className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              Tech Stack
            </h4>
            <ul className='list-none mt-4'>
              {techStack.map((tech) => (
                <div key={tech.id} className={tech.className}>
                  <span className="mr-2 text-xl">{tech.icon}</span>
                  <span className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                    {tech.name}
                  </span>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2025 AlgoVision. All Rights Reserved.
        </p>  
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              key={social.id}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>    
      </div>
    </section>
  )
}

export default Footer;