import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-pilot-schedule',
  templateUrl: './pilot-schedule.component.html',
  styleUrls: ['./pilot-schedule.component.scss']
})
export class PilotScheduleComponent implements OnInit, OnDestroy {
  schedules: any[] = [];
  showError = false;
  errorMessage = '';
  private subs = new Subscription();

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.subs.add(
      this.httpService.getMySchedule().subscribe({
        next: (data) => { this.schedules = data; },
        error: () => {
          this.showError = true;
          this.errorMessage = 'Could not load schedule.';
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  updateStatus(id: number, status: string): void {
    this.subs.add(
      this.httpService.updateScheduleStatus(id, status).subscribe({
        next: () => {
          this.subs.add(
            this.httpService.getMySchedule().subscribe({
              next: (data) => { this.schedules = data; }
            })
          );
        },
        error: (err) => {
          this.showError = true;
          this.errorMessage = err?.error?.message || 'Failed to update status.';
        }
      })
    );
  }
}
