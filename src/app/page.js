import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/sectionHeaders";


export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16">
        <SectionHeader 
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />
        <div className="text-gary-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est ad non repudiandae distinctio, quam possimus quae ab officiis cupiditate.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, doloribus! Unde, consectetur? Facilis earum neque atque harum ad temporibus nostrum reprehenderit accusantium, reiciendis, enim eius tempora dignissimos, tenetur iusto cum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iure porro molestiae! Beatae, cum dolorem.</p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contant Us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel: +2349012345678">
            +234 901 234 5678
          </a>
        </div>
      </section>
      
    </>
  );
} 
