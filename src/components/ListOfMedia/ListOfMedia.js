import React from "react";
import { Media } from "../Media/Media";
import { Spinner } from "../Spinner/Spinner";

import "./ListOfMedia.scss";

export const ListOfMedia = ({ mediaList }) => {
  return !mediaList ? (
    <Spinner />
  ) : (
    <div className="section-listmedia">
      {mediaList.map(({ _id, url }) => (
        <Media id={_id} key={_id} url={url} />
      ))}
    </div>
  );
};

//TODO:
// user: { _id: userId, username: userName }

// userId={userId}
// userName={userName}
