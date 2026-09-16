import Image from "next/image";

import { assetCatalog, type AssetKey } from "@/data/assets";

export type AssetPlaceholderProps = {
  assetKey: AssetKey;
  className?: string;
  decorative?: boolean;
  priority?: boolean;
};

export function AssetPlaceholder({
  assetKey,
  className = "",
  decorative = false,
  priority = false,
}: AssetPlaceholderProps) {
  const asset = assetCatalog[assetKey];

  if (asset.src) {
    return (
      <div
        className={`asset-frame ${className}`}
        style={{ aspectRatio: asset.aspectRatio }}
      >
        <Image
          src={asset.src}
          alt={decorative ? "" : asset.label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`asset-placeholder ${className}`}
      style={{ aspectRatio: asset.aspectRatio }}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : `${asset.label} — chờ asset thật`}
    >
      <span className="asset-placeholder__mark" aria-hidden="true">
        CV
      </span>
      <span className="asset-placeholder__label">Asset chờ thay</span>
      <strong className="asset-placeholder__key">{assetKey}</strong>
    </div>
  );
}
