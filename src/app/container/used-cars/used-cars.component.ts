import { Car } from './../../interfaces/car';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-used-cars',
  templateUrl: './used-cars.component.html',
  styleUrls: ['./used-cars.component.scss']
})
export class UsedCarsComponent implements OnInit {
  size: number = 1;
  newCars: Car[] = [];
  constructor(private service: ApiService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllNewCars();
    this.ref.detectChanges();
  }

  onRadioChange(value: number) {
    this.size = value
  }

  getCarByMake(make: string) {
    let obj = {
      make: make,
      size: this.size,
      type: 'Old'
    }
    this.service.getByMake(obj).subscribe(res => {
      this.newCars = res;
      this.newCars = this.newCars.slice(0, this.size)
    })
  }

  getAllNewCars() {
    this.service.getAllCarsByType('Old').subscribe(res => {
      this.newCars = res;
    })
  }
}
