import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import katexStylesheetUrl from "katex/dist/katex.min.css";
import rootStylesheetUrl from "~/root.css";
import data from "~/data.json";
import { useState } from "react";
import { Sidepanel, links as sidepanelLinks } from "./components/Sidepanel";
import { RecursiveAccordian } from "./components/RecursiveAccordian";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: rootStylesheetUrl },
    { rel: "stylesheet", href: katexStylesheetUrl },
    // NOTE: Architect deploys the public directory to /_static/
    { rel: "icon", href: "/_static/favicon.ico" },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

type File = {
  name: string;
  contents: File[];
};

type LoaderData = {
  directories: string[];
};

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Sidepanel isOpen={isOpen}>
          <RecursiveAccordian files={data} />
        </Sidepanel>
        <button
          className={`expander margin-animation ${
            isOpen ? "margin-sidepanel-open" : "margin-sidepanel-close"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "👈" : "👉"}
        </button>
        <div className="main-content">
          <Outlet />
        </div>
      </body>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </html>
  );
}
