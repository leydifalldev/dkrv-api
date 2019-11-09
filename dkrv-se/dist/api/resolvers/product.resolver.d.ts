import { OnModuleInit } from '@nestjs/common';
import { Product, ProductDeleteResponse, ProductUpdateResponse, ProductCreateResponse, ProductDetailResponse } from '../objects';
import { ProductInput } from '../inputs';
export declare class ProductResolver implements OnModuleInit {
    private readonly client;
    private productService;
    onModuleInit(): void;
    products(): Promise<Product[]>;
    getProduct(id: string): Promise<ProductDetailResponse>;
    createProduct(product: ProductInput): Promise<ProductCreateResponse>;
    updateProduct(product: ProductInput): Promise<ProductUpdateResponse>;
    deleteProduct(id: string): Promise<ProductDeleteResponse>;
}
