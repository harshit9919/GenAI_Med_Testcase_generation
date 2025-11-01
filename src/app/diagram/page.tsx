"use client";

import { AppHeader } from '@/components/app/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileUp, Cpu, ListChecks, ShieldCheck, Share2 } from 'lucide-react';

const DiagramStep = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <Card className="flex flex-col items-center p-6 text-center bg-card/50">
    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
      <Icon className="h-8 w-8" />
    </div>
    <CardTitle className="mb-2 text-lg font-headline">{title}</CardTitle>
    <p className="text-sm text-muted-foreground">{description}</p>
  </Card>
);

const Connector = () => (
  <div className="flex items-center justify-center">
    <ArrowRight className="h-8 w-8 text-muted-foreground/50" />
  </div>
);

export default function DiagramPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-transparent">
      <AppHeader />
      <main className="flex flex-1 flex-col items-center gap-8 p-4 md:p-8">
        <div className="w-full max-w-7xl text-center">
          <h1 className="mb-4 font-headline text-4xl font-bold">
            Application Workflow
          </h1>
          <p className="text-lg text-muted-foreground">
            A visual representation of the test case generation and compliance process.
          </p>
        </div>

        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-11">
            <div className="md:col-span-2">
              <DiagramStep
                icon={FileUp}
                title="1. Upload"
                description="User uploads a software requirements document (PDF, DOCX, etc.)."
              />
            </div>
            <div className="hidden items-center md:flex md:col-span-1">
                <Connector />
            </div>
            <div className="md:col-span-2">
              <DiagramStep
                icon={Cpu}
                title="2. Parse & Review"
                description="An AI model parses the document. User can review and provide feedback for re-parsing."
              />
            </div>
            <div className="hidden items-center md:flex md:col-span-1">
                <Connector />
            </div>
            <div className="md:col-span-2">
              <DiagramStep
                icon={ListChecks}
                title="3. Generate Tests"
                description="AI generates structured test cases based on the parsed requirements. User can refine with feedback."
              />
            </div>
             <div className="hidden items-center md:flex md:col-span-1">
                <Connector />
            </div>
             <div className="md:col-span-2">
              <DiagramStep
                icon={ShieldCheck}
                title="4. Compliance Check"
                description="AI analyzes test cases against standards (FDA, GDPR). Issues are flagged for review and refinement."
              />
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
              <div className="flex items-center justify-center rotate-90 md:rotate-0">
                <ArrowRight className="h-8 w-8 text-muted-foreground/50" />
              </div>
          </div>


          <div className="mt-6 flex justify-center">
             <div className="w-full md:w-1/4">
                 <DiagramStep
                    icon={Share2}
                    title="5. Export"
                    description="Finalized test cases are exported to ALM tools like Jira."
                />
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}