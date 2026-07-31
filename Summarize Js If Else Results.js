function summarizeJsIfElseResults(results) {
  let total = results.length;
  let passed = 0;
  let failed = 0;
  let skipped = 0;

  for (let i = 0; i < results.length; i++) {
    let item = results[i].toLowerCase();

    if (item.includes("pass")) {
      passed++;
    } else if (item.includes("fail")) {
      failed++;
    } else if (item.includes("skip")) {
      skipped++;
    }
  }

  return { total: total, passed: passed, failed: failed, skipped: skipped };
}