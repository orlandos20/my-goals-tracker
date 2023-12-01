import { GoalRepository } from '../../domain/goalRepository';
import { Goal } from '../../domain/goal';
import { GoalDataCreate } from '../../domain/goalCreate';
import { GoalResponse } from '../../domain/goalResponse';

export function createGoal(
  goalRepository: GoalRepository
): GoalRepository['create'] {
  return async (goal: GoalDataCreate): Promise<GoalResponse> => {
    const createdGoal = await goalRepository.create(goal);
    //TODO: creates a user repository to match the goals.
    // const commentCount = 0;
    // 	const author = await userRepository.get(post.userId);

    return {
      ...createdGoal,
    };
  };
}

export default createGoal;
