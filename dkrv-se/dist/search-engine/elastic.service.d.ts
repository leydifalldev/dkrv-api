import { OnModuleInit } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';
import { ServiceResponse } from '../types/common.defs';
import { PlaceInput } from '../api/inputs';
export declare class ElasticService implements OnModuleInit {
    private index;
    private mapping;
    protected readonly esclient: Client;
    constructor(index: string, mapping: any);
    onModuleInit(): void;
    config(): Promise<void>;
    putMapping(mappingSchema: any): Promise<void>;
    getClient(): Client;
    formatList(esresult: any): any;
    search(params: any): Promise<ServiceResponse>;
    add(params: PlaceInput): Promise<ServiceResponse>;
    update(params: any): Promise<ServiceResponse>;
    delete(id: string): Promise<ServiceResponse>;
    get(id: string): Promise<ServiceResponse>;
    searchErrorHandler(e: any): {
        status: number;
        error: string;
        data: any[];
    };
}
