import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ro' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Romanian translations
const ro = {
  // Navigation
  'nav.home': 'Acasă',
  'nav.about': 'Despre Noi',
  'nav.services': 'Servicii',
  'nav.partners': 'Parteneri',
  'nav.projects': 'Proiecte',
  'nav.contact': 'Contact',
  'nav.requestQuote': 'Solicită Ofertă',
  
  // Header
  'header.schedule': 'Luni - Vineri: 09:00 - 18:00',
  
  // Hero Section
  'hero.badge': 'Din 2021, partenerul tău de încredere',
  'hero.title1': 'Soluții Complete pentru',
  'hero.title2': 'Transportul Public',
  'hero.title3': 'Modern',
  'hero.description': 'Echipamente premium, piese de schimb originale și service autorizat pentru autobuze, troleibuze și autobuze electrice. Echipă cu peste 19 ani experiență în industria transportului public.',
  'hero.servicesBtn': 'Serviciile Noastre',
  'hero.quoteBtn': 'Solicită Ofertă',
  'hero.stat1': 'Ani Experiență Echipă',
  'hero.stat2': 'Parteneri Internaționali',
  'hero.stat3': 'Vehicule Deservite',
  
  // About Section
  'about.badge': 'Despre Compania Noastră',
  'about.title1': 'Lider în Industria',
  'about.title2': 'Transportului Public',
  'about.description': 'Din 2021, Transport Systems SRL este partenerul de încredere al companiilor de transport public din Republica Moldova și regiune. Echipa noastră are peste 19 ani de experiență în industrie. Oferim soluții complete – de la furnizarea de echipamente noi și second-hand, până la piese de schimb originale și servicii de mentenanță de înaltă calitate.',
  'about.feature1': 'Parteneriate cu producători europeni de top',
  'about.feature2': 'Service autorizat și suport tehnic 24/7',
  'about.feature3': 'Piese de schimb originale cu garanție',
  'about.feature4': 'Consultanță tehnică specializată',
  'about.btn': 'Despre Noi',
  'about.yearsExp': 'Ani Experiență Echipă',
  'about.certBadge': 'Certificări Europene',
  
  // Services Section
  'services.badge': 'Servicii Complete',
  'services.title1': 'Tot Ce Aveți Nevoie pentru',
  'services.title2': 'Flota Dvs.',
  'services.description': 'De la achiziționarea vehiculelor până la mentenanța completă, suntem alături de dvs. la fiecare pas.',
  'services.equipment': 'Vânzare Echipamente',
  'services.equipmentDesc': 'Autobuze, troleibuze și autobuze electrice noi și second-hand de la producători europeni de renume.',
  'services.parts': 'Piese de Schimb',
  'services.partsDesc': 'Piese originale pentru motor, transmisie, frânare, sisteme electrice și interior, cu livrare rapidă.',
  'services.maintenance': 'Service și Mentenanță',
  'services.maintenanceDesc': 'Servicii complete de garanție și post-garanție, diagnosticare computerizată și intervenții rapide.',
  'services.consulting': 'Consultanță & Training',
  'services.consultingDesc': 'Consultanță tehnică specializată, training pentru personal și planificare optimă a flotei.',
  
  // Why Choose Us
  'why.badge': 'De Ce Noi',
  'why.title1': 'Avantajele',
  'why.title2': 'Colaborării cu Noi',
  'why.experience': 'Experiență Vastă',
  'why.experienceDesc': 'Echipă cu peste 19 ani de experiență în industria transportului public, cu mii de proiecte finalizate cu succes.',
  'why.partners': 'Parteneri de Top',
  'why.partnersDesc': 'Colaborăm cu producători europeni de renume: ŠKODA ELECTRIC, ISUZU și alți lideri din industrie.',
  'why.quality': 'Calitate Garantată',
  'why.qualityDesc': 'Toate produsele și serviciile noastre respectă standardele europene și vin cu garanție extinsă.',
  'why.support': 'Suport Dedicat',
  'why.supportDesc': 'Echipă de specialiști disponibilă pentru consultanță, service și suport tehnic permanent.',
  
  // CTA Section
  'cta.title1': 'Sunteți Gata să Începeți un',
  'cta.title2': 'Proiect cu Noi?',
  'cta.description': 'Contactați-ne astăzi pentru o consultație gratuită și o ofertă personalizată pentru nevoile dumneavoastră de transport.',
  'cta.btn': 'Solicită Ofertă Gratuită',
  'cta.whatsapp': 'WhatsApp',
  'cta.response': 'Răspundem în maxim 24h',
  
  // Footer
  'footer.description': 'Partenerul dumneavoastră de încredere pentru echipamente și servicii de transport public din 2021. Echipă cu 19+ ani experiență. Oferim soluții complete pentru autobuze, troleibuze și vehicule electrice.',
  'footer.quickLinks': 'Link-uri Rapide',
  'footer.services': 'Servicii',
  'footer.contact': 'Contact',
  'footer.rights': 'Toate drepturile rezervate.',
  'footer.equipment': 'Vânzare Echipamente',
  'footer.parts': 'Piese de Schimb',
  'footer.service': 'Service și Mentenanță',
  'footer.consulting': 'Consultanță',
  
  // Contact Page
  'contact.badge': 'Contactează-ne',
  'contact.title1': 'Suntem Aici să',
  'contact.title2': 'Vă Ajutăm',
  'contact.description': 'Aveți întrebări sau doriți o ofertă personalizată? Echipa noastră vă stă la dispoziție.',
  'contact.phone': 'Telefon',
  'contact.email': 'Email',
  'contact.address': 'Adresa',
  'contact.schedule': 'Program',
  'contact.formTitle': 'Trimite-ne un Mesaj',
  'contact.name': 'Nume Complet',
  'contact.emailField': 'Email',
  'contact.phoneField': 'Telefon',
  'contact.subject': 'Subiect',
  'contact.selectSubject': 'Selectează subiectul',
  'contact.subjectEquipment': 'Vânzare Echipamente',
  'contact.subjectParts': 'Piese de Schimb',
  'contact.subjectService': 'Service și Mentenanță',
  'contact.subjectConsulting': 'Consultanță',
  'contact.subjectOther': 'Altele',
  'contact.message': 'Mesaj',
  'contact.messagePlaceholder': 'Descrieți pe scurt cererea dumneavoastră...',
  'contact.send': 'Trimite Mesajul',
  'contact.sending': 'Se trimite...',
  'contact.successTitle': 'Mesaj trimis cu succes!',
  'contact.successDesc': 'Vă vom contacta în cel mai scurt timp posibil.',
  'contact.callTitle': 'Preferați să vorbiți direct?',
  'contact.callDesc': 'Sunați-ne sau scrieți-ne pe WhatsApp pentru răspuns imediat.',
  
  // About Page
  'aboutPage.badge': 'Despre Noi',
  'aboutPage.title1': 'Istoria și Viziunea',
  'aboutPage.title2': 'Transport Systems',
  'aboutPage.description': 'Din 2021, suntem dedicați modernizării transportului public din Republica Moldova și regiune. Echipa noastră are peste 19 ani de experiență în industrie.',
  'aboutPage.yearsExp': 'Ani Experiență Echipă',
  'aboutPage.partners': 'Parteneri',
  'aboutPage.vehicles': 'Vehicule Deservite',
  'aboutPage.countries': 'Țări Acoperite',
  'aboutPage.missionBadge': 'Misiune & Viziune',
  'aboutPage.missionTitle': 'Angajamentul Nostru',
  'aboutPage.mission': 'Misiune',
  'aboutPage.missionText': 'Să oferim soluții complete și de înaltă calitate pentru transportul public, contribuind la modernizarea infrastructurii și îmbunătățirea mobilității urbane în Republica Moldova și regiune.',
  'aboutPage.vision': 'Viziune',
  'aboutPage.visionText': 'Să devenim liderul regional în furnizarea de echipamente și servicii pentru transport public, recunoscuți pentru excelență, inovație și parteneriate durabile.',
  'aboutPage.timelineTitle': 'Parcursul Nostru',
  'aboutPage.valuesTitle': 'Valorile Noastre',
  'aboutPage.excellence': 'Excelență',
  'aboutPage.excellenceDesc': 'Standarde înalte în tot ceea ce facem',
  'aboutPage.partnership': 'Parteneriat',
  'aboutPage.partnershipDesc': 'Relații de lungă durată cu clienții noștri',
  'aboutPage.quality': 'Calitate',
  'aboutPage.qualityDesc': 'Produse și servicii certificate european',
  'aboutPage.promptness': 'Promptitudine',
  'aboutPage.promptnessDesc': 'Răspuns rapid la nevoile clienților',
  
  // Services Page
  'servicesPage.badge': 'Servicii Complete',
  'servicesPage.title1': 'Soluții Integrate pentru',
  'servicesPage.title2': 'Transport Public',
  'servicesPage.description': 'De la furnizarea echipamentelor până la mentenanța completă, oferim tot ce aveți nevoie pentru o flotă eficientă.',
  'servicesPage.whyTitle': 'De Ce Serviciile Noastre?',
  'servicesPage.whyDesc': 'Oferim avantaje competitive care fac diferența pentru operațiunile dumneavoastră.',
  'servicesPage.speed': 'Rapiditate',
  'servicesPage.speedDesc': 'Timp de răspuns minim și livrare express pentru situații urgente',
  'servicesPage.warranty': 'Garanție',
  'servicesPage.warrantyDesc': 'Toate produsele și serviciile noastre vin cu garanție extinsă',
  'servicesPage.expertise': 'Expertiză',
  'servicesPage.expertiseDesc': 'Personal cu experiență de peste 19 ani în industrie',
  'servicesPage.ctaTitle': 'Aveți nevoie de o ofertă personalizată?',
  'servicesPage.ctaDesc': 'Contactați-ne pentru o consultație gratuită și o ofertă adaptată nevoilor dumneavoastră specifice.',
  'servicesPage.ctaBtn': 'Solicită Ofertă Gratuită',
  
  // Service details
  'service.equipment.title': 'Vânzare Echipamente',
  'service.equipment.desc': 'Furnizăm autobuze, troleibuze și autobuze electrice noi și second-hand de la producători europeni de renume precum ŠKODA ELECTRIC, ISUZU și alții.',
  'service.equipment.f1': 'Autobuze urbane și interurbane',
  'service.equipment.f2': 'Troleibuze articulate',
  'service.equipment.f3': 'E-buses și hibride',
  'service.equipment.f4': 'Sisteme de propulsie electrică',
  
  'service.parts.title': 'Piese de Schimb',
  'service.parts.desc': 'Piese originale și compatibile pentru toate tipurile de vehicule de transport public. Stoc permanent și livrare rapidă din rețeaua noastră europeană.',
  'service.parts.f1': 'Piese motor și transmisie',
  'service.parts.f2': 'Sisteme de frânare',
  'service.parts.f3': 'Componente electrice',
  'service.parts.f4': 'Piese interior și caroserie',
  
  'service.maintenance.title': 'Service și Mentenanță',
  'service.maintenance.desc': 'Servicii complete de întreținere și reparații, de la diagnosticare computerizată până la revizie capitală. Service autorizat cu garanție.',
  'service.maintenance.f1': 'Service garanție și post-garanție',
  'service.maintenance.f2': 'Diagnosticare computerizată',
  'service.maintenance.f3': 'Reparații capitale',
  'service.maintenance.f4': 'Contracte de mentenanță',
  
  'service.consulting.title': 'Consultanță și Training',
  'service.consulting.desc': 'Consultanță tehnică specializată pentru optimizarea flotei și training pentru personalul tehnic și conducători auto.',
  'service.consulting.f1': 'Consultanță tehnică',
  'service.consulting.f2': 'Training operatori',
  'service.consulting.f3': 'Planificare flotă',
  'service.consulting.f4': 'Optimizare costuri',
  
  // Partners Page
  'partners.badge': 'Partenerii Noștri',
  'partners.title1': 'Rețea de',
  'partners.title2': 'Parteneri de Încredere',
  'partners.description': 'Colaborăm cu operatori de transport și furnizori de top din Moldova, Europa și regiunea noastră.',
  'partners.activePartners': 'Parteneri Activi',
  'partners.countries': 'Țări',
  'partners.yearsExp': 'Ani Experiență Echipă',
  'partners.clientsBadge': 'Clienți',
  'partners.clientsTitle': 'Clienții Noștri',
  'partners.suppliersBadge': 'Furnizori',
  'partners.suppliersTitle': 'Furnizorii Noștri',
  'partners.ctaTitle': 'Doriți să Deveniți Partener?',
  'partners.ctaDesc': 'Suntem mereu deschiși la noi colaborări. Contactați-ne pentru a discuta oportunitățile de parteneriat.',
  'partners.ctaBtn': 'Contactați-ne',
  
  // Projects Page
  'projects.badge': 'Portofoliu',
  'projects.title1': 'Proiecte',
  'projects.title2': 'Finalizate cu Succes',
  'projects.description': 'Explorați proiectele noastre reprezentative și vedeți rezultatele colaborării cu noi.',
  'projects.filter': 'Filtrează',
  'projects.all': 'Toate',
  'projects.noProjects': 'Nu există proiecte în această categorie.',
  'projects.close': 'Închide',
  'projects.viewAll': 'Vezi Toate Proiectele',
  'partners.viewAll': 'Vezi Toți Partenerii',
  
  // 404 Page
  'notFound.title': 'Pagina nu a fost găsită',
  'notFound.description': 'Ne pare rău, pagina pe care o căutați nu există.',
  'notFound.btn': 'Înapoi Acasă',
};

// Russian translations
const ru = {
  // Navigation
  'nav.home': 'Главная',
  'nav.about': 'О Нас',
  'nav.services': 'Услуги',
  'nav.partners': 'Партнёры',
  'nav.projects': 'Проекты',
  'nav.contact': 'Контакты',
  'nav.requestQuote': 'Запросить Цену',
  
  // Header
  'header.schedule': 'Пн - Пт: 09:00 - 18:00',
  
  // Hero Section
  'hero.badge': 'С 2021 года, ваш надёжный партнёр',
  'hero.title1': 'Комплексные Решения для',
  'hero.title2': 'Общественного Транспорта',
  'hero.title3': 'Современного',
  'hero.description': 'Премиум оборудование, оригинальные запчасти и авторизованный сервис для автобусов, троллейбусов и электробусов. Команда с более чем 19-летним опытом в индустрии общественного транспорта.',
  'hero.servicesBtn': 'Наши Услуги',
  'hero.quoteBtn': 'Запросить Цену',
  'hero.stat1': 'Лет Опыта Команды',
  'hero.stat2': 'Международных Партнёров',
  'hero.stat3': 'Обслуженных Транспортных Средств',
  
  // About Section
  'about.badge': 'О Нашей Компании',
  'about.title1': 'Лидер в Индустрии',
  'about.title2': 'Общественного Транспорта',
  'about.description': 'С 2021 года Transport Systems SRL является надёжным партнёром компаний общественного транспорта Республики Молдова и региона. Наша команда имеет более 19 лет опыта в индустрии. Мы предлагаем комплексные решения – от поставки нового и б/у оборудования до оригинальных запчастей и высококачественного сервисного обслуживания.',
  'about.feature1': 'Партнёрство с ведущими европейскими производителями',
  'about.feature2': 'Авторизованный сервис и техподдержка 24/7',
  'about.feature3': 'Оригинальные запчасти с гарантией',
  'about.feature4': 'Специализированные технические консультации',
  'about.btn': 'О Нас',
  'about.yearsExp': 'Лет Опыта Команды',
  'about.certBadge': 'Европейские Сертификаты',
  
  // Services Section
  'services.badge': 'Полный Спектр Услуг',
  'services.title1': 'Всё Необходимое для',
  'services.title2': 'Вашего Автопарка',
  'services.description': 'От приобретения транспортных средств до полного технического обслуживания – мы рядом на каждом этапе.',
  'services.equipment': 'Продажа Оборудования',
  'services.equipmentDesc': 'Новые и б/у автобусы, троллейбусы и электробусы от ведущих европейских производителей.',
  'services.parts': 'Запасные Части',
  'services.partsDesc': 'Оригинальные запчасти для двигателя, трансмиссии, тормозной системы, электрики и салона с быстрой доставкой.',
  'services.maintenance': 'Сервис и Обслуживание',
  'services.maintenanceDesc': 'Полный спектр гарантийного и постгарантийного обслуживания, компьютерная диагностика и оперативный ремонт.',
  'services.consulting': 'Консультации и Обучение',
  'services.consultingDesc': 'Специализированные технические консультации, обучение персонала и оптимальное планирование автопарка.',
  
  // Why Choose Us
  'why.badge': 'Почему Мы',
  'why.title1': 'Преимущества',
  'why.title2': 'Сотрудничества с Нами',
  'why.experience': 'Большой Опыт',
  'why.experienceDesc': 'Команда с более чем 19-летним опытом в индустрии общественного транспорта, тысячи успешно завершённых проектов.',
  'why.partners': 'Топовые Партнёры',
  'why.partnersDesc': 'Сотрудничаем с ведущими европейскими производителями: ŠKODA ELECTRIC, ISUZU и другими лидерами отрасли.',
  'why.quality': 'Гарантированное Качество',
  'why.qualityDesc': 'Все наши продукты и услуги соответствуют европейским стандартам и имеют расширенную гарантию.',
  'why.support': 'Персональная Поддержка',
  'why.supportDesc': 'Команда специалистов доступна для консультаций, сервисного обслуживания и постоянной технической поддержки.',
  
  // CTA Section
  'cta.title1': 'Готовы Начать',
  'cta.title2': 'Проект с Нами?',
  'cta.description': 'Свяжитесь с нами сегодня для бесплатной консультации и индивидуального предложения под ваши транспортные потребности.',
  'cta.btn': 'Бесплатная Консультация',
  'cta.whatsapp': 'WhatsApp',
  'cta.response': 'Отвечаем в течение 24 часов',
  
  // Footer
  'footer.description': 'Ваш надёжный партнёр в области оборудования и услуг для общественного транспорта с 2021 года. Команда с 19+ лет опыта. Предлагаем комплексные решения для автобусов, троллейбусов и электротранспорта.',
  'footer.quickLinks': 'Быстрые Ссылки',
  'footer.services': 'Услуги',
  'footer.contact': 'Контакты',
  'footer.rights': 'Все права защищены.',
  'footer.equipment': 'Продажа Оборудования',
  'footer.parts': 'Запасные Части',
  'footer.service': 'Сервис и Обслуживание',
  'footer.consulting': 'Консультации',
  
  // Contact Page
  'contact.badge': 'Свяжитесь с Нами',
  'contact.title1': 'Мы Здесь, Чтобы',
  'contact.title2': 'Вам Помочь',
  'contact.description': 'Есть вопросы или нужно индивидуальное предложение? Наша команда к вашим услугам.',
  'contact.phone': 'Телефон',
  'contact.email': 'Email',
  'contact.address': 'Адрес',
  'contact.schedule': 'График',
  'contact.formTitle': 'Отправьте Сообщение',
  'contact.name': 'Полное Имя',
  'contact.emailField': 'Email',
  'contact.phoneField': 'Телефон',
  'contact.subject': 'Тема',
  'contact.selectSubject': 'Выберите тему',
  'contact.subjectEquipment': 'Продажа Оборудования',
  'contact.subjectParts': 'Запасные Части',
  'contact.subjectService': 'Сервис и Обслуживание',
  'contact.subjectConsulting': 'Консультации',
  'contact.subjectOther': 'Другое',
  'contact.message': 'Сообщение',
  'contact.messagePlaceholder': 'Кратко опишите ваш запрос...',
  'contact.send': 'Отправить',
  'contact.sending': 'Отправка...',
  'contact.successTitle': 'Сообщение успешно отправлено!',
  'contact.successDesc': 'Мы свяжемся с вами в ближайшее время.',
  'contact.callTitle': 'Предпочитаете поговорить напрямую?',
  'contact.callDesc': 'Позвоните нам или напишите в WhatsApp для немедленного ответа.',
  
  // About Page
  'aboutPage.badge': 'О Нас',
  'aboutPage.title1': 'История и Видение',
  'aboutPage.title2': 'Transport Systems',
  'aboutPage.description': 'С 2021 года мы посвящаем себя модернизации общественного транспорта в Республике Молдова и регионе. Наша команда имеет более 19 лет опыта в индустрии.',
  'aboutPage.yearsExp': 'Лет Опыта Команды',
  'aboutPage.partners': 'Партнёров',
  'aboutPage.vehicles': 'Обслуженных ТС',
  'aboutPage.countries': 'Стран Охвата',
  'aboutPage.missionBadge': 'Миссия и Видение',
  'aboutPage.missionTitle': 'Наши Обязательства',
  'aboutPage.mission': 'Миссия',
  'aboutPage.missionText': 'Предоставлять комплексные и высококачественные решения для общественного транспорта, способствуя модернизации инфраструктуры и улучшению городской мобильности в Республике Молдова и регионе.',
  'aboutPage.vision': 'Видение',
  'aboutPage.visionText': 'Стать региональным лидером в поставке оборудования и услуг для общественного транспорта, признанным за превосходство, инновации и долгосрочные партнёрства.',
  'aboutPage.timelineTitle': 'Наш Путь',
  'aboutPage.valuesTitle': 'Наши Ценности',
  'aboutPage.excellence': 'Превосходство',
  'aboutPage.excellenceDesc': 'Высокие стандарты во всём, что мы делаем',
  'aboutPage.partnership': 'Партнёрство',
  'aboutPage.partnershipDesc': 'Долгосрочные отношения с нашими клиентами',
  'aboutPage.quality': 'Качество',
  'aboutPage.qualityDesc': 'Продукты и услуги с европейской сертификацией',
  'aboutPage.promptness': 'Оперативность',
  'aboutPage.promptnessDesc': 'Быстрый отклик на потребности клиентов',
  
  // Services Page
  'servicesPage.badge': 'Полный Спектр Услуг',
  'servicesPage.title1': 'Интегрированные Решения для',
  'servicesPage.title2': 'Общественного Транспорта',
  'servicesPage.description': 'От поставки оборудования до полного технического обслуживания – мы предлагаем всё необходимое для эффективного автопарка.',
  'servicesPage.whyTitle': 'Почему Наши Услуги?',
  'servicesPage.whyDesc': 'Мы предлагаем конкурентные преимущества, которые делают разницу для ваших операций.',
  'servicesPage.speed': 'Скорость',
  'servicesPage.speedDesc': 'Минимальное время отклика и экспресс-доставка для срочных ситуаций',
  'servicesPage.warranty': 'Гарантия',
  'servicesPage.warrantyDesc': 'Все наши продукты и услуги имеют расширенную гарантию',
  'servicesPage.expertise': 'Экспертиза',
  'servicesPage.expertiseDesc': 'Персонал с более чем 19-летним опытом в индустрии',
  'servicesPage.ctaTitle': 'Нужно индивидуальное предложение?',
  'servicesPage.ctaDesc': 'Свяжитесь с нами для бесплатной консультации и предложения, адаптированного под ваши специфические потребности.',
  'servicesPage.ctaBtn': 'Бесплатная Консультация',
  
  // Service details
  'service.equipment.title': 'Продажа Оборудования',
  'service.equipment.desc': 'Поставляем новые и б/у автобусы, троллейбусы и электробусы от ведущих европейских производителей, таких как ŠKODA ELECTRIC, ISUZU и других.',
  'service.equipment.f1': 'Городские и междугородние автобусы',
  'service.equipment.f2': 'Сочленённые троллейбусы',
  'service.equipment.f3': 'Электробусы и гибриды',
  'service.equipment.f4': 'Системы электрической тяги',
  
  'service.parts.title': 'Запасные Части',
  'service.parts.desc': 'Оригинальные и совместимые запчасти для всех типов транспортных средств общественного транспорта. Постоянный склад и быстрая доставка из нашей европейской сети.',
  'service.parts.f1': 'Запчасти двигателя и трансмиссии',
  'service.parts.f2': 'Тормозные системы',
  'service.parts.f3': 'Электрические компоненты',
  'service.parts.f4': 'Детали салона и кузова',
  
  'service.maintenance.title': 'Сервис и Обслуживание',
  'service.maintenance.desc': 'Полный спектр услуг по техническому обслуживанию и ремонту, от компьютерной диагностики до капитального ремонта. Авторизованный сервис с гарантией.',
  'service.maintenance.f1': 'Гарантийное и постгарантийное обслуживание',
  'service.maintenance.f2': 'Компьютерная диагностика',
  'service.maintenance.f3': 'Капитальный ремонт',
  'service.maintenance.f4': 'Контракты на обслуживание',
  
  'service.consulting.title': 'Консультации и Обучение',
  'service.consulting.desc': 'Специализированные технические консультации по оптимизации автопарка и обучение технического персонала и водителей.',
  'service.consulting.f1': 'Технические консультации',
  'service.consulting.f2': 'Обучение операторов',
  'service.consulting.f3': 'Планирование автопарка',
  'service.consulting.f4': 'Оптимизация затрат',
  
  // Partners Page
  'partners.badge': 'Наши Партнёры',
  'partners.title1': 'Сеть',
  'partners.title2': 'Надёжных Партнёров',
  'partners.description': 'Сотрудничаем с операторами транспорта и ведущими поставщиками из Молдовы, Европы и нашего региона.',
  'partners.activePartners': 'Активных Партнёров',
  'partners.countries': 'Стран',
  'partners.yearsExp': 'Лет Опыта Команды',
  'partners.clientsBadge': 'Клиенты',
  'partners.clientsTitle': 'Наши Клиенты',
  'partners.suppliersBadge': 'Поставщики',
  'partners.suppliersTitle': 'Наши Поставщики',
  'partners.ctaTitle': 'Хотите Стать Партнёром?',
  'partners.ctaDesc': 'Мы всегда открыты для нового сотрудничества. Свяжитесь с нами для обсуждения возможностей партнёрства.',
  'partners.ctaBtn': 'Связаться с Нами',
  
  // Projects Page
  'projects.badge': 'Портфолио',
  'projects.title1': 'Проекты',
  'projects.title2': 'Успешно Завершённые',
  'projects.description': 'Изучите наши показательные проекты и результаты сотрудничества с нами.',
  'projects.filter': 'Фильтр',
  'projects.all': 'Все',
  'projects.noProjects': 'В этой категории нет проектов.',
  'projects.close': 'Закрыть',
  'projects.viewAll': 'Все Проекты',
  'partners.viewAll': 'Все Партнёры',
  
  // 404 Page
  'notFound.title': 'Страница не найдена',
  'notFound.description': 'Извините, запрашиваемая страница не существует.',
  'notFound.btn': 'На Главную',
};

// English translations
const en = {
  // Navigation
  'nav.home': 'Home',
  'nav.about': 'About Us',
  'nav.services': 'Services',
  'nav.partners': 'Partners',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'nav.requestQuote': 'Request Quote',
  
  // Header
  'header.schedule': 'Mon - Fri: 09:00 - 18:00',
  
  // Hero Section
  'hero.badge': 'Since 2021, your trusted partner',
  'hero.title1': 'Complete Solutions for',
  'hero.title2': 'Public Transportation',
  'hero.title3': 'Modern',
  'hero.description': 'Premium equipment, original spare parts, and authorized service for buses, trolleybuses, and electric buses. Team with over 19 years of experience in the public transportation industry.',
  'hero.servicesBtn': 'Our Services',
  'hero.quoteBtn': 'Request Quote',
  'hero.stat1': 'Years Team Experience',
  'hero.stat2': 'International Partners',
  'hero.stat3': 'Vehicles Serviced',
  
  // About Section
  'about.badge': 'About Our Company',
  'about.title1': 'Leader in the',
  'about.title2': 'Public Transportation Industry',
  'about.description': 'Since 2021, Transport Systems SRL has been the trusted partner of public transportation companies in the Republic of Moldova and the region. Our team has over 19 years of industry experience. We offer complete solutions – from supplying new and used equipment to original spare parts and high-quality maintenance services.',
  'about.feature1': 'Partnerships with top European manufacturers',
  'about.feature2': 'Authorized service and 24/7 technical support',
  'about.feature3': 'Original spare parts with warranty',
  'about.feature4': 'Specialized technical consulting',
  'about.btn': 'About Us',
  'about.yearsExp': 'Years Team Experience',
  'about.certBadge': 'European Certifications',
  
  // Services Section
  'services.badge': 'Complete Services',
  'services.title1': 'Everything You Need for',
  'services.title2': 'Your Fleet',
  'services.description': 'From vehicle acquisition to complete maintenance, we are with you every step of the way.',
  'services.equipment': 'Equipment Sales',
  'services.equipmentDesc': 'New and used buses, trolleybuses, and electric buses from renowned European manufacturers.',
  'services.parts': 'Spare Parts',
  'services.partsDesc': 'Original parts for engine, transmission, braking, electrical systems, and interior, with fast delivery.',
  'services.maintenance': 'Service & Maintenance',
  'services.maintenanceDesc': 'Complete warranty and post-warranty services, computerized diagnostics, and rapid interventions.',
  'services.consulting': 'Consulting & Training',
  'services.consultingDesc': 'Specialized technical consulting, staff training, and optimal fleet planning.',
  
  // Why Choose Us
  'why.badge': 'Why Us',
  'why.title1': 'Benefits of',
  'why.title2': 'Working with Us',
  'why.experience': 'Vast Experience',
  'why.experienceDesc': 'Team with over 19 years of experience in the public transportation industry, with thousands of successfully completed projects.',
  'why.partners': 'Top Partners',
  'why.partnersDesc': 'We collaborate with renowned European manufacturers: ŠKODA ELECTRIC, ISUZU, and other industry leaders.',
  'why.quality': 'Guaranteed Quality',
  'why.qualityDesc': 'All our products and services meet European standards and come with extended warranty.',
  'why.support': 'Dedicated Support',
  'why.supportDesc': 'Team of specialists available for consulting, service, and permanent technical support.',
  
  // CTA Section
  'cta.title1': 'Ready to Start a',
  'cta.title2': 'Project with Us?',
  'cta.description': 'Contact us today for a free consultation and personalized offer for your transportation needs.',
  'cta.btn': 'Request Free Quote',
  'cta.whatsapp': 'WhatsApp',
  'cta.response': 'We respond within 24h',
  
  // Footer
  'footer.description': 'Your trusted partner for public transportation equipment and services since 2021. Team with 19+ years of experience. We offer complete solutions for buses, trolleybuses, and electric vehicles.',
  'footer.quickLinks': 'Quick Links',
  'footer.services': 'Services',
  'footer.contact': 'Contact',
  'footer.rights': 'All rights reserved.',
  'footer.equipment': 'Equipment Sales',
  'footer.parts': 'Spare Parts',
  'footer.service': 'Service & Maintenance',
  'footer.consulting': 'Consulting',
  
  // Contact Page
  'contact.badge': 'Contact Us',
  'contact.title1': 'We\'re Here to',
  'contact.title2': 'Help You',
  'contact.description': 'Have questions or need a personalized offer? Our team is at your service.',
  'contact.phone': 'Phone',
  'contact.email': 'Email',
  'contact.address': 'Address',
  'contact.schedule': 'Hours',
  'contact.formTitle': 'Send Us a Message',
  'contact.name': 'Full Name',
  'contact.emailField': 'Email',
  'contact.phoneField': 'Phone',
  'contact.subject': 'Subject',
  'contact.selectSubject': 'Select subject',
  'contact.subjectEquipment': 'Equipment Sales',
  'contact.subjectParts': 'Spare Parts',
  'contact.subjectService': 'Service & Maintenance',
  'contact.subjectConsulting': 'Consulting',
  'contact.subjectOther': 'Other',
  'contact.message': 'Message',
  'contact.messagePlaceholder': 'Briefly describe your request...',
  'contact.send': 'Send Message',
  'contact.sending': 'Sending...',
  'contact.successTitle': 'Message sent successfully!',
  'contact.successDesc': 'We will contact you as soon as possible.',
  'contact.callTitle': 'Prefer to talk directly?',
  'contact.callDesc': 'Call us or write on WhatsApp for immediate response.',
  
  // About Page
  'aboutPage.badge': 'About Us',
  'aboutPage.title1': 'History and Vision of',
  'aboutPage.title2': 'Transport Systems',
  'aboutPage.description': 'Since 2021, we are dedicated to modernizing public transportation in the Republic of Moldova and the region. Our team has over 19 years of industry experience.',
  'aboutPage.yearsExp': 'Years Team Experience',
  'aboutPage.partners': 'Partners',
  'aboutPage.vehicles': 'Vehicles Serviced',
  'aboutPage.countries': 'Countries Covered',
  'aboutPage.missionBadge': 'Mission & Vision',
  'aboutPage.missionTitle': 'Our Commitment',
  'aboutPage.mission': 'Mission',
  'aboutPage.missionText': 'To provide complete and high-quality solutions for public transportation, contributing to infrastructure modernization and improving urban mobility in the Republic of Moldova and the region.',
  'aboutPage.vision': 'Vision',
  'aboutPage.visionText': 'To become the regional leader in providing equipment and services for public transportation, recognized for excellence, innovation, and lasting partnerships.',
  'aboutPage.timelineTitle': 'Our Journey',
  'aboutPage.valuesTitle': 'Our Values',
  'aboutPage.excellence': 'Excellence',
  'aboutPage.excellenceDesc': 'High standards in everything we do',
  'aboutPage.partnership': 'Partnership',
  'aboutPage.partnershipDesc': 'Long-term relationships with our clients',
  'aboutPage.quality': 'Quality',
  'aboutPage.qualityDesc': 'European certified products and services',
  'aboutPage.promptness': 'Promptness',
  'aboutPage.promptnessDesc': 'Quick response to customer needs',
  
  // Services Page
  'servicesPage.badge': 'Complete Services',
  'servicesPage.title1': 'Integrated Solutions for',
  'servicesPage.title2': 'Public Transportation',
  'servicesPage.description': 'From equipment supply to complete maintenance, we offer everything you need for an efficient fleet.',
  'servicesPage.whyTitle': 'Why Our Services?',
  'servicesPage.whyDesc': 'We offer competitive advantages that make a difference for your operations.',
  'servicesPage.speed': 'Speed',
  'servicesPage.speedDesc': 'Minimum response time and express delivery for urgent situations',
  'servicesPage.warranty': 'Warranty',
  'servicesPage.warrantyDesc': 'All our products and services come with extended warranty',
  'servicesPage.expertise': 'Expertise',
  'servicesPage.expertiseDesc': 'Staff with over 19 years of industry experience',
  'servicesPage.ctaTitle': 'Need a personalized offer?',
  'servicesPage.ctaDesc': 'Contact us for a free consultation and an offer tailored to your specific needs.',
  'servicesPage.ctaBtn': 'Request Free Quote',
  
  // Service details
  'service.equipment.title': 'Equipment Sales',
  'service.equipment.desc': 'We supply new and used buses, trolleybuses, and electric buses from renowned European manufacturers such as ŠKODA ELECTRIC, ISUZU, and others.',
  'service.equipment.f1': 'Urban and intercity buses',
  'service.equipment.f2': 'Articulated trolleybuses',
  'service.equipment.f3': 'E-buses and hybrids',
  'service.equipment.f4': 'Electric propulsion systems',
  
  'service.parts.title': 'Spare Parts',
  'service.parts.desc': 'Original and compatible parts for all types of public transportation vehicles. Permanent stock and fast delivery from our European network.',
  'service.parts.f1': 'Engine and transmission parts',
  'service.parts.f2': 'Braking systems',
  'service.parts.f3': 'Electrical components',
  'service.parts.f4': 'Interior and body parts',
  
  'service.maintenance.title': 'Service & Maintenance',
  'service.maintenance.desc': 'Complete maintenance and repair services, from computerized diagnostics to capital repairs. Authorized service with warranty.',
  'service.maintenance.f1': 'Warranty and post-warranty service',
  'service.maintenance.f2': 'Computerized diagnostics',
  'service.maintenance.f3': 'Capital repairs',
  'service.maintenance.f4': 'Maintenance contracts',
  
  'service.consulting.title': 'Consulting & Training',
  'service.consulting.desc': 'Specialized technical consulting for fleet optimization and training for technical staff and drivers.',
  'service.consulting.f1': 'Technical consulting',
  'service.consulting.f2': 'Operator training',
  'service.consulting.f3': 'Fleet planning',
  'service.consulting.f4': 'Cost optimization',
  
  // Partners Page
  'partners.badge': 'Our Partners',
  'partners.title1': 'Network of',
  'partners.title2': 'Trusted Partners',
  'partners.description': 'We collaborate with transport operators and top suppliers from Moldova, Europe, and our region.',
  'partners.activePartners': 'Active Partners',
  'partners.countries': 'Countries',
  'partners.yearsExp': 'Years Team Experience',
  'partners.clientsBadge': 'Clients',
  'partners.clientsTitle': 'Our Clients',
  'partners.suppliersBadge': 'Suppliers',
  'partners.suppliersTitle': 'Our Suppliers',
  'partners.ctaTitle': 'Want to Become a Partner?',
  'partners.ctaDesc': 'We are always open to new collaborations. Contact us to discuss partnership opportunities.',
  'partners.ctaBtn': 'Contact Us',
  
  // Projects Page
  'projects.badge': 'Portfolio',
  'projects.title1': 'Successfully',
  'projects.title2': 'Completed Projects',
  'projects.description': 'Explore our representative projects and see the results of collaboration with us.',
  'projects.filter': 'Filter',
  'projects.all': 'All',
  'projects.noProjects': 'There are no projects in this category.',
  'projects.close': 'Close',
  'projects.viewAll': 'View All Projects',
  'partners.viewAll': 'View All Partners',
  
  // 404 Page
  'notFound.title': 'Page Not Found',
  'notFound.description': 'Sorry, the page you are looking for does not exist.',
  'notFound.btn': 'Back Home',
};

const translations: Record<Language, Record<string, string>> = { ro, ru, en };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ro';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

