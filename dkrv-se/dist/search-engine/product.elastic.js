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
const product_elastic_1 = require("./product.elastic");
let ProductService = class ProductService extends product_elastic_1.ElasticService {
    constructor() {
        super('http://localhost:5800', 'food', 'product', product_mapping_1.default);
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.elastic.js.map