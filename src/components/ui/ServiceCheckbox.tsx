import type { IServiceCheckboxProps } from '../../types';

export default function ServiceCheckbox({
  label,
  checked,
  onChange,
}: IServiceCheckboxProps) {
  return (
    <label className='flex items-center gap-2 cursor-pointer text-sm text-black dark:text-white'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='accent-[#FF623E]'
      />
      {label}
    </label>
  );
}
