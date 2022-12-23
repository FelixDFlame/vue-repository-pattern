import { InterfaceToDoDocumentResponse } from '../interfaces/InterfaceToDoResponse';
export class ToDoResponse implements InterfaceToDoDocumentResponse {
    id: number;
    title: string|null;
    description: string | null;
    created_by: string|null;

    constructor({id, title, description, created_by}: InterfaceToDoDocumentResponse = {id: 0, title: null, description: null, created_by: null}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.created_by = created_by;
    }
}