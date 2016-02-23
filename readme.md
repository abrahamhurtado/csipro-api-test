# Proof of Concept para una API oficial de CSIPRO

Para hacer una app, tal vez.

### ¿Por qué?

Salonear y hacer flyers tienen sus ventajas, no dejaremos de hacerlo. Sin embargo, tener una app amplía las posibilidades de interacción con el usuario en forma de alarmas, recordatorios y *push notifications*, todo a través de su teléfono. Esto sirve perfecto para casos de uso en los que, por *X* o *Y* razón, los eventos tengan que cancelarse o reacomodarse.

### ¿Cómo?

Posiblemente, la idea más sencilla sea una REST API con express en NodeJS. Iniciaríamos con datos planos que no puedan modificarse, para hacer más rápido el prototipado y ya después conectarlo a una base de datos y agregar peticiones POST.

También, como la aplicación, en teoría, sería fácil de programar, serviría perfectamente como un ejemplo sencillo para un taller de aplicaciones nativas.

### Ideas


#### Obtener todos los eventos

```js
GET /api/v1/eventos
```

Debe regresar una lista con información básica de los eventos, como su nombre, el banner y un apuntador al recurso específico de cada elemento.

Por ejemplo:

```js
{
  "eventos": [
    {
      "id": 0,
      "nombre": "CSI Talks",
      "banner": "/csitalks.png",
      "resource_uri": "/api/v1/eventos/0"
    }, {
      "id": 1,
      "nombre": "CSI Code",
      "banner": "/csicode.png",
      "resource_uri": "/api/v1/eventos/1"
    }, {
      // ...
    }
  ]
}
```

#### Obtener evento en específico

```js
GET /api/v1/eventos/:id
```

Debe regresar la información en específico del evento buscado.

Por ejemplo:

```js
{
  "id": 0,
  "nombre": "CSI Talks",
  "banner": "/csitalks.png",
  "descripcion": "Pláticas informativas con el objetivo de aprender más sobre temas diversos",
  "calendario": [
    {
      "fecha": "Mon Feb 23 2015 14:00:00 GMT-0700 (US Mountain Standard Time)",
      "titulo": "La historia de JavaScript",
      "presentador": "Abraham Hurtado",
      "correo": "arhc.hc@gmail.com",
      "twitter": "@arhcstolen",
      "descripcion": "Un vistazo sobre la vida del Neville Longbottom de los lenguajes de programación"
    },
    {
      "fecha": "Mon Mar 1 2015 14:00:00 GMT-0700 (US Mountain Standard Time)",
      "titulo": "MVC",
      "presentador": "Ramón Ramírez",
      "correo": "ramon.ramirez.preciado@gmail.com",
      "twitter": "ramonramirezz",
      "descripcion": "MVC: Modelo Vista Controlador, un patrón de diseño para la arquitectura de nuestras apps"
    }
  ]
}
```
