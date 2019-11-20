'option strict';

const config = {};

config.networkNodeListJSONurl = 'https://raw.githubusercontent.com/xenium-project/xenium-nodes-json/master/nodes.json';

config.serverHost = '0.0.0.0';

config.serverPort = 8080;

config.networkNodeTimeout = 10;

config.statsUpdateInterval = 15;

config.nodeTTL = 3600;

config.rpcPort = 32779;

config.queueReseedDelay = 60;

config.dnsServers = ['1.1.1.1', '1.0.0.1'];

config.logging = {
  files: {
    level: 'info',
    directory: 'logs',
    flushInterval: 5
  },
  console: {
    level: 'info',
    colors: true
  }
};

module.exports = config;
