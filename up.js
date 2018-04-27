const {execSync} = require('child_process');
execSync('git add -A');
execSync(`git commit -m "${new Date()}"`);
execSync('git push');