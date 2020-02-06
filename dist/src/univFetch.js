var univFetch;
if (process.title !== "browser") {
    univFetch = require('node-fetch');
}
else {
    univFetch = window.fetch;
}
exports.fetch = univFetch;
//# sourceMappingURL=univFetch.js.map