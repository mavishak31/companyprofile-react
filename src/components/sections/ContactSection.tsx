import ContactForm from '../ui/ContactForm';
import Container from '../ui/Container';

export default function ContactSection() {
  return (
    <section id='contact' className='text-black dark:text-white pt-10 px-4'>
      <Container>
        <div className='w-full mx-auto max-w-180'>
          <div className='text-center mb-14'>
            {/* let's talk header */}
            <h2 className='text-black dark:text-white text-4xl font-bold mb-4'>
              Ready to Start? Let’s Talk.
            </h2>

            <p className='text-gray-400'>
              Tell us what you need, and we’ll get back to you soon.
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
