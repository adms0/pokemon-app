'use client'
import Link from "next/link"
import {StyledHeader, StyledPokemonLogo} from "@/lib/styles/StyleHeader"

const Navbar = () => {
  return (
    // <header className="w-full ease-in-duration-300 fixed top-0 left-0 z-10">
    //   <nav className="flex justify-between items-center max-w-[1366px] mx-auto h-[100px] p-10">
    //     <div>
    //       <Link href={'/'}>
    //         <Image alt='Pokemon logo'
    //           width="0"
    //           height="0"
    //           sizes="150vw"
    //           className="w-full h-auto" loading={"lazy"} src={"/assets/pokemon-logo.webp"} />
    //       </Link>
    //     </div>
    //   </nav>
    // </header>
    <StyledHeader>
      <div className="header-content">
        <Link href={'/'}>
          {/* <Image alt='Pokemon logo'
            width="0"
            height="0"
            sizes="150vw"
            className="w-full h-auto" loading={"lazy"} src={"/assets/pokemon-logo.webp"} /> */}
          <StyledPokemonLogo src={"/assets/pokemon-logo.webp"} alt='Pokemon logo' />
        </Link>
      </div>
    </StyledHeader>
  )
}

export default Navbar