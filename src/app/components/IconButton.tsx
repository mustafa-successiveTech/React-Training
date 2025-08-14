export default function button({name, value, onclick}) {
    return (
        <>
            <div className="child">
                <button onClick={() => onclick(value)} className="btn">
                    {name}
                </button>
                
            </div>
        </>
    )
}