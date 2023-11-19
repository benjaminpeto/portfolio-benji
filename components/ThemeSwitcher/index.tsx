"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Sun from "../../public/assets/sun.png";
import Moon from "../../public/assets/moon.png";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const isLightTheme = theme === "light";

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className='flex justify-center'>
            <button
                onClick={() => {
                    setTheme(isLightTheme ? "dark" : "light");
                }}
            >
                {isLightTheme ? (
                    <Image
                        src={Moon}
                        alt='Moon'
                        width={35}
                        height={35}
                        className='hover:scale-110 duration-300 ease-in-out'
                    />
                ) : (
                    <Image
                        src={Sun}
                        alt='Sun'
                        width={35}
                        height={35}
                        className='hover:scale-110 duration-300 ease-in-out'
                    />
                )}
            </button>
        </div>
    );
}
