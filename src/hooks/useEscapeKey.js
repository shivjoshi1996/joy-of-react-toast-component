import { useEffect } from "react";

export default function useEscapeKey(escapeFunction) {
  useEffect(() => {
    function handleEscapePress(e) {
      if (e.key === "Escape") {
        escapeFunction();
      }
    }

    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("keydown", escapeFunction);
    };
  }, [escapeFunction]);
}
