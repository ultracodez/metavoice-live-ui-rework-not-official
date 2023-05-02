import classNames from "classnames";
import React from "react";

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
        "text-white": true,
      })}
    >
      &lt;
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
        "text-white": true,
      })}
    >
      &gt;
    </button>
  );
};

export { CarouselControlsL, CarouselControlsR };
