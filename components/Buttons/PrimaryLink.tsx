"use client";

import { motion } from "framer-motion";
import { Ref } from "react";

interface ButtonProps {
    children: React.ReactNode;
    href: string;
    ref?: Ref<HTMLAnchorElement>;
    download?: string;
}

export default function PrimaryButtonLink({ children, href, ref, download }: ButtonProps) {
    return (
        <motion.a
            initial={{ opacity: 0, scale: 0.2, y: 200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.25,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            href={href}
            download={download}
            ref={ref}
            className='group button relative p-[0.06rem] inline-flex items-center justify-center font-bold overflow-hidden group rounded-md my-12 animate-changeColor'
        >
            <span className='relative px-10 pt-3 pb-2 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 duration-100'>
                <span className='relative inline-flex text-black group-hover:text-white dark:text-white font-normal'>
                    {children}
                </span>
            </span>
        </motion.a>
    );
}
