import logoImage from "./images/logo.png";
import menuImage from "./images/menu.png";
import searchImage from "./images/search.png";

const Header = () => {
    return (
        <>
            <header className="absolute z-20 w-full bg-transparent px-4 py-4 font-dm_sans font-bold text-white">
                <div className="header-content flex cursor-pointer items-center justify-between">
                    <div className="logo flex items-center gap-1">
                        <img
                            className="w-8 object-contain lg:w-10"
                            src={logoImage}
                            alt="App Logo"
                        />
                        <span className="hidden md:block">MovieBox</span>
                    </div>
                    <div className="search-container flex w-52 gap-1 rounded-md border border-solid border-gray-300 p-2 md:w-64">
                        <input
                            className="hidden grow bg-transparent font-dm_sans font-medium text-white placeholder:font-dm_sans placeholder:text-white focus:border-none focus:outline-0 lg:block"
                            type="text"
                            placeholder="What do you want to watch?"
                        />
                        <input
                            className="grow bg-transparent font-dm_sans font-medium text-white placeholder:font-dm_sans placeholder:text-white focus:border-none focus:outline-0 lg:hidden"
                            type="text"
                            placeholder="
                        Search"
                        />
                        <img
                            className="w-3 cursor-pointer object-contain"
                            src={searchImage}
                            alt="Search Icon"
                        />
                    </div>
                    <div className="menu-container flex items-center gap-1">
                        <span className="hidden md:block">Sign in</span>
                        <img
                            className="w-8 cursor-pointer object-contain lg:w-10"
                            src={menuImage}
                            alt="Menu Icon"
                        />
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;
