import { useEffect } from "react";

function Navbar() {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            document.querySelector(".navbar").style.backgroundColor = "black";
            document.querySelector(".navbar").style.display = 'flex';
            document.querySelector(".navbar").style.alignItems = 'center';
            document.querySelector(".navbar").style.maxHeight = '90px';
        } else {
            document.querySelector(".navbar").style.backgroundColor = "";
            document.querySelector(".navbar").style.display = '';
            document.querySelector(".navbar").style.alignItems = '';
            document.querySelector(".navbar").style.maxHeight = '';
        }
    };

    useEffect(() => {
        if (window.location.href === "http://localhost:3000/") {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
        else
        {
            document.querySelector(".navbar").style.backgroundColor = "black";
            document.querySelector(".navbar").style.display = 'flex';
            document.querySelector(".navbar").style.alignItems = 'center';
            document.querySelector(".navbar").style.maxHeight = '90px';
        }
    }, []);
    return (
        <div class="top-area">
            <div class="header-area">
                <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" style={{ position: 'fixed', width: '100%' }} data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
                    <div class="container flex flex-row justify-between  ">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i class="fa fa-bars"></i>
                            </button>
                            <a class="navbar-brand" href="index.html">carvilla<span></span></a>
                        </div>
                        <div>
                            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li class=" scroll active"><a href="#home">home</a></li>
                                <li class="scroll"><a href="#service">service</a></li>
                                <li class="scroll"><a href="#featured-cars">featured cars</a></li>
                                <li class="scroll"><a href="#new-cars">new cars</a></li>
                                <li class="scroll"><a href="#brand">brands</a></li>
                                <li class="scroll"><a href="#contact">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="clearfix"></div>
        </div>
    );
}

export default Navbar;