export interface Goal {
  id: string | number[];
  userId: number;
  author: string;
  title: string;
  description: string;
  reminder?: Date;
  deadline: Date;
  completed: boolean;
  inProgress: boolean;
}
