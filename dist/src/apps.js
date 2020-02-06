"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
async function getApps() {
    return api_1.get("apps");
}
exports.getApps = getApps;
//# sourceMappingURL=apps.js.map