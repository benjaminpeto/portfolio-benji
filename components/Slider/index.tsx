"use client";
import { motion } from "framer-motion";
import Icons from "../IconSVGs/ToolIcons";

export default function Slider() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                delay: 0.1,
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
            className='slider after:bg-gradient-to-l after:from-transparent after:via-transparent after:to-white before:bg-gradient-to-l before:from-transparent before:via-transparent before:to-white dark:after:bg-gradient-to-l dark:after:from-transparent dark:after:via-transparent dark:after:to-black dark:before:bg-gradient-to-l dark:before:from-transparent dark:before:via-transparent dark:before:to-black'
        >
            <div className='slide-track'>
                <Icons />
                <Icons />
            </div>
        </motion.div>
    );
}
