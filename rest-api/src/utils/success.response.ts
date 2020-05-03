import { ApiResponse } from "@eneto/api-rest";
import { OK, getStatusText } from "http-status-codes";

export class SuccessResponse<T> implements ApiResponse<T> {
    public data!: T;
    public statusCode!: number;
    public path!: string;
    public timestamp?: Date;
    public message?: string;
    public constructor (data: any) {
        Object.assign(this, data);
        this.toJSON = this.toJSON.bind(this);
    }

    public static fromJS<T>(data: ApiResponse<T>): SuccessResponse<T> {
        return new SuccessResponse<T>(data);
    }

    public toJSON (): ApiResponse<T> {
        return {
            data: this.data,
            statusCode: this.statusCode || OK,
            path: this.path,
            timestamp: this.timestamp || new Date(),
            message: this.message || getStatusText(OK),
        };
    }
}
