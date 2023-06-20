class BloodChecker {
  constructor(max, bloodCount) {
    this.max = max;
    this.bloodCount = bloodCount;
  }

  testBloodCount() {
    if (this.max < this.bloodCount) {
      this.log();
    }
  }

  log() {
    console.log("Blood rate exceeded!");
  }
}

const bloodTest = new BloodChecker(200, 300);
bloodTest.testBloodCount();
