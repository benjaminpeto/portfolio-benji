export default function Home() {
  return (
    <main>
      <div className='hidden sm:block fixed w-full max-w-lg'>
        <div className='-z-10 absolute -right-80 top-40 w-72 h-72 bg-purple-500 rounded-full filter blur-xl opacity-30 animate-blob'></div>
        <div className='-z-10 absolute left-80 top-44 w-72 h-72 bg-yellow-500 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000'></div>
        <div className='-z-10 absolute left-96 top-96 w-72 h-72 bg-pink-500 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-4000'></div>
      </div>
      <div className='flex flex-col items-center justify-center mt-20 sm:mt-40'>
        <h1 className='my-28 sm:my-10 text-center select-none text-10xl sm:text-8.5xl leading-none tracking-tightest font-extrabold'>
          <span
            data-content='Coffee.'
            className='relative inline-block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-1'
          >
            <span className='px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1'>
              Coffee.
            </span>
          </span>
          <span
            data-content='Code.'
            className='relative inline-block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-2'
          >
            <span className='px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2'>
              Code.
            </span>
          </span>
          <span
            data-content='Repeat.'
            className='relative inline-block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-3'
          >
            <span className='px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3'>
              Repeat.
            </span>
          </span>
        </h1>
        <p className='max-w-xl inline-block dark:text-gray-400 text-gray-700 tracking-tight sm:leading-10 sm:text-2xl font-light text-center mx-4 sm:mx-0'>
          <strong className='text-white'>Hi there!</strong> It&apos;s Benji, the Frontend Funsmith, is here to jazz up
          the web, one click at a time! Join the fun!
        </p>
      </div>
    </main>
  );
}
