import { ToDoResponse } from '../responses/ToDoReponse';
import { faker } from '@faker-js/faker';

export function FakeToDoResponse(): ToDoResponse {
    return new ToDoResponse({
        id: faker.datatype.number(),
        title: faker.name.fullName(),
        description: faker.name.fullName(),
        created_by: faker.name.fullName()
    })
}

