import React from 'react'
import Person from './Person'
function NameList() {
    const names = ["akash","arsh","shraddha","akash"]
    const persons = [
        {
            id:1,
            name:"Bruce",
            age:20
            
        },
        {
            id:2,
            name:'Clark',
            age:21
        },   
        {
            id:3,
            name:'Diana',
            age:22
        }
    ]
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2> )
    
    return  <div>{nameList}</div> 
}

export default NameList
