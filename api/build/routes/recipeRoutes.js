"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipeController_1 = require("../controller/recipeController");
const route = (0, express_1.Router)();
route.get('/recipes', recipeController_1.getRecipes);
route.get('/recipes/:recipeId', recipeController_1.getRecipe);
route.post('/recipes', recipeController_1.addRecipe);
route.post('/find/recipes', recipeController_1.findRecipesController);
exports.default = route;
//# sourceMappingURL=recipeRoutes.js.map