import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login.service';

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
    '📱 Mobile app update now live on Play Store',
  ];
  constructor(private loginService: LoginService){
  }
}
