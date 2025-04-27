import { GuiContext } from '@/components/GuiProvider';
import { useContext } from 'react';

const useGui = () => {
  return useContext(GuiContext);
};

export default useGui;