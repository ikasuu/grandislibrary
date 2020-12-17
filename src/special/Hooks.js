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

//Used to scroll to anchor tags

export const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}