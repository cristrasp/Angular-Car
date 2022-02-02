import { ApiService } from './../../service/api.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';

@Component({
  selector: 'app-new-cars',
  templateUrl: './new-cars.component.html',
  styleUrls: ['./new-cars.component.scss']
})
export class NewCarsComponent implements OnInit {
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
      type: 'New'
    }
    this.service.getByMake(obj).subscribe(res => {
      this.newCars = res;
      this.newCars = this.newCars.slice(0, this.size)
    })
  }

  getAllNewCars() {
    this.service.getAllCarsByType('New').subscribe(res => {
      this.newCars = res;
    })
  }


}
