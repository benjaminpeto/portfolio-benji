import Link from "next/link";

export default function PrimaryButton() {
  return (
    <Link
      href='#'
      className='button relative p-[0.06rem] inline-flex items-center justify-center font-bold overflow-hidden group rounded-md my-12 animate-changeColor'
    >
      <span className='relative px-10 pt-3 pb-2 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 duration-100'>
        <span className='relative inline-flex text-black dark:text-white font-normal'>
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
        </span>
      </span>
    </Link>
  );
}
