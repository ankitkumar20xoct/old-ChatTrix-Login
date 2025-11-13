import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  isDisabled = false;
  showAnnouncements = true;
  isLoggedIn = false;

  // Added for ngSwitch example
  loginMode: string = 'email';

  socialOptions = ['Facebook', 'Google', 'Apple'];

  announcements: string[] = [
    '🔒 New security policy update',
    '⚙️ Scheduled maintenance at 2 AM',
    '✅ Two-Factor Authentication available!',
    '🆕 New dashboard design introduced',
    '💡 Performance improvements in login speed',
    '📱 Mobile app update now live on Play Store',
  ];
}
