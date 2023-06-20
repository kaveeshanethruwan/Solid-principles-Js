const { log } = require("./logger");

// This class only responsible for check blood rate. for the logging purpose their is a separate logger module. both are having single responsibility.
class BloodChecker {
  constructor(max, bloodCount) {
    this.max = max;
    this.bloodCount = bloodCount;
  }

  testBloodCount() {
    if (this.max < this.bloodCount) {
      log();
    }
  }
}

const bloodTest = new BloodChecker(200, 300);
bloodTest.testBloodCount();
