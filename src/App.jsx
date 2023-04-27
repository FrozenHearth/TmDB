import Navbar from './components/Navbar';
import PopularMovies from './components/PopularMovies';
import tw from 'tailwind-styled-components';

const PageWrapper = tw.div`
min-h-screen bg-gradient-to-r from-gray-900 to-slate-800 antialiased"
`;

const ContentWrapper = tw.main`
flex-auto min-w-0 md:mt-0 flex flex-col py-8 md:py-12 px-[6vw] 
md:px-[8vw] 2xl:px-[20vw] justify-center
`;

function App() {
  return (
    <PageWrapper>
      <Navbar />
      <ContentWrapper>
        <PopularMovies />
      </ContentWrapper>
    </PageWrapper>
  );
}

export default App;
