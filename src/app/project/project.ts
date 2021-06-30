export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean
}

export interface Project {
  id: number;
  title: string;
  todos: Todo[]
}

export const SERVER_URL: string = 'https://enigmatic-ocean-79294.herokuapp.com/projects';

export const LOCAL_URL = '../../assets/projects.json'
