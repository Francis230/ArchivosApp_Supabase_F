import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'Link_de_tu_Supabase',
      'Key_de_tu_Supabase'
    );
  }

  // Metodo para subir los archivos al bucket de Archivos en Supabase
  async uploadFile(file: File): Promise<any> {
    // Verifica que el archivo sea valido
    const { data, error } = await this.supabase.storage
      .from('archivos') 
      .upload(`public/${Date.now()}_${file.name}`, file); 
    if (error) throw error;
    return data;
  }
}

