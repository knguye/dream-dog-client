import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../styles/widgets.css'


export default function Home() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    /*
        TODO:
        1. Widgets on screen
        2. Layout grid
    */

    return (
        <div className='page-container'>
            <div className="section-container">
                <MessagesWidget/>
            </div>
            <div className="section-container">
                <AnalyticsWidget/>
                <ScheduleWidget/>
            </div>
        </div>
    )
}

function MessagesWidget() {
    return (
        <div class="widget" id="messages-widget">

        </div>
    )
}

function AnalyticsWidget() {
    return (
        <div class="widget" id="analytics-widget">

        </div>
    )
}

function ScheduleWidget() {
    return (
        <div class="widget" id="schedule-widget">

        </div>
    )
}

