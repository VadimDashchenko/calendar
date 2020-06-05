import React from 'react';
import PropTypes from 'prop-types';
import {IoMdTime, IoIosCloseCircleOutline, IoMdArrowDropup} from 'react-icons/io'
import {RiCalendar2Line, RiArrowUpSLine} from 'react-icons/ri';
import './styles.scss';
import "react-datepicker/dist/react-datepicker.css";

const EventModal = (props) => {
    const {
        event: {title, start, end, time, notes},
        open,
        style,
        close,
        handleChange,
        save,
        clickEvent,
        changeableEvent,
        errorMessage,
        editEvent,
        deleteEvent
    } = props;
    const date = start !== '' && start.toLocaleDateString();
    const changedDate =
        start !== '' && `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
    const changeableEventStart =
        changeableEvent !== null && changeableEvent.start.toLocaleDateString();
    const changeableEventEnd =
        changeableEvent !== null && changeableEvent.end.toLocaleDateString();
    const changeableEventDate =
        changeableEvent !== null && `${changeableEvent.start.toLocaleDateString()} - ${changeableEvent.end.toLocaleDateString()}`
    return (
        <div className={open ? "event" : "disable"} style={style}>
            {clickEvent === 'create'
                ?
                <IoMdArrowDropup className="event__arrow" color="#43425D" size={25}/>
                :
                <RiArrowUpSLine className="event__arrow-change" color="#43425D" size={20}/>
            }
            <IoIosCloseCircleOutline className="event__close" size={20} color="#D6D6D6" onClick={close}/>
            <div className="event__name">
                <input className={errorMessage && title === '' ? "error" : undefined} name="title" type="text"
                       placeholder={errorMessage ? "enter name event" : "event name"}
                       value={changeableEvent !== null ? changeableEvent.title : title}
                       onChange={changeableEvent === null ? (e) => handleChange(e) : (e) => handleChange(e, 'edit')}/>
            </div>
            <div className="event__date">
                <input className={errorMessage && date === '' ? "error" : undefined} name="date" type="text"
                       placeholder={errorMessage ? "enter date event" : "event date"}
                       value={
                           changeableEvent === null
                               ?
                               start !== end ? changedDate : date
                               :
                               changeableEventStart === changeableEventEnd ? changeableEventStart : changeableEventDate
                       }
                       onChange={changeableEvent === null ? (e) => handleChange(e) : (e) => handleChange(e, 'edit')}/>
                <RiCalendar2Line color="#D6D6D6" size={20}/>
            </div>
            <div className="event__time">
                <input className={errorMessage && time === '' ? "error" : undefined} name="time" type="time"
                       placeholder={errorMessage ? "enter time event" : "event time"}
                       value={changeableEvent !== null ? changeableEvent.time : time}
                       onChange={changeableEvent === null ? (e) => handleChange(e) : (e) => handleChange(e, 'edit')}/>
                {/*<IoMdTime color="#D6D6D6" size={20} />*/}
            </div>
            <div className="event__notes">
                <input className={errorMessage && notes === '' ? "error" : undefined} name="notes" type="text"
                       placeholder={errorMessage ? "input notes event" : "event notes"}
                       value={changeableEvent !== null ? changeableEvent.notes : notes}
                       onChange={changeableEvent === null ? (e) => handleChange(e) : (e) => handleChange(e, 'edit')}/>
            </div>
            <div className="event__buttons">
                <span className="event__cancel"
                      onClick={clickEvent === 'edit' ? () => deleteEvent(changeableEvent.id) : close}>{clickEvent === 'edit' ? 'Discard' : 'Cancel'}</span>
                <span className="event__save"
                      onClick={clickEvent === 'edit' ? editEvent : save}>{clickEvent === 'edit' ? 'Edit' : 'Save'}</span>
            </div>
        </div>
    )
};

EventModal.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    time: PropTypes.number,
    notes: PropTypes.string,
    open: PropTypes.bool,
    save: PropTypes.func,
    close: PropTypes.func,
    clickEvent: PropTypes.string,
    errorMessage: PropTypes.bool,
    editEvent: PropTypes.func,
    deleteEvent: PropTypes.func,
}

export default EventModal;