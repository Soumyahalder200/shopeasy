import Footer from "@/components/layout/Footer";
import Navber from "@/components/layout/Navber";
import Image from "next/image";

export default function Home() {
  return (
    <>
	<Navber/>
	<section className="py-10 dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <div className="relative mb-8 h-[370px] md:h-[480px]">
              <img src="src/assets/ecom-images/headers/header-04/image-01.jpg" alt="product" className="h-full w-full object-cover object-center"/>

              <div className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
                <div className="max-w-[420px]">
                  <h3>
                    <a href="javascript:void(0)" className="mb-5 block text-2xl font-bold text-dark hover:text-primary sm:text-4xl">
                      Mega Sale Up To 50% Off For All
                    </a>
                  </h3>
                  <p className="mb-9 text-base text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ornare vestibulum mollis. Nam vitae augue purus.
                    Integer ac accumsan nunc.
                  </p>
                  <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark">
                    Grab The Offer
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-full">
                <div className="relative mb-8 h-[223px]">
                  <img src="src/assets/ecom-images/headers/header-04/image-02.jpg" alt="product" className="h-full w-full object-cover object-center"/>

                  <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                    <div className="max-w-[180px] text-right">
                      <h3>
                        <a href="javascript:void(0)" className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl">
                          Summer Travel Collection
                        </a>
                      </h3>
                      <a href="javascript:void(0)" className="text-base font-medium text-dark hover:text-primary">
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-full">
                <div className="relative mb-8 h-[223px]">
                  <img src="src/assets/ecom-images/headers/header-04/image-03.jpg" alt="product" className="h-full w-full object-cover object-center"/>

                  <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                    <div className="max-w-[180px] text-right">
                      <h3>
                        <a href="javascript:void(0)" className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl">
                          Get 30% Off On iPhone
                        </a>
                      </h3>
                      <a href="javascript:void(0)" className="text-base font-medium text-dark hover:text-primary">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
<Footer/>
    </>
  );
}
