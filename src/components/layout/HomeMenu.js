import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./sectionHeaders";

export default function HomeMenu() {

    return (
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute left-0 -top-[70px] text-left -z-10">
                    <Image src={'/salad.png'} alt={'salad'} width='179' height='256'/>
                </div>
                <div className="absolute right-0 -top-[100px] -z-10">
                    <Image src={'/salad1.png'} alt={'salad'} width='119' height='256'/>
                </div>
            </div>
            <div className="text-center mb-8 mt-8">
                <SectionHeader 
                    subHeader={'check out'}
                    mainHeader={'Menu'}
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
            
        </section>
    )
}