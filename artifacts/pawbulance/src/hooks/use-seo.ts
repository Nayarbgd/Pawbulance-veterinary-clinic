import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function useSEO({ title, description, canonical, ogImage, ogType = "website", noIndex = false }: SEOProps) {
  useEffect(() => {
    const base = "https://pawbulance.com";
    const url = canonical ? `${base}${canonical}` : base + window.location.pathname;
    const image = ogImage ?? `${base}/opengraph.jpg`;

    document.title = title;

    setMeta("description", description);
    setMeta("robots", noIndex ? "noindex,nofollow" : "index,follow");

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:image", image, "property");
    setMeta("og:site_name", "Pawbulance Veterinary Clinic Dubai", "property");

    setMeta("twitter:card", "summary_large_image", "name");
    setMeta("twitter:title", title, "name");
    setMeta("twitter:description", description, "name");
    setMeta("twitter:image", image, "name");

    setLink("canonical", url);
  }, [title, description, canonical, ogImage, ogType, noIndex]);
}
