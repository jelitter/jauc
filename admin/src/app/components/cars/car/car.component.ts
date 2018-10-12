import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'jauc-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  constructor(private carService: CarService, private toastr: ToastrService) {}

  ngOnInit() {
    this.carService.getCars();
    this.resetForm();
  }

  onSubmit(carForm: NgForm) {
    if (carForm.value.$key == null) {
      this.carService.addCar(carForm.value);
      this.toastr.success('Car Added', '🚗 Success!');
    } else {
      this.carService.updateCar(carForm.value);
      this.toastr.success('Car Updated', '🚗 Success!');
    }
    this.resetForm(carForm);
  }

  resetForm(carForm?: NgForm) {
    if (carForm != null) {
      carForm.reset();
      this.carService.selectedCar = new Car();
    }
  }
}
