import Socials from "../Socials";
import Paragraphs from "../Text/Paragraphs";

export default function Footer() {
    return (
        <footer className='flex justify-center gap-2 flex-col items-center border-t dark:border-gray-800 border-gray-200 w-full py-10'>
            <Socials />
            <Paragraphs classNames='!tracking-[0.5rem] my-4 sm:my-0' text='www.benjaminpeto.com' />
            <span className='text-center text-xs text-gray-500 dark:text-gray-500 '>
                &copy; Copyright {new Date().getFullYear()}
            </span>
        </footer>
    );
}
