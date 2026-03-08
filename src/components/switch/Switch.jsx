"use client";
import { useState } from "react";
import styled from "styled-components";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StyledWrapper>
      <label className="hamburger">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <svg viewBox="0 0 32 32" className={isChecked ? "checked" : ""}>
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          />
          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: white;
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

// "use client"; // Ensure it runs on the client-side

// import { useState, useEffect } from "react";
// import styled from "styled-components";

// const Switch = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const storedTheme = localStorage.getItem("theme") === "dark";
//     setIsDark(storedTheme);
//     document.documentElement.classList.toggle("dark", storedTheme);
//   }, []);

//   const handleToggle = () => {
//     const newTheme = !isDark;
//     setIsDark(newTheme);
//     document.documentElement.classList.toggle("dark", newTheme);
//     localStorage.setItem("theme", newTheme ? "dark" : "light");
//   };

//   if (!mounted) return null; // Prevent SSR hydration mismatch

//   return (
//     <Wrapper $isDark={isDark}>
//       <label className="switch shadow-md rounded-full border border-gray-300">
//         <input type="checkbox" checked={isDark} onChange={handleToggle} />
//         <span className="slider">
//           <i className="ri-moon-fill icon moon" />
//           <i className="ri-sun-fill icon sun" />
//         </span>
//       </label>
//     </Wrapper>
//   );
// };

// // ✅ Styled Components for Perfect Look
// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .switch {
//     position: relative;
//     width: 70px; /* Increased width slightly */
//     height: 36px; /* Increased height */
//   }

//   .switch input {
//     opacity: 0;
//     width: 0;
//     height: 0;
//   }

//   .slider {
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: ${(props) => (props.$isDark ? "#1E293B" : "#E2E8F0")};
//     border-radius: 36px;
//     transition: background-color 0.4s;
//   }

//   .slider:before {
//     content: "";
//     position: absolute;
//     height: 28px; /* Increased for balance */
//     width: 28px;
//     left: 4px;
//     bottom: 4px;
//     background-color: ${(props) => (props.$isDark ? "#FACC15" : "#fff")};
//     border-radius: 50%;
//     transition: 0.4s;
//     transform: ${(props) => (props.$isDark ? "translateX(34px)" : "translateX(0)")};
//   }

//   /* ✅ Sun & Moon Icons Styling */
//   .icon {
//     position: absolute;
//     top: 50%;
//     font-size: 18px; /* Slightly larger */
//     transform: translateY(-50%);
//     transition: opacity 0.3s ease-in-out;
//   }

//   .moon {
//     left: 12px;
//     color: #FACC15; /* Yellow */
//     opacity: ${(props) => (props.$isDark ? 1 : 0)};
//   }

//   .sun {
//     right: 12px;
//     color: #1E293B; /* Dark blue */
//     opacity: ${(props) => (props.$isDark ? 0 : 1)};
//   }
// `;

// export default Switch;
