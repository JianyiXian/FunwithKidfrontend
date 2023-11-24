import Button from "../../shared/components/Button";

import './EventDetails.css';
const EventDetails = props => {
    return (
        <div className="event-details p-5">
            <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F611349729%2F468130825823%2F1%2Foriginal.20231002-213330?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2162%2C1081&s=160d6aab31f4d1fd3e66f91f439c13ec" alt="Card image cap" />
            <h1 className="event-title fw-bold">TITLE HERE</h1>
            <p className="event-description">享受一个包含以下内容的嘉年华乐趣之夜：
                创意市场，80多个摊位, 游戏摊位, 活动和体验, 小吃站, Instagram拍照点, 角色扮演 + 现场娱乐
                另外：您还可以从Bella Terra的众多餐厅和小吃店品尝美食、畅饮或享受美食！
                这个社区活动是免费的。欢迎宠物和家庭参加！！</p>
            <Button buttonName='Add to calendar' />
            <Button buttonName='Get a Ticket' className='red-button' />
            <h2 className="event-subtitle fw-bold">Date and Time</h2>
            <p>Sun, Dec 25, 7:00pm</p>
            <h2 className="event-subtitle fw-bold">Location</h2>
            <p>20955 pathfinder Rd, Diamond Bar, CA, 91766</p>
            <a>Show on map</a>
            <h2 className="event-subtitle fw-bold">Link</h2>
            <a>link to the event</a>

        </div>);
}

export default EventDetails;