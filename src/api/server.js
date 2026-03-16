import { createServer, Model } from 'miragejs';

createServer({
    models: {
        van: Model,
    },

    routes() {
        //  Obliga a que la llamada sea /api/vans
        this.namespace = "api"

        //  Obtener todas las furgonetas (vans)
        this.get("/vans", (schema) => {
            return schema.vans.all()  // miragejs pluraliza van
        })

        // Obtener una furgoneta por ID
        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    },

    seeds(server) {
        server.create(
            "van",
            {
                id: "1",
                name: "Modest Explorer",
                price: 60,
                description: "Restauración completa de mecánica y carrocería. Paneles solares, depósito de agua propia y baño seco: todo lo que necesitas para ser autónomo varios días sin depender de nada ni de nadie. Para quien sabe que la libertad no se mide en comodidades, sino en kilómetros sin planificar.",
                imageUrl: "https://images.unsplash.com/photo-1704205531900-89fb30d4f842?&w=400&h=400&fit=crop",
                imageCredits: "Foto de Hasse Lossius en Unsplash 'https://unsplash.com/es/fotos/una-furgoneta-aparcada-al-costado-de-una-carretera-cerca-del-oceano-82mzyAory0w'",
                type: "esencial",

                specs: [
                    { label: "Año de fabricación", value: "1974" },
                    { label: "Motor", value: "1.6L Gasolina, 50 CV" },
                    { label: "Consumo medio", value: "11 L/100km" },
                    { label: "Capacidad depósito", value: "50 Litros" },
                    { label: "Transmisión", value: "Manual, 4 velocidades" },
                    { label: "Plazas de viaje", value: "4" },
                    { label: "Plazas de noche", value: "2 (cama doble)" },
                    { label: "Equipamiento", value: "Paneles solares (100W), batería auxiliar, baño seco portátil, tanque de agua limpia (40L) con bomba manual, hornillo de gas portátil, fregadero manual, nevera de hielo." },
                    { label: "Dimensiones (L x An x Al)", value: "4.5m x 1.7m x 2.0m" },
                    { label: "Aire acondicionado", value: "No (ventanillas)" },
                    { label: "Extras", value: "Baca de techo, mesa de camping con sillas, cortinas opacas, menaje básico de cocina." },
                ],

                ratings: [
                    { id: 1, user: "Laura M.", date: "10/05/2024", score: 5, comment: "La Modest Explorer es genial para desconectar. Los paneles solares nos dieron autonomía y el baño seco fue muy útil. ¡Nos encantó la libertad que nos dio!" },
                    { id: 2, user: "Ricardo P.", date: "26/04/2024", score: 4, comment: "Una Combi clásica bien equipada. Ideal para un viaje más 'off-grid'. Es modesta, pero tiene todo lo esencial para estar cómodo en la naturaleza. El precio es muy bueno para lo que ofrece." },
                    { id: 3, user: "Beatriz N.", date: "16/04/2024", score: 5, comment: "¡Experiencia fantástica! La furgoneta es preciosa y el interior muy acogedor. Poder cocinar y tener agua propia en medio de la naturaleza fue un lujo. ¡Volveremos!" },
                ]
            }
        )
        server.create(
            "van",
            {
                id: "2",
                name: "Beach Bum",
                price: 80,
                description: "Baca de madera para las tablas, nevera de compresor, ducha exterior y parasol lateral. Construida para llegar a la playa, quedarse y no tener prisa en marcharse. Si tu ruta la decide el parte de olas, esta es tu furgoneta.",
                imageUrl: "https://images.unsplash.com/photo-1710707919147-bf41f37e5b00?&w=400&h=400&fit=crop",
                imageCredits: "Foto de Gene Giromini en Unsplash 'https://unsplash.com/es/fotos/una-furgoneta-azul-y-blanca-aparcada-al-costado-de-una-carretera-G11tjU3YlXY'",
                type: "viajera",
                specs: [
                    { label: "Año de fabricación", value: "1976" },
                    { label: "Motor", value: "1.6L Gasolina, 50 CV" },
                    { label: "Consumo medio", value: "11 L/100km" },
                    { label: "Capacidad depósito", value: "50 Litros" },
                    { label: "Transmisión", value: "Manual, 4 velocidades" },
                    { label: "Plazas de viaje", value: "4" },
                    { label: "Plazas de noche", value: "2 (cama desplegable)" },
                    { label: "Equipamiento", value: "Nevera de compresor, hornillo portátil de gas, fregadero manual con depósitos de agua, ducha exterior (bolsa de presión), radio con entrada auxiliar." },
                    { label: "Dimensiones (L x An x Al)", value: "4.5m x 1.7m x 2.0m" },
                    { label: "Aire acondicionado", value: "No (ventanillas y ventilador)" },
                    { label: "Extras", value: "Baca de madera para tablas de surf, mesa de camping con dos sillas, parasol lateral, menaje básico de cocina." },
                ],

                ratings: [
                    { id: 1, user: "Lucas M.", date: "12/05/2024", score: 5, comment: "¡La Beach Bum es el sueño de todo surfista! Perfecta para llevar mis tablas y tener una base cómoda en la playa. El color es espectacular y atrae todas las miradas." },
                    { id: 2, user: "Andrea G.", date: "29/04/2024", score: 4, comment: "Una van con mucho estilo y carácter. Ideal para un viaje relajado por la costa. No es la más rápida, pero eso es parte de su encanto. El interior es sorprendentemente funcional." },
                    { id: 3, user: "Fernando S.", date: "18/04/2024", score: 5, comment: "Alquilamos la Beach Bum para un festival de música y fue un acierto total. Espaciosa, cómoda y muy 'cool'. La recomiendo al 100% para quienes buscan una aventura diferente." },
                ]
            }
        )
        server.create(
            "van",
                {
                id: "3",
                name: "Reliable Red",
                price: 100,
                description: "Carrocería rojo granate restaurada sobre una base de 1972. Interior rehecho con criterio: cocina con dos fogones, nevera con congelador, calefacción estacionaria y sonido Bluetooth. Una de las piezas más completas y mejor acabadas de la flota.",
                imageUrl: "https://images.unsplash.com/photo-1639156813096-1c45dfef0000?&w=400&h=400&fit=crop",
                imageCredits: "Foto de Laura Boj en Unsplash 'https://unsplash.com/es/fotos/un-viejo-autobus-vw-estacionado-en-la-playa-hv2BX7Q6xUA'",
                type: "singular",

                specs: [
                    { label: "Año de fabricación", value: "1972 (Restaurada)" },
                    { label: "Motor", value: "2.0L Gasolina, 70 CV" },
                    { label: "Consumo medio", value: "10 L/100km" },
                    { label: "Capacidad depósito", value: "60 Litros" },
                    { label: "Transmisión", value: "Manual, 4 velocidades" },
                    { label: "Plazas de viaje", value: "4" },
                    { label: "Plazas de noche", value: "2 (cama doble)" },
                    { label: "Equipamiento", value: "Cocina con dos fogones a gas, nevera con congelador de 40L, fregadero con grifo eléctrico, ducha exterior, sistema de sonido con Bluetooth, calefacción estacionaria." },
                    { label: "Dimensiones (L x An x Al)", value: "4.5m x 1.7m x 2.0m" },
                    { label: "Aire acondicionado", value: "No (ventilación original y ventilador)" },
                    { label: "Extras", value: "Toldo lateral enrollable, mesa de camping con sillas, menaje de cocina premium, iluminación LED interior, inversor de corriente." },
                ],

                ratings: [
                    { id: 1, user: "Ana L.", date: "15/05/2024", score: 5, comment: "¡Absolutamente preciosa y muy cómoda! La Reliable Red es un sueño para viajar. El interior se siente lujoso y tiene todo lo que necesitas. Definitivamente una experiencia de cinco estrellas." },
                    { id: 2, user: "Pedro R.", date: "03/05/2024", score: 4, comment: "Un clásico restaurado a la perfección. Confortable y muy estilosa. El motor va muy suave. El único detalle es que el espacio de almacenamiento es un poco limitado si viajas con mucho equipaje." },
                    { id: 3, user: "Gemma F.", date: "20/04/2024", score: 5, comment: "Esta van tiene un encanto especial. Nos sentimos como en una película retro. La cocina es muy práctica y la cama super cómoda. ¡Volveríamos a alquilarla sin dudarlo!" },
                ]
            }
        )
        server.create(
            "van",
            {
                id: "5",
                name: "The Cruiser",
                price: 120,
                description: "La más espaciosa de la flota. Ventanas panorámicas, asientos giratorios, aire acondicionado, calefacción estacionaria y un inversor de 1500W. Modificada en profundidad para viajes largos con total autonomía. Para dos personas que quieren espacio de verdad.",
                imageUrl: "https://images.unsplash.com/photo-1731603273130-72aeb4f49b16?&w=400&h=400&fit=crop",
                imageCredits: "Foto de Antonio Araujo en Unsplash 'https://unsplash.com/es/fotos/una-furgoneta-aparcada-en-un-aparcamiento-junto-a-un-campo-de-girasoles-ct6TLXflTuk'",
                type: "singular",

                specs: [
                    { label: "Año de fabricación", value: "1990 (Modificada)" },
                    { label: "Motor", value: "2.5L Diésel, 90 CV" },
                    { label: "Consumo medio", value: "10 L/100km" },
                    { label: "Capacidad depósito", value: "70 Litros" },
                    { label: "Transmisión", value: "Manual, 5 velocidades" },
                    { label: "Plazas de viaje", value: "3" },
                    { label: "Plazas de noche", value: "2+1 (cama doble y cama individual convertible)" },
                    { label: "Equipamiento", value: "Cocina con 2 fogones a gas y fregadero, nevera de compresor de 60L, calefacción estacionaria, baño portátil con ducha y lavabo retráctil, inversor de 1500W." },
                    { label: "Dimensiones (L x An x Al)", value: "5.0m x 1.9m x 2.5m" },
                    { label: "Aire acondicionado", value: "Sí (cabina)" },
                    { label: "Extras", value: "Toldo lateral Fiamma, panel solar de 150W, sistema de sonido avanzado, mesa interior convertible, asientos giratorios." },
                ],

                ratings: [
                    { id: 1, user: "Julia S.", date: "18/05/2024", score: 5, comment: "La Cruiser es puro lujo en la carretera. Las ventanas panorámicas son increíbles y el espacio es muy confortable. ¡Ver los campos de girasoles desde aquí fue mágico!" },
                    { id: 2, user: "Marcos L.", date: "05/05/2024", score: 4, comment: "Excelente van para viajar con todas las comodidades. El motor es fiable y el interior está muy bien pensado. Un poco grande para algunos aparcamientos, pero el espacio extra lo compensa." },
                    { id: 3, user: "Elena T.", date: "22/04/2024", score: 5, comment: "Amamos esta van. El amplio espacio de almacenamiento y la cocina completa hicieron que nuestro viaje fuera súper fácil y agradable. Sin duda una experiencia de lujo." },
                ]
            }
        )
        server.create(
            "van",
            {
                id: "6",
                name: "Green Wonder",
                price: 70,
                description: "T3 Syncro 4x4 en estado excepcional. Tracción en las cuatro ruedas, neumáticos all-terrain y reductora para llegar donde las demás no llegan. Cocina completa, calefacción estacionaria y panel solar. Para rutas de montaña, pistas sin asfaltar y destinos que no salen en los mapas normales.",
                imageUrl: "https://images.unsplash.com/photo-1601285462028-111ed137177e?&w=400&h=400&fit=crop",
                imageCredits: "Foto de Daniel J. Schwarz en Unsplash 'https://unsplash.com/es/fotos/furgoneta-verde-y-blanca-en-la-carretera-cerca-de-la-montana-durante-el-dia-Hhe9c31780A'",
                type: "viajera",

                specs: [
                    { label: "Año de fabricación", value: "1988 (4x4 Syncro)" },
                    { label: "Motor", value: "1.9L Diésel, 70 CV" },
                    { label: "Consumo medio", value: "12 L/100km" },
                    { label: "Capacidad depósito", value: "60 Litros" },
                    { label: "Transmisión", value: "Manual, 5 velocidades con reductora" },
                    { label: "Plazas de viaje", value: "4" },
                    { label: "Plazas de noche", value: "2 (cama doble convertible)" },
                    { label: "Equipamiento", value: "Cocina con 2 fogones, nevera de compresión 40L, fregadero, calefacción estacionaria de gasoil, panel solar 100W, ducha exterior, depósito de agua limpia 50L." },
                    { label: "Dimensiones (L x An x Al)", value: "4.5m x 1.8m x 2.1m" },
                    { label: "Aire acondicionado", value: "No (ventilación original)" },
                    { label: "Extras", value: "Neumáticos all-terrain, baca de techo reforzada, equipo de rescate básico, sistema de sonido con USB, kit de herramientas, mapa de rutas off-road." },
                ],

                ratings: [
                    { id: 1, user: "Elena J.", date: "20/05/2024", score: 5, comment: "La Green Wonder es increíble. Nos llevó por caminos de montaña sin ningún problema y pudimos llegar a lugares espectaculares. ¡El diseño es precioso y el interior muy práctico!" },
                    { id: 2, user: "Pablo D.", date: "08/05/2024", score: 5, comment: "Una T3 Syncro en excelente estado. Perfecta para la aventura off-road sin renunciar a la comodidad. Sostenible y con mucho estilo. ¡Un 10!" },
                    { id: 3, user: "Sofía V.", date: "25/04/2024", score: 4, comment: "Ideal para la exploración. El motor es un poco lento en subidas pronunciadas, pero su capacidad 4x4 lo compensa con creces. Nos divertimos mucho y nos sentimos muy conectados con la naturaleza." },
                ]
            }
        )
        server.create(
            "van",
            {
                id: "7",
                name: "Sunset Wanderer",
                price: 75, // Assuming a price for a 'simple' type, you can adjust this
                description: "Techo elevable original, carrocería naranja restaurada. Lo esencial para dormir, cocinar y estar bien: toldo lateral, cocina de camping, nevera y ducha exterior. Compacta, fácil de conducir y fácil de aparcar. Para los que buscan el atardecer sin saber todavía desde dónde lo van a ver.",
                imageUrl: "https://images.unsplash.com/photo-1612769254949-deb42c1fbbf7?w=600&h=450&auto=format&fit=crop",
                imageCredits: "Foto de Joshua Rodriguez en Unsplash 'https://unsplash.com/es/fotos/furgoneta-roja-y-blanca-en-el-muelle-durante-el-dia-Upg453Fo7wU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'",
                type: "esencial",

                // --- Additional data for VanDetail sections (not part of the core van object in original server.js) ---
                // These sections (specs, ratings, socialImages) are new additions to the object,
                // as they don't conflict with the existing core 'van' properties.
                specs: [
                    { label: "Año de fabricación", value: "1978" },
                    { label: "Motor", value: "1.6L Gasolina, 50 CV" },
                    { label: "Consumo medio", value: "11 L/100km" },
                    { label: "Capacidad depósito", value: "50 Litros" },
                    { label: "Transmisión", value: "Manual, 4 velocidades" },
                    { label: "Plazas de viaje", value: "4" },
                    { label: "Plazas de noche", value: "2 (cama doble)" },
                    { label: "Equipamiento", value: "Cocina de camping portátil, nevera de hielo, fregadero manual, ducha exterior manual, ventilador de batería" },
                    { label: "Dimensiones (L x An x Al)", value: "4.3m x 1.7m x 2.0m (2.7m con techo elevado)" },
                    { label: "Aire acondicionado", value: "No (ventanillas)" },
                    { label: "Extras", value: "Toldo enrollable, mesa de camping pequeña, dos sillas plegables, menaje básico de cocina." },
                ],

                ratings: [
                    { id: 1, user: "Sofía M.", date: "10/04/2024", score: 5, comment: "¡La Sunset Wanderer es una pasada! Perfecta para nuestra escapada romántica por la costa. El techo elevable le da un toque muy especial y las vistas desde la cama son impresionantes." },
                    { id: 2, user: "Daniel G.", date: "25/03/2024", score: 4, comment: "Alquilamos esta Combi para una semana en el Algarve. Es básica, pero eso es precisamente su encanto. Muy fácil de conducir y cómoda. El único 'pero' es que el espacio es justo para guardar todas las cosas." },
                    { id: 3, user: "Laura V.", date: "15/03/2024", score: 5, comment: "La mejor experiencia de mi vida. La furgoneta tiene alma, y el servicio de Vantastic! fue impecable. ¡Ya estoy pensando en el próximo viaje con ella!" },
                ]
            })
        server.create(
            "van",
            {
                id: "8",
                name: "Ocean Breeze",
                price: 80,
                description: "Azul y blanca, 1975. Restauración de mecánica completa. Equipamiento sencillo y bien resuelto: nevera de compresor, hornillo de gas, ducha exterior portátil y toldo lateral. Para dos personas, costa atlántica y ningún plan fijo.",
                imageUrl: "https://images.unsplash.com/photo-1533745894801-062ca8abd594?q=80&w=600&w=400&auto=format&fit=crop",
                imageCredits: "Foto de Collins Lesulie en Unsplash 'https://unsplash.com/es/fotos/furgoneta-volkswagen-t2-azul-hMwtHGvDh2k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'",
                type: "esencial",

                specs: [
                    { label: "Año de fabricación", value: "1975" },
                    { label: "Motor", value: "1.6L Gasolina, 50 CV" },
                    { label: "Consumo medio", value: "12 L/100km" },
                    { label: "Capacidad depósito", value: "45 Litros" },
                    { label: "Transmisión", value: "Manual, 4 velocidades" },
                    { label: "Plazas de viaje", value: "4" },
                    { label: "Plazas de noche", value: "2 (cama desplegable)" },
                    { label: "Equipamiento", value: "Pequeña nevera de compresor, hornillo de gas portátil, fregadero manual con depósito de agua, radio con conexión Bluetooth." },
                    { label: "Dimensiones (L x An x Al)", value: "4.5m x 1.7m x 2.1m" },
                    { label: "Aire acondicionado", value: "No (ventilador y ventanillas)" },
                    { label: "Extras", value: "Toldo lateral, mesa exterior plegable, dos sillas de playa, ducha exterior portátil, menaje de cocina básico." },
                ],

                ratings: [
                    { id: 1, user: "Elena P.", date: "01/05/2024", score: 5, comment: "¡Experiencia inolvidable con la Ocean Breeze! La furgo es preciosa y nos llevó sin problemas por toda la costa. El equipamiento es sencillo pero suficiente para unos días de aventura." },
                    { id: 2, user: "Juan C.", date: "18/04/2024", score: 4, comment: "Un clásico con mucho encanto. Es una Combi, así que no esperes velocidades de crucero, pero para disfrutar del paisaje es perfecta. Muy cómoda para dos personas." },
                    { id: 3, user: "Marta R.", date: "05/04/2024", score: 5, comment: "¡Me enamoré de esta van! La atención de Vantastic! fue excelente y la furgoneta estaba impecable. Los atardeceres desde el interior son magia pura." },
                ]
            }
        )
        server.create(
            "van",
            {
                id: "9",
                name: "Cliff Explorer",
                price: 150,
                description: "Camper sobre base 4x4, motor diésel de 200 CV con transmisión automática. Baño completo con ducha y WC, cocina entera, calefacción diésel, panel solar de 200W y aire acondicionado en cabina y habitáculo. La única de la flota preparada para terrenos exigentes con autonomía total. Para rutas donde el asfalto termina antes que las ganas de seguir.",
                imageUrl: "https://images.unsplash.com/photo-1574260031597-bcd9eb192b4f?q=80&w=600&h=450&fit=crop",
                imageCredits: "Foto de Toms en Unsplash 'https://unsplash.com/es/fotos/remolque-camper-en-un-acantilado-cerca-del-mar-ryfptJi3fAM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'",
                type: "viajera",

                specs: [
                    { label: "Año de fabricación", value: "2020" },
                    { label: "Motor", value: "3.0L Diésel, 200 CV, 4x4" },
                    { label: "Consumo medio", value: "14 L/100km" },
                    { label: "Capacidad depósito", value: "80 Litros" },
                    { label: "Transmisión", value: "Automática, 8 velocidades" },
                    { label: "Plazas de viaje", value: "2" },
                    { label: "Plazas de noche", value: "2 (cama fija)" },
                    { label: "Equipamiento", value: "Cocina completa (2 fogones, nevera/congelador, fregadero), calefacción diésel, baño con ducha y WC químico, panel solar 200W, depósito de agua limpia 80L, depósito de aguas grises 40L." },
                    { label: "Dimensiones (L x An x Al)", value: "5.5m x 2.0m x 2.8m" },
                    { label: "Aire acondicionado", value: "Sí (de cabina y habitáculo)" },
                    { label: "Extras", value: "Baca reforzada para equipo, toldo lateral eléctrico, inversor de corriente 2000W, sistema de sonido premium, navegador GPS con mapas offline." },
                ],

                ratings: [
                    { id: 1, user: "Roberto S.", date: "28/04/2024", score: 5, comment: "¡Impresionante! La Cliff Explorer es una bestia. Subimos por caminos que jamás pensé que una camper pudiera manejar. El lujo y la comodidad dentro son increíbles después de un día de exploración." },
                    { id: 2, user: "Carla B.", date: "12/04/2024", score: 5, comment: "Nos llevó a lugares espectaculares con total seguridad. Los kayaks en el techo fueron un plus. Perfecta para quienes buscan aventura de verdad sin renunciar a las comodidades." },
                    { id: 3, user: "Miguel Á.", date: "02/04/2024", score: 4, comment: "Una maravilla de ingeniería. El consumo es algo elevado, como era de esperar en un 4x4 tan potente, pero lo compensa con creces por su capacidad off-road y el equipamiento de lujo. Muy recomendable." },
                ]
            }
        )
        server.create(
            "van",
            {
                id: "10",
                name: "Orange Dream",
                price: 90,
                description: "Naranja y blanca, techo elevable a juego. Interior bien conservado con cocina, nevera de compresión 12V y toldo de vela. Tiene carácter propio desde que la ves aparcada. Para quienes buscan la experiencia más clásica de la flota sin complicaciones.",
                imageUrl: "https://images.unsplash.com/photo-1561394562-5b83fb870f71?q=80&w=600&h=450&auto=format&fit=crop",
                imageCredits: "Foto de Amin Safaripour en Unsplash 'https://unsplash.com/es/fotos/furgoneta-naranja-y-blanca-durante-el-dia-rqE54VnH4hA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'",
                type: "esencial",

                specs: [
                    { label: "Año de fabricación", value: "1977" },
                    { label: "Motor", value: "1.6L Gasolina, 50 CV" },
                    { label: "Consumo medio", value: "11 L/100km" },
                    { label: "Capacidad depósito", value: "50 Litros" },
                    { label: "Transmisión", value: "Manual, 4 velocidades" },
                    { label: "Plazas de viaje", value: "4" },
                    { label: "Plazas de noche", value: "2+1 (cama doble y litera opcional)" },
                    { label: "Equipamiento", value: "Cocina de camping (1 fogón), nevera de compresión 12V, fregadero con bomba manual, armario de almacenamiento." },
                    { label: "Dimensiones (L x An x Al)", value: "4.5m x 1.7m x 2.1m (2.6m con techo elevado)" },
                    { label: "Aire acondicionado", value: "No (ventilación natural)" },
                    { label: "Extras", value: "Toldo de vela, mesa interior plegable, cortinas opacas, menaje de cocina completo." },
                ],

                ratings: [
                    { id: 1, user: "Pablo G.", date: "08/05/2024", score: 5, comment: "La Orange Dream es un encanto. Pasamos una semana genial en la costa y fue el centro de atención. El techo elevable da mucho espacio. ¡Muy recomendable!" },
                    { id: 2, user: "Sofía H.", date: "20/04/2024", score: 4, comment: "Una Combi clásica con todo el estilo. Para viajar sin prisas y disfrutar del camino. El espacio es acogedor y funcional. Le doy un 4 solo porque el motor es un poco ruidoso en subidas." },
                    { id: 3, user: "Carlos V.", date: "10/04/2024", score: 5, comment: "¡Pura nostalgia y aventura! La furgo está muy bien cuidada y la experiencia fue fantástica. Volveremos a alquilar con Vantastic! sin duda." },
                ]
            }
        )

    },

})
