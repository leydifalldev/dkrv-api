"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Client } = require('@elastic/elasticsearch');
const elastic = new Client({ node: 'http://localhost:9200' });
exports.default = elastic;
