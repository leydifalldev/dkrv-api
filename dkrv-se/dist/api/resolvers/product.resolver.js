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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const gateway_grpc_client_1 = require("../../gateway/gateway.grpc.client");
const objects_1 = require("../objects");
const inputs_1 = require("../inputs");
let ProductResolver = class ProductResolver {
    onModuleInit() {
        this.productService = this.client.getService('ProductService');
    }
    async products() {
        const response = await this.productService.search({}).toPromise();
        common_1.Logger.log(response);
        return response.products || [];
    }
    async getProduct(id) {
        common_1.Logger.log(id);
        const response = await this.productService.get({ id }).toPromise();
        common_1.Logger.log(response);
        return response;
    }
    async createProduct(product) {
        common_1.Logger.log(product);
        const response = await this.productService.add({ product }).toPromise();
        common_1.Logger.log(response);
        return response;
    }
    async updateProduct(product) {
        common_1.Logger.log(product);
        const response = await this.productService.update({ product }).toPromise();
        common_1.Logger.log(response);
        return response;
    }
    async deleteProduct(id) {
        common_1.Logger.log(id);
        const response = await this.productService.delete({ id }).toPromise();
        common_1.Logger.log(response);
        return response;
    }
};
__decorate([
    microservices_1.Client(gateway_grpc_client_1.ProductGrpcClientOptions),
    __metadata("design:type", Object)
], ProductResolver.prototype, "client", void 0);
__decorate([
    graphql_1.Query(returns => [objects_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "products", null);
__decorate([
    graphql_1.Mutation(returns => objects_1.ProductDetailResponse),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProduct", null);
__decorate([
    graphql_1.Mutation(returns => objects_1.ProductCreateResponse),
    __param(0, graphql_1.Args('product')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.ProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    graphql_1.Mutation(returns => objects_1.ProductUpdateResponse),
    __param(0, graphql_1.Args('product')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.ProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    graphql_1.Mutation(returns => objects_1.ProductDeleteResponse),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
ProductResolver = __decorate([
    graphql_1.Resolver(of => objects_1.Product)
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.resolver.js.map