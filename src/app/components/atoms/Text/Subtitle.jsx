import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Subtitle = ({ text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% de la vista
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 900); // 0.2 segundos de delay
      return () => clearTimeout(timeout); // Limpiar el timeout en desmontaje
    }
  }, [inView]);

  return (
    <h2
      ref={ref}
      className={`text-sm text-[#8EEBFF] font-semibold text-start w-full ml-2 transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-fade-in-up-10' : 'opacity-0'}`}
    >
      {text}
    </h2>
  );
};

export default Subtitle;
