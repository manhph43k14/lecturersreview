import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="body">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                        <li data-target="#carousel-example-generic" data-slide-to={1} />
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t31.0-8/30424977_902263606619606_4677972635617855065_o.jpg?_nc_cat=102&_nc_sid=825194&_nc_ohc=oJc041Vf-oYAX_ikpuh&_nc_ht=scontent.fdad3-1.fna&oh=a0d9b35b514174e15e504e0bf7530c86&oe=5EB1D644" alt="Slide 1" />
                            <div className="carousel-caption">

                            </div>
                        </div>
                        <div className="item">
                            <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t31.0-8/30424977_902263606619606_4677972635617855065_o.jpg?_nc_cat=102&_nc_sid=825194&_nc_ohc=oJc041Vf-oYAX_ikpuh&_nc_ht=scontent.fdad3-1.fna&oh=a0d9b35b514174e15e504e0bf7530c86&oe=5EB1D644" alt="Slide 2" />
                            <div className="carousel-caption">

                            </div>
                        </div>
                    </div>
                    {/* Controls */}
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* Container */}
                <div className="container-fluid padding">
                    <div className="row padding">
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/65393176_10219297781498243_6920570719185141760_n.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=1WOiX7Wz6lEAX-W39Wg&_nc_ht=scontent.fdad3-3.fna&oh=84a9d4ea286fdf84e10cdeaca699b1f9&oe=5EB15AE8" alt="Cao Thi Nham"/>
                                <div className="card-body">
                                    <h4 className="card-title">Cao Thị Nhâm</h4>
                                    <p className="card-text">Cao Thị Nhâm... </p>
                                    <a href="#" className="btn btn-outline-secondary">See profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-1/c340.0.1365.1365a/47134113_10156803266164730_5835944760862310400_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=r1agqJe58FAAX8MnXCx&_nc_ht=scontent.fdad3-2.fna&oh=f80be10c061925eb09d05c9451d9d849&oe=5EB0C6E6" alt="Nguyen Thanh Thuy"/>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Nguyễn Thành Thủy
                                    </h4>
                                    <p className="card-text">Nguyễn Thành Thủy...</p>
                                    <a href="#" className="btn btn-outline-secondary">See profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="http://scv.udn.vn/anh/130.000.00002.jpg" alt="Le The Gioi" />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Lê Thế Giới
                                    </h4>
                                    <p className="card-text">Lê Thế Giới...</p>
                                    <a href="#" className="btn btn-outline-secondary">See profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;