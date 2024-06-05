
// Quick Question #1
    // What does the following code return?
         // new Set([1,1,2,2,3,4])
    // answer:
        // This code will return object with a list of the vaules inside ingoring any duplicate vaulues
        // this is what it returns : Set(4) {1, 2, 3, 4}

// Quick Question #2
    //What does the following code return?
        // [...new Set("referee")].join("")
    // answer:
        // Through a process of interating over the string ingoring the duplicates turning it into an array then back into a string with .join("") the code will reutrn : 'ref'

// Quick Question #3
    //What does the following code return?
        // let m = new Map();
        // m.set([1,2,3], true);
        // m.set([1,2,3], false);
    // answer:
        //  m will reutrn a object where the entries' keys are arrays. This is not possible with objects and only possible with a map. 
        // This is what is returned: // Map(2) {Array(3) => true, Array(3) => false}

// hasDuplicate
    //Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
    
    function hasDuplicate(value){
        const dupSet = new Set(value); 
        return value.length !== dupSet.size;
    }

// vowelCount
    // Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

    function vowelCount(value){
        const vowelValue = [...new Set(value)];
        const vowel = new Set("aeiou")
        const m = new Map()
        const foundvaule =  vowelValue.filter((vowelValue)=> vowel.has(vowelValue))
        for(found of foundvaule){
            if(m.has(found)){
                vaule=m.get(found)
                m.set(found,vaule+1)
            }else{
                m.set(found,1)
            }
        }
        return m 
    }
