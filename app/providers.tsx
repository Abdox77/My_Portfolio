'use client';

import { ColorModeProvider } from '@/components/ui/color-mode';
import { LanguageProvider } from '@/contexts/LanguageContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ColorModeProvider>
        {children}
      </ColorModeProvider>
    </LanguageProvider>
  );
}
