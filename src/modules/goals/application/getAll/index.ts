import { GoalRepository } from '../../domain/goalRepository';
import { Goal } from '../../domain/goal';
import { GoalResponse } from '../../domain/goalResponse';

export async function getAll(
  goalRepository: GoalRepository
): Promise<Goal[] | null> {
  try {
    const goals = await goalRepository.getAll();

    return goals;
  } catch (error) {
    throw new Error(
      `Error retrieving all goals in app layer, js error: ${error}`
    );
  }
}
