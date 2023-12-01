import { GoalRepository } from '../domain/goalRepository';
import { Goal } from '../domain/goal';
import { GoalDataCreate } from '../domain/goalCreate';
import { GoalResponse } from '../domain/goalResponse';

export function createApiGoalRepository(): GoalRepository {
  const get = (goalId: Goal['id']): Promise<Goal> => {};

  const create = (goal: GoalDataCreate): Promise<GoalResponse> => {};

  const getByUser = (userId: number): Promise<Goal[]> => {};

  const deleteGoal = (goalId: Goal['id']): Promise<Goal> => {};

  return {
    get,
    create,
    getByUser,
    deleteGoal,
  };
}
