import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import MediaContext from "../context/MediaContext";
import mediaController from "../controllers/mediaController";

export const useMedia = () => {
  const [loading, setLoading] = useState(false);

  const { mediaId: id } = useParams();
  const { media, setMedia } = useContext(MediaContext);

  useEffect(
    function () {
      setLoading(true);

      mediaController.getOne({ id }).then((media) => {
        setMedia(media);
        setLoading(false);
      });
    },
    [id, setMedia]
  );

  return { loading, media, id };
};

export const useMediaList = () => {
  const [loading, setLoading] = useState(false);

  const { state: searchParams } = useLocation();
  const { mediaList, setMediaList } = useContext(MediaContext);

  useEffect(
    function () {
      setLoading(true);

      mediaController.get(searchParams ?? {}).then((mediaList) => {
        setMediaList(mediaList);
        setLoading(false);
      });
    },
    [searchParams, setMediaList]
  );

  return { loading, mediaList, searchParams };
};
