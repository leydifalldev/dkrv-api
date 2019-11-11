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
const objects_1 = require("../objects");
const inputs_1 = require("../inputs");
const place_service_1 = require("../../search-engine/place/place.service");
let PlaceResolver = class PlaceResolver {
    constructor(placeStore) {
        this.placeStore = placeStore;
    }
    async places() {
        const response = await this.placeStore.search({});
        common_1.Logger.log(response);
        return response.payload || [];
    }
    async getPlace(id) {
        common_1.Logger.log(id);
        const response = await this.placeStore.get(id);
        common_1.Logger.log(response);
        return response.payload;
    }
    async createPlace(place) {
        const response = await this.placeStore.add(place);
        return response.payload;
    }
};
__decorate([
    graphql_1.Query(returns => [objects_1.Place]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlaceResolver.prototype, "places", null);
__decorate([
    graphql_1.Query(returns => objects_1.Place),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlaceResolver.prototype, "getPlace", null);
__decorate([
    graphql_1.Mutation(returns => String),
    __param(0, graphql_1.Args('place')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.PlaceInput]),
    __metadata("design:returntype", Promise)
], PlaceResolver.prototype, "createPlace", null);
PlaceResolver = __decorate([
    graphql_1.Resolver(of => objects_1.Place),
    __metadata("design:paramtypes", [place_service_1.PlaceStore])
], PlaceResolver);
exports.PlaceResolver = PlaceResolver;
//# sourceMappingURL=place.resolver.js.map