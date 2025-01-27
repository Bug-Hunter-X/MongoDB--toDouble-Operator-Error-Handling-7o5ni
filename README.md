# MongoDB $toDouble Error Handling

This repository demonstrates a common error encountered when using the `$toDouble` operator in MongoDB aggregation pipelines.  The error occurs when attempting to convert non-numeric values to doubles, resulting in pipeline failures.

The `bug.js` file showcases the problematic query.  The `bugSolution.js` file demonstrates robust error handling to mitigate this issue.