import { readFileSync } from "node:fs";
import { beforeEach, describe, expect, it } from "vitest";

const html = readFileSync("public/erode/index.html", "utf8");
const script = readFileSync("public/erode/script.js", "utf8");

function start() {
  document.documentElement.innerHTML = html;
  window.eval(script);
}

describe("Erode destination rules", () => {
  beforeEach(() => localStorage.clear());

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
});