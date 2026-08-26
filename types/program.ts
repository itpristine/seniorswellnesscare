export interface GeneBiomarker {
  symbol: string;
  name: string;
  clinicalSignificance: string;
  actionableImpact: string;
}

export interface DiagnosticProgram {
  id: string;
  slug: string;
  name: string;
  clinicalCode: string;
  category: 'oncology' | 'pharmacology' | 'neurology' | 'immunology' | 'cardiovascular' | 'pulmonary' | 'metabolic' | 'endocrine' | 'ophthalmic';
  heroBadge: string;
  shortDescription: string;
  fullOverview: string;
  iconName: string;
  sampleTurnaround: string;
  specimenType: string;
  genesAnalyzed: GeneBiomarker[];
  clinicalIndications: string[];
  medicareCoverageCriteria: string;
  sampleReportSummary: {
    resultStatus: 'Pathogenic Variant Identified' | 'Moderate Risk Factor' | 'Negative / Standard Baseline';
    keyFinding: string;
    clinicalRecommendation: string;
  };
  keyStats: {
    label: string;
    value: string;
  }[];
}
