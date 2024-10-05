import { z } from 'zod';
import { useQuery } from 'react-query';

export const QuizSchema = z.object({
  type: z.string(),
  difficulty: z.string(),
  category: z.string(),
  questions: z.string(),
  correct_answer: z.string(),
  incorrect_answers: z.string(),
});

export type IQuizSchema = z.infer<typeof QuizSchema>;

export const QuizService = {
  useGet: () => {
    return useQuery<IQuizSchema>({
      queryKey: ['quiz'],
      queryFn: async () => {
        const res = await fetch(
          'https://opentdb.com/api.php?amount=10&type=multiple',
        );
        const data = await res.json();
        return QuizSchema.parse(data);
      },
    });
  },
};
