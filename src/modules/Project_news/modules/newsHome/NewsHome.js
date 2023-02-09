import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { getTopSories } from "../../../../API/api";
import { TOP_STORIES } from "../../../../constant/constant";
import { Content } from "../../../helper/Content";

export const NewsHome = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);


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
                
            })}

    </div>
}