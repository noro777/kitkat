import './Lesson.css'
import Group_771317 from '../../static/images/LessonsPage/Group 771317.png'
import Group_540 from '../../static/images/LessonsPage/Group 540.png'
import Group_771322 from '../../static/images/LessonsPage/Group 771322.png'
import Group_771423 from '../../static/images/LessonsPage/Group 771423.png'
import Group_771424 from '../../static/images/LessonsPage/Group 771424.png'
import Group_771426 from '../../static/images/LessonsPage/Group 771426.png'
import Group_771328 from '../../static/images/LessonsPage/Group 771328.png'
import Group_771425 from '../../static/images/LessonsPage/Group 771425.png'
import Group_771427 from '../../static/images/LessonsPage/Group 771427.png'
import first from '../../static/images/LessonsPage/les1.png'
import second from '../../static/images/LessonsPage/les2.png'
import third from '../../static/images/LessonsPage/les3.png'
import four from '../../static/images/LessonsPage/les4.png'
import Group_771428 from '../../static/images/LessonsPage/Group 771428.png'
import Group_771429 from '../../static/images/LessonsPage/Group 771429.png'
import Group_771430 from '../../static/images/LessonsPage/Group 771430.png'
import Group_771431 from '../../static/images/LessonsPage/Group 771431.png'
import Group_771432 from '../../static/images/LessonsPage/Group 771432.png'
import Group_771433 from '../../static/images/LessonsPage/Group 771433.png'
import Group_77 from '../../static/images/LessonsPage/Group 77.png'
import Rectangle_525 from '../../static/images/LessonsPage/Rectangle 525.png'
import ashxatox1 from '../../static/images/LessonsPage/ashxatox1.png'
import ficone from '../../static/images/LessonsPage/ficone.png'
import twittericone from '../../static/images/LessonsPage/twittericone.png'
import inicone from '../../static/images/LessonsPage/inicone.png'
import ashxatox2 from '../../static/images/LessonsPage/ashxatox2.png'
import ashxatox3 from '../../static/images/LessonsPage/ashxatox3.png'
import Group_771434 from '../../static/images/LessonsPage/Group 771434.png'
import Group_771435 from '../../static/images/LessonsPage/Group 771435.png'
import Group_771436 from '../../static/images/LessonsPage/Group 771436.png'
import Group_670 from '../../static/images/LessonsPage/Group 670.png'
import Group_771369 from '../../static/images/LessonsPage/Group 771369.png'
import Group_771368 from '../../static/images/LessonsPage/Group 771368.png'
// import Group_771367 from '../../static/images/LessonsPage/Group 771367.png'
import Group from '../../static/images/LessonsPage/Group.png'
import done_outline_24px from '../../static/images/LessonsPage/done_outline_24px.png'

import React, {useState} from 'react'

// import word1 from '../../static/images/LessonsPage/word1.png'




const Lessons = () => {

    const [openReg3, setOpenReg3] = useState(false)
    const [openReg4, setOpenReg4] = useState(false)
    const [openReg5, setOpenReg5] = useState(false)

    const onClick3 = () => {
        setOpenReg4(false)
        setOpenReg3(!openReg3)
        setOpenReg5(false)
    }
    const onClick4 = () => {
        setOpenReg4(!openReg4)
        setOpenReg3(false)
        setOpenReg5(false)
    }
    const onClick5 = () => {
        setOpenReg4(false)
        setOpenReg3(false)
        setOpenReg5(!openReg5)
    }



    return (
        <div className="main">
            <section className="big1" style={{display: 'flex'}} >
                <div className="all1">
                    <div className="all1-div1">
                        <p className="div1-p1">
                            Front End ????????????????????????
                        </p>
                        <p className="div1-p2">

                            ??Gloab IT?? ???????????????????????????????? ?????????? ???? ???????? ????????????????????????, ?????? ????????????????????????, ???????????????????????? ?? ???????????????????????????? ?????????????? ?????? ??????-?? ???????????????????? ?? 2017??.-?? ???????????????????? 19???? ??. ?????????????? ????????????: ???????? ???????????????????? ?????? ?????????????????? ?????????????????? ????????????????????, ?????????? ?????????????? ?? ???????????????? ?????? ?????????????? ???????????????????????????????????? ?? ?????????????? ????????: ?????? ?????????????????? ???????? ?????????????? ?????????????? ?????????? ?? ?????????????????????? ????????????????????, ?????????? ???????????????? ???? ?????? ?????????????? ?????????????????? ?????????????? ??????????????????????:
                            ?????????????? ?????? ??????-?? ???????????????????? ?? 2017??.-?? ???????????????????? 19???? ??. ?????????????? ????????????: ???????? ???????????????????? ?????? ?????????????????? ?????????????????? ????????????????????, ?????????? ?????????????? ?? ???????????????? ?????? ?????????????? ???????????????????????????????????? ?? ?????????????? ????????: ?????? ?????????????????? ???????? ?????????????? ?????????????? ?????????? ?? ?????????????????????? ????????????????????, ?????????? ???????????????? ???? ?????? ?????????????? ?????????????????? ?????????????? ??????????????????????:

                        </p>
                        <button className="reg">
                            ????????????????
                        </button>
                    </div>
                    <div className="all1-div2">
                        <div className="all1-div2_container">
                            <div>
                                <img className="img1" src={Group_771317} />
                                <img className="img2" src={Group_540} />
                                <img className="img3" src={Group_771322} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="big2">

                <div className="all2"><p className="all2-p1">?????? ?????? ??????????????????</p>

                    <div className="less">
                        <div className="less1">
                            <div className="leng">
                                <img className="leng1-img1" src={Group_771423} />
                                <p className="leng-p1">1.HTML/CSS</p>
                                <p className="leng-p2">???????? ???????????????????? Front end ???????????????????????? ?????????????????? ??
                                    ???????????????????????? ?????????????????? ???????????????? ?????????????? ?????????????? ????
                                    ?????? ?? Flexsbox-??, SAS-??, ?? ??????????</p>
                            </div>
                            <div className="leng1">
                                <img className="leng1-img1" src={Group_771424} />
                                <p className="leng-p1">3.ReactJS</p>
                                <p className="leng-p2">???????? ???????????????????? Front end ???????????????????????? ?????????????????? ??
                                    ???????????????????????? ?????????????????? ???????????????? ?????????????? ?????????????? ????
                                    ?????? ?? Flexsbox-??, SAS-??, ?? ??????????</p>
                            </div>
                            <div className="leng1">
                                <img className="leng1-img1" src={Group_771426} />
                                <p className="leng-p1">5??? SPA - ??????????????</p>
                                <p className="leng-p2">???????? ???????????????????? Front end ???????????????????????? ?????????????????? ??
                                    ???????????????????????? ?????????????????? ???????????????? ?????????????? ?????????????? ????
                                    ?????? ?? Flexsbox-??, SAS-??, ?? ??????????</p>
                            </div>
                        </div>
                        <div className="less1">
                            <div className="leng">
                                <img className="img5" src={Group_771328} />
                                <p className="leng-p1">2??? Javascript</p>
                                <p className="leng-p2">???????? ???????????????????? Front end ???????????????????????? ?????????????????? ??
                                    ???????????????????????? ?????????????????? ???????????????? ?????????????? ?????????????? ????
                                    ?????? ?? Flexsbox-??, SAS-??, ?? ??????????</p>
                            </div>
                            <div className="leng1">
                                <img className="leng1-img1" src={Group_771425} />
                                <p className="leng-p1">4??? WorkFlow</p>
                                <p className="leng-p2">???????? ???????????????????? Front end ???????????????????????? ?????????????????? ??
                                    ???????????????????????? ?????????????????? ???????????????? ?????????????? ?????????????? ????
                                    ?????? ?? Flexsbox-??, SAS-??, ?? ??????????</p>
                            </div>
                            <div className="leng1">
                                <img className="leng1-img1" src={Group_771427} />
                                <p className="leng-p1">6??? ????????????????????</p>
                                <p className="leng-p2">???????? ???????????????????? Front end ???????????????????????? ?????????????????? ??
                                    ???????????????????????? ?????????????????? ???????????????? ?????????????? ?????????????? ????
                                    ?????? ?? Flexsbox-??, SAS-??, ?? ??????????</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="big3">

                <div className="all3"><p className="all3-p1">?????????????????????? ????????????</p>
                    <p className="all3-p2">???????????????????????? 6 ????????</p>
                    <div className="one">
                        <img src={first} alt="" />
                        <div className="one-div1">
                            <pre className="one-p2">???????????? ??????????                           <span className="one-p3">??????????????????????????          5 ??????????</span></pre>
                            <pre className="one-p3">?????????? ???????????????? ????????????????????                                  ??????????????????????            1 ??????????</pre>
                        </div>
                    </div>
                    <div className="two">
                        <img src={second} alt="" />
                        <div className="one-div1">
                            <pre className="one-p2">?????????????? ??????????                     <span className="one-p3">??????????????????????????          5 ??????????</span></pre>
                            <pre className="one-p3">?????? ??????????????????????????                                           ??????????????????????            1 ??????????</pre>
                            <p className="one-p4"> ???????????????????? ?????????? </p>
                        </div>
                    </div>
                    <div className="tree">
                        <img src={third} alt="" />
                        <div className="one-div1">
                            <pre className="one-p2">???????????? ??????????                       <span className="one-p3">??????????????????????????          5 ??????????</span></pre>
                            <pre className="one-p3">JavaScript                                                                ??????????????????????            1 ??????????</pre>
                        </div>
                    </div>
                    <div className="four">
                        <img src={four} />
                        <div className="one-div1">
                            <pre className="one-p2">?????????????? ??????????                   <span className="one-p3">??????????????????????????          5 ??????????</span></pre>
                            <pre className="one-p3">React.js                                                                  ??????????????????????            1 ??????????</pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className="big4">

                <div className="all4"><p className="all4-p1">?????????????????????? ??????????????</p>
                    <p className="all4-p2">???????????????? ??</p>
                    <div className="all4-edu">
                        <div className="edu">
                            <div className="edu-div1">
                                <img src={Group_771428} alt="" />
                                <p className="edu-p1">?????????????????? ???????????????? ?????????????????????????????????????? ?????????????? ?????? </p>
                            </div>
                            <div className="edu-div1">
                                <img src={Group_771429} alt="" />
                                <p className="edu-p1">24 ?????????????????? ?????????????? ?????????????????????? ?????????????? ?????? </p>
                            </div>
                            <div className="edu-div1">
                                <img src={Group_771430} alt="" />
                                <p className="edu-p1">96 ???????????????????????? </p>
                            </div>
                        </div>
                        <div className="edu">
                            <div className="edu-div1">
                                <img src={Group_771431} alt="" />
                                <p className="edu-p1">5 ?????? ????????????????????
                                    ?????????????????????? ??????</p>
                            </div>
                            <div className="edu-div1">
                                <img src={Group_771432} alt="" />
                                <p className="edu-p1">5 ?????? ?????????????????? ??????????????????</p>
                            </div>
                            <div className="edu-div1">
                                <img src={Group_771433} alt="" />
                                <p className="edu-p1">???????? 6 ?????????? ???????????????? ???? ???????????? ?? ?????????? ???? ?????????? ?????????? ?????? ????????????????</p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <div className="big5">

                <div className="all5"><p className="all4-p1">?????????????????????? ??????????????</p>
                <div className="all5-div2">
                    <div className="all5-div5">
                <div className="all5-div1">
                <img src={Group_77} />
                <button className="reg1" onClick={onClick3}>
                    ???????? 1
                </button>
                {openReg3
                ?
                <div>
                    <button className="reg3">
                    #2 - ??????????????????????, iframe ??????, ??????????????????????
                    </button>
                    <button className="reg3">
                        #3 - head ???????????? ?????????????????? ??????????, ?????? ?????? ???????????????? ????????????????????
                    </button>
                    <button className="reg3">
                        #4 - HTML5 ?????????? ?? ??????????????????????, ???????????????????????? ?????????????????????? ????????????????
                    </button>
                    <button className="reg3">
                        #5 - ???????????????????? CSS-?? ??????, selector-?????? ?? ??????????????????????????
                    </button>
                </div>
                :
                null
                }

                </div>
                <div className="all5-div1">
                <img src={Group_77} />
                <button className="reg1" onClick={onClick4}>
                    ???????? 2
                </button>
                {openReg4
                ?
                                    <div>
                                        <button className="reg4">
                                            #2 - ??????????????????????, iframe ??????, ??????????????????????
                                        </button>
                                        <button className="reg4">
                                            #3 - head ???????????? ?????????????????? ??????????, ?????? ?????? ???????????????? ????????????????????
                                        </button>
                                        <button className="reg4">
                                            #4 - HTML5 ?????????? ?? ??????????????????????, ???????????????????????? ?????????????????????? ????????????????
                                        </button>
                                        <button className="reg4">
                                            #5 - ???????????????????? CSS-?? ??????, selector-?????? ?? ??????????????????????????
                                        </button>
                                    </div>
                :
                null
                }
                </div>
                <div className="all5-div1">
                <img src={Group_77} />
                <button className="reg1" onClick={onClick5}>
                    ???????? 3
                </button>
                {openReg5
                ?
                    <div>
                                        <button className="reg5">
                                            #2 - ??????????????????????, iframe ??????, ??????????????????????
                                        </button>
                                        <button className="reg5">
                                            #3 - head ???????????? ?????????????????? ??????????, ?????? ?????? ???????????????? ????????????????????
                                        </button>
                                        <button className="reg5">
                                            #4 - HTML5 ?????????? ?? ??????????????????????, ???????????????????????? ?????????????????????? ????????????????
                                        </button>
                                        <button className="reg5">
                                            #5 - ???????????????????? CSS-?? ??????, selector-?????? ?? ??????????????????????????
                                        </button>
                    </div>
                :
                null
                }
                </div></div>
                <div className="all5-div3">
                <img className="video" src='' />
                <p className="all5-p1">???????????????????? WWW-????, ???????????????????????? ??????????, ??????????????????, ??????????????????,
                    ???????? ???????????????????? Front end ???????????????????????? ?????????????????? ??
                    ???????????????????????? ?????????????????? ???????????????? ?????????????? ?????????????? ????
                    ?????? ?? Flexsbox-??, SAS-??, ?? ?????????? </p>
                    <pre className="all5-p2">????????????????????????                                1 ?????? 30 ????????</pre>
                    <pre className="all5-p2">???????????? ????????????????????                  <span><img src="word1.png" alt="" />Info</span></pre>
                    <pre className="all5-p2">?????????????????? ????????????                      <span><img src="word1.png" alt="" />Need</span></pre>

                </div>
                </div>
                </div>

            </div>
            <div className="big6">
                <div className="all6"><p className="all4-p1">????????????????????</p>
                    <div className="all6-div1">

                        <div className="all6-div2"><div className="all6-for2"><div className="all6-div5"><div className="all6-div3">
                            <div className="all6-img1"><img src={ashxatox1} alt="" /></div>
                            <div className="all6-div4">
                                <div className="all6-img2"><img src={ficone} alt="" /></div>
                                <div className="all6-img3"><img src="instaicone.png" alt="" /></div>
                                <div className="all6-img3"><img src={twittericone} alt="" /></div>
                                <div className="all6-img4"><img src={inicone} alt="" /></div>
                            </div>

                        </div> <p className="all6-p1">?????????? ????????????????</p></div>
                            <div className="all6-div5"><div className="all6-div3">
                                <div className="all6-img1"><img src={ashxatox2} alt="" /></div>
                                <div className="all6-div4">
                                    <div className="all6-img2"><img src={ficone} alt="" /></div>
                                    <div className="all6-img3"><img src="instaicone.png" alt="" /></div>
                                    <div className="all6-img3"><img src={twittericone} alt="" /></div>
                                    <div className="all6-img4"><img src={inicone} alt="" /></div>
                                </div></div>
                                <p className="all6-p3">?????????? ??????????????????????</p>
                            </div> </div>
                            <div className="all6-div6"><div className="all6-div3">
                                <div className="all6-img1"><img src={ashxatox3} alt="" /></div>
                                <div className="all6-div4">
                                    <div className="all6-img2"><img src={ficone} alt="" /></div>
                                    <div className="all6-img3"><img src="instaicone.png" alt="" /></div>
                                    <div className="all6-img3"><img src={twittericone} alt="" /></div>
                                    <div className="all6-img4"><img src={inicone} alt="" /></div>
                                </div>

                            </div> <p className="all6-p2">???????????? ????????????????</p></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="big7">
                <div className="all7"><p className="all4-p1">???????? ????????????</p>
                    <div className="all7-edu2">
                        <div className="edu2">
                            <div className="edu2-div1">
                                <img src={Group_771434} alt="" />
                                <p className="edu2-p2">???????????????? ??????????????????????</p>
                                <p className="edu2-p1">???????? ?????????????????? ?????? 2017 ?????????????????? ??????????
                                    ???????? ???????????????? ?????? ???????????????? ??????????????????????
                                    ???????????????????????? ???????????????????? ?? ???????????? ???????????? ?????????????? ???????????????????? ?????????? ???????? ???? ?????????? ???????? ????????????????????
                                </p>
                            </div>
                        </div>
                        <div className="edu2">
                            <div className="edu2-div1">
                                <img src={Group_771435} alt="" />
                                <p className="edu2-p2">?????????????????? ???????????????? </p>
                                <p className="edu2-p1">???? ???? ?????????????????????? ?? ???? ?????????????? ???????????????????????? GLOBAL IT - ?????? ???????????????????????? ?????????????????????? ???? ?????????????? ??????????????????????, ???? ???? ???? ?????????????? ???????????????? ??????????</p>
                            </div>
                        </div>
                        <div className="edu2">
                            <div className="edu2-div1">
                                <img src={Group_771436} alt="" />
                                <p className="edu2-p2">?????????????????? ????????????????????  </p>
                                <p className="edu2-p1">???????? ?????? ???????? ?????? ?????????????????????? ?????????????????? ???????????? ?? ???????????? ?????? ?????????????????? ?????? ???????????????? ?????????????????????? ???????? ???????????????? ???????????????? ???????????? ???? ???????????????? ?????? ???????????? ?????????????????? ???????????????????? </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="big8">
                <div className="all8"><div className="all8-div1">
                    <div className="all8-div2">
                        <p className="all8-p1">?????????? ????????????????</p>
                        <p className="all8-p2">???????????????????????? ?????????????? ???????? ????????
                            ?????????????? ????????????????????, ?????? ???????????? ??????
                            ???????????????? IT ???????????? ?????????? ???????????????? ????????????</p>
                        <p className="all8-p3">?????? ???????????????? ?????????? ???????????????????????? ???????????????????? ?? ???????? ???????????????????? ?????????????????????? ?????? ???????? ?????? ????????????????????</p>
                    </div>
                    <div className="vkayakan">   <img src={Group_670} alt="" /></div>
                </div>

                </div>

            </div>
            <div className="big9">
                <div className="all9"><p className="all9-p1">?????????????????????? ????????????????????????</p>
                    <div className="all9-div1">
                        <div className="all9-img1"><img src={Group_771369} alt="" /></div>
                        <div className="all9-img2"><img src={Group_771368} alt="" /></div>
                        <div className="all9-img3"><img  alt="" /></div>
                    </div>

                    <p className="all9-p2"> <u>?????????? ????????????</u></p>
                </div>

            </div>
            <div className="big10">
                <div className="all10"><p className="all9-p1">???????? ???????????? ???????????????????? ?????????????? ???????????? ??????????????????</p>
                    <img className="qartez" src={Group} alt="" />
                </div>

            </div>
            <div className="big11">
                <div className="all11"><p className="all11-p1">???????????????? ????????????????????</p>
                    <p className="all11-p2">???????????????????????? ?????????????????? ????????????????????????</p>
                    <div className="all11-div1">
                        <div className="all11-div1-div1"><pre><img src={done_outline_24px} alt="" />         <span className="all11-div1-div1-span1">?????????????? ??????????????????????</span></pre></div>   <div className="all11-div1-div2"><pre><img src={done_outline_24px} alt="" />         <span className="all11-div1-div1-span1">?????????????? ??????????????????????</span></pre></div>
                    </div>
                    <div className="all11-div2">
                        <div className="all11-div2-div1"><pre><img src={done_outline_24px} alt="" />   <span className="all11-div1-div1-span1">?????????? ??????????</span></pre></div>   <div className="all11-div2-div2"><pre><img src={done_outline_24px} alt="" />   <span className="all11-div1-div1-span1">?????????? ????????????????</span></pre></div>  <div className="all11-div2-div3"><pre><img src="done_outline_24px.png" alt="" />   <span className="all11-div1-div1-span1">??????????????????????????</span></pre></div>
                    </div>
                    <div className="all11-div2">
                        <div className="all11-div2-div1"><pre><img src={done_outline_24px} alt="" />         <span className="all11-div1-div1-span1">??????????????</span></pre></div>   <div className="all11-div2-div2"><pre><img src={done_outline_24px} alt="" />         <span className="all11-div1-div1-span1">????????????????</span></pre></div>  <div className="all11-div2-div3"><pre><img src="done_outline_24px.png" alt="" />         <span className="all11-div1-div1-span1">????????????????</span></pre></div>
                    </div>
                    <p className="all11-p3">???????????????????????? ????????????</p>
                    <p className="all11-p4">?????????????????? ????????????</p>
                    <pre className="all11-p5">230 000 ????????       <span className="all11-span2"><del>270 000</del></span></pre>
                    <p className="all11-p4">?????????????? ?????????????? ??????????????</p>
                    <pre className="all11-p5">38 000 ????????          <span className="all11-span2"><del>45 000</del></span></pre>
                    <div className="all11-div3"><button className="reg2">
                        ????????????????
                    </button></div>
                </div>

            </div>
        </div>

    )
}


export default Lessons
