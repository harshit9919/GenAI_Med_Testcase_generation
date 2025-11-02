GenAI_Medical_Testcase_Generation

AI-powered Requirement → Test Case Generation for Regulated Healthcare Software

What is this?

AutoMed TestGen AI is an end-to-end system that automatically converts healthcare software requirements (PDF / Docx / CSV / text) into structured, traceable, compliance-aligned test cases — using RAG + TypeScript.

This project is built for regulated environments (FDA / IEC 62304 / ISO 13485 / ISO 27001).

Why?

Healthcare QA teams waste enormous time manually converting SRS/URS/FS/HLR/LLR requirements into test cases + traceability evidence.
AutoMed TestGen eliminates this.


System Flow (High Level)

User Uploads Input
PDF / DOCX / CSV / JSON / Markdown requirement files

AI Document Parser
System parses → shows parsed requirement chunks to user

user can approve OR

user can reject → give corrections → re-parse

RAG LLM Test Case Generator
Once approved → RAG converts requirement chunks into well-formatted test cases

structured output

numbered

tables if required

Compliance Engine
generated test cases are validated against:

FDA

IEC 62304

ISO 9001

ISO 13485

ISO 27001

User Review + Correction Loop
user can approve or reject test cases

if rejected → feedback loop → go again to LLM RAG

Final Output
on approval → test cases saved to DB and visible on dashboard
export to downstream systems (Jira, Polarion, ADO) planned
