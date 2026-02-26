import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';
import { Profile } from '../../models/profile.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  private profileService = inject(ProfileService);
  profile$?: Observable<Profile>;

  constructor() {
    this.profile$ = this.profileService.getProfile();
  }
}
