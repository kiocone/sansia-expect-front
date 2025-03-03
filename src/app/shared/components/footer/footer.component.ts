import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "sansia-footer",
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.scss"]
})
export class FooterComponent {
  
  year: number = new Date().getFullYear();

  smallImages: string[] = [];

  constructor() {
    // Add small images for the footer
    this.smallImages = Array.from({ length: 4 }, (_, i) => `../../../../assets/images/small/pt-0${i + 1}-sm.jpeg`);
    //src/assets/images/small/pt-01-sm.jpeg
  }
}