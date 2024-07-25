import { useEffect, useState } from 'react';

const useStickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsSticky(true);
      } else {
        // Scrolling up
        setIsSticky(currentScrollTop > 0); // Ensures the header becomes sticky only when scrolled up to top
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isSticky;
};

export default useStickyHeader;
