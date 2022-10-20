export function removeItems() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("nickname");
  localStorage.removeItem("badgeIcon");
}

export function getRate(count, total) {
  return Math.round((count / total) * 100) + "%";
}
