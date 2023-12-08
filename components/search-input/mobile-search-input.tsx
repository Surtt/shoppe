'use client';

import { SearchInput } from '@/components';
import { SearchInputProps } from '@/components/search-input/search-input.props';
import useWindowResizeThreshold from '@/hooks/useWindowResize';

interface MobileSearchInputProps extends SearchInputProps {}

const MobileSearchInput = ({ className }: MobileSearchInputProps) => {
  const isMobileSize = useWindowResizeThreshold(768);
  return <>{isMobileSize && <SearchInput className={className} />}</>;
};

export default MobileSearchInput;
