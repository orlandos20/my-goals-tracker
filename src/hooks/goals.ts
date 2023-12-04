import { useState, useEffect } from 'react';

// import { createGoal } from 'src/modules/goals/application/create/create';
import { getAll } from 'src/modules/goals/application/getAll';
import { Goal } from 'src/modules/goals/domain/goal';
import { createApiGoalRepository } from 'src/modules/goals/infra/apiGoalRepository';

export const useGoals = () => {
  const [goals, setGoals] = useState<Goal[]>();
  const goalRepository = createApiGoalRepository();

  const retrieveGoals = async () => {
    const allGoals = await getAll(goalRepository);

    if (allGoals) {
      setGoals(allGoals);
    }
  };

  useEffect(() => {
    if (!goals) {
      retrieveGoals();
    }
  }, []);

  return {
    goals,
    goalRepository,
  };
};
