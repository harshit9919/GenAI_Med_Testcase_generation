/**
 * @fileOverview This file contains all the Zod schemas and TypeScript types for the Genkit flows.
 */
import {z} from 'genkit';

// Schemas for parse-document-and-get-feedback.ts
export const ParseDocumentAndGetFeedbackInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "A healthcare requirements document (PDF, Word, etc.) as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  userFeedback: z.string().optional().describe('Feedback from the user on the parsed content.'),
});
export type ParseDocumentAndGetFeedbackInput = z.infer<typeof ParseDocumentAndGetFeedbackInputSchema>;

export const ParseDocumentAndGetFeedbackOutputSchema = z.object({
  parsedContent: z.string().describe('The parsed content of the document.'),
});
export type ParseDocumentAndGetFeedbackOutput = z.infer<typeof ParseDocumentAndGetFeedbackOutputSchema>;


// Schemas for generate-test-cases-from-parsed-requirements.ts
export const GenerateTestCasesInputSchema = z.object({
  parsedRequirements: z
    .string()
    .describe('The parsed requirements document as a string.'),
});
export type GenerateTestCasesInput = z.infer<typeof GenerateTestCasesInputSchema>;

export const GenerateTestCasesOutputSchema = z.object({
  testCases: z
    .string()
    .describe('The generated test cases as a numbered, structured string.'),
});
export type GenerateTestCasesOutput = z.infer<typeof GenerateTestCasesOutputSchema>;

// Schemas for refine-generated-test-cases-with-feedback.ts
export const RefineGeneratedTestCasesWithFeedbackInputSchema = z.object({
  initialTestCases: z.string().describe('The initial set of generated test cases.'),
  feedback: z.string().describe('User feedback on the initial test cases, including corrections and suggestions.'),
  parsedRequirements: z.string().describe('The parsed requirements document to provide context.'),
});
export type RefineGeneratedTestCasesWithFeedbackInput = z.infer<typeof RefineGeneratedTestCasesWithFeedbackInputSchema>;

export const RefineGeneratedTestCasesWithFeedbackOutputSchema = z.object({
  refinedTestCases: z.string().describe('The refined set of test cases based on user feedback.'),
});
export type RefineGeneratedTestCasesWithFeedbackOutput = z.infer<typeof RefineGeneratedTestCasesWithFeedbackOutputSchema>;


// Schemas for analyze-compliance-flow.ts
const ComplianceIssueSchema = z.object({
  testCaseId: z.string().describe("The ID of the test case with the compliance issue (e.g., 'TC-1')."),
  standardId: z.string().describe("The ID of the compliance standard that failed (e.g., 'fda', 'gdpr')."),
  reason: z.string().describe("A brief explanation of why the test case fails the compliance check."),
});

export const AnalyzeComplianceInputSchema = z.object({
  testCases: z.string().describe('The full text of all generated test cases, separated by newlines.'),
  parsedRequirements: z.string().describe('The parsed requirements document for context.'),
});
export type AnalyzeComplianceInput = z.infer<typeof AnalyzeComplianceInputSchema>;

export const AnalyzeComplianceOutputSchema = z.object({
  issues: z.array(ComplianceIssueSchema).describe('A list of compliance issues found in the test cases.'),
});
export type AnalyzeComplianceOutput = z.infer<typeof AnalyzeComplianceOutputSchema>;


// Schemas for export-to-jira-flow.ts
const TestCaseSchema = z.object({
  id: z.string().describe("The ID of the test case (e.g., 'TC-1')."),
  title: z.string().describe('The title of the test case.'),
  content: z.string().describe('The full content of the test case.'),
});

const JiraIssueSchema = z.object({
  testCaseId: z.string(),
  jiraIssueKey: z.string(),
  jiraIssueUrl: z.string(),
});

export const ExportToJiraInputSchema = z.object({
  testCases: z.array(TestCaseSchema).describe('An array of test cases to be exported.'),
});
export type ExportToJiraInput = z.infer<typeof ExportToJiraInputSchema>;

export const ExportToJiraOutputSchema = z.object({
  createdIssues: z.array(JiraIssueSchema).describe('A list of created Jira issues.'),
});
export type ExportToJiraOutput = z.infer<typeof ExportToJiraOutputSchema>;
