import { AboutMe } from './components/AboutMe'
import { Experience } from './components/Experience'
import Header from './components/Header'
import { Projects } from './components/Projects'

export default function Home() {
    return (
        <div className="bg-zinc dark:bg-zinc-950">
            <div className=" grid gap-20 dark:bg-zinc-950 p-4 pt-2 max-w-[800px] ml-auto mr-auto">
                <Header />
                <AboutMe />
                <Experience />
                <Projects />
            </div>
        </div>
    )
}
