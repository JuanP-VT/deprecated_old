"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const productCategoryRoute_1 = __importDefault(require("./routes/productCategoryRoute"));
//dotenv file
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.DB_PORT || 8800;
//setup JSON
app.use(express_1.default.json());
//set up CORS
app.use((0, cors_1.default)());
//mongodb connection
mongoose_1.default.connect((_a = process.env.MONGODB_CONNECTION_STRING) !== null && _a !== void 0 ? _a : "invalid url"); //typescript forcing to check nullish values;
app.get("/", (req, res) => {
    res.send("Express + Typescript server");
});
app.use("/product-category", productCategoryRoute_1.default);
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
