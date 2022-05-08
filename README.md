# Control de Cámara
Un módulo Tera Toolbox que le permite configurar o deshabilitar los efectos de movimiento de la cámara, cambiar el FOV (campo de visión) de la cámara y anular la distancia de la cámara.

## Configuración
Abra la pantalla de configuración escribiendo `/8 camera` en el chat, o use cualquiera de los comandos a continuación. Todas las configuraciones son persistentes y compartidas entre todos los clientes/cuentas/personajes.
<img src="https://user-images.githubusercontent.com/69399372/167285744-734338e0-fc63-4571-b016-84710e473b53.jpg" alt="drawing" width="600"/>

### Movimiento de la Cámara
- `/8 camera shake on [power: Number] [speed: Number]` - Habilita el movimiento de la cámara, especificando opcionalmente los multiplicadores de velocidad y potencia. Ejemplo: `/8 camera shake on 0.1 1.0` permite que la cámara se mueva a una velocidad normal pero con solo un 10 % de fuerza.
- `/8 camera shake off` - Deshabilita el movimiento de la cámara por completo.

### Anulación del FOV (campo de visión) de la cámara
- `/8 camera fov disable` - Deshabilita la anulación de FOV. El juego volverá al FOV predeterminado en el próximo reinicio.
- `/8 camera fov [value: Number]` - Habilita la anulación de FOV. Ejemplo: `/8 camera fov 90` anula el FOV a 90 grados.

### Anulación de la distancia de la cámara
- `/8 camera distance disable` - Deshabilita la anulación de distancia. El juego volverá a la distancia de cámara predeterminada en el próximo reinicio.
- `/8 camera distance [value: Number]` - Habilita la anulación de la distancia. Ejemplo: `/8 camera distance 500` anula la distancia de la cámara a 500 unidades.
