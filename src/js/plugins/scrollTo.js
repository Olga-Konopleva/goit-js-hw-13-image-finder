export default function smoothScroll() {
      const { scrollTop, clientHeight } = document.documentElement;
      window.scrollTo({
        top: scrollTop + clientHeight,
      });
    
  }