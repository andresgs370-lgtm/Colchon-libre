import { Component } from '@angular/core';

@Component({
  selector: 'app-servicioscomponent',
  standalone: false,
  templateUrl: './servicioscomponent.html',
  styleUrls: ['./servicioscomponent.css']
})
export class Servicioscomponent {

  empresa = {
    nombre: 'Colchon Libre',
    descripcion: 'Somos una empresa dedicada a brindar soluciones confiables, con un equipo comprometido con la calidad y la atención cercana a cada cliente.',
    mision: 'Ofrecer servicios de calidad que superen las expectativas de nuestros clientes, con responsabilidad y compromiso.',
    vision: 'Ser reconocidos como una empresa líder e innovadora en nuestro sector durante los próximos años.',
    contacto: {
      direccion: 'Bogotá, Colombia',
      telefono: '+57 300 000 0000',
      correo: 'contacto@empresa.com',
      horario: 'Lunes a viernes, 8:00 a.m. - 6:00 p.m.'
    }
  };


  otrosServicios = [
    {
      nombre: 'LimpiezaLibre',
      descripcion: 'Empresa de limpieza para hogares y oficinas. Dejamos cada espacio impecable, sin que te preocupes por nada: tú descansas y nosotros nos encargamos del resto.',
      imagen: '/assets/limpiezalibre-blanco.png',
    },
    {
      nombre: 'CaidaLibre',
      descripcion: 'Agencia de vuelos y aventuras. Encuentra tu próximo destino con las mejores experiencias en el aire, desde tiquetes al mejor precio hasta planes para los más atrevidos.',
      imagen: '/assets/caidalibre-blanco.png',
    },
  ];
  preguntas = [
    {
      pregunta: '¿Qué servicios ofrece la empresa?',
      respuesta: 'Ofrecemos los servicios principales de la plataforma y, además, contamos con empresas aliadas como LimpiezaLibre y CaidaLibre.',
      abierta: false
    },
    {
      pregunta: '¿Cómo puedo contactarlos?',
      respuesta: 'Puedes escribirnos al correo, llamarnos por teléfono o visitarnos en nuestro horario de atención.',
      abierta: false
    },
    {
      pregunta: '¿Cuál es el horario de atención?',
      respuesta: 'Atendemos de lunes a viernes, de 8:00 a.m. a 6:00 p.m.',
      abierta: false
    },
    {
      pregunta: '¿Dónde están ubicados?',
      respuesta: 'Nos encontramos en Bogotá, Colombia.',
      abierta: false
    },
    {
      pregunta: '¿Los servicios tienen algún costo?',
      respuesta: 'Los costos dependen de cada servicio. Escríbenos y te enviamos toda la información.',
      abierta: false
    }
  ];

  alternarPregunta(indice: number): void {
    this.preguntas[indice].abierta = !this.preguntas[indice].abierta;
  }
}