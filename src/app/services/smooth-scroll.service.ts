import { Injectable, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {
  private viewportScroller = inject(ViewportScroller);

  constructor() {}

  /**
   * Smooth scroll to element with given ID
   * @param elementId - The ID of the element to scroll to
   * @param offset - Optional offset from top (default: 0)
   */
  scrollToElement(elementId: string, offset: number = 0): void {
    // First try to find the element
    const element = document.getElementById(elementId);
    
    if (element) {
      // Calculate the scroll position with offset
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      // Use smooth scrolling behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback to Angular's viewport scroller if element not found
      this.viewportScroller.scrollToAnchor(elementId);
    }
  }

  /**
   * Smooth scroll to top of page
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Check if element exists in DOM
   * @param elementId - The ID of the element to check
   * @returns boolean - True if element exists
   */
  elementExists(elementId: string): boolean {
    return !!document.getElementById(elementId);
  }
}
