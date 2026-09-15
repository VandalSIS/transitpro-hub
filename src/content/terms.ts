import type { Language } from '@/contexts/LanguageContext';

export interface TermsSection {
  title: string;
  paragraphs: string[];
}

export const termsSections: Record<Language, TermsSection[]> = {
  ro: [
    {
      title: '1. Identificarea operatorului',
      paragraphs: [
        'Prezentul site este operat de Transport Systems SRL, cu sediul social în Str. Grenoble, 257, MD-2001, Chișinău, Republica Moldova.',
        'Date de contact: telefon +373 69 312 300 / +373 60 100 250, e-mail transportsystems2021@gmail.com, website https://www.transportsystems.md.',
      ],
    },
    {
      title: '2. Obiectul termenilor',
      paragraphs: [
        'Acești Termeni și condiții reglementează accesul și utilizarea site-ului transportsystems.md, precum și a conținutului, materialelor și serviciilor prezentate pe acesta.',
        'Site-ul are caracter informativ și de prezentare a activității companiei: furnizare de echipamente, piese de schimb, service și consultanță pentru transportul public. Nu este un magazin online și nu procesează plăți prin intermediul paginilor web.',
      ],
    },
    {
      title: '3. Acceptarea termenilor',
      paragraphs: [
        'Prin accesarea sau utilizarea site-ului, confirmați că ați citit, înțeles și acceptat acești Termeni și condiții. Dacă nu sunteți de acord, vă rugăm să nu utilizați site-ul.',
        'Ne rezervăm dreptul de a actualiza acești termeni. Versiunea în vigoare este cea publicată pe această pagină, cu data ultimei actualizări indicată mai sus.',
      ],
    },
    {
      title: '4. Utilizarea site-ului',
      paragraphs: [
        'Vă angajați să utilizați site-ul exclusiv în scopuri legale, în conformitate cu legislația Republicii Moldova și cu acești termeni.',
        'Este interzis să: încercați accesul neautorizat la sisteme sau date; copiați, modificați sau redistribuiți conținutul fără acordul nostru scris; transmiteți informații false, malițioase sau care încalcă drepturile terților prin formularul de contact.',
        'Informațiile transmise prin formularul de contact, e-mail sau telefon trebuie să fie corecte. Le folosim exclusiv pentru a răspunde solicitărilor dumneavoastră.',
      ],
    },
    {
      title: '5. Servicii, oferte și conținut',
      paragraphs: [
        'Descrierile de produse, servicii, parteneriate și proiecte au caracter informativ. Ofertele comerciale sunt transmise individual, după analizarea cererii, și nu constituie o ofertă fermă prin simpla publicare pe site.',
        'Ne străduim să menținem informațiile actualizate, însă nu garantăm că tot conținutul este complet, fără erori sau disponibil în orice moment. Imaginile au rol ilustrativ.',
      ],
    },
    {
      title: '6. Proprietate intelectuală',
      paragraphs: [
        'Textele, grafica, logourile, fotografiile, structura și designul site-ului aparțin Transport Systems SRL sau partenerilor săi și sunt protejate de legislația privind drepturile de autor și mărcile.',
        'Mărcile producătorilor menționați (inclusiv ŠKODA ELECTRIC, ISUZU și altele) aparțin titularilor respectivi. Utilizarea lor pe site are exclusiv scop de identificare a parteneriatelor.',
        'Reproducerea, distribuirea sau utilizarea comercială a conținutului fără acordul prealabil scris este interzisă.',
      ],
    },
    {
      title: '7. Cookie-uri',
      paragraphs: [
        'Site-ul folosește cookie-uri strict necesare pentru funcționare (de exemplu, memorarea limbii selectate și a preferințelor de consimțământ).',
        'Cookie-urile de statistică și marketing sunt activate doar dacă le acceptați din bannerul de cookie-uri sau din setări. Puteți retrage consimțământul oricând din subsolul site-ului, prin „Setări cookie-uri”.',
        'Refuzul cookie-urilor opționale nu afectează accesul la conținutul public al site-ului.',
      ],
    },
    {
      title: '8. Date personale',
      paragraphs: [
        'Datele transmise prin formularul de contact (nume, e-mail, telefon, mesaj) sunt folosite exclusiv pentru a răspunde solicitării și pentru comunicarea ulterioară legată de aceasta.',
        'Nu vindem și nu cedăm datele personale către terți în scopuri de marketing. Le putem partaja doar cu prestatori tehnici necesari funcționării (de exemplu, găzduire) sau dacă legea o impune.',
        'Pentru întrebări privind datele dumneavoastră, ne puteți scrie la transportsystems2021@gmail.com.',
      ],
    },
    {
      title: '9. Răspundere',
      paragraphs: [
        'Site-ul este furnizat „ca atare”. Transport Systems SRL nu răspunde pentru întreruperi, erori tehnice, conținut incomplet sau pentru modul în care terții folosesc informațiile publicate.',
        'Linkurile către site-uri externe (de exemplu, hărți, WhatsApp sau rețele sociale) sunt puse la dispoziție pentru confort. Nu controlăm aceste site-uri și nu suntem responsabili pentru conținutul sau politicile lor.',
      ],
    },
    {
      title: '10. Legea aplicabilă',
      paragraphs: [
        'Acești Termeni și condiții sunt guvernați de legea Republicii Moldova. Orice litigiu va fi soluționat pe cale amiabilă, iar în caz contrar de instanțele competente din Chișinău.',
      ],
    },
    {
      title: '11. Contact',
      paragraphs: [
        'Pentru întrebări legate de acești termeni, ne puteți contacta la: Transport Systems SRL, Str. Grenoble, 257, Chișinău, MD-2001; telefon +373 69 312 300 / +373 60 100 250; e-mail transportsystems2021@gmail.com.',
      ],
    },
  ],
  ru: [
    {
      title: '1. Идентификация оператора',
      paragraphs: [
        'Настоящий сайт управляется компанией Transport Systems SRL, юридический адрес: ул. Гренобль, 257, MD-2001, Кишинёв, Республика Молдова.',
        'Контакты: телефон +373 69 312 300 / +373 60 100 250, e-mail transportsystems2021@gmail.com, сайт https://www.transportsystems.md.',
      ],
    },
    {
      title: '2. Предмет условий',
      paragraphs: [
        'Настоящие Условия использования регулируют доступ к сайту transportsystems.md, а также использование размещённых на нём материалов и сведений об услугах.',
        'Сайт носит информационный характер и представляет деятельность компании: поставка оборудования, запасных частей, сервис и консультации для общественного транспорта. Это не интернет-магазин, платежи через сайт не принимаются.',
      ],
    },
    {
      title: '3. Принятие условий',
      paragraphs: [
        'Получая доступ к сайту или используя его, вы подтверждаете, что прочитали, поняли и приняли настоящие Условия. Если вы не согласны, пожалуйста, не используйте сайт.',
        'Мы оставляем за собой право обновлять эти условия. Действующей является версия, опубликованная на этой странице, с указанной выше датой обновления.',
      ],
    },
    {
      title: '4. Использование сайта',
      paragraphs: [
        'Вы обязуетесь использовать сайт только в законных целях, в соответствии с законодательством Республики Молдова и настоящими условиями.',
        'Запрещается: пытаться получить несанкционированный доступ к системам или данным; копировать, изменять или распространять контент без нашего письменного согласия; передавать через форму обратной связи ложную, вредоносную информацию или сведения, нарушающие права третьих лиц.',
        'Информация, направленная через форму, e-mail или по телефону, должна быть достоверной. Мы используем её исключительно для ответа на ваш запрос.',
      ],
    },
    {
      title: '5. Услуги, предложения и содержание',
      paragraphs: [
        'Описания продуктов, услуг, партнёрств и проектов носят информационный характер. Коммерческие предложения направляются индивидуально после анализа запроса и не являются офертой лишь в силу публикации на сайте.',
        'Мы стремимся поддерживать информацию в актуальном состоянии, однако не гарантируем полноту, отсутствие ошибок или постоянную доступность. Изображения носят иллюстративный характер.',
      ],
    },
    {
      title: '6. Интеллектуальная собственность',
      paragraphs: [
        'Тексты, графика, логотипы, фотографии, структура и дизайн сайта принадлежат Transport Systems SRL или её партнёрам и охраняются законодательством об авторском праве и товарных знаках.',
        'Товарные знаки упомянутых производителей (включая ŠKODA ELECTRIC, ISUZU и другие) принадлежат соответствующим правообладателям и используются на сайте исключительно для обозначения партнёрств.',
        'Воспроизведение, распространение или коммерческое использование контента без предварительного письменного согласия запрещено.',
      ],
    },
    {
      title: '7. Cookie',
      paragraphs: [
        'Сайт использует строго необходимые cookie для работы (например, сохранение выбранного языка и настроек согласия).',
        'Cookie для статистики и маркетинга включаются только если вы примете их в баннере или в настройках. Согласие можно отозвать в любой момент в подвале сайта через «Настройки cookie».',
        'Отказ от необязательных cookie не ограничивает доступ к публичному содержанию сайта.',
      ],
    },
    {
      title: '8. Персональные данные',
      paragraphs: [
        'Данные, переданные через форму обратной связи (имя, e-mail, телефон, сообщение), используются исключительно для ответа на запрос и связанной с ним коммуникации.',
        'Мы не продаём и не передаём персональные данные третьим лицам в маркетинговых целях. Передача возможна только техническим подрядчикам, необходимым для работы сайта (например, хостинг), либо если этого требует закон.',
        'По вопросам, связанным с вашими данными, пишите на transportsystems2021@gmail.com.',
      ],
    },
    {
      title: '9. Ответственность',
      paragraphs: [
        'Сайт предоставляется «как есть». Transport Systems SRL не несёт ответственности за перебои, технические ошибки, неполноту информации или за то, как третьи лица используют опубликованные сведения.',
        'Ссылки на внешние ресурсы (карты, WhatsApp, социальные сети) размещены для удобства. Мы не контролируем эти сайты и не отвечаем за их содержание или политики.',
      ],
    },
    {
      title: '10. Применимое право',
      paragraphs: [
        'Настоящие Условия регулируются законодательством Республики Молдова. Споры решаются путём переговоров, а при отсутствии согласия — компетентными судами Кишинёва.',
      ],
    },
    {
      title: '11. Контакты',
      paragraphs: [
        'По вопросам, связанным с этими условиями: Transport Systems SRL, ул. Гренобль, 257, Кишинёв, MD-2001; телефон +373 69 312 300 / +373 60 100 250; e-mail transportsystems2021@gmail.com.',
      ],
    },
  ],
  en: [
    {
      title: '1. Operator identification',
      paragraphs: [
        'This website is operated by Transport Systems SRL, with its registered office at 257 Grenoble Street, MD-2001, Chisinau, Republic of Moldova.',
        'Contact details: phone +373 69 312 300 / +373 60 100 250, e-mail transportsystems2021@gmail.com, website https://www.transportsystems.md.',
      ],
    },
    {
      title: '2. Purpose of these terms',
      paragraphs: [
        'These Terms and Conditions govern access to and use of transportsystems.md, including the content, materials, and services presented on it.',
        'The website is informational and presents the company’s activity: supply of equipment, spare parts, service, and consulting for public transportation. It is not an online store and does not process payments through the website.',
      ],
    },
    {
      title: '3. Acceptance',
      paragraphs: [
        'By accessing or using the website, you confirm that you have read, understood, and accepted these Terms and Conditions. If you do not agree, please do not use the site.',
        'We reserve the right to update these terms. The version in force is the one published on this page, with the last-updated date indicated above.',
      ],
    },
    {
      title: '4. Use of the website',
      paragraphs: [
        'You agree to use the website only for lawful purposes, in accordance with the laws of the Republic of Moldova and these terms.',
        'You may not: attempt unauthorized access to systems or data; copy, modify, or redistribute content without our written consent; or submit false, malicious, or rights-infringing information through the contact form.',
        'Information sent via the contact form, e-mail, or phone must be accurate. We use it solely to respond to your request.',
      ],
    },
    {
      title: '5. Services, offers, and content',
      paragraphs: [
        'Descriptions of products, services, partnerships, and projects are informational. Commercial offers are issued individually after reviewing a request and do not constitute a binding offer merely by being published on the website.',
        'We aim to keep information up to date, but we do not guarantee that all content is complete, error-free, or available at all times. Images are illustrative.',
      ],
    },
    {
      title: '6. Intellectual property',
      paragraphs: [
        'Texts, graphics, logos, photographs, structure, and design of the website belong to Transport Systems SRL or its partners and are protected by copyright and trademark law.',
        'Trademarks of mentioned manufacturers (including ŠKODA ELECTRIC, ISUZU, and others) belong to their respective owners and are used on the site solely to identify partnerships.',
        'Reproduction, distribution, or commercial use of the content without prior written consent is prohibited.',
      ],
    },
    {
      title: '7. Cookies',
      paragraphs: [
        'The website uses strictly necessary cookies to function (for example, remembering the selected language and consent preferences).',
        'Statistics and marketing cookies are enabled only if you accept them in the cookie banner or settings. You may withdraw consent at any time from the website footer via “Cookie settings”.',
        'Refusing optional cookies does not affect access to the public content of the website.',
      ],
    },
    {
      title: '8. Personal data',
      paragraphs: [
        'Data submitted through the contact form (name, e-mail, phone, message) is used solely to respond to your request and for related communication.',
        'We do not sell or share personal data with third parties for marketing purposes. We may share it only with technical providers required to operate the site (for example, hosting) or where required by law.',
        'For questions about your data, write to transportsystems2021@gmail.com.',
      ],
    },
    {
      title: '9. Liability',
      paragraphs: [
        'The website is provided “as is”. Transport Systems SRL is not liable for interruptions, technical errors, incomplete content, or how third parties use published information.',
        'Links to external sites (for example maps, WhatsApp, or social networks) are provided for convenience. We do not control those sites and are not responsible for their content or policies.',
      ],
    },
    {
      title: '10. Governing law',
      paragraphs: [
        'These Terms and Conditions are governed by the laws of the Republic of Moldova. Any dispute shall first be resolved amicably and, failing that, by the competent courts in Chisinau.',
      ],
    },
    {
      title: '11. Contact',
      paragraphs: [
        'For questions about these terms: Transport Systems SRL, 257 Grenoble Street, Chisinau, MD-2001; phone +373 69 312 300 / +373 60 100 250; e-mail transportsystems2021@gmail.com.',
      ],
    },
  ],
};
