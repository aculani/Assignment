import { useState } from 'react';
export default function NavbarDropdown({ img, items }) {

    const [showDropdown, setShownDropdown] = useState(false);
    const toggleDropdown = () => {
        setShownDropdown(!showDropdown);
    };
    return (
        <>
            <div className="dropdown text-end">
                <a onClick={toggleDropdown} href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
                    <img src={img} alt="mdo" width="32" height="32" className="rounded-circle" />
                </a>
                <ul className={`dropdown-menu text-small end-0 ${showDropdown && 'show'}`}>
                    {items.map((item) => {
                        if (item.label === "---") {
                            return (
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                            );
                        }
                        return (
                            <li>
                                <a className="dropdown-item" href={item.link}>
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );

}