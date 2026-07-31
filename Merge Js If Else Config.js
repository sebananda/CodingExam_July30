function mergeJsIfElseConfig(defaultConfig, overrideConfig) {
  let merged = {};


  for (let key in defaultConfig) {
    merged[key] = defaultConfig[key];
  }

  for (let key in overrideConfig) {
    merged[key] = overrideConfig[key];
  }

 if (!("retries" in merged)) {
  merged.retries = 0;
}

  return merged;

}