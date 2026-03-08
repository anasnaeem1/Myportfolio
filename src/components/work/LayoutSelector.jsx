"use client";

/**
 * Reusable layout/view selector (e.g. Featured / Grid).
 * @param {Object} props
 * @param {{ id: string, label: string }[]} props.options - List of { id, label }
 * @param {string} props.value - Currently selected option id
 * @param {(id: string) => void} props.onChange - Called when selection changes
 * @param {string} [props.ariaLabel] - Accessible name for the control
 */
export default function LayoutSelector({ options, value, onChange, ariaLabel = "Layout options" }) {
  return (
    <div
      className="flex rounded-xl border border-white/10 bg-white/[0.03] p-1 w-fit"
      role="tablist"
      aria-label={ariaLabel}
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="tab"
          aria-selected={value === option.id}
          onClick={() => onChange(option.id)}
          className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
            value === option.id
              ? "main-text-color bg-textGold/20 text-textGold"
              : "main-text-color opacity-80 hover:opacity-100"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
