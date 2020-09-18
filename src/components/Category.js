import React from 'react';

export default function Category({name}) {
    return (
        <li class="category ">
            <a href="/cake-shop/category/pulses/402">
                <div class="image">
                    <img data-src="https://pogo91-static.s3.amazonaws.com/media/__sized__/category/cropped880529158437356930-thumbnail-120x120-70.jpg" alt="Pulses" class="gm-added gm-lazy" src="https://pogo91-static.s3.amazonaws.com/media/__sized__/category/cropped880529158437356930-thumbnail-120x120-70.jpg" />
                </div>
                <h3>{name}</h3>
            </a>
        </li>
    );
}
