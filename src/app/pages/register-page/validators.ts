import { FormGroup } from "@angular/forms";


export function comparePassword (password: any, repeatPassword: any){
  
    return (formGroup: FormGroup) => {
      console.log(formGroup);

      const original = formGroup.controls[password];
      const secondary = formGroup.controls[repeatPassword];
      if (secondary.errors && !secondary.errors.mustMatch) {
        return
      }
      if (original.value !== secondary.value) {
        secondary.setErrors({ mustMatch: true });
      } else {
        secondary.setErrors(null);
      }
    };
  }
