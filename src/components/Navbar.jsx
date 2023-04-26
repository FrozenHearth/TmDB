import tw from 'tailwind-styled-components';
import Search from './Search';

const Header = tw.aside`
sticky top-0 md:top-0 z-40 w-full backdrop-blur flex-none 
        transition-colors duration-500 lg:z-50
        lg:border-slate-900/10 border-slate-50/[0.06] md:flex-shrink-0 
        md:mx-0 my-6 md:my-0 md:py-4 md:mt-16 px-[2vw] 
      sm:px-0 md:px-[10vw] 2xl:px-[20vw]
      supports-backdrop-blur:bg-white/60 bg-transparent
`;

const Nav = tw.nav`
block md:flex relative px-4 md:px-0 pb-0 fade scroll-pr-6 items-center
`;

const BrandText = tw.h1`
text-white items-center flex gap-3 font-bold 
md:font-bold hover:text-sky-500 hover:cursor-pointer text-xl md:text-3xl
`;

const NavLinksContainer = tw.div`
flex items-center md:gap-8 pr-0 mb-2 mt-2 md:mt-0 mx-auto
`;

const NavItem = tw.a`
transition-all text-sm md:text-lg hover:text-neutral-200 py-[5px] w-full md:w-[50vw]
`;

export default function Navbar() {
  return (
    <Header>
      <Nav>
        <BrandText>TmDB</BrandText>
        <NavLinksContainer>
          <NavItem>
            <Search />
          </NavItem>
        </NavLinksContainer>
      </Nav>
    </Header>
  );
}
