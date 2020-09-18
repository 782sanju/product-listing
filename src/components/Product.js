import React from 'react';

export default function Product() {
    return (
        <div className="product_item d-flex">
            <div class="p_i_image ">
                <div class="p_off">4 %</div>
                <img src="https://pogo91-static.s3.amazonaws.com/media/__sized__/media/18152_14_images6-thumbnail-120x120-70.jpg" alt="product" class="gm-added gm-lazy" />
                </div>
                <div class="p_i_content">
                    <h4>Aashirvaad Shudh Chakki Whole Wheat Atta</h4>
                    <div class="varient_div select-arrow">
                        <select class="varient_select">
                            <option value="{&quot;product&quot;:18152,&quot;variant&quot;:{&quot;selling_price&quot;:361,&quot;name&quot;:&quot;10kg&quot;,&quot;weight&quot;:0,&quot;id&quot;:22175,&quot;quantity&quot;:20,&quot;barcode&quot;:&quot;&quot;,&quot;mrp&quot;:375,&quot;variant_id&quot;:22209,&quot;added_quantity&quot;:0}}">10kg</option>
                            <option value="{&quot;product&quot;:18152,&quot;variant&quot;:{&quot;selling_price&quot;:361,&quot;name&quot;:&quot;10kg&quot;,&quot;weight&quot;:null,&quot;id&quot;:22657,&quot;quantity&quot;:20,&quot;barcode&quot;:&quot;&quot;,&quot;mrp&quot;:375,&quot;variant_id&quot;:22209,&quot;added_quantity&quot;:0}}">10kg</option>
                        </select>
                    </div>
                    <div class="p_price">
                        <div>
                            <span class="old">₹ 375</span>
                            <span class="new">₹ 361</span>
                        </div>
                    </div>
                </div>
                <div class="p_add_to_cart">
                    <a class="addToCart">Add <span class="plus_icon">
                    </span>
                    </a>
                </div>
            </div>
    );
}
