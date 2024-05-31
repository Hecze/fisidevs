import React from 'react';
import Question from "../../molecules/Question/Question";
import Title from "../../atoms/Text/Title";


const FAQSection = () => {
  return (
    <div className="flex flex-col w-full mb-4">
      <Title text="Preguntas Frecuentes" />
      <div className="flex justify-center gap-3 w-full flex-wrap max-w-full mt-2">
        <Question text="¿Qué necesito para empezar?" background="pink" className="flex-grow min-w-[300px]">
            Necesitas tener una computadora con acceso a internet y muchas ganas de aprender
        </Question>
        <Question text="¿Cuánto cuesta?" background="lightblue" className="flex-grow min-w-[300px]">
            Nuestros cursos son gratuitos, solo necesitas registrarte
        </Question>
        <Question text="¿Cuánto dura un curso?" background="yellow" className="flex-grow min-w-[300px]">
            La duración de los cursos varía, pero en promedio duran 3 meses
        </Question>
      </div>
    </div>
  );
};

export default FAQSection;