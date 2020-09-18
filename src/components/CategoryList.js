import React from 'react';
import Category from './Category';
const data = [
    {name: "Pulses"},
    {name: "Grocery & Staples"},
    {name: "Category1"},
    {name: "Category1"},
    {name: "Category1"},
    {name: "Category1"}
]
export default function CategoryList(props) {
    return (
        <ul class="list-unstyled d-flex flex-wrap mt-3">
            {
                props.categories.map((item, i) => <Category key={i} name={item.name} />)
            }
        </ul>
    );
}

 function getInitialProps(){
    
}
