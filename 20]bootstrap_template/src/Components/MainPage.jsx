import React from 'react'

export default function MainPage() {
    return (
        <>

            


            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container">

                    <a className="navbar-brand logo-text page-scroll" href="index.html">Tivo</a>


                    <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative" /></a>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-awesome fas fa-bars"></span>
                        <span className="navbar-toggler-awesome fas fa-times"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#features">FEATURES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#details">DETAILS</a>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle page-scroll" href="#video" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">VIDEO</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="article-details.html"><span className="item-text">ARTICLE DETAILS</span></a>
                                    <div className="dropdown-items-divide-hr"></div>
                                    <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
                                    <div className="dropdown-items-divide-hr"></div>
                                    <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
                                </div>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#pricing">PRICING</a>
                            </li>
                        </ul>
                        <span className="nav-item">
                            <a className="btn-outline-sm" href="log-in.html">LOG IN</a>
                        </span>
                    </div>
                </div>
            </nav>



            <header id="header" className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-xl-5">
                                <div className="text-container">
                                    <h1>SaaS App HTML Landing Page</h1>
                                    <p className="p-large">Use Tivo to automate your marketing actions in order to reach a much larger audience</p>
                                    <a className="btn-solid-lg page-scroll" href="sign-up.html">SIGN UP</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-7">
                                <div className="image-container">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src="images/header-software-app.png" alt="alternative" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <svg className="header-frame" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 310"><title>header-frame</title><path className="cls-1" d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z" /></svg>



            <div className="slider-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="slider-container">
                                <div className="swiper-container image-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img className="img-fluid" src="images/customer-logo-1.png" alt="alternative" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img className="img-fluid" src="images/customer-logo-2.png" alt="alternative" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img className="img-fluid" src="images/customer-logo-3.png" alt="alternative" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img className="img-fluid" src="images/customer-logo-4.png" alt="alternative" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img className="img-fluid" src="images/customer-logo-5.png" alt="alternative" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img className="img-fluid" src="images/customer-logo-6.png" alt="alternative" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="cards-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="above-heading">DESCRIPTION</div>
                            <h2 className="h2-heading">Marketing Automation Will Bring More Qualified Leads</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">


                            <div className="card">
                                <div className="card-image">
                                    <img className="img-fluid" src="images/description-1.png" alt="alternative" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Lists Builder</h4>
                                    <p>It's very easy to start creating email lists for your marketing actions. Just create your Tivo account</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-image">
                                    <img className="img-fluid" src="images/description-2.png" alt="alternative" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Campaign Tracker</h4>
                                    <p>Campaigns is a feature we've developed since the beginning because it's at the core of Tivo's functionalities</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-image">
                                    <img className="img-fluid" src="images/description-3.png" alt="alternative" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Analytics Tool</h4>
                                    <p>Tivo collects customer data in order to help you analyse different situations and take required action</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div id="features" className="tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="above-heading">FEATURES</div>
                            <h2 className="h2-heading">Marketing Automation</h2>
                            <p className="p-heading">Take your business strategy to the next level and automatize your marketing tasks to save time for product development. Tivo can provide results in less than 2 weeks</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <ul className="nav nav-tabs" id="argoTabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i className="fas fa-list"></i>List Builder</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i className="fas fa-envelope-open-text"></i>Campaigns</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i className="fas fa-chart-bar"></i>Analytics</a>
                                </li>
                            </ul>

                            <div className="tab-content" id="argoTabsContent">

                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="image-container">
                                                <img className="img-fluid" src="images/features-1.png" alt="alternative" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="text-container">
                                                <h3>List Building Is Easier Than Ever</h3>
                                                <p>It's very easy to start using Tivo. You just need to fill out and submit the <a className="blue page-scroll" href="sign-up.html">Sign Up Form</a> and you will receive access to the app and all of its features in no more than 24h.</p>
                                                <ul className="list-unstyled li-space-lg">
                                                    <li className="media">
                                                        <i className="fas fa-square"></i>
                                                        <div className="media-body">Create and embed on websites newsletter sign up forms</div>
                                                    </li>
                                                    <li className="media">
                                                        <i className="fas fa-square"></i>
                                                        <div className="media-body">Manage forms and landing pages for your services</div>
                                                    </li>
                                                    <li className="media">
                                                        <i className="fas fa-square"></i>
                                                        <div className="media-body">Add and remove subscribers using the control panel</div>
                                                    </li>
                                                </ul>
                                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="image-container">
                                                <img className="img-fluid" src="images/features-2.png" alt="alternative" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="text-container">
                                                <h3>Campaigns Monitoring Tools</h3>
                                                <p>Campaigns monitoring is a feature we've developed since the beginning because it's at the core of Tivo and basically to any marketing activity focused on results.</p>
                                                <ul className="list-unstyled li-space-lg">
                                                    <li className="media">
                                                        <i className="fas fa-square"></i>
                                                        <div className="media-body">Easily plan campaigns and schedule their starting date</div>
                                                    </li>
                                                    <li className="media">
                                                        <i className="fas fa-square"></i>
                                                        <div className="media-body">Start campaigns and follow their evolution closely</div>
                                                    </li>
                                                    <li className="media">
                                                        <i className="fas fa-square"></i>
                                                        <div className="media-body">Evaluate campaign results and optimize future actions</div>
                                                    </li>
                                                </ul>
                                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="image-container">
                                                <img className="img-fluid" src="images/features-3.png" alt="alternative" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="text-container">
                                                <h3>Analytics Control Panel</h3>
                                                <p>Analytics control  panel is important for every marketing team so it's beed implemented from the begging and designed to produce reports based on very little input information.</p>
                                                <ul className="list-unstyled li-space-lg">
                                                    <li className="media">
                                                        <i className="fas fa-square"></i>
                                                        <div className="media-body">If you set it up correctly you will get acces to great intel</div>
                                                    </li>
                                                    <li className="media">
                                                        <i className="fas fa-square"></i>
                                                        <div className="media-body">Easy to integrate in your websites and landing pages</div>
                                                    </li>
                                                    <li className="media">
                                                        <i className="fas fa-square"></i>
                                                        <div className="media-body">The generated reports are important for your strategy</div>
                                                    </li>
                                                </ul>
                                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-3">LIGHTBOX</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>





            <div id="details" className="basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Now Is The Time To Upgrade Your Marketing Solution</h2>
                                <p>Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Understand customers and meet their requirements</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Targeted client base with Tivo's efficient technology</div>
                                    </li>
                                </ul>
                                <a className="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src="images/details.png" alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div id="video" className="basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="image-container">
                                <div className="video-wrapper">
                                    <a className="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
                                        <img className="img-fluid" src="images/video-image.png" alt="alternative" />
                                        <span className="video-play-button">
                                            <span></span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="p-heading">What better way to show off Tivo marketing automation saas app than presenting you some great situations of each module and tool available to users in a video</div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="pricing" className="cards-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="above-heading">PRICING</div>
                            <h2 className="h2-heading">Pricing Options Table</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">BASIC</div>
                                    <div className="price"><span className="currency">$</span><span className="value">Free</span></div>
                                    <div className="frequency">14 days trial</div>
                                    <div className="divider"></div>
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">Email Marketing Module</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">User Control Management</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-times"></i><div className="media-body">List Building And Cleaning</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-times"></i><div className="media-body">Collected Data Reports</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-times"></i><div className="media-body">Planning And Evaluation</div>
                                        </li>
                                    </ul>
                                    <div className="button-wrapper">
                                        <a className="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">ADVANCED</div>
                                    <div className="price"><span className="currency">$</span><span className="value">29.99</span></div>
                                    <div className="frequency">monthly</div>
                                    <div className="divider"></div>
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">Email Marketing Module</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">User Control Management</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">List Building And Cleaning</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-times"></i><div className="media-body">Collected Data Reports</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-times"></i><div className="media-body">Planning And Evaluation</div>
                                        </li>
                                    </ul>
                                    <div className="button-wrapper">
                                        <a className="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">COMPLETE</div>
                                    <div className="price"><span className="currency">$</span><span className="value">39.99</span></div>
                                    <div className="frequency">monthly</div>
                                    <div className="divider"></div>
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">Email Marketing Module</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">User Control Management</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">List Building And Cleaning</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">Collected Data Reports</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i><div className="media-body">Planning And Evaluation</div>
                                        </li>
                                    </ul>
                                    <div className="button-wrapper">
                                        <a className="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className="slider-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-container">
                                <div className="swiper-container text-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/testimonial-1.jpg" alt="alternative" />
                                            </div>
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">I started to use Tivo with the free trial about a year ago and never stopped since then. It does all the repeating marketing tasks and allows me to focus on core development activities like new product research and design. I love it and recommend it to everyone.</div>
                                                <div className="testimonial-author">Jude Thorn - Online Marketer</div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/testimonial-2.jpg" alt="alternative" />
                                            </div>
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Awesome features for the money. I never thought such a low amount of money would bring me so many leads per month. Before Tivo I used the services of an agency which cost 10x more and delivered far less. Highly recommended to marketers focused on results.</div>
                                                <div className="testimonial-author">Roy Smith - Developer</div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/testimonial-3.jpg" alt="alternative" />
                                            </div>
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Tivo is the best marketing automation app for small and medium sized business. It understands the mindset of young entrepreneurs and provides the necessary data for wise marketing decisions. Just give it a try and you will definitely not regret spending your time.</div>
                                                <div className="testimonial-author">Marsha Singer - Online Marketer</div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/testimonial-4.jpg" alt="alternative" />
                                            </div>
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Tivo is one of the greatest marketing automation apps out there. I especially love the Reporting Tools module because it gives me such a great amount of information based on little amounts of input gathered in just few weeks of lightweight usage. Recommended!</div>
                                                <div className="testimonial-author">Ronda Louis - Online Marketer</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="text-container">
                    <div className="above-heading">NEWSLETTER</div>
                    <h2>Stay Updated With The Latest News To Get More Qualified Leads</h2>

                    <form id="newsletterForm" data-toggle="validator" data-focus="false">
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="nemail" required/>
                            <label className="label-control" for="nemail">Email</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group checkbox">
                            <input type="checkbox" id="nterms" value="Agreed-to-Terms" required/>I've read and agree to Tivo's written <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">SUBSCRIBE</button>
                        </div>
                        <div className="form-message">
                            <div id="nmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>

                </div> 
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="icon-container">
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-pinterest-p fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-instagram fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-linkedin-in fa-stack-1x"></i>
                        </a>
                    </span>
                </div> 
            </div>
        </div>
    </div>
</div>




            <svg className="footer-frame" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 79"><defs></defs><title>footer-frame</title><path className="cls-2" d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z" transform="translate(0 -0.188)" /></svg>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-col first">
                                <h4>About Tivo</h4>
                                <p className="p-small">We're passionate about designing and developing one of the best marketing apps in the market</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-col middle">
                                <h4>Important Links</h4>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Our business partners <a className="white" href="#your-link">startupguide.com</a></div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Read our <a className="white" href="terms-conditions.html">Terms & Conditions</a>, <a className="white" href="privacy-policy.html">Privacy Policy</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-col last">
                                <h4>Contact</h4>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <li className="media">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div className="media-body">22 Innovative, San Francisco, CA 94043, US</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-envelope"></i>
                                        <div className="media-body"><a className="white" href="mailto:contact@tivo.com">contact@tivo.com</a> <i className="fas fa-globe"></i><a className="white" href="#your-link">www.tivo.com</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">Copyright © 2020 <a href="https://inovatik.com">Template by Inovatik</a><br />
                                Distributed By <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
