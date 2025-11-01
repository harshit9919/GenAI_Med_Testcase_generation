'use server';
/**
 * @fileOverview A Genkit flow for analyzing test cases against compliance standards.
 *
 * analyzeCompliance - A function that analyzes test cases.
 */

import {ai} from '@/ai/genkit';
import {
  AnalyzeComplianceInputSchema,
  type AnalyzeComplianceInput,
  AnalyzeComplianceOutputSchema,
  type AnalyzeComplianceOutput
} from './types';

export async function analyzeCompliance(
  input: AnalyzeComplianceInput
): Promise<AnalyzeComplianceOutput> {
  return analyzeComplianceFlow(input);
}

const analyzeCompliancePrompt = ai.definePrompt({
  name: 'analyzeCompliancePrompt',
  input: {schema: AnalyzeComplianceInputSchema},
  output: {schema: AnalyzeComplianceOutputSchema},
  prompt: `You are a compliance expert for medical device software. Your task is to analyze a set of test cases against common standards like FDA, IEC 62304, ISO 13485, and GDPR.

  Based on the provided requirements and test cases, identify any test cases that have compliance issues. For each issue, specify the test case ID, the standard it fails, and the reason for failure. If there are no issues, return an empty array for "issues".

  Context from Requirements Document:
  {{parsedRequirements}}

  Test Cases to Analyze:
  {{testCases}}
  `,
});

const analyzeComplianceFlow = ai.defineFlow(
  {
    name: 'analyzeComplianceFlow',
    inputSchema: AnalyzeComplianceInputSchema,
    outputSchema: AnalyzeComplianceOutputSchema,
  },
  async input => {
    const {output} = await analyzeCompliancePrompt(input);
    return output!;
  }
);
