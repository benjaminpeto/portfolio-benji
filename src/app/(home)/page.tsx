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

            {/* LocationDB embed */}
            <div id='locationdb-widget' />
            <Script
                src='https://preview.locationdb.com/embed/loader.js'
                strategy='afterInteractive'
                data-url='https://preview.locationdb.com/embed'
                data-theme='light'
                data-lang='en'
                data-library-slug='gran-canaria' // or data-library-id="UUID"
                crossOrigin='anonymous'
                onLoad={() => console.log("[locationdb] loader loaded")}
                onError={(e) => console.error("[locationdb] loader failed", e)}
            />
        </main>
    );
}
