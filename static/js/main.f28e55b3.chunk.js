(this.webpackJsonpcalendar = this.webpackJsonpcalendar || []).push([[0], {
    196: function (e, t, n) {
    }, 197: function (e, t, n) {
    }, 198: function (e, t, n) {
    }, 199: function (e, t, n) {
    }, 200: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = {};
        n.r(a), n.d(a, "ADD_EVENT", (function () {
            return O
        })), n.d(a, "RESIZE_AND_DRAG_EVENT", (function () {
            return S
        })), n.d(a, "CHANGE_EVENT", (function () {
            return C
        })), n.d(a, "DELETE_EVENT", (function () {
            return j
        })), n.d(a, "addEvent", (function () {
            return M
        })), n.d(a, "resizeAndDragEvent", (function () {
            return k
        })), n.d(a, "changeEvent", (function () {
            return A
        })), n.d(a, "deleteEvent", (function () {
            return T
        }));
        var r = n(1), s = n.n(r), l = n(4), c = n.n(l), o = n(19), i = n(21), d = n(37), v = n(38), u = n(41),
            m = n(42), E = n(25), p = n(8), h = n(57), g = n(202), f = n(54), _ = n(55),
            b = (n(94), n(95), function (e) {
                var t = e.event, n = t.title, a = t.start, r = t.end, l = t.time, c = t.notes, o = e.open, i = e.style,
                    d = e.close, v = e.handleChange, u = e.save, m = e.clickEvent, E = e.changeableEvent,
                    p = e.errorMessage, h = e.editEvent, g = e.deleteEvent, b = "" !== a && a.toLocaleDateString(),
                    D = "" !== a && "".concat(a.toLocaleDateString(), " - ").concat(r.toLocaleDateString()),
                    N = null !== E && E.start.toLocaleDateString(), y = null !== E && E.end.toLocaleDateString(),
                    w = null !== E && "".concat(E.start.toLocaleDateString(), " - ").concat(E.end.toLocaleDateString());
                return s.a.createElement("div", {
                    className: o ? "event" : "disable",
                    style: i
                }, "create" === m ? s.a.createElement(f.b, {
                    className: "event__arrow",
                    color: "#43425D",
                    size: 25
                }) : s.a.createElement(_.a, {
                    className: "event__arrow-change",
                    color: "#43425D",
                    size: 20
                }), s.a.createElement(f.a, {
                    className: "event__close",
                    size: 20,
                    color: "#D6D6D6",
                    onClick: d
                }), s.a.createElement("div", {className: "event__name"}, s.a.createElement("input", {
                    className: p && "" === n ? "error" : void 0,
                    name: "title",
                    type: "text",
                    placeholder: p ? "enter name event" : "event name",
                    value: null !== E ? E.title : n,
                    onChange: null === E ? function (e) {
                        return v(e)
                    } : function (e) {
                        return v(e, "edit")
                    }
                })), s.a.createElement("div", {className: "event__date"}, s.a.createElement("input", {
                    className: p && "" === b ? "error" : void 0,
                    name: "date",
                    type: "text",
                    placeholder: p ? "enter date event" : "event date",
                    value: null === E ? a !== r ? D : b : N === y ? N : w,
                    onChange: null === E ? function (e) {
                        return v(e)
                    } : function (e) {
                        return v(e, "edit")
                    }
                }), s.a.createElement(_.b, {
                    color: "#D6D6D6",
                    size: 20
                })), s.a.createElement("div", {className: "event__time"}, s.a.createElement("input", {
                    className: p && "" === l ? "error" : void 0,
                    name: "time",
                    type: "time",
                    placeholder: p ? "enter time event" : "event time",
                    value: null !== E ? E.time : l,
                    onChange: null === E ? function (e) {
                        return v(e)
                    } : function (e) {
                        return v(e, "edit")
                    }
                })), s.a.createElement("div", {className: "event__notes"}, s.a.createElement("input", {
                    className: p && "" === c ? "error" : void 0,
                    name: "notes",
                    type: "text",
                    placeholder: p ? "input notes event" : "event notes",
                    value: null !== E ? E.notes : c,
                    onChange: null === E ? function (e) {
                        return v(e)
                    } : function (e) {
                        return v(e, "edit")
                    }
                })), s.a.createElement("div", {className: "event__buttons"}, s.a.createElement("span", {
                    className: "event__cancel",
                    onClick: "edit" === m ? function () {
                        return g(E.id)
                    } : d
                }, "edit" === m ? "Discard" : "Cancel"), s.a.createElement("span", {
                    className: "event__save",
                    onClick: "edit" === m ? h : u
                }, "edit" === m ? "Edit" : "Save")))
            }), D = n(56), N = n.n(D), y = n(84), w = n.n(y), O = "ADD_EVENT", S = "RESIZE_AND_DRAG_EVENT",
            C = "CHANGE_EVENT", j = "DELETE_EVENT", M = function (e) {
                return {type: O, payload: e}
            }, k = function (e) {
                return {type: S, payload: e}
            }, A = function (e) {
                return {type: C, payload: e}
            }, T = function (e) {
                return {type: j, payload: e}
            }, I = (n(194), n(195), n(196), Object(h.b)(N.a)), x = w()(h.a), z = N()().toDate(), V = function (e) {
                var t = e.children, n = e.value;
                return s.a.cloneElement(r.Children.only(t), {style: Object(p.a)({}, t.style, {backgroundColor: n.toDateString() === z.toDateString() && "#F5F6FA"})})
            }, L = function (e) {
                Object(m.a)(n, e);
                var t = Object(u.a)(n);

                function n() {
                    var e;
                    Object(d.a)(this, n);
                    for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
                    return (e = t.call.apply(t, [this].concat(r))).state = {
                        displayDragItemInCell: !0,
                        events: e.props.events,
                        openEventModal: !1,
                        left: null,
                        top: null,
                        newEvent: {id: null, title: "", start: "", end: "", time: "", notes: "", allDay: !1},
                        clickEvent: "",
                        changeableEvent: null,
                        errorMessage: !1
                    }, e.handleDragStart = function (t) {
                        e.setState({draggedEvent: t})
                    }, e.dragFromOutsideItem = function () {
                        return e.state.draggedEvent
                    }, e.onDropFromOutside = function (t) {
                        var n = t.start, a = t.end, r = t.allDay, s = e.state.draggedEvent,
                            l = {id: s.id, title: s.title, start: n, end: a, allDay: r};
                        e.setState({draggedEvent: null}), e.moveEvent({event: l, start: n, end: a})
                    }, e.moveEvent = function (t) {
                        var n = t.event, a = t.start, r = t.end, s = t.isAllDay, l = e.state.events,
                            c = e.props.resizeAndDragEvent;
                        n.allDay;
                        !n.allDay && s || n.allDay, c(l.map((function (e) {
                            return e.id === n.id ? Object(p.a)({}, e, {start: a, end: r}) : e
                        })))
                    }, e.resizeEvent = function (t) {
                        var n = t.event, a = t.start, r = t.end, s = e.state.events;
                        (0, e.props.resizeAndDragEvent)(s.map((function (e) {
                            return e.id === n.id ? Object(p.a)({}, e, {start: a, end: r}) : e
                        })))
                    }, e.openEventModal = function (t, n) {
                        var a = (new window.Date).setHours(0), r = new window.Date(a).setMinutes(0),
                            s = t.start.setMinutes(1);
                        if (new window.Date(s).getTime() < new window.Date(r).getTime()) alert("Choose a valid date"); else {
                            if (null === t.resourceId || void 0 === t.box && void 0 === t.bounds) return !1;
                            var l = void 0 === t.bounds ? t.box.x : t.bounds.x,
                                c = void 0 === t.bounds ? t.box.y : t.bounds.y;
                            e.setState((function (e) {
                                return {
                                    openEventModal: !0,
                                    left: l,
                                    top: c,
                                    clickEvent: n,
                                    newEvent: Object(p.a)({}, e.newEvent, {id: Object(g.a)(), start: t.start, end: t.end})
                                }
                            }))
                        }
                    }, e.closeEventModal = function () {
                        e.setState({
                            openEventModal: !1,
                            clickEvent: "",
                            changeableEvent: null,
                            errorMessage: !1,
                            newEvent: {id: null, title: "", start: "", end: "", time: "", notes: "", allDay: !1}
                        })
                    }, e.handleChange = function (t, n) {
                        var a = t.target, r = a.name, s = a.value;
                        "edit" === n ? e.setState((function (e) {
                            return {changeableEvent: Object(p.a)({}, e.changeableEvent, Object(E.a)({}, r, s))}
                        })) : e.setState((function (e) {
                            return {newEvent: Object(p.a)({}, e.newEvent, Object(E.a)({}, r, s))}
                        }))
                    }, e.addNewEvent = function () {
                        var t = e.props.addEvent, n = e.state.newEvent;
                        "" === n.title || "" === n.start || "" === n.time || "" === n.notes ? e.setState({errorMessage: !0}) : (t(e.state.newEvent), e.setState({
                            openEventModal: !1,
                            errorMessage: !1,
                            newEvent: {id: null, title: "", start: "", end: "", time: "", notes: "", allDay: !1}
                        }))
                    }, e.editEvent = function () {
                        (0, e.props.changeEvent)(e.state.changeableEvent), e.setState({
                            openEventModal: !1,
                            changeableEvent: null
                        })
                    }, e.deleteEvent = function (t) {
                        (0, e.props.deleteEvent)(t), e.setState({openEventModal: !1, changeableEvent: null})
                    }, e.chooseEvent = function (t, n, a) {
                        var r = e.state.events.find((function (e) {
                            return e.id === t.id
                        })), s = a.pageX, l = a.pageY;
                        e.setState({openEventModal: !0, left: s, top: l, clickEvent: n, changeableEvent: r})
                    }, e
                }

                return Object(v.a)(n, [{
                    key: "componentDidUpdate", value: function (e) {
                        this.props.events !== e.events && this.setState({events: this.props.events})
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.state, n = t.openEventModal, a = t.left, r = t.top, l = t.newEvent,
                            c = t.clickEvent, o = t.changeableEvent, i = t.errorMessage;
                        return s.a.createElement("div", {className: "calendar"}, s.a.createElement("span", {className: "calendar__title"}, "Calendar View"), s.a.createElement(b, {
                            save: this.addNewEvent,
                            event: l,
                            handleChange: function (t, n) {
                                return e.handleChange(t, n)
                            },
                            close: this.closeEventModal,
                            open: n,
                            style: {left: a - 100, top: r},
                            clickEvent: c,
                            changeableEvent: o,
                            errorMessage: i,
                            editEvent: this.editEvent,
                            deleteEvent: function (t) {
                                return e.deleteEvent(t)
                            }
                        }), s.a.createElement(x, {
                            culture: "en",
                            localizer: I,
                            events: this.state.events,
                            startAccessor: "start",
                            endAccessor: "end",
                            defaultView: "month",
                            style: {height: 635, width: "100%"},
                            selectable: !0,
                            onEventDrop: this.moveEvent,
                            resizable: !0,
                            onEventResize: this.resizeEvent,
                            popup: !0,
                            dragFromOutsideItem: this.state.displayDragItemInCell ? this.dragFromOutsideItem : null,
                            onDropFromOutside: this.onDropFromOutside,
                            handleDragStart: this.handleDragStart,
                            step: 60,
                            onSelectEvent: function (t, n) {
                                return e.chooseEvent(t, "edit", n)
                            },
                            onSelectSlot: function (t) {
                                return n ? void 0 : e.openEventModal(t, "create")
                            },
                            components: {dateCellWrapper: V}
                        }))
                    }
                }]), n
            }(r.Component), F = Object(i.b)(null, a)(L), R = (n(197), function () {
                return s.a.createElement("div", {className: "sidebar"}, s.a.createElement("div", {className: "sidebar__header"}, s.a.createElement("span", null, "impekable")), s.a.createElement("ul", {className: "sidebar__list"}, s.a.createElement("li", null, s.a.createElement("img", {
                    className: "sidebar__icon",
                    src: "/calendar/assets/icons/home.svg",
                    alt: "home"
                }), s.a.createElement("a", {href: "#"}, "Home")), s.a.createElement("li", null, s.a.createElement("img", {
                    className: "sidebar__icon",
                    src: "../../assets/icons/home.svg",
                    alt: "home"
                }), s.a.createElement("a", {href: "#"}, "Dashboard")), s.a.createElement("li", null, s.a.createElement("img", {
                    className: "sidebar__icon",
                    src: "../../assets/icons/inbox.svg",
                    alt: "inbox"
                }), s.a.createElement("a", {href: "#"}, "Inbox")), s.a.createElement("li", null, s.a.createElement("img", {
                    className: "sidebar__icon",
                    src: "../../assets/icons/home.svg",
                    alt: "home"
                }), s.a.createElement("a", {href: "#"}, "Products")), s.a.createElement("li", null, s.a.createElement("img", {
                    className: "sidebar__icon",
                    src: "../../assets/icons/invoices.svg",
                    alt: "invoices"
                }), s.a.createElement("a", {href: "#"}, "Invoices")), s.a.createElement("li", null, s.a.createElement("img", {
                    className: "sidebar__icon",
                    src: "../../assets/icons/home.svg",
                    alt: "home"
                }), s.a.createElement("a", {href: "#"}, "Customers")), s.a.createElement("li", null, s.a.createElement("img", {
                    className: "sidebar__icon",
                    src: "../../assets/icons/home.svg",
                    alt: "home"
                }), s.a.createElement("a", {href: "#"}, "Chat Room")), s.a.createElement("li", {className: "active"}, s.a.createElement("img", {
                    className: "sidebar__icon",
                    src: "../../assets/icons/calendar.svg",
                    alt: "calendar"
                }), s.a.createElement("a", {href: "#"}, "Calendar")), s.a.createElement("li", null, s.a.createElement("img", {
                    className: "sidebar__icon",
                    src: "../../assets/icons/help.svg",
                    alt: "help"
                }), s.a.createElement("a", {href: "#"}, "Help Center")), s.a.createElement("li", null, s.a.createElement("img", {
                    className: "sidebar__icon",
                    src: "../../assets/icons/settings.svg",
                    alt: "settings"
                }), s.a.createElement("a", {href: "#"}, "Settings"))))
            }), H = (n(198), function () {
                return s.a.createElement("div", {className: "header"}, s.a.createElement("div", {className: "header__search"}, s.a.createElement("img", {
                    src: "../../assets/icons/search.svg",
                    alt: "search"
                }), s.a.createElement("input", {
                    type: "text",
                    placeholder: "Search transactions, invoices or help"
                })), s.a.createElement("div", {className: "header__user-block"}, s.a.createElement("div", {className: "header__icons"}, s.a.createElement("img", {
                    src: "../../assets/icons/help.svg",
                    alt: "help"
                }), s.a.createElement("img", {
                    src: "../../assets/icons/bell.svg",
                    alt: "chat"
                }), s.a.createElement("img", {
                    src: "../../assets/icons/bell.svg",
                    alt: "notification"
                })), s.a.createElement("div", {className: "header__user"}, s.a.createElement("span", {className: "header__user-name"}, "John Doe"), s.a.createElement("img", {
                    src: "../../assets/icons/arrow.svg",
                    alt: "down"
                }), s.a.createElement("img", {
                    className: "header__user-avatar",
                    src: "../../assets/icons/avatar.png",
                    alt: "user"
                }))))
            }), X = (n(199), function (e) {
                Object(m.a)(n, e);
                var t = Object(u.a)(n);

                function n() {
                    return Object(d.a)(this, n), t.apply(this, arguments)
                }

                return Object(v.a)(n, [{
                    key: "render", value: function () {
                        var e = this.props.events;
                        return s.a.createElement("div", {className: "app"}, s.a.createElement(H, null), s.a.createElement(R, null), s.a.createElement("div", {className: "app__content"}, s.a.createElement("div", {className: "app__content-block"}, s.a.createElement("span", {className: "app__content-title"}, "Calendar"), s.a.createElement(F, {events: e}))))
                    }
                }]), n
            }(r.Component)), G = Object(i.b)((function (e) {
                return {events: e.events.events}
            }), a)(X);
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        var J = n(85), U = {events: []}, W = Object(o.b)({
            events: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case O:
                        var n = Number(t.payload.time.split(":")[0]), a = Number(t.payload.time.split(":")[1]);
                        return t.payload.start = new Date(new Date(t.payload.start).setHours(n)), t.payload.start = new Date(new Date(t.payload.start).setMinutes(a)), Object(p.a)({}, e, {events: [].concat(Object(J.a)(e.events), [t.payload])});
                    case S:
                        return Object(p.a)({}, e, {events: t.payload});
                    case C:
                        var r = t.payload, s = e.events.find((function (e) {
                            return e.id === r.id
                        }));
                        if (s !== r) {
                            var l = e.events.filter((function (e) {
                                return e.id !== r.id
                            }));
                            return l.push(r), Object(p.a)({}, e, {events: l})
                        }
                        return e;
                    case j:
                        return Object(p.a)({}, e, {
                            events: e.events.filter((function (e) {
                                return e.id !== t.payload
                            }))
                        });
                    default:
                        return e
                }
            }
        }), B = Object(o.c)(W, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        c.a.render(s.a.createElement(i.a, {store: B}, s.a.createElement(G, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
            e.unregister()
        })).catch((function (e) {
            console.error(e.message)
        }))
    }, 86: function (e, t, n) {
        e.exports = n(200)
    }, 94: function (e, t, n) {
    }
}, [[86, 1, 2]]]);
//# sourceMappingURL=main.f28e55b3.chunk.js.map