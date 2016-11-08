export class ToastHelper{
    static Error(message:string, duration:number){
        Materialize.toast(message, duration, 'toast-red');
    }

    static Success(message:string, duration:number){
        Materialize.toast(message, duration, 'toast-green');
    }
}