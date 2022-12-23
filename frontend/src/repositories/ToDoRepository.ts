import {
  InterfaceToDoCollectionResponse,
  InterfaceToDoDocumentResponse
} from "../models/interfaces/InterfaceToDoResponse";
import {FakeToDoResponse} from "../models/dummies/FakeToDoResponse";
import {BaseRepository} from "./BaseRepository";
import {AxiosInstance} from "axios";

export class ToDoRepository extends BaseRepository {
  endpoint: string;
  apiService: AxiosInstance;

  constructor(apiService: AxiosInstance) {
    super();
    this.endpoint = "to-do";
    this.apiService = apiService
  }

  getCollection = async (queryParams: Object = {}): Promise<InterfaceToDoCollectionResponse> => {
    if (import.meta.env.MODE == "development") {
      return {
        list_to_do: [
          FakeToDoResponse(),
          FakeToDoResponse()
        ],
        _total: 2
      }
    }

    const response = await this.apiGetCollection(queryParams)
    return response.data
  }

  getDocument = async (id: number): Promise<InterfaceToDoDocumentResponse> => {
    this.isGetIdDocumentValid(id);

    if (import.meta.env.MODE == "development") {
      const fakeToDo = FakeToDoResponse()
      fakeToDo.id = id
      return fakeToDo
    }

    const response = await this.apiGetDocument(id)
    return response.data
  }

}