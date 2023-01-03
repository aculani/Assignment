import NavbarDropdown from './Navbar/NavbarDropdown';
import NavbarMenu from './Navbar/NavbarMenu';
import NavbarWrapper from './Navbar/NavbarWrapper';

export default function Navbar() {

    const dropdownItems = [
        { label: 'Profile', link: '#' },
        { label: 'Inbox', link: '#' },
        { label: 'Settings', link: '#' },
        { label: '---', link: '#' },
        { label: 'Sign out', link: '#' },
    ];
    const menuItems = [
        { label: 'Home', link: '#' }
    ];
    return (
        <>
            <NavbarWrapper>
                <NavbarMenu title="Admin" items={menuItems} />
                <NavbarDropdown items={dropdownItems} img="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/321148993_716172279751408_3341232305164531986_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jhsC7XceeMYAX9LCuZQ&_nc_ht=scontent.fuln1-2.fna&oh=00_AfAxy4CWTdJ8F3oC-3LuVkZKh5CGNIsc09MYem4PRcC4yA&oe=63B8958C" />
            </NavbarWrapper>
        </>
    );
}