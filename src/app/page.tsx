import { CoreLoop } from "@/components/core-loop";
import { FlavorCollection } from "@/components/flavor-collection";
import { FeaturedStory } from "@/components/featured-story";
import { HeroSection } from "@/components/hero-section";
import { SeasonalSection } from "@/components/seasonal-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { UnlockStory } from "@/components/unlock-story";
import { VietnamJourney } from "@/components/vietnam-journey";
import { flavors } from "@/data/flavors";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CoreLoop />
        <FlavorCollection />
        <UnlockStory flavors={flavors} />
        <VietnamJourney />
        <FeaturedStory />
        <SeasonalSection />
      </main>
      <SiteFooter />
    </>
  );
}
