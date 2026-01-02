import React, { useEffect } from 'react';
import { CLINIC_INFO } from '../constants';

const SEO: React.FC = () => {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": CLINIC_INFO.name,
      "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
      "@id": "https://drfaragdental.com",
      "url": "https://drfaragdental.com",
      "telephone": CLINIC_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "التجمع الأول – محور مصطفى كامل – مول رقم 19",
        "addressLocality": "القاهرة",
        "addressRegion": "محافظة القاهرة",
        "postalCode": "11865",
        "addressCountry": "EG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.0600,
        "longitude": 31.4500
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "opens": "12:00",
        "closes": "22:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "118"
      },
      "priceRange": "$$"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SEO;