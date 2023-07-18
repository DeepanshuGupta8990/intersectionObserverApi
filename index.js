window.addEventListener("load",()=>{
    const options = {
        root: null, // The viewport
        rootMargin: '0px',
        threshold: 0.01 // Trigger callback when 50% visible
      };
      
      const observer = new IntersectionObserver(callback, options);
      
      function callback(entries, observer) {
        entries.forEach(entry => {
          // Handle intersection changes
          if (entry.isIntersecting) {
            // The target element is intersecting with the root
            entry.target.classList.add('visible_class')
            console.log('Element is visible');
          } else {
            // The target element is no longer intersecting with the root
            // entry.target.classList.remove('visible_class'); // Remove the class if needed
            console.log('Element is hidden');
          }
        });
      }

      const targetElements = document.querySelectorAll('.target');
      targetElements.forEach(targetElement => {
        observer.observe(targetElement);
      });
            
})