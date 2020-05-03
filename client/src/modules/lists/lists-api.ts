import { AxiosResponse, AxiosRequestConfig } from "axios";
import { ListState, NewList } from "@eneto/api-client";
import { Api } from "../../utils/api";
import { apiConfig, API_LISTS } from "../../utils/constants";

/**
 * @description Typedef
 * @author Ernesto Jara Olveda
 */
class ListApi extends Api {
    public constructor (apiConfig: AxiosRequestConfig) {
        super(apiConfig);

        this.getListById = this.getListById.bind(this);
        this.getLists = this.getLists.bind(this);
        this.postNewList = this.postNewList.bind(this);

    }

    public getListById (id: number) {
        return this.get(`/api/v1/lists/${id}`)
            .then((response) => {
                return response.data;
            })
    }

    public getLists (): Promise<ListState[]> {
        return this.get<ListState[]>(API_LISTS)
            .then((lists: AxiosResponse<ListState[]>) => lists.data)
            .catch((error) => {
                throw error;
            });
    }

    public postNewList (name: string, description: string): Promise<number> {
        return this.post<number>(API_LISTS, { name, description }).then((response: AxiosResponse<number>) => response.status)
    }
}

export const listApi = new ListApi(apiConfig);
