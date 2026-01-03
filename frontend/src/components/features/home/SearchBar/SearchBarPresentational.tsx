import { Search } from 'lucide-react';
import styles from './SearchBar.module.css';

function SearchBarPresentational() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search for IT terms, commands, or concepts..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <Search />
        </button>
      </div>
    </div>
  );
}

export default SearchBarPresentational;
