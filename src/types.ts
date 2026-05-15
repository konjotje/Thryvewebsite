import { Type } from "@google/genai";

export interface SelfCheckScores {
  sleep: number;
  energy: number;
  training: number;
  nutrition: number;
  stress: number;
}

export interface SelfCheckResult {
  analysis: string;
  actionPoints: string[];
}
