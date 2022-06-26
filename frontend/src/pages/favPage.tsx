import { useSelector } from 'react-redux';
import { RobotList } from '../components/robot/listRobots';
import { iState } from '../store/store';

export function FavPage() {
    const robots = useSelector((store: iState) => store.robots);
    const template = (
        <>
            <h2>Robots Favoritos</h2>
            {/* {robots.filter((item) => item.favorite === true)} */}
            <RobotList robots={robots}></RobotList>

            <h2>Favoritos</h2>
        </>
    );

    return template;
}

export default FavPage;
