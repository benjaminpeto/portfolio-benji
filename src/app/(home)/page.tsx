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
        </main>
    );
}
