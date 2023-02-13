import { Circle } from "./Circle"

export const Content = ({ url, img_url, title, subTitle, updated_date, img_caption }) => {

    return <div className={'news_item pointer'} onClick={() => { window.location.href = url }} >
        <h1 className="news_heading">{title}</h1>
        <p className="news_date">{updated_date}</p>
        <h2 className="news_sub_heading">{subTitle}</h2>
        <img alt="img" className="news_img" src={img_url} />
        <p className="news_img_caption">{img_caption}</p>
        {/* <div className="content-right">
            
        </div> */}
    </div>
}
