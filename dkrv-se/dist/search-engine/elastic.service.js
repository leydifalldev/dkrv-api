"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@elastic/elasticsearch");
class ElasticService {
    constructor(index, mapping) {
        this.index = index;
        this.mapping = mapping;
        this.esclient = new elasticsearch_1.Client({
            node: process.env.ELASTICSEARCH_PRIMARY || 'http://localhost:5800',
        });
    }
    onModuleInit() {
        this.config();
    }
    async config() {
        try {
            const result = await this.esclient.indices.exists({ index: this.index });
            if (result.statusCode === 404) {
                common_1.Logger.log(this.index + ' does not exists ====> creating ...');
                const createIndexResult = await this.esclient.indices.create({
                    index: this.index,
                });
                if (createIndexResult.statusCode === 200) {
                    try {
                        common_1.Logger.log('CREATE MAPPING IN PROGRESS ...');
                        await this.putMapping(this.mapping);
                        common_1.Logger.log(`MAPPING ADDED for ${this.index}`);
                    }
                    catch (e) {
                        common_1.Logger.log(this.index + ' error ', e);
                    }
                }
                else {
                    common_1.Logger.log(`CREATE INDEX FAILED for ${this.index}`);
                }
            }
            else {
                common_1.Logger.log(this.index + ' INDEX ALREADY EXISTS');
            }
        }
        catch (e) {
            common_1.Logger.log('Error to set config', e);
        }
    }
    async putMapping(mappingSchema) {
        try {
            common_1.Logger.log('Creating Mapping index');
            common_1.Logger.log(mappingSchema);
            const mappingResult = await this.esclient.indices.putMapping(mappingSchema);
            common_1.Logger.log('mappingResult LOG');
            common_1.Logger.log(mappingResult);
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
            q: params.q,
            from: params.from || 0,
            size: params.size || 10,
        };
        try {
            const resp = await this.esclient.search(request);
            common_1.Logger.log(resp);
            return {
                total: resp.body.hits.total,
                payload: resp.body.hits.hits.map(hit => hit._source),
                status: 200,
                error: 'none',
            };
        }
        catch (e) {
            common_1.Logger.log(e);
            return {
                total: 0,
                payload: null,
                status: 500,
                error: 'level-4',
            };
        }
    }
    async add(params) {
        common_1.Logger.log(params);
        try {
            const resp = await this.esclient.index({
                index: this.index,
                refresh: 'true',
                body: params,
            });
            common_1.Logger.log('resp log', resp.body);
            return {
                payload: resp.body,
                status: 200,
                error: 'none',
            };
        }
        catch (e) {
            common_1.Logger.log('error', e);
            return {
                payload: null,
                status: e.statusCode,
                error: 'level-4',
            };
        }
    }
    async update(params) {
        try {
            const resp = await this.esclient.update({
                index: this.index,
                refresh: 'true',
                id: params.id,
                body: {
                    doc: params,
                },
            });
            return {
                status: 200,
                error: 'none',
                payload: resp.body,
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
                refresh: 'true',
                id,
            });
            common_1.Logger.log(resp);
            return {
                status: 200,
                error: 'none',
                payload: resp.body,
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
                id,
            });
            return {
                status: resp.statusCode,
                error: null,
                payload: resp.body,
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
}
exports.ElasticService = ElasticService;
//# sourceMappingURL=elastic.service.js.map