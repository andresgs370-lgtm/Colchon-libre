# Componentes de la aplicacion

Aqui explicamos que hace cada parte de la pagina. Separamos el proyecto en componentes (lo que se ve), servicios (la logica y los datos) y modelos (la forma de los datos), para que no quedara todo en un solo archivo.

## Componentes

navbarcomponents es la barra de arriba. Tiene los enlaces a inicio, alojamientos, servicios, contacto y mis reservas, y un panel de filtros que usa el servicio de filtros.

footercomponents es el pie de pagina. Tiene enlaces rapidos y la informacion de la empresa.

paginaprincipalcomponent es la pagina de inicio. Muestra el nombre de la plataforma, la descripcion y los alojamientos destacados, que son los tres mejor calificados. Usa AlojamientoService y FiltroService. Ruta: /

listadoalojamientoscomponent muestra todos los alojamientos en tarjetas con sus filtros y el mensaje de cuando no hay resultados. Usa AlojamientoService y FiltroService. Ruta: /alojamientos

detallealojamientocomponent muestra toda la informacion de un alojamiento, las reseñas y el formulario para cotizar. Usa AlojamientoService y CotizacionService. Ruta: /alojamientos/:id

reservacomponent es el formulario donde se pone el nombre y el correo para confirmar la reserva. No tiene ruta propia, aparece dentro del detalle cuando ya hay una cotizacion. Usa ReservaService.

misreservascomponent muestra la tabla con las reservas hechas, o un mensaje si no hay ninguna. Usa ReservaService. Ruta: /mis-reservas

servicioscomponent es una pagina informativa sobre la empresa, sus servicios y preguntas frecuentes. Ruta: /servicios

contactocomponent es un formulario de contacto. Por ahora no manda el mensaje a ningun lado, solo muestra que fue enviado. Ruta: /contacto

## Servicios

AlojamientoService lee el archivo marketplace-data.json con HttpClient. Entrega los alojamientos activos, los destacados, un alojamiento por id y sus reseñas.

FiltroService guarda los filtros que escoge el usuario para que los compartan la barra, la pagina de inicio y el listado.

CotizacionService valida las fechas y los huespedes y calcula noches, subtotal, tarifa de limpieza, tarifa de servicio y total.

ReservaService crea las reservas, revisa que la cotizacion sea valida y las guarda en el localStorage del navegador.

## Modelos

Estan en la carpeta models y son las interfaces de TypeScript: Alojamiento, Resena, Cotizacion, Reserva y MarketplaceData, que describe como es el archivo JSON.
