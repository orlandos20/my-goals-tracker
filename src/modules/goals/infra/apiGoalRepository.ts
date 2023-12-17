import * as SecureStore from 'expo-secure-store';

import { GoalRepository } from '../domain/goalRepository';
import { Goal } from '../domain/goal';
import { GoalDataCreate } from '../domain/goalCreate';
import { GoalResponse, GoalErrorResponse } from '../domain/goalResponse';

export function createApiGoalRepository(): GoalRepository {
  //TODO: Remove this ignore
  //@ts-ignore
  const get = async (goalId: Goal['id']): Promise<Goal | undefined> => {
    const allGoals = await SecureStore.getItemAsync('goals');
    const parsedGoals: Goal[] | null = allGoals && JSON.parse(allGoals);
    const goal = parsedGoals
      ? parsedGoals?.find((goal) => goal.id === goalId)
      : undefined;

    return goal;
  };

  const getAll = async (): Promise<Goal[] | null> => {
    const result = await SecureStore.getItemAsync('goals');

    return result ? JSON.parse(result) : result;
  };

  const create = async (goal: GoalDataCreate): Promise<GoalResponse> => {
    SecureStore.deleteItemAsync('goals');
    //TODO: Based on user profile (premium or not), implement the different logic for each case here.
    //example, if user is premium import and implemente a database connection to save the goals in a DB, else, use localStorage.
    const goalsSavedInLs = await getAll();
    const newState = [];

    if (goalsSavedInLs && goalsSavedInLs?.length) {
      newState.push(...goalsSavedInLs, goal);
    } else {
      newState.push(goal);
    }

    //TODO: receive userRepository and build a GoalDTO in order to build the GoalResponse;
    await SecureStore.setItemAsync('goals', JSON.stringify(newState));
    //TODO: Remove this ignore
    //@ts-ignore
    return goal;
  };

  //TODO: Remove this ignore
  //@ts-ignore
  const getByUser = async (userId: number): Promise<Goal[]> => {};
  //TODO: Remove this ignore
  //@ts-ignore
  const deleteGoal = async (goalId: Goal['id']): Promise<Goal> => {};

  return {
    get,
    getAll,
    create,
    getByUser,
    deleteGoal,
  };
}
