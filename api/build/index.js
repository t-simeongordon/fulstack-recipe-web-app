"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./utils/db");
// import searchTermRoutes from './routes/searchTermRoutes'
const morgan_1 = __importDefault(require("morgan"));
const recipeRoutes_1 = __importDefault(require("./routes/recipeRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use((0, body_parser_1.urlencoded)({ extended: false }));
app.use((0, body_parser_1.json)());
app.get('/health', (req, res) => {
    res.send('API service is up and running');
});
app.use("/sero/api", recipeRoutes_1.default);
app.use((req, res, next) => {
    next(Error('Error: incorrect endpoint'));
});
app.use((error, req, res, next) => {
    let errorMessage = 'Error: unknown error occurred server-side ';
    console.error(error);
    if (error instanceof Error)
        errorMessage = error.message;
    res.status(500).json(errorMessage);
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map