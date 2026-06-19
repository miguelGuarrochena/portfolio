interface LogoMarkProps {
  size?: number;
  variant?: 'mark' | 'wordmark';
  className?: string;
}

const serif = "var(--font-instrument-serif), Georgia, 'Times New Roman', serif";

export function LogoMark({ size = 48, variant = 'mark', className }: LogoMarkProps) {
  if (variant === 'wordmark') {
    const height = size;
    const width = size * 1.55;

    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 62 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={className ? true : undefined}
      >
        <text
          x="0"
          y="18"
          fill="currentColor"
          opacity="0.42"
          fontFamily={serif}
          fontSize="20"
          fontWeight="400"
        >
          {'{'}
        </text>
        <text
          x="11"
          y="17"
          fill="currentColor"
          fontFamily={serif}
          fontSize="13"
          fontWeight="400"
          letterSpacing="-0.08em"
        >
          MG
        </text>
        <text
          x="36"
          y="18"
          fill="currentColor"
          opacity="0.42"
          fontFamily={serif}
          fontSize="20"
          fontWeight="400"
        >
          {'}'}
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
        x="9"
        y="25"
        fill="currentColor"
        opacity="0.42"
        fontFamily={serif}
        fontSize="15"
        fontWeight="400"
      >
        {'{'}
      </text>
      <text
        x="16"
        y="24"
        fill="currentColor"
        fontFamily={serif}
        fontSize="10"
        fontWeight="400"
        letterSpacing="-0.08em"
      >
        MG
      </text>
      <text
        x="28"
        y="25"
        fill="currentColor"
        opacity="0.42"
        fontFamily={serif}
        fontSize="15"
        fontWeight="400"
      >
        {'}'}
      </text>
    </svg>
  );
}
