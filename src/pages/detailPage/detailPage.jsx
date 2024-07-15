import "./detailPage.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faAngleDown, faCalendarDay, faArrowUp, faArrowDown, faUtensils, faHandHoldingDollar, faBagShopping, faCoins } from '@fortawesome/free-solid-svg-icons'

function DetailPage() { // deploy https://ogs-exam-visa-card.web.app
    const navigate = useNavigate();
    return (
        <>
            <div className="app">
                <div className="app-detail-header">
                    <div className="detail-header">
                        <div onClick={() => navigate(-1)}>
                            <FontAwesomeIcon icon={faChartSimple} style={{ height: "20px", transform: "rotate(90deg)" }} />
                        </div>
                        <FontAwesomeIcon icon={faCalendarDay} style={{ height: "20px" }} />
                    </div>
                    <div className="detail-header-body">
                        <h6 style={{ color: "#7aac84" }}>Available Balance</h6>
                        <div className="detail-header-balance">
                            <div className="dollar">
                                <h4>$</h4>
                            </div>
                            <h1>7,392.00</h1>
                        </div>
                        <h5 style={{ color: "#7791b2" }}>June 9, 2018</h5>
                    </div>
                    <div className="detail-header-card">
                        <div className="detail-header-card-id">
                            <p>42021</p>
                            <p>30949</p>
                            <p>2800</p>
                            <p>9815</p>
                        </div>
                        <div className="detail-header-card-cvc">
                            <div className="detail-header-card-cvc-buttom">
                                <h6>EXPIRE •</h6>
                                <h5>02/22</h5>
                            </div>
                            <div className="detail-header-card-cvc-buttom">
                                <h6>CVC CODE •</h6>
                                <h5>230</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-income-expense">
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
                    <div className="dropdown">
                        <h6>Weekly</h6>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
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
                            <h4>Deposit Freelance</h4>
                            <h5>June 7, 2018</h5>
                        </div>
                    </div>
                    <div className="detail-of-movements-item-right-up">
                        <h4 style={{ marginRight: "10px" }}>$800</h4>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                </div>
                <div className="detail-of-movements-item">
                    <div className="detail-of-movements-item-left">
                        <FontAwesomeIcon icon={faBagShopping} style={{ color: "#395773", height: "25px" }} />
                        <div className="detail-of-movements-item-left-detail">
                            <h4>Central Market</h4>
                            <h5>June 6, 2018</h5>
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
                            <h5>June 1, 2018</h5>
                        </div>
                    </div>
                    <div className="detail-of-movements-item-right-up">
                        <h4 style={{ marginRight: "10px" }}>$4,200</h4>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                </div>
                <div className="detail-of-movements-item">
                    <div className="detail-of-movements-item-left">
                        <FontAwesomeIcon icon={faBagShopping} style={{ color: "#395773", height: "25px" }} />
                        <div className="detail-of-movements-item-left-detail">
                            <h4>Central Market</h4>
                            <h5>June 1, 2018</h5>
                        </div>
                    </div>
                    <div className="detail-of-movements-item-right-down">
                        <h4 style={{ marginRight: "10px" }}>$37</h4>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailPage