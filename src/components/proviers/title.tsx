import React, { createContext, useState } from "react";



export interface TitleContextType {
  title?: string;
  subtitle?: string;
  setTitle: (title: string) => void;
  setSubtitle: (subtitle: string) => void;
}

export const TitleContext = createContext<TitleContextType | null>(null);


const TitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState("Dashboard Overview");
  const [subtitle, setSubtitle] = useState("You can see all of your apps statistics from here");

  return (
    <TitleContext.Provider value={{ title, subtitle, setTitle, setSubtitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleProvider