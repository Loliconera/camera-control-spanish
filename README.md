# Control de Cámara
TERA Toolbox mod que le permite configurar o deshabilitar los efectos de movimiento de la cámara, cambiar el FOV (campo de visión) de la cámara y anular la distancia de la cámara.

## Configuración
Abra la pantalla de configuración escribiendo `/toolbox camera` en el chat, o use cualquiera de los comandos a continuación. Todas las configuraciones son persistentes y compartidas entre todos los clientes/cuentas/personajes.

### Movimiento de la Cámara
- `/toolbox camera shake on [power: Number] [speed: Number]` - Habilita el movimiento de la cámara, especificando opcionalmente los multiplicadores de velocidad y potencia. Ejemplo: `/toolbox camera shake on 0.1 1.0` permite que la cámara se mueva a una velocidad normal pero con solo un 10 % de fuerza.
- `/toolbox camera shake off` - Deshabilita el movimiento de la cámara por completo.

### Anulación del FOV (campo de visión) de la cámara
- `/toolbox camera fov disable` - Deshabilita la anulación de FOV. El juego volverá al FOV predeterminado en el próximo reinicio.
- `/toolbox camera fov [value: Number]` - Habilita la anulación de FOV. Ejemplo: `/toolbox camera fov 90` anula el FOV a 90 grados.

### Anulación de la distancia de la cámara
- `/toolbox camera distance disable` - Deshabilita la anulación de distancia. El juego volverá a la distancia de cámara predeterminada en el próximo reinicio.
- `/toolbox camera distance [value: Number]` - Habilita la anulación de la distancia. Ejemplo: `/toolbox camera distance 500` anula la distancia de la cámara a 500 unidades.
