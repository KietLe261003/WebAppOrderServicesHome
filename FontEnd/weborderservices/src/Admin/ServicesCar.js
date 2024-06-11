import { useEffect, useState } from 'react';
import fc1 from '../Layout/assets/images/featured-cars/fc1.png';
import fc2 from '../Layout/assets/images/featured-cars/fc2.png';
import request from '../utils/request'
function ServicesCar() {
    const createNewCar= ()=>{
        request.post("/car/creatnewcar", {
            name: "Lamborghini Aventador S Roadster 2021",
            authcar: "user6",
            price: 800000,
            img: "https://tse2.mm.bing.net/th?id=OIP.4S4gG9baj8NN_0sjpRomtQHaEi&pid=Api&P=0&h=180",
            description: "Xe này giành cho giới siêu giàu giá rẻ không thích hợp với Trung db mà chỉ phù hợp với Kiệt",
            highlight: "Xe đẹp, Giao Xe tận nơi",
            address: "Bình Dương",
            rate: 0,
            times: 0
        }).then((res)=>{
            console.log(res.data);
        }).catch(()=>{
            console.log("Gửi yêu cầu thất bạn");
        })
    }
    const [allCar,setAllCar]=useState([]);
    useEffect(()=>{
        request.get("/car/allcar").then((res)=>{
            setAllCar(res.data.data);
        }).catch(()=>{
            console.log("Lấy dữ liệu thất bại");
        })
    },[])
    return ( 
        <div>
            Quản lý xe
            <button onClick={() => {createNewCar()}}>Thêm xem mới</button>
            <div class="featured-cars-content">
                <div class="row">
                    {
                        allCar.length > 0 &&
                        allCar.map((item) => (
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="single-featured-cars">
                                    <div class="featured-img-box">
                                        <div class="featured-cars-img">
                                            <img src={item.img} alt="cars" style={{ maxWidth: 352, maxHeight: 220 }} />
                                        </div>
                                        <div class="featured-model-info">
                                            <p>
                                                model: 2017
                                                <span class="featured-mi-span"> 3100 mi</span>
                                                <span class="featured-hp-span"> 240HP</span>
                                                automatic
                                            </p>
                                        </div>
                                    </div>
                                    <div class="featured-cars-txt">
                                        <h2><a href="/">{item.name}</a></h2>
                                        <h3>{item.price}</h3>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}

export default ServicesCar;