"use client"
import React, { useState, useEffect } from 'react';
import { Quicksand } from 'next/font/google';
import { Button } from "@nextui-org/button";

interface CardProps {
    buttonText?: string;
    title?: string;
    button?: 'pink' | 'yellow';
    background?: 'blue' | 'lightblue' | 'sky';
    showButton?: boolean;
    children?: React.ReactNode;
    className?: string;
    sizeX?: 1 | 2 | 3;
    sizeY?: 1 | 2 | 3;
}

const Card: React.FC<CardProps> = ({
    buttonText = "Unirse",
    button = 'pink',
    background = 'blue',
    showButton = true,
    children,
    title,
    className,
    sizeX = 1,
    sizeY = 1
}) => {
    const [adjustedSizeX, setAdjustedSizeX] = useState(sizeX);
    const [adjustedSizeY, setAdjustedSizeY] = useState(sizeY);

    useEffect(() => {
        const adjustSizes = () => {
            const screenWidth = window.innerWidth;
            let newSizeX = sizeX;
            let newSizeY = sizeY;

            if (screenWidth < 1024 && sizeX > 1) {
                newSizeX = 1;
                newSizeY = Math.min(sizeY + (sizeX - 1), 3) as 1 | 2 | 3;
            } else if (screenWidth < 1440 && sizeX > 2) {
                newSizeX = 2;
                newSizeY = Math.min(sizeY + (sizeX - 2), 3) as 1 | 2 | 3;
            }

            setAdjustedSizeX(newSizeX);
            setAdjustedSizeY(newSizeY);
        };

        adjustSizes();
        window.addEventListener('resize', adjustSizes);

        return () => {
            window.removeEventListener('resize', adjustSizes);
        };
    }, [sizeX, sizeY]);

    const shadow_base = "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 1px #FFFFFF80 inset";

    const buttons = {
        pink: "linear-gradient(174.48deg, #f47190 23%, #f47190 48%, #d41f43)",
        yellow: "linear-gradient(174.48deg, #fed358 26.5%, #fd9e45 81%)"
    };

    const backgrounds = {
        blue: "linear-gradient(183.5deg, #013b77 14%, #012356)",
        lightblue: "linear-gradient(180deg, #36CFF1 0%, #0E7DCE 93%)",
        sky: "linear-gradient(174.27deg,#fdfffe42 5%,#b5fbfe 85%)"
    };


    return (
        <div
            className={`${className}  rounded-3xl  flex flex-col items-center justify-center  m-2  max-w-[96vw] col-span-${adjustedSizeX} row-span-${adjustedSizeY} p-6 px-8 `}
            style={{ background: backgrounds[background], boxShadow: shadow_base }}
        >
            <div className="flex w-full flex-col items-center justify-center">
                {title && (
                    <p className={`text-lg font-semibold mb-2 ${background === "sky" ? "text-black" : "text-white"}`}>
                        {title}
                    </p>
                )}
                <div className="pb-4 text-center text-white">
                    {children}
                </div>
            </div>
            {showButton && (
                <Button
                    className={`rounded-2xl text-white  font-semibold tracking-wide ${adjustedSizeY > 1 ? "h-20 w-3/4" : "h-14 w-3/5"}`}
                    style={{ background: buttons[button], boxShadow: shadow_base }}
                >
                    <div className={` ${adjustedSizeY > 1 ? "text-3xl" : "text-lg"}`}>
                    {buttonText}
                        
                    </div>
                </Button>
            )}
        </div>
    );
};

export default Card;
