"use client";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        <p>About me</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --primary-color: #ffff;
    --hovered-color: #c84747;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    transition: color 0.3s ease-in-out;
  }

  button p {
    position: relative;
    font-size: 20px;
    color: var(--primary-color);
    margin: 0;
  }

  button::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -5px;
    background: var(--hovered-color);
    transition: width 0.3s ease-out;
  }

  button p::before {
    content: "About me";
    position: absolute;
    width: 0%;
    inset: 0;
    color: var(--hovered-color);
    overflow: hidden;
    transition: width 0.3s ease-out;
    white-space: nowrap; /* Prevents breaking into two lines */
  }

  button:hover::after {
    width: 100%;
  }

  button:hover p::before {
    width: 100%;
  }

  button svg {
    width: 18px;
    color: var(--primary-color);
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  button:hover svg {
    transform: translateX(4px);
    color: var(--hovered-color);
  }
`;

export default Button;
