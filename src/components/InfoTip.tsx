"use client";

import { useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

export function InfoTip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  const show = useCallback(() => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setPos({ top: rect.top - 8, left: rect.left + rect.width / 2 });
    setOpen(true);
  }, []);

  const hide = useCallback(() => setOpen(false), []);

  return (
    <span className="infotip-wrapper" onMouseEnter={show} onMouseLeave={hide}>
      <button
        ref={btnRef}
        className="infotip-btn"
        aria-label="More info"
        type="button"
        tabIndex={-1}
      >
        i
      </button>
      {open &&
        pos &&
        createPortal(
          <div className="infotip-popup" style={{ top: pos.top, left: pos.left }}>
            {text}
          </div>,
          document.body
        )}
    </span>
  );
}
