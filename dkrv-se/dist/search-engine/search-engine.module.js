"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product/product.service");
const place_service_1 = require("./place/place.service");
const elastic_controller_1 = require("./elastic.controller");
let SearchEngineModule = class SearchEngineModule {
};
SearchEngineModule = __decorate([
    common_1.Module({
        controllers: [elastic_controller_1.SearchEngineController],
        providers: [place_service_1.PlaceStore, product_service_1.ProductStore],
    })
], SearchEngineModule);
exports.SearchEngineModule = SearchEngineModule;
//# sourceMappingURL=search-engine.module.js.map