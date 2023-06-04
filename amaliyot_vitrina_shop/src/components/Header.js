import SelectLanguage from "./SelectLanguage";

export default function Header(props){
    const {data, setLan, setLoading} = props
    return(
        <div>
            <nav>
                <div className="nav-wrapper header__nav">
                    <a href="#" className="brand-logo">React Shop</a>
                    <div className="right hide-on-med-and-down">
                        <SelectLanguage data={data} setLan={setLan} setLoading={setLoading}/>
                    </div>
                </div>
            </nav>
        </div>
    )
}