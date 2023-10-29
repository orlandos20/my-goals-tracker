import { useState, useCallback } from 'react';
import { GoalsType } from '../types';

export default function useGoals() {
  const [goals, setGoals] = useState<GoalsType[]>([] as GoalsType[]);

  const addGoals = useCallback((newGoal: GoalsType) => {
    setGoals((prev) => [...prev, newGoal]);
  }, []);

  const markGoalAsCompleted = useCallback((id: string) => {
    setGoals((prev) =>
      prev.map((goal) => {
        if (goal.id === id) {
          goal.completed = true;
        }

        return goal;
      })
    );
  }, []);

  const deleteGoal = useCallback((id: string) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  }, []);

  return {
    goals,
    addGoals,
    markGoalAsCompleted,
    deleteGoal,
  };
}
