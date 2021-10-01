function songDecoder(song) {
  const regex = /(WUB)+/g;
  let answer = song.replace(regex, " ");
  return answer.trim();
}
