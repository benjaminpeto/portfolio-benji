import Image from "next/image";
import ProfileImg from "../../public/assets/profile_image.png";
import PrimaryButtonLink from "../Buttons/PrimaryLink";
import Heading2 from "../Text/Heading2";
import Paragraphs from "../Text/Paragraphs";

export default function Bio() {
    return (
        <section className='flex justify-center align-middle flex-col items-center mx-2 lg:mx-12 xl:mx-36 sm:mt-32 mt-20 px-6 md:px-12 lg:px-24 xl:px-32 relative'>
            <div className='max-w-[1024px] flex-col justify-center items-center align-middle text-center'>
                <Heading2 text='A little about me...' />
                <Paragraphs
                    classNames='mt-4 w-2/3 md:!leading-loose mb-6 md:mb-14'
                    text='Venturing beyond frontend and embracing the full-stack frontier'
                />
                <div className='blob2'></div>
                <div className='blob3'></div>
                <div className='md:grid sm:grid-cols-3 gap-12 justify-center items-center'>
                    <Image
                        src={ProfileImg}
                        width={500}
                        height={500}
                        alt='Profile image displayed as code text with gradient colors'
                        className='rounded-full object-contain pb-10 md:pb-0 mx-auto md:mx-0'
                        id='profile-image'
                    />
                    <div className='sm:col-span-2 flex flex-col glassing text-base text-left p-8 font-light border border-solid border-gray-900/10 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(255,255,255,0.2)] gap-4'>
                        <p>
                            I am a self-taught developer passionate about crafting exceptional digital experiences. Over
                            the past two years, I have had the opportunity to work on diverse projects that allowed me
                            to immerse myself in learning and experimenting with the latest technologies, honing my
                            skills in React, NextJS, TypeScript, and more.
                        </p>
                        <p>
                            My dedication to continuous learning keeps me at the forefront of web development trends. I
                            am particularly committed to accessibility and user interface. I believe that a great
                            digital experience should be inclusive and intuitive for all users.
                        </p>
                        <p>
                            Beyond web development, I am fascinated by the potential of artificial intelligence to
                            improve lives. I am eager to explore how AI can be integrated into web applications to
                            create more personalized and efficient user experiences. My curiosity and passion for
                            learning drive me to continuously push the boundaries of what is possible in the digital
                            realm.
                        </p>
                    </div>
                </div>

                <PrimaryButtonLink
                    href='/assets/BenjaminPeto_curriculumVitae_NoPhone.pdf'
                    download='benjamin_peto_developer_cv.pdf'
                >
                    <svg
                        className='h-6 w-6 mr-2'
                        fill='#fff'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        stroke='currentColor'
                    >
                        <path d='M20,6.52797748 L20,19.5 C20,20.8807119 18.8807119,22 17.5,22 L6.5,22 C5.11928813,22 4,20.8807119 4,19.5 L4,4.5 C4,3.11928813 5.11928813,2 6.5,2 L15.4720225,2 C15.6047688,1.99158053 15.7429463,2.03583949 15.8535534,2.14644661 L19.8535534,6.14644661 C19.9641605,6.25705373 20.0084195,6.39523125 20,6.52797748 Z M15,3 L6.5,3 C5.67157288,3 5,3.67157288 5,4.5 L5,19.5 C5,20.3284271 5.67157288,21 6.5,21 L17.5,21 C18.3284271,21 19,20.3284271 19,19.5 L19,7 L15.5,7 C15.2238576,7 15,6.77614237 15,6.5 L15,3 Z M16,3.70710678 L16,6 L18.2928932,6 L16,3.70710678 Z M12,16.2928932 L14.1464466,14.1464466 C14.3417088,13.9511845 14.6582912,13.9511845 14.8535534,14.1464466 C15.0488155,14.3417088 15.0488155,14.6582912 14.8535534,14.8535534 L11.9198269,17.7872799 C11.8307203,17.9246987 11.6759769,18.0156098 11.5,18.0156098 C11.3240231,18.0156098 11.1692797,17.9246987 11.0801731,17.7872799 L8.14644661,14.8535534 C7.95118446,14.6582912 7.95118446,14.3417088 8.14644661,14.1464466 C8.34170876,13.9511845 8.65829124,13.9511845 8.85355339,14.1464466 L11,16.2928932 L11,9.5 C11,9.22385763 11.2238576,9 11.5,9 C11.7761424,9 12,9.22385763 12,9.5 L12,16.2928932 L12,16.2928932 Z' />
                    </svg>
                    Download my CV
                </PrimaryButtonLink>
            </div>
        </section>
    );
}
