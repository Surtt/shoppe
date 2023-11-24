'use client';
import cn from 'classnames';
import { useRef, useState } from 'react';
import { SearchInput } from '@/components';
import { SearchProps } from '@/components/search/search.props';
import { useClickOutside } from '@/hooks/useClickOutside';
import SearchIcon from '@/public/icons/search.svg';
import styles from './search.module.css';

const Search = ({ className, ...props }: SearchProps) => {
  const clickRef = useRef<HTMLDivElement>(null);
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch(true);
  };

  const handleHideSearch = () => {
    setShowSearch(false);
  };

  useClickOutside(clickRef, handleHideSearch);

  return (
    <div ref={clickRef} {...props} className={cn(className, styles.search)}>
      {!showSearch ? (
        <SearchIcon width={21} height={21} onClick={handleShowSearch} />
      ) : (
        <SearchInput placeholder='Поиск' />
      )}
    </div>
  );
};

export default Search;
