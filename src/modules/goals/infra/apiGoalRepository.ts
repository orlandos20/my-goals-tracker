import * as SecureStore from 'expo-secure-store';

import { GoalRepository } from '../domain/goalRepository';
import { Goal } from '../domain/goal';
import { GoalDataCreate } from '../domain/goalCreate';
import { GoalResponse, GoalErrorResponse } from '../domain/goalResponse';

export function createApiGoalRepository(): GoalRepository {
  //TODO: Remove this ignore
  //@ts-ignore
  const get = async (goalId: Goal['id']): Promise<Goal> => {};

  const getAll = async (): Promise<Goal[] | null> => {
    const result = await SecureStore.getItemAsync('goals');

    return result ? JSON.parse(result) : result;
  };

  const create = async (goal: GoalDataCreate): Promise<GoalResponse> => {
    // SecureStore.deleteItemAsync('goals');
    const goalsSavedInLs = await getAll();
    const newState = [];

    console.log('goalsSavedInLs parsed --> ', goalsSavedInLs);

    if (goalsSavedInLs && goalsSavedInLs?.length) {
      newState.push(...goalsSavedInLs, goal);
    } else {
      newState.push(goal);
    }

    console.log('goalsSavedInLs --> ', newState);

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
    create,
    getByUser,
    deleteGoal,
  };
}
