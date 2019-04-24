export interface UpdateUser {
  _id: string;
  userName: string;
  login: string;
  password: string;
  role: string;
}

export interface UpdateProject {
  _id: string;
  projectName: string;
  users: string[];
}
