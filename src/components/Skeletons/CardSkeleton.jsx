import tw from 'tailwind-styled-components';

const SkeletonWrapper = tw.div`
border rounded shadow animate-pulse border-gray-700
`;

const SkeletonImageWrapper = tw.div`
flex items-center justify-center h-52 mb-4 rounded bg-gray-700
`;

const SkeletonImage = tw.svg`
w-12 h-12 text-gray-600
`;

const SkeletonBodyWrapper = tw.div`
px-4 pb-6
`;

const SkeletonBodyContentWrapper = tw.div`
flex items-center my-4 space-x-3
`;

const SkeletonBodyTitle = tw.div`
w-48 h-4 rounded-full bg-gray-700
`;

const SkeletonBodySubtitle = tw.div`
h-2.5 rounded-full mt-6 bg-gray-700 w-32 mb-2
`;

const SkeletonFooter = tw.div`
h-2 rounded-full bg-gray-700 mb-2.5
`;

const SkeletonFooterSecondary = tw.div`
h-2 rounded-full bg-gray-700
`;

export default function CardSkeleton() {
  return (
    <SkeletonWrapper role="status">
      <SkeletonImageWrapper>
        <SkeletonImage
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </SkeletonImage>
      </SkeletonImageWrapper>

      <SkeletonBodyWrapper>
        <SkeletonBodyContentWrapper>
          <div>
            <SkeletonBodyTitle />
            <SkeletonBodySubtitle />
          </div>
        </SkeletonBodyContentWrapper>

        <footer className="pt-4">
          <SkeletonFooter />
          <SkeletonFooter />
          <SkeletonFooterSecondary />
        </footer>
      </SkeletonBodyWrapper>
    </SkeletonWrapper>
  );
}
