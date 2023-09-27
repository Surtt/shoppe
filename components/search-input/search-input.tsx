import cn from 'classnames';
import { SearchInputProps } from '@/components/search-input/search-input.props';
import styles from './search-input.module.css';
import SearchIcon from '../../public/icons/search.svg';

const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <div className={cn(styles.inputWrapper, className)}>
      <SearchIcon className={styles.searchIcon} />
      <input {...props} className={styles.input} />
    </div>
  );
};

export default SearchInput;
