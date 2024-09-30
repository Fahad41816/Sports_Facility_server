"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./routers"));
const NotFoundHandler_1 = __importDefault(require("./MeddleWare/NotFoundHandler"));
const GlobalErrorHandler_1 = __importDefault(require("./MeddleWare/GlobalErrorHandler"));
// app
const app = (0, express_1.default)();
// madelware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', routers_1.default);
app.get('/', (req, res) => {
    res.send('Assignment-3');
});
app.use(NotFoundHandler_1.default);
app.use(GlobalErrorHandler_1.default);
exports.default = app;
