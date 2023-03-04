"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const dbUrl = process.env.MONGODB_URL;
if (!dbUrl) {
    throw new Error('No database URL provided');
}
const options = {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,
};
mongoose_1.default.connect(dbUrl, options)
    .then(() => console.log('Mongodb Connected!'));
// async function connectToDatabase(): Promise<typeof mongoose> {
//   
//   return await mongoose.connect(dbUrl, options);
// }
// export default connectToDatabase;
//# sourceMappingURL=db.js.map