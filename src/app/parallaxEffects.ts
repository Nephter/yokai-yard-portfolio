import { useParallax } from "react-scroll-parallax";

export const parallaxEffects = () => {


  const moon = useParallax<HTMLDivElement>({
    translateY: ['50vh', '-30vh'],
  });

  // const recentProjects = useParallax<HTMLDivElement>({
  //   translateY: ['100vh', '40vh'],
  //   easing: 'easeOutQuad'
  // });

  const cards = useParallax<HTMLDivElement>({
    translateY: ['100vh', '0vh'],
    easing: 'easeOutQuad'
  });

  const wave2 = useParallax<HTMLDivElement>({
    speed: -20,
    startScroll: 100,
    endScroll: 500,
  });
  const wave3 = useParallax<HTMLDivElement>({
    speed: -20,
    startScroll: 100,
    endScroll: 500,
  });
  const wave4 = useParallax<HTMLDivElement>({
    speed: -20,
    startScroll: 100,
    endScroll: 500,
  });

  return { moon, cards, wave2, wave3, wave4 }
}