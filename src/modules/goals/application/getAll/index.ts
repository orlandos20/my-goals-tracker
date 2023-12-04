import { GoalRepository } from '../../domain/goalRepository';
import { Goal } from '../../domain/goal';
import { GoalResponse } from '../../domain/goalResponse';

export async function getAll(
  goalRepository: GoalRepository
): Promise<Goal[] | null> {
  const goals = await goalRepository.getAll();

  if (!goals) {
    throw new Error(`Error retrieving all goals in app layer`);
  }

  return goals;
}
