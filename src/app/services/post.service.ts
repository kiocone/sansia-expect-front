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
        "../../assets/images/mag-12.jpeg"
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
      background_image: "../../assets/images/tay-15.jpeg",
      button_text: "Ver detalles",
      enabled: true,
      images: [
        "../../assets/images/tay-15.jpeg",
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
    },
    {
      id: 4,
      title: "TOUR PARQUE TAYRONA",
      subtitle: "SECTOR PLAYA CRISTAL",
      description: "📍Recogida 04:00 Am<br>📍Finalización 09:30 Pm<br><br><strong>RECOGIDA</strong><br>🚌 Traslado de recogida (Boca Grande, Laguito, Centro Histórico, Getsemani y Zona Norte).  No incluye sector de Manzanillo.<br><br><strong>RECORRIDO</strong><br>🚌 Pasando por Barranquilla y Santa Marta, llegamos al Parque Tayrona.<br><br>🔖 Entradas al Parque Tayrona<br><br>👨‍👩‍👧‍👦 Charla educativa sobre la conservación del medio ambiente, en el Parque.<br><br>🌊 MIRADOR PLAYA SIETE OLAS: Desembarcamos para disfrutar la hermosa vista (solo fotos).<br><br>🚣‍♀️ PLAYA NEGUANJE: Desembarcamos como lugar de tránsito, donde tomaremos una lancha por 10 minutos hacia PLAYA CRISTAL.<br><br>🏖️🏝️🍲 PLAYA CRISTAL: Disfrute de hermosas playas paradisíacas sin ningún tipo de contaminación. Almuerzo típico: pescado, patacón, arroz de coco y ensalada (opción  pollo, carne a la plancha y  vegetariano).<br><br><strong>RETORNO</strong><br>🗺 Retornamos a Cartagena hasta sus hoteles, aproximadamente 9:30 pm.<br><br>👨‍💼Guía acompañante durante todo el paseo.",
      longDescription: "...",
      background_image: "../../assets/images/tpc-04.jpeg",
      button_text: "Ver detalles",
      enabled: true,
      images: [
        "../../assets/images/tpc-01.jpeg",
        "../../assets/images/tpc-02.jpeg",
        "../../assets/images/tpc-03.jpeg",
        "../../assets/images/tpc-04.jpeg",
        "../../assets/images/tpc-05.jpeg"
      ]
    },
    {
      id: 5,
      title: "SANTA MARTA - BARRANQUILLA VIP",
      subtitle: "Santa Marta - Barranquilla",
      description: "📍Recogida 03:30:00 Am<br>📍Finalización 09:00 Pm<br><br><strong>Incluye</strong><br>🚌Recogida en la puerta de los hoteles (Boca Grande, Laguito, Centro Histórico, Getsemaní y Zona Norte).<br><br>🚌Paseo panorámico por la ciudad de Barranquilla.<br>paradas en Barranquilla:<br>🚤Caimán del Río: hermoso corredor vial a orilla del río Magdalena.<br>🏢Ventana al Mundo: monumento más alto de Latinoamérica.<br><br>🥪🧋Desayuno frio abordo (sándwich doble queso, doble jamón, cajita de jugo y fruta)<br><br>🌊🏝🏊‍♀️⛵Visita al sector del Rodadero, desde donde tomamos una lancha hacia Playa Blanca de Santa Marta. Disfruté de playa y deportes náuticos (no incluí dos).<br><br>🥘🍴🍤Almuerzo típico con pescado, patacón, arroz de coco y ensalada, con opción  de pollo o carne a la plancha, en Playa Blanca.<br><br>🏦 Retorno a la ciudad  de Santa Marta:<br><br>🤹‍♂️visita Quinta San Pedro Alejandrino (incluye entrada).<br>🤹‍♂️Visita a la estatua del Pibe Valderrama.<br>🛥️💒Paseo por la Bahía, la Marina, Parque de los novios, la Catedral, Plaza Bolíva<br>",
      longDescription: "...",
      background_image: "../../assets/images/smv-13.jpeg",
      button_text: "Ver detalles",
      enabled: true,
      images: [
        "../../assets/images/smv-13.jpeg",
        "../../assets/images/smv-01.jpeg",
        "../../assets/images/smv-02.jpeg",
        "../../assets/images/smv-03.jpeg",
        "../../assets/images/smv-04.jpeg",
        "../../assets/images/smv-05.jpeg",
        "../../assets/images/smv-06.jpeg",
        "../../assets/images/smv-07.jpeg",
        "../../assets/images/smv-08.jpeg",
        "../../assets/images/smv-09.jpeg",
        "../../assets/images/smv-10.jpeg",
        "../../assets/images/smv-11.jpeg",
        "../../assets/images/smv-12.jpeg"
      ]
    },
    {
      id: 6,
      title: "PALMARITO BEACH",
      subtitle: "TIERRA BOMBA",
      description: "Punto de salida: muelle detrás del hospital de bocagrande<br><br>Horarios de Inició: 09:00 am, 10:00 am, 11:00 am<br><br>A solo 10 minutos del Beach club.<br><br>- INCLUYE IMPUESTO DEL MUELLE!!<br><br>- Almuerzo tipo bufet, 🧆🥩🥙🥪🥘<br><br>- Transporte en lancha ( tipo pesquera )<br><br>- Uso de Kayaks y Padboard.<br><br>- Zona con Hamacas incluidas.<br><br>- Coctel de Bienvenida<br><br>- Piscina VIP.<br><br>Horario de retorno: 12:00 pm 03:00 pm 04:00 pm",
      longDescription: "...",
      background_image: "../../assets/images/pal-01.jpeg",
      button_text: "Ver detalles",
      enabled: true,
      videoId: "Ns2NxC7w-kY",
      isShort: "true",
      images: [
        "../../assets/images/pal-01.jpeg",
        "../../assets/images/pal-02.jpeg",
        "../../assets/images/pal-03.jpeg",
        "../../assets/images/pal-04.jpeg"
      ]
    },
    {
      id: 7,
      title: "SABAI",
      description: "🎉 IMPUESTO DE SALIDA INCLUIDO🎉<br><br>📍Lugar de encuentro:<br>Marina TodoMar de Bocagrande.<br><br>✅️INCLUYE:<br><br>🚤 Transporte en la lancha compartida ida y regreso.<br><br>🏰 Panorámico en El Fuerte de Bocachica<br><br>🏝️ Panorámico por la península de Barú y Cholon.<br><br>💧1 refrescante botella de agua abordo<br><br>🍧 Paleta de fruta de la región de bienvenida.<br><br>⛱️ Cama de playa<br><br>🍽️ Almuerzo a la carta (14 opciones) acompañado con una botella de agua o coca cola.<br><br>🏄🏻‍♂️ Actividades de Kayak, y paddleboard.<br><br>🏐Voleibol<br><br>🏸 Raquetas de playa.<br><br>☕️ Café ilimitado<br><br>▪︎ Wifi en todas las instalaciones<br><br>🏊🏼‍♂️ Acceso a Piscina<br><br>🚿 Ducha de Agua Dulce<br><br>👝 Servicio de Toallas<br><br>************<br>************<br>🚫 No incluye servicios no especificado<br>************<br>************<br><br>📍Lugar de encuentro:<br>Marina TodoMar de Bocagrande.<br><br>⏰️ Hora de encuentro:<br>7:30 a.m.<br>Hora de Salida:<br>8:15 a.m.<br>Regreso: 3:00 p.m. (sujeto a cambios climáticos)",
      longDescription: "...",
      background_image: "../../assets/images/sab-01.jpeg",
      button_text: "Ver detalles",
      enabled: true,
      videoId: "tdLDQ2VRnHQ",
      isShort: "true",
      images: [
        "../../assets/images/sab-01.jpeg",
        "../../assets/images/sab-02.jpeg",
        "../../assets/images/sab-03.jpeg",
        "../../assets/images/sab-04.jpeg",
        "../../assets/images/sab-05.jpeg",
        
      ]
    },
    {
      id: 8,
      title: "IBBIZA",
      subtitle: "PASADIA IBBIZA ISLAND BEACH CLUB 🏝",
      description: "Ven y disfruta en familia!<br>Atesora momentos mágicos en nuestro club de playa en Islas del Rosario<br><br>🏖️🌊🍹🥃⛱️🎧🍽️💥<br><br>INCLUYE<br>🚤 Transporte en lancha deportiva Ida y vuelta<br>🍹 Cóctel de Bienvenida con o sin alcohol<br>🍺Una Cerveza Nacional por persona<br>🍴 Almuerzo a elegir entre 07 opciones:<br>1. 🐠Plato típico Pescado frito acompañado de arroz de coco frito o blanco, patacones y ensalada.<br>2. ⁠🍜 Sancocho IBBIZA: Acompañado con arroz blanco o de coco con posta de pescado.<br>3. ⁠🍗 Pechuga a la Plancha<br>Acompañado con patacones, ensalada y una porción de arroz.<br>4. 🥦 Opción Vegetariano<br>5. 🍝🍤Pastas con vegetales y Mariscos.<br>6. 🍝 Pastas Carbonara.<br>7. 🧆Menú infantil.<br>🍹 Bebida: Agua o Gaseosa.<br>🏝️Uso de Zonas Sociales<br>🏊‍♀️Piscina de agua salada<br>🎶Dj en vivo<br>🏖️Cama playa<br>⛱️ Sillas Asoleadoras<br>🌊Playa privada<br>🚿Ducha de agua dulce<br>🐶Somos Pet Friendy, se permite el ingreso de Mascotas pequeñas con bosal y vacuna.<br>🐬Traslado al oceanario.<br>🥽 Snorkeling<br>🚣🏻‍♀️ Kayak<br>NO INCLUYE<br>- Toallas<br>- Tasa Administrativa ($26.500 PP)<br>- Gastos no especificados<br><br>Tener en cuenta👇<br>📍Punto de encuentro: Marina Todomar<br>🕗Hora de registro:  07:45 am a 08:00 am<br>🚤Hora de salida: entre 8:30 am y 8:40 am<br>🕥Hora de retorno: entre 03:15 pm y 03:30pm<br>(dependiendo de las condiciones climáticas del día)<br><br>❌No se permite ingreso de Alimentos y Bebidas<br>❌No apto para mujeres embarazadas<br><br>Políticas de Cancelación:<br>● Toda cancelación estará sujeta a cargos por concepto<br>de comisiones bancarias y gastos administrativos.<br>● Si se presenta alguna cancelación de la reserva se deberá hacer mínimo 24 horas<br>antes de la fecha del tour reservado de lo contrario se cobrará No Show.<br>● Para grupos si se presentan alguna cancelación de la reserva se deberá hacer<br>mínimo 72 Horas antes del tour reservado.<br>● La cancelación dentro de los términos previstos para ello,<br>se hará el reembolso del 70% de los servicios solicitados o,<br>cuando a ello aplique la retención de lo anticipado<br>pagado por el cliente.<br>",
      longDescription: "...",
      background_image: "../../assets/images/ibb-01.jpeg",
      button_text: "Ver detalles",
      enabled: true,
      videoId: "7xgvVxxlKcM",
      isShort: "false",
      images: [
        "../../assets/images/ibb-01.jpeg",
        "../../assets/images/ibb-02.jpeg",
        "../../assets/images/ibb-03.jpeg",
        "../../assets/images/ibb-04.jpeg",
        "../../assets/images/ibb-05.jpeg",
        
      ]
    },
    {
      id: 9,
      title: "4 DESTINOS",
      subtitle: "🐬 4 DESTINOS – ISLAS DEL ROSARIO🐬",
      description: "🚍 Recogida en el hotel, (7:50am a 8:30am)<br>(zona: Bocagrande, Marbella, Crespo, Boquilla. Si se encuentra en una zona diferente a la mencionada debe llegar al muelle de los pegasos).<br><br>🤠 Recorrido hacías las islas del rosario en lancha deportiva.<br>(las lanchas deportivas tienen capacidades desde 15 personas hasta 30 personas).<br><br>⚔️ Vista panorámica de los fuertes san Fernando y san José en bocachica.<br><br>🏝️ Vista panorámica de las islas de rosario.<br><br>🛩️ Avistamiento de la avioneta sumergida de Pablo Emilio Escobar Gaviria.<br><br>🐬 Ingreso al oceanario con entrada incluida.<br><br>🔥 isla Cholón<br><br>🌅 Almuerzo en isla Baru - playa tranquila.<br>(pescado frito, Pechuga de pollo o vegetariano. Cualquiera de estas opciones viene acompañado de ensalada, patacón y arroz de coco + Limonada).<br><br>🚤 Retorno en el mismo bote deportivo, (hasta el muelle los pegasos 3:30pm a 4:00pm)",
      longDescription: "...",
      background_image: "../../assets/images/ibb-05.jpeg",
      button_text: "Ver detalles",
      enabled: true,
      videoId: "cPrDMIYkrDs",
      isShort: "false",
      images: []
    }
  ]
  getPosts(): ITarjeta[] {
    return this.posts
  }

  getPostById(id: number): ITarjeta {
    return this.posts[id]
  }
}