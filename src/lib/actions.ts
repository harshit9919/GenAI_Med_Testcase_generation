'use server';

import { 
  parseDocumentAndGetFeedback
} from '@/ai/flows/parse-document-and-get-feedback';
import type { ParseDocumentAndGetFeedbackInput } from '@/ai/flows/types';

import {
  generateTestCases
} from '@/ai/flows/generate-test-cases-from-parsed-requirements';
import type { GenerateTestCasesInput } from '@/ai/flows/types';

import {
  refineGeneratedTestCasesWithFeedback
} from '@/ai/flows/refine-generated-test-cases-with-feedback';
import type { RefineGeneratedTestCasesWithFeedbackInput } from '@/ai/flows/types';

import {
  analyzeCompliance
} from '@/ai/flows/analyze-compliance-flow';
import type { AnalyzeComplianceInput } from '@/ai/flows/types';


import {
  exportToJira
} from '@/ai/flows/export-to-jira-flow';
import type { ExportToJiraInput } from '@/ai/flows/types';


export async function parseDocumentAction(input: ParseDocumentAndGetFeedbackInput) {
  try {
    const output = await parseDocumentAndGetFeedback(input);
    return { parsedContent: output.parsedContent };
  } catch (error) {
    console.error(error);
    return { error: error instanceof Error ? error.message : 'An unknown error occurred during parsing.' };
  }
}

export async function generateTestCasesAction(input: GenerateTestCasesInput) {
  try {
    const output = await generateTestCases(input);
    return { testCases: output.testCases };
  } catch (error) {
    console.error(error);
    return { error: error instanceof Error ? error.message : 'An unknown error occurred during test case generation.' };
  }
}

export async function refineTestCasesAction(input: RefineGeneratedTestCasesWithFeedbackInput) {
  try {
    const output = await refineGeneratedTestCasesWithFeedback(input);
    return { refinedTestCases: output.refinedTestCases };
  } catch (error) {
    console.error(error);
    return { error: error instanceof Error ? error.message : 'An unknown error occurred during test case refinement.' };
  }
}

export async function analyzeComplianceAction(input: AnalyzeComplianceInput) {
    try {
      const output = await analyzeCompliance(input);
      return { issues: output.issues };
    } catch (error) {
      console.error(error);
      return { error: error instanceof Error ? error.message : 'An unknown error occurred during compliance analysis.' };
    }
}

export async function exportToJiraAction(input: ExportToJiraInput) {
  try {
    const output = await exportToJira(input);
    return { createdIssues: output.createdIssues };
  } catch (error) {
    console.error(error);
    return { error: error instanceof Error ? error.message : 'An unknown error occurred during Jira export.' };
  }
}
