const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  const modulesPath = path.join(__dirname, '..', 'modules');

  fs.readdirSync(modulesPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .forEach(dir => {
      const moduleEntry = require(path.join(modulesPath, dir.name));
      app.use('/api' + moduleEntry.path, moduleEntry.route);
    });
};
