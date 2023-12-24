import React from 'react'
import bannerIcon from '../images/banner-icon.svg';
import banerbottom from '../images/baner-bottom.svg';
import whychoose from '../images/why-choose.png';
import arroeround from '../images/arroe-round.png';
import eyeicon from '../images/eye-icon.png';
import icon2 from '../images/icon2.png';
import intellience from '../images/intellience.svg';
import stap1 from '../images/stap1.svg';
import stap2 from '../images/stap2.svg';
import stap3 from '../images/stap3.svg';
import userfriendly from '../images/user-firendly.svg';
import arrowround2 from '../images/arrow-round2.png';
import icon1 from '../images/icon_1.png';
import explore2 from '../images/explore2.svg'


const MainSection = () => {

    return ( <>

            <div class="banner-section">
                <div class="container">
                    <div class="row">
                        <div class="banner-text">
                            <h1>Welcome to <span>AI Resume Maker !</span> Your path to professional success !</h1>
                            <a href="#" class="btn2">Start building</a>
                        </div>
                        <div class="banner_icon_text">
                            <div class="box box1">
                                <div class="icon-box">
                                    <img src={bannerIcon} alt="#" />
                                </div>
                                <div class="text">Templates Library</div>
                            </div>
                            <div class="box box2">
                                <div class="icon-box">
                                    <img src={bannerIcon} alt="#" />
                                </div>
                                <div class="text">Real-time preview</div>
                            </div>
                            <div class="box box3">
                                <div class="icon-box">
                                    <img src={bannerIcon} alt="#" />
                                </div>
                                <div class="text">Keyword Optimization</div>
                            </div>
                            <div class="box box4">
                                <div class="icon-box">
                                    <img src={bannerIcon} alt="#" />
                                </div>
                                <div class="text">Dynamic Content Generation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="banner-bottom">
                <div class="container">
                    <img src={banerbottom} alt="#" />
                </div>
            </div>

            <div class="why-choose">
                <div class="container">
                    <div class="row flex space-between">
                        <div class="col">
                            <h2>Why choose AI resume maker?</h2>
                            <div class="img-box">
                                <img src={whychoose} alt="#" />
                            </div>
                            <img src={arroeround} class="arrow-round" alt="#" />
                        </div>
                        <div class="col">
                            <div class="content-box">
                                <div class="icon-box">
                                    <img src={eyeicon} alt="#" />
                                </div>
                                <div class="text">
                                    <h3>Real-time preview</h3>
                                    <p>Preview the resumes real-time while adding the details.</p>
                                </div>
                            </div>
                            <div class="content-box">
                                <div class="icon-box">
                                    <img src={icon2} alt="#" />
                                </div>
                                <div class="text">
                                    <h3>Templates Library</h3>
                                    <p>Select from a wide range of templates
                                        that suits your professional nee</p>
                                </div>
                            </div>
                            <div class="content-box">
                                <div class="icon-box">
                                    <img src={icon2} alt="#" />
                                </div>
                                <div class="text">
                                    <h3>Dynamic Content Generation</h3>
                                    <p>Automatically creates content based on
                                        your inputs.</p>
                                </div>
                            </div>
                            <div class="content-box">
                                <div class="icon-box">
                                    <img src={icon2} alt="#" />
                                </div>
                                <div class="text">
                                    <h3>Keyword optimization</h3>
                                    <p>Strategically select and incorporate
                                        relevant keywords within the content of
                                        your resume or CV</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="intelligent-guidence">
                <div class="container">
                    <div class="row flex">
                        <div class="col">
                            <h2>Intelligent Guidance</h2>
                            <p>Our AI-powered platform provides step-by-step guidance as you build your resume. From selecting
                                the right template to tailoring content, our AI ensures your resume reflects your unique
                                strengths.</p>
                            <a href="#" class="btn">Try now</a>
                        </div>
                        <div class="col">
                            <img src={intellience} alt="#" />
                        </div>
                        <div class="stap-guidence w-100">
                            <ul class="flex space-between">
                                <li>
                                    <div class="icon-box">
                                        <img src={stap1} alt="#" />
                                    </div>
                                    <div class="text">
                                        Step by step guidance
                                    </div>
                                </li>
                                <li>
                                    <div class="icon-box">
                                        <img src={stap2} alt="#" />
                                    </div>
                                    <div class="text">
                                        Select from curated templates
                                    </div>
                                </li>
                                <li>
                                    <div class="icon-box">
                                        <img src={stap3} alt="#" />
                                    </div>
                                    <div class="text">
                                        Realtime resume preview
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="friendly-nterface">
                <div class="container">
                    <div class="row flex space-between">
                        <div class="col">
                            <img src={userfriendly} alt="#" />
                        </div>
                        <div class="col">
                            <h2>User-Friendly Interface</h2>
                            <p>No more struggling with complex formatting tools. Our intuitive interface makes it easy to enter
                                your information, choose from a variety of templates, and customize your resume effortlessly.
                            </p>
                            <img src={arrowround2} class="arroe_round2" alt="#" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="explore-library">
                <div class="container">
                    <div class="text_center">
                        <h2>Explore the library</h2>
                    </div>
                </div>
                <div class="explore-wrapper" style={{ display: 'flex' }}>
                    <div>
                        <div class="explore-box">
                            <img src={explore2} alt="#" />
                        </div>
                    </div>
                    <div>
                        <div class="explore-box">
                            <img src={explore2} alt="#" />
                        </div>
                    </div>
                    <div>
                        <div class="explore-box">
                            <img src={explore2} alt="#" />
                        </div>
                    </div>
                    <div>
                        <div class="explore-box">
                            <img src={explore2} alt="#" />
                        </div>
                    </div>
                    <div>
                        <div class="explore-box">
                            <img src={explore2} alt="#" />
                        </div>
                    </div>
                    <div>
                        <div class="explore-box">
                            <img src={explore2} alt="#" />
                        </div>
                    </div>
                    <div>
                        <div class="explore-box">
                            <img src={explore2} alt="#" />
                        </div>
                    </div>
                    <div>
                        <div class="explore-box">
                            <img src={explore2} alt="#" />
                        </div>
                    </div>
                </div>

            </div>

            <div class="ai-powered">
                <div class="container">
                    <div class="row">
                        <h2>Join the AI-Powered Revolution <br />
                            in Resume Building <img src={icon1} alt="#" /></h2>
                        <p>Creating an outstanding resume has never been this effortless. With AI Resume Maker, you're not just
                            crafting a <br /> document—you're shaping your professional future.</p>
                        <a href="#" class="btn">Get started today</a>
                    </div>
                </div>
            </div>
        </>)
}

export default MainSection;
