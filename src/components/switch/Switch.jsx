"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Checkbox = ({ isMenuOpen, handleClick }) => { 

  return (
    <div
      onClick={handleClick}
      className="hover:bg-gray-800 hover:opacity-80 opacity-90 transition-all duration-300 p-2 flex items-center justify-center rounded-full"
    >
      <StyledWrapper>
        <label className="hamburger">
          <input
            type="checkbox"
            checked={isMenuOpen}
            onChange={() => setIsChecked(!isMenuOpen)}
          />
          <svg viewBox="0 0 32 32" className={isMenuOpen ? "checked" : ""}>
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </label>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .hamburger {
    padding: 0;
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  // #171717
  .line {
    fill: none;
    stroke: #b1b1b1 ;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .checked {
    transform: rotate(-45deg);
  }

  .checked .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

export default Checkbox;
