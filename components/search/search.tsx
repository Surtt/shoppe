'use client';
import cn from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SearchProps } from '@/components/search/search.props';
import { SearchInput } from '@/components';
import styles from './search.module.css';
import SearchIcon from '../../public/icons/search.svg';

function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !('nodeType' in e)) {
    throw new Error(`Node expected`);
  }
}

const Search = ({ className, ...props }: SearchProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showSearch, setShowSearch] = useState(false);
  const handleShowSearch = useCallback(() => {
    setShowSearch((show) => !show);
  }, []);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      assertIsNode(target);
      if (ref.current && !ref.current?.contains(target as Node)) {
        handleShowSearch();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleShowSearch]);

  return (
    <div ref={ref} {...props} className={cn(className, styles.search)}>
      {!showSearch ? (
        <SearchIcon width={21} height={21} onClick={handleShowSearch} />
      ) : (
        <SearchInput placeholder='Поиск' />
      )}
    </div>
  );
};

export default Search;
