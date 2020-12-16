import { AbstractControl } from "@angular/forms";

interface IValidPassword {
    [key: string]: boolean
}

export function PasswordValidator(control:AbstractControl): IValidPassword | null{
    const password = control.get('password');
    const confirm_password = control.get('confirm_password');
    if(password.pristine || confirm_password.pristine){
        return null;
    }
    return password && confirm_password && password.value !== confirm_password.value ? 
    {'misMatch': true} : null
}