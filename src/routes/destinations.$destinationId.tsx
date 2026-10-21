import { createFileRoute, Link, notFound, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { getPublicDestinations } from "@/lib/destinations.functions";

function DestinationError({ error }: ErrorComponentProps) {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-3xl font-semibold">This place could not be loaded</h1>
        <p className="mt-3 text-muted-foreground">
          {error instanceof Error ? error.message : "Destination information is temporarily unavailable."}
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-sm bg-primary px-4 py-2 text-primary-foreground">
          Back to Erode Explore
        </Link>
      </div>
    </main>
  );
}

export const Route = createFileRoute("/destinations/$destinationId")({
  loader: async ({ params }) => {
    const destinations = await getPublicDestinations();
    const destination = destinations.find((place) => place.id === params.destinationId);
    if (!destination) throw notFound();
    return { destination, destinations };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.destination.name ?? "Erode destination";
    const description = loaderData?.destination.description ?? "Explore a destination in Erode, Tamil Nadu.";
    return {
      meta: [
        { title: `${name} | Erode Explore` },
        { name: "description", content: description },
        { property: "og:title", content: `${name} | Erode Explore` },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: DestinationPage,
  errorComponent: DestinationError,
  notFoundComponent: () => (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-3xl font-semibold">Destination not found</h1>
        <p className="mt-3 text-muted-foreground">This place is not in the Erode Explore catalogue.</p>
        <Link to="/" className="mt-6 inline-flex rounded-sm bg-primary px-4 py-2 text-primary-foreground">
          Browse destinations
        </Link>
      </div>
    </main>
  ),
});

function DestinationPage() {
  const { destination, destinations } = Route.useLoaderData();
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    let disposed = false;
    const sendCatalogue = () => {
      if (!disposed) frame.contentWindow?.postMessage({ type: "erode:destinations", destinations }, window.location.origin);
    };
    frame.addEventListener("load", sendCatalogue);
    if (frame.contentDocument?.readyState === "complete") void sendCatalogue();
    return () => {
      disposed = true;
      frame.removeEventListener("load", sendCatalogue);
    };
  }, [destinations, destination.id]);

  return (
    <iframe
      key={destination.id}
      ref={frameRef}
      title={`${destination.name} destination details`}
      src={`/erode/index.html?destination=${encodeURIComponent(destination.id)}`}
      className="block h-dvh w-full border-0"
      aria-label={`${destination.name} destination details`}
    />
  );
}