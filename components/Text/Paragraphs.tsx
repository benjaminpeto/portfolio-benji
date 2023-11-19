"use client";
import { motion } from "framer-motion";

export default function Paragraphs({ text, classNames, id }: { text: string; classNames?: string; id?: string }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
            id={id}
            className={`inline-block dark:text-gray-400 text-gray-800 tracking-wider uppercase text-xs md:text-sm leading-5 text-center ${classNames}`}
        >
            {text}
        </motion.p>
    );
}
