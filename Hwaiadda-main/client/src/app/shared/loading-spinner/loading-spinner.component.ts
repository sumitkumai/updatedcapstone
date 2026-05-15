import { Component } from '@angular/core';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div *ngIf="loadingService.isLoading$ | async" class="global-loader-overlay">
      <div class="global-loader-spinner"></div>
    </div>
  `,
  styles: [`:host { display: contents; }`]
})
export class LoadingSpinnerComponent {
  constructor(public loadingService: LoadingService) {}
}
