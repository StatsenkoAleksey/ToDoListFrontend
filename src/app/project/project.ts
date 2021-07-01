export class Todo {

  id: number;
  text: string;
  isCompleted: boolean

}

export class Project {
  
  id: number;
  title: string;
  todos: Todo[]

}

export const SERVER_URL = 'https://enigmatic-ocean-79294.herokuapp.com'

// export const SERVER_URL = 'localhost:3000'

export const LOCAL_URL = '../assets/projects.json'