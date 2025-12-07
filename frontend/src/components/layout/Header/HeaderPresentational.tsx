import { BookOpen, HelpCircle, Info, Menu, User, X } from "lucide-react";
import styles from "./Header.module.css";
import type { Dispatch, SetStateAction } from "react";

interface IHeaderPresentational {
	isMenuOpen: boolean;
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function HeaderPresentational({isMenuOpen, setIsMenuOpen}: IHeaderPresentational) {
 return (
      <header className={styles.header}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <div className={styles.logoIcon}>
              <BookOpen />
            </div>
            <h1 className={styles.logoText}>ITEng Dictionary</h1>
          </div>

          {/* Desktop Icon Buttons */}
          <div className={styles.iconButtons}>
            <button className={styles.iconButton} title="Help">
              <HelpCircle />
            </button>
            <button className={styles.iconButton} title="Profile">
              <User />
            </button>
            <button className={styles.iconButton} title="Information">
              <Info />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              <button className={styles.mobileMenuItem}>
                <HelpCircle />
                <span>Help</span>
              </button>
              <button className={styles.mobileMenuItem}>
                <User />
                <span>Profile</span>
              </button>
              <button className={styles.mobileMenuItem}>
                <Info />
                <span>Information</span>
              </button>
            </div>
          </div>
        )}
      </header>
 );
}

export default HeaderPresentational;