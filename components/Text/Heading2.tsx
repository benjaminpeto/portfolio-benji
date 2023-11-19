"use client";
import { motion } from "framer-motion";

export default function Paragraphs({ text, classNames }: { text: string; classNames?: string }) {
    return (
        <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                delay: 0.3,
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
            className={`${classNames} text-center select-none text-3xl sm:text-5xl leading-none tracking-tight font-bold bg-gradient-to-r dark:from-white dark:to-gray-500 from-black to-gray-400 bg-clip-text text-transparent`}
        >
            {text}
        </motion.h2>
    );
}
