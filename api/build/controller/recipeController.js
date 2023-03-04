"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRecipe = exports.getRecipe = exports.getRecipes = exports.findRecipesController = void 0;
const recipeService_1 = require("../service/recipeService");
const uuid_1 = require("uuid");
const validation_1 = require("../utils/validation");
const findRecipesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //call recipe service 
    console.log('getRecipes function called');
    const request = JSON.parse(JSON.stringify(req.body));
    if (request && request.searchTerm) {
        const searchResultsDb = yield (0, recipeService_1.searchForRecipeDb)(request.searchTerm, next);
        console.log(`@@@@@@@@ allResultsDb::: ${JSON.stringify(searchResultsDb)} &&&& TYPEOF::${typeof searchResultsDb}`);
        const searchResults = searchResultsDb.map((searchResult) => {
            const mappedResults = {
                id: searchResult.id,
                title: searchResult.title,
                ingredients: searchResult.ingredients,
                measurements: searchResult.measurements,
                cookingMethod: searchResult.cookingMethod
            };
            return mappedResults;
        });
        console.log(JSON.stringify(searchResults));
        res.status(200).json(searchResults);
    }
    else {
        console.error('Error: invalid parameter provided');
        next('Error: parameter required');
    }
});
exports.findRecipesController = findRecipesController;
const getRecipes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //call recipie service 
    console.log('getRecipes function called');
    const allResultsDb = yield (0, recipeService_1.getAllRecipesService)(next);
    console.log(`@@@@@@@@ allResultsDb::: ${JSON.stringify(allResultsDb)} &&&& TYPEOF::${typeof allResultsDb}`);
    const allReccipes = allResultsDb.map((result) => {
        const mappedResults = {
            id: result.id,
            title: result.title,
            ingredients: result.ingredients,
            measurements: result.measurements,
            cookingMethod: result.cookingMethod
        };
        return mappedResults;
    });
    JSON.stringify(allReccipes);
    res.status(200).json(allReccipes);
});
exports.getRecipes = getRecipes;
const getRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //call recipie service 
    console.log('getRecipe function called');
    const recipeId = req.params.recipeId;
    if (recipeId) {
        const searchResults = yield (0, recipeService_1.getRecipeService)(recipeId, next);
        res.status(201).json(searchResults);
    }
    else {
        console.error('Error: invalid parameter provided');
        next('Error: parameter required');
    }
});
exports.getRecipe = getRecipe;
const addRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //call recipie service 
    console.log('addRecipe function called');
    const valid = (0, validation_1.validateRequest)(req.body);
    if (valid) {
        const newRecipe = req.body;
        const recipeId = (0, uuid_1.v4)();
        const searchResults = yield (0, recipeService_1.addRecipeService)(recipeId, newRecipe, next);
        res.status(200).json(searchResults);
    }
    else {
        console.error('Error: required fields not found when validated');
        next('Error: payload is incorrect');
    }
});
exports.addRecipe = addRecipe;
//# sourceMappingURL=recipeController.js.map