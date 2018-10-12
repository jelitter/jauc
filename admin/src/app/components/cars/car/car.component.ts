import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';

@Component({
  selector: 'jauc-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCars();
    this.resetForm();
  }

  onSubmit(carForm: NgForm) {
    this.carService.addCar(carForm.value);
    this.resetForm(carForm);
  }

  resetForm(carForm?: NgForm) {
    if (carForm != null) {
      carForm.reset();
      this.carService.selectedCar = new Car();
    }
  }
}
