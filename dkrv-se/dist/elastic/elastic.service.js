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
const elasticsearch = require("elasticsearch");
let ElasticService = class ElasticService {
    constructor(host, index, type, mapping) {
        this.host = host;
        this.index = index;
        this.type = type;
        this.mapping = mapping;
        this.esclient = new elasticsearch.Client({
            host: process.env.ELASTICSEARCH_PRIMARY || 'http://localhost:9200',
        });
    }
    onModuleInit() {
        this.config();
    }
    ping() {
        this.esclient.ping({ requestTimeout: 3000 })
            .catch(err => {
            throw new common_1.HttpException({
                status: 'error',
                message: 'Unable to reach Elasticsearch cluster',
            }, 500);
        });
    }
    async config() {
        try {
            const result = await this.esclient.indices.exists({ index: this.index });
            if (result) {
                common_1.Logger.log(this.index + 'index already exists');
            }
            else {
                common_1.Logger.log(this.index + ' does not exists ====> creating ...');
                const createIndexResult = await this.esclient.indices.create({ index: this.index });
                if (createIndexResult && createIndexResult.acknowledged) {
                    try {
                        common_1.Logger.log(this.index + ' does not exists ====> creating ...');
                        const updateMappingResult = await this.putMapping(this.mapping);
                        common_1.Logger.log(this.index + ' creation result ====>');
                        common_1.Logger.log(updateMappingResult);
                    }
                    catch (e) {
                        common_1.Logger.log(this.index + ' error ', e);
                    }
                }
            }
        }
        catch (e) {
            common_1.Logger.log('Error to set config', e);
        }
    }
    async putMapping(mappingSchema) {
        try {
            common_1.Logger.log('Creating Mapping index');
            const mappingResult = await this.esclient.indices.putMapping(mappingSchema);
            if (mappingResult) {
                common_1.Logger.log('mapping creation successfully');
                common_1.Logger.log(mappingResult);
            }
            else {
                common_1.Logger.log('Cannot create mapping');
            }
        }
        catch (e) {
            common_1.Logger.log('Error=====>', e);
        }
    }
    getClient() {
        return this.esclient;
    }
    formatList(esresult) {
        const data = esresult.hits.hits.map((hit) => {
            hit._source.id = hit._id;
            return hit._source;
        });
        const resp = {
            total: data.length,
            data,
        };
        return resp;
    }
    async search(params) {
        const request = {
            index: this.index,
            _source: true,
            type: this.type,
            q: params.q,
            from: params.from || 0,
            size: params.size || 10,
        };
        try {
            const resp = await this.esclient.search(request);
            common_1.Logger.log(resp);
            return {
                total: resp.hits.hits.length,
                products: resp.hits.hits.map(hit => hit._source),
                status: 200,
                error: 'none',
            };
        }
        catch (e) {
            common_1.Logger.log(e);
            return {
                total: 0,
                products: null,
                status: 500,
                error: 'level-4',
            };
        }
    }
    async add(params) {
        try {
            const resp = await this.esclient.create({
                index: this.index,
                type: this.type,
                id: params.id,
                refresh: 'true',
                body: params,
            });
            common_1.Logger.log(resp);
            return {
                id: resp._id,
                payload: (resp.result === 'created'),
                status: 200,
                error: 'none',
            };
        }
        catch (e) {
            common_1.Logger.log(e);
            return {
                id: null,
                payload: false,
                status: e.statusCode,
                error: 'level-4',
            };
        }
    }
    async update(params) {
        try {
            const resp = await this.esclient.update({
                index: this.index,
                type: this.type,
                refresh: 'true',
                id: params.id,
                body: {
                    doc: params,
                },
            });
            return {
                status: 200,
                error: 'none',
                payload: (resp.result === 'updated'),
            };
        }
        catch (e) {
            common_1.Logger.log(e);
            return {
                status: e.statusCode,
                error: 'none',
                payload: null,
            };
        }
    }
    async delete(id) {
        try {
            const resp = await this.esclient.delete({
                index: this.index,
                type: this.type,
                refresh: 'true',
                id,
            });
            common_1.Logger.log(resp);
            return {
                status: 200,
                error: 'none',
                payload: (resp.result === 'deleted'),
            };
        }
        catch (e) {
            common_1.Logger.log(e);
            return {
                status: 500,
                payload: null,
                error: 'level-4',
            };
        }
    }
    async get(id) {
        try {
            const resp = await this.esclient.get({
                index: this.index,
                type: this.type,
                id,
            });
            return {
                status: 200,
                error: null,
                payload: resp._source,
            };
        }
        catch (e) {
            common_1.Logger.log(e);
            return {
                status: e.statusCode,
                error: 'level-4',
                payload: null,
            };
        }
    }
    searchErrorHandler(e) {
        if (e.statusCode === 404) {
            return {
                status: 404,
                error: 'Place Not Found',
                data: [],
            };
        }
        else if (e.statusCode === 405) {
            return {
                status: 405,
                error: 'No request id Found',
                data: [],
            };
        }
    }
};
ElasticService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [String, String, String, Object])
], ElasticService);
exports.ElasticService = ElasticService;
//# sourceMappingURL=elastic.service.js.map