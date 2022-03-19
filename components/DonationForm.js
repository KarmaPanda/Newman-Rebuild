import { useState } from "react";

import Footer from './Footer'
import styles from '../styles/DonationForm.module.scss'

export default function DonationForm({ backgroundImage, campaign, campaignDescription }) {
    const [classYearOptional, setClassYearOptional] = useState(false)

    function handleClassYearChange(event) {
        if (event.target.value == "Other") {
            setClassYearOptional(true)
        } else {
            setClassYearOptional(false)
        }
    }

    const [referralOptional, setReferralOptional] = useState(false)

    function handleReferralOptional(event) {
        if (event.target.value == "Other") {
            setReferralOptional(true)
        } else {
            setReferralOptional(false)
        }
    }

    const [venmo, setVenmo] = useState(false)

    function handlePaymentMethod(event) {
        if (event.target.value == "Venmo") {
            setVenmo(true)
        } else {
            setVenmo(false)
        }
    }

    return (
        <div className={`${styles.main}`}>
            <div className={`container ${styles.responsiveContainer}`}>
                <div className={styles.backgroundWrap}>
                    <div className={styles.donationForm} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                </div>
                <section className={styles.donationTitle}>
                    <h1>{campaign}</h1>
                </section>
                <main className={`${styles.donationContent} row`}>
                    <h2 dangerouslySetInnerHTML={campaignDescription}></h2>
                    <form className="p-5">
                        <div className="form-group mb-3">
                            <label htmlFor="email">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">Your email will be used to confirm your identity. We will not never share your email with anyone else.</small>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="classYear">Class Year</label>
                            <select className="form-control" id="classYear" onChange={handleClassYearChange}>
                                <option>N/A</option>
                                <option>Class of 2022</option>
                                <option>Class of 2023</option>
                                <option>Class of 2024</option>
                                <option>Class of 2025</option>
                                <option>Other</option>
                            </select>
                        </div>

                        {classYearOptional ? <div className="form-group mb-3">
                            <label htmlFor="email">Specify Class Year</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Class Year" />
                        </div> : null}

                        <div className="form-group mb-3">
                            <label htmlFor="description">Reason for donation (optional)</label>
                            <textarea className="form-control" id="description" rows="3"></textarea>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="referral">Who referred you to this page? (optional)</label>
                            <select className="form-control" id="referral" onChange={handleReferralOptional}>
                                <option>None</option>
                                <option>Michael Chavrimootoo</option>
                                <option>Michael Taylor</option>
                                <option>Other</option>
                            </select>
                        </div>

                        {referralOptional ? <div className="form-group mb-3">
                            <label htmlFor="referralOptional">If other, who was your referrer, or how did you find this page?</label>
                            <input type="text" className="form-control" id="referralOptional" placeholder="Enter referrer" />
                        </div> : null}

                        <div className="form-group mb-3">
                            <label htmlFor="paymentMethod">Payment Method</label>
                            <select className="form-control" id="paymentMethod" onChange={handlePaymentMethod}>
                                <option></option>
                                <option>PayPal or Debit/Credit Card</option>
                                <option>Venmo</option>
                            </select>
                        </div>

                        {venmo ? <div className="text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div> : null}
                    </form>
                </main>
            </div>
        </div>
    )
}