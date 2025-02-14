import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonInput} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonButton, IonInput, IonicModule]
})

export class TablaPage {

  numero: string = "";
  resultado: string[] = [];

  generarTabla(n: number) {
    if (isNaN(n) || n <= 0) return ["Ingrese un numero valido"]

    let table: string[] = [];
    for (let i = 1; i <= 14; i++) {
      table.push(`${n} x ${i} = ${n * i}`);
    }
    return table;
  }

  calcularTabla() {
    const num = Number(this.numero);
    this.resultado = isNaN(num) ? ["Ingrese un numero valido"]: this.generarTabla(num);
  }

}
