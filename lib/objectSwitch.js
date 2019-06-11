"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectSwitch(value, target, exec = false) {
    return target[value]
        ? (exec ? target[value]() : target[value])
        : (target.default ? (exec ? target.default() : target.default) : null);
}
exports.default = objectSwitch;
//# sourceMappingURL=objectSwitch.js.map