interface LogoMarkProps {
  size?: number;
  variant?: "mark" | "wordmark";
  className?: string;
}

const serif = "var(--font-instrument-serif), Georgia, 'Times New Roman', serif";

export function LogoMark({
  size = 48,
  variant = "mark",
  className,
}: LogoMarkProps) {
  if (variant === "wordmark") {
    return (
      <svg
        width={size * 1.55}
        height={size}
        viewBox="0 0 62 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={className ? true : undefined}
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fontFamily={serif}
          fontWeight="400"
          fill="currentColor"
        >
          <tspan opacity="0.42" fontSize="20">{`{`}</tspan>
          <tspan fontSize="13" letterSpacing="-0.08em">
            MG
          </tspan>
          <tspan opacity="0.42" fontSize="20" dx="-1">{`}`}</tspan>
        </text>
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={className ? true : undefined}
    >
      <rect
        x="0.75"
        y="0.75"
        width="38.5"
        height="38.5"
        rx="10"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="var(--surface-elevated)"
      />
      <text
        x="20"
        y="20"
        dominantBaseline="central"
        textAnchor="middle"
        fontFamily={serif}
        fontWeight="400"
        fill="currentColor"
      >
        <tspan opacity="0.42" fontSize="15">{`{`}</tspan>
        <tspan fontSize="10" letterSpacing="-0.08em">
          MG
        </tspan>
        <tspan opacity="0.42" fontSize="15" dx="-1">{`}`}</tspan>
      </text>
    </svg>
  );
}
