import { GoalRepository } from '../../domain/goalRepository';
import { Goal } from '../../domain/goal';
import { GoalResponse } from '../../domain/goalResponse';

export function createGoal(
  goalRepository: GoalRepository
): (goal: Goal) => Promise<Goal> {
  return async (goal: Goal): Promise<Goal> => {
    const createdGoal = (await goalRepository.create(goal)) as GoalResponse;
    //TODO: creates a user repository to match the goals.
    // const commentCount = 0;
    // 	const author = await userRepository.get(post.userId);

    return {
      ...createdGoal,
    };
  };
}

export default createGoal;
