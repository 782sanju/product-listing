import React from 'react';
import Product from './Product';
const data = {}
export default function SectionTwo() {
    return (
        <div class="component-container">
            <div>
                <div class="Toastify">
                </div>
                <div class="row">
                    <div class="product_listing">
                        
                            <div class="infinite-scroll-component" style={{height: 'auto', overflow: 'auto'}}>
                               <Product />
                               <Product />
                            </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
