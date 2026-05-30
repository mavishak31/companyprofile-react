import Container from '../ui/Container';
import FooterCard from '../ui/FooterCard';

export default function FooterSection() {
  return (
    <footer className='text-black dark:text-white px-4 py-6 gap-2'>
      <Container>
        {/* bg footer */}

        <FooterCard />
      </Container>
    </footer>
  );
}
