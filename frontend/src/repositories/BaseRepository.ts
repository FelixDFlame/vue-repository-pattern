import {AxiosInstance, AxiosResponse} from "axios";

export abstract class BaseRepository {
  abstract endpoint: string;
  abstract apiService: AxiosInstance;

  protected apiGetCollection = async (params: Object = {}): Promise<AxiosResponse> => {
    return await this.apiService.get(this.endpoint, { params })
  }

  protected apiGetDocument = async (id: number) => {
    const endpointDocument = `${this.endpoint}/${id}`;
    return await this.apiService.get(endpointDocument);
  }

  protected isGetIdDocumentValid = (id: number) => {
    if (!id) {
      throw new Error("Id not Valid")
    }
  }

}