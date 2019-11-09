"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const app_module_1 = require("./app.module");
const logging_interceptor_1 = require("./shared/logging.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
    app.use(helmet());
    const options = {
        origin: '*',
        methods: 'OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
    };
    app.enableCors(options);
    app.use(cookieParser());
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }));
    await app.listen(6000);
}
bootstrap();
//# sourceMappingURL=main.js.map