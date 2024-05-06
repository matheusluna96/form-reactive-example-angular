import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  formCadastro: FormGroup = new FormGroup({});

  constructor(
    private formBuilder : FormBuilder
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formCadastro = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required],
      sexo: ['MASCULINO', Validators.required]
    })
  }

  add(){
    console.log(this.formCadastro.value);

  }

}
