import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { NgForm } from '@angular/forms';
import { Car } from '../../../models/car';

@Component({
  selector: 'jauc-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  constructor(private carService: CarService) {}

  ngOnInit() {}

  resetForm(carForm: NgForm) {
    if (carForm != null) {
      carForm.reset();
      this.carService.selectedCar = new Car();
    }
  }
}
