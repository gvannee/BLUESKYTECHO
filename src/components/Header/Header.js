import '../../variable.css';
import HeaderLink from '../HeaderLink';
import SelectCustom from '../SelectCustom/SelectCustom';
import logo from '../../assets/images/logo.png';
import sale from '../../assets/icon/sale.jpg';
import { faBars, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import IconCustomer from '../IconCustomer/IconCustomer';

const Header = () => {
    const headerLinks = ["Store Locator", "Order Tracking", "FAQs"];
    const languages = ["English", "Germany"];
    const currency = ["USD", "EUR"];
    const categories = ["PC", "Laptop", "Ipad"];
    const navbar = [
        {
            title: "Home",
            options: ["Sale"]
        },
        {
            title: "Shop",
            options: ["About"]
        },
        {
            title: "Product",
            options: ["Apple", "Samsung", "Xiaomi"]
        },
        {
            title: "Page",
            options: ["1", "2"]
        },
        {
            title: "Blog",
            options: ["Latest", "Forum"]
        },

    ]

    return (
        <header className='max-w-100 bai-jamjuree-medium pb-15 border-bottom'>
            <div className='flex space-between size-8 border-bottom pd pd-tb-7 align-item-center text-align-center'>
                <div>
                    <span>You are a student and students get 20% discount.
                        <b className='underline pl-5 pointer'>Learn More</b></span>
                </div>
                <div className='flex gap-10'>
                    <div className='flex gap-10 '>
                        {
                            headerLinks.map((item, index) => (
                                <HeaderLink key={index} value={item} class="pointer hover-text-blue" />
                            ))
                        }
                    </div>

                    <div className='flex border-left gap-5 pl-5 '>
                        <SelectCustom options={languages} size="size-8" />
                        <SelectCustom options={currency} size="size-8" />
                    </div>
                </div>

            </div>

            <div className='flex space-between border-bottom pd pd-tb-13 align-item-center text-align-center'>
                <img src={logo} alt='Uminex Logo' className='max-w-10' />
                <div className='border max-h flex gap-5 w-10 space-between text-align-center align-item-center border-radius-5'>
                    <div className='h-100 flex '>
                        <SelectCustom options={categories} defaultValue="All Categories" size='size-10' />
                        <input type='text' placeholder='Search in 200+ products' className='ml-10 border-left size-10 max-h pl-10 color-grey' />
                    </div>

                    <button className='pd-7 pointer size-10 border-radius-r-5 bg-blue bai-jamjuree-semibold' >Search</button>
                </div>
                <div className='flex gap-20'>
                    <IconCustomer icon={faUser} title='Login' value='Account' />
                    <IconCustomer icon={faHeart} />
                    <IconCustomer icon={faCartShopping} title='Your Cart' value='$280.00' />
                </div>
            </div>

            <nav className='pd pd-tb-7 flex space-between border-bottom'>
                <div className='flex align-item-center bai-jamjuree-semibold'>
                    <div className='flex gap-10 size-9 pl-18 pr-10'>
                        <IconCustomer icon={faBars} />
                        <span>Browse All Categories</span>
                    </div>
                    <div className='flex ml-24 gap-8 size-9 bai-jamjuree-semibold border-left pl-18'>
                        {
                            navbar.map((item, index) => (
                                <SelectCustom key={index} options={item.options} defaultValue={item.title} size='size-9 bai-jamjuree-semibold margin' />
                            ))
                        }
                        <span className='ml-10'>Contact us</span>
                        <span className='color-red ml-10'>Buy Uminex!</span>
                    </div>
                </div>
                <div className='flex gap-5 bai-jamjuree-semibold size-9 justify-content-center align-item-center'>
                    <img src={sale} alt='Sale' className='h-15' />
                    <span>Sale $20 Off Your First Order.</span>
                </div>

            </nav>

        </header>
    )
}

export default Header;