import './Blogs.css'
import './BlogsMedia.css'
import content_logo from '../../static/images/Blogs/img1.svg'
import boximg_1 from '../../static/images/Blogs/boximg_1.svg'

const Blogs = () => {

    return(
        <main>
            <div className="mymain">
                <div className="main_part1">
                    <div className="text1">
                        <div className="my_h1_1"><p>Նորություններ Առաջարկներ</p></div>
                        <br />
                        <br />
                        <div className="my_p_1"><p>«Global IT» ընկերությունում առկան են երեք ֆակուլտետներ, վեբ ծրագրավորման, ծրագրավորման և մուլտիմեդիայի։ «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է մեծացնել ձեր բիզնեսի շահութաբերությունը և նպաստել աճին:</p></div>
                    </div>
                    <div className="img"><img src={content_logo} /></div>
                </div>
                <div className="my_h1_2"><p>Առաջարկներ</p></div>
                <br />
                <br />
                <br />
                <br />


               {/* <!-- MAIN PART 2 -->
                    <!-- CONTAINER --> */}
                    <div className="container">
                        <div className="mec_div">
                        <a href="#" className="my_a">
                            <div className="box_1line_1">
                                <div className="cont_img"><img src={boximg_1} /></div>
                                <div className="box_text">
                                    <div className="box_title"><p>«StartUp» նախագիծ սկսնակների համար</p></div>
                                    <div className="box_about"><p>StartUp նախագիծը նախատեսված է սկսնակ
                                        մասնագետների համար, իրենց սովորածը
                                        և հմտությունները ցուցադրելու համար 
                                        ինչպես նաև․․․</p></div>
                                    <div className="box_term">
                                        <p className="box_term_title">Հայտարարությունը տեղադրվել է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_term">
                                        <p className="box_term_title">Դիմելու վերջնաժամկետն է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_moreinfo">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>


                        <a href="#" className="my_a">
                            <div className="box_2line_1">
                                <div className="cont_img"><img src={boximg_1} /></div>
                                <div className="box_text">
                                    <div className="box_title"><p>«StartUp» նախագիծ սկսնակների համար</p></div>
                                    <div className="box_about"><p>StartUp նախագիծը նախատեսված է սկսնակ
                                        մասնագետների համար, իրենց սովորածը
                                        և հմտությունները ցուցադրելու համար 
                                        ինչպես նաև․․․</p></div>
                                    <div className="box_term">
                                        <p className="box_term_title">Հայտարարությունը տեղադրվել է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_term">
                                        <p className="box_term_title">Դիմելու վերջնաժամկետն է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_moreinfo">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>
                    <br /><br />
                    {/* <!-- /CONTAINER -->

                    <!-- CONTAINER --> */}
                        <a href="#" className="my_a">
                            <div className="box_1line_1">
                                <div className="cont_img"><img src={boximg_1} /></div>
                                <div className="box_text">
                                    <div className="box_title"><p>«StartUp» նախագիծ սկսնակների համար</p></div>
                                    <div className="box_about"><p>StartUp նախագիծը նախատեսված է սկսնակ
                                        մասնագետների համար, իրենց սովորածը
                                        և հմտությունները ցուցադրելու համար 
                                        ինչպես նաև․․․</p></div>
                                    <div className="box_term">
                                        <p className="box_term_title">Հայտարարությունը տեղադրվել է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_term">
                                        <p className="box_term_title">Դիմելու վերջնաժամկետն է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_moreinfo">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>


                        <a href="#" className="my_a">
                            <div className="box_2line_1">
                                <div className="cont_img"><img src={boximg_1} /></div>
                                <div className="box_text">
                                    <div className="box_title"><p>«StartUp» նախագիծ սկսնակների համար</p></div>
                                    <div className="box_about"><p>StartUp նախագիծը նախատեսված է սկսնակ
                                        մասնագետների համար, իրենց սովորածը
                                        և հմտությունները ցուցադրելու համար 
                                        ինչպես նաև․․․</p></div>
                                    <div className="box_term">
                                        <p className="box_term_title">Հայտարարությունը տեղադրվել է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_term">
                                        <p className="box_term_title">Դիմելու վերջնաժամկետն է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_moreinfo">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>
                    <br /><br />
                    {/* <!-- /CONTAINER -->

                    <!-- CONTAINER --> */}
                        <a href="#" className="my_a">
                            <div className="box_1line_1">
                                <div className="cont_img"><img src={boximg_1} /></div>
                                <div className="box_text">
                                    <div className="box_title"><p>«StartUp» նախագիծ սկսնակների համար</p></div>
                                    <div className="box_about"><p>StartUp նախագիծը նախատեսված է սկսնակ
                                        մասնագետների համար, իրենց սովորածը
                                        և հմտությունները ցուցադրելու համար 
                                        ինչպես նաև․․․</p></div>
                                    <div className="box_term">
                                        <p className="box_term_title">Հայտարարությունը տեղադրվել է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_term">
                                        <p className="box_term_title">Դիմելու վերջնաժամկետն է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_moreinfo">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>
                        


                        <a href="#" className="my_a">
                            <div className="box_2line_1">
                                <div className="cont_img"><img src={boximg_1} /></div>
                                <div className="box_text">
                                    <div className="box_title"><p>«StartUp» նախագիծ սկսնակների համար</p></div>
                                    <div className="box_about"><p>StartUp նախագիծը նախատեսված է սկսնակ
                                        մասնագետների համար, իրենց սովորածը
                                        և հմտությունները ցուցադրելու համար 
                                        ինչպես նաև․․․</p></div>
                                    <div className="box_term">
                                        <p className="box_term_title">Հայտարարությունը տեղադրվել է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_term">
                                        <p className="box_term_title">Դիմելու վերջնաժամկետն է՝</p>
                                        <p>20.05.2021</p>
                                    </div>
                                    <div className="box_moreinfo">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    {/* <!-- /CONTAINER --> */}
                    <br /><br />
                    
         
                </div>
                {/* <!--MAIN_PART2--> */}
                
                

                <br /><br/><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="my_h1_2"><p>Նորություններ</p></div>
                <br /><br /><br /><br />
                


                {/* <!--MAIN_PART3--> */}
                <div className="main_part3">
                    {/* <!-- CONTAINER --> */}
                    <div className="container_sug">
                        <div className="mec_div">
                        <a href="#" className="my_a1">
                            <div className="box_2line_1_sug">
                                <div className="cont_img_sug"><img src={boximg_1} /></div>
                                <div className="box_text_sug">
                                    <div className="box_title_sug"><p>«IBM»-ը հրապարակել է պահանջված ծրագրավորման լեզուների ցանկը</p></div>
                                    <div className="box_about_sug"><p>«IBM»-ը հրապարակել է պահանջված 
                                        ծրագրավորման լեզուների ցանկը, որը 
                                        գլխավորում է «c++» ծրագրավորման լեզուն,
                                        իսկ երկրորդ հորիզոնականում ․․․</p></div>
                                    
                                    <div className="box_moreinfo_sug">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>


                        <a href="#" className="my_a1">
                            <div className="box_2line_1_sug">
                                <div className="cont_img_sug"><img src={boximg_1} /></div>
                                <div className="box_text_sug">
                                    <div className="box_title_sug"><p>«IBM»-ը հրապարակել է պահանջված ծրագրավորման լեզուների ցանկը</p></div>
                                    <div className="box_about_sug"><p>«IBM»-ը հրապարակել է պահանջված 
                                        ծրագրավորման լեզուների ցանկը, որը 
                                        գլխավորում է «c++» ծրագրավորման լեզուն,
                                        իսկ երկրորդ հորիզոնականում ․․․</p></div>
                                    
                                    <div className="box_moreinfo_sug">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>
                    <br /><br />
                    {/* <!-- /CONTAINER -->

                    <!-- CONTAINER --> */}
                        <a href="#" className="my_a1">
                            <div className="box_2line_1_sug">
                                <div className="cont_img_sug"><img src={boximg_1} /></div>
                                <div className="box_text_sug">
                                    <div className="box_title_sug"><p>«IBM»-ը հրապարակել է պահանջված ծրագրավորման լեզուների ցանկը</p></div>
                                    <div className="box_about_sug"><p>«IBM»-ը հրապարակել է պահանջված 
                                        ծրագրավորման լեզուների ցանկը, որը 
                                        գլխավորում է «c++» ծրագրավորման լեզուն,
                                        իսկ երկրորդ հորիզոնականում ․․․</p></div>
                                    
                                    <div className="box_moreinfo_sug">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>

                        <a href="#" className="my_a1">
                            <div className="box_2line_1_sug">
                                <div className="cont_img_sug"><img src={boximg_1} /></div>
                                <div className="box_text_sug">
                                    <div className="box_title_sug"><p>«IBM»-ը հրապարակել է պահանջված ծրագրավորման լեզուների ցանկը</p></div>
                                    <div className="box_about_sug"><p>«IBM»-ը հրապարակել է պահանջված 
                                        ծրագրավորման լեզուների ցանկը, որը 
                                        գլխավորում է «c++» ծրագրավորման լեզուն,
                                        իսկ երկրորդ հորիզոնականում ․․․</p></div>
                                    
                                    <div className="box_moreinfo_sug">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>
                    <br /><br /><br />
                    {/* <!-- /CONTAINER -->

                    <!-- CONTAINER --> */}
                        <a href="#" className="my_a1">
                            <div className="box_2line_1_sug">
                                <div className="cont_img_sug"><img src={boximg_1} /></div>
                                <div className="box_text_sug">
                                    <div className="box_title_sug"><p>«IBM»-ը հրապարակել է պահանջված ծրագրավորման լեզուների ցանկը</p></div>
                                    <div className="box_about_sug"><p>«IBM»-ը հրապարակել է պահանջված 
                                        ծրագրավորման լեզուների ցանկը, որը 
                                        գլխավորում է «c++» ծրագրավորման լեզուն,
                                        իսկ երկրորդ հորիզոնականում ․․․</p></div>
                                    
                                    <div className="box_moreinfo_sug">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>


                        <a href="#" className="my_a1">
                            <div className="box_2line_1_sug">
                                <div className="cont_img_sug"><img src={boximg_1} /></div>
                                <div className="box_text_sug">
                                    <div className="box_title_sug"><p>«IBM»-ը հրապարակել է պահանջված ծրագրավորման լեզուների ցանկը</p></div>
                                    <div className="box_about_sug"><p>«IBM»-ը հրապարակել է պահանջված 
                                        ծրագրավորման լեզուների ցանկը, որը 
                                        գլխավորում է «c++» ծրագրավորման լեզուն,
                                        իսկ երկրորդ հորիզոնականում ․․․</p></div>
                                    
                                    <div className="box_moreinfo_sug">
                                        <p>Իմանալ Ավելին</p>
                                    </div>

                                </div>
                            </div>
                        </a>
                    </div>

                    {/* <!-- /CONTAINER --> */}
                    <br /><br />
                    
         
                </div>
                {/* <!--/MAIN_PART3--> */}

                
               

             </div>
            <br /><br /><br />
        </main>
    )
}

export default Blogs