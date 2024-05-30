import React from 'react';
import Card from "./Card";
import Question from "./Question";
import CardContainer from "./CardContainer";

const AboutCards = () => {
  return (
    <div className="flex flex-col max-w-[46rem]">
      <h1 className="text-sm text-[#8EEBFF] font-semibold ml-4 text-start w-full">
        FISIDEVS
      </h1>
      <h1 className="text-3xl text-white font-semibold mb-4 ml-4 text-start w-full">
        Software Academy
      </h1>
      <CardContainer>
        <Card button="yellow" background="sky" showButton={false} sizeX={2} sizeY={1}>
          <div className="flex items-center gap-8">
            <div className="rounded-full mt-4 w-[20rem] h-32 overflow-hidden [background:linear-gradient(180deg,#49f9fc,#0d5db8)]">
              <img
                className="relative bottom-0 inset-0 w-full h-auto object-cover rounded-full p-2"
                alt="image"
                src="/monigote1.png"
              />
            </div>
            <div className="flex flex-col gap-4 mt-6 text-start">
              <p className="text-sky-950 font-semibold text-sm">
                Somos una comunidad académica sin fines de lucro potenciando talento de universitarios, egresados e interesados en Data Science, IA y Programación
              </p>
              <b className="self-stretch relative text-blue-800">
                inicio de clases: 23/05/06
              </b>
            </div>
          </div>
        </Card>
        <Card button="yellow" sizeX={1} sizeY={2}>
          <div className="flex gap-2 ">
            <img
              className="w-40 h-40 p-2"
              alt="image"
              src="/monigote2.png"
            />
            <div className="flex flex-col text-start">
              <b className="text-xl">Comunidad</b>
              <p className="text-sm mt-2">
                Puedes unirte a nuestra comunidad y mantener al día de las novedades siguiendo este link
              </p>
            </div>
          </div>
        </Card>
        <Card title="Cursos disponibles" sizeX={1} sizeY={1}/>
        <Card title="Apoyar" background="lightblue" button="yellow" sizeX={1} sizeY={1}/>
      </CardContainer>

      <h1 className="text-3xl text-white font-semibold my-8 ml-4">
        Preguntas frecuentes
      </h1>

      <div className="flex gap-4 w-full flex-wrap max-w-full ml-4">
        <Question text="¿Qué Necesito para empezar?" background="pink" className="flex-grow min-w-[300px]">
          <p className="text-sm">
            Necesitas tener una computadora con acceso a internet y muchas ganas de aprender
          </p>
        </Question>
        <Question text="¿Cuánto cuesta?" background="lightblue" className="flex-grow min-w-[300px]">
          <p className="text-sm">
            Nuestros cursos son gratuitos, solo necesitas registrarte
          </p>
        </Question>
        <Question text="¿Cuánto dura un curso?" background="yellow" className="flex-grow min-w-[300px]">
          <p className="text-sm">
            La duración de los cursos varía, pero en promedio duran 3 meses
          </p>
        </Question>
      </div>
    </div>
  );
};

export default AboutCards;