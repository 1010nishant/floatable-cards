import { useRef } from "react";
import Card from "./Card";

function Foreground() {
    const ref = useRef(null)
    const data = [
        {
            title: 'Apple Watch Series 7 GPS, Aluminium Case',
            price: '$399',
            img: 'https://cdn.pixabay.com/photo/2015/05/07/13/43/watch-756487_640.jpg',
        },
        {
            title: 'Apple airpods pro 2, True Wireless',
            price: '$299',
            img: 'https://images.unsplash.com/photo-1525825691042-e14d9042fc70?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Apple IPhone 12 | 128GB | Black',
            price: '$1099',
            img: 'https://images.unsplash.com/photo-1581637708784-94c4e6f46b54?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            title: 'Apple Macbook Air | 13.3" | 8GB | 256GB',
            price: '$1299',
            img: 'https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D',
        },
    ]
    return <div  ref={ref} className="absolute top-0 h-full left-0 w-full z-10 flex gap-10 flex-wrap" >
        {data.map((item, index) => (
            <Card key={index} data={item} refForConstraint={ref} />
        ))}
    </div>
}

export default Foreground;
