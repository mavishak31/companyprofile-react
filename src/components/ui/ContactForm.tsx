import { useState } from 'react';
import { servicesList } from '../../data/contact';
import type { IContactFormData, TAlertStatus } from '../../types';

import ServiceCheckbox from './ServiceCheckbox';
import ContactModal from './ContactModal';

export default function ContactForm() {
  const [form, setForm] = useState<IContactFormData>({
    name: '',
    email: '',
    message: '',
    services: [],
  });

  const [modal, setModal] = useState<TAlertStatus>(null);

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const validateEmail = (email: string) => {
    return email.includes('@');
  };

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.email ||
      !form.message ||
      form.services.length < 1
    ) {
      setModal('failed');
      return;
    }

    if (!validateEmail(form.email)) {
      alert("Format email salah. Email harus mengandung '@'");
      return;
    }

    setModal('success');

    setForm({
      name: '',
      email: '',
      message: '',
      services: [],
    });
  };

  return (
    <>
      {/* FORM */}
      <div className='space-y-5 text-black dark:text-white'>
        <div>
          <label className='text-black dark:text-white text-sm block mb-2'>
            Name
          </label>
          <input
            value={form.name}
            placeholder='Enter your name'
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className='w-full rounded-xl border border-[#DFDFDF] dark:border-[#252B37] text-[#717680] px-4 py-3'
          />
        </div>

        <div>
          <label className='text-black dark:text-white text-sm block mb-2'>
            Email
          </label>
          <input
            value={form.email}
            placeholder='Enter your email'
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className='w-full rounded-xl border border-[#DFDFDF] dark:border-[#252B37] text-[#717680] px-4 py-3'
          />
        </div>

        <div>
          <label className='text-black dark:text-white text-sm block mb-2'>
            Message
          </label>
          <textarea
            rows={5}
            value={form.message}
            placeholder='Enter your message'
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className='w-full rounded-xl border border-[#DFDFDF] dark:border-[#252B37] px-4 py-3 text-[#717680]'
          />
        </div>

        {/* checkbox */}
        <div className='grid gap-4 md:grid-cols-2 text-black dark:text-white'>
          <p>Services</p>
          {servicesList.map((service) => (
            <ServiceCheckbox
              key={service}
              label={service}
              checked={form.services.includes(service)}
              onChange={() => toggleService(service)}
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className='w-full rounded-full bg-[#FF623E] py-3 text-white'
        >
          Send
        </button>
      </div>

      <ContactModal
        isOpen={modal === 'success'}
        type='success'
        onClose={() => setModal(null)}
      />

      <ContactModal
        isOpen={modal === 'failed'}
        type='error'
        onClose={() => setModal(null)}
        onRetry={() => setModal(null)}
      />
    </>
  );
}
