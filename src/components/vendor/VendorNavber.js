import Image from "next/image";
export default function VendorNavber() {
  return (
    <>
      <header className="sticky top-0 flex w-full h-20 bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
      
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
      <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
      <button className="items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border" aria-label="Toggle Sidebar">
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http:www.w3.org/2000/svg">
       
       </svg>
       </button>
       <a className="lg:hidden" href="/">
            <img alt="Logo" loading="lazy" width="154" height="32" decoding="async" data-nimg="1" className="" style={{color:"transparent"}} src="./images/logo/logo.svg"/>
            <img alt="Logo" loading="lazy" width="154" height="32" decoding="async" data-nimg="1" className="hidden dark:block" style={{color:"transparent"}} src="./images/logo/logo-dark.svg"/>
       </a>
       <button className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http:www.w3.org/2000/svg">
       
       </svg>
       </button>
       <div className="hidden lg:block">
       <form>
       <div className="relative">
       <span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
       <svg className="fill-gray-500 dark:fill-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
       
       </svg>
       </span>
       <input type="text" placeholder="Search or type command..." className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"/>
       <button className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400">
       <span> ⌘ </span>
       <span> K </span>
       </button>
       </div>
       </form>
       </div>
       </div>
       <div className="hidden items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none">
       <div className="flex items-center gap-2 2xsm:gap-3">
       <button className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
       <svg className="hidden dark:block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
       
       </svg>
       <svg className="dark:hidden" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
       
       </svg>
       </button>
       <div className="relative">
       <button className="relative dropdown-toggle flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
       <span className="absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 flex">
       <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping">
       </span>
       </span>
       <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http:www.w3.org/2000/svg">
       
       </svg>
       </button>
       </div>
       </div>
       <div className="relative">
       <button className="flex items-center dropdown-toggle text-gray-700 dark:text-gray-400 dropdown-toggle">
       <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
       <img alt="User" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" style={{color:"transparent"}} src="/"/>
       </span>
       <span className="block mr-1 font-medium text-theme-sm">Musharof</span>
       <svg className="stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 " width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http:www.w3.org/2000/svg">
       
       </svg>
       </button>
       </div>
       </div>
       </div>
</header>
    </>
  );
}
