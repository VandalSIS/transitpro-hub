import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-4">
        <h1 className="mb-4 text-8xl font-bold text-accent">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">{t('notFound.title')}</h2>
        <p className="mb-8 text-lg text-muted-foreground">{t('notFound.description')}</p>
        <Link to="/">
          <Button variant="cta" size="lg">
            <Home className="w-5 h-5" />
            {t('notFound.btn')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
