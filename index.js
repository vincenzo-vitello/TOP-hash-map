class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(this.capacity);
        this.count = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    set(key, value) {
        let index = this.hash(key);
        
        if (!this.buckets[index]) this.buckets[index] = [];

        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
                bucket[1] = value;
                return;
            }
        }

        this.buckets[index].push([key, value]);
        this.count++;

        if (this.count / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    get(key) {
        let index = this.hash(key);
        if (!this.buckets[index]) return null;

        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) return bucket[1];
        }
        return null;
    }

    has(key) {
        return this.get(key) !== null;
    }

    remove(key) {
        let index = this.hash(key);
        if (!this.buckets[index]) return false;

        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === key) {
                this.buckets[index].splice(i, 1);
                this.count--;
                return true;
            }
        }
        return false;
    }

    length() {
        return this.count;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        this.count = 0;
    }

    keys() {
        let keysArray = [];
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let entry of bucket) {
                    keysArray.push(entry[0]);
                }
            }
        }
        return keysArray;
    }

    values() {
        let valuesArray = [];
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let entry of bucket) {
                    valuesArray.push(entry[1]);
                }
            }
        }
        return valuesArray;
    }

    entries() {
        let entriesArray = [];
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let entry of bucket) {
                    entriesArray.push([entry[0], entry[1]]);
                }
            }
        }
        return entriesArray;
    }

    resize() {
        let oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity);
        this.count = 0;

        for (let bucket of oldBuckets) {
            if (bucket) {
                for (let [key, value] of bucket) {
                    this.set(key, value);
                }
            }
        }
    }
}

const myMap = new HashMap();
myMap.set('apple', 'red');
myMap.set('banana', 'yellow');
myMap.set('carrot', 'orange');
myMap.set('dog', 'brown');
myMap.set('elephant', 'gray');
myMap.set('frog', 'green');
myMap.set('grape', 'purple');
myMap.set('hat', 'black');
myMap.set('ice cream', 'white');
myMap.set('jacket', 'blue');
myMap.set('kite', 'pink');
myMap.set('lion', 'golden');

console.log("Before resizing, capacity: ", myMap.capacity, " length: ", myMap.length());
console.log("Entries: ", myMap.entries());

console.log('Adding a new element, resizing the map is necessary.')
myMap.set('moon', 'silver');

console.log("After resizing, capacity: ", myMap.capacity, " length: ", myMap.length());

console.log("Keys: ", myMap.keys());
console.log("Values: ", myMap.values());
console.log("Entries: ", myMap.entries());

console.log("Has 'banana': ", myMap.has('banana'));
console.log("Get 'elephant': ", myMap.get('elephant'));

myMap.remove('apple');
console.log("Removed 'apple', has 'apple': ", myMap.has('apple'));
console.log("New length: ", myMap.length());