"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Waziup_1 = require("./Waziup");
async function connect(settings) {
    if (settings) {
        var host = settings.host;
    }
    else {
        var host = "";
    }
    return new Waziup_1.Waziup(host, "");
}
exports.connect = connect;
//# sourceMappingURL=connect.js.map