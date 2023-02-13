import { Circle } from "./Circle"

export const Content = ({ url, img_url, title, subTitle, updated_date, img_caption }) => {

    return <div className={'news_item'} >
        <h1 className="news_heading">{title}</h1>
        <p className="news_date">{updated_date}</p>
        <h2 className="news_sub_heading">{subTitle}</h2>
        <img alt="img" className="news_img pointer" src={img_url} onClick={() => { window.open(img_url) }} />
        <p className="news_img_caption">{img_caption}</p>
        <div className="content-right">
            <Circle cursor="pointer" onClick={() => { window.location.href = url }} title="link" backgroundColor="#34B3F1" color="#EAEAEA" icon={'fa-solid fa-arrow-up-right-from-square'} size="50px" />
        </div>
    </div>
}
