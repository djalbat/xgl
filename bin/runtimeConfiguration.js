'use strict';

const minimist = require('minimist'),
      necessary = require('necessary');

const { fileSystemUtilities } = necessary,
      { readFile } = fileSystemUtilities;

class RuntimeConfiguration {
  constructor(port, host, publicDirectoryPath) {
    this.port = port;
    this.host = host;
    this.publicDirectoryPath = publicDirectoryPath;
  }
  
  getPort() {
    return this.port;
  }

  getHost() {
    return this.host;
  }
  
  getPublicDirectoryPath() {
    return this.publicDirectoryPath;
  }

  static fromActiveBuildJSON(activeBuildJSON) {
    const port = activeBuildJSON["port"],
          host = activeBuildJSON["host"],
          publicDirectoryPath = activeBuildJSON["publicDirectoryPath"],
          runtimeConfiguration = new RuntimeConfiguration(port, host, publicDirectoryPath);

    return runtimeConfiguration;
  }

  static fromNothing() {
    const activeBuildJSON = activeBuildJSONFromNothing(),
          runtimeConfiguration = RuntimeConfiguration.fromActiveBuildJSON(activeBuildJSON);

    return runtimeConfiguration;
  }
}

const runtimeConfiguration = RuntimeConfiguration.fromNothing();

module.exports = runtimeConfiguration;

function activeBuildJSONFromNothing(defaultActiveBuild = 'development') {
  const args = minimist(process.argv),
        activeBuild = args["active-build"] || defaultActiveBuild,
        runtimeConfigurationFilePath = 'runtimeConfiguration.json',
        runtimeConfigurationFileContent = readFile(runtimeConfigurationFilePath),
        runtimeConfigurationJSON = JSON.parse(runtimeConfigurationFileContent),
        buildsJSON = runtimeConfigurationJSON["builds"],
        activeBuildJSON = buildsJSON[activeBuild];

  return activeBuildJSON;
}
