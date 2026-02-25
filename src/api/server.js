import { createServer, Model } from 'miragejs';

createServer({
    models: {
        van: Model,
    },

    routes() {
        //  Obliga a que la llamada sea /api/vans
        this.namespace = "api" 

        //  Obtener todas las furgonetas (vans)
        this.get("/vans", (schema, request) => {
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
                description: "La Modest Explorer es una van diseñada para sacarte de casa y llevarte a la naturaleza. Esta belleza está equipada con paneles solares, un baño seco, un tanque de agua y una pequeña cocina. La idea es que puedas empacar tu hogar y escaparte un fin de semana o incluso por más tiempo.",
                imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
                type: "simple"
            })
        server.create(
            "van",
            {
                id: "2",
                name: "Beach Bum",
                price: 80,
                description: "Beach Bum es una van inspirada en surfistas y viajeros. Fue creada para ser un hogar portátil lejos de casa, pero con algunas características geniales que no encontrarás en una camper común.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
                type: "rugged"
            })
        server.create(
            "van",
            {
                id: "3",
                name: "Reliable Red",
                price: 100,
                description: "Reliable Red es una van hecha para viajar. El interior es cómodo y acogedor, con espacio suficiente para estirarte. Tiene una pequeña cocina, por si necesitas cocinar. Te sentirás como en casa desde el momento en que bajes de ella.",
                imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
                type: "luxury"
            })
        server.create(
            "van",
            {
                id: "4",
                name: "Dreamfinder",
                price: 65,
                description: "Dreamfinder es la van perfecta para viajar y vivir la experiencia. Con una altura interior de 2.1 m, puedes estar de pie sin problema y contar con excelente espacio para la cabeza. El piso es de plástico reforzado con fibra de vidrio (GRP), fácil de limpiar y muy resistente al desgaste. Una gran ventana trasera y amplias ventanas laterales hacen que el interior sea muy luminoso y esté bien ventilado.",
                imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
                type: "simple"
            })
        server.create(
            "van",
            {
                id: "5",
                name: "The Cruiser",
                price: 120,
                description: "The Cruiser es una van para quienes disfrutan viajar con comodidad y lujo. Con sus múltiples ventanas, interior espacioso y amplio espacio de almacenamiento, The Cruiser ofrece una vista hermosa dondequiera que vayas.",
                imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
                type: "luxury"
            })
        server.create(
            "van",
            {
                id: "6",
                name: "Green Wonder",
                price: 70,
                description: "Con esta van, puedes llevar tu vida de viaje al siguiente nivel. La Green Wonder es un vehículo sostenible, perfecto para quienes buscan un medio de transporte con estilo, ecológico y capaz de ir a cualquier lugar.",
                imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
                type: "rugged"
            })        
    },

})