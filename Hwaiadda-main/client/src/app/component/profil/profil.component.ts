import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  user: any = null;
  showError = false;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.http.get<any>(`${environment.apiUrl}/api/auth/user`).subscribe({
      next: (res) => {
        this.user = {
          username: res.username,
          email: res.email,
          role: res.role,
          userId: res.id,
          contactNumber: res.contactNumber,
          verified: res.verified
        };
        this.showError = false;
      },
      error: () => {
        this.showError = true;
        this.user = {
          username: this.authService.getUsername(),
          role: this.authService.getRole,
          userId: this.authService.getUserId()
        };
      }
    });
  }
}
