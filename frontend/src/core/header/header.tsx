import { aMenuItems } from '../../models/menu-items';
import { Menu } from '../menu/menu';

export function Header({ options }: { options: aMenuItems }) {
    const template = (
        <>
            <h1>BIENVENIDO A ROBOTS PLANETS </h1>
            <Menu options={options}></Menu>
        </>
    );

    return template;
}
