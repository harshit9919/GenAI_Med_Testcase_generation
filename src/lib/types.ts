export interface TestCase {
  id: string;
  title: string;
  content: string;
}

export interface ComplianceStandard {
  id: string;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ComplianceIssue {
  testCaseId: string;
  standardId: string;
  reason: string;
}

export interface Toolchain {
  id: string;
  name:string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
