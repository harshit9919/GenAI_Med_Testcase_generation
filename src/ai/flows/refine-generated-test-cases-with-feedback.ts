'use server';
/**
 * @fileOverview This flow refines generated test cases based on user feedback.
 *
 * - refineGeneratedTestCasesWithFeedback - This function takes generated test cases and user feedback, then refines the test cases.
 */

import {ai} from '@/ai/genkit';
import {
  RefineGeneratedTestCasesWithFeedbackInputSchema,
  type RefineGeneratedTestCasesWithFeedbackInput,
  RefineGeneratedTestCasesWithFeedbackOutputSchema,
  type RefineGeneratedTestCasesWithFeedbackOutput
} from './types';


export async function refineGeneratedTestCasesWithFeedback(
  input: RefineGeneratedTestCasesWithFeedbackInput
): Promise<RefineGeneratedTestCasesWithFeedbackOutput> {
  return refineGeneratedTestCasesWithFeedbackFlow(input);
}

const refineGeneratedTestCasesWithFeedbackPrompt = ai.definePrompt({
  name: 'refineGeneratedTestCasesWithFeedbackPrompt',
  input: {schema: RefineGeneratedTestCasesWithFeedbackInputSchema},
  output: {schema: RefineGeneratedTestCasesWithFeedbackOutputSchema},
  prompt: `You are an expert QA engineer refining test cases based on user feedback.

  Here are the initial test cases:
  {{initialTestCases}}

  Here is the user feedback on the initial test cases:
  {{feedback}}

  Here are the parsed requirements for context:
  {{parsedRequirements}}

  Based on the user feedback and the parsed requirements, refine the test cases to better cover the requirements and compliance standards. Ensure the output is well-structured and numbered.
  `,
});

const refineGeneratedTestCasesWithFeedbackFlow = ai.defineFlow(
  {
    name: 'refineGeneratedTestCasesWithFeedbackFlow',
    inputSchema: RefineGeneratedTestCasesWithFeedbackInputSchema,
    outputSchema: RefineGeneratedTestCasesWithFeedbackOutputSchema,
  },
  async input => {
    const {output} = await refineGeneratedTestCasesWithFeedbackPrompt(input);
    return output!;
  }
);
