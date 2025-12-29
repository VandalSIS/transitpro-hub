import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'ro', label: 'RO', flag: '🇲🇩' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <Globe className="w-4 h-4 text-steel-light mr-1" />
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
              language === lang.code
                ? 'text-accent bg-accent/20'
                : 'text-steel-light hover:text-accent'
            }`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-steel-light/50 mx-0.5">|</span>
          )}
        </span>
      ))}
    </div>
  );
}

