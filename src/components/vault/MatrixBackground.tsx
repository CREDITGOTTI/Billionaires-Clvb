import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "./Button";

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    document.documentElement.dataset["motionPaused"] = String(paused);
    window.dispatchEvent(new Event("ambient:motion"));
    return () => { delete document.documentElement.dataset["motionPaused"]; };
  }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = 0;
    let columns: number[] = [];
    const codeColor = getComputedStyle(document.documentElement).getPropertyValue("--matrix-code-rgb").trim() || "92, 214, 133";
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const spacing = window.innerWidth < 650 ? 54 : 42;
      columns = Array.from({ length: Math.ceil(window.innerWidth / spacing) }, (_, index) => (index * 83) % Math.max(window.innerHeight, 1));
    };
    const draw = (time: number) => {
      if (!paused && !reduced.matches && !document.hidden && time - last > 115) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.font = "11px monospace";
        context.textAlign = "center";
        columns.forEach((y, index) => {
          const x = index * (window.innerWidth / Math.max(columns.length - 1, 1));
          for (let row = 0; row < 7; row += 1) {
            const digit = (index * 7 + row + Math.floor(time / 460)) % 2;
            context.fillStyle = `rgba(${codeColor}, ${Math.max(0.025, 0.11 - row * 0.013)})`;
            context.fillText(String(digit), x, y - row * 21);
          }
          columns[index] = y > window.innerHeight + 130 ? -20 : y + 4 + (index % 3);
        });
        last = time;
      }
      frame = window.requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener("resize", resize);
    frame = window.requestAnimationFrame(draw);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [paused]);

  return (
    <>
      <canvas ref={canvasRef} className="matrix-background" aria-hidden="true" />
      <Button variant="quiet" className="motion-toggle" onClick={() => setPaused((value) => !value)} aria-pressed={paused} aria-label={paused ? "Resume background motion" : "Pause background motion"} title={paused ? "Resume background motion" : "Pause background motion"}>
        {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
        <span>{paused ? "Resume background motion" : "Pause background motion"}</span>
      </Button>
    </>
  );
}