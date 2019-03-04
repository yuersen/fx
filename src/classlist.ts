/**
 * classes operate extensions
 * @author pxyamos
 */

export default class ClassListUtil {
  values: string[][] = [];
  private elements: Element[] = [];

  constructor(el: Element[] | Element) {
    this.elements = (<Element[]>el).length ? <Element[]>el : [el as Element];
    for (const elem of this.elements) {
      this.values.push(elem.className.match(/\S+/g) || []);
    }
  }

  /**
   * Add class `name` if not already present.
   * @param  {string[]} ...cls The name of class
   * @returns ClassListUtil
   */
  add(...cls: string[]): ClassListUtil {
    const that = this;
    return that.forEach((vals, i) => {
      let updated = false;

      for (const cl of cls) {
        let exists = false;
        for (const val of vals) {
          if (cl === val) {
            exists = true;
            break;
          }
        }
        if (!exists) {
          vals.push(cl);
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
  remove(...cls: Array<string | RegExp>): ClassListUtil {
    const that = this;
    return that.forEach((vals, i) => {
      let updated = false;
      const duplicates = [];

      for (const cl of cls) {
        for (let k = 0; k < vals.length; k++) {
          if (
            cl === vals[k] ||
            ((<RegExp>cl).test && (<RegExp>cl).test(vals[k]))
            ) {
            duplicates.push(k);
            updated = true;
          }
        }
      }
      // 移除元素
      let l = duplicates.length;
      while (l--) {
        vals.splice(duplicates[l], 1);
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
    let items: string[] = [];
    for (const vals of this.values) {
      items = items.concat(vals[i] || []);
    }

    return items.join();
  }

  /**
   * Checks if the specified class value exists in the element's class attribute.
   * @param  {string} cls The class name
   * @returns boolean
   */
  contains(cls: string): boolean {
    for (const vals of this.values) {
      for (const val of vals) {
        if (cls === val) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Toggle the class value
   * @param  {string} cls The class name
   * @returns ClassListUtil
   */
  toggle(cls: string): ClassListUtil {
    if (this.contains(cls)) {
      this.remove(cls);
    } else {
      this.add(cls);
    }
    return this;
  }

  /**
   * Clear all className
   * @returns ClassListUtil
   */
  clear(): ClassListUtil {
    for (let i = 0, l = this.values.length; i < l; i++) {
      this.values[i] = [];
      this.update(i);
    }
    return this;
  }

  /**
   * Replaces an existing class with a new class.
   * @param  {string} ocls The old name of class
   * @param  {string} ncls The new name of class
   * @returns ClassListUtil
   */
  replace(ocls: string, ncls: string): ClassListUtil {
    if (!this.contains(ocls) || !ncls) {
      return this;
    }

    const that = this;
    return that.forEach((vals, i) => {
      let updated = false;
      const duplicates = [];
      for (let k = 0, l = vals.length; k < l; k++) {
        if (ocls === vals[k]) {
          duplicates.push(k);
          updated = true;
        }
      }

      // 移除元素
      for (const idx of duplicates) {
        vals.splice(idx, 1, ncls);
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
    callback: (cls: string[], index?: number) => void
  ): ClassListUtil {
    for (let i = 0; i < this.values.length; i++) {
      if (callback.call(this, this.values[i], i) === false) {
        break;
      }
    }
    return this;
  }

  /**
   * Update the className
   * @param  {number} i
   * @returns ClassListUtil
   */
  private update(i: number): ClassListUtil {
    this.elements[i].className = this.values[i].join(' ');
    return this;
  }
}
