import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService, Student } from '../../core/services/data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  users: any[] = [];
  students: Student[] = [];
  errorMessage: string = "";

  myForm: FormGroup = new FormGroup({
    "userName": new FormControl('', Validators.required),
    "userSurname": new FormControl('', Validators.required)
  });

  constructor(private dataService: DataService) {
    this.onReInitForm();
  }

  ngOnInit(): void {
    this.dataService.getStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
      },
      (error) => {
        this.errorMessage = error;
        console.error("Error loading students: ", error);
      }
    );
  }

  onSubmit() {
    this.users.push(this.myForm.getRawValue());
  }

  onReInitForm() {
    this.myForm = new FormGroup({
      "userName": new FormControl('', Validators.required),
      "userSurname": new FormControl('', Validators.required)
    });
  }
}
