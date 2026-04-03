import type { DomainId } from "./domain";

export interface ReviewerContent {
  domain: DomainId;
  sections: ReviewerSection[];
}

export interface ReviewerSection {
  id: string;
  title: string;
  content: string[];
  services?: string[];
  keyPoints?: string[];
  examTips?: string[];
}
