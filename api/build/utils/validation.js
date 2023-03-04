"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const validateRequest = (requestBody) => {
    console.log('validateRequest function called');
    console.log(JSON.stringify(requestBody));
    const { title, ingredients, measurements, cookingMethod } = requestBody;
    if (!title || !ingredients || !measurements || !cookingMethod) {
        return false;
    }
    if (typeof title !== 'string' || typeof ingredients !== 'string' || typeof measurements !== 'string' || typeof cookingMethod !== 'string') {
        return false;
    }
    return true;
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validation.js.map