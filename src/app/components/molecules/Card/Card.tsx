"use client";
import React from 'react';
import { Button } from "@nextui-org/button";

interface CardProps {
    buttonText?: string;
    title?: string;
    variant?: 
    'sky' |'sky+yellow' | 'sky+pink' | 
    'lightblue' |  'lightblue+yellow' | 'lightblue+pink' | 
    'blue' |'blue+yellow' | 'blue+pink' | 
        'darkblue+yellow' | 'darkblue+pink';
    buttonColor?: 'pink' | 'yellow';
    backgroundColor?: 'blue' | 'lightblue' | 'sky' | 'darkblue';
    children?: React.ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2 | 3;
}

const backgroundGradients = {
    sky: "linear-gradient(174.27deg,#fdfffe42 5%,#b5fbfe 85%)",
    lightblue: "linear-gradient(180deg, #36CFF1 0%, #0E7DCE 93%)",
    blue: "linear-gradient(183.5deg, #013b77 14%, #012356)",
    darkblue: "linear-gradient(183.5deg, #013b77 14%, #012356)"
};

const buttonGradients = {
    pink: "linear-gradient(174.48deg, #f47190 23%, #f47190 48%, #d41f43)",
    yellow: "linear-gradient(174.48deg, #fed358 26.5%, #fd9e45 81%)"
};

const variantStyles = {
    'sky': {
        background: backgroundGradients.sky,
        button: buttonGradients.yellow
    },
    'sky+yellow': {
        background: backgroundGradients.sky,
        button: buttonGradients.yellow
    },
    'sky+pink': {
        background: backgroundGradients.sky,
        button: buttonGradients.pink
    },
    'lightblue': {
        background: backgroundGradients.lightblue,
        button: buttonGradients.yellow
    },
    'lightblue+yellow': {
        background: backgroundGradients.lightblue,
        button: buttonGradients.yellow
    },
    'lightblue+pink': {
        background: backgroundGradients.lightblue,
        button: buttonGradients.pink
    },
    'blue': {
        background: backgroundGradients.blue,
        button: buttonGradients.yellow
    },
    'blue+yellow': {
        background: backgroundGradients.blue,
        button: buttonGradients.yellow
    },
    'blue+pink': {
        background: backgroundGradients.blue,
        button: buttonGradients.pink
    },
    'darkblue+yellow': {
        background: backgroundGradients.darkblue,
        button: buttonGradients.yellow
    },
    'darkblue+pink': {
        background: backgroundGradients.darkblue,
        button: buttonGradients.pink
    }
};

const shadowBase = "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 1px #FFFFFF80 inset";

const Card: React.FC<CardProps> = ({
    buttonText,
    variant,
    buttonColor,
    backgroundColor,
    children,
    title,
    className = '',
    colSpan = 1,
    rowSpan = 1
}) => {
    const defaultStyles = {
        background: backgroundGradients[backgroundColor || 'blue'],
        button: buttonGradients[buttonColor || 'pink']
    };
    
    const styles = variant ? variantStyles[variant] : defaultStyles;

    return (
        <div
            className={`
                ${className}
                rounded-3xl flex flex-col items-center 
                justify-center p-6 px-8 min-w-[20rem]
                col-span-1 row-span-${rowSpan + colSpan - 1}
                md:col-span-${colSpan} md:row-span-${rowSpan}
                
            `}
            style={{ background: styles?.background, boxShadow: shadowBase }}
        >
            <div className="flex w-full flex-col items-center justify-center">
                {title && (
                    <p className={`text-lg font-semibold mb-2 ${variant?.includes('sky') || backgroundColor === 'sky' ? "text-black" : "text-white"}`}>
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
                    style={{ background: styles?.button, boxShadow: shadowBase }}
                >
                    <div className={`${rowSpan > 1 ? "text-3xl" : "text-lg"}`}>
                        {buttonText}
                    </div>
                </Button>
            )}
        </div>
    );
};

export default Card;