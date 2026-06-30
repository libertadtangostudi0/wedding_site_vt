// src/components/ui/SafeHtml.tsx
import React from 'react';

interface SafeHtmlProps {
  html: string | null | undefined;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const SafeHtml: React.FC<SafeHtmlProps> = ({ 
  html, 
  className, 
  as: Tag = 'div' 
}) => {
  if (!html) return <Tag className={className} />;

  return (
    <Tag 
      className={className} 
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
};