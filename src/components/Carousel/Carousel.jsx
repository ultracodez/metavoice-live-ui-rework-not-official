// import the hook and options type
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { useEffect, useState } from "react";
import { CarouselControlsL, CarouselControlsR } from "./CarouselControls";
import Dots from "./Dots";
import VoiceAvatar from "../VoiceAvatar";

// Define the props

const Carousel = ({ voices, className, ...options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }); //options);

  // need to selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = voices.length;
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  const handleVaClick = (index) => {
    emblaApi.scrollTo(index);
  };

  return (
    <div className={`relative`}>
      <div className="flex">
        <CarouselControlsL
          canScrollNext={canScrollNext}
          canScrollPrev={canScrollPrev}
          onNext={() => emblaApi?.scrollNext()}
          onPrev={() => emblaApi?.scrollPrev()}
        />
        <div className={`overflow-hidden ${className}`} ref={emblaRef}>
          <div className="flex">
            {voices.map((voice, index) => {
              return (
                <VoiceAvatar
                  isActive={index === selectedIndex}
                  index={index}
                  onClick={handleVaClick}
                  {...voice}
                />
              );
            })}
          </div>
        </div>
        <CarouselControlsR
          canScrollNext={canScrollNext}
          canScrollPrev={canScrollPrev}
          onNext={() => emblaApi?.scrollNext()}
          onPrev={() => emblaApi?.scrollPrev()}
        />
      </div>
      {
        //<Dots itemsLength={length} selectedIndex={selectedIndex} />
      }
    </div>
  );
};
export default Carousel;
