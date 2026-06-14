import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  imageUrl?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export const useSEO = ({ title, description, type = 'website', imageUrl, jsonLd }: SEOProps) => {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to locate or append meta tags in the document head
    const updateMetaTag = (attribute: 'name' | 'property', key: string, val: string) => {
      let el = document.querySelector(`meta[${attribute}="${key}"]`);
      let created = false;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, key);
        created = true;
      }
      el.setAttribute('content', val);
      if (created) {
        document.head.appendChild(el);
      }
    };

    // 2. Update Description Meta Tag
    updateMetaTag('name', 'description', description);

    // 3. Update Open Graph Meta Tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:url', window.location.href);
    const activeImageUrl = imageUrl || '/og-image.png';
    const absoluteImgUrl = activeImageUrl.startsWith('http') 
      ? activeImageUrl 
      : `${window.location.origin}${activeImageUrl.startsWith('/') ? '' : '/'}${activeImageUrl}`;
    updateMetaTag('property', 'og:image', absoluteImgUrl);
    updateMetaTag('name', 'twitter:image', absoluteImgUrl);

    // 4. Update Twitter Card Meta Tags
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);

    // 5. Update JSON-LD Script Block
    let jsonLdScript = document.getElementById('seo-jsonld') as HTMLScriptElement | null;
    if (jsonLdString) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = 'seo-jsonld';
        jsonLdScript.type = 'application/ld+json';
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = jsonLdString;
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }

    // Cleanup on unmount or dependency update
    return () => {
      if (jsonLdScript) {
        jsonLdScript.remove();
      }
    };
  }, [title, description, type, imageUrl, jsonLdString]);
};
