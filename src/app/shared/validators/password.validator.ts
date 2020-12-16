import { AbstractControl } from '@angular/forms';

interface IValidPassword {
    [key: string]: boolean;
}

export function PasswordValidator(control: AbstractControl): IValidPassword | null{
    const password = control.get('password');
    const confirmPassword = control.get('confirm_password');
    if (password.pristine || confirmPassword.pristine) {
        return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ?
    {misMatch: true} : null;
}
