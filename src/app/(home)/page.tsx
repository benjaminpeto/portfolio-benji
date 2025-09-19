import Script from "next/script";
import Bio from "../../../components/Bio";
import Contact from "../../../components/Contact";
import Hero from "../../../components/Hero";
import List from "../../../components/List";
import Skills from "../../../components/Skills";

export default function Home() {
    return (
        <main>
            <Hero />
            <Skills />
            <Bio />
            <List />
            <Contact />
            <div id='locationdb-widget'></div>
            <Script
                src='https://preview.locationdb.com/embed/loader.js'
                data-url='https://preview.locationdb/embed'
                data-theme='light'
                data-lang='en'
                data-library-slug='gran-canaria'
            />
        </main>
    );
}
