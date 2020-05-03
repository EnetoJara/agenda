import { BuildOptions, Model, Sequelize } from "sequelize";
import Bluebird from "bluebird";
import {Response} from "express";

declare module "@eneto/api-rest" {
    interface ObjectLiteral extends Object {
        [x: string]: any;
    }

    interface ApiResponse<T> {
        data: T;
        statusCode?: number;
        path: string;
        timestamp?: Date;
        message?: string;
    }

    interface ListAttributes {
        name: string;
        description: string;
    }

    interface UsersAttributes {
        name: string;
        secondName?: string;
        lastName?: string;
        secondLastName?: string;
        email: string;
        address?: string;
    }

    interface BaseEntity<T> extends Model<T, T> {
        id: number;
        createdAt: Date;
        editedAt: Date;
    }

    type Repository<T> = typeof Model & {
        new (values?: object, options?: BuildOptions): BaseEntity<T>;
    };

    interface AbstractInterface<T> {
        getAll(): Bluebird<Repository<T>[]>;
        updateById(id: number): Bluebird<number>;
        getById(id: number): Bluebird<number>;
        deleteById(id: number): Bluebird<number>;
        save(data: Repository<T>): Bluebird<number>;
    }

    interface DB {
        Lists: Repository<ListAttributes>;
        Users: Repository<UsersAttributes>;
        sequelize: Sequelize;
    }

    type EndPointResponse = Promise<Response | void>;
}
