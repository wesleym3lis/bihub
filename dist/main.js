"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const axios_1 = require("axios");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    axios_1.default.interceptors.request.use((config) => {
        console.log('Request:', config);
        return config;
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map