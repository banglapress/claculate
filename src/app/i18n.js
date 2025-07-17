// app/i18n.js
import { createI18n } from 'next-international';

export const { useI18n, I18nProvider } = createI18n({
  en: () => import('./locales/en'),
  bn: () => import('./locales/bn'),
});
