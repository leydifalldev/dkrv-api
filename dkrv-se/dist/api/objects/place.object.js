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
const type_graphql_1 = require("type-graphql");
const location_object_1 = require("./location.object");
const product_object_1 = require("./product.object");
let Place = class Place {
};
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Place.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Place.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Place.prototype, "logo", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Place.prototype, "phone", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Place.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Place.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", Array)
], Place.prototype, "gastronomies", void 0);
__decorate([
    type_graphql_1.Field(type => location_object_1.Location, { nullable: true }),
    __metadata("design:type", location_object_1.Location)
], Place.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", String)
], Place.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Place.prototype, "cpc", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", String)
], Place.prototype, "zone", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Place.prototype, "likes", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Place.prototype, "notation", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Place.prototype, "travelTime", void 0);
__decorate([
    type_graphql_1.Field(type => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Place.prototype, "oceanNear", void 0);
__decorate([
    type_graphql_1.Field(type => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Place.prototype, "temporalyPlace", void 0);
__decorate([
    type_graphql_1.Field(type => [product_object_1.Product], { nullable: true }),
    __metadata("design:type", Array)
], Place.prototype, "products", void 0);
Place = __decorate([
    type_graphql_1.ObjectType()
], Place);
exports.Place = Place;
//# sourceMappingURL=place.object.js.map