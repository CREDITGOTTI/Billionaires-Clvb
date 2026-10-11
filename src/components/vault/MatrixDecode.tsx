import type { CSSProperties } from "react";

const streams = Array.from({ length: 24 }, (_, index) => {
  const seed = (index * 7919 + 104729).toString(2);
  return `${seed}01${seed.slice(0, 9)}10${seed.slice(-8)}`.repeat(5);
});

export function MatrixDecode() {
  return (
    <div className="matrix-decode" aria-hidden="true">
      {streams.map((stream, index) => (
        <span key={`${stream}-${index}`} style={{ "--stream": index } as CSSProperties}>
          {stream}
        </span>
      ))}
    </div>
  );
}