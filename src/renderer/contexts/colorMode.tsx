import React, { useContext, useState, useMemo, createContext } from 'react';

interface ColorModeContextType {
  colorMode: string;
  setColorMode: (colorMode: string) => void;
}

const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeProvider = ({
  children,
  initialColorMode,
}: {
  children: ReactNode;
  initialColorMode?: 'light' | 'dark';
}) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>(
    initialColorMode || 'light'
  );
  const memoedValue = useMemo(
    () => ({
      colorMode,
      setColorMode,
    }),
    [colorMode, setColorMode]
  );

  return (
    <ColorModeContext.Provider value={memoedValue}>
      {children}
    </ColorModeContext.Provider>
  );
};

const useColorMode = () => {
  return useContext(ColorModeContext);
};

export default useColorMode;
