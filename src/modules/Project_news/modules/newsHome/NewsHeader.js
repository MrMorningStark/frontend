import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { TOP_STORIES } from "../../../../constant/constant"

export const NewsHeader = ({setTopStories}) => {

    const navigate=useNavigate();

    useEffect(() => {
        let startDragging = function (e) {
            mouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };
        let stopDragging = function (event) {
            mouseDown = false;
        };
        var slider = document.querySelector('.newsHeader');
        let mouseDown = false;
        let startX, scrollLeft;

        slider.addEventListener('mousedown', startDragging);
        slider.addEventListener('mouseup', stopDragging);
        slider.addEventListener('mouseleave', stopDragging);
        slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if (!mouseDown) { return; }
            const x = e.pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
        });

        return ()=>{
            document.removeEventListener('mousedown',()=>{});
            document.removeEventListener('mouseup',()=>{});
            document.removeEventListener('mouseleave',()=>{});
            document.removeEventListener('mousemove',()=>{});
        }

    }, []);



    return <div className="newsHeader">
        <ul>
            {Object.keys(TOP_STORIES).map(key => {
                return <li key={uuid()} onClick={()=>{navigate('#'+key); setTopStories(key);}}>{key}</li>
            })}

        </ul>
    </div>
}