import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PostServices {

  posts = [
    {
      title: "Playa Tranquila Barú",
      subtitle: "Barú",
      description: "Aguas cristalinas con la mejor vibra.",
      longDescription: "...",
      background_image: "https://metatravelcartagena.com/wp-content/uploads/2024/03/isla-baru-playaa-tranquila-410x250.jpg",
      button_text: "Ver detalles",
      enabled: true
    },
    {
      title: "Playa Azul",
      subtitle: "Boquilla",
      description: "En la zona centrica de la ciudad a 5 minutos del aeroperto.",
      longDescription: "...",
      background_image: "https://www.alternativetravelcartagena.com/wp-content/uploads/2015/10/ruta-ecologica-en-cartagena-tour-por-los-manglares-de-la-boquilla-4.jpg",
      button_text: "Ver detalles",
      enabled: true
    },
    {
      title: "Playa Tranquila Barú",
      subtitle: "Barú",
      description: "Aguas cristalinas con la mejor vibra.",
      longDescription: "...",
      background_image: "../../../../assets/images/example-image.jpg",
      button_text: "Ver detalles",
      enabled: true
    },
    {
      title: "Playa Tranquila Barú",
      subtitle: "Barú",
      description: "Aguas cristalinas con la mejor vibra.",
      longDescription: "...",
      background_image: "../../../../assets/images/example-image.jpg",
      button_text: "Ver detalles",
      enabled: true
    },
  ]
  getPosts() {
    return this.posts
  }
}