function countPassingJsIfElseChecks(results) {
  let count = 0;
  for (let i = 0; i < results.length; i++){
    if ((results[i].includes("PASS")) || (results[i].includes("pass")))
      count++;
  }
  return count;
}