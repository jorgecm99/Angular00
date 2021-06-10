import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iregister } from '../../teams/models/iteams';
import { RegisterService } from '../services/register.service';
import { comparePassword } from '../validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted: boolean=false;
  public user!: Iregister


  constructor(private fomrBuilder:FormBuilder, public registerService:RegisterService) {
    this.registerForm = this.fomrBuilder.group({
      name:['', [Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]],
      repeatPassword:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      phone:['',[Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      
    },
    {
      validator: comparePassword('password', 'repeatPassword')
    });
  };


  ngOnInit(): void {};

  public onSubmit (): void {

    this.submitted=true;

    if(this.registerForm.valid){
      this.user = {
        name:this.registerForm.get('name')?.value,
        password:this.registerForm.get('password')?.value,
        repeatPassword:this.registerForm.get('repeatPassword')?.value,
        email:this.registerForm.get('email')?.value,
        phone:this.registerForm.get('phone')?.value,
      };
      this.registerForm.reset();
	    this.submitted = false;
      this.registerService.postUser(this.user).subscribe((data)=>{
        console.log(data)
      })
    }
  }
}



