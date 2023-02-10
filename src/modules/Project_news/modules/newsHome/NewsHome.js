import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { getTopSories } from "../../../../API/api";
import { TOP_STORIES } from "../../../../constant/constant";
import { Content } from "../../../helper/Content";
import { Circle } from "../../../helper/Circle";
import moment from "moment/moment";
import { NewsHeader } from "./NewsHeader";
import { useNavigate } from "react-router-dom";


export const NewsHome = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showGoToTopButton, setShowGoToTopButton] = useState(false);
    const [topStories, setTopStories] = useState(TOP_STORIES.home);

    const navigate = useNavigate();

    useEffect(()=>{
        navigate('#' + TOP_STORIES.home);

    },[])
    useEffect(() => {
        document.addEventListener('scroll', onScroll);
        loadData();
        return () => document.removeEventListener('scroll', onScroll);
    }, [topStories]);

    const onScroll = () => {

        if (window.scrollY > 300) {
            setShowGoToTopButton(true);
        }
        if (window.scrollY < 300) {
            setShowGoToTopButton(false);
        }

    }


    const loadData = async () => {
        setLoading(true);
        const response = await getTopSories(topStories);
        if (response.status === 'OK') {
            setData( response.results.filter(data=>data?.multimedia?.length > 0) );
        }
        console.log(response.results);
        setLoading(false);
    }
    return <>
        {loading && <i className="spinner fa-solid fa-circle-notch fa-spin fa-3x" />}
        {showGoToTopButton && <Circle className="goToTop" onClick={() => { window.scroll({ top: 0, left: 0, behavior: 'smooth' }); }} title="go top" cursor="pointer" size='60px' icon={'fa-solid fa-angle-up fa-2x'} backgroundColor={'#20262E'} color={'snow'} />
        }
        <NewsHeader setTopStories={setTopStories} />
        <div className="newsBox">

            {!loading && data.map(data => {

                return <Content key={uuid()}
                    url={data?.url}
                    img_url={data?.multimedia?.length > 0 ? data?.multimedia[0]?.url : ''}
                    title={data?.title}
                    subTitle={data?.abstract}
                    updated_date={moment(data?.updated_date).format('MMM. DD, YYYY hh:mm A').toString()}
                    img_caption={data?.multimedia?.length > 0 ? data?.multimedia[0]?.caption : ''} />

            })
            }


        </div>
    </>
}