import { Injectable } from "@angular/core";
import { ITarjeta } from "../shared/components/terjeta/type/tarjeta-content.interface";

@Injectable({providedIn: 'root'})
export class PostServices {

  posts = [
    {
      id: 0,
      title: "MANGATA BEACH CLUB",
      subtitle: "Islas del Rosario",
      description: "💧MANGATA BEACH CLUB<br><br>⏰Hora de llegada a la MARINA TODOMAR bocagrande:  7:30 a.m<br><br>🥳🥳 PASAJEROS NO PAGAN TASA PORTUARIA🥳🥳<br><br>INCLUYE<br><br>🚤 Transporte en lanchas deportivas (ida y vuelta) desde Marina privada TODOMAR<br>🥂 Copa de champaña de bienvenida o jugo natural<br>🏖️ Acomodación en cama, sala o silla asoleadora<br>🎧 Dj<br>🏄🏻‍♂️ Uso de kayaks, Paddleboards y caretas easy breath para snorkel<br><br>🍽 Almuerzo a la carta (8 opciones disponibles)<br>1. Filete de pescado (CORVINA) apanado<br>Arroz de coco, ensalada (mixta), patacones<br>2. Pescado frito<br>Arroz de coco, ensalada (mixta), patacones<br>3. Pechuga a la plancha<br>Arroz blanco, ensalada (mixta), tajadas de platanos maduro<br>4. Risotto de Camarones<br>5. Pasta vegetariana<br>Vegetales salteados<br>6. Pasta Boloñesa<br>Tipo de pasta penne.<br>7. Nuggets de pollo<br>Acompañado con Papas francesa<br>8. Pizza<br>Hawaiana, Jamón y champiñones<br><br>(acompañado con su bebida no alcohólica)<br><br>🚿 Ducha (agua dulce)<br>🛖Restaurante con aire acondicionado ó al aire libre<br>🧺 Servicio de toallas<br>🏝️Acceso a todas las instalaciones.<br><br>Hora de llegada a la Marina Todomar: 7:30 am<br>*Hora de retorno aproximada al muelle: 4:00 pm<br>",
      longDescription: "...",
      background_image: "../../assets/images/mag-01.jpeg",
      button_text: "Ver detalles",
      enabled: true,
      images: [
        "../../assets/images/mag-01.jpeg",
        "../../assets/images/mag-02.jpeg",
        "../../assets/images/mag-03.jpeg",
        "../../assets/images/mag-04.jpeg",
        "../../assets/images/mag-05.jpeg",
        "../../assets/images/mag-06.jpeg",
        "../../assets/images/mag-07.jpeg",
        "../../assets/images/mag-08.jpeg",
        "../../assets/images/mag-09.jpeg",
        "../../assets/images/mag-10.jpeg",
        "../../assets/images/mag-11.jpeg",
        "../../assets/images/mag-12.jpeg",
        "../../assets/images/mag-13.jpeg"
      ]
    },
    {
      id: 1,
      title: "MANTAS BEACH",
      subtitle: "Islas del Rosario",
      description: "🌴MANTAS BEACH<br><br>INCLUYE<br><br>🚤 Transporte en lanchas rápidas (ida y vuelta)<br><br>🍷 Coctel de bienvenida o limonada<br><br>🍸🍹2X1 TODO EL DÍA🍸🍹 En los siguientes cócteles: (Daiquiri, Caipiriña, Margarita,  Caipiroska)<br><br>🍺🍻CUBETAZO DE CERVEZA 🍻🍺 TODO EL DÍA en cervezas nacionales e Internacionales<br>PAGAN 5 Y LA 6ta ES GRATIS<br><br>🏝️ Hermosa playa de arena blanca y agua cristalina<br><br>🏖️ Cómodas asoleadoras de teca<br><br>🛖Uso de las áreas comunes: baños, comedores, zona de playa, restaurante segundo piso, muelle privado y beach bar.<br><br>🍽 Almuerzo a la carta (8 opciones disponibles)<br>1. Mojarra frita<br>2. Sierra en posta<br>3. Arroz de camarón<br>4. Pechuga de pollo a la plancha<br>5. Sancocho de pescado<br>6. Pasta o arroz con vegetales salteados<br>7. Fish & Chips<br>8. Chicken Tenders<br>Nota: todas las comidas van acompañadas con una bebida (Gaseosa o botella de agua)<br><br>🛜 Zona Wifi<br><br>🏄🏻‍♂️Paddleboards<br>🚣🏽‍♀️kayaks<br><br>🚿 Ducha (agua dulce)<br><br>🐠 Traslado al oceanario<br><br>************<br>************<br>NO ESTAN INCLUIDOS<br><br>Tarifa administrativa $15.000 COP por persona (pago estrictamente en efectivo)<br><br><br>🧺 Servicio de Toallas<br>🚫 Entrada al oceanario<br>Actividades adicionales (no mencionadas anteriormente)<br>************<br>************<br><br>⏰Hora de llegada al muelle: 7:30 a.m muelle TODOMAR Bocagrande<br><br>⏰ Hora de retorno aproximada al muelle: 4:00 p.m<br>",
      longDescription: "...",
      background_image: "../../assets/images/man-01.jpeg",
      button_text: "Ver detalles",
      enabled: true,
      images: [
        "../../assets/images/man-01.jpeg",
        "../../assets/images/man-02.jpeg",
        "../../assets/images/man-03.jpeg",
        "../../assets/images/man-04.jpeg",
        "../../assets/images/man-05.jpeg",
        "../../assets/images/man-06.jpeg",
        "../../assets/images/man-07.jpeg"
      ]
    },
    {
      id: 2,
      title: "Playa Tranquila",
      subtitle: "Barú",
      description: "Salidas diarias desde las 7:00 am<br>Guia orientador<br>Recogida en hoteles zonas turisticas<br>Boca grande, laguito y sona norte.<br><br>Transporte terrestre en bus climatizado hasta playa blanca barú \/<br>Lancha hasta el sector de playa tranquila.<br>Uso de las instalaciones, baños restaurante, cama, sillas y asoleadoras.<br>Almuerzo:<br>3 opciones<br>Pescado, pollo y vegetariano.<br>Retorno<br>A cartagena<br>3:30 P.M.",
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
      id: 3,
      title: "TOUR PARQUE TAYRONA",
      subtitle: "SECTOR CABO SAN JUAN",
      description: "Salidas Martes y Viernes<br>📍Recogida 04:00 Am<br>📍Finalización 09:30 Pm<br><br><strong>RECOGIDA</strong><br>🚌 Traslado de recogida (Boca Grande, Laguito, Centro Histórico, Getsemani y Zona Norte).  No incluye sector de Manzanillo.<br><br><strong>RECORRIDO</strong><br>🚌 Pasando por Barranquilla y Santa Marta, llegamos al Parque Tayrona.<br><br>🔖 Entradas al Parque Tayrona<br><br>👨‍👩‍👧‍👦 Charla educativa sobre la conservación del medio ambiente, en el Parque.<br><br><strong>CAMINATA</strong><br>🚶‍♂️🚶‍♀️ durante 2 horas por senderos boscosos, húmedos y tropicales (opción caballo no incluida).<br><br><strong>HIDRATACION</strong><br>🍶Una (1) botella de agua.<br><br><strong>PLAYAS</strong><br>🏝 Pasaremos por las playas de Arrecifes, Arenilla y La piscinita, hasta llegar a CABO SAN JUAN DEL GUIA.<br><br><strong>CABO SAN JUAN DEL GUIA</strong><br> 🏊‍♀️🥘  Disfrute de hermosas playas. En arenilla disfrutamos del almuerzo típico: pescado, patacón, arroz de coco y ensalada (opción  pollo, carne a la plancha y  vegetariano).<br> <br><strong>RETORNO</strong><br>🗺 Retornamos a Cartagena hasta sus hoteles,  aproximadamente 9:30 pm.<br><br>👨‍💼Guía acompañada",
      longDescription: "...",
      background_image: "../../assets/images/tay-01.jpeg",
      button_text: "Ver detalles",
      enabled: true,
      images: [
        "../../assets/images/tay-01.jpeg",
        "../../assets/images/tay-02.jpeg",
        "../../assets/images/tay-03.jpeg",
        "../../assets/images/tay-04.jpeg",
        "../../assets/images/tay-05.jpeg",
        "../../assets/images/tay-06.jpeg",
        "../../assets/images/tay-07.jpeg",
        "../../assets/images/tay-08.jpeg",
        "../../assets/images/tay-09.jpeg",
        "../../assets/images/tay-10.jpeg",
        "../../assets/images/tay-11.jpeg",
        "../../assets/images/tay-12.jpeg",
        "../../assets/images/tay-13.jpeg",
        "../../assets/images/tay-14.jpeg"   
      ]
    }
  ]
  getPosts(): ITarjeta[] {
    return this.posts
  }

  getPostById(id: number): ITarjeta {
    return this.posts[id]
  }
}