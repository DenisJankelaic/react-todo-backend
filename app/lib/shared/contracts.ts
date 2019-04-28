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

export interface UpdateTask {
  _id: string;
  userId: string;
  description: string;
  startDate: string;
  endDate: string;
  taskName: string;
  project: string;
  taskStatus: string;
  isCurrent: boolean;
  startStopHistory: string[];
}
