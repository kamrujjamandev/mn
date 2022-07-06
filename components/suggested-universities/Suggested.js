import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RiMapPin2Line } from "react-icons/ri";
import universityData from '../../data/suggested-universities.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '../layout/Navbar';

const Suggested = () => {

    const filterBtn = [...new Set(universityData.map((university) => {
        return university.universityArea;
    }))];

    const [university, setUniversity] = useState(universityData);
    const [btnItems, setBtnItems] = useState(filterBtn);

    const [btnClass, setBtnClass] = useState('');

    const filterItem = (curr) => {
        const updateFilter = universityData.filter((currElem) => {
            return (currElem.universityArea === curr);
        });
        setUniversity(updateFilter);

        setBtnItems(filterBtn);

    }

    return (
        <div className="suggested-univesities-wrapper">
            <h2>Suggested Universities</h2>
            <div className="versity-filter-btn-wrapper">
                {
                    btnItems.map((curElem, index) => {
                        return (
                            <button key={index} onClick={() => { filterItem(curElem); setBtnClass(curElem); }} className={'filter-btn' + (curElem === btnClass ? " filter-btn-active" : '')}>{curElem}</button>
                        );
                    })
                }
                <Link href="/admission">
                    <a className='filter-btn'>More</a>
                </Link>
            </div>
            <div className="veristy-item-wrapper">
                <div>
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={"auto"}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >


                        {
                            university.map((university, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="versity-item">
                                            <div className="versity-item-thumb">
                                                <Image src={university.universityImage} width="330" height="180" alt="Image" />
                                            </div>
                                            <div className="versity-item-content-wrapper">
                                                <div className="versity-item-content">
                                                    <h3>
                                                        <Link href="/admission">
                                                            <a>{university.universityName}</a>
                                                        </Link>
                                                    </h3>
                                                    <p className="primary-text">{university.universiteCategory}</p>
                                                </div>
                                                <div className="versity-info">
                                                    <div className="location">
                                                        <RiMapPin2Line />
                                                        <p className="primary-text">{university.universitylocation}</p>
                                                    </div>
                                                    <div className="tag">
                                                        <p className="secondary-text">{university.universitytype}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Suggested;
