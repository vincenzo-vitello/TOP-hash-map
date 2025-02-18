class HashMap {
    constructor(size = 50) {
      this.buckets = new Array(size);
      this.size = size;
    }
    
    hash(key) {
      let hashCode = 0;
        
     const primeNumber = 31;
     for (let i = 0; i < key.length; i++) {
       hashCode = primeNumber * hashCode + key.charCodeAt(i);
     }
  
     return hashCode  % this.size;;
    }
    
    set(key, value) {
      let index = this.hash(key);
      
      if(!this.buckets[index]) this.buckets[index] = [];
      
      this.buckets[index].push([key, value])
    }
    
    get(key) {
        let index = this.hash(key);
      
        if(!this.buckets[index]) { 
        console.log("There is nothing for this key");
        return
        }
      
        for(let bucket of this.buckets[index]) {
            if(bucket[0] === key) return bucket[1];
        }
    }

    has(key) {
        let index = this.hash(key);

        if(!this.buckets[index]) return false;

        for(let bucket of this.buckets[index]) {
            if(bucket[0] === key) return true;
        }
        return false
    }

    remove(key) {
        let index = this.hash(key);
        if (!this.buckets[index]) return false;

        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === key) {
                this.buckets[index].splice(i, 1);
                if (this.buckets[index].length === 0) this.buckets[index] = undefined;
                return true;
            }
        }
        return false;
    }

    length() {
        let bucketsLength = 0;
        for(let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i]) {
                bucketsLength++
            }
        }
        return bucketsLength
    }
}
  
const myMap = new HashMap()

myMap.set('bk001', "Antifragile");
myMap.set('bk002', "Atomic Habits");
myMap.set('bk003', "Deep Work");
  
  
console.log("book1 is: ", myMap.get('bk001'))
console.log("has book1: ", myMap.has('bk001'))
myMap.remove('bk001')
console.log("has book1: ", myMap.has('bk001'))
console.log("Number of stored keys: ", myMap.length())