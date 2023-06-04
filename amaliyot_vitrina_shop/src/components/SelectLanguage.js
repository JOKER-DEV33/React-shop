export default function SelectLanguage(props){
    const{data, setLan, setLoading} = props
    
    function select(e){
        setLan(e.target.value)
        setLoading(true)
    }
    return(
        <>
            <select className="browser-default select_language" onChange={select}>
            {data.map(item => (
                <option key={item.id} id={item.id} value={item.language}>{item.languageName}</option>
            ))}
            </select>
         </>
    )
}