import { useState } from "react";
import HeaderPresentational from "./HeaderPresentational";

function HeaderContainer() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 return <HeaderPresentational isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
}

export default HeaderContainer;