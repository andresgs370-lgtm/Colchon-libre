# Colchón Libre

Este es el proyecto de Desarrollo de Sistemas de Información 3 de la Universidad El Bosque. Es una página web hecha con Angular para una empresa llamada Inversiones LR que alquila alojamientos por días. En esta primera versión solo hicimos la parte visual (el frontend), así que no hay base de datos ni servidor.

## Integrantes

Andres Felipe Garavito Sanchez
Miguel Angel Belalcazar Bolaños
Julián Lamprea rojas
Alejandro Ostos Quiñones

## Qué usamos

Hicimos el proyecto con Angular y TypeScript. Para el diseño usamos Bootstrap, Font Awesome y animate.css, que se cargan desde internet. Para guardar las reservas usamos el localStorage del navegador y para trabajar en equipo usamos Git y GitHub.

## Qué necesitas para correrlo

Necesitas tener instalado Node.js (la versión LTS más reciente sirve) y npm, que viene con Node. También necesitas conexión a internet porque el diseño se carga desde CDN. Si quieres puedes instalar Angular CLI, pero no es obligatorio.

## Cómo instalarlo

Primero clona el repositorio y entra a la carpeta del proyecto. Ojo, el proyecto de Angular está dentro de hotel/hotel y no en la raíz.

```
git clone https://github.com/andresgs370-lgtm/Colchon-libre.git
cd Colchon-libre/hotel/hotel
npm install
```

## Cómo correrlo

Desde la carpeta hotel/hotel escribe esto y abre http://localhost:4200 en el navegador.

```
npm start
```

## Qué puede hacer la página

En la página de inicio se ven el nombre de la plataforma, una descripción corta y los alojamientos destacados, que son los mejor calificados. Desde ahí se puede ir a la búsqueda.

En el listado se ven todos los alojamientos con su foto, nombre, ciudad, tipo, capacidad, precio por noche, calificación y servicios. Se pueden filtrar por nombre, ciudad, número de huéspedes, tipo, precio y servicios, y los resultados cambian mientras uno va escogiendo. También hay un botón para limpiar los filtros y un mensaje si no se encuentra nada.

Al hacer clic en un alojamiento se abre su detalle, con la descripción, la ubicación, las habitaciones, camas y baños, los servicios, las reglas, las reseñas y las fotos.

En el detalle también se puede cotizar. Se escoge la fecha de llegada, la fecha de salida y el número de huéspedes, y la página calcula las noches, el subtotal, la tarifa de limpieza, la tarifa de servicio (el 10 % del subtotal) y el total.

Después de tener una cotización válida se puede reservar. Se pide el nombre y el correo, y la reserva queda con el estado CONFIRMADA. Todo esto es una simulación, no se envía a ningún lado.

En la sección Mis reservas se ven las reservas que se hicieron. Si todavía no hay ninguna, sale un mensaje avisándolo.

## Reglas que tuvimos en cuenta

La fecha de salida tiene que ser después de la de llegada y la de llegada no puede ser anterior a hoy. Los huéspedes deben ser más de cero y no pueden pasar la capacidad del alojamiento. No se puede reservar sin una cotización válida y los alojamientos marcados como inactivos no se muestran.

## Cómo está organizado el código

Todo el código está en hotel/hotel/src/app. Allí hay una carpeta component con las pantallas (la barra de arriba, el pie de página, la página principal, el listado, el detalle, la reserva, mis reservas, servicios y contacto). Hay una carpeta models con las interfaces de TypeScript (alojamiento, reseña, cotización y reserva). Y hay una carpeta services con los servicios, uno para leer los datos, otro para los filtros, otro para calcular la cotización y otro para guardar las reservas. Las rutas están en app-routing-module.ts.

Los datos están en hotel/hotel/public/assets/data/marketplace-data.json. Ningún componente lee ese archivo directamente, todos lo piden a través del servicio de alojamientos.

## Licencia

GPL-3.0, el archivo LICENSE tiene los detalles.
