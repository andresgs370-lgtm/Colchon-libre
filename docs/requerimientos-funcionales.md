# Requerimientos funcionales

Esto es lo que la pagina tiene que poder hacer. Lo sacamos del enunciado y de lo que fuimos haciendo en Angular. Todo es desde lo que hace el huesped, que es el que entra a buscar donde quedarse.

## RF-01 Pagina inicial
Al entrar se ve el nombre de la plataforma, una descripcion corta y los alojamientos destacados. Tambien hay un acceso para ir a buscar alojamientos.

## RF-02 Listado de alojamientos
Se muestran los alojamientos que estan activos con su foto, nombre, ciudad, tipo, capacidad, precio por noche, calificacion y servicios. Los inactivos no se muestran.

## RF-03 Filtros
Se puede filtrar por ciudad, huespedes, tipo y precio maximo. Los resultados cambian solos mientras uno escoge. Hay un boton para limpiar los filtros y si no sale nada la pagina lo avisa.

## RF-04 Detalle del alojamiento
Al darle clic a un alojamiento se abre una pantalla con toda la informacion, como la descripcion, la ubicacion, las habitaciones, camas y baños, el precio, los servicios, las reglas, las reseñas y las fotos.

## RF-05 Cotizacion
En el detalle se escogen la fecha de llegada, la de salida y los huespedes. La pagina calcula las noches, el subtotal, la limpieza, la tarifa de servicio y el total, y los muestra antes de reservar. Si hay algo mal, por ejemplo una fecha pasada, sale un mensaje de error.

## RF-06 Reserva
Cuando la cotizacion esta bien se puede reservar. Se pide el nombre y el correo y la reserva queda como CONFIRMADA. No se manda a ningun lado, solo se guarda en el navegador.

## RF-07 Mis reservas
Hay una opcion Mis reservas donde salen las reservas que se hicieron con el alojamiento, ciudad, fechas, huespedes, total y estado. Si no hay ninguna sale un mensaje diciendolo.

## RF-08 Navegacion
Hay una barra arriba y un pie de pagina abajo para moverse entre inicio, alojamientos, servicios, contacto y mis reservas.
