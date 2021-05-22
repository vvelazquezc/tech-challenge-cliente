import React from "react";
import ListOfMedia from "../../components/ListOfMedia";
import { useMediaList } from "../../hooks/useMedia";

export const Home = ({ location: { state } }) => {
  const { mediaList } = useMediaList(state);
  return <ListOfMedia mediaList={mediaList} />;
};
