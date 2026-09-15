import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CookiePreferences {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
}

interface CookieConsentContextType {
  consent: CookiePreferences | null;
  showBanner: boolean;
  settingsOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: Pick<CookiePreferences, 'statistics' | 'marketing'>) => void;
  openSettings: () => void;
  closeSettings: () => void;
}

const STORAGE_KEY = 'cookie-consent';

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

function readStoredConsent(): CookiePreferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookiePreferences>;
    if (typeof parsed.statistics !== 'boolean' || typeof parsed.marketing !== 'boolean') {
      return null;
    }
    return {
      necessary: true,
      statistics: parsed.statistics,
      marketing: parsed.marketing,
    };
  } catch {
    return null;
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookiePreferences | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setConsent(readStoredConsent());
    setHydrated(true);
  }, []);

  const persist = (value: CookiePreferences) => {
    setConsent(value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    setSettingsOpen(false);
  };

  const acceptAll = () => {
    persist({ necessary: true, statistics: true, marketing: true });
  };

  const rejectAll = () => {
    persist({ necessary: true, statistics: false, marketing: false });
  };

  const savePreferences = (prefs: Pick<CookiePreferences, 'statistics' | 'marketing'>) => {
    persist({ necessary: true, ...prefs });
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        showBanner: hydrated && consent === null,
        settingsOpen,
        acceptAll,
        rejectAll,
        savePreferences,
        openSettings: () => setSettingsOpen(true),
        closeSettings: () => setSettingsOpen(false),
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
