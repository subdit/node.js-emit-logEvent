const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvent = async message => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'logs'));
    }
    // Testing log file

    // testing #2

    await fsPromises.appendFile(
      path.join(__dirname, 'logs', 'eventLog.txt'),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvent;

// console.log(format(new Date(), 'MMddyyyy\tHH:mm:ss'));
// console.log('heehaa!');

// console.log(uuid());
// console.log();
