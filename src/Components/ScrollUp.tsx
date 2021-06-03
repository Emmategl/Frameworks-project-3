import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollUp() {
  useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return null;
}
