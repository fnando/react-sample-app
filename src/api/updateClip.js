import {patch} from "../utils/http";

export default async function updateClip(slug, params, handler) {
  try {
    handler({state: "pending"});
    const response = await patch(`https://demo5315553.mockable.io/clips/${slug}`, params);
    const clip = await response.json();
    handler({state: "resolved", clip});
  } catch (error) {
    handler({state: "rejected", error: error});
  }
}
