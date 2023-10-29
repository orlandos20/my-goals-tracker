import { GoalRepository } from '../../domain/goalRepository';
import { Goal } from '../../domain/goal';
import { GoalResponse } from '../../domain/goalResponse';

export function getGoalById(
  goalRepository: GoalRepository
): (goalId: number) => Promise<Goal | undefined> {
  return async (goalId: number): Promise<Goal | undefined> => {
    const goal = await goalRepository.get(goalId);

    if (!goal) {
      throw new Error(`Post with id ${goalId} not found`);
    }

    //TODO: implements userRepository.
    // const [author, comments] = await Promise.all([
    //   userRepository.get(post.userId),
    //   commentRepository.getAllByPost(postId),
    // ]);

    // const postWithAuthorAndCommentCount = {
    //   ...post,
    //   author: {
    //     id: author?.id,
    //     name: author?.name,
    //   },
    //   commentCount: comments.length,
    // };

    return goal;
  };
}
