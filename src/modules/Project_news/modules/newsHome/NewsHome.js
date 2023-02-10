import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { getTopSories } from "../../../../API/api";
import { TOP_STORIES } from "../../../../constant/constant";
import { Content } from "../../../helper/Content";
import { Circle } from "../../../helper/Circle";


export const NewsHome = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showGoToTopButton, setShowGoToTopButton] = useState(false);


    useEffect(() => {
        document.addEventListener('scroll', onScroll);
        loadData();
        return () => document.removeEventListener('scroll', onScroll);
    }, []);

    const onScroll = () => {

        if (window.scrollY > 300) {
            setShowGoToTopButton(true);
        }
        if (window.scrollY < 300 ) {
            setShowGoToTopButton(false);
        }

    }


    const loadData = async () => {
        const response = await getTopSories(TOP_STORIES.home);
        if (response.status === 'OK') {
            setData(response.results);
        }
        console.log(response.results);
        setLoading(false);
    }
    return <div className="newsBox">

        {loading ? <i className="fullHeight c fa-solid fa-spinner fa-spin-pulse fa-3x" />
            : data.map(data => {

                return <Content key={uuid()} url={data.url} img_url={data.multimedia[0].url} title={data.title} subTitle={data.abstract} updated_date={data.updated_date} img_caption={data.multimedia[0].caption} />

            })
        }
        {showGoToTopButton && <div className="goToTop" onClick={() => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }}><Circle cursor="pointer" size='60px' icon={'fa-solid fa-angle-up fa-2x'} backgroundColor={'#20262E'} color={'snow'} /></div>}

    </div>
}