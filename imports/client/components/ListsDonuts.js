import React from 'react';
import './ListsDonuts.css';



class ListsDonuts extends React.Component {
    render() {
        return(

            <div className="ListsDonuts">

                <div className="ListsDonuts-container">

                    <div className="five-donuts">

                    
                        <div className="first-donut">

                            <img src="../pages/first-donut.png" alt="first-donut"/>

                            <div className="information">

                                <h1>Bormina Clem</h1>

                                <p>10.09.2099</p>

                            </div>

                            <div className="price-donut-button">

                                <p className="price">330</p>
                                <p className="dollar">&#36;</p>
                                <p className="fa fa-pencil"></p>
                                <a href="#">
                                    <span className="glyphicon glyphicon-trash"></span>
                                </a>                                


                            </div>

                        </div>

                        <div className="second-donut">

                            <img src="../pages/second-donut.png" alt="second-donut"/>

                            <div className="information">

                                <h1>Flori Clest</h1>

                                <p>10.09.2099</p>

                            </div>

                            <div className="price-donut-button">

                                <p className="price">330</p>
                                <p className="dollar">&#36;</p>
                                <p className="fa fa-pencil"></p>
                                <a href="#">
                                    <span className="glyphicon glyphicon-trash"></span>
                                </a>                                


                            </div>

                        </div>

                        <div className="third-donut">

                            <img src="../pages/third-donut.png" alt="third-donut"/>
                            
                            <div className="information">

                                <h1>Coli Moron</h1>

                                <p>10.09.2099</p>
                                

                            </div>
                            <div className="price-donut-button">

                                <p className="price">330</p>
                                <p className="dollar">&#36;</p>

                            </div>

                        </div>

                        <div className="fourth-donut">

                            <img src="../pages/first-donut.png" alt="first-donut"/>

                            <div className="information">

                                <h1>Jem Stern</h1>

                                <p>10.09.2099</p>

                            </div>
                           <div className="price-donut-button">

                                <p className="price">330</p>
                                <p className="dollar">&#36;</p>
                                <p className="fa fa-pencil"></p>
                                <a href="#">
                                    <span className="glyphicon glyphicon-trash"></span>
                                </a>                                


                            </div>

                        </div>

                        <div className="fifth-donut">

                            <img src="../pages/second-donut.png" alt="third-donut"/>

                            <div className="information">

                                <h1>Aladins Hlumin</h1>

                                <p>10.09.2099</p>

                            </div>
                           <div className="price-donut-button">

                                <p className="price">330</p>
                                <p className="dollar">&#36;</p>
 
                            </div>

                        </div>

                    </div>

                    <div className="three-donuts">

                        <div className="first-donut-box">

                            <div className="first-donut-box-container">
                                <img src="../pages/first-donut.png" alt="first-donut"/>

                                <div className="information1">

                                    <h1>Bormina Clem</h1>

                                    <p>10.09.2099</p>

                                </div>

                                <div className="price-donut">

                                    <p className="price">330</p>
                                    <p className="dollar">&#36;</p>

                                </div>


                            </div>
                        </div>

                        <div className="second-donut-box">

                            <div className="second-donut-box-container">

                                <img src="../pages/second-donut.png" alt="second-donut"/>

                                <div className="information1">

                                    <h1>Flori Clest</h1>

                                    <p>10.09.2099</p>

                                </div>

                                <div className="price-donut">

                                    <p className="price">330</p>
                                    <p className="dollar">&#36;</p>

                                </div>

                            </div>

                        </div>

                        <div className="third-donut-box">

                            <div className="second-donut-box-container">

                                <img src="../pages/third-donut.png" alt="third-donut"/>

                                <div className="information1">

                                    <h1>Coli Moron</h1>

                                    <p>10.09.2099</p>
                                    

                                </div>

                                <div className="price-donut-button1">

                                    <p className="price">330</p>
                                    <p className="dollar">&#36;</p>
                                    <p className="fa fa-pencil"></p>
                                    <a href="#">
                                        <span className="glyphicon glyphicon-trash"></span>
                                    </a>                        

                                </div>

                            </div>

                        </div>

                    </div>
           
                </div>

            </div>

        );
    }
}

export default ListsDonuts;