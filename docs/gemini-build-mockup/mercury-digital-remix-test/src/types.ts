/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'mercury' | 'customers' | 'about' | 'contact';

export interface CustomerType {
  id: string;
  title: string;
  description: string;
  minAssets: string;
  focusArea: string;
  metrics: { label: string; value: string }[];
  quote: string;
  author: string;
  role: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bg: string;
  philosophy: string;
  bio: string;
}

export interface OutcomeCaseStudy {
  id: string;
  clientType: string;
  objective: string;
  duration: string;
  performance: string;
  narrative: string;
  allocation: { asset: string; percentage: number; color: string }[];
}

export interface AIScenario {
  id: string;
  title: string;
  marketEvent: string;
  thoughtSteps: string[];
  workflowOutput: string;
  estimatedReturn: string;
}
