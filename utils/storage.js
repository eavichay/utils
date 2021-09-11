class Storage {
  /**
   * @param {string} key
   * @param {*} [defaultValue]
   */
  constructor(key = 'default', defaultValue = {}) {
    /** @private */
    this.defaultValue = JSON.stringify(defaultValue);
    /** @private */
    this.key = key;
    /** @private */
    this.data = this.load();
  }
  load() {
    try {
      const data = JSON.parse(
        localStorage.getItem(this.key) || this.defaultValue,
      );
      return data;
    } catch (err) {
      return JSON.parse(this.defaultValue);
    }
  }

  save(data = this.data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  getData() {
    return this.data;
  }
}

export { Storage };
