export interface InterfaceToDoDocumentResponse {
  id: number,
  title: string | null,
  description: string | null,
  created_by: string | null
}

export interface InterfaceToDoCollectionResponse {
  list_to_do: Array<InterfaceToDoDocumentResponse>,
  _total: number
}
