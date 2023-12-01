export interface Goal {
  userId: number;
  id: number;
  author: string;
  title: string;
  description: string;
  reminder?: Date;
  deadline: Date;
}
