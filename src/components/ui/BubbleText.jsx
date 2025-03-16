import React, { useState } from "react";
import PropTypes from "prop-types";

const styles = {
  hoverText: {
    transition: "0.35s font-weight, 0.35s color",
  },
  hoverTextHover: {
    fontWeight: 900,
    color: "rgb(238, 242, 255)",
  },
  hoverTextHoverNext: {
    fontWeight: 500,
    color: "rgb(199, 210, 254)",
  },
  hoverTextHoverNextNext: {
    fontWeight: 300,
  },
  hoverTextHasHoverNext: {
    fontWeight: 500,
    color: "rgb(199, 210, 254)",
  },
  hoverTextHasHoverNextNext: {
    fontWeight: 300,
  },
};

const BubbleText = ({ text }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <h2>
      {text.split("").map((child, idx) => (
        <span
          className="hoverText"
          key={idx}
          style={
            hoverIndex === idx
              ? styles.hoverTextHover
              : hoverIndex === idx - 1
              ? styles.hoverTextHoverNext
              : hoverIndex === idx - 2
              ? styles.hoverTextHoverNextNext
              : styles.hoverText
          }
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
        >
          {child}
        </span>
      ))}
    </h2>
  );
};
BubbleText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BubbleText;