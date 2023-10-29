import { Goal } from './goalCreate';
import { GoalResponse } from './goalResponse';

export interface GoalRepository {
  create: (goal: Goal) => Promise<GoalResponse>;
  get: (goalId: Goal['id']) => Promise<Goal | undefined>;
  getByUser: (userId: Goal['userId']) => Promise<Goal[]>;
  delete: (goalId: Goal['id']) => Promise<Goal | undefined>;
}
