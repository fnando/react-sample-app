import {post} from "../utils/http";

export default async function createClip(params, handler) {
  try {
    handler({state: "pending"});
    const response = await post("https://demo5315553.mockable.io/clips", params);
    const clip = await response.json();
    handler({state: "resolved", clip});
  } catch (error) {
    handler({state: "rejected", error: error});
  }
}
