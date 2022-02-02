
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Output() sizeEmit = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onItemChange(value: number) {
    this.sizeEmit.emit(value)
  }

}
