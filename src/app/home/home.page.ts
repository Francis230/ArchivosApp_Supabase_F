import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular'; // <- Asegurarse de importar ToastController
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedFile: File | null = null;

  // SE inyecta el servicio de Supabase y el controlador de toast para usarlo en la clase Homepage
  constructor(
    private supabase: SupabaseService,
    private toastController: ToastController // <- Inyectamos el controlador de toast
  ) {}

  // Al seleccionar archivo
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Subida del archivo
  async upload() {
    if (!this.selectedFile) {
      this.showToast('Por favor selecciona un archivo.', 'danger');
      return;
    }

    try {
      const result = await this.supabase.uploadFile(this.selectedFile);
      this.showToast('✅ Archivo subido correctamente: ' + result.path, 'success');
    } catch (error: any) {
      console.error('Error al subir archivo:', error.message || error);
      this.showToast('❌ Error al subir archivo: ' + (error.message || error), 'danger');
    }
  }

  // Función auxiliar para mostrar mensajes tipo "popup" (toast)
  async showToast(message: string, color: 'success' | 'danger') {
    // Crea y muestra un toast con el mensaje que recibe
    await this.toastController.create({
      message: message,     
      duration: 2000,       
      color: color,         
      position: 'middle'    
    }).then(toast => toast.present());
  }
}


