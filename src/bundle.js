const path = require('path');

class App {
    constructor(data = require('./lib/dataCompiler')) {
    this.data = require('./lib/dataCompiler');
    }

    /*
    constructor(version) {
        this.AppID = "770384411610316802";
        this.dataPath = path.join(process.env.APPDATA + "../../Local/Growtopia/");
        this.version = version;
        this.processTitle = "Growtopia-RPC by Phemus - " + this.version;
    }
    */

    async versionCheck() {
        return require('./lib/versionCheck')(this.version).then(newVer => {

            if (newVer) {
                return ">> Newer version of Growtopia-RPC is available: https://github.com/AykutSarac/Growtopia-RPC";
            } else {
                return ">> Version: " + this.version;
            }
        });
    }
}

const newApp = new App("v2.1");
module.exports = newApp;