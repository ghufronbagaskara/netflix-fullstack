import OptionLanguage from "../../components/modules/OptionLanguage"
import DeffaultButton from "../../components/modules/DefaultButton"
import DefaultButton from "../../components/modules/DefaultButton"
import { useNavigate } from "react-router-dom"

function NavBar() {
    const navigate = useNavigate()

    return (
        <header className="relative z-20">
            <nav className="flex flex-wrap justify-between items-center pr-10 pl-7 py-4">
                <div>
                    <img src="../../../netflix-logo-icon-dea-afrizal.png" alt="netlix logo" width={105} height={45} />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <OptionLanguage />
                    <DefaultButton text={"Sign In"} onclick={() => navigate("/login")} />
                </div>
            </nav>
        </header>
    )
}


export default NavBar