import React, { createContext, useState } from "react";

const Context = createContext();

export function MediaProvider({ children }) {
  const [media, setMedia] = useState([]);
  const [mediaList, setMediaList] = useState([]);

  return (
    <Context.Provider value={{ media, setMedia, mediaList, setMediaList }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
