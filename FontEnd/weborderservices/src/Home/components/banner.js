import FillterLayout from "../../Layout/components/fillterLayout";
function Banner() {
    return (
        <section id="home" class="welcome-hero">
            <div class="container">
                <div class="welcome-hero-txt">
                    <h2>get your desired car in resonable price</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua.
                    </p>
                    <button class="welcome-btn" onclick="window.location.href='#'">contact us</button>
                </div>
            </div>
            <FillterLayout />
        </section>
    );
}

export default Banner;