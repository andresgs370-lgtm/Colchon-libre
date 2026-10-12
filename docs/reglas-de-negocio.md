# Reglas de negocio

Estas son las reglas que la pagina tiene que cumplir siempre, sin importar en que pantalla este el usuario. Salen del enunciado del proyecto. Al lado de cada una dejamos en que parte del codigo se hace, para que sea facil encontrarla.

## RN-01 La fecha de salida tiene que ser despues de la de llegada
Si la salida es igual o anterior a la llegada no se genera la cotizacion y sale un mensaje de error.
Esta en cotizacion.service.ts, en el metodo cotizar.

## RN-02 La fecha de llegada no puede ser anterior a hoy
No se puede cotizar una estancia que empieza en el pasado.
Esta en cotizacion.service.ts, en cotizar. El metodo hoy da la fecha actual para comparar.

## RN-03 Los huespedes tienen que ser mas de cero
Si el numero es cero o negativo no se cotiza.
Esta en cotizacion.service.ts, en cotizar.

## RN-04 Los huespedes no pueden pasar la capacidad del alojamiento
Si alguien pide mas personas de las que caben, la pagina dice cual es el maximo y no cotiza. Tambien se vuelve a revisar al reservar.
Esta en cotizacion.service.ts y en reserva.service.ts.

## RN-05 El precio por noche tiene que ser mayor que cero
Un alojamiento sin precio valido no se puede cotizar y ni siquiera se muestra en el listado.
Esta en alojamiento.service.ts y en cotizacion.service.ts.

## RN-06 Solo se cotiza con fechas validas
Si hay algun error en las fechas o en los huespedes no se calcula nada y se muestran los errores. La cotizacion solo existe cuando todo esta bien.
Esta en cotizacion.service.ts. Si el usuario cambia algo del formulario, la cotizacion anterior se borra.

## RN-07 Solo se puede reservar despues de una cotizacion valida
El formulario de reserva solo aparece cuando ya hay una cotizacion. Ademas el servicio de reservas revisa otra vez y no deja crear la reserva si la cotizacion no sirve.
Esta en reserva.service.ts, en el metodo crear, y en la pantalla del detalle.

## RN-08 La tarifa de servicio es el 10 % del subtotal
El subtotal es noches por precio por noche. El total es subtotal mas tarifa de limpieza mas tarifa de servicio.
Esta en cotizacion.service.ts.

## RN-09 No se muestran los alojamientos inactivos
Los que tienen activo en false no salen ni en el listado ni en la pagina principal.
Esta en alojamiento.service.ts, en getAlojamientos.

## RN-10 Si una busqueda no encuentra nada hay que avisar
Cuando los filtros no dejan ningun alojamiento sale un mensaje y un boton para limpiar los filtros.
Esta en el html del listado de alojamientos.

## RN-11 La reserva empieza como CONFIRMADA
Toda reserva nueva queda con ese estado y con el nombre y correo del huesped. El nombre y el correo son obligatorios y el correo tiene que tener forma de correo.
Esta en reserva.service.ts y en el formulario del componente de reserva.
