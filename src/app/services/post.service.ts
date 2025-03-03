import { Injectable } from "@angular/core";
import { ITarjeta } from "../shared/components/terjeta/type/tarjeta-content.interface";

@Injectable({providedIn: 'root'})
export class PostServices {

  posts = [
    {
      id: 0,
      title: "Playa Tranquila",
      subtitle: "Barú",
      description: "Salidas diarias desde las 7:00 am\nGuia orientador\nRecogida en hoteles zonas turisticas\nBoca grande, laguito y sona norte.\n\nTransporte terrestre en bus climatizado hasta playa blanca barú \/\nLancha hasta el sector de playa tranquila.\nUso de las instalaciones, baños restaurante, cama, sillas y asoleadoras.\nAlmuerzo:\n3 opciones\nPescado, pollo y vegetariano.\nRetorno\nA cartagena\n3:30 P.M.",
      longDescription: "...",
      background_image: "../../assets/images/playa-tranquila.jpeg",
      button_text: "Ver detalles",
      enabled: true,
      images: [
        "../../assets/images/pt-01.jpeg",
        "../../assets/images/pt-02.jpeg",
        "../../assets/images/pt-03.jpeg",
        "../../assets/images/pt-04.jpeg",
        "../../assets/images/pt-05.jpeg",
        "../../assets/images/pt-06.jpeg",
        "../../assets/images/pt-07.jpeg"
      ]
    },
    {
      id: 1,
      title: "Playa Azul",
      subtitle: "Boquilla",
      description: "En la zona centrica de la ciudad a 5 minutos del aeroperto.",
      longDescription: "...",
      background_image: "https://www.alternativetravelcartagena.com/wp-content/uploads/2015/10/ruta-ecologica-en-cartagena-tour-por-los-manglares-de-la-boquilla-4.jpg",
      button_text: "Ver detalles",
      enabled: true
    },
    {
      id: 2,
      title: "Playa Tranquila Barú",
      subtitle: "Barú",
      description: "Aguas cristalinas con la mejor vibra.",
      longDescription: "...",
      background_image: "../../../../assets/images/example-image.jpg",
      button_text: "Ver detalles",
      enabled: true
    },
    {
      id: 3,
      title: "Playa Tranquila Barú",
      subtitle: "Barú",
      description: "Aguas cristalinas con la mejor vibra.",
      longDescription: "...",
      background_image: "../../../../assets/images/example-image.jpg",
      button_text: "Ver detalles",
      enabled: true
    },
  ]
  getPosts(): ITarjeta[] {
    return this.posts
  }

  getPostById(id: number): ITarjeta {
    return this.posts[id]
  }
}