import tw from 'tailwind-styled-components';

const FallbackWrapper = tw.div`
relative w-10 h-10 overflow-hidden rounded-full bg-gray-600
`;

const Fallback = tw.svg`
absolute w-12 h-12 text-gray-400 -left-1
`;

export default function FallbackAvatarDropdown() {
  return (
    <FallbackWrapper>
      <Fallback
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        ></path>
      </Fallback>
    </FallbackWrapper>
  );
}
