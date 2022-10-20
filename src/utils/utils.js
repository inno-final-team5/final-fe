export function removeItems() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("nickname");
  localStorage.removeItem("badgeIcon");
}
