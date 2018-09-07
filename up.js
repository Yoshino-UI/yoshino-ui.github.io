const {execSync} = require('child_process');
execSync('git config user.name "ShanaMaid"');
execSync('git config user.email "uestczeng@gmail.com"');
execSync('git add -A');
execSync(`git commit -m "${new Date()}"`);
execSync('git push');