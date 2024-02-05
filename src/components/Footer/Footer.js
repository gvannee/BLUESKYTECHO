import '../../variable.css';
import FooterInfo from '../FooterInfo';

const Footer = () => {
    const infomation = ["Blog us", "About Us", "Delivery Information", "Privacy Policy", "Feedback"]
    const quickLinks = ["Store Location", "Orders Tracking", "FAQS"];
    const signUp = ["Join 20.000+ subscribers and get a new discount coupon on every Saturday. Updates information on Sales and Offers."]
    return (
        <div className="footer flex pd pd-tb-10 space-between overflow">
            <div className='w-40 size-11'>
                <h4>ABOUT THE STORE</h4>
                <span>Got question? Call us 24/7</span>
                <p className='color-blue'>+222-1800-2628</p>
                <span>268 St, South New York/NY 98944, United States
                    Customersupport@example.com
                    Info@example.com</span>
            </div>
            <FooterInfo info={infomation} title="Information" />
            <FooterInfo info={quickLinks} title="Quick Links" />
            <FooterInfo info={signUp} title="Sign up to Newsletter" />
        </div>
    )
}

export default Footer;