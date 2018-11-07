import {get} from "../utils/http";

export default async function loadResults(slug, handler) {
  try {
    handler({state: "pending"});
    const response = await get(`https://demo5315553.mockable.io/clips/${slug}.json`);
    const results = await response.json();
    results.data[0][0] = (new Date()).toString();
    handler({state: "resolved", results});
  } catch (error) {
    handler({state: "rejected", error: error});
  }
}
