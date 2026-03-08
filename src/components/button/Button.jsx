"use client";

const SIZE_CLASSES = {
  sm: {
    button: "text-sm gap-1.5",
    icon: "w-3.5 h-3.5",
  },
  md: {
    button: "text-[18px] gap-2",
    icon: "w-[18px] h-[18px]",
  },
  lg: {
    button: "text-[22px] gap-2.5",
    icon: "w-5 h-5",
  },
};

const Button = ({
  children,
  type = "button",
  disabled = false,
  size = "md",
  className,
  "aria-label": ariaLabel,
  ...rest
}) => {
  const text = typeof children === "string" ? children : "";
  const sizeKey = SIZE_CLASSES[size] ? size : "md";
  const { button: btnCls, icon: iconCls } = SIZE_CLASSES[sizeKey];

  return (
    <div className={className}>
      <button
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
        className={`
          btn-underline relative inline-flex items-center p-0 border-0 bg-transparent
          font-semibold cursor-pointer
          text-[var(--foreground)] transition-colors duration-200 ease-out
          disabled:cursor-not-allowed disabled:opacity-50
          focus:outline-none focus-visible:outline-2 focus-visible:outline-[#c84747] focus-visible:outline-offset-2
          [&_>svg]:transition-all [&_>svg]:duration-200 [&_>svg]:ease-out
          hover:[&_>svg]:translate-x-1 hover:[&_>svg]:text-[#c84747]
          focus-visible:[&_>svg]:translate-x-1 focus-visible:[&_>svg]:text-[#c84747]
          disabled:[&_>svg]:translate-x-0 disabled:[&_>svg]:!text-[var(--foreground)]
          ${btnCls}
          ${sizeKey === "sm" ? "btn-size-sm" : sizeKey === "lg" ? "btn-size-lg" : ""}
        `}
        {...rest}
      >
        <span className="btn-reveal-text text-inherit" data-text={text}>
          {children}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`flex-shrink-0 text-[var(--foreground)] transition-all duration-200 ease-out ${iconCls}`}
          aria-hidden
        >
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

export default Button;
