import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicantData.component.html',
  styleUrls: ['./applicantData.component.css']
})
export class ApplicantDataComponent implements OnInit {
  addForm: FormGroup;

  rows: FormArray;
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.addForm = this.fb.group({
      firstname: [''],
      mname:[''],
      lname: [''],
      email:['']
    });
    this.rows = this.fb.array([]);

  }
  

  ngOnInit(): void {
    
    this.addForm.addControl('rows', this.rows);
  }

 
  onAddRow() {
    this.rows.push(this.createItemFormGroup());
    console.log('....',this.rows.value[0].firstname);
   
  }

  onRemoveRow(rowIndex:number){
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      firstname: null,
      mname: null,
      lname: null,
      email:null
    });
  }
}
