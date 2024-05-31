import React from 'react';
import Question from "../../molecules/Question/Question";
import Title from "../../atoms/Text/Title";


const FAQSection = () => {
  return (
    <div className="flex flex-col max-w-[46rem]">
      <Title text="Preguntas Frecuentes" />

      <div className="flex gap-3 w-full flex-wrap max-w-full mt-2">
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

export default FAQSection;