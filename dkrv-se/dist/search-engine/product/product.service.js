"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const product_mapping_1 = require("./product.mapping");
const elastic_service_1 = require("../elastic.service");
let ProductStore = class ProductStore extends elastic_service_1.ElasticService {
    constructor() {
        super('product', product_mapping_1.default);
    }
};
ProductStore = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductStore);
exports.ProductStore = ProductStore;
//# sourceMappingURL=product.service.js.map