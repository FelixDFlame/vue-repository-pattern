const generatedListToDo = () => {
  const tempListToDo = []
  for (let i = 1; i <= 100; i++) {
    tempListToDo.push({
      id: 1,
      title: `To Do ${i}`,
      created_by: "Felix",
    })
  }
  return tempListToDo
}

const listToDo = generatedListToDo();



