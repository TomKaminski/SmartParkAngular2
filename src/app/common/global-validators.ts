import { AbstractControl, FormGroup } from '@angular/forms';


export class GlobalValidators {

    static mailFormat(control: AbstractControl): ValidationResult {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    }

    static matchPassword(group : FormGroup): ValidationResult {
      let password = group.controls['password'];
      let confirm = group.controls['repeatpassword'];

      // Don't kick in until user touches both fields   
      if (password.pristine || confirm.pristine) {
        return null;
      }

      // Mark group as touched so we can add invalid class easily
      group.markAsTouched();
      if (password.value === confirm.value) {
        return null;
      }

      return {
        notEqual: true
      };
    }
}

interface ValidationResult {
    [key: string]: boolean;
}