import type { Campaign } from "../types/Campaign";
import "../styles/CampaignCard.css"; // Optional: add styles here

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const percentageUsed = Math.min(
    Math.round((campaign.spent / campaign.budget) * 100),
    100
  );

  return (
    <div className="campaign-card">
      <h3>{campaign.name}</h3>
      <p>
        Status: <strong>{campaign.status}</strong>
      </p>
      <p>Budget: ₽{campaign.budget.toLocaleString()}</p>
      <p>
        Spent: ₽{campaign.spent.toLocaleString()} ({percentageUsed}%)
      </p>
      <div className="progress-bar">
        <div className="fill" style={{ width: `${percentageUsed}%` }} />
      </div>
    </div>
  );
};
