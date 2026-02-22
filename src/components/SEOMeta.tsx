import { useEffect } from 'react';

interface SEOMetaProps {
    title: string;
    description?: string;
    url?: string;
}

export default function SEOMeta({ title, description, url }: SEOMetaProps) {
    useEffect(() => {
        // Update Document Title
        document.title = title;

        // Helper to update meta tags
        const updateMetaTag = (name: string, content: string, asProperty = false) => {
            const attribute = asProperty ? 'property' : 'name';
            let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        if (description) {
            updateMetaTag('description', description);
            updateMetaTag('og:description', description, true);
            updateMetaTag('twitter:description', description);
        }

        if (url) {
            updateMetaTag('og:url', `https://surajsuthar.com${url}`, true);
            updateMetaTag('twitter:url', `https://surajsuthar.com${url}`);
        }

        updateMetaTag('og:title', title, true);
        updateMetaTag('twitter:title', title);

    }, [title, description, url]);

    return null; // This component doesn't render any visible UI
}
