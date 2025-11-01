'use server';
/**
 * @fileOverview Parses a document and allows the user to provide feedback and re-parse until the document is accurately represented.
 *
 * - parseDocumentAndGetFeedback - A function that handles the document parsing and feedback process.
 */

import {ai} from '@/ai/genkit';
import {
  ParseDocumentAndGetFeedbackInputSchema,
  type ParseDocumentAndGetFeedbackInput,
  ParseDocumentAndGetFeedbackOutputSchema,
  type ParseDocumentAndGetFeedbackOutput
} from './types';

export async function parseDocumentAndGetFeedback(
  input: ParseDocumentAndGetFeedbackInput
): Promise<ParseDocumentAndGetFeedbackOutput> {
  return parseDocumentAndGetFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'parseDocumentAndGetFeedbackPrompt',
  input: {schema: ParseDocumentAndGetFeedbackInputSchema},
  output: {schema: ParseDocumentAndGetFeedbackOutputSchema},
  prompt: `You are an AI document parser specializing in healthcare requirements documents.

  Your task is to parse the provided document and extract its content in a structured, human-readable format.
  Take into account any user feedback provided to correct previous parsing errors.

  Document: {{media url=documentDataUri}}

  {{#if userFeedback}}
  User Feedback: {{{userFeedback}}}
  Consider the feedback above when parsing the document. Focus on addressing the specific issues mentioned.
  {{/if}}
  `,
});

const parseDocumentAndGetFeedbackFlow = ai.defineFlow(
  {
    name: 'parseDocumentAndGetFeedbackFlow',
    inputSchema: ParseDocumentAndGetFeedbackInputSchema,
    outputSchema: ParseDocumentAndGetFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
