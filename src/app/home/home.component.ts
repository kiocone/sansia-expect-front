import { Component } from "@angular/core";
import { SaniaTarjetaComponent } from "../shared/components/terjeta/tarjeta-component";
import { ITarjeta } from "../shared/components/terjeta/type/tarjeta-content.interface";
import { PostServices } from "../services/post.service";
import { Router } from "@angular/router";

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

  tarjetaData: ITarjeta[];

  constructor(
    private postsService: PostServices,
    private router: Router

  ) {
    this.tarjetaData = this.postsService.getPosts();
  }

  onAction(id: number) {
    this.router.navigate(["/post", id])
  }
};