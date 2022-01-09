const { readJsonSync, writeJsonSync } = require('fs-extra');
const { join } = require('path');

const nxJsonPath = join(__dirname, '../nx.json');
const nxJson = readJsonSync(nxJsonPath);
nxJson.taskRunnerOptions.default.runner = "@nrwl/nx-cloud"

writeJsonSync(nxJsonPath, nxJson, { spaces: 2 });
