import {get} from "../utils/http";

const checksums = [
  null,
  null
];

export default async function loadClip(slug, handler) {
  try {
    handler({state: "pending"});
    const response = await get(`https://demo5315553.mockable.io/clips/${slug}`);
    const clip = await response.json();
    const checksum = checksums.length === 0 ? Date.now() : checksums.pop();
    handler({state: "resolved", checksum, ...clip});
  } catch (error) {
    handler({state: "rejected", error: error});
  }
}
