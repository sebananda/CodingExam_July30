function buildJsIfElseRunLabel(suiteName, environment, buildNumber) {
  let trimmedSuite = suiteName.trim();
  let lowerEnv = environment.toLowerCase();
  let buildLabel = "build-" + buildNumber;

  return trimmedSuite + " | " + lowerEnv + " | " + buildLabel;
}