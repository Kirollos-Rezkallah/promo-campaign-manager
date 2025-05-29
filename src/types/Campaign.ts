export type CampaignStatus = "active" | "paused";

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  budget: number;
  spent: number;
}
