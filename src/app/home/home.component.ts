import { Component } from "@angular/core";
import { SaniaTarjetaComponent } from "../shared/components/terjeta/tarjeta-component";

@Component({
  standalone: true,
  selector: "sansia-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.scss"],
  imports: [
    SaniaTarjetaComponent
  ],
})
export class HomeComponent {
};