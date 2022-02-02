import { Car } from './../../interfaces/car';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() car: Car;
  @Output() make = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  getCarsByMake(title: string) {
    this.make.emit(title)
  }

}
