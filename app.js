const people = [
    {name: "Joe", age: 22},
    {name: "Cheeks", age: 23},
    {name: "Biltona", age: 16},
    {name: "Dorothy", age: 7},
    {name: "TessyBaby", age: 14},
    {name: "Tig", age: 22},
    {name: "Monty", age: 45}
]


const result = people.reduce((groupedPeople, person) => {
    // gets age of each person
    const age = person.age
    
    /* When the accumulator or groupedPeople in this case is "made it is
    made in the form of an object" (signified by the {} in arg2 of the reduce method)

    Whilst looping over each person e.g {name: "Monty", age: 45} if the 
    accumulator object (groupedPeople) does not already have a key that matches the age of 
    the current people being looped over i.e 45 in the case of {name: "Monty", age: 45}.

    Then a new array is made by defualt which will then be used to store that person 
    object which is being looped over. 

    So the persons age is the key of the object and then the default value is just an empty []

    Then we will push that person object (i.e {name: "Monty", age: 45}) into the newly created array.

    We then return the object(groupedPeople) with its 'reduced' values 

    If a persons age is already a key for the object then the person object being looped over will be pushed into the object
    object[age] = {person}
    */
    if(groupedPeople[age] == null) groupedPeople[age] = []
    groupedPeople[age].push(person)
    return groupedPeople
}, {})
// {} above is the intial -> not exlcusive to be an object

console.log(result)

