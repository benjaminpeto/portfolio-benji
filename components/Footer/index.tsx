import Socials from "../Socials";

export default function Footer() {
    return (
        <footer className='flex justify-center gap-2 flex-col items-center border-t dark:border-gray-800 border-gray-200 w-full py-10'>
            <Socials />
            <p className='dark:text-gray-400 text-gray-800 tracking-wider text-xs md:text-sm leading-5 my-4'>
                Made with ❤️ by me.
            </p>
            <span className='text-center text-xs text-gray-500 dark:text-gray-500 '>
                &copy; Copyright {new Date().getFullYear()}
            </span>
        </footer>
    );
}
