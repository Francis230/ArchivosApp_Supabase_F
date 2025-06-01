# Aplicación Ionic - Subir Archivos a Supabase

Este proyecto es una aplicación básica desarrollada con **Ionic**, que permite subir archivos al almacenamiento de **Supabase** mediante su servicio de `Storage`.

## Integrantes

- Francis Aconda  
- Marco Tapia  

## Repositorio

[Enlace al repositorio en GitHub](https://github.com/Francis230/ArchivosApp_Supabase_F)

## Descripción del Proyecto

La aplicación permite al usuario seleccionar un archivo y subirlo directamente a un bucket configurado en Supabase. Está pensada como una prueba de concepto para el uso de almacenamiento en la nube con integración desde una app híbrida móvil/web.

## Configuración en Supabase

1. **Crear un nuevo Bucket**  
   - Ingresar al proyecto en Supabase.
     
   - Ir a la sección `Storage`.
     ![image](https://github.com/user-attachments/assets/0e7bbffb-f4c9-4033-9b84-1863ab619ec6)

   - Crear un nuevo bucket con el nombre deseado.
     ![image](https://github.com/user-attachments/assets/bbd6eaf7-e93d-4342-80eb-a7c0e8e1e440)

   - Se creará el Bucket con el nombre ya establecido.
     ![image](https://github.com/user-attachments/assets/ebdf4927-7003-489c-8bbe-e1f30309eb3c)

   - Luego en el Editor SQL, mandamos un comando para que cualquier usuario pueda insertar algún archivo en Supabase, debido a que las normas o políticas requieren una       autenticación para subir algún archivo a pesar de que el almacenamiento o bucket este público.
   ![image](https://github.com/user-attachments/assets/e5271672-61f5-43d6-a4b2-8317e20ee871)



2. **Permisos de subida**  
   - A pesar de que el bucket sea público, Supabase requiere autenticación por defecto para subir archivos.
   - 
````

> Asegúrate de aplicar las reglas de políticas de acceso adecuadas según el bucket creado.

## Uso del Proyecto

### 1. Instalar dependencias

```bash
npm install
```

### 2. Iniciar servidor

```bash
ionic serve
````
![image](https://github.com/user-attachments/assets/cdf6da26-d56e-4181-8dec-db284dcd2628)

```

### 3. Verificación

* Abrir el navegador y verificar que la aplicación se ejecuta correctamente.
````
![image](https://github.com/user-attachments/assets/175e3e11-3060-4c26-b1a9-169e9e0b08f1)
````
* Subir un archivo desde la interfaz.
* Verificar que el archivo se almacena en el bucket configurado en Supabase.
````
![image](https://github.com/user-attachments/assets/e855ecb4-49e8-4909-add3-782ae4d67f42)



## Notas

* La aplicación se puede ampliar para incluir autenticación con Supabase.
* El uso de buckets públicos debe manejarse con cuidado para evitar problemas de seguridad.



