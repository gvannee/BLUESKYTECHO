import '../../variable.css';
import Categories from '../Categories';
import Product from '../../assets/images/product.jpg';
import Trending from '../../assets/images/trending.jpg';
import Ipad from '../../assets/images/ipad.jpg';
import Matebook from '../../assets/images/matebook.jpg';
import Pro from '../../assets/images/pro.jpg';
import Iphone from '../../assets/images/iphone.jpg';
import Macbook from '../../assets/images/macbook.jpg';
import Watch from '../../assets/images/watch.jpg';
import Mouse from '../../assets/images/mouse.jpg';
import Products from '../Products';
const Container = () => {
    const categories = [
        {
            title: "Computer & Desktop",
            more: ">"
        },
        {
            title: "Laptop & Ipad",
            more: ">"
        },
        {
            title: "Cameras & Photos",
            more: ">"
        },
        {
            title: "Smart phones & Tablets",
            more: ">"
        },
        {
            title: "Home & Kitchen",
            more: ""
        },
        {
            title: "TV & Audio",
            more: ">"
        },
        {
            title: "Health & Beauty",
            more: ""
        },
        {
            title: "Watches & Eyewear",
            more: ">"
        },
        {
            title: "Top Deals",
            more: ""
        },
        {
            title: "Top Selling Products",
            more: ""
        },
        {
            title: "Top Featured Products",
            more: ""
        }
    ]
    const trendings = [
        {
            src: Trending,
            alt: "Trending new phone pro"
        },
        {
            src: Matebook,
            alt: "Top Product Matebook pro 2022"
        },
        {
            src: Ipad,
            alt: "Ipad pro up to 20% off"
        }
    ];
    const items = [
        {
            name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
            src: Iphone,
            rating: 68,
            price: 128.00,
            sale: 20,
            value: 82
        },
        {
            name: "Apple Watch Aluminum Case Pride Edition",
            src: Macbook,
            rating: 68,
            price: 1028.00,
            sale: "",
            value: 2
        },
        {
            name: "Apple iPhone 13 Pro Max 128GB Gold Fully Unlocked",
            src: Iphone,
            rating: 29,
            price: 128.00,
            sale: 20,
            value: 620,
            total: 896
        },
        {
            name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
            src: Watch,
            rating: 68,
            price: 289.00,
            sale: "",
            value: 82
        },
        {
            name: "Apple Watch Aluminum Case Pride Edition",
            src: Iphone,
            rating: 68,
            price: 128.00,
            sale: 20,
            value: 2
        },
        {
            name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
            src: Iphone,
            rating: 68,
            price: 289.00,
            sale: "",
            value: 82
        },
        {
            name: "Apple Watch Aluminum Case Pride Edition",
            src: Mouse,
            rating: 68,
            price: 128.00,
            sale: 20,
            value: 82
        },
        {
            name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
            src: Iphone,
            rating: 68,
            price: 128.00,
            sale: 20,
            value: 82
        },
        {
            name: "Apple Watch Aluminum Case Pride Edition",
            src: Iphone,
            rating: 68,
            price: 128.00,
            sale: 20,
            value: 2
        }
    ]
    return (
        <div className="bg-grey pd pt-10 pb-13 flex-col gap-20 ">
            <div className='flex gap-10 w-100'>
                <div className='w-16 flex-col gap-10 size-9 pd-tb-10 pl-18 pr-8 bg-white '>
                    {
                        categories.map((item, index) => (
                            <Categories key={index} value={item.title} more={item.more} />
                        ))
                    }
                </div>
                <div className='max-w-84'>
                    <div className='relative'>
                        <img src={Product} alt='Product' className='w-100' />
                        <button className='circle-button absolute t-50 l-10 bai-jamjuree-regular'>{'<'}</button>
                        <button className='circle-button absolute t-50 r-10 bai-jamjuree-regular'>{'>'}</button>
                    </div>
                    <div className='flex max-w gap'>
                        {
                            trendings.map((item, index) => (
                                <img key={index} src={item.src} alt={item.alt} className='max-w-trending img-hover' />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='mt-10 grid-container w-100'>
                {
                    items.map((item, index) => (
                        (index == 2) ? <Products key={index} src={item.src} name={item.name} sale={item.sale} 
                        price={item.price} value={item.value} specialProduct={item.total} />
                        : <Products key={index} src={item.src} name={item.name} sale={item.sale} 
                        price={item.price} value={item.value} />
                        
                    ))
                }

            </div>
        </div>
    )
}

export default Container;