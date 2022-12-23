import {InterfaceToDoCollectionResponse, InterfaceToDoDocumentResponse} from "../interfaces/InterfaceToDoResponse";

export class ListToDoResponse implements InterfaceToDoCollectionResponse {
  _total: number;
  list_to_do: Array<InterfaceToDoDocumentResponse>;

  constructor({list_to_do, _total}: InterfaceToDoCollectionResponse = {list_to_do: [], _total: 0}) {
    this.list_to_do = list_to_do;
    this._total = _total;
  }
}