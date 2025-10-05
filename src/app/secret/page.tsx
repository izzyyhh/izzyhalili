'use client'

import { Button } from '@/components/ui/button'
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemTitle,
} from '@/components/ui/item'

export default function SecretPage() {
    return (
        <main
            className="min-h-screen w-screen flex flex-col absolute top-0 left-0 px-24 overflow-y-auto gap-4"
            style={{
                padding: '2rem',
                color: 'white',
                display: 'flex',
                zIndex: 50,
            }}
        >
            {/* Hintergrund GIF */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url(/spiderlily.gif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0,
                }}
            ></div>

            {/* Overlay für Blur + Mask */}
            <div
                className="absolute inset-0"
                style={{
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    zIndex: 1,
                }}
            ></div>

            <div className="relative z-10">
                <h1 className="text-2xl font-bold mb-10 text-center">
                    🔒 Auf die Liste 🔒
                </h1>
                <div className="w-[80%] mx-auto">
                    <ItemGroup className="gap-2">
                        <Item variant={'outline'}>
                            <ItemMedia variant={'icon'}>🤫</ItemMedia>
                            <ItemContent>
                                <ItemTitle>Moggen</ItemTitle>
                                <ItemDescription>
                                    Gegenseitig moggen. Bye Bye!
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button size="sm" variant="outline">
                                    ...
                                </Button>
                            </ItemActions>
                        </Item>

                        <Item variant={'outline'}>
                            <ItemMedia variant={'icon'}>🌶️</ItemMedia>
                            <ItemContent>
                                <ItemTitle>Bequem auf der Rückbank</ItemTitle>
                                <ItemDescription>
                                    Da wirds heiß...
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button size="sm" variant="outline">
                                    ...
                                </Button>
                            </ItemActions>
                        </Item>
                    </ItemGroup>
                </div>
            </div>
        </main>
    )
}
