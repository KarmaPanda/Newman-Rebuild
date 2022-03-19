export default function Footer({optionalStyling}) {
    return (
        <footer className={optionalStyling == null ? "mt-5 mb-5" : optionalStyling}>
            <div className="container">
                <div className="footer-icons">
                    <a href="https://www.dor.org/"><img src="/images/footer/1.png"
                                                        alt="Roman Catholic Diocese of Rochester"/></a>
                    <a href="https://rochester.edu/"><img src="/images/footer/2.png" alt="University of Rochester"/></a>
                    <a href="https://www.rochester.edu/chapel/"><img
                        src="/images/footer/3.png" alt="University of Rochester Interfaith Chapel"/></a>
                    <a href="https://www.usccb.org/"><img
                        src="/images/footer/4.png" alt="United States Conference of Catholic Bishops"/></a>
                    <a href="https://www.vatican.va/content/vatican/en.html"><img
                        src="/images/footer/5.png" alt="The Holy See"/></a>
                </div>
            </div>

            <div className="small-print">
                <div className="container">
                    <p>© {new Date().getFullYear()} Catholic Newman Community at the University of Rochester | <a
                        href="tel:585-275-8515">+1 (585)
                        275-8515</a> | <a
                        href="mailto:catholicnewmancommunity@rochester.edu">catholicnewmancommunity@rochester.edu</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}