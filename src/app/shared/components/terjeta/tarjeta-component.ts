import { Component, Input } from "@angular/core";
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

  @Input() tarjetaData!: ITarjeta;

}