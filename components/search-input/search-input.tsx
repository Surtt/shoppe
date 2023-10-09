import cn from 'classnames';
import { SearchInputProps } from '@/components/search-input/search-input.props';
import styles from './search-input.module.css';
import SearchIcon from '@/public/icons/search.svg';

const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <search role='search' className={cn(styles.inputWrapper, className)}>
      <form>
        <SearchIcon className={styles.searchIcon} />
        <input {...props} type='search' className={styles.input} />
      </form>
    </search>
  );
};

export default SearchInput;
