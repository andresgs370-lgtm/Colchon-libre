# Navegacion de la aplicacion

La pagina usa el router de Angular. La barra de arriba y el pie de pagina estan siempre visibles y en el medio cambia la pantalla segun la ruta.

## Rutas

La ruta / es la pagina de inicio.
La ruta /alojamientos es el listado con los filtros.
La ruta /alojamientos/:id es el detalle de un alojamiento, donde se cotiza y se reserva. El :id es el numero del alojamiento.
La ruta /mis-reservas muestra las reservas que se han hecho.
La ruta /servicios tiene la informacion de la empresa.
La ruta /contacto es el formulario de contacto.
Cualquier otra ruta lleva de vuelta al inicio.

## Como se mueve el usuario

El camino principal empieza en el inicio. Desde ahi el usuario puede ir al listado de alojamientos, o abrir directamente uno de los destacados. En el listado escoge un alojamiento y se abre su detalle. En el detalle escoge las fechas y los huespedes y pide la cotizacion. Si la cotizacion esta bien, aparece el formulario de reserva donde pone su nombre y correo. Al confirmar, la reserva queda registrada y desde ahi puede ir a Mis reservas para verla.

Desde la barra de arriba el usuario puede ir en cualquier momento al inicio, a los alojamientos, a servicios, a contacto o a mis reservas. El pie de pagina tambien tiene enlaces al listado y a mis reservas.
