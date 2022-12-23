import express from "express";

const generatedListToDo = () => {
  const tempListToDo = []
  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const listDescriptionWord = description.split(' ');
  const wordCountDescription = description.split(' ').length

  for (let i = 1; i <= 100; i++) {
    const randomWordCount = Math.floor(Math.random() * wordCountDescription);
    const resDescription = listDescriptionWord.slice(0, randomWordCount ? randomWordCount : 1).join(' ');

    tempListToDo.push({
      id: i,
      title: `To Do ${i}`,
      description: resDescription,
      created_by: "Felix",
    })
  }
  return tempListToDo
}

const listToDo = generatedListToDo();

export const getToDoCollection = (req: express.Request, res: express.Response) => {
  // const params = req.params;
  const query = req.query;
  const queryOffset = query && query.offset ? parseInt(query.offset.toString()) : 1;
  const queryLimit = query && query.limit ? parseInt(query.limit.toString()) : 10;

  let resListToDo = [...listToDo];

  resListToDo = resListToDo.filter((toDo) => toDo.id >= queryOffset)
  resListToDo = resListToDo.slice(0, queryLimit);

  res.status(200);
  res.send({
    list_to_do: resListToDo,
    _total: listToDo.length
  });
}

export const getToDoDocument = (req: express.Request, res: express.Response) => {
  // request validator

  const idToDo = Number(req.params.id);

  // repository call
  const toDoFounded = listToDo.find((toDo) => toDo.id == idToDo)
  if (toDoFounded) {
    res.status(200);
    res.send(toDoFounded);
    return
  }
  res.status(404);
  res.send({message: "Data Not Found"});
  return
}