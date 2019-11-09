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
const location_input_1 = require("./location.input");
let PlaceInput = class PlaceInput {
};
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], PlaceInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], PlaceInput.prototype, "logo", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], PlaceInput.prototype, "phone", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], PlaceInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], PlaceInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", Array)
], PlaceInput.prototype, "gastronomie", void 0);
__decorate([
    type_graphql_1.Field(type => location_input_1.LocationInput, { nullable: true }),
    __metadata("design:type", location_input_1.LocationInput)
], PlaceInput.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", String)
], PlaceInput.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], PlaceInput.prototype, "cpc", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", String)
], PlaceInput.prototype, "zone", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], PlaceInput.prototype, "likes", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], PlaceInput.prototype, "notation", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], PlaceInput.prototype, "travelTime", void 0);
__decorate([
    type_graphql_1.Field(type => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PlaceInput.prototype, "oceanNear", void 0);
__decorate([
    type_graphql_1.Field(type => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PlaceInput.prototype, "temporalyPlace", void 0);
PlaceInput = __decorate([
    type_graphql_1.InputType()
], PlaceInput);
exports.PlaceInput = PlaceInput;
//# sourceMappingURL=place.input.js.map