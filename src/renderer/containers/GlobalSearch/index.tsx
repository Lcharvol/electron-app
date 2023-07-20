import { SearchBar, Dialog } from '@/UI';
import { useState } from 'react';

const GlobalSearch = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <SearchBar onClick={() => setIsDialogOpen(true)} hasShortCut />
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        header={<SearchBar />}
      />
    </>
  );
};

export default GlobalSearch;
