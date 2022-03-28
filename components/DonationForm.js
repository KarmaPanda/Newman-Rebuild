import { useEffect, useState, useRef } from "react";
import { PayPalButton } from "react-paypal-button-v2";

import styles from '../styles/DonationForm.module.scss'
import Router from "next/router";
import { end } from "@popperjs/core";

export default function DonationForm({ backgroundImage, campaign }) {
    const [state, setState] = useState({
        name: '',
        email: '',
        classYear: 'N/A',
        classYearOptional: '',
        description: '',
        referral: '',
        amount: 0,
        paymentMethod: 'PayPal or Debit/Credit Card'
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/api/paypal").then(async res => {
            const json = await res.json()
            const script = document.createElement('script')
            script.src = "https://www.paypal.com/sdk/js?client-id=" + json.client_id;
            document.body.appendChild(script);

            script.onload = () => {
                setLoading(false)
            };
        })
    }, [loading])

    function handleNameChanged(event) {
        setState({
            ...state,
            name: event.target.value
        })
    }

    function handleEmailChanged(event) {
        setState({
            ...state,
            email: event.target.value
        })
    }

    const [classYearOptional, setClassYearOptional] = useState(false)

    function handleClassYearChange(event) {
        setState({
            ...state,
            classYear: event.target.value
        })

        if (event.target.value == "Other") {
            setClassYearOptional(true)
        } else {
            setClassYearOptional(false)
        }
    }

    function handleOptionalClassYear(event) {
        setState({
            ...state,
            classYearOptional: event.target.value
        })
    }

    function handleDescriptionChange(event) {
        setState({
            ...state,
            description: event.target.value
        })
    }

    function handleReferralChange(event) {
        setState({
            ...state,
            referral: event.target.value
        })
    }

    function handleAmountChanged(event) {
        setState({
            ...state,
            amount: event.target.value
        })
    }

    const [paypal, setPaypal] = useState(false)
    const [venmo, setVenmo] = useState(false)

    function handlePaymentMethod(event) {
        setState({
            ...state,
            paymentMethod: event.target.value
        })

        if (event.target.value == "Venmo") {
            setVenmo(true)
            setPaypal(false)
        } else {
            setVenmo(false)
        }
    }

    function ScrollToPayPal() {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth',
        });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (venmo) {
            fetch("/api/checkout", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: state.name,
                    email: state.email,
                    classYear: state.classYear == "Other" ? state.classYearOptional : state.classYear,
                    description: state.description,
                    referral: state.referral == "Other" ? state.referralOptional : state.referral,
                    payment_method: state.paymentMethod,
                    campaign: campaign,
                    amount: state.amount
                })
            }).then(_ => {
                Router.push('https://account.venmo.com/pay?recipients=URNewman')
            })
        } else {
            setPaypal(true)
            setTimeout(function () {
                ScrollToPayPal()
            }, 1000)
        }
    }

    return (!loading ?
        <div className={`${styles.main}`}>
            <div className={`container ${styles.responsiveContainer}`}>
                <div className={styles.backgroundWrap}>
                    <div className={styles.donationForm} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                </div>
                <div>
                    <section className={styles.donationTitle}>
                        <h1>{campaign}</h1>
                    </section>
                    <main className={`${styles.donationContent} row`}>
                        <form className="p-5" onSubmit={handleFormSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={handleNameChanged} value={state.name} required />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleEmailChanged} value={state.email} required />
                                <small id="emailHelp" className="form-text text-muted">Your email will be used to confirm your identity. We will not share your email with anyone else.</small>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="classYear">Class Year</label>
                                <select className="form-control" id="classYear" onChange={handleClassYearChange} value={state.classYear}>
                                    <option>N/A</option>
                                    <option>Class of 2022</option>
                                    <option>Class of 2023</option>
                                    <option>Class of 2024</option>
                                    <option>Class of 2025</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {classYearOptional ? <div className="form-group mb-3">
                                <label htmlFor="classYearOther">Specify Class Year</label>
                                <input type="text" className="form-control" id="classYearOther" placeholder="Enter Class Year" onChange={handleOptionalClassYear} value={state.classYearOptional} />
                            </div> : null}

                            <div className="form-group mb-3">
                                <label htmlFor="description">Reason for donation (optional)</label>
                                <textarea className="form-control" id="description" rows="3" onChange={handleDescriptionChange} value={state.description}></textarea>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="referralOptional">Who referred you (optional)</label>
                                <input type="text" className="form-control" id="referralOptional" placeholder="Enter referrer" onChange={handleReferralChange} value={state.referral} />
                            </div>

                            <label htmlFor="amount">Amount</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input type="text" className="form-control" id="amount" aria-label="Amount (to the nearest dollar)" onChange={handleAmountChanged} value={state.amount} />
                                <div className="input-group-append">
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>

                            {state.amount > 0 ?
                                <>
                                    <div className="form-group mb-3">
                                        <label htmlFor="paymentMethod">Payment Method</label>
                                        <select className="form-control" id="paymentMethod" onChange={handlePaymentMethod} value={state.paymentMethod} required>
                                            <option disabled>PayPal or Debit/Credit Card</option>
                                            <option>Venmo</option>
                                        </select>
                                    </div>

                                    {venmo ? <div className="text-center">
                                        <p>We currently do not support automated Venmo payments yet, but you click below to submit your donation to our database. You will be redirected to our Venmo page where you can place your donation. We will manually check for the Venmo payment.</p>
                                    </div> : null}

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success btn-lg btn-block">Proceed To Payment</button>
                                    </div>

                                    {paypal ? <div className="mt-5 text-center">
                                        <PayPalButton
                                            amount={(state.amount)}
                                            capture="authorize"
                                            onSuccess={(details) => {
                                                fetch("/api/checkout", {
                                                    method: "post",
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                    body: JSON.stringify({
                                                        name: state.name,
                                                        email: state.email,
                                                        classYear: state.classYear == "Other" ? state.classYearOptional : state.classYear,
                                                        description: state.description,
                                                        referral: state.referral,
                                                        payment_method: state.paymentMethod,
                                                        campaign: campaign,
                                                        details: details
                                                    })
                                                }).then(r => {
                                                    Router.push("/payment-success")
                                                }).error(e => {
                                                    console.error(e)
                                                    alert("Payment was successful, but our server had some issues processing your payment.")
                                                })
                                            }}
                                            onError={(details) => {
                                                console.error(details)
                                                alert("PayPal is having service errors, please try again.")
                                            }}

                                            options={{
                                                clientId: process.env.paypal_clientid
                                            }}
                                        />
                                    </div> : null}
                                </>
                                : null}
                        </form>
                    </main>
                </div>
            </div>
        </div> : null
    )
}