import uuid from "react-uuid";
import { Circle } from "../../helper/Circle";

export const NewsFooter = () => {
    const curr_year = new Date().getFullYear();
    const contact = [
        {
            icon: 'fa-brands fa-github fa-2x',
            color: '#171515',
            backgroundColor: 'snow',
            title: 'github',
            url: 'https://github.com/MrMorningStark',
        },
        {
            icon: 'fa-brands fa-facebook fa-2x',
            color: '#4867aa',
            backgroundColor: 'snow',
            title: 'facebook',
            url: 'https://www.facebook.com/rajat.khatri.35380',
        },
        
        {
            icon: 'fa-brands fa-whatsapp fa-2x',
            backgroundColor: '#1bd741',
            color: 'white',
            title: 'whatsapp',
            url: 'https://wa.me/918882030533',
        },
        {
            icon: 'fa-brands fa-linkedin fa-2x',
            backgroundColor: 'white',
            color: '#0077b5',
            title: 'linkedin',
            url: 'https://www.linkedin.com/in/rajat-khatri-7872ba206/',
        },
        {
            icon: 'fa-brands fa-twitter fa-2x',
            backgroundColor: 'snow',
            color: '#1da1f2',
            title: 'twitter',
            url: 'https://twitter.com/MrMorningStark',
        },
        
    ]
    return <div className="news_footer">
        <div className="footer_content">
            <p className="center">Contact Me</p>
            {contact.map(c => {
                return <Circle onClick={() => { window.open(c.url) }} margin="5px 10px" title={c.title} cursor="pointer" backgroundColor={c.backgroundColor} size="50px" color={c.color} icon={c.icon} />
            })}
            <p className="copyright">Copyright ©️ {curr_year} The News | Rajat Khatri</p>
        </div>
    </div>
}