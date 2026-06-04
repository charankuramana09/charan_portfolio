import React from 'react';
import Section, { SectionHeading } from '../../shared/ui/Section';
import { strings } from '../../data/strings';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const Contact: React.FC = () => {
  return (
    <Section id="contact" aria-label="Contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Work"
        highlight="Together"
        subtitle={strings.contact.subtitle}
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.25fr]">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
};

export default React.memo(Contact);
