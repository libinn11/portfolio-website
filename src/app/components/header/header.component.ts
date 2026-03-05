import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { SmoothScrollService } from '../../services/smooth-scroll.service';
import { Observable } from 'rxjs';
import { Profile } from '../../models/profile.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private profileService = inject(ProfileService);
  private smoothScrollService = inject(SmoothScrollService);
  profile$?: Observable<Profile>;

  constructor() {
    this.profile$ = this.profileService.getProfile();
  }

  /**
   * Smooth scroll to section
   * @param sectionId - The ID of the section to scroll to
   */
  scrollToSection(sectionId: string): void {
    this.smoothScrollService.scrollToElement(sectionId, 80); // 80px offset for header height
  }

  /**
   * Handle navigation click
   * @param event - Click event
   * @param sectionId - Target section ID
   */
  onNavClick(event: Event, sectionId: string): void {
    event.preventDefault(); // Prevent default anchor behavior
    this.scrollToSection(sectionId);
  }
}
