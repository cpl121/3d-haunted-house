import GUI from 'lil-gui';
import { useState, createContext } from 'react';

export const GuiContext = createContext<GUI | null>(null);

const GuiProvider = ({ children }: { children: React.ReactNode }) => {
  // Uncomment to use GUI

  // const guiRef = useRef<GUI | null>(null);
  // const [gui, setGui] = useState<GUI | null>(null);
  const [gui] = useState<GUI | null>(null);

  // useEffect(() => {
  //   if (typeof window === 'undefined') return
  //   if (!guiRef.current) {
  //     const _gui = new GUI({ width: 300, title: 'Debug' });
  //     _gui.domElement.style.position = 'fixed';
  //     _gui.domElement.style.top = '16px';
  //     _gui.domElement.style.right = '16px';
  //     _gui.domElement.style.zIndex = '9999';

  //     guiRef.current = _gui;
  //     setGui(_gui);
  //     return () => {
  //       _gui.destroy();
  //     };
  //   }
  // }, []);

  return <GuiContext.Provider value={gui}>{children}</GuiContext.Provider>;
};

export default GuiProvider;