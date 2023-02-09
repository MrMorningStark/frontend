export const Hamburger = ({margin='0', color, size,setOpen,open }) => {
    const style = {
        background: color,
        height: size
    }
    return <>
        <div style={{margin:margin}} className={open?"pointer hamburger-lines open":"pointer hamburger-lines"} onClick={()=>{setOpen(old=>!old)}}>
            <span style={style} className="line line1"></span>
            <span style={style} className="line line2"></span>
            <span style={style} className="line line3"></span>
        </div>
    </>
}