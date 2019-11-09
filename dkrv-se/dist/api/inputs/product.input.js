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
const recipe_input_1 = require("./recipe.input");
const coordinate_input_1 = require("./coordinate.input");
const picture_input_1 = require("./picture.input");
let ProductInput = class ProductInput {
};
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], ProductInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], ProductInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], ProductInput.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], ProductInput.prototype, "gastronomies", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], ProductInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(type => [recipe_input_1.RecipeInput], { nullable: true }),
    __metadata("design:type", Array)
], ProductInput.prototype, "recipes", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Array)
], ProductInput.prototype, "spicy", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], ProductInput.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], ProductInput.prototype, "discount", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ProductInput.prototype, "quantity", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ProductInput.prototype, "size", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ProductInput.prototype, "notation", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ProductInput.prototype, "likes", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], ProductInput.prototype, "placeid", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], ProductInput.prototype, "placename", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], ProductInput.prototype, "placelogo", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], ProductInput.prototype, "placezone", void 0);
__decorate([
    type_graphql_1.Field(type => coordinate_input_1.CoordinateInput, { nullable: true }),
    __metadata("design:type", coordinate_input_1.CoordinateInput)
], ProductInput.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(type => picture_input_1.PictureInput, { nullable: true }),
    __metadata("design:type", picture_input_1.PictureInput)
], ProductInput.prototype, "picture", void 0);
__decorate([
    type_graphql_1.Field(type => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ProductInput.prototype, "menuAvailable", void 0);
ProductInput = __decorate([
    type_graphql_1.InputType()
], ProductInput);
exports.ProductInput = ProductInput;
//# sourceMappingURL=product.input.js.map