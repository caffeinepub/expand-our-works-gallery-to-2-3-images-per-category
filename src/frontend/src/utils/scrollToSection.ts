/**
 * Smoothly scrolls to a target element with fixed header offset and focuses it after completion.
 * @param targetId - The ID of the target element (without #)
 * @returns Promise that resolves when scroll is complete
 */
export function scrollToSection(targetId: string): Promise<void> {
  return new Promise((resolve) => {
    const targetElement = document.getElementById(targetId);
    
    if (!targetElement) {
      console.warn(`Element with id "${targetId}" not found`);
      resolve();
      return;
    }

    // Get the fixed header height dynamically
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80;
    
    // Calculate the target position with offset
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // Extra 20px padding

    // Perform smooth scroll
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Wait for scroll to complete using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            resolve();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: `-${headerHeight}px 0px 0px 0px`
      }
    );

    observer.observe(targetElement);

    // Fallback timeout in case observer doesn't fire
    setTimeout(() => {
      observer.disconnect();
      resolve();
    }, 1000);
  });
}
