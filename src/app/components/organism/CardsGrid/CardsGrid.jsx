import React from 'react';
import Card from "../../molecules/Card/Card";
import CardsContainer from "../../molecules/Card/CardsContainer";
import Subtitle from "../../atoms/Text/Subtitle";
import Title from "../../atoms/Text/Title";
import Image from 'next/image';

const CardsGrid = () => {
  return (
    <div className="flex flex-col w-full">
      <Subtitle text="FISIDEVS" />
      <Title text="Software Academy" />
      <CardsContainer>
        <Card variant='sky' colSpan={2}>
          <CardContentOne />
        </Card>
        <Card variant='blue' rowSpan={2} buttonText='Unirse'>
          <CardContentTwo />
        </Card>
        <Card variant='blue+pink' title="Cursos disponibles" buttonText='Unirse' />
        <Card variant='lightblue' title="Apoyar" buttonText='Unirse' />
      </CardsContainer>
    </div>
  );
};

const CardContentOne = () => (
  <div className="flex flex-wrap md:flex-nowrap justify-center items-center lg:gap-8 mt-4">
    <Image
      className="rounded-full p-2 size-32"
      width={100}
      height={100}
      alt="image"
      src="/monigote1.svg"
    />
    <div className="flex flex-col gap-4 text-start mt-4">
      <p className="text-sky-950 font-semibold text-sm">
        Somos una comunidad académica sin fines de lucro potenciando talento de universitarios, egresados e interesados en Data Science, IA y Programación
      </p>
      <b className="self-stretch relative text-blue-800">
        inicio de clases: 23/05/06
      </b>
    </div>
  </div>
);

const CardContentTwo = () => (
  <div className="flex gap-2">
    <Image
      className="w-40 h-40 p-2"
      alt="image"
      src="/monigote2.png"
      width={100}
      height={100}
    />
    <div className="flex flex-col text-start">
      <b className="text-xl">Comunidad</b>
      <p className="text-sm mt-2">
        Puedes unirte a nuestra comunidad y mantener al día de las novedades siguiendo este link
      </p>
    </div>
  </div>
);

export default CardsGrid;
