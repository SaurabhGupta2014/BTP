import React from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import "./HomePage.css";
import Card from '../../components/card/Card';
const items=[
    "Name",
    "Profile",
    "My Communities",
    "Settings",
    "Fav Communities",
    "Recents"
]
const HomePage=(props)=> {
    return (
        <div className="backgroundBody">
            < Header />
            <div style={{display:"flex"}}>
                <div className="leftPanel">
                    <Sidebar items={items}/>
                </div>
                <div className="rightPanel">
                    <div className="styleCardDiv">
                        <div style={{flex:"4",height:"fitContent",marginBottom:"20px"}}>
                        <Card title="Healthy" desc="you can talk about healthy things here."/>  
                        </div><div style={{flex:"4",height:"fitContent",marginBottom:"20px"}}>
                        <Card title="Healthy" desc="you can talk about healthy things here."/>  
                        </div><div style={{flex:"4",height:"fitContent",marginBottom:"20px"}}>
                        <Card title="Healthy" desc="you can talk about healthy things here."/>  
                        </div><div style={{flex:"4",height:"fitContent",marginBottom:"20px"}}>
                        <Card title="Healthy" desc="you can talk about healthy things here."/>  
                        </div><div style={{flex:"4",height:"fitContent",marginBottom:"20px"}}>
                        <Card title="Healthy" desc="you can talk about healthy things here."/>  
                        </div><div style={{flex:"4",height:"fitContent",marginBottom:"20px"}}>
                        <Card title="Healthy" desc="you can talk about healthy things here."/>  
                        </div><div style={{flex:"4",height:"fitContent",marginBottom:"20px"}}>
                        <Card title="Healthy" desc="you can talk about healthy things here."/>  
                        </div><div style={{flex:"4",height:"fitContent",marginBottom:"20px"}}>
                        <Card title="Healthy" desc="you can talk about healthy things here."/>  
                        </div>
                        <div style={{flex:"4",height:"fitContent",marginBottom:"20px"}}>
                        <Card title="Healthy" desc="you can talk about healthy things here."/>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;