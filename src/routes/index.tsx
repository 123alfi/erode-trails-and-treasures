import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Erode Explore – Discover the Beauty of Erode" },
      { name: "description", content: "Discover 20 destinations in Erode, Tamil Nadu. Explore rivers, temples, wildlife and local heritage, save favourites and plan your trip." },
      { property: "og:title", content: "Erode Explore – Discover the Beauty of Erode" },
      { property: "og:description", content: "Explore Erode’s rivers, temples and timeless traditions with an independent student travel guide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      title="Erode Explore tourism website"
      src="/erode/index.html"
      className="block h-dvh w-full border-0"
    />
  );
}
