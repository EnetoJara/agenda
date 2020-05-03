import { INTERNAL_SERVER_ERROR, getStatusText } from "http-status-codes";
import { ApiResponse } from "@eneto/api-rest";

export class ErrorResponse<T> extends Error implements ApiResponse<T> {
    public data!: T;
    public statusCode?: number;
    public path!: string;
    public timestamp?: Date;
    public message!: string;
    public constructor (data: ApiResponse<T>) {
        super(data.message);
        Object.assign(this, data);
    }

    public toJSON (): ApiResponse<T> {
        return {
            data: this.data,
            statusCode: this.statusCode || INTERNAL_SERVER_ERROR,
            path: this.path,
            timestamp: this.timestamp || new Date(),
            message: this.message || getStatusText(INTERNAL_SERVER_ERROR),
        };
    }
}
