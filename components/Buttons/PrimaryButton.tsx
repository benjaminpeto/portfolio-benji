export default function PrimaryButton({ children }: { children: React.ReactNode }) {
    return (
        <button className='group button relative p-[0.06rem] inline-flex items-center justify-center font-bold overflow-hidden group rounded-md my-12 animate-changeColor'>
            <span className='relative px-10 pt-3 pb-2 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 duration-100'>
                <span className='relative inline-flex text-black group-hover:text-white dark:text-white font-normal'>
                    {children}
                </span>
            </span>
        </button>
    );
}
