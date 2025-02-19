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

    clear() {
        for(let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i]){
                this.buckets[i] = undefined
            }
        }
    }

    keys(){
        let keys = []
        for(let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i]){
                keys.push(this.buckets[i][0][0])
            }
        }
        return keys
    }
    values(){
        let values = []
        for(let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i]){
                values.push(this.buckets[i][0][1])
            }
        }
        return values
    }
    entries() {
        let entries = []
        for(let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i]){
                let entry = []
                entry.push(this.buckets[i][0][0])
                entry.push(this.buckets[i][0][1])
                entries.push(entry)
            }
        }
        return entries
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
console.log('map is clear')
myMap.clear()
console.log("has book1: ",myMap.has('bk001'))
console.log("has book2: ",myMap.has('bk002'))
console.log("has book3: ",myMap.has('bk003'))
console.log('adding books')
myMap.set('bk001', "Black swan")
myMap.set('bk002', "Fooled by randomness")
myMap.set('bk003', "Antifragile")
console.log("has book1: ", myMap.has('bk001'))
console.log("has book2: ", myMap.has('bk002'))
console.log('All keys are: ', myMap.keys())
console.log('All values are: ', myMap.values())
console.log('All entries are: ', myMap.entries())
