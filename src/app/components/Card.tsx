import React from 'react';
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
    const shadow_base = "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 1px #FFFFFF80 inset";

    const buttons = {
        pink: "linear-gradient(174.48deg, #f47190 23%, #f47190 48%, #d41f43)",
        yellow: "linear-gradient(174.48deg, #fed358 26.5%, #fd9e45 81%)"
    };

    const backgrounds = {
        blue: "linear-gradient(183.5deg, #013b77 14%, #012356)",
        lightblue: "linear-gradient(180deg, #03c3ff, #1a70ce)",
        sky: "linear-gradient(174.27deg,#fdfffe42 5%,#b5fbfe 85%)"
    };

    const widthClasses = ["w-[22rem]", "max-w-[45rem] w-full", "w-[68rem]"];
    const heightClasses = ["h-[11rem]", "h-[23rem]", "w-[35rem]"];

    return (
        <div
            className={`${className} rounded-3xl ${widthClasses[sizeX - 1]} ${heightClasses[sizeY - 1]} flex flex-col items-center justify-center p-8 m-2`}
            style={{ background: backgrounds[background], boxShadow: shadow_base }}
        >
            <div className="flex w-full flex-col items-center justify-center">
                {title && (
                    <p className={`text-xl font-semibold mb-2 ${background === "sky" ? "text-black" : "text-white"}`}>
                        {title}
                    </p>
                )}
                <div className="pb-4 text-center text-white">
                    {children}
                </div>
            </div>
            {showButton && (
                <Button
                    className={`rounded-3xl text-white  w-4/5 font-semibold tracking-wide ${sizeY > 1 ? "h-20" : "h-16"}`}
                    style={{ background: buttons[button], boxShadow: shadow_base }}
                >
                    <div className={` ${sizeY > 1 ? "text-3xl" : "text-lg"}`}>
                    {buttonText}
                        
                    </div>
                </Button>
            )}
        </div>
    );
};

export default Card;
