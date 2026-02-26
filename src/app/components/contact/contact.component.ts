import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';
import { Profile } from '../../models/profile.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private profileService = inject(ProfileService);
  profile$?: Observable<Profile>;

  constructor() {
    this.profile$ = this.profileService.getProfile();
  }
}
