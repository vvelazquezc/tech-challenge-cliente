# Custom hooks documentation

I have created a custom hooks to use with ReactJs, now we are going to describe the utilization:

## 🧾 useMediaList 🧾

This custom hook, was created to be able to render in a component the media that one wishes.

In my case, what I do is to pass it by parameters through the url what I want to filter in the request, and check if I have params or not, and then, send the request. While I make the request, I return the loading, so that a component Spinner can be loaded, and once I have the answer I fill it in my Context, I change it to false.

```
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

```

## 🧾 UseMedia 🧾

This custom hook, was created to be able to render in a component the media that one wishes.

In my case, what I do is to pass it by parameters through the url what I want to filter in the request, in this case we wanted a specific id. While I make the request, I return the loading, so that a component Spinner can be loaded, and once I have the answer I fill it in my Context, I change it to false.

```
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

```

## With ❤ vvelazquezc !
