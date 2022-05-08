const SettingsUI = require('tera-mod-ui').Settings;

exports.NetworkMod = function(mod) {
    function apply() {
        mod.clientInterface.configureCameraShake(mod.settings.shakeEnabled, mod.settings.shakePower, mod.settings.shakeSpeed);
        if (mod.settings.fovEnabled)
            mod.send('S_STEER_DEBUG_COMMAND', 1, { command: `fov ${mod.settings.fovValue}` });
        if (mod.settings.distanceEnabled)
            mod.send('S_DUNGEON_CAMERA_SET', 1, { enabled: true, default: mod.settings.distanceValue, max: mod.settings.distanceValue });
    }

    mod.hook('S_SPAWN_ME', 'event', () => { mod.setTimeout(() => apply(), 2000) });
    mod.hook('S_DEAD_LOCATION', 'event', () => { mod.setTimeout(() => apply(), 1) });
    mod.hook('C_PLAYER_FLYING_LOCATION', 4, ({ type }) => { 
        switch (type) {
            case 8:
                mod.setTimeout(() => apply(), 10);
                break;
            default:
                mod.setTimeout(() => apply(), 1);
                break;
        }
    });
    mod.hook('S_UNMOUNT_VEHICLE', 2, event => {
        if(mod.game.me.gameId === event.gameId) mod.setTimeout(() => apply(), 1);
    });

    mod.hook("S_STEER_DEBUG_COMMAND", "event", () => {
        if(mod.settings.fovEnabled) return false;
    });

    mod.hook("S_DUNGEON_CAMERA_SET", "event", () => {
        if(mod.settings.distanceEnabled) return false;
    });

    // Commands
    mod.command.add('camera', {
        $default() {
            if (ui)
                ui.show();
        },
        shake(mode, shakePower, shakeSpeed) {
            mod.settings.shakeEnabled = mode.toLowerCase() === 'on';
            mod.settings.shakePower = Number(shakePower) || 1.0;
            mod.settings.shakeSpeed = Number(shakeSpeed) || 1.0;

            mod.command.message(`Movimiento ${mod.settings.shakeEnabled ? 'activado' : 'desactivado'}!`);
            apply();
        },
        fov(value) {
            if (value === 'disable') {
                mod.settings.fovEnabled = false;
                mod.command.message(`¡FOV deshabilitado!`);
            } else {
                mod.settings.fovEnabled = true;
                mod.settings.fovValue = Number(value) || 71.0;
                mod.command.message(`FOV establecido en ${mod.settings.fovValue}!`);
            }

            apply();
        },
        distance(value) {
            if (value === 'disable') {
                mod.settings.distanceEnabled = false;
                mod.command.message(`¡Distancia desactivada!`);
            } else {
                mod.settings.distanceEnabled = true;
                mod.settings.distanceValue = Number(value) || 170.0;
                mod.command.message(`Distancia establecida en ${mod.settings.distanceValue}!`);
            }

            apply();
        }
    });

    // Settings UI
    let ui = null;
    if (global.TeraProxy.GUIMode) {
        ui = new SettingsUI(mod, require('./settings_structure'), mod.settings, { height: 280 });
        ui.on('update', settings => {
            mod.settings = settings;
            apply();
        });

        this.destructor = () => {
            if (ui) {
                ui.close();
                ui = null;
            }
        };
    }
}
