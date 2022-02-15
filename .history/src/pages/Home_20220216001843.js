
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <>
 <section className="top_section">
            <div className="container">
                <div className="row top_image">
                    <div className="col-6 text-left  my-auto">
                       <div className="row">
                       <div className="col-12 set_col">
                        <div className="bg_set">
                        <p className="font_set">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue dolor ex, non molestie lacus interdum tincidunt. Aliquam quis iaculis metus, nec consectetur tellus. Proin eu est tortor. Sed erat nibh, pretium id magna faucibus, varius faucibus felis. Morbi id urna ut ex tristique maximus et id odio. Morbi laorevet erat et nuncv lobortis, sit amet luctus turpis egestas. Duis cursus metus purus, ut maximus enim euismod vel. Mauris elementum, mauris ut ultrices interdum, libero velit facilisis diam, nec consectetur est mauris id purus.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-6 text-right second_content">
                    <img src="assets/images/main_image.png" alt="insta_icon" />
                    <h2>CYBERKONG PUNKS</h2>
                    <div className="pricing_tab">
                    <div className="row price_set">
                                    <div className="col-6 col_white">
                                        <p>PRICE</p>
                                    </div>
                                    <div className="col-6 col_black">
                                        <p>0.01 Ξ</p>
                                    </div>
                                </div>
                                
                                <div className="row price_set">
                                    <div className="col-6 col_white">
                                        <p>MINTED</p>
                                    </div>
                                    <div className="col-6 col_black">
                                        <p>0 / 10000</p>
                                    </div>
                                </div>
                                <div className="row price_set pluss_minus_row">
                            <div className="col-2 text-left my-auto text_a">
                            <a className=" singns" href="#"> + </a>                      
                            </div>
                            <div className="col-8 text-center my-auto">
                          <p className="set_p">  5 PCS</p>
                            </div>
                            <div className="col-2 my-auto">
                            <a className=" singns" href="#">
                            -
                            </a>
                            </div> 
                                    </div>
                                    <div className="price_set bg_btn">  <a className=" btn btn-light button_join" href="https://discord.com" target={{target:"_blank"}}>CONNECT WALLET </a> 
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
