import { Signika_Negative } from 'next/font/google'
import Image from 'next/image'

const signikaNegative = Signika_Negative({
    subsets: ['latin'],
})

export default function Header() {
    return (
        <header className=" h-screen w-full bg-nightblack flex flex-col">
            <div className="p-8 flex justify-between items-center">
                <p
                    className={`${signikaNegative.className} text-ghostwhite uppercase font-bold tracking-[0.3rem] text-lg`}
                >
                    Izzy
                </p>
                <button className="w-8 h-3">
                    <div className="h-full flex flex-col justify-between">
                        <div className="h-[2px] w-full bg-ghostwhite"></div>
                        <div className="h-[2px] w-[80%] bg-ghostwhite ml-auto"></div>
                    </div>
                </button>
            </div>

            <div className="flex flex-auto gap-2">
                <div className=" w-5/12 relative">
                    <div className="imgbox w-[550px] absolute left-[-270px]">
                        <img
                            src="/me.png"
                            alt="person, Ismail Halili"
                            className=" contrast-[1.5] opacity-[0.6]"
                        />
                    </div>
                </div>

                <div className="z-10">
                    <h1
                        className={`${signikaNegative.className} mt-24 text-ghostwhite uppercase font-bold tracking-[0.5rem] text-4xl z-10`}
                    >
                        Ismail \<br></br>Halili \
                    </h1>
                    <h2
                        className={`${signikaNegative.className} mt-4 text-ghostwhite uppercase font-thin tracking-[0.5rem] text-2xl z-10`}
                    >
                        Software <br /> Engineer
                    </h2>

                    <div className="socials mt-12">
                        <ul className="flex gap-4 flex-col">
                            <li>
                                <Image
                                    src="/github-mark.svg"
                                    height={32}
                                    width={32}
                                    alt="Github Logo"
                                    className="dark:invert contrast-[1000]"
                                    color="#000"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/linkedin.svg"
                                    height={32}
                                    width={32}
                                    alt="LinkedIn Logo"
                                    className="dark:invert"
                                    color="#000"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/instagram.svg"
                                    height={32}
                                    width={32}
                                    alt="Instagram Logo"
                                    className="dark:invert"
                                    color="#000"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/x.svg"
                                    height={32}
                                    width={32}
                                    alt="X Twitter Logo"
                                    className="dark:invert"
                                    color="#000"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={`${signikaNegative.className} font-thin tracking-widest text-center py-8`}
            >
                <p>IZZY &copy;{new Date().getFullYear()}</p>
            </div>
        </header>
    )
}
