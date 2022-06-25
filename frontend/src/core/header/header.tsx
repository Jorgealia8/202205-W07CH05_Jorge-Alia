import { aMenuItems } from '../../models/menu-items';
import { Menu } from '../menu/menu';

export function Header({ options }: { options: aMenuItems }) {
    const template = (
        <>
            <h1>Lista de Robots </h1>
            <Menu options={options}></Menu>
        </>
    );

    return template;
}
