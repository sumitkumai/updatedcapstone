import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Seat } from '../../model/seat';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatSelectionComponent implements OnChanges {

  @Input() flightId!: number;
  @Input() seats: Seat[] = [];
  @Output() seatSelected = new EventEmitter<string>();

  seatMap: any[][] = [];
  selectedSeatNumber: string | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['seats']?.currentValue?.length) {
      this.buildSeatMap(changes['seats'].currentValue);
    }
  }

  buildSeatMap(seats: any[]): void {
    const rowMap: { [key: string]: any[] } = {};
    const rowOrder: string[] = [];
    for (const seat of seats) {
      const row = seat.rowLabel;
      if (!rowMap[row]) {
        rowMap[row] = [];
        rowOrder.push(row);
      }
      rowMap[row].push({ ...seat, booked: !seat.isAvailable });
    }
    this.seatMap = rowOrder.map(row => rowMap[row]);
  }

  selectSeat(seat: any): void {
    if (seat.booked) return;
    this.selectedSeatNumber = seat.seatNumber;
    this.seatSelected.emit(seat.seatNumber);
  }
}
