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
  
}
