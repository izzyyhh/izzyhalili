import { AboutMe } from './components/AboutMe'
import { Experience } from './components/Experience'
import Header from './components/Header'
import HiddenTrigger from './components/HiddenTrigger'
import { Projects } from './components/Projects'

export default function Home() {
    return (
        <div className="bg-zinc dark:bg-zinc-950">
            <div className=" grid gap-20 dark:bg-zinc-950 p-4 pt-2 max-w-[800px] ml-auto mr-auto">
                <Header />
                <AboutMe />
                <Experience />
                <Projects />
                <footer>
                    <p className="text-sm text-center text-muted-foreground mb-4">
                        <HiddenTrigger>
                            <span>Ismail Halili</span>
                        </HiddenTrigger>{' '}
                        © {new Date().getFullYear()} - Sonnengarten 5, 5700 Zell
                        am See
                    </p>
                </footer>
            </div>
        </div>
    )
}
