class Logger {
    log(id, result) {
      console.log(`Calculator Logger: [Caller ID: ${id}] Result: ${result}`);
    }
  }
  module.exports = Logger;