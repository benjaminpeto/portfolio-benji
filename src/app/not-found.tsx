import Link from "next/link";
import { Providers } from "./providers";
import Heading2 from "../../components/Text/Heading2";
import BackgroundLights from "../../components/BackgroundLights";

export default function NotFound() {
    return (
        <Providers>
            <section className='flex flex-col items-center justify-center align-middle h-[100vh] gap-10'>
                <BackgroundLights />
                <Heading2 text='404 - Not Found' />
                <p className='max-w-3xl inline-block dark:text-gray-400 text-gray-700 tracking-normal sm:leading-10 sm:text-xl text-md font-light text-center mx-4 sm:mx-0 px-6'>
                    I&apos;m terribly sorry, but the page you are looking for doesn&apos;t exist.
                </p>
                <div>
                    <Link
                        href='/'
                        className='group button relative p-[0.06rem] inline-flex items-center justify-center font-bold overflow-hidden group rounded-md animate-changeColor'
                    >
                        <span className='relative px-10 pt-3 pb-2 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 duration-100'>
                            <span className='relative inline-flex text-black group-hover:text-white dark:text-white font-normal'>
                                <svg
                                    className='h-6 w-6 mr-2'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M9 20H7C5.89543 20 5 19.1046 5 18V10.9199C5 10.336 5.25513 9.78132 5.69842 9.40136L10.6984 5.11564C11.4474 4.47366 12.5526 4.47366 13.3016 5.11564L18.3016 9.40136C18.7449 9.78132 19 10.336 19 10.9199V18C19 19.1046 18.1046 20 17 20H15M9 20V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V20M9 20H15'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                Return to Home
                            </span>
                        </span>
                    </Link>
                </div>
            </section>
        </Providers>
    );
}
