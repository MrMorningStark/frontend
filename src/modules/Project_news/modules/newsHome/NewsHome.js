import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { getSearchArticle, getTopSories } from "../../../../API/api";
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
    const [isSearch, setIsSearch] = useState(false);
    const [searchWord, setSearchWord] = useState('');
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
        setIsSearch(false);
        setLoading(true);
        const response = await getTopSories(topStories);
        if (response.status === 'OK') {
            setData( response.results.filter(data=>data?.multimedia?.length > 0) );
        }
        console.log(response.results);
        setLoading(false);
    }
    const searchArticle = async (search) => {
        setLoading(true);
        const response = await getSearchArticle(search);
        if (response.status === 'OK') {
            setIsSearch(true);
            setData( response.response.docs.filter(data=>data?.multimedia?.length > 0) );
        }
        console.log(response.response.docs);
        setLoading(false);
    }

    const ShowNews=()=>{
        return data.map(data => {

            return <Content key={uuid()}
                url={data?.url??data?.web_url   }
                img_url={data?.multimedia?.length > 0 ? isSearch?'https://www.nytimes.com/'+data?.multimedia[0]?.url:data?.multimedia[0]?.url : ''}
                title={isSearch?data?.headline?.main:data?.title}
                subTitle={data?.abstract}
                created_date={moment(data?.created_date).format('MMM. DD, YYYY hh:mm A').toString()}
                img_caption={data?.multimedia?.length > 0 ? isSearch?data?.lead_paragraph: data?.multimedia[0]?.caption : ''} />

        })
    }

    return <>
        {loading && <i className="spinner fa-solid fa-circle-notch fa-spin fa-3x" />}
        {showGoToTopButton && <Circle className="goToTop" onClick={() => { window.scroll({ top: 0, left: 0, behavior: 'smooth' }); }} title="go top" cursor="pointer" size='60px' icon={'fa-solid fa-angle-up fa-2x'} backgroundColor={'#20262E'} color={'snow'} />
        }

        {/* SEARCH STARTS */}
        <div className="search-box">

        <input onChange={(e)=>{
            if(e.target.value==''){
                loadData();
            }
            setSearchWord(e.target.value);
        }} onKeyDown={(e)=>{            
            if(e.key === "Enter"){
            if(e.target.value=='')return;            
            searchArticle(e.target.value);
        }}} placeholder="Search article..." className="search" type={'search'} />
        <i title="search" className="fa-solid fa-search search-icon" onClick={()=>{
            if(searchWord=='')return;
            searchArticle(searchWord);
        }} />
        </div>
        {/* SEARCH ENDS */}

        <NewsHeader setTopStories={setTopStories} />
        <div className="newsBox">

            {!loading && isSearch?data.length>0? <ShowNews />:'no data found':<ShowNews />
            }


        </div>
    </>
}