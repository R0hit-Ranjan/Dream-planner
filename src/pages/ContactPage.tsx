import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactForm } from '../components/ContactForm';
import { Locations } from '../components/Locations';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHeader
        badge="Direct Booking & Inquiries"
        title="Contact Our Studio"
        subtitle="Check date availability, request customized pricing, or speak directly with founder Rahul Ranjan regarding your upcoming wedding."
      />
      <ContactForm />
      <Locations />
    </div>
  );
};

