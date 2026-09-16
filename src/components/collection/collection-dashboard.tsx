"use client";

import { useMemo, useState } from "react";

import { CollectionJourney } from "@/components/collection/collection-journey";
import { CollectionSidebar } from "@/components/collection/collection-sidebar";
import { CollectionUnlock } from "@/components/collection/collection-unlock";
import {
  collectionFlavors,
  type CollectionFilter,
} from "@/data/collections";
import { collectionStories } from "@/data/stories";

const initialSelection = ["banh-chung", "banh-tet"];

export function CollectionDashboard() {
  const [filter, setFilter] = useState<CollectionFilter>("all");
  const [selectedIds, setSelectedIds] = useState<string[]>(initialSelection);

  const selectedFlavors = useMemo(
    () => selectedIds
      .map((id) => collectionFlavors.find((flavor) => flavor.id === id))
      .filter((flavor): flavor is NonNullable<typeof flavor> => Boolean(flavor)),
    [selectedIds],
  );

  const story = collectionStories.find((candidate) =>
    candidate.requiredFlavorIds.every((id) => selectedIds.includes(id)),
  );

  function toggleFlavor(id: string) {
    const flavor = collectionFlavors.find((item) => item.id === id);
    if (!flavor?.owned) return;

    setSelectedIds((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length < 2) return [...current, id];
      return [current[1], id];
    });
  }

  return (
    <div className="collection-dashboard section-shell">
      <CollectionSidebar
        items={collectionFlavors}
        filter={filter}
        selectedIds={selectedIds}
        onFilterChange={setFilter}
        onToggle={toggleFlavor}
      />
      <CollectionUnlock selectedFlavors={selectedFlavors} story={story} />
      <CollectionJourney />
    </div>
  );
}
