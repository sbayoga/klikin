import {Component} from "@angular/core";

import {HttpService} from "./_services/http.srv";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent {

  public data: Array<object> = [];
  constructor(private http: HttpService) {
    this.getAreasInformation();
    this.data = [{
      "_id": "5947f753dfd83900018fa9f3",
      "address": {
        "zip": 8110,
        "city": "MONTCADA I REIXAC",
        "country": "España",
        "street": "Pol. Ind. Pla d’en Coll - Carrer del Mig, 19"
      },
      "contact": {
        "phone": "+34 93 575 11 53",
        "email": "info@leoboeck.com",
        "web": "http://www.leoboeck.com/"
      },
      "location": [
        2.18650290000005,
        41.4957314
      ],
      "name": "Fábrica Leo Boeck Profesionales",
      "openingHours": "9:00 a 17:00",
      "category": "SHOPPING",
      "description": "Fuimos los primeros en introducir los típicos frankfurts en Cataluña.\nLos perritos calientes, bratwurst, hamburguesas, ... que todos conocemos, tienen un origen claro en nuestro país, y vienen de la mano de la marca Leo Boeck.",
      "shortDescription": "Fábrica de embutidos, Frankfurts, Hamburguesas y Butifarras.",
      "social": {
        "facebook": "https://www.facebook.com/EmbotitsLeoBoeck/"
      },
      "logo": {
        "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8a7d40ae-420f-4cd9-91c6-db5ede1c76c9/original",
        "format": "image/png",
        "thumbnails": {
          "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8a7d40ae-420f-4cd9-91c6-db5ede1c76c9/large",
          "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8a7d40ae-420f-4cd9-91c6-db5ede1c76c9/medium",
          "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8a7d40ae-420f-4cd9-91c6-db5ede1c76c9/small"
        }
      },
      "features": [],
      "photos": [
        {
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/13693284-5f58-43ef-856b-8cb0af54f20c/original",
          "format": "image/png",
          "_id": "57e00507e0566c0100d32763",
          "thumbnails": {
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/13693284-5f58-43ef-856b-8cb0af54f20c/large",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/13693284-5f58-43ef-856b-8cb0af54f20c/medium",
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/13693284-5f58-43ef-856b-8cb0af54f20c/small"
          }
        }
      ]
    }

      ,
      {
        "_id": "59479e6bd3188a00012ad5eb",
        "address": {
          "street": "Avenida Peñiscola, 53",
          "country": "España",
          "city": "Peñiscola",
          "zip": "12598"
        },
        "contact": {
          "email": "lagolosonas@gmail.com",
          "phone": "964480097"
        },
        "location": [
          0.414536699999985,
          40.3994789
        ],
        "name": "La Golosona",
        "openingHours": ".",
        "category": "FOOD",
        "shortDescription": "En La Golosona podrás disfrutar de ricas pizzas y helados de elaboración propia.",
        "description": "En La Golosona podrás disfrutar de ricas pizzas y helados de elaboración propia.  No lo dudes y pásate a probarlo todo!!",
        "features": [
          "BAR",
          "TERRACE",
          "CREDIT_CARD"
        ],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2e54037f-88ed-412d-bc5a-1424f1d5a3af/original",
            "format": "image/jpeg",
            "_id": "594a4f5bdfd83900018fa9fc",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2e54037f-88ed-412d-bc5a-1424f1d5a3af/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2e54037f-88ed-412d-bc5a-1424f1d5a3af/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2e54037f-88ed-412d-bc5a-1424f1d5a3af/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/4262ef53-61b6-4889-ae7a-0f36ccc91fa3/original",
            "format": "image/jpeg",
            "_id": "594a4f5fdfd83900018fa9fd",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/4262ef53-61b6-4889-ae7a-0f36ccc91fa3/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/4262ef53-61b6-4889-ae7a-0f36ccc91fa3/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/4262ef53-61b6-4889-ae7a-0f36ccc91fa3/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/021773ff-56d6-42ee-966a-238d6ca5a861/original",
            "format": "image/jpeg",
            "_id": "594a4f63b9e503000179c19d",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/021773ff-56d6-42ee-966a-238d6ca5a861/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/021773ff-56d6-42ee-966a-238d6ca5a861/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/021773ff-56d6-42ee-966a-238d6ca5a861/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/536dbf10-e33e-47a0-85ce-28888a1ee3d8/original",
            "format": "image/jpeg",
            "_id": "594a4f67b9e503000179c19e",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/536dbf10-e33e-47a0-85ce-28888a1ee3d8/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/536dbf10-e33e-47a0-85ce-28888a1ee3d8/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/536dbf10-e33e-47a0-85ce-28888a1ee3d8/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/75136938-7313-45c4-87af-800067a3d589/original",
            "format": "image/jpeg",
            "_id": "594a4f6bdfd83900018fa9fe",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/75136938-7313-45c4-87af-800067a3d589/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/75136938-7313-45c4-87af-800067a3d589/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/75136938-7313-45c4-87af-800067a3d589/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/01b29b9a-2ca7-400d-b190-4c148e1cba67/original",
            "format": "image/jpeg",
            "_id": "594a4f7edfd83900018fa9ff",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/01b29b9a-2ca7-400d-b190-4c148e1cba67/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/01b29b9a-2ca7-400d-b190-4c148e1cba67/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/01b29b9a-2ca7-400d-b190-4c148e1cba67/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ba968399-fab7-4df7-8152-2dc2aa757d84/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ba968399-fab7-4df7-8152-2dc2aa757d84/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ba968399-fab7-4df7-8152-2dc2aa757d84/large"
          },
          "format": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ba968399-fab7-4df7-8152-2dc2aa757d84/original"
        }
      }

      ,
      {
        "_id": "5943abdddfd83900018fa9ee",
        "address": {
          "street": "Calle Veronica, 6",
          "country": "España",
          "zip": 28232,
          "city": "Las Rozas (Madrid)"
        },
        "contact": {
          "email": "info@balearlasrozas.es",
          "phone": "916 31 62 61"
        },
        "social": {
          "facebook": "https://www.facebook.com/balearlasrozas/"
        },
        "location": [
          -3.92573440000001,
          40.5180027
        ],
        "name": "Balear Tapas & Take Away",
        "openingHours": "Todos los días de 11:00 a 0:30\nMARTES CERRADO",
        "category": "FOOD",
        "shortDescription": "Comida mediterránea de calidad a un precio justo.",
        "description": "Especialidad en la elaboración de comida para llevar, principalmente arroces y paellas, aunque sus locales también cuentan con espacio para tomar in situ todos sus platos. \n\nSiempre con el objetivo de ofrecer comida de calidad a un precio justo y razonable. Para ello, además de tener una amplia carta de arroces, raciones, hamburguesas y bebida, cuentan con una oferta gastronómica que incluye tapas, tostas y raciones",
        "features": [],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/6d288ea3-15ed-465e-9f38-96d4386b30b9/original",
            "format": "image/jpeg",
            "_id": "5943abdfdfd83900018fa9ef",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/6d288ea3-15ed-465e-9f38-96d4386b30b9/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/6d288ea3-15ed-465e-9f38-96d4386b30b9/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/6d288ea3-15ed-465e-9f38-96d4386b30b9/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/153199ac-a16c-4e10-b525-1de9a48de346/original",
            "format": "image/jpeg",
            "_id": "5943abdfdfd83900018fa9f0",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/153199ac-a16c-4e10-b525-1de9a48de346/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/153199ac-a16c-4e10-b525-1de9a48de346/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/153199ac-a16c-4e10-b525-1de9a48de346/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ab79e571-0340-4def-b6ff-9aafbdf7a5b9/original",
            "format": "image/png",
            "_id": "5943abdfb9e503000179c195",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ab79e571-0340-4def-b6ff-9aafbdf7a5b9/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ab79e571-0340-4def-b6ff-9aafbdf7a5b9/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ab79e571-0340-4def-b6ff-9aafbdf7a5b9/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a49ca2ce-eb48-4ee9-85e5-4814cc8085a4/original",
            "format": "image/png",
            "_id": "5943abdfd3188a00012ad5e7",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a49ca2ce-eb48-4ee9-85e5-4814cc8085a4/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a49ca2ce-eb48-4ee9-85e5-4814cc8085a4/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a49ca2ce-eb48-4ee9-85e5-4814cc8085a4/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/eced2b3c-6b77-4e25-9204-49d716174cd2/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/eced2b3c-6b77-4e25-9204-49d716174cd2/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/eced2b3c-6b77-4e25-9204-49d716174cd2/large"
          },
          "format": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/eced2b3c-6b77-4e25-9204-49d716174cd2/original"
        },
        "startDate": "2017-06-19T22:00:00.000Z"
      }

      ,
      {
        "_id": "5942bdd2b9e503000179c193",
        "address": {
          "street": "Paseo de la Castellana, 259",
          "country": "España",
          "city": "Madrid",
          "zip": 28046
        },
        "contact": {
          "email": "info@torrespacio.com",
          "phone": "91 427 68 75"
        },
        "location": [
          -3.68749849999995,
          40.4782475
        ],
        "name": "Torrespacio",
        "openingHours": "Ahorra tiempo y no hagas colas con la app de Espacio 2: \n1. Abre tu app, elige la configuración de tu almuerzo en PEDIDOS y págalo por adelantado. \n2. Recoge tu almuerzo como habitualmente en nuestro restaurante. \n3. Muestra la confirmación de pago con tu app. (Mi actividad/Pedidos/Antiguos).",
        "category": "FOOD",
        "shortDescription": "Torrespacio",
        "description": "Torrespacio",
        "features": [
          "AIR_CONDITIONED",
          "BAR",
          "WIFI",
          "CREDIT_CARD",
          "DISABLED_ACCESS"
        ],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/5c4cc9f0-577b-49cf-9095-329f0c221211/original",
            "format": "image/jpeg",
            "_id": "5943c749b9e503000179c196",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/5c4cc9f0-577b-49cf-9095-329f0c221211/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/5c4cc9f0-577b-49cf-9095-329f0c221211/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/5c4cc9f0-577b-49cf-9095-329f0c221211/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3e784b31-a214-4423-af86-4f51625e7024/original",
            "format": "image/jpeg",
            "_id": "5943c753d3188a00012ad5e8",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3e784b31-a214-4423-af86-4f51625e7024/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3e784b31-a214-4423-af86-4f51625e7024/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3e784b31-a214-4423-af86-4f51625e7024/small"
            }
          }
        ],
        "social": {},
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7b332e5c-caf9-4a63-9a33-c0167efa8cd3/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7b332e5c-caf9-4a63-9a33-c0167efa8cd3/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7b332e5c-caf9-4a63-9a33-c0167efa8cd3/large"
          },
          "format": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7b332e5c-caf9-4a63-9a33-c0167efa8cd3/original"
        },
        "accountManager": {
          "email": "marta.castellanos@klikin.com",
          "name": "Marta Castellanos"
        }
      }

      ,
      {
        "_id": "59429d29d3188a00012ad5e4",
        "address": {
          "street": "Cl. 15 #41, 23",
          "country": "Colombia",
          "city": "Villavicencio",
          "zip": "4123"
        },
        "contact": {
          "phone": "(0057)3118992889",
          "email": "admin@mivillavo.com"
        },
        "location": [
          -73.6403933,
          4.1351611
        ],
        "name": "Plancha & Parrilla",
        "openingHours": ".",
        "category": "FOOD",
        "shortDescription": ".",
        "description": ".",
        "features": [
          "BAR"
        ],
        "photos": [],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/82a7fed1-8376-4699-99c2-d8846a541a85/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/82a7fed1-8376-4699-99c2-d8846a541a85/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/82a7fed1-8376-4699-99c2-d8846a541a85/large"
          },
          "format": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/82a7fed1-8376-4699-99c2-d8846a541a85/original"
        }
      }

      ,
      {
        "_id": "5942780adfd83900018fa9e9",
        "address": {
          "street": "Calle Monforte de Lemos, 36",
          "country": "España",
          "city": "Madrid",
          "zip": 28029
        },
        "contact": {
          "web": "https://www.migasdeli.com/",
          "email": "angel@migasdeli.com",
          "phone": "910000000"
        },
        "location": [
          -3.70668230000001,
          40.4794733
        ],
        "name": "Miga's",
        "openingHours": "Lunes a Domingo de 10 a 22 horas.",
        "category": "FOOD",
        "shortDescription": "En  Miga's podrás disfrutar de nuestras deliciosas creps, dulces o saladas.",
        "description": "En  Miga's podrás disfrutar de nuestras deliciosas creps, dulces o saladas.\n\nNo lo dudes ni un momento y ven a Miga's a probar los más exquisitos sabores del mundo.",
        "features": [
          "AIR_CONDITIONED",
          "CREDIT_CARD",
          "CATERING"
        ],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e2538901-dd9b-47e4-b406-918023ef99bc/original",
            "format": "image/png",
            "_id": "5942780bd3188a00012ad5e1",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e2538901-dd9b-47e4-b406-918023ef99bc/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e2538901-dd9b-47e4-b406-918023ef99bc/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e2538901-dd9b-47e4-b406-918023ef99bc/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b23001d2-81e1-47ea-8779-34322450a043/original",
            "format": "image/png",
            "_id": "5942780cdfd83900018fa9ea",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b23001d2-81e1-47ea-8779-34322450a043/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b23001d2-81e1-47ea-8779-34322450a043/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b23001d2-81e1-47ea-8779-34322450a043/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/0cfe9cf7-d6dc-42e3-b3bf-1f745aaef62a/original",
            "format": "image/png",
            "_id": "5942780cb9e503000179c190",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/0cfe9cf7-d6dc-42e3-b3bf-1f745aaef62a/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/0cfe9cf7-d6dc-42e3-b3bf-1f745aaef62a/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/0cfe9cf7-d6dc-42e3-b3bf-1f745aaef62a/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/30d3062c-b67e-4d8b-8717-246ee7f36ac1/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/30d3062c-b67e-4d8b-8717-246ee7f36ac1/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/30d3062c-b67e-4d8b-8717-246ee7f36ac1/large"
          },
          "format": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/30d3062c-b67e-4d8b-8717-246ee7f36ac1/original"
        },
        "social": {}
      }

      ,
      {
        "_id": "59414561b9e503000179c18e",
        "address": {
          "street": "Calle Hospital de San José, 71",
          "country": "España",
          "city": "Getafe",
          "zip": 28901
        },
        "contact": {
          "email": "info@ladepilaciondelfuturo.es",
          "phone": "916811974"
        },
        "location": [
          -3.72599519999994,
          40.3052786
        ],
        "name": "La depilación del futuro",
        "openingHours": "Lunes a Sábado: 10:00 a 20:00",
        "category": "BEAUTY",
        "features": [
          "AIR_CONDITIONED",
          "WIFI",
          "CREDIT_CARD"
        ],
        "photos": [],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/64a48812-2360-4d27-ae86-c899d856c370/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/64a48812-2360-4d27-ae86-c899d856c370/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/64a48812-2360-4d27-ae86-c899d856c370/large"
          },
          "format": "image/jpeg",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/64a48812-2360-4d27-ae86-c899d856c370/original"
        },
        "social": {}
      }

      ,
      {
        "_id": "594109d0b9e503000179c189",
        "address": {
          "street": "Mestre Joan Corrales, 102",
          "country": "España",
          "city": "Esplugues de Llobregat",
          "zip": "08950"
        },
        "contact": {
          "web": "http://www.tuapetito.com/tuweb/#",
          "email": "info@tuapetito.com",
          "phone": "933 147 678"
        },
        "location": [
          2.08817620000002,
          41.3704926
        ],
        "name": "Tu Apetito",
        "category": "FOOD",
        "openingHours": ".",
        "shortDescription": "Tu apetito trabaja con el objetivo diario de ofrecer una propuesta gastronómica de calidad, equilibrada y creativa con rotación permanente de platos",
        "description": "La calidad de nuestros platos sólo es posible gracias al trabajo minucioso en la selección de los mejores ingredientes que combinados crean una comida diferente. Con nuestros menús podrás elegir entre ocho opciones diarias de primeros y segundos platos. Te damos la posibilidad de agregar, al menú que escojas: la bebida, pan y cubiertos.\nTe llevamos a tu trabajo los sabores de nuestro país y del mundo a un precio asequible",
        "features": [],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a8d1d72d-7043-46d4-888b-f52658c769b0/original",
            "format": "image/png",
            "_id": "594109d2dfd83900018fa9e5",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a8d1d72d-7043-46d4-888b-f52658c769b0/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a8d1d72d-7043-46d4-888b-f52658c769b0/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a8d1d72d-7043-46d4-888b-f52658c769b0/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f5524da5-3c7b-4056-b984-e5d7f192a5c9/original",
            "format": "image/png",
            "_id": "594109d2dfd83900018fa9e6",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f5524da5-3c7b-4056-b984-e5d7f192a5c9/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f5524da5-3c7b-4056-b984-e5d7f192a5c9/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f5524da5-3c7b-4056-b984-e5d7f192a5c9/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/40127211-8bed-4b6a-b746-54224b2aadfe/original",
            "format": "image/png",
            "_id": "594109d2b9e503000179c18a",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/40127211-8bed-4b6a-b746-54224b2aadfe/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/40127211-8bed-4b6a-b746-54224b2aadfe/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/40127211-8bed-4b6a-b746-54224b2aadfe/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/68bcc397-d16c-45b0-a2d9-6156edcfa248/original",
            "format": "image/png",
            "_id": "594109d2b9e503000179c18b",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/68bcc397-d16c-45b0-a2d9-6156edcfa248/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/68bcc397-d16c-45b0-a2d9-6156edcfa248/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/68bcc397-d16c-45b0-a2d9-6156edcfa248/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/d1cc526d-5dd8-4cfb-aecb-b8e813208509/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/d1cc526d-5dd8-4cfb-aecb-b8e813208509/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/d1cc526d-5dd8-4cfb-aecb-b8e813208509/large"
          },
          "format": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/d1cc526d-5dd8-4cfb-aecb-b8e813208509/original"
        }
      }

      ,
      {
        "_id": "593fb69bdfd83900018fa9e1",
        "address": {
          "street": "PG Casas Novas, 4",
          "country": "España",
          "city": "Infesta - BETANZOS",
          "zip": 15319
        },
        "contact": {
          "web": "http://www.cibaria.net",
          "email": "info@cibaria.net",
          "phone": "902 367 710"
        },
        "social": {
          "facebook": "https://www.facebook.com/CibariaFastgood/"
        },
        "location": [
          -8.22558000000004,
          43.2683601
        ],
        "name": "CIBARIA OBRADOR FFM",
        "openingHours": "De Lunes a Viernes, entre 12 y 14:30 horas, suministramos a nuestros clientes, CIBARIA Food For Me, una amplía gama de alimentos de calidad:\n     #Buffet a tuGusto.\n     #Sandwiches, Supremos y Bocadillos.\n     #Menú Diario\n     #Platos Veganos y Sin Gluten.\n     #Zumos 100% naturales con propiedades Detox y Antiox.",
        "category": "FOOD",
        "shortDescription": ".",
        "description": ".",
        "features": [
          "CATERING"
        ],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/5f59ce2b-d523-4236-b32c-f047afe522f6/original",
            "format": "image/jpeg",
            "_id": "593fb69cdfd83900018fa9e2",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/5f59ce2b-d523-4236-b32c-f047afe522f6/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/5f59ce2b-d523-4236-b32c-f047afe522f6/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/5f59ce2b-d523-4236-b32c-f047afe522f6/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/021fc234-a80a-4e8a-a6d4-dd076afec7e4/original",
            "format": "image/jpeg",
            "_id": "593fb69cdfd83900018fa9e3",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/021fc234-a80a-4e8a-a6d4-dd076afec7e4/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/021fc234-a80a-4e8a-a6d4-dd076afec7e4/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/021fc234-a80a-4e8a-a6d4-dd076afec7e4/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e3859d9e-6f32-45c9-bb52-3e06ebc0d510/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e3859d9e-6f32-45c9-bb52-3e06ebc0d510/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e3859d9e-6f32-45c9-bb52-3e06ebc0d510/large"
          },
          "format": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e3859d9e-6f32-45c9-bb52-3e06ebc0d510/original"
        },
        "startDate": "2017-06-13T22:00:00.000Z"
      }

      ,
      {
        "_id": "593f995ad3188a00012ad5de",
        "address": {
          "street": "Parque de San Diego, 0",
          "country": "España",
          "city": "A coruña",
          "zip": 15006
        },
        "contact": {
          "web": "http://www.cibaria.net",
          "email": "info@cibaria.net",
          "phone": "881 068 486"
        },
        "social": {
          "facebook": "https://www.facebook.com/CibariaFastgood/"
        },
        "location": [
          -8.38988810000001,
          43.354093
        ],
        "name": "CIBARIA OBRADOR 1.0 San Diego (A Coruña)",
        "openingHours": ".",
        "category": "FOOD",
        "shortDescription": "En los Obradores de Cibaria elaboramos comida bajo estándares de Calidad Certificada",
        "description": "En los Obradores de Cibaria elaboramos comida bajo estándares de Calidad Certificada, procedimentada en Manuales de Gestión, para responder a las necesidades y gustos de nuestros clientes en pro de una alimentación saludable y rápida\n\nTécnicos en Nutrición y Tecnología de los alimentos son los encargados de la validación de los menús, los métodos de elaboración y sus auditorías de cumplimiento.\n\nComo medios de cocción utilizamos, el vapor, el papillote, el baño maría, el vacío y el hervido. Reducimos al mínimo el aporte de grasas en nuestros elaborados y evitamos la cocción en  medio graso.",
        "features": [
          "PARKING",
          "BAR",
          "WIFI",
          "TERRACE",
          "DISABLED_ACCESS",
          "CATERING",
          "PRIVATIZABLE"
        ],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a483e39b-49be-4516-9070-d3e066accf48/original",
            "format": "image/jpeg",
            "_id": "593f995bb9e503000179c184",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a483e39b-49be-4516-9070-d3e066accf48/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a483e39b-49be-4516-9070-d3e066accf48/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a483e39b-49be-4516-9070-d3e066accf48/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/11a69ca3-7d91-4aa9-8ac4-dd6392a7641e/original",
            "format": "image/jpeg",
            "_id": "593f995bdfd83900018fa9de",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/11a69ca3-7d91-4aa9-8ac4-dd6392a7641e/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/11a69ca3-7d91-4aa9-8ac4-dd6392a7641e/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/11a69ca3-7d91-4aa9-8ac4-dd6392a7641e/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/61e21174-1129-4e0f-bd6e-e4d8bfc34b7e/original",
            "format": "image/jpeg",
            "_id": "593f995bd3188a00012ad5df",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/61e21174-1129-4e0f-bd6e-e4d8bfc34b7e/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/61e21174-1129-4e0f-bd6e-e4d8bfc34b7e/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/61e21174-1129-4e0f-bd6e-e4d8bfc34b7e/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8427ffb2-8734-4c1b-95fa-fea109d1b920/original",
            "format": "image/png",
            "_id": "593f995cb9e503000179c185",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8427ffb2-8734-4c1b-95fa-fea109d1b920/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8427ffb2-8734-4c1b-95fa-fea109d1b920/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8427ffb2-8734-4c1b-95fa-fea109d1b920/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2f25f3c3-76cb-4e35-8c70-212d92b7819a/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2f25f3c3-76cb-4e35-8c70-212d92b7819a/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2f25f3c3-76cb-4e35-8c70-212d92b7819a/large"
          },
          "format": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2f25f3c3-76cb-4e35-8c70-212d92b7819a/original"
        },
        "startDate": "2017-06-12T22:00:00.000Z",
        "salesPerson": {
          "email": "anabela.cibaria@gmail.com",
          "name": "Anabela de Miguel"
        },
        "accountManager": {
          "email": "anabela.cibaria@gmail.com",
          "name": "Anabela de Miguel"
        }
      }

      ,
      {
        "_id": "593ae70ed3188a00012ad5d1",
        "address": {
          "street": "Calle 134 11, 80",
          "country": "Colombia",
          "zip": 11,
          "city": "Bogota"
        },
        "contact": {
          "phone": "7729409",
          "email": "carlosandresvargas1981@gmail.com"
        },
        "location": [
          -74.0378006,
          4.7142704
        ],
        "name": "Cúrcuma",
        "openingHours": "HORARIO",
        "category": "FOOD",
        "shortDescription": "CURCUMA",
        "description": "CURCUMA HEALTHY SNACKS",
        "features": [],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/da346f12-6c88-4e5d-8ac5-497bd0c3eb9e/original",
            "format": "image/jpeg",
            "_id": "593ae710b9e503000179c17b",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/da346f12-6c88-4e5d-8ac5-497bd0c3eb9e/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/da346f12-6c88-4e5d-8ac5-497bd0c3eb9e/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/da346f12-6c88-4e5d-8ac5-497bd0c3eb9e/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e12e2bbd-2679-405f-b8a9-f33cf57bdcfb/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e12e2bbd-2679-405f-b8a9-f33cf57bdcfb/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e12e2bbd-2679-405f-b8a9-f33cf57bdcfb/large"
          },
          "format": "image/jpeg",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e12e2bbd-2679-405f-b8a9-f33cf57bdcfb/original"
        },
        "social": {},
        "startDate": "2017-06-15T22:00:00.000Z"
      }

      ,
      {
        "_id": "59390f39b9e503000179c177",
        "address": {
          "street": "FORTALEZA, 24",
          "country": "España",
          "city": "REQUENA",
          "zip": 46340
        },
        "contact": {
          "web": "http://restauranteloscubillos.com/",
          "email": "info@restauranteloscubillos.com",
          "phone": "961489606"
        },
        "social": {
          "instagram": "https://www.instagram.com/loscubillosrest",
          "facebook": "https://www.facebook.com/restauranteloscubillos"
        },
        "location": [
          -1.09995760000004,
          39.4871117
        ],
        "name": "Los Cubillos",
        "openingHours": "Lunes: CERRADO\nMartes a Jueves : 10:00 - 16:30\nViernes y Sábado:  10:00 - 16:30 / 20:30 - 1:00\nDomingo: 10:00 - 16:30",
        "category": "FOOD",
        "description": "\"LA PERFECTA FUSIÓN ENTRE HISTORIA Y GASTRONOMÍA EN UNA CUEVA DEL SIGLO XV\"\n Restaurante gastrobar de cocina fusión tradicional de la comarca Utiel-Requena regados con los vinos de las bodegas de la comarca especialmente de Bobal.",
        "features": [
          "AIR_CONDITIONED",
          "BAR",
          "WINE_BAR",
          "WIFI",
          "TERRACE",
          "CREDIT_CARD",
          "CATERING",
          "PRIVATIZABLE",
          "DISABLED_ACCESS"
        ],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/9b090d96-d3d2-4bef-a2a0-387b90aafd47/original",
            "format": "image/jpeg",
            "_id": "593e9e92b9e503000179c182",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/9b090d96-d3d2-4bef-a2a0-387b90aafd47/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/9b090d96-d3d2-4bef-a2a0-387b90aafd47/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/9b090d96-d3d2-4bef-a2a0-387b90aafd47/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b3e0e8d1-0202-46a3-a073-f579bc1cd481/original",
            "format": "image/jpeg",
            "_id": "593e9ebdd3188a00012ad5db",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b3e0e8d1-0202-46a3-a073-f579bc1cd481/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b3e0e8d1-0202-46a3-a073-f579bc1cd481/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b3e0e8d1-0202-46a3-a073-f579bc1cd481/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e62cda94-5f91-4aeb-9183-413b7d7fcf73/original",
            "format": "image/jpeg",
            "_id": "593e9ecfdfd83900018fa9dc",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e62cda94-5f91-4aeb-9183-413b7d7fcf73/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e62cda94-5f91-4aeb-9183-413b7d7fcf73/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e62cda94-5f91-4aeb-9183-413b7d7fcf73/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7356fe5b-fe6f-4f7b-ab6c-c2ef2059e53c/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7356fe5b-fe6f-4f7b-ab6c-c2ef2059e53c/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7356fe5b-fe6f-4f7b-ab6c-c2ef2059e53c/large"
          },
          "format": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7356fe5b-fe6f-4f7b-ab6c-c2ef2059e53c/original"
        },
        "startDate": "2017-06-11T22:00:00.000Z",
        "shortDescription": "LA PERFECTA FUSIÓN ENTRE HISTORIA Y GASTRONOMÍA EN UNA CUEVA DEL SIGLO XV"
      }

      ,
      {
        "_id": "59390ae2b9e503000179c173",
        "address": {
          "street": "Dalmau, 40",
          "country": "España",
          "city": "SANTA COLOMA DE GRAMANET",
          "zip": 8923
        },
        "contact": {
          "email": "fusiondalmau40@gmail.com",
          "phone": "930151834"
        },
        "location": [
          2.21886810000001,
          41.449148
        ],
        "name": "FUSIÓN RESTAURANT",
        "openingHours": ".",
        "category": "FOOD",
        "shortDescription": "Ven a Fusion Restaurant y disfruta de platos exóticos y deliciosos.",
        "description": "Ven a Fusion Restaurant y disfruta de platos exóticos y deliciosos. \n\nDescubre nuevos sabores y deleitate con nuestra cocina. ¡Te encantará!",
        "features": [
          "BAR",
          "CREDIT_CARD",
          "AIR_CONDITIONED",
          "WIFI"
        ],
        "photos": [],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2e903c76-f189-472c-97b0-45dea94c1040/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2e903c76-f189-472c-97b0-45dea94c1040/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2e903c76-f189-472c-97b0-45dea94c1040/large"
          },
          "format": "image/gif",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/2e903c76-f189-472c-97b0-45dea94c1040/original"
        },
        "social": {},
        "startDate": "2017-06-19T22:00:00.000Z"
      }

      ,
      {
        "_id": "5937e299d3188a00012ad5cb",
        "address": {
          "street": "Calle Batalla del Ebro, 39",
          "zip": 35013,
          "country": "España",
          "city": "Las Palmas de Gran Canaria"
        },
        "contact": {
          "email": "petterpump@gmail.com",
          "phone": "928 33 32 32"
        },
        "location": [
          -15.4476529,
          28.0979958
        ],
        "name": "Arepas Family",
        "openingHours": "lunes \t12:30-16:00 /19:30–23:45\nmartes\tCerrado\nmiércoles\t12:30-16:00 /19:30–23:45\njueves\t12:30-16:00 /19:30–23:45\nviernes\t12:30-16:00 /19:30–23:45\nsábado\t12:30-16:00 /19:30–23:45\ndomingo\t12:30-16:00 /19:30–23:45",
        "category": "FOOD",
        "shortDescription": "Pizzas y arepas exquisitas con ingredientes frescos y de calidad.",
        "description": "Arepas y Pizzas exquisitas con ingredientes frescos y de calidad.",
        "features": [],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a37de57f-5996-4162-bc95-f33508591e61/original",
            "format": "image/jpeg",
            "_id": "593eb1dcb9e503000179c183",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a37de57f-5996-4162-bc95-f33508591e61/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a37de57f-5996-4162-bc95-f33508591e61/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a37de57f-5996-4162-bc95-f33508591e61/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b943f08f-e806-4a25-8f07-af3b0e2f8940/original",
            "format": "image/jpeg",
            "_id": "594a87f3b9e503000179c19f",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b943f08f-e806-4a25-8f07-af3b0e2f8940/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b943f08f-e806-4a25-8f07-af3b0e2f8940/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b943f08f-e806-4a25-8f07-af3b0e2f8940/small"
            }
          }
        ],
        "social": {
          "twitter": "https://twitter.com/ArepasFamily",
          "facebook": "https://www.facebook.com/%C3%81repas-Family-429948713860005/"
        },
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e4ccf29b-114b-47ac-856a-0169805ab10d/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e4ccf29b-114b-47ac-856a-0169805ab10d/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e4ccf29b-114b-47ac-856a-0169805ab10d/large"
          },
          "format": "image/jpeg",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e4ccf29b-114b-47ac-856a-0169805ab10d/original"
        },
        "startDate": "2017-06-20T22:00:00.000Z"
      }

      ,
      {
        "_id": "5935204bdfd83900018fa9d2",
        "address": {
          "street": "Av. de Concha Espina, 1",
          "country": "España",
          "city": "Madrid",
          "zip": "28036"
        },
        "contact": {
          "web": "http://www.zenmarket.es/",
          "email": "reservas@zenmarket.es",
          "phone": "914 57 18 73"
        },
        "location": [
          -3.68675050000002,
          40.4524422
        ],
        "name": "Zen Market",
        "openingHours": "Lunes a Domingo 13:30-16:30 y 20:30-24:00",
        "category": "FOOD",
        "shortDescription": "Copas y recetas de Asia en lujoso salón de estilo oriental con vistas al césped del estadio del Real Madrid.",
        "description": "Zen Market, el restaurante asiático de lujo más grande de Europa, es la apuesta del equipo de Roger Chen experimentado y exitoso restaurador asiático en Madrid, que no va a dejar indiferente a nadie.",
        "features": [
          "AIR_CONDITIONED",
          "BAR",
          "WINE_BAR",
          "ENGLISH_SPOKEN",
          "WIFI",
          "TERRACE",
          "DISABLED_ACCESS",
          "PRIVATIZABLE",
          "CREDIT_CARD"
        ],
        "photos": [],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3c3a5cc8-593a-47d9-8c0b-ccafa98a4427/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3c3a5cc8-593a-47d9-8c0b-ccafa98a4427/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3c3a5cc8-593a-47d9-8c0b-ccafa98a4427/large"
          },
          "format": "image/jpeg",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3c3a5cc8-593a-47d9-8c0b-ccafa98a4427/original"
        }
      }

      ,
      {
        "_id": "59317600b9e503000179c16b",
        "address": {
          "street": "Av. del Dr. Federico Rubio y Galí, 30",
          "country": "España",
          "city": "MADRID",
          "zip": 28039
        },
        "contact": {
          "email": "realindia30@gmail.com",
          "phone": "911135299"
        },
        "social": {
          "tripadvisor": "https://www.tripadvisor.es/Restaurant_Review-g187514-d11904684-Reviews-Real_India-Madrid.html"
        },
        "location": [
          -3.70937460000005,
          40.4505778
        ],
        "name": "Real India",
        "openingHours": "Lunes: CERRADO\nMartes a Domingo de 12:30 a 00:00 horas.",
        "category": "FOOD",
        "shortDescription": "En Real India encontrarás diversos platos a cada cuál más exquisito.",
        "description": "En Real India encontrarás diversos platos a cada cuál más exquisito. Ven y disfruta de comida India de verdad a muy buen precio. ¡Te esperamos!",
        "features": [
          "BAR",
          "CREDIT_CARD"
        ],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/76494f7e-c8c0-4522-820c-3d8827c51cf2/original",
            "format": "image/jpeg",
            "_id": "59317601d3188a00012ad5c2",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/76494f7e-c8c0-4522-820c-3d8827c51cf2/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/76494f7e-c8c0-4522-820c-3d8827c51cf2/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/76494f7e-c8c0-4522-820c-3d8827c51cf2/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/86feed18-0d19-47b2-9409-d4278ab8118a/original",
            "format": "image/jpeg",
            "_id": "59317601d3188a00012ad5c3",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/86feed18-0d19-47b2-9409-d4278ab8118a/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/86feed18-0d19-47b2-9409-d4278ab8118a/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/86feed18-0d19-47b2-9409-d4278ab8118a/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a8813237-3fc4-43c4-9df0-9393268f473f/original",
            "format": "image/png",
            "_id": "59317602b9e503000179c16d",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a8813237-3fc4-43c4-9df0-9393268f473f/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a8813237-3fc4-43c4-9df0-9393268f473f/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a8813237-3fc4-43c4-9df0-9393268f473f/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/bb2deb31-ad01-40cc-bf46-76bb0cbac829/original",
            "format": "image/png",
            "_id": "59317602d3188a00012ad5c4",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/bb2deb31-ad01-40cc-bf46-76bb0cbac829/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/bb2deb31-ad01-40cc-bf46-76bb0cbac829/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/bb2deb31-ad01-40cc-bf46-76bb0cbac829/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/540b49d0-761c-4bc0-b739-5ea110744c7e/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/540b49d0-761c-4bc0-b739-5ea110744c7e/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/540b49d0-761c-4bc0-b739-5ea110744c7e/large"
          },
          "format": "image/gif",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/540b49d0-761c-4bc0-b739-5ea110744c7e/original"
        },
        "startDate": "2017-06-06T22:00:00.000Z"
      }

      ,
      {
        "_id": "59315432dfd83900018fa9cd",
        "address": {
          "street": "Calle Lepanto, 59",
          "country": "España",
          "city": "Cornellá de Llobregat",
          "zip": "08940"
        },
        "contact": {
          "web": "http://www.latrattoriadipeppe.com/",
          "email": "trattoriadipeppe@gmail.com",
          "phone": "933 77 57 61"
        },
        "social": {
          "facebook": "https://www.facebook.com/latrattoriadipeppe/"
        },
        "location": [
          2.08883990000004,
          41.35089
        ],
        "name": "Trattoria di peppe",
        "openingHours": "Lunes\t7:30–16:30\nMartes\t7:30–16:30\nMiércoles\t7:30–16:30\nJueves\t7:30–16:30\nViernes\t7:30–16:30, 20:00–24:00\nSábado\t13:00–16:30, 20:00–24:00\nDomingo\tCerrado",
        "category": "FOOD",
        "description": "En la Trattoria di Peppe encontrarás siempre productos frescos y de calidad, esto hace que nuestros platos obtengan un sabor y aroma que los hace realmente irresistibles. Trabajamos para que la calidad de nuestros productos sea siempre la exacta, ven a disfrutar de lo mejor de Italia!",
        "shortDescription": "En Trattoria di peppe cuidamos la calidad, el servicio y el ambiente para trasladar el mejor sabor de Italia a Barcelona.",
        "features": [],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a4217d34-8bf1-40d9-a27e-2263d44aad66/original",
            "format": "image/jpeg",
            "_id": "5931551db9e503000179c167",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a4217d34-8bf1-40d9-a27e-2263d44aad66/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a4217d34-8bf1-40d9-a27e-2263d44aad66/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a4217d34-8bf1-40d9-a27e-2263d44aad66/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f6f82a2e-1a33-463d-8bca-facb4ce943c3/original",
            "format": "image/jpeg",
            "_id": "59315522dfd83900018fa9ce",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f6f82a2e-1a33-463d-8bca-facb4ce943c3/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f6f82a2e-1a33-463d-8bca-facb4ce943c3/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f6f82a2e-1a33-463d-8bca-facb4ce943c3/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b91e6c8b-c44a-4288-bf76-230f27d3fe1e/original",
            "format": "image/jpeg",
            "_id": "5931552cb9e503000179c168",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b91e6c8b-c44a-4288-bf76-230f27d3fe1e/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b91e6c8b-c44a-4288-bf76-230f27d3fe1e/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/b91e6c8b-c44a-4288-bf76-230f27d3fe1e/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8abc2dcf-67c7-4835-836b-6713d1a71be9/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8abc2dcf-67c7-4835-836b-6713d1a71be9/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8abc2dcf-67c7-4835-836b-6713d1a71be9/large"
          },
          "format": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8abc2dcf-67c7-4835-836b-6713d1a71be9/original"
        }
      }

      ,
      {
        "_id": "593152f3b9e503000179c163",
        "address": {
          "country": "Colombia",
          "city": "Bogotá",
          "zip": 110221,
          "street": "79a, 71"
        },
        "contact": {
          "email": "bernardosantafe@outlook.es",
          "phone": "(0057)3132553890"
        },
        "social": {
          "facebook": "https://www.facebook.com/Bogota-FOOD-Company-1442900822683696/"
        },
        "location": [
          -74.089498979126,
          4.69435161500044
        ],
        "name": "Bogotá Food Company",
        "openingHours": ".de 12 a 4 am domingo a domingo",
        "category": "FOOD",
        "shortDescription": "Disfruta de las mejores hamburguesas, pizzas, perros calientes y comida mexicana en BFC.",
        "description": "Disfruta de las mejores hamburguesas, pizzas, perros calientes y comida mexicana en BFC. \n\nEstamos a tu servicio para cualquier petición de alimento o evento familiar/social/empresarial. ¡Te esperamos!",
        "features": [
          "PARKING",
          "ANIMALS",
          "CREDIT_CARD"
        ],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/045aa999-25c3-4ddc-bd29-be11170a9953/original",
            "format": "image/jpeg",
            "_id": "593152f4dfd83900018fa9c8",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/045aa999-25c3-4ddc-bd29-be11170a9953/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/045aa999-25c3-4ddc-bd29-be11170a9953/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/045aa999-25c3-4ddc-bd29-be11170a9953/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3b50c73f-3eea-4d2f-ac40-e57a5ed40ad6/original",
            "format": "image/jpeg",
            "_id": "593152f4dfd83900018fa9c9",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3b50c73f-3eea-4d2f-ac40-e57a5ed40ad6/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3b50c73f-3eea-4d2f-ac40-e57a5ed40ad6/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3b50c73f-3eea-4d2f-ac40-e57a5ed40ad6/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/00ab2e51-dffe-4327-bea2-7bc10683bb74/original",
            "format": "image/jpeg",
            "_id": "593152f4b9e503000179c165",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/00ab2e51-dffe-4327-bea2-7bc10683bb74/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/00ab2e51-dffe-4327-bea2-7bc10683bb74/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/00ab2e51-dffe-4327-bea2-7bc10683bb74/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/067c7fd9-c3ff-4cb0-bc96-bc42d81acf3e/original",
            "format": "image/jpeg",
            "_id": "593152f4dfd83900018fa9ca",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/067c7fd9-c3ff-4cb0-bc96-bc42d81acf3e/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/067c7fd9-c3ff-4cb0-bc96-bc42d81acf3e/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/067c7fd9-c3ff-4cb0-bc96-bc42d81acf3e/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3393adcc-9078-417e-a1a2-8c7063e55eb0/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3393adcc-9078-417e-a1a2-8c7063e55eb0/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3393adcc-9078-417e-a1a2-8c7063e55eb0/large"
          },
          "format": "image/jpeg",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/3393adcc-9078-417e-a1a2-8c7063e55eb0/original"
        },
        "startDate": "2017-06-11T22:00:00.000Z"
      }

      ,
      {
        "_id": "59312aa8d3188a00012ad5be",
        "address": {
          "street": "JOSE MARIA CARULLA, 2",
          "country": "España",
          "city": "GRANADA",
          "zip": 18014
        },
        "contact": {
          "web": "http://www.pizzeriaelbribon.com/",
          "email": "pizzeriaelbribon@hotmail.com",
          "phone": "958172412"
        },
        "social": {
          "facebook": "https://www.facebook.com/pizzeriaelbribon"
        },
        "location": [
          -3.62237389999996,
          37.1954081
        ],
        "name": "PIZZERÍA EL BRIBÓN",
        "openingHours": ".",
        "category": "FOOD",
        "shortDescription": "Nuestra vocación es servir a los clientes y ofrecerles pizzas de calidad.",
        "description": "Desde 1999, la Pizzería el Bribón viene ofreciendo a sus clientes productos artesanales y de máxima calidad. Empezando por un pequeño local en el que repartíamos nuestros productos a domicilio, hemos crecido gracias a nuestros clientes para llegar a ser un restaurante - pizzería de referencia en Santa Fé, Granada.\n\nElaboramos artesanalmente nuestras pizzas a diario, y utilizamos productos de calidad, para que cuando nos visites no olvides un buen rato.",
        "features": [
          "AIR_CONDITIONED",
          "BAR",
          "WIFI",
          "TERRACE",
          "CATERING"
        ],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ad0c86e7-11e2-4349-b6a2-f2894e54dc11/original",
            "format": "image/jpeg",
            "_id": "59312aa9d3188a00012ad5bf",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ad0c86e7-11e2-4349-b6a2-f2894e54dc11/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ad0c86e7-11e2-4349-b6a2-f2894e54dc11/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ad0c86e7-11e2-4349-b6a2-f2894e54dc11/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/29337b01-28af-4ffb-bce7-1e65f1b42c7d/original",
            "format": "image/jpeg",
            "_id": "59312aa9dfd83900018fa9c7",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/29337b01-28af-4ffb-bce7-1e65f1b42c7d/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/29337b01-28af-4ffb-bce7-1e65f1b42c7d/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/29337b01-28af-4ffb-bce7-1e65f1b42c7d/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ea20bdd6-c109-4554-a88c-f507f5f74c2e/original",
            "format": "image/jpeg",
            "_id": "59312aa9d3188a00012ad5c0",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ea20bdd6-c109-4554-a88c-f507f5f74c2e/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ea20bdd6-c109-4554-a88c-f507f5f74c2e/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/ea20bdd6-c109-4554-a88c-f507f5f74c2e/small"
            }
          }
        ],

        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/de53bc65-3d2d-4924-bdb0-fbf50cdd0434/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/de53bc65-3d2d-4924-bdb0-fbf50cdd0434/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/de53bc65-3d2d-4924-bdb0-fbf50cdd0434/large"
          },
          "format": "image/png",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/de53bc65-3d2d-4924-bdb0-fbf50cdd0434/original"
        },
        "startDate": "2017-06-01T22:00:00.000Z"
      }

      ,
      {
        "_id": "592ed616dfd83900018fa9c1",
        "address": {
          "street": "Zarza, 12",
          "country": "España",
          "city": "Gilena",
          "zip": 41565
        },
        "contact": {
          "email": "pizzamovilgilena@gmail.com",
          "phone": "955 82 60 41-670 397 204"
        },
        "social": {
          "twitter": "https://twitter.com/pizzamovigilena",
          "facebook": "https://www.facebook.com/pizzamovildegilena/"
        },
        "location": [
          -4.91545919999999,
          37.2499712
        ],
        "name": "PizzaMóvil Gilena",
        "openingHours": "Lunes, Martes y Miércoles CERRADO\nJueves\t19:00–24:00\nViernes\t19:00–24:00\nSábado\t09:00–15:00–19:00–24:00\nDomingo 09:00–15:00–19:00–24:00",
        "category": "FOOD",
        "shortDescription": "Local en el que hacemos comida rapida de calidad, desde una pizza, hamburguesa, sandwich, kebab etc.\nTerraza exterior con plataforma protectora y carpa",
        "description": "Local en el que hacemos comida rapida de calidad, desde una pizza, hamburguesa, sandwich, kebab etc.\nTerraza exterior con plataforma protectora y carpa",
        "features": [
          "WIFI",
          "TERRACE"
        ],
        "photos": [
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f80ed7c1-febf-4249-9b15-ddbfb2e1f754/original",
            "format": "image/jpeg",
            "_id": "592ed618b9e503000179c15c",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f80ed7c1-febf-4249-9b15-ddbfb2e1f754/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f80ed7c1-febf-4249-9b15-ddbfb2e1f754/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/f80ed7c1-febf-4249-9b15-ddbfb2e1f754/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a2ed8996-4125-42eb-b1d1-69411715891e/original",
            "format": "image/jpeg",
            "_id": "592ed618dfd83900018fa9c2",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a2ed8996-4125-42eb-b1d1-69411715891e/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a2ed8996-4125-42eb-b1d1-69411715891e/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/a2ed8996-4125-42eb-b1d1-69411715891e/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/17b36fb7-7251-4923-92e5-d8ebe8b68713/original",
            "format": "image/jpeg",
            "_id": "592ed618dfd83900018fa9c3",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/17b36fb7-7251-4923-92e5-d8ebe8b68713/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/17b36fb7-7251-4923-92e5-d8ebe8b68713/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/17b36fb7-7251-4923-92e5-d8ebe8b68713/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8c8b6482-65c4-4da3-9d1b-e3452d3694c5/original",
            "format": "image/jpeg",
            "_id": "592ed618dfd83900018fa9c4",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8c8b6482-65c4-4da3-9d1b-e3452d3694c5/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8c8b6482-65c4-4da3-9d1b-e3452d3694c5/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8c8b6482-65c4-4da3-9d1b-e3452d3694c5/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/c8dd830b-bf8b-4eb6-8308-f570107893ee/original",
            "format": "image/jpeg",
            "_id": "59365290d3188a00012ad5c6",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/c8dd830b-bf8b-4eb6-8308-f570107893ee/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/c8dd830b-bf8b-4eb6-8308-f570107893ee/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/c8dd830b-bf8b-4eb6-8308-f570107893ee/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/82b92d8c-279f-4e1a-a43a-0d4d958229f3/original",
            "format": "image/jpeg",
            "_id": "593652a8b9e503000179c16e",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/82b92d8c-279f-4e1a-a43a-0d4d958229f3/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/82b92d8c-279f-4e1a-a43a-0d4d958229f3/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/82b92d8c-279f-4e1a-a43a-0d4d958229f3/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/d20a9cb3-38ed-423c-a5c5-ff4b5b8b15fc/original",
            "format": "image/jpeg",
            "_id": "5936531ddfd83900018fa9d3",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/d20a9cb3-38ed-423c-a5c5-ff4b5b8b15fc/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/d20a9cb3-38ed-423c-a5c5-ff4b5b8b15fc/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/d20a9cb3-38ed-423c-a5c5-ff4b5b8b15fc/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e5f219a5-f881-490c-ade7-b049f0a0c9db/original",
            "format": "image/jpeg",
            "_id": "5936532bb9e503000179c16f",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e5f219a5-f881-490c-ade7-b049f0a0c9db/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e5f219a5-f881-490c-ade7-b049f0a0c9db/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/e5f219a5-f881-490c-ade7-b049f0a0c9db/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/800b2a39-cb36-4da0-a7b3-07bc62ce5de8/original",
            "format": "image/jpeg",
            "_id": "5936534fb9e503000179c170",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/800b2a39-cb36-4da0-a7b3-07bc62ce5de8/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/800b2a39-cb36-4da0-a7b3-07bc62ce5de8/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/800b2a39-cb36-4da0-a7b3-07bc62ce5de8/small"
            }
          },
          {
            "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7903bb89-b651-4b4e-a22b-bf572a833ae7/original",
            "format": "image/jpeg",
            "_id": "5936537fd3188a00012ad5c8",
            "thumbnails": {
              "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7903bb89-b651-4b4e-a22b-bf572a833ae7/large",
              "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7903bb89-b651-4b4e-a22b-bf572a833ae7/medium",
              "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/7903bb89-b651-4b4e-a22b-bf572a833ae7/small"
            }
          }
        ],
        "logo": {
          "thumbnails": {
            "small": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8553d7cb-67e9-4b22-9248-d27cac00df57/small",
            "medium": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8553d7cb-67e9-4b22-9248-d27cac00df57/medium",
            "large": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8553d7cb-67e9-4b22-9248-d27cac00df57/large"
          },
          "format": "image/jpeg",
          "url": "https://s3-eu-west-1.amazonaws.com/klikin-media-prod/8553d7cb-67e9-4b22-9248-d27cac00df57/original"
        }
      }
    ];
  }


  private getAreasInformation(): void {
    this.http.get('http://s3-eu-west-1.amazonaws.com/developers-tests/commerces.json')
      .subscribe(
        (success) => this.onSucessGetInfo(success),
        (error) => this.onErrorGetInfo(error)
      );
  }

  private onSucessGetInfo(response: Response | any): void {
    console.log(response);

  }

  private onErrorGetInfo(response: Response): void {
    console.log(response);
  }
}
