"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const recipeSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    measurements: { type: String, required: true },
    cookingMethod: { type: String, required: true },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('recipe', recipeSchema);
//# sourceMappingURL=recipeDbModel.js.map