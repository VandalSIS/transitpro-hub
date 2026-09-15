import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export default function CookieBanner() {
  const { t } = useLanguage();
  const {
    consent,
    showBanner,
    settingsOpen,
    acceptAll,
    rejectAll,
    savePreferences,
    openSettings,
    closeSettings,
  } = useCookieConsent();

  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (settingsOpen) {
      setStatistics(consent?.statistics ?? false);
      setMarketing(consent?.marketing ?? false);
    }
  }, [settingsOpen, consent]);

  useEffect(() => {
    if (!showBanner || settingsOpen) {
      document.body.style.paddingBottom = '';
      return;
    }

    const el = bannerRef.current;
    if (!el) return;

    const apply = () => {
      document.body.style.paddingBottom = `${el.offsetHeight}px`;
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(el);
    return () => {
      observer.disconnect();
      document.body.style.paddingBottom = '';
    };
  }, [showBanner, settingsOpen]);

  return (
    <>
      {showBanner && !settingsOpen && (
        <div
          ref={bannerRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
          className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
          <div className="container-custom">
            <div className="bg-card border border-border rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                <div className="flex gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h2
                      id="cookie-banner-title"
                      className="text-base sm:text-lg font-bold text-foreground mb-1"
                    >
                      {t('cookies.title')}
                    </h2>
                    <p
                      id="cookie-banner-desc"
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {t('cookies.description')}
                    </p>
                    <Link
                      to="/termeni"
                      className="inline-flex items-center mt-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
                    >
                      {t('cookies.viewTerms')}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto shrink-0">
                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full sm:flex-1 lg:w-auto lg:min-w-[160px]"
                    onClick={acceptAll}
                  >
                    {t('cookies.acceptAll')}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:flex-1 lg:w-auto"
                    onClick={rejectAll}
                  >
                    {t('cookies.rejectAll')}
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:flex-1 lg:w-auto text-foreground"
                    onClick={openSettings}
                  >
                    {t('cookies.settings')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog open={settingsOpen} onOpenChange={(open) => (open ? openSettings() : closeSettings())}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl p-5 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-xl">{t('cookies.settingsTitle')}</DialogTitle>
            <DialogDescription>{t('cookies.settingsDesc')}</DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-2">
            <div className="flex items-start justify-between gap-4 rounded-xl border border-border bg-muted/40 p-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <p className="font-semibold text-foreground">{t('cookies.necessary')}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t('cookies.necessaryDesc')}</p>
              </div>
              <span className="text-xs font-semibold text-accent whitespace-nowrap pt-1">
                {t('cookies.alwaysOn')}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 rounded-xl border border-border p-4">
              <div className="min-w-0">
                <p className="font-semibold text-foreground">{t('cookies.statistics')}</p>
                <p className="text-sm text-muted-foreground mt-1">{t('cookies.statisticsDesc')}</p>
              </div>
              <Switch
                checked={statistics}
                onCheckedChange={setStatistics}
                className="mt-0.5 data-[state=checked]:bg-accent"
                aria-label={t('cookies.statistics')}
              />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-xl border border-border p-4">
              <div className="min-w-0">
                <p className="font-semibold text-foreground">{t('cookies.marketing')}</p>
                <p className="text-sm text-muted-foreground mt-1">{t('cookies.marketingDesc')}</p>
              </div>
              <Switch
                checked={marketing}
                onCheckedChange={setMarketing}
                className="mt-0.5 data-[state=checked]:bg-accent"
                aria-label={t('cookies.marketing')}
              />
            </div>

            <Link
              to="/termeni"
              onClick={closeSettings}
              className="inline-flex text-sm font-semibold text-accent hover:underline underline-offset-4"
            >
              {t('cookies.viewTerms')}
            </Link>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button variant="outline" className="w-full sm:w-auto" onClick={closeSettings}>
              {t('projects.close')}
            </Button>
            <Button
              variant="cta"
              className="w-full sm:w-auto"
              onClick={() => savePreferences({ statistics, marketing })}
            >
              {t('cookies.save')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
