import Button from "./Button";
import CardComponent from "./CardComponent";
import Navbar from "./Header";

export default function HomePageComponent() {
  // This is a simple home page component that can be used in the in any part of the website.
  return (
    <div>
        <Navbar/>
        <main className="min-h-screen ">
          <div className="bg-[url('/LPG_worker.jpg')] bg-cover bg-center h-[100vh] w-full">
            <div className="flex items-center justify-start h-full w-full bg-primarycolor/70 ">
              <div className="max-w-screen-7xl mx-auto text-white px-6 lg:px-30">
                <div className="w-2/4">
                  <h1 className="text-4xl font-bold mb-4 fadeInBottom ">Reliable LPG Solutions for Safer, Smarter Energy Use</h1>
                  <p className="text-lg mb-6 fadeInBottom">Your trusted partner in LPG commercial storage, heating systems, and industrial safety components — delivering excellence, durability, and innovation across Ghana’s oil and gas industry.</p>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <Button label="Explore Our Services"/>
                    <Button label="Get a Free Quote" variantStyle="primarydefualtStyle"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-180 left-0 fadeOnScroll">
            <CardComponent/>
          </div>
          
        </main>
    </div>
  );
}