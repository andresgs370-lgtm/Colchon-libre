import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-contactocomponent",
    standalone: false,
    styleUrl: "./contactocomponent.css",
    templateUrl: "./contactocomponent.html",
})
export class Contactocomponent {
    mensajeEnviado = false;

    contacto = {
        nombre: '',
        correo: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    };

    enviarContacto(form: NgForm) {
        if (form.invalid) return;

        console.log('Contacto:', this.contacto);

        this.mensajeEnviado = true;
        form.resetForm({ asunto: '' });
    }
}