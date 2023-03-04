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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchForRecipeDb = exports.getAllRecipesService = exports.getRecipeService = exports.addRecipeService = void 0;
const recipeDbModel_1 = __importDefault(require("../models/recipeDbModel"));
const addRecipeService = (id, recipe, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('addRecipeService function called');
    const title = recipe.title;
    const ingredients = recipe.ingredients;
    const measurements = recipe.measurements;
    const cookingMethod = recipe.cookingMethod;
    try {
        recipeDbModel_1.default.create({
            id,
            title,
            ingredients,
            measurements,
            cookingMethod
        });
    }
    catch (e) {
        next(e);
    }
});
exports.addRecipeService = addRecipeService;
const getRecipeService = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getRecipeService function called');
    try {
        const result = yield recipeDbModel_1.default.findById(id).exec();
        console.log(JSON.stringify(result));
        return result;
    }
    catch (e) {
        next(e);
    }
});
exports.getRecipeService = getRecipeService;
const getAllRecipesService = (next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getAllRecipesService function called');
    try {
        const result = yield recipeDbModel_1.default.find().exec();
        console.log(JSON.stringify(result));
        return result;
    }
    catch (e) {
        next(e);
    }
});
exports.getAllRecipesService = getAllRecipesService;
const searchForRecipeDb = (searchTerm, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('searchForRecipeDb function called');
    try {
        const result = yield recipeDbModel_1.default
            .find({ $text: { $search: searchTerm } })
            .skip(20)
            .limit(10)
            .exec();
        console.log(JSON.stringify(result));
        return result;
    }
    catch (e) {
        next(e);
    }
});
exports.searchForRecipeDb = searchForRecipeDb;
//# sourceMappingURL=recipeService.js.map