import type { IContactModalProps } from '../../types';

import successIcon from '../../assets/icon/success-icon.png';
import failedIcon from '../../assets/icon/failed-icon.png';

export default function ContactModal({
  isOpen,
  type,
  onClose,
  onRetry,
}: IContactModalProps) {
  if (!isOpen) return null;

  const success = type === 'success';

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4'>
      <div className='flex flex-col  md:max-w-129.5 border rounded-2xl border-[#DFDFDF] dark:border-[#252B37]'>
        {/* upside icon success or failed */}
        <div className='w-full md:h-56.25 rounded-tl-2xl rounded-tr-2xl  bg-[#FAFAFA] dark:bg-[#08111F] p-2 gap-2 text-center'>
          <div className='mb-4 flex justify-center'>
            <img
              src={success ? successIcon : failedIcon}
              alt={success ? 'Success' : 'Failed'}
              className='w-35 h-35 md:w-57 md:h-57 object-contain'
            />
          </div>
        </div>
        {/* downside results */}
        <div className='w-full max-w-sm rounded-bl-2xl rounded-br-2xl bg-white dark:bg-black px-6 pt-6 md:px-8 md:pt-8 pb-10 gap-4 text-center'>
          <div className='md:rounded-r-2xl md:rounded-l-2xl '>
            <h3 className='mb-2 text-[18px] md:text-[20px] font-semibold text-black dark:text-white'>
              {success ? 'Message Received!' : 'Oops! Something went wrong.'}
            </h3>

            <p className='mb-6 text-sm md:text-[16px] text-[#717680] dark:text-[#A4A7AE]'>
              {success
                ? 'Thanks for reaching out — we’ll get back to you as soon as possible.'
                : 'We couldn’t send your message. Please try again or check your connection.'}
            </p>

            {success ? (
              <button
                onClick={onClose}
                className='w-full rounded-full bg-[#FF623E] py-3 text-white'
              >
                Back to Home
              </button>
            ) : (
              <button
                onClick={onRetry}
                className='w-full rounded-full bg-[#FF623E] py-3 text-white'
              >
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
