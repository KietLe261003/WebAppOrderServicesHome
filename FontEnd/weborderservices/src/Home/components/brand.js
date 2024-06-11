import br1 from '../../Layout/assets/images/brand/br1.png';
import br2 from '../../Layout/assets/images/brand/br2.png';
import br3 from '../../Layout/assets/images/brand/br3.png';
import br4 from '../../Layout/assets/images/brand/br4.png';
import br5 from '../../Layout/assets/images/brand/br5.png';
import br6 from '../../Layout/assets/images/brand/br6.png';
function Brand() {
    return (
        <section id="brand" class="brand">
            <div class="container w-full">
                <div class="brand-area">
                    <div class=" flex flex-row justify-center items-center">
                        <div class="item">
                            <a href="/">
                                <img src={br1} alt="brand_image" />
                            </a>
                        </div>
                        <div class="item">
                            <a href="/">
                                <img src={br2} alt="brand_image" />
                            </a>
                        </div>
                        <div class="item">
                            <a href="/">
                                <img src={br3} alt="brand_image" />
                            </a>
                        </div>
                        <div class="item">
                            <a href="/">
                                <img src={br4} alt="brand_image" />
                            </a>
                        </div>

                        <div class="item">
                            <a href="/">
                                <img src={br5} alt="brand_image" />
                            </a>
                        </div>

                        <div class="item">
                            <a href="/">
                                <img src={br6} alt="brand_image" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Brand;