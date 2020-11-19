import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Special component used to make it so we always scroll to top
// of page rather than it stays scrolled down even when we navigate out

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}