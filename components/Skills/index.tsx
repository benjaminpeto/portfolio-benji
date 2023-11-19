import Slider from "../Slider";
import Paragraphs from "../Text/Paragraphs";
export default function Skills() {
    return (
        <section className='flex justify-center align-middle flex-col items-center sm:mt-32 mt-20 px-6 md:px-12 lg:px-24 xl:px-32'>
            <Paragraphs classNames='mb-4' text='Feeling confident working with the following technologies' />
            <Slider />
            <Paragraphs id='about' classNames='mt-4' text='however not at all frightened to pick up a new one.' />
        </section>
    );
}
