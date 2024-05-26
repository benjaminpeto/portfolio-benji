"use client";
import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../ThemeSwitcher";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState("Home");

    const menuItems = ["Home", "About", "Projects", "Contact"];

    const handleMobileClick = (item: string) => {
        setIsMenuOpen(false);
        setIsActive(item);
    };

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className='backdrop-blur-sm dark:bg-black/40 animate-fade-down animate-duration-[250ms] animate-delay-[1000ms] animate-ease-linear'
        >
            <NavbarContent className='sm:hidden' justify='start'>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className='sm:hidden mx-auto' justify='end'>
                <NavbarBrand className='grow-0'>
                    <p className='font-bold text-inherit'>benji_dev</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4' justify='start'>
                <NavbarBrand>
                    <p className='font-bold text-inherit'>benji_dev</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                {menuItems.map((item) => (
                    <NavbarItem key={item}>
                        <Link
                            className={isActive === item ? "text-primary font-bold" : "text-foreground"}
                            onClick={() => setIsActive(item)}
                            href={`${item === "Home" ? "#" : "#" + item.toLocaleLowerCase()}`}
                        >
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent className='hidden sm:flex' justify='end'>
                <ThemeSwitcher />
            </NavbarContent>

            <NavbarMenu className='flex items-end justify-end pb-10'>
                <ThemeSwitcher />
                {menuItems.map((item, index) => (
                    <NavbarMenuItem className='my-1' key={`${item}-${index}`}>
                        <Link
                            className={`w-full text-4xl flex justify-center ${
                                isActive === item ? "text-primary font-bold" : "text-foreground"
                            }`}
                            href={`${item === "Home" ? "#" : "#" + item.toLocaleLowerCase()}`}
                            size='lg'
                            onClick={() => handleMobileClick(item)}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
