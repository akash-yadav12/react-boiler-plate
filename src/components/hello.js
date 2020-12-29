import React from 'react';

const Hello = ()=>{
    // return (
    //     <div className="hello-class">
    //         <h1>Hello Akash</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'hello', className: 'hello-class'},
        React.createElement('h1',null,'Hello Akash')
    )
}
export default Hello;
