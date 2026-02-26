import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';
import { Profile } from '../../models/profile.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private profileService = inject(ProfileService);
  profile$?: Observable<Profile>;

  constructor() {
    this.profile$ = this.profileService.getProfile();
  }
}
