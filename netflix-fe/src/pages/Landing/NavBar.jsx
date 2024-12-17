import OptionLanguage from "../../components/modules/OptionLanguage"

function NavBar() {
    return (
        <header>
            <nav className="flex justify-between items-center pr-10 pl-7 py-4">
                <div>
                    <img src="../../../public/netflix-logo-icon-dea-afrizal.png" alt="netlix logo" width={105} height={45} />
                </div>
                <div className="flex items-center gap-4">
                    <OptionLanguage />
                    <button>Sign in</button>
                </div>
            </nav>
        </header>
    )
}


export default NavBar