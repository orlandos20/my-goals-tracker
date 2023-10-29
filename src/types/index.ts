export type RootStackParamList = {
  Home: undefined;
  AddGoals: undefined;
  GoalsDetails: undefined;
};

export interface GoalsType {
  id: string;
  title: string;
  description: string;
  reminder: Date;
  reminderRecurrent: boolean;
  estimatedDeadline: string | Date;
  completed: boolean;
}
