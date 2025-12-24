import { App } from "@/types";
import AppShowcase from "./AppShowcase";

interface FeaturedAppsProps {
  apps: App[];
}

export default function FeaturedApps({ apps }: FeaturedAppsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {apps.map((app) => (
        <AppShowcase key={app.id} app={app} />
      ))}
    </div>
  );
}
