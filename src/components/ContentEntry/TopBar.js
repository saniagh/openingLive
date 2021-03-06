import React from 'react'

class TopBar extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="menu-placeholder">
                        <div className="menu-desktop">
                            <ul className="navigation">
                                <li><a href="indexlogged.php">Acasa</a></li>
                                <li><a href="content_newest.php">Jocuri</a></li>
                                <li><a href="faq.php">Despre noi</a></li>
                                <li><a href="content.php">Jocurile Mele</a></li>
                                <li><a href="includes/logout.php">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar