import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { HttpService } from '../../../services/http.service';

Chart.register(...registerables);

@Component({
  selector: 'app-admin-analytics',
  templateUrl: './admin-analytics.component.html',
  styleUrls: ['./admin-analytics.component.scss']
})
export class AdminAnalyticsComponent implements OnInit, OnDestroy {

  metrics: any = null;
  private sub?: Subscription;
  private charts: Chart[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.sub = this.httpService.getAnalytics().subscribe({
      next: (data) => {
        this.metrics = data;
        setTimeout(() => this.renderCharts(), 100);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.charts.forEach(c => c.destroy());
    this.charts = [];
  }

  private renderCharts(): void {
    if (!this.metrics) return;
    this.destroyCharts();

    const routes = this.metrics.popularRoutes || [];
    const routeCtx = document.getElementById('routesChart') as HTMLCanvasElement;
    if (routeCtx && routes.length) {
      this.charts.push(new Chart(routeCtx, {
        type: 'bar',
        data: {
          labels: routes.map((r: any) => r.route),
          datasets: [{ label: 'Bookings', data: routes.map((r: any) => r.bookings), backgroundColor: '#0d6efd' }]
        },
        options: { responsive: true, plugins: { legend: { display: false } } }
      } as ChartConfiguration));
    }

    const trend = this.metrics.cancellationTrend || {};
    const trendCtx = document.getElementById('cancelChart') as HTMLCanvasElement;
    const labels = Object.keys(trend);
    if (trendCtx && labels.length) {
      this.charts.push(new Chart(trendCtx, {
        type: 'line',
        data: {
          labels,
          datasets: [{ label: 'Cancellations', data: labels.map(k => trend[k]), borderColor: '#dc3545', fill: false }]
        },
        options: { responsive: true }
      } as ChartConfiguration));
    }

    const occ = this.metrics.flightOccupancy || [];
    const occCtx = document.getElementById('occupancyChart') as HTMLCanvasElement;
    if (occCtx && occ.length) {
      this.charts.push(new Chart(occCtx, {
        type: 'doughnut',
        data: {
          labels: occ.map((o: any) => o.flight),
          datasets: [{ data: occ.map((o: any) => o.occupancyRate), backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6f42c1'] }]
        },
        options: { responsive: true }
      } as ChartConfiguration));
    }
  }

  private destroyCharts(): void {
    this.charts.forEach(c => c.destroy());
    this.charts = [];
  }
}
