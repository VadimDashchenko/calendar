import React, {Component} from 'react';
import CalendarContainer from '../Calendar/Calendar';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import {connect} from 'react-redux';
import * as EventActions from '../../actions/event';
import './styles.scss';

class App extends Component {

    render() {
        const {events} = this.props;
        return (
            <div className="app">
                <Header/>
                <Sidebar/>
                <div className="app__content">
                    <div className="app__content-block">
                        <span className="app__content-title">Calendar</span>
                        <CalendarContainer events={events} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    events: state.events.events
})

export default connect(
    mapStateToProps,
    EventActions
)(App);
