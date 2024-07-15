import "./accountPage.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import visa from '../../assets/visa-logo-black-and-white.png';
import chip from '../../assets/chip-png-see-through-background.png';
import { faChartSimple, faCalendarDay, faArrowUp, faArrowDown, faUtensils, faHandHoldingDollar, faBagShopping, faCoins } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

function AccountPage() { // deploy https://ogs-exam-visa-card.web.app/detail
    const navigate = useNavigate();
    return (
        <>
            <div className="app">
                <header className="app-header">
                    <div className="app-header-detail">
                        <h2>All my accounts</h2>
                        <h5>June 10, 2018</h5>
                    </div>
                    <FontAwesomeIcon icon={faChartSimple} style={{ height: "20px" }} />
                </header>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    style={{ width: "390px", height: "240px" }}
                >
                    <SwiperSlide>
                        <div className="card-item" onClick={() => navigate("/detail")}>
                            <div className="card-header">
                                <div className="card-header-left">
                                    <img src={visa} style={{ width: "60px", marginLeft: "-10px" }} />
                                    <img src={chip} style={{ width: "50px", height: "37px", marginLeft: "-5px", filter: "grayscale(60%) brightness(1.1) blur(0.7px)" }} />
                                </div>
                                <div className="card-header-right">
                                    <p>Available Balance</p>
                                    <div className="card-header-right-balance">
                                        <div className="dollar">
                                            <h4>$</h4>
                                        </div>
                                        <h1>7,392.00</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>42021</p>
                                <p>30949</p>
                                <p>2800</p>
                                <p>9815</p>
                            </div>
                            <div className="card-buttom">
                                <div className="card-buttom-detail">
                                    <h6>EXPIRE •</h6>
                                    <p>02/22</p>
                                </div>
                                <div className="card-buttom-detail">
                                    <h6>CVC CODE •</h6>
                                    <p>230</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-item" onClick={() => navigate("/detail")}>
                            <div className="card-header">
                                <div className="card-header-left">
                                    <img src={visa} style={{ width: "60px", marginLeft: "-10px" }} />
                                    <img src={chip} style={{ width: "50px", height: "37px", marginLeft: "-5px", filter: "grayscale(60%) brightness(1.1) blur(0.7px)" }} />
                                </div>
                                <div className="card-header-right">
                                    <p>Available Balance</p>
                                    <div className="card-header-right-balance">
                                        <div className="dollar">
                                            <h4>$</h4>
                                        </div>
                                        <h1>7,392.00</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>42021</p>
                                <p>30949</p>
                                <p>2800</p>
                                <p>9815</p>
                            </div>
                            <div className="card-buttom">
                                <div className="card-buttom-detail">
                                    <h6>EXPIRE •</h6>
                                    <p>02/22</p>
                                </div>
                                <div className="card-buttom-detail">
                                    <h6>CVC CODE •</h6>
                                    <p>230</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-item" onClick={() => navigate("/detail")}>
                            <div className="card-header">
                                <div className="card-header-left">
                                    <img src={visa} style={{ width: "60px", marginLeft: "-10px" }} />
                                    <img src={chip} style={{ width: "50px", height: "37px", marginLeft: "-5px", filter: "grayscale(60%) brightness(1.1) blur(0.7px)" }} />
                                </div>
                                <div className="card-header-right">
                                    <p>Available Balance</p>
                                    <div className="card-header-right-balance">
                                        <div className="dollar">
                                            <h4>$</h4>
                                        </div>
                                        <h1>7,392.00</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>42021</p>
                                <p>30949</p>
                                <p>2800</p>
                                <p>9815</p>
                            </div>
                            <div className="card-buttom">
                                <div className="card-buttom-detail">
                                    <h6>EXPIRE •</h6>
                                    <p>02/22</p>
                                </div>
                                <div className="card-buttom-detail">
                                    <h6>CVC CODE •</h6>
                                    <p>230</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                </Swiper>
                <div className="income-expense">
                    <div className="income-expense-detail">
                        <div className="income-expense-head">
                            <h5>Income</h5>
                        </div>
                        <div className="income-expense-body-green">
                            <FontAwesomeIcon icon={faArrowDown} />
                            <h4>$9,302.00</h4>
                        </div>
                    </div>
                    <div className="income-expense-detail">
                        <div className="income-expense-head">
                            <h5>Expense</h5>
                        </div>
                        <div className="income-expense-body-red">
                            <FontAwesomeIcon icon={faArrowUp} />
                            <h4>$2,790.00</h4>
                        </div>
                    </div>
                </div>
                <div className="detail-of-movements">
                    <h3>Detail of movements</h3>
                    <FontAwesomeIcon icon={faCalendarDay} style={{ height: "20px" }} />
                </div>
                <div className="detail-of-movements-item">
                    <div className="detail-of-movements-item-left">
                        <FontAwesomeIcon icon={faUtensils} style={{ color: "#395773", height: "25px" }} />
                        <div className="detail-of-movements-item-left-detail">
                            <h4>Restaurant Manhattan</h4>
                            <h5>June 10, 2018</h5>
                        </div>
                    </div>
                    <div className="detail-of-movements-item-right-down">
                        <h4 style={{ marginRight: "10px" }}>$170</h4>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                </div>
                <div className="detail-of-movements-item">
                    <div className="detail-of-movements-item-left">
                        <FontAwesomeIcon icon={faHandHoldingDollar} style={{ color: "#395773", height: "25px" }} />
                        <div className="detail-of-movements-item-left-detail">
                            <h4>Salary Deposit</h4>
                            <h5>June 1, 2018</h5>
                        </div>
                    </div>
                    <div className="detail-of-movements-item-right-up">
                        <h4 style={{ marginRight: "10px" }}>$1,200</h4>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                </div>
                <div className="detail-of-movements-item">
                    <div className="detail-of-movements-item-left">
                        <FontAwesomeIcon icon={faBagShopping} style={{ color: "#395773", height: "25px" }} />
                        <div className="detail-of-movements-item-left-detail">
                            <h4>Central Market</h4>
                            <h5>May 28, 2018</h5>
                        </div>
                    </div>
                    <div className="detail-of-movements-item-right-down">
                        <h4 style={{ marginRight: "10px" }}>$50</h4>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                </div>
                <div className="detail-of-movements-item">
                    <div className="detail-of-movements-item-left">
                        <FontAwesomeIcon icon={faCoins} style={{ color: "#395773", height: "25px" }} />
                        <div className="detail-of-movements-item-left-detail">
                            <h4>Salary Deposit</h4>
                            <h5>May 1, 2018</h5>
                        </div>
                    </div>
                    <div className="detail-of-movements-item-right-up">
                        <h4 style={{ marginRight: "10px" }}>$1,200</h4>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountPage