"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCodeGenerator = void 0;
function statusCodeGenerator(err) {
    const referenceErr = err.toString().toLowerCase();
    if (referenceErr.includes("missing") || referenceErr.includes("invalid")) {
        return 400;
    }
    else if (referenceErr.includes("not found") ||
        referenceErr.includes("there are no")) {
        return 404;
    }
    else {
        return 500;
    }
}
exports.statusCodeGenerator = statusCodeGenerator;
