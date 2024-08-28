import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MensajeComponent } from './componentes/mensaje/mensaje.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MensajeComponent, NgIf, NgFor], //Aca importamos tanto los componentes como los modulos que necesitemos utilizar en este componente
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 numero1: number = 0;
 numero2: number = 0;
 resultado!: number;
 items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
 ]

 sumar() {
  this.resultado = this.numero1 + this.numero2;
 }
}
