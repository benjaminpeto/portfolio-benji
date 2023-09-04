export default function BackgroundLights() {
  return (
    <div className='hidden sm:block fixed w-full max-w-lg'>
      <div className='-z-10 absolute -right-80 top-40 w-72 h-72 bg-purple-500 rounded-full filter blur-xl opacity-30 animate-blob'></div>
      <div className='-z-10 absolute left-80 top-44 w-72 h-72 bg-yellow-500 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000'></div>
      <div className='-z-10 absolute left-96 top-96 w-72 h-72 bg-pink-500 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-4000'></div>
    </div>
  );
}
