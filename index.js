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
    
    setItem(key, value) {
      let index = this.hash(key);
      
      if(!this.buckets[index]) this.buckets[index] = [];
      
      this.buckets[index].push([key, value])
    }
    
    getItem(key) {
      let index = this.hash(key);
      
      if(!this.buckets[index]) console.log("There is nothing for this key");
      
      for(let bucket of this.buckets[index]) {
        if(bucket[0] === key) return bucket[1];
      }
    }
  }
  
  const myMap = new HashMap()
  
  myMap.setItem('bk001', "Antifragile");
  myMap.setItem('bk002', "Atomic Habits");
  myMap.setItem('bk003', "Deep Work");
  
  
  console.log(myMap.getItem('bk001'))