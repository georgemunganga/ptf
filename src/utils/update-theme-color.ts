import { hexTorgb } from '@/utils/hex-to-rgb';

export function updateThemeColor(
  primaryLighter: string,
  primaryLight: string,
  primaryDefault: string,
  primaryDark: string,
  primaryForeground: string
) {
  document.documentElement.style.setProperty(
    '--primary-dark',
    hexTorgb(primaryDark)
  );
  document.documentElement.style.setProperty(
    '--primary-light',
    hexTorgb(primaryLight)
  );
  document.documentElement.style.setProperty(
    '--primary-lighter',
    hexTorgb(primaryLighter)
  );
  document.documentElement.style.setProperty(
    '--primary-default',
    hexTorgb(primaryDefault)
  );
  document.documentElement.style.setProperty(
    '--primary-foreground',
    hexTorgb(primaryForeground)
  );
}
