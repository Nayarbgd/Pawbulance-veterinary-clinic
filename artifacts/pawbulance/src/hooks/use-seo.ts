import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  schema?: object | object[];
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

function injectSchema(schema: object | object[]) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  const existing = document.querySelectorAll('script[data-schema="true"]');
  existing.forEach((el) => el.remove());
  schemas.forEach((s) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "true");
    script.textContent = JSON.stringify(s);
    document.head.appendChild(script);
  });
}

export function useSEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
  schema,
}: SEOProps) {
  useEffect(() => {
    const base = "https://pawbulance.com";
    const url = canonical ? `${base}${canonical}` : base + window.location.pathname;
    const image = ogImage ?? `${base}/opengraph.jpg`;

    document.title = title;

    setMeta("description", description);
    setMeta("robots", noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1");

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:image", image, "property");
    setMeta("og:site_name", "Pawbulance Veterinary Clinic Dubai", "property");
    setMeta("og:locale", "en_AE", "property");

    setMeta("twitter:card", "summary_large_image", "name");
    setMeta("twitter:title", title, "name");
    setMeta("twitter:description", description, "name");
    setMeta("twitter:image", image, "name");

    setLink("canonical", url);

    if (schema) {
      injectSchema(schema);
    }
  }, [title, description, canonical, ogImage, ogType, noIndex, schema]);
}
