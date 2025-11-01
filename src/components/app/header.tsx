import { ShieldCheck, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export const AppHeader = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-4 md:px-6">
      <Link href="/" className="flex items-center gap-3">
        <ShieldCheck className="h-7 w-7 text-primary" />
        <h1 className="font-headline text-2xl font-semibold tracking-tight text-foreground">
          ComplianceAce
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <Button asChild variant="outline" size="sm">
            <Link href="/diagram">
                <LayoutDashboard className="mr-2 h-4 w-4"/>
                View Diagram
            </Link>
        </Button>
      </div>
    </header>
  );
};