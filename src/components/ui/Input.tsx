interface InputProps {
  type: string;
  placeholder: string;
  text: string;
}

const Input = (props: InputProps) => {
  const { type, placeholder, text } = props;

  return (
    <div className='lg:w-[730px] sm:w-[543px] h-[69px] my-8'>
      <div className='relative'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <svg
            className='w-6 h-6 text-gray-500'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            viewBox='0 0 24 24'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z'
            />
          </svg>
        </span>
        <input
          type={type}
          placeholder={placeholder}
          className='w-full h-full pl-10 pr-4 py-6 border lg:text-xl bg-white border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500'
        />

        <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
          <button className='btn btn-primary bg-blue-500 text-xl font-semibold text-white rounded-xl py-3 px-6 cursor-pointer hover:bg-blue-600'>
            {text}
          </button>
        </span>
      </div>
    </div>
  );
};

export default Input;
