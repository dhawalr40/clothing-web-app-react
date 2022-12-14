import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/' >
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-link-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;