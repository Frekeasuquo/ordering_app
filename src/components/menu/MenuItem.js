import Image from "next/image";

export default function MenuItem() {

    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
                <img src={'/pizza.png'} alt={'pizza'} className="max-h-auto max-h-24 block mx-auto"/>
            </div>
            
            <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea.</p>
            <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">Add to cart $15</button>
        </div>
    )
}