import c1 from '../../Layout/assets/images/clients/c1.png';
import c2 from '../../Layout/assets/images/clients/c2.png';
import c3 from '../../Layout/assets/images/clients/c3.png';
function ClientSay() {
    return (
        <section id="clients-say" class="clients-say">
            <div class="container">
                <div class="section-header">
                    <h2>what our clients say</h2>
                </div>
                <div class="flex flex-row w-full">
                    <div class="flex flex-row w-full items-center justify-center">
                        <div class="w-full sm:w-1/4 m-10">
                            <div class="single-testimonial-box">
                                <div class="testimonial-description">
                                    <div class="testimonial-info">
                                        <div class="flex justify-center">
                                            <img src={c1} alt="#" />
                                        </div>
                                    </div>
                                    <div class="testimonial-comment">
                                        <p>
                                            Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
                                        </p>
                                    </div>
                                    <div class="testimonial-person">
                                        <h2><a href="/">tomas lili</a></h2>
                                        <h4>new york</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/4 m-10">
                            <div class="single-testimonial-box">
                                <div class="testimonial-description">
                                    <div class="testimonial-info">
                                        <div class="flex justify-center">
                                            <img src={c2} alt="#" />
                                        </div>
                                    </div>
                                    <div class="testimonial-comment">
                                        <p>
                                            Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
                                        </p>
                                    </div>
                                    <div class="testimonial-person">
                                        <h2><a href="/">romi rain</a></h2>
                                        <h4>london</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/4 m-10 text-center">
                            <div class="single-testimonial-box">
                                <div class="testimonial-description">
                                    <div class="testimonial-info">
                                        <div class="flex justify-center">
                                            <img src={c3} alt="image_of_clients_person" />
                                        </div>
                                    </div>
                                    <div class="testimonial-comment">
                                        <p>
                                            Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
                                        </p>
                                    </div>
                                    <div class="testimonial-person">
                                        <h2><a href="/">john doe</a></h2>
                                        <h4>washington</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientSay;