import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterisk'
})
export class AsteriskPipe implements PipeTransform {
  asterisk:string = "";
  
  /**
   * Pipe para transformar la password en asteriscos
   * @param password del usuario
   * @returns string
   */
  transform(password: string): string {
    
    for (let i = 0; i < password.length; i++) {
      this.asterisk += "*";
    }
    return this.asterisk;
  }

}
