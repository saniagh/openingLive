import React from 'react'
import TopBar from './TopBar'

var Content = React.createClass({
    postCategory: function (category_id) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("category_id", category_id);
        } else {
            alert("Please use a browser that supports LocalStorage.");
        }
    },
    render() {
        return (
            <div className="DOM">
                <TopBar/>
                <div className="Title">
                    <p>Level UP</p>
                </div>

                <div className="container">
                    <div className="content">
                        <p >Bine ai venit!</p>
                        <p className="p-text">Bine ai venit pe site-ul nostru. Daca nu esti inregistrat deja, te rugam
                            sa o faci. Poti
                            incepe chiar acum sa
                            cauti jocuri care te-ar interesa</p>
                        <div className="button"><a href="content_newest.php">Vezi toate jocurile</a>
                        </div>
                    </div>
                    <div className="categories">
                        <div className="categories_content"><p>Tipuri de jocuri</p>
                            <ul>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('1')}}><li>Action</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('2')}}><li>Adventure</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('3')}}><li>Arcade</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('4')}}><li>Browser</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('5')}}><li>Fighting</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('6')}}><li>Horror</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('7')}}><li>MMORPG/RPG</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('8')}}><li>MOBA</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('9')}}><li>Puzzle</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('10')}}><li>Racing</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('11')}}><li>Simulator</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('12')}}><li>First-Person Shooter</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('13')}}><li>Third-Person Shooter</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('14')}}><li>Sports</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('15')}}><li>Real-Time Strategy</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('16')}}><li>Turn-Based Strategy</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('17')}}><li>Sci-Fi</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="newest">
                    <p>Cele mai noi Jocuri</p></div>
                <div className="">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default Content