import React, { useState } from 'react';
import CategoryList from './CategoryList';

export default function SectionOne(props) {
    
    const { items, setItems } =useState([
        {name: "Pulses"},
        {name: "Grocery & Staples"},
        {name: "Category1"},
        {name: "Category1"},
        {name: "Category1"},
        {name: "Category1"}
    ]);
    const { start, setStart } = useState(1);
    const { end, setEnd } = useState(5);
   
    function handleLoadMore(){
      
    }
    return (
            <div className="component-container category-list">
                <div className="header">
                    <h1 className="title">CATEGORIES</h1>
                    <a onClick={handleLoadMore}> SEE MORE </a>
                </div>
                <CategoryList data={props.categories} start={start} end={end} />
            </div>
    );
}

/*
export async function getStaticProps() {
   
            const res = await fetch('https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop')
            const categories = await res.json()
            //console.log(JSON.stringify(categories));
            // By returning { props: posts }, the Blog component
            // will receive `posts` as a prop at build time
            return {
              props: {
                categories,
              },
            }
          }
*/