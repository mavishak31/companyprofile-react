type TProps = {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
};

export default function FAQItem({ question, answer, open, onClick }: TProps) {
  return (
    <div className='border-b border-[#DFDFDF] dark:border-[#252B37] py-5'>
      <button
        onClick={onClick}
        className='w-full flex justify-between items-center'
      >
        <span className='font-medium'>{question}</span>

        <span className='text-2xl'>{open ? '−' : '+'}</span>
      </button>

      <div
        className={`
          overflow-hidden
          transition-all duration-300
          ${open ? 'max-h-40 mt-4' : 'max-h-0'}
        `}
      >
        <p className='text-sm text-gray-400 leading-7'>{answer}</p>
      </div>
    </div>
  );
}
