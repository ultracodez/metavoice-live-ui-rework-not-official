import classNames from "classnames";
import React from "react";
import { CaretForwardOutline, CaretBackOutline } from "react-ionicons";

const CarouselControlsL = (props) => {
  return (
    <button
      onClick={() => {
        if (props.canScrollPrev) {
          props.onPrev();
        }
      }}
      disabled={!props.canScrollPrev}
      className={classNames({
        "text-white px-2": true,
      })}
    >
      <CaretBackOutline color={"white  "} />
    </button>
  );
};

const CarouselControlsR = (props) => {
  return (
    <button
      onClick={() => {
        if (props.canScrollNext) {
          props.onNext();
        }
      }}
      disabled={!props.canScrollNext}
      className={classNames({
        "text-white px-2": true,
      })}
    >
      <CaretForwardOutline color={"white  "} />
    </button>
  );
};

export { CarouselControlsL, CarouselControlsR };
