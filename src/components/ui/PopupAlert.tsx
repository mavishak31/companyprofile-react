import type { TAlertStatus } from '../../types';

interface IProps {
  status: TAlertStatus;
  onClose: () => void;
}

export default function PopupAlert({ status, onClose }: IProps) {
  if (!status) return null;

  const success = status === 'success';

  return (
    <div className='fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4'>
      <div className='w-full max-w-sm rounded-3xl bg-[#08111C] border border-white/10 overflow-hidden'>
        <div className='flex justify-center py-8'>
          <div className='text-6xl'>{success ? '📩✅' : '📩❌'}</div>
        </div>

        <div className='p-6 text-center'>
          <h3 className='text-white text-lg font-semibold mb-3'>
            {success ? 'Message Received!' : 'Oops! Something went wrong.'}
          </h3>

          <p className='text-gray-400 text-sm mb-6'>
            {success
              ? "Thanks for reaching out — we'll get back to you soon."
              : "We couldn't send your message. Please try again."}
          </p>

          <button
            onClick={onClose}
            className='w-full rounded-full bg-orange-500 py-3 text-white'
          >
            {success ? 'Back to Home' : 'Try Again'}
          </button>
        </div>
      </div>
    </div>
  );
}
