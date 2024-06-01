import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Title = ({ text, className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% de la vista
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 600); // 0.2 segundos de delay
      return () => clearTimeout(timeout); // Limpiar el timeout en desmontaje
    }
  }, [inView]);

  return (
    <h1
      ref={ref}
      className={`text-3xl text-white font-semibold mb-4 text-start w-full ml-2 transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-fade-in-up-20' : 'opacity-0'} ${className}`}
    >
      {text}
    </h1>
  );
};

export default Title;
