import { readFileSync } from "node:fs";
import { beforeEach, describe, expect, it } from "vitest";

const html = readFileSync("public/erode/index.html", "utf8");
const script = readFileSync("public/erode/script.js", "utf8");
const seed = JSON.parse(script.match(/let destinations = (\[[\s\S]*?\]);/)?.[1] ?? "[]");

function deliver(rows: unknown, origin = window.location.origin, source: Window | null = window.parent) {
  window.dispatchEvent(new MessageEvent("message", { origin, source, data: { type: "erode:destinations", destinations: rows } }));
}

function start() {
  document.documentElement.innerHTML = html;
  window.eval(script);
}

describe("Erode destination rules", () => {
  beforeEach(() => {
    localStorage.clear();
    window.history.replaceState({}, "", "/");
    Object.defineProperty(window.HTMLDialogElement.prototype, "showModal", {
      configurable: true,
      value() { this.setAttribute("open", ""); },
    });
  });

  it("includes the requested 20 destinations", () => {
    start();
    document.getElementById("view-all")?.click();
    expect(document.querySelectorAll(".destination-card")).toHaveLength(20);
  });

  it("stores favourites in localStorage and restores them", () => {
    start();
    document.querySelector<HTMLButtonElement>('[data-save="kodiveri"]')?.click();
    expect(JSON.parse(localStorage.getItem("erode-explore-favourites-v1") ?? "[]")).toEqual(["kodiveri"]);
    start();
    expect(document.querySelector('[data-save="kodiveri"]')?.getAttribute("aria-pressed")).toBe("true");
  });

  it("replaces the hosted catalogue without duplicating its 20 places", () => {
    start();
    deliver(seed);
    deliver(seed);
    document.getElementById("view-all")?.click();
    expect(document.querySelectorAll(".destination-card")).toHaveLength(20);
    expect(document.body.dataset['catalogueSource']).toBe("supabase");
  });

  it("preserves a saved favourite and active search when hosted data arrives", () => {
    start();
    document.querySelector<HTMLButtonElement>('[data-save="kodiveri"]')?.click();
    const search = document.getElementById("search-input") as HTMLInputElement;
    search.value = "Kodiveri";
    search.dispatchEvent(new Event("input"));
    deliver(seed);
    expect(document.querySelectorAll(".destination-card")).toHaveLength(1);
    expect(document.querySelector('[data-save="kodiveri"]')?.getAttribute("aria-pressed")).toBe("true");
  });

  it("rejects catalogue messages from other websites", () => {
    start();
    deliver([], "https://untrusted.example");
    document.getElementById("view-all")?.click();
    expect(document.querySelectorAll(".destination-card")).toHaveLength(20);
  });

  it("rejects catalogue messages not sent by the parent", () => {
    start();
    deliver([], window.location.origin, null);
    document.getElementById("view-all")?.click();
    expect(document.querySelectorAll(".destination-card")).toHaveLength(20);
  });

  it("keeps the fallback catalogue when remote rows contain duplicate IDs", () => {
    start();
    deliver([seed[0], seed[0]]);
    document.getElementById("view-all")?.click();
    expect(document.querySelectorAll(".destination-card")).toHaveLength(20);
    expect(document.body.dataset['catalogueSource']).toBe("fallback");
  });

  it("rejects executable links in destination data", () => {
    start();
    deliver([{ ...seed[0], source: "javascript:alert(1)" }]);
    document.getElementById("view-all")?.click();
    expect(document.querySelectorAll(".destination-card")).toHaveLength(20);
    expect(document.body.dataset['catalogueSource']).toBe("fallback");
  });

  it("renders a reusable details page using the selected destination record", () => {
    window.history.replaceState({}, "", "/?destination=kodiveri");
    start();
    const page = document.getElementById("destination-page");
    expect(page?.hidden).toBe(false);
    expect(page?.querySelector("h1")?.textContent).toBe("Kodiveri Dam");
    expect(page?.textContent).toContain("Kodiveri, near Gobichettipalayam");
    expect(page?.textContent).toContain("Opening hoursNot listed");
    expect(page?.textContent).toContain("Entry feeNot listed");
    expect(page?.querySelector('a[href^="https://www.google.com/maps/dir/"]')?.textContent).toContain("Get Directions");
  });

  it("keeps the existing detail dialog and offers its full destination page", () => {
    start();
    document.querySelector<HTMLButtonElement>('[data-details="kodiveri"]')?.click();
    expect(document.querySelector('#dialog-content a[href="?destination=kodiveri"]')?.textContent).toContain("Full destination page");
  });
});