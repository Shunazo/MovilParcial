import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonInput} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.page.html',
  styleUrls: ['./promedio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule, IonCard, IonButton, IonInput]
})
export class PromedioPage  {
  num1: string= "";
  num2: string= "";
  num3: string= "";

  max: number | string = "";
  min: number | string = "";
  avg: number | string = "";

  calcularResultados() {

    const n1 = Number(this.num1);
    const n2 = Number(this.num2);
    const n3 = Number(this.num3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      this.max = this.min = this.avg = "Ingresa un numero valido manito"
      return;
    }

  const nums = [n1, n2, n3]; 
  this.max = Math.max(...nums);
  this.min = Math.min(...nums);
  this.avg = (n1 + n2 + n3) / 3;
  }
}
