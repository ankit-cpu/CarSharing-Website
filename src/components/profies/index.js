import React from 'react';
import Edit from './editFile';
import { HeroBg, HeroContainer, VideoBg, HeroContent } from './profileElement';



const Profile = () => {
    return (
        <HeroContainer id='home'>
                <HeroBg> 
                    <VideoBg autoPlay loop muted src="./videos" type='video/mp4'/>
                </HeroBg>
                <HeroContent>
                <div className="container emp-profile" style={{marginBottom: "100px"}} >
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="data:image/png;base64,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" alt="profile"/>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head" style={{marginLeft:"100px"}}>
                                <h2 style={{color:"#fff"}}><Edit>PROFILE NAME</Edit></h2>
                                <ul className="nav nav-tabs" role="tablist" style={{marginTop: "140px"}}>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/profile" id="home-tab" data-toggle="tab" role="tab">Riding</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link active" href="/profile" id="profile-tab" data-toggle="tab" role="tab">Driving</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2" >
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" style={{marginLeft:"80px"}}/>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"30px"}}>
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-aria-labelledby="home-tab">
                                    <div className="row" style={{color:"#fff"}}>
                                        <div className="col-md-6">
                                            <label>USER ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>649413</p>
                                        </div>
                                    </div>
                                    <div className="row" style={{color:"#fff"}}>
                                        <div className="col-md-6">
                                            <label>EMAIL ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p><Edit/></p>
                                        </div>
                                    </div>
                                    <div className="row" style={{color:"#fff"}}>
                                        <div className="col-md-6">
                                            <label>PHONE NO.</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p><Edit/></p>
                                        </div>
                                    </div>
                                    <div className="row" style={{color:"#fff"}}>
                                        <div className="col-md-6">
                                            <label>ADDRESS</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p><Edit/></p>
                                        </div>
                                    </div>
                                    <div className="row" style={{color:"#fff"}}>
                                        <div className="col-md-6">
                                            <label>AADHAR NO.</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p><Edit/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
                </HeroContent>
            </HeroContainer>
            
    )
}

export default Profile

