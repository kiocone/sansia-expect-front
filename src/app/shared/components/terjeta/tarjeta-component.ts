import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from '@angular/material/card'; 
import { ITarjeta } from "./type/tarjeta-content.interface";

@Component({
  standalone: true,
  selector: "sansia-tarjeta",
  templateUrl: "sansia-tarjeta.component.html",
  styleUrls: ["sansia-tarjeta.component.scss"],
  imports: [
    MatCardModule,
    MatButtonModule,
  ]
})
export class SaniaTarjetaComponent {

  maxChars: number = 300;

  @Input() tarjetaData!: ITarjeta;

  @Output() cardClicked = new EventEmitter();


  onClick(id: number | undefined) {
    this.cardClicked.emit(id);
  }
  
  truncateText(text: string): string {
    return text.length > this.maxChars ? text.substring(0, this.maxChars) + "..." : text;
  }
}