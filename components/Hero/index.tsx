"use client";
import { motion } from "framer-motion";
import PrimaryButtonLink from "../Buttons/PrimaryLink";

export default function Hero() {
    return (
        <section className='flex flex-col items-center justify-center sm:mt-32'>
            <h1 className='my-14 sm:my-10 text-center select-none text-10xl sm:text-8.5xl leading-none tracking-tightest font-extrabold px-6'>
                <motion.span
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.25,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    data-content='Coffee.'
                    className='relative inline-block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-1'
                >
                    <span className='px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1'>
                        Coffee.
                    </span>
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: 0.25,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    data-content='Code.'
                    className='relative inline-block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-2'
                >
                    <span className='px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2'>
                        Code.
                    </span>
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    data-content='Repeat.'
                    className='relative inline-block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-3'
                >
                    <span className='px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3'>
                        Repeat.
                    </span>
                </motion.span>
            </h1>
            <motion.p
                initial={{ opacity: 0, y: 100, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.25,
                    delay: 0.75,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className='max-w-3xl inline-block dark:text-gray-400 text-gray-700 tracking-tight sm:leading-10 sm:text-xl text-md font-light text-center mx-4 sm:mx-0 px-6'
            >
                <strong className='text-black dark:text-white'>Hi there!</strong> I&apos;m Benji, all about frontend
                with a peek into the backend world. I thrive on perfecting React sites and caring deeply about UX.
                Always tinkering with new tech, especially excited about what AI can bring to the table.
            </motion.p>
            <PrimaryButtonLink href='#contact'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 mr-2'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                </svg>
                Get in Contact
            </PrimaryButtonLink>
        </section>
    );
}
