import {useState, useEffect} from "react";

export const useScrollHandler = (distance) => {
  // setting initial value to true
  const [scroll, setScroll] = useState(distance)

  // running on mount
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < distance
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    }

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll)

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [distance, scroll, setScroll])

  return scroll
};
