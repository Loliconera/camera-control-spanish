module.exports = [
    {
        "key": "shakeEnabled",
        "name": "Habilitar el movimiento de la cámara",
        "type": "bool"
    },
    {
        "key": "shakePower",
        "name": "Multiplicador de potencia de movimiento (si está habilitado)",
        "type": "number",
        "min": 0.0,
        "max": 100.0,
        "step": 0.25
    },
    {
        "key": "shakeSpeed",
        "name": "Multiplicador de velocidad de movimiento (si está habilitado)",
        "type": "number",
        "min": 0.0,
        "max": 100.0,
        "step": 0.25
    },
    {
        "key": "fovEnabled",
        "name": "Habilitar anulación de FOV (campo de visión)",
        "type": "bool"
    },
    {
        "key": "fovValue",
        "name": "Valor de anulación de FOV (si está habilitado)",
        "type": "number",
        "min": 30.0,
        "max": 120.0,
        "step": 1.0
    },
    {
        "key": "distanceEnabled",
        "name": "Habilitar anulación de distancia",
        "type": "bool"
    },
    {
        "key": "distanceValue",
        "name": "Valor de anulación de distancia (si está habilitado)",
        "type": "number",
        "min": 10.0,
        "max": 1000.0,
        "step": 10.0
    }
];
