import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';
import { Profile } from '../../models/profile.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private profileService = inject(ProfileService);
  profile$?: Observable<Profile>;

  constructor() {
    this.profile$ = this.profileService.getProfile();
  }
}
