import SectionTitle from "../../../components/global/Public/SectionTitle";
import aboutImage from "@/assets/images/landing/about.jpg";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="w-full @container pt-30">
            
            <div className="w-[85%] mx-auto mt-10 flex justify-between items-start">
               <div className="w-[50%]">
                <SectionTitle alignment="left" badgeTitle="About" title="About Us" />
                <p className="mt-3 text-alternative-secondary text-[0.85rem]">
                    Sambal Jeelicious merupakan sambal homemade yang dibuat menggunakan bahan-bahan pilihan dan menggunakan 100% bahan alami tanpa campuran pengawet apapun. 
Dengan perpaduan Cabai, bawang dan bahan pokok utama lainnya, membuat sambal ini semakin lezat. Sambal Jeelicious hadir untuk menambah cita rasa makanan pokok kamu. Dengan adanya Sambal Jeelicious, kamu bisa menikmati lezatnya makanan tanpa harus mahal!
                </p>
               </div>
               <div className="w-[35%] p-3 shadow-gray-200 shadow-lg">
                 <div className="relative overflow-hidden w-full h-[170px]">
                     <Image src={aboutImage}  objectFit="cover" className="rounded-sm" fill alt="Jeelicious" />
                 </div>
                 <div className="mt-3 flex justify-between items-center">
                    <div>
                        <h4 className="text-dark-primary text-lg font-bold">Sambal Jeelcious</h4>
                        <p className="text-alternative-secondary text-[0.85rem]">Asli Pontianak!</p>
                    </div>
                 </div>
               </div>
            </div>
        </section>
    )
}

export default AboutSection;