const BASE_URL = "https://pawbulance.com";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "@id": `${BASE_URL}/#business`,
    name: "Pawbulance Veterinary Clinic",
    description:
      "Premium female-owned veterinary clinic in JBR, Dubai. Offering general consultations, vaccinations, grooming, dental care, microchipping, diagnostics, health certificates, and pet taxi service.",
    url: BASE_URL,
    telephone: "+971547371109",
    email: "hello@pawbulance.ae",
    image: `${BASE_URL}/opengraph.jpg`,
    logo: `${BASE_URL}/favicon.svg`,
    priceRange: "$$",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Amwaj 2, Al Mamsha Street",
      addressLocality: "Jumeirah Beach Residence (JBR)",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.0762,
      longitude: 55.1318,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday"],
        opens: "09:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "131",
      bestRating: "5",
      worstRating: "1",
    },
    hasMap: "https://www.google.com/maps/place/Jumeirah+Beach+Residence,+Dubai",
    areaServed: [
      "Jumeirah Beach Residence",
      "Dubai Marina",
      "Bluewaters Island",
      "Palm Jumeirah",
      "Jumeirah",
      "Al Sufouh",
      "Jumeirah Lake Towers",
      "The Greens",
    ],
    sameAs: [
      "https://www.instagram.com/pawbulance",
      "https://www.facebook.com/pawbulance",
    ],
  };
}

export function getAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Pawbulance Veterinary Services",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "131",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah A." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "My cat had an emergency late in the evening and the Pawbulance team was incredible. The staff treated her with so much care and patience.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ahmed K." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "The pet taxi service saved us so much time. Extremely professional team and the clinic is spotless. Genuinely the best vet in Dubai.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Jessica R." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "The clinic is modern, clean and the veterinarians genuinely care about pets. Bella actually gets excited to go to the vet now!",
      },
    ],
  };
}

export function getFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  crumbs: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.url}`,
    })),
  };
}

export function getServiceSchema(service: {
  title: string;
  shortDesc: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDesc,
    url: `${BASE_URL}/services/${service.slug}`,
    provider: {
      "@type": "VeterinaryCare",
      name: "Pawbulance Veterinary Clinic",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  };
}
