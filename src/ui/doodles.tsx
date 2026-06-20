// SVG doodle decorations
export function DoodleStar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4 L21.5 17 L34 12 L23 21 L36 28 L22 24 L22 37 L19 24 L5 29 L18 21 L6 13 L19.5 18 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 8 C44 6, 54 16, 53 30 C52 45, 42 54, 28 53 C13 52, 5 42, 7 28 C9 13, 18 9, 30 8 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
    </svg>
  );
}

export function DoodleArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 15 Q20 8, 55 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 8 L57 15 L50 22"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleWave({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10 Q15 2, 28 10 Q41 18, 54 10 Q67 2, 80 10 Q93 18, 106 10 Q119 2, 120 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleFlower({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="30"
        cy="30"
        r="5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="30"
        cy="16"
        rx="4"
        ry="7"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="30"
        cy="44"
        rx="4"
        ry="7"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="16"
        cy="30"
        rx="7"
        ry="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="44"
        cy="30"
        rx="7"
        ry="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="19.5"
        cy="19.5"
        rx="4"
        ry="7"
        transform="rotate(-45 19.5 19.5)"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="40.5"
        cy="40.5"
        rx="4"
        ry="7"
        transform="rotate(-45 40.5 40.5)"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="40.5"
        cy="19.5"
        rx="4"
        ry="7"
        transform="rotate(45 40.5 19.5)"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse
        cx="19.5"
        cy="40.5"
        rx="4"
        ry="7"
        transform="rotate(45 19.5 40.5)"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function DoodleHeart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 32 C20 32 4 20 4 11 C4 6 8 3 12 3 C15 3 18 5 20 8 C22 5 25 3 28 3 C32 3 36 6 36 11 C36 20 20 32 20 32 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
