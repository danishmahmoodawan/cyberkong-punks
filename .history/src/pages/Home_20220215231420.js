
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <>
 <section className="top_section">
            <div className="container">
                <div className="row">
                    <div className="col-6 text-left top_image">
                       <div className="row">
                       <div className="col-12">
                        <div className="bg_set">
                        <p className="font_set">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue dolor ex, non molestie lacus interdum tincidunt. Aliquam quis iaculis metus, nec consectetur tellus. Proin eu est tortor. Sed erat nibh, pretium id magna faucibus, varius faucibus felis. Morbi id urna ut ex tristique maximus et id odio. Morbi laorevet erat et nuncv lobortis, sit amet luctus turpis egestas. Duis cursus metus purus, ut maximus enim euismod vel. Mauris elementum, mauris ut ultrices interdum, libero velit facilisis diam, nec consectetur est mauris id purus.</p>
                        </div>
                        </div>
                    
                    <div className="col-6 text-right second_content">
                    <img src="assets/images/main_image.png" alt="insta_icon" />
                    <h2>CYBERKONG PUNKS</h2>
                    <div className="pricing_tab row">
                    <div className="price_set">
                                    <div className="col-6 col_white">
                                        <p>MINT PRICE</p>
                                    </div>
                                    <div className="col-6 col_black">
                                        <p>0.39 SOL</p>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-6 col_white">
                                        <p>SUPPLY</p>
                                    </div>
                                    <div className="col-6 col_black">
                                        <p>1111/5555</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 col_white">
                                        <p>CONDITION</p>
                                    </div>
                                    <div className="col-6 col_black">
                                        <p>1 PER TX</p>
                                    </div>
                              
                    </div>
                    </div>
                    </div>
                    </div>
</div>
                    </div>
                </div>
        
        </section>
       
	</>
  );
}

export default Home;
