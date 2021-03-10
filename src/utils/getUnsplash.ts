import { createApi } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { ref } from 'vue'

type Photo = Pick<Basic, "width" | "height" | "urls" | "color" | "user">;

export default function getUnsplash() {
  const photo = ref<Photo>();
  const api = createApi({ accessKey: 'NR5QiMgWSMenlz5nxLt0h6u87uSBDGR0lMeaqvtB1Jg' });

  async function searchPhotos() {
    await api.photos
      .getRandom({ query: "cat", orientation: "landscape" })
      .then(result => {
        photo.value = result.response;
      })
      .catch((e) => {
        console.error(e.message);
      });
  }
  searchPhotos();

  return photo;
}