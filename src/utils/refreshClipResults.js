import loadClip from "../api/loadClip";

export default function refreshClipResults(slug, handler) {
  // let currentChecksum = null;
  const tid = setInterval(() => {
    loadClip(slug, handler);
  }, 5000);
  return tid;
}
