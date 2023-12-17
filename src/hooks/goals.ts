import { useState, useEffect } from 'react';

import { createGoal } from 'src/modules/goals/application/create/create';
import { getAll } from 'src/modules/goals/application/getAll';
import { Goal } from 'src/modules/goals/domain/goal';
import { GoalDataCreate } from 'src/modules/goals/domain/goalCreate';
import { createApiGoalRepository } from 'src/modules/goals/infra/apiGoalRepository';

export const useGoals = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const goalRepository = createApiGoalRepository();

  const retrieveGoals = async () => {
    const allGoals = await getAll(goalRepository);
    setGoals((prevState) => (allGoals?.length ? allGoals : prevState));
  };

  const goalCreator = async (goal: GoalDataCreate) => {
    const createdGoal = await createGoal(goalRepository)(goal);

    if (createdGoal) {
      await retrieveGoals();

      return createdGoal;
    }
  };

  useEffect(() => {
    if (!goals?.length) {
      retrieveGoals();
    }
  }, [goals]);

  return {
    goals,
    retrieveGoals,
    goalCreator,
    goalRepository,
  };
};
