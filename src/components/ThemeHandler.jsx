'use client';

import { useEffect } from 'react';
import { initializeTheme } from './Theme';

export default function ThemeHandler() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return null;
}
