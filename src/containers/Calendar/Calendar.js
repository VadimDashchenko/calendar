import React, {Component, Children} from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar';
import {v4 as id} from 'uuid';
import EventModal from "../../components/EventModal/EventModal";
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import * as EventActions from '../../actions/event';
import {connect} from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
import './styles.scss';

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);
const currentDate = moment().toDate();

const Date = ({children, value}) =>
    React.cloneElement(Children.only(children), {
        style: {
            ...children.style,
            backgroundColor: value.toDateString() === currentDate.toDateString() && '#F5F6FA'
        }
    });


class CalendarContainer extends Component {

    state = {
        displayDragItemInCell: true,
        events: this.props.events,
        openEventModal: false,
        left: null,
        top: null,
        newEvent: {
            id: null,
            title: '',
            start: '',
            end: '',
            time: '',
            notes: '',
            allDay: false
        },
        clickEvent: '',
        changeableEvent: null,
        errorMessage: false
    }

    componentDidUpdate(prevProps) {
        if (this.props.events !== prevProps.events) {
            this.setState({events: this.props.events})
        }
    }

    handleDragStart = event => {
        this.setState({draggedEvent: event})
    }

    dragFromOutsideItem = () => {
        return this.state.draggedEvent
    }

    onDropFromOutside = ({start, end, allDay}) => {
        const {draggedEvent} = this.state;
        const event = {
            id: draggedEvent.id,
            title: draggedEvent.title,
            start,
            end,
            allDay: allDay,
        }

        this.setState({draggedEvent: null})
        this.moveEvent({event, start, end})
    }

    moveEvent = ({event, start, end, isAllDay: droppedOnAllDaySlot}) => {
        const {events} = this.state;
        const {resizeAndDragEvent} = this.props;

        let allDay = event.allDay

        if (!event.allDay && droppedOnAllDaySlot) {
            allDay = true
        } else if (event.allDay && !droppedOnAllDaySlot) {
            allDay = false
        }
        const nextEvents = events.map(existingEvent => {
            return existingEvent.id === event.id
                ? {...existingEvent, start, end}
                : existingEvent
        })
        resizeAndDragEvent(nextEvents);
    }

    resizeEvent = ({event, start, end}) => {
        const {events} = this.state;
        const {resizeAndDragEvent} = this.props;
        const nextEvents = events.map(existingEvent => {
            return existingEvent.id === event.id
                ? {...existingEvent, start, end}
                : existingEvent
        })
        resizeAndDragEvent(nextEvents);
    }

    openEventModal = (event, clickEvent) => {
        let hours = new window.Date().setHours(0);
        let today = new window.Date(hours).setMinutes(0);
        let start = event.start.setMinutes(1);
        if (new window.Date(start).getTime() < new window.Date(today).getTime()) {
            alert('Choose a valid date')
        } else {
            if (event.resourceId === null || (event.box === undefined && event.bounds === undefined)) {
                return false;
            } else {
                let left = event.bounds === undefined ? event.box.x : event.bounds.x;
                let top = event.bounds === undefined ? event.box.y : event.bounds.y;
                this.setState(oldState => {
                    return {
                        openEventModal: true,
                        left: left,
                        top: top,
                        clickEvent: clickEvent,
                        newEvent: {
                            ...oldState.newEvent,
                            id: id(),
                            start: event.start,
                            end: event.end,
                        }
                    }
                });
            }
        }
    }

    closeEventModal = () => {
        this.setState({
            openEventModal: false,
            clickEvent: '',
            changeableEvent: null,
            errorMessage: false,
            newEvent: {
                id: null,
                title: '',
                start: '',
                end: '',
                time: '',
                notes: '',
                allDay: false
            }
        })
    }

    handleChange = ({target: {name, value}}, event) => {
        event === 'edit'
            ?
            this.setState(prevState => {
                return {
                    changeableEvent: {
                        ...prevState.changeableEvent,
                        [name]: value
                    }
                }
            })
            :
            this.setState(prevState => {
                return {
                    newEvent: {
                        ...prevState.newEvent,
                        [name]: value,
                    }
                }
            })
    }

    addNewEvent = () => {
        const {addEvent} = this.props;
        const {newEvent} = this.state;
        if (newEvent.title === '' || newEvent.start === '' || newEvent.time === '' || newEvent.notes === '') {
            this.setState({
                errorMessage: true
            })
        } else {
            addEvent(this.state.newEvent);
            this.setState({
                openEventModal: false,
                errorMessage: false,
                newEvent: {
                    id: null,
                    title: '',
                    start: '',
                    end: '',
                    time: '',
                    notes: '',
                    allDay: false
                }
            })
        }
    }

    editEvent = () => {
        const {changeEvent} = this.props;
        changeEvent(this.state.changeableEvent);
        this.setState({
            openEventModal: false,
            changeableEvent: null
        })
    };

    deleteEvent = (id) => {
        const {deleteEvent} = this.props;
        deleteEvent(id);
        this.setState({
            openEventModal: false,
            changeableEvent: null
        })
    }

    chooseEvent = (e, clickEvent, event) => {
        const {events} = this.state;
        const findEvent = events.find(event => event.id === e.id);
        let left = event.pageX;
        let top = event.pageY;
        this.setState({
            openEventModal: true,
            left: left,
            top: top,
            clickEvent: clickEvent,
            changeableEvent: findEvent
        });
    }

    render() {
        const {openEventModal, left, top, newEvent, clickEvent, changeableEvent, errorMessage} = this.state;
        return (
            <div className="calendar">
                <span className="calendar__title">Calendar View</span>
                <EventModal save={this.addNewEvent}
                            event={newEvent}
                            handleChange={(e, event) => this.handleChange(e, event)}
                            close={this.closeEventModal}
                            open={openEventModal}
                            style={{left: left - 100, top: top}}
                            clickEvent={clickEvent}
                            changeableEvent={changeableEvent}
                            errorMessage={errorMessage}
                            editEvent={this.editEvent}
                            deleteEvent={(id) => this.deleteEvent(id)}
                />
                <DragAndDropCalendar
                    culture="en"
                    localizer={localizer}
                    events={this.state.events}
                    startAccessor="start"
                    endAccessor="end"
                    defaultView="month"
                    style={{height: 635, width: '100%'}}
                    selectable={true}
                    onEventDrop={this.moveEvent}
                    resizable
                    onEventResize={this.resizeEvent}
                    popup
                    dragFromOutsideItem={
                        this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
                    }
                    onDropFromOutside={this.onDropFromOutside}
                    handleDragStart={this.handleDragStart}
                    step={60}
                    onSelectEvent={(e, event) => this.chooseEvent(e, 'edit', event)}
                    onSelectSlot={(e) => openEventModal ? undefined : this.openEventModal(e, 'create')}
                    components={{
                        dateCellWrapper: Date,
                    }}
                />
            </div>
        )
    }
}

export default connect(
    null,
    EventActions
)(CalendarContainer);