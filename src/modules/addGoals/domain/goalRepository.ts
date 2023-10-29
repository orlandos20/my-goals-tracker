import { Goal } from './goal';
import { GoalDataCreate } from './goalCreate';
import { GoalResponse } from './goalResponse';

export interface GoalRepository {
  create: (goal: GoalDataCreate) => Promise<GoalResponse>;
  get: (goalId: number) => Promise<Goal | undefined>;
  getByUser: (userId: number) => Promise<Goal[]>;
  deleteGoal: (goalId: number) => Promise<Goal | undefined>;
}
