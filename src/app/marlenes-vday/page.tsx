'use client'

import { Birthstone, Fleur_De_Leah } from 'next/font/google'
import React, { useState } from 'react'
import Confetti from 'react-confetti'

interface PuzzlePiece {
    id: number
    x: number
    y: number
    correctX: number
    correctY: number
}

const fleurDeLeah = Fleur_De_Leah({
    subsets: ['latin'],
    weight: '400',
})

const birthstone = Birthstone({
    subsets: ['latin'],
    weight: '400',
})

const imageWidth = 208
const imageHeight = 260

const pieceWidth = imageWidth / 2
const pieceHeight = imageHeight / 2

const imageUrl = '/rosecat.gif'

export default function ValentinesDayPage() {
    const dropX = 100
    const dropY = 40

    const initialPieces: PuzzlePiece[] = [
        { id: 0, x: 10, y: 10, correctX: dropX, correctY: dropY },
        { id: 1, x: 260, y: 20, correctX: dropX + pieceWidth, correctY: dropY },
        {
            id: 2,
            x: 10,
            y: 260,
            correctX: dropX,
            correctY: dropY + pieceHeight,
        },
        {
            id: 3,
            x: 260,
            y: 260,
            correctX: dropX + pieceWidth,
            correctY: dropY + pieceHeight,
        },
    ]

    const [puzzlePieces, setPuzzlePieces] = useState(initialPieces)
    const [activeId, setActiveId] = useState<number | null>(null)
    const [puzzleComplete, setPuzzleComplete] = useState(false)
    const [saidYes, setSaidYes] = useState(false)

    const handlePointerDown = (id: number) => {
        setActiveId(id)
    }

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (activeId === null) return
        const rect = e.currentTarget.getBoundingClientRect()

        const newX = e.clientX - rect.left - pieceWidth / 2
        const newY = e.clientY - rect.top - pieceHeight / 2

        setPuzzlePieces((prev) =>
            prev.map((piece) =>
                piece.id === activeId ? { ...piece, x: newX, y: newY } : piece
            )
        )
    }

    const handlePointerUp = () => {
        if (activeId === null) return

        setPuzzlePieces((prev) => {
            const updated = prev.map((piece) => {
                if (piece.id === activeId) {
                    const tolerance = 40
                    if (
                        Math.abs(piece.x - piece.correctX) < tolerance &&
                        Math.abs(piece.y - piece.correctY) < tolerance
                    ) {
                        return {
                            ...piece,
                            x: piece.correctX,
                            y: piece.correctY,
                        }
                    }
                }
                return piece
            })

            const allCorrect = updated.every(
                (piece) =>
                    piece.x === piece.correctX && piece.y === piece.correctY
            )

            if (allCorrect) {
                setTimeout(() => {
                    setPuzzleComplete(true)
                }, 1000)
            }

            return updated
        })

        setActiveId(null)
    }

    const resetPuzzle = () => {
        setPuzzlePieces(initialPieces)
        setPuzzleComplete(false)
        setSaidYes(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-50 to-pink-400 flex flex-col items-center justify-center p-4 overflow-hidden">
            {saidYes && <Confetti numberOfPieces={600} />}

            <h1
                className={`text-4xl font-bold text-red-600 mb-6 text-center ${fleurDeLeah.className}`}
            >
                Marlene
                <br />
                My Valentine&apos;s
            </h1>

            {!puzzleComplete ? (
                <div className="flex flex-col gap-8">
                    <div
                        className="relative bg-white border-4 border-red-300 rounded-lg shadow-lg"
                        style={{ width: 420, height: 420 }}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                    >
                        <div
                            className="absolute border-2 border-dashed border-red-400"
                            style={{
                                left: dropX,
                                top: dropY,
                                width: imageWidth,
                                height: imageHeight,
                            }}
                        />

                        {puzzlePieces.map((piece) => {
                            const row = Math.floor(piece.id / 2)
                            const col = piece.id % 2

                            return (
                                <div
                                    key={piece.id}
                                    onPointerDown={() =>
                                        handlePointerDown(piece.id)
                                    }
                                    className="absolute cursor-grab active:cursor-grabbing"
                                    style={{
                                        left: piece.x,
                                        top: piece.y,
                                        width: pieceWidth,
                                        height: pieceHeight,
                                        backgroundImage: `url(${imageUrl})`,
                                        backgroundSize: `${imageWidth}px ${imageHeight}px`,
                                        backgroundPosition: `-${col * pieceWidth}px -${row * pieceHeight}px`,
                                        borderRadius: 8,
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                                        touchAction: 'none',
                                    }}
                                />
                            )
                        })}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-8">
                    <div
                        className={`text-8xl transition-all duration-500 ${
                            saidYes
                                ? 'animate-bounce scale-150'
                                : 'animate-pulse'
                        }`}
                    >
                        ❤️
                    </div>

                    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md text-center border-2 border-red-300">
                        <h2
                            className={`${birthstone.className} text-3xl font-bold text-red-600 mb-6`}
                        >
                            Willst du mein Valentinstags-Date sein?
                        </h2>

                        {!saidYes && (
                            <button
                                onClick={() => setSaidYes(true)}
                                className={`${birthstone.className} px-10 py-4 bg-red-500 text-white rounded-lg font-bold text-2xl hover:bg-red-600 transition-all hover:scale-110`}
                            >
                                Ja! ❤️
                            </button>
                        )}

                        {saidYes && (
                            <p className="text-2xl text-red-600 font-semibold mt-4">
                                💖
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
