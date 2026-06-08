import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

type Translations = {
  [key in Language]: {
    nav: { work: string; services: string; about: string; contact: string; };
    hero: { title: string; subtitle: string; btnWork: string; btnContact: string; };
    work: { archive: string; heading: string; };
    manifesto: { quote: string; subquote: string; };
    services: { heading: string; servLabel: string; services: string[]; };
    about: { 
      label: string; 
      heading: string;
      visTitle: string; visDesc: string;
      procTitle: string; procDesc: string;
      globTitle: string; globDesc: string;
    };
    contact: {
      heading: string; desc: string; genInq: string;
      name: string; namePh: string;
      email: string; emailPh: string;
      company: string; companyPh: string;
      details: string; detailsPh: string;
      submit: string;
    };
    footer: { rights: string; };
  }
};

const translations: Translations = {
  es: {
    nav: { work: 'Trabajos', services: 'Servicios', about: 'Nosotros', contact: 'Contacto' },
    hero: { 
      title: 'Historias que merecen ser vistas.', 
      subtitle: 'Creamos comerciales audiovisuales que transforman marcas en experiencias memorables.',
      btnWork: 'Ver trabajos',
      btnContact: 'Iniciar proyecto'
    },
    work: { archive: 'Archivo Curado', heading: 'Trabajos Destacados' },
    manifesto: { 
      quote: '"La atención se gana. \nLa emoción permanece. \nCada plano importa."', 
      subquote: 'La atención se gana. La emoción permanece. Cada plano importa.'
    },
    services: { 
      heading: 'Nuestro Oficio', 
      servLabel: 'Servicios', 
      services: ['Comerciales Audiovisuales', 'Storytelling de Marca', 'Dirección Creativa', 'Producción']
    },
    about: {
      label: 'SOBRE KRAFYX',
      heading: 'Somos un estudio creativo boutique especializado en cine publicitario y contenido de marca. Combinamos cinematografía de alto nivel con lógica de marca estratégica para crear piezas que no solo se ven bien, sino que funcionan.',
      visTitle: 'Visión', visDesc: 'Redefiniendo el estándar audiovisual comercial a través de una lente cinematográfica y obsesión por el detalle.',
      procTitle: 'Proceso', procDesc: 'Desde el concepto hasta la postproducción, gestionamos cada plano para asegurar una narrativa de marca cohesiva y de alto impacto.',
      globTitle: 'Global', globDesc: 'Operamos globalmente. Producimos contenido que se traduce a través de culturas y mercados.'
    },
    contact: {
      heading: 'Iniciar proyecto', desc: 'Cuéntanos sobre tu visión. Creemos algo extraordinario juntos.',
      genInq: 'CONSULTAS GENERALES',
      name: 'Nombre', namePh: 'Tu nombre',
      email: 'Email', emailPh: 'tu@email.com',
      company: 'Compañía', companyPh: 'Marca o Agencia',
      details: 'Detalles del Proyecto', detailsPh: 'Breve descripción de tu proyecto...',
      submit: 'Enviar Consulta'
    },
    footer: { rights: '© 2024 KRAFYX. Todos los derechos reservados.' }
  },
  en: {
    nav: { work: 'Work', services: 'Services', about: 'About', contact: 'Contact' },
    hero: { 
      title: 'Stories worth watching.', 
      subtitle: 'We create commercial films that turn brands into memorable experiences.',
      btnWork: 'View work',
      btnContact: 'Start a project'
    },
    work: { archive: 'Curated Archive', heading: 'Featured Work' },
    manifesto: { 
      quote: '"Attention is earned. \nEmotion remains. \nEvery frame matters."', 
      subquote: 'Attention is earned. Emotion remains. Every frame matters.'
    },
    services: { 
      heading: 'Our Craft', 
      servLabel: 'Services', 
      services: ['Commercial Films', 'Brand Storytelling', 'Creative Direction', 'Production']
    },
    about: {
      label: 'ABOUT KRAFYX',
      heading: 'We are a boutique creative studio specializing in advertising films and branded content. We combine high-end cinematography with strategic brand logic to create visuals that don\'t just look good—they perform.',
      visTitle: 'Vision', visDesc: 'Redefining the standard of commercial audiovisuals through a cinematic lens and obsession with detail.',
      procTitle: 'Process', procDesc: 'From concept to post-production, we manage every frame to ensure a cohesive and high-impact brand narrative.',
      globTitle: 'Global', globDesc: 'Operating globally. We produce content that translates across cultures and markets.'
    },
    contact: {
      heading: 'Start a project', desc: 'Tell us about your vision. Let\'s create something extraordinary together.',
      genInq: 'GENERAL INQUIRIES',
      name: 'Name', namePh: 'Your name',
      email: 'Email', emailPh: 'your@email.com',
      company: 'Company', companyPh: 'Brand or Agency',
      details: 'Project Details', detailsPh: 'Brief description of your project...',
      submit: 'Submit Inquiry'
    },
    footer: { rights: '© 2024 KRAFYX. All rights reserved.' }
  }
};

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations['es'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('es');

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
