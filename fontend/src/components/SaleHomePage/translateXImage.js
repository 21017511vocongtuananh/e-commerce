import { useState, useEffect, useRef } from 'react';
const useTransLateX = () => {
  const [scrolDriction, setScrollDirection] = useState(null);
  const previousScrollPosition = useRef(0);
  const [translateXpostition, setTranslateXposition] = useState(80);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection('down');
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDirection('up');
    }

    previousScrollPosition.current = Math.max(currentScrollPosition, 0);

    setScrollPosition(currentScrollPosition);
  };

  const handleTranslateX = () => {
    if (scrolDriction === 'down' && scrollPosition >= 1500) {
      setTranslateXposition(
        translateXpostition <= 0 ? 0 : translateXpostition - 1
      );
    } else if (scrolDriction === 'up') {
      setTranslateXposition(
        translateXpostition >= 80 ? 80 : translateXpostition + 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking);
    return () => {
      window.removeEventListener('scroll', scrollTracking);
    };
  }, []);

  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);

  return { translateXpostition };
};

export default useTransLateX;
