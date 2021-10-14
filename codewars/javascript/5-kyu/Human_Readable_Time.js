function humanReadable(seconds) {
  let secondsRemaining = seconds;

  let hrs = Math.trunc(seconds / 3600);
  secondsRemaining -= hrs * 3600;

  let mins = Math.trunc(secondsRemaining / 60);

  let secs = secondsRemaining - mins * 60;

  return (
    hrs.toString().padStart(2, "0") +
    ":" +
    mins.toString().padStart(2, "0") +
    ":" +
    secs.toString().padStart(2, "0")
  );
}
