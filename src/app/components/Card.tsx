"use client";
import React from 'react';
import { Button } from "@nextui-org/button";

interface CardProps {
    buttonText?: string;
    title?: string;
    button?: 'pink' | 'yellow';
    background?: 'blue' | 'lightblue' | 'sky';
    children?: React.ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2 | 3;
}

const Card: React.FC<CardProps> = ({
    buttonText,
    button = 'pink',
    background = 'blue',
    children,
    title,
    className,
    colSpan = 1,
    rowSpan = 1
}) => {

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
            className={`
                ${className}
                rounded-3xl flex flex-col items-center 
                justify-center
                p-6 px-8 min-w-[22rem]
                col-span-1 row-span-${rowSpan + colSpan - 1}
                md:col-span-${colSpan} md:row-span-${rowSpan}
            `}
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
            {buttonText && (
                <Button
                    className={`rounded-2xl text-white font-semibold tracking-wide ${rowSpan > 1 ? "h-20 w-3/4" : "h-14 w-3/5"}`}
                    style={{ background: buttons[button], boxShadow: shadow_base }}
                >
                    <div className={` ${rowSpan > 1 ? "text-3xl" : "text-lg"}`}>
                        {buttonText}
                    </div>
                </Button>
            )}
        </div>
    );
};

export default Card;
