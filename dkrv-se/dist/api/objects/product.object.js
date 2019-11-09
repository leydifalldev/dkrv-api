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
const recipe_type_1 = require("./recipe.type");
const coordinate_type_1 = require("./coordinate.type");
const picture_1 = require("./picture");
let Product = class Product {
};
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], Product.prototype, "gastronomies", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(type => [recipe_type_1.Recipe], { nullable: true }),
    __metadata("design:type", Array)
], Product.prototype, "recipes", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "spicy", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "discount", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "size", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "notation", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "likes", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "placeid", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "placename", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "placelogo", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "placezone", void 0);
__decorate([
    type_graphql_1.Field(type => coordinate_type_1.Coordinate, { nullable: true }),
    __metadata("design:type", coordinate_type_1.Coordinate)
], Product.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(type => picture_1.Picture, { nullable: true }),
    __metadata("design:type", picture_1.Picture)
], Product.prototype, "picture", void 0);
__decorate([
    type_graphql_1.Field(type => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "menuAvailable", void 0);
Product = __decorate([
    type_graphql_1.ObjectType()
], Product);
exports.Product = Product;
//# sourceMappingURL=product.object.js.map