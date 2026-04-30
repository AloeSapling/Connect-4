import React, { createContext, useContext } from "react";
import { Menus } from "../scripts/types";

// Creates an interface for MenuContext where `currentMenu` is of type `Menus` and `setCurrentMenu` is a setState action for type `Menus`
interface MenuContextType {
  currentMenu: Menus;
  setCurrentMenu: React.Dispatch<React.SetStateAction<Menus>>;
}

// Creates the context used for `MenuProvider` and `useMenu`
export const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Provider component that sets the types for its `props` (`children` and `value`); when assigning `value`, you must assign both `currentMenu` and `setCurrentMenu`
// as defined in `MenuContextType` so that `MenuContext.Provider` can correctly provide the context for the useState hook to its `children`; this allows for both
// the component and the main app to share `currentMenu` values
export const MenuProvider: React.FC<{
  children: React.ReactNode;
  value: MenuContextType;
}> = ({ children, value }) => {
  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};

// Custom hook; if all is well, equivalent to `useContext(MenuContext)`, but saves on trouble with importing and types
export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};