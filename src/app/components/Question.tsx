"use client";
import React from 'react';
import { Button } from "@nextui-org/button";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/modal";

interface QuestionProps {
    text?: string;
    background?: 'blue' | 'lightblue' | 'sky' | 'pink' | 'yellow';
    className?: string;
    children?: React.ReactNode;
}

const Question: React.FC<QuestionProps> = ({
    text = "Unirse",
    background = 'blue',
    className,
    children
}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const shadow_base = "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 1px #FFFFFF80 inset";

    const backgrounds = {
        blue: "linear-gradient(183.5deg, #013b77 14%, #012356)",
        lightblue: "linear-gradient(180deg, #03c3ff, #1a70ce)",
        sky: "linear-gradient(174.27deg,#fdfffe42 5%,#b5fbfe 85%)",
        pink: "linear-gradient(174.48deg, #f47190 23%, #f47190 48%, #d41f43)",
        yellow: "linear-gradient(174.48deg, #fed358 26.5%, #fd9e45 81%)"
    };

    return (
        <>
            <Button
                onPress={onOpen}
                className={`rounded-2xl text-white px-12 font-semibold tracking-wide h-14 text-lg ${className}`}
                style={{ background: backgrounds[background], boxShadow: shadow_base }}
            >
                {text}
            </Button>

            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                radius="lg"
                classNames={{
                    body: "py-6",
                    backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                    base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                    header: "border-b-[1px] border-[#292f46]",
                    footer: "border-t-[1px] border-[#292f46]",
                    closeButton: "hover:bg-white/5 active:bg-white/10",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{text}</ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                            <ModalFooter>
                                <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                                    Okay
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default Question;
