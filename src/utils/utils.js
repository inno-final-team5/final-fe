export function removeItems() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("nickname");
  localStorage.removeItem("badgeIcon");
}

export function getRate(count, total) {
  return Math.round((count / total) * 100) + "%";
}

export function timeForToday(date) {
  const today = new Date();
  const timeValue = new Date(date);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return "방금 전";
  if (betweenTime < 60) return `${betweenTime} 분전`;

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour} 시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 7) {
    return `${betweenTimeDay} 일 전`;
  }
  if (betweenTimeDay >= 7) {
    return timeValue.toLocaleDateString("ko-KR");
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}
