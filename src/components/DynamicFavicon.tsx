"use client";

import { useEffect, useState } from 'react';

interface DynamicFaviconProps {
  imageUrl?: string;
}

export default function DynamicFavicon({ imageUrl }: DynamicFaviconProps) {
  const defaultFavicon = '/logo.svg';
  const [currentFavicon, setCurrentFavicon] = useState<string>(imageUrl || defaultFavicon);

  useEffect(() => {
    const newFavicon = imageUrl || defaultFavicon;
    setCurrentFavicon(newFavicon);

    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = newFavicon;
  }, [imageUrl]);

  return null;
}

