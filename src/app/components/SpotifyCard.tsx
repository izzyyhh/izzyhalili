import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import axios from 'axios'
import { motion } from 'framer-motion'
import { PauseIcon, PlayIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const isMobile = (userAgent: string): boolean => {
    return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent)
}

export function SpotifyCard() {
    const [track, setTrack] = useState<any>({})
    const [isPlay, setIsPlay] = useState(false)
    const [mobileCheck, setMobileCheck] = useState(false)

    useEffect(() => {
        axios.get('/api/spotify').then((result: any) => {
            console.log(result)
            setTrack(result.data.track)
        })

        const player = document.getElementById('song') as HTMLAudioElement

        if (player) {
            player.volume = 0.5
        }

        setMobileCheck(isMobile(navigator.userAgent))
    }, [])
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                    <Image
                        src={'/spotify.svg'}
                        typeof="svg"
                        alt="Spotify icon"
                        className="dark:invert-[1]"
                        width={22}
                        height={22}
                    ></Image>
                    <p>
                        {track ? (
                            'Currently listening'
                        ) : (
                            <>
                                {'Me on Spotify '}
                                <a
                                    className="underline"
                                    href="https://open.spotify.com/user/e4syyy?si=489f84a74e9c40cd"
                                >
                                    e4sy
                                </a>
                            </>
                        )}
                    </p>
                </CardTitle>
                {!track && (
                    <CardDescription>
                        If am currently listening to something, it will be
                        displayed here
                    </CardDescription>
                )}

                {track && (
                    <>
                        <div className="relative pt-2 flex gap-3 items-center">
                            <div className="relative flex items-center justify-center">
                                {track?.images?.length > 0 && (
                                    <img
                                        src={
                                            track?.images?.find(
                                                (i: any) => i.height === 64
                                            )?.url ||
                                            track?.images?.[0]?.url ||
                                            ''
                                        }
                                        width={40}
                                        height={40}
                                        alt="Song cover image"
                                    ></img>
                                )}
                                <audio
                                    id="song"
                                    hidden
                                    className="bg-red"
                                    src={track?.preview}
                                    onEnded={() => setIsPlay(false)}
                                ></audio>
                                {!isPlay ? (
                                    <PlayIcon
                                        onClick={() => {
                                            const player =
                                                document.getElementById(
                                                    'song'
                                                ) as HTMLAudioElement

                                            if (player) {
                                                player.play()
                                                setIsPlay(true)
                                            }
                                        }}
                                        width={20}
                                        className="absolute cursor-pointer"
                                    ></PlayIcon>
                                ) : (
                                    <PauseIcon
                                        className="absolute cursor-pointer"
                                        onClick={() => {
                                            const player =
                                                document.getElementById(
                                                    'song'
                                                ) as HTMLAudioElement

                                            if (player) {
                                                player.pause()
                                                setIsPlay(false)
                                            }
                                        }}
                                    ></PauseIcon>
                                )}
                            </div>
                            <div>
                                <small className="text-xs font-medium leading-none">
                                    {track.name}
                                </small>
                                <CardDescription className="text-xs">
                                    by {track.artists}
                                </CardDescription>
                            </div>
                        </div>
                        {!mobileCheck && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -20,
                                    display: 'none',
                                }}
                                animate={
                                    isPlay
                                        ? { opacity: 1, y: 0, display: 'block' }
                                        : { opacity: 0, y: -20 }
                                }
                                transition={{ duration: 0.5 }}
                            >
                                <Slider
                                    className="pt-2 "
                                    defaultValue={[50]}
                                    step={1}
                                    onValueChange={(val) => {
                                        const player = document.getElementById(
                                            'song'
                                        ) as HTMLAudioElement

                                        if (player) {
                                            player.volume = val[0] / 100
                                        }
                                    }}
                                />
                            </motion.div>
                        )}
                    </>
                )}
            </CardHeader>
        </Card>
    )
}
