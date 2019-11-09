import { OnModuleInit } from '@nestjs/common';
import * as elasticsearch from 'elasticsearch';
import { CreateResponse, UpdateResponse, DeleteResponse, DetailResponse, ListResponse } from 'src/types/common.defs';
export declare class ElasticService implements OnModuleInit {
    private host;
    private index;
    private type;
    private mapping;
    protected readonly esclient: elasticsearch.Client;
    constructor(host: string, index: string, type: string, mapping: any);
    onModuleInit(): void;
    ping(): void;
    config(): Promise<void>;
    putMapping(mappingSchema: any): Promise<void>;
    getClient(): any;
    formatList(esresult: any): any;
    search(params: any): Promise<ListResponse>;
    add(params: any): Promise<CreateResponse>;
    update(params: any): Promise<UpdateResponse>;
    delete(id: string): Promise<DeleteResponse>;
    get(id: string): Promise<DetailResponse>;
    searchErrorHandler(e: any): {
        status: number;
        error: string;
        data: any[];
    };
}
