import { AboutMe } from './components/AboutMe'
import { Experience } from './components/Experience'
import Header from './components/Header'

export default function Home() {
    return (
        <div className="bg-zinc grid gap-20 dark:bg-zinc-950 p-4 pt-2">
            <Header />
            <AboutMe />
            <Experience />
        </div>
    )
}
