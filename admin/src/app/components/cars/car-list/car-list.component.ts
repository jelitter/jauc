import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';

@Component({
  selector: 'jauc-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carList: Car[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService
      .getCars()
      .snapshotChanges()
      .subscribe(item => {
        this.carList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.carList.push(x as Car);
        });
      });
  }
}
