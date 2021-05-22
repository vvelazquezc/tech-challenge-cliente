import axios from "axios";

export async function uploadMedia(media) {
  const formData = new FormData();
  formData.append("file", media);
  formData.append("upload_preset", "Gifsme");
  try {
    const MediaResponse = await axios.post(
      "https://api.cloudinary.com/v1_1/musikverein/image/upload",
      formData
    );

    return MediaResponse;
  } catch (error) {
    console.error(error);
  }
}
