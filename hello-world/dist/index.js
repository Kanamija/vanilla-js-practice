"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(120000, 2020));
//# sourceMappingURL=index.js.map