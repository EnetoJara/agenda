import { AxiosRequestConfig, AxiosResponse } from "axios";

import { Api } from "../../utils/api";
import { apiConfig } from "../../utils/constants";
import { UserState, NewUser } from '@eneto/api-client';

/**
 * @description Typedef
 * @author Ernesto Jara Olveda
 */
class UserApi extends Api {
    public constructor (apiConfig: AxiosRequestConfig) {
        super(apiConfig);

        this.getAllUsersByList = this.getAllUsersByList.bind(this);
        this.insertNewUser = this.insertNewUser.bind(this);
    }

    public getAllUsersByList (idList: number): Promise<UserState[]> {
        return this.get<UserState[]>(`/api/v1/users/${idList}`)
        .then((result: AxiosResponse<UserState[]>) => {
            return result.data
        });
    }

    public insertNewUser (user: NewUser): Promise<number> {
        return this.post<number>(`/api/v1/users`, {...user})
        .then((res: AxiosResponse<number>) => res.status)

    }
}

export const userApi = new UserApi(apiConfig);
