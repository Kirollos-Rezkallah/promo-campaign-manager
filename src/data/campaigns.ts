import type { Campaign } from "../types/Campaign";

export const campaigns: Campaign[] = [
  {
    id: "1",
    name: "Summer Boost",
    status: "active",
    budget: 10000,
    spent: 4500,
  },
  {
    id: "2",
    name: "Back to School",
    status: "paused",
    budget: 5000,
    spent: 1200,
  },
  {
    id: "3",
    name: "Flash Friday",
    status: "active",
    budget: 15000,
    spent: 15000,
  },
];
