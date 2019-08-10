"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const elastic_client_1 = require("../elastic.client");
exports.retrieveAll = (from = 0, size = 20) => __awaiter(this, void 0, void 0, function* () {
    const result = yield elastic_client_1.default.search({
        index: 'product',
        body: {
            "from": from, "size": size,
            query: {
                match_all: {}
            }
        }
    });
    return result.body.hits.hits.map((hit) => hit._source);
});
