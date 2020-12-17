import React, { lazy } from 'react'
import {Route, Switch } from "react-router-dom";

//Import all pages component here
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Content = lazy(() => import('../pages/Content'));
const Classes = lazy(() => import('../pages/Classes'));
const ContentRepository = lazy(() => import('../pages/content/ContentRepository'));
const EventRepository = lazy(() => import('../pages/events/EventRepository'));
const ClassOverview = lazy(() => import('../pages/ClassOverview'));
const Events = lazy(() => import('../pages/Events'));
const Resources = lazy(() => import('../pages/Resources'));
const DamageSkin = lazy(() => import('../pages/DamageSkin'));
const NotFound = lazy(() => import('../pages/NotFound'));

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/content/:id" component={ContentRepository}/>
            <Route path="/content" component={Content}/>
            <Route path="/classes/:id" component={ClassOverview}/>
            <Route path="/classes" component={Classes}/>
            <Route path="/events/:id" component={EventRepository}/>
            <Route path="/events" component={Events}/>
            <Route path="/resources" component={Resources}/>
            <Route path="/damage-skin" component={DamageSkin}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes
