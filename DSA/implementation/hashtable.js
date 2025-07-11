class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) {
        let address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
    }

    get(key) {
        let address = this._hash(key);

        const currentBucket = this.data[address];

        if (currentBucket.length) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }

    keys() {
        const keysArray = [];
        const flatData = this.data.flat();

        flatData.forEach(entry => keysArray.push(entry[0]));

        return keysArray;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
myHashTable.get("grapes");
console.log(myHashTable.keys());

// LOOK-UP => O(1)
// INSERT  => O(1)
// DELETE  => O(1)
// SEARCH  => O(1)