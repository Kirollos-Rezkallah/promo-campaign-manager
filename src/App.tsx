import { useState, useMemo } from "react";
import "./styles/index.css";

import { campaigns as initialCampaigns } from "./data/campaigns";
import type { CampaignStatus } from "./types/Campaign";

import { CampaignCard } from "./components/CampaignCard";
import { Input } from "./ui-kit/Input/Input";
import { Button } from "./ui-kit/Button/Button";

function App() {
  const [statusFilter, setStatusFilter] = useState<"all" | CampaignStatus>(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCampaigns = useMemo(() => {
    return initialCampaigns.filter((c) => {
      const matchesStatus = statusFilter === "all" || c.status === statusFilter;
      const matchesSearch = c.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [statusFilter, searchQuery]);

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Promo Campaign Manager</h1>

      <section
        style={{
          marginBottom: "1rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Input
          id="search"
          label="Search"
          placeholder="Search campaigns"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Button
          variant={statusFilter === "all" ? "primary" : "secondary"}
          onClick={() => setStatusFilter("all")}>
          All
        </Button>
        <Button
          variant={statusFilter === "active" ? "primary" : "secondary"}
          onClick={() => setStatusFilter("active")}>
          Active
        </Button>
        <Button
          variant={statusFilter === "paused" ? "primary" : "secondary"}
          onClick={() => setStatusFilter("paused")}>
          Paused
        </Button>
      </section>

      <section>
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((c) => <CampaignCard key={c.id} campaign={c} />)
        ) : (
          <p>No campaigns found.</p>
        )}
      </section>
    </main>
  );
}

export default App;
