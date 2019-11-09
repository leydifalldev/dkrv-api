"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@nestjs/core");
const logging_interceptor_1 = require("../shared/logging.interceptor");
const place_resolver_1 = require("./resolvers/place.resolver");
const product_resolver_1 = require("./resolvers/product.resolver");
const place_service_1 = require("../search-engine/place/place.service");
let ApiModule = class ApiModule {
};
ApiModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: './schemas/schema.gql',
            }),
        ],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
            place_resolver_1.PlaceResolver,
            product_resolver_1.ProductResolver,
            place_service_1.PlaceStore,
        ],
    })
], ApiModule);
exports.ApiModule = ApiModule;
//# sourceMappingURL=api.module.js.map