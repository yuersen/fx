/**
 * classes operate extensions
 * @author pxyamos
 */

export default class ClassListUtil {
  values: string[][];
  private el: Element[] = [];

  constructor(el: Element | Element[]) {
    const nodeType = (el as Element).nodeType;

    if (nodeType && nodeType === 1) {
      this.el.push(el as Element);
    } else if((el as Element[]).length) {
      this.el = el as Element[];
    }
    this.values = this.getValues();
  }

  /**
   * Add class `name` if not already present.
   * @param  {string[]} ...cls The name of class
   * @returns ClassListUtil
   */
  add(...clns: string[]): ClassListUtil {
    const that = this;
    return that.forEach((el, i) => {
      let updated = false;

      for (let k = 0, l = clns.length; k < l; k++) {
        const cln = clns[k];
        if (that.getIndexInValues(i, cln) === -1) {
          that.values[i].push(cln);
          updated = true;
        }
      }
      if (updated) {
        that.update(i);
      }
    });
  }

  /**
   * List the classname
   * @param  {number} i? The index of element in list
   * @returns string
   */
  list(i?: number): string[] {
    return this.values[i || 0];
  }

  /**
   * Remove class `name` when present, or pass a regular expression to remove any which match.
   * @param  {string[]} ...clns The name of class
   * @returns ClassListUtil
   */
  remove(...clns: string[]): ClassListUtil {
    const that = this;
    return that.forEach((el, i) => {
      let updated = false;
      for (let k = 0, l = clns.length; k < l; k++) {
        const index = that.getIndexInValues(i, clns[k]);
        if (index !== -1) {
          that.values[i].splice(index, 1);
          updated = true;
        }
      }
      if (updated) {
        that.update(i);
      }
    });
  }

  /**
   * Remove all classes matching `RegExp`.
   * @param  {RegExp} reg The regexp of class
   * @returns ClassListUtil
   */
  removeMatched(reg: RegExp): ClassListUtil {
    const that = this;

    return that.forEach((el, i) => {
      const values = that.values[i];
      let updated = false;
      const duplicates = [];
      for (let k = 0, l = values.length; k < l; k++) {
        if (reg.test(values[k])) {
          duplicates.push(k);
          updated = true;
        }
      }

      // 移除元素
      let j = duplicates.length;
      while (j--) {
        values.splice(duplicates[j], 1);
      }
      if (updated) {
        that.update(i);
      }
    });
  }

  /**
   * Returns the class value by index in the collection.
   * @param  {number} idx The index of class, begin 0
   * @returns string
   */
  item(i: number): string {
    const items: string[] = [];
    const values = this.values;

    for (let k = 0, l = values.length; k < l; k++) {
      items.push(values[k][i]);
    }
    return items.join();
  }

  /**
   * Checks if the specified class value exists in the element's class attribute.
   * @param  {string} cls The class name
   * @returns boolean
   */
  contains(cls: string): boolean {
    const that = this;
    let contained = false;
    that.forEach((el, i) => {
      if (that.getIndexInValues(i, cls) !== -1) {
        contained = true;
        return false;
      }
    });
    return contained;
  }

  /**
   * Toggle the class value
   * @param  {string} cls The class name
   * @returns ClassListUtil
   */
  toggle(cls: string): ClassListUtil {
    const that = this;
    return that.forEach((el, idx) => {
      if (that.contains(cls)) {
        that.remove(cls);
      } else {
        that.add(cls);
      }
    });
  }

  /**
   * Clear all className
   * @returns ClassListUtil
   */
  clear(): ClassListUtil {
    const that = this;
    return that.forEach((el, i) => {
      that.values[i] = [];
      that.update(i);
    });
  }

  /**
   * Replaces an existing class with a new class.
   * @param  {string} ocls The old name of class
   * @param  {string} ncls The new name of class
   * @returns ClassListUtil
   */
  replace(ocls: string, ncls: string): ClassListUtil {
    const that = this;

    if (!that.contains(ocls) || !ncls) {
      return that;
    }

    return that.forEach((el, i) => {
      const values = that.values[i];
      let updated = false;
      const duplicates = [];
      for (let k = 0, l = values.length; k < l; k++) {
        if (ocls === values[k]) {
          duplicates.push(k);
          updated = true;
        }
      }

      // 移除元素
      let j = duplicates.length;
      while (j--) {
        values.splice(duplicates[j], 1, ncls);
      }
      if (updated) {
        that.update(i);
      }
    });
  }

  /**
   * 循环遍历元素并执行指定的 callback
   * @param  {(el:Element,index?:number)=>void} callback 遍历元素执行的回调
   * @returns DOMUtil
   */
  private forEach(
    callback: (el: Element, index?: number) => void
  ): ClassListUtil {
    for (let i = 0; i < this.el.length; i++) {
      if (callback.call(this, this.el[i], i) === false) {
        break;
      }
    }
    return this;
  }

  /**
   * Output the index of item in array
   * @param  {any} item search item
   * @returns number
   */
  private getIndexInValues(i: number, item: string): number {
    const arr = this.values[i];
    const l = arr.length;

    for (let k = 0; k < l; k++) {
      if (k in arr && arr[k] === item) {
        return k;
      }
    }
    return -1;
  }

  /**
   * Get all class name
   * @returns string
   */
  private getValues(): string[][] {
    const values: string[][] = [];
    this.forEach(el => {
      values.push(el.className.match(/\S+/g) || []);
    });
    return values;
  }

  /**
   * Update the className
   * @param  {number} i
   * @returns ClassListUtil
   */
  private update(i: number): ClassListUtil {
    const that = this;
    const el = that.el[i];
    const values = that.values[i];

    if (el && values) {
      el.className = values.join(' ');
    }
    return that;
  }
}
