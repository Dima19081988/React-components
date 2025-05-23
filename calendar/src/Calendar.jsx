import React from "react";
import "./calendar.css";
import moment from "moment";
import "moment/locale/ru";

moment.locale('ru');

const MONTHS_GEN = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

const MONTHS_NOM = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

const WEEKDAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const WEEKDAYS_FULL = [
    "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
];

function getMonthMatrix(date) {
    const mDate = moment(date);
    const year = mDate.year();
    const month = mDate.month();

    const firstDay = moment([year, month]).startOf('month');
    const firstWeekDay = (firstDay.day() + 6) % 7;

    const lastDay = moment([year, month]).endOf('month');
    const daysInMonth = lastDay.date();

    const prevMonthLastDay = moment(firstDay).subtract(1, 'day');
    const daysInPrevMonth = prevMonthLastDay.date();

    const matrix = [];
    let day = firstWeekDay - 1;

    for (let week = 0; week < 6; week++) {
        const weekArr = [];
        for (let weekday = 0; weekday < 7; weekday++) {
            let cellDate;
            let isOtherMonth = false;
//для дней предыдущего и следующего месяца
            if (day < 1) {
                cellDate = moment([year, month - 1]).date(daysInPrevMonth + day);
                isOtherMonth = true;
            } else if (day > daysInMonth) {
                cellDate = moment([year, month + 1]).date(day - daysInMonth);
            } else {
//текущий месяц
                cellDate = moment([year, month]).date(day)              
            }
            weekArr.push({ date: cellDate, isOtherMonth })
        }
        matrix.push(weekArr);
        if (day > daysInMonth) break
    }

    return matrix;
}

function Calendar ({ date }) {
    const mDate = moment(date);
    const year = mDate.year();
    const month = mDate.month();
    const weekDay = mDate.day();
    const dayNum = mDate.date();

    const materialDay = WEEKDAYS_FULL[weekDay];

    const materialMonth = MONTHS_GEN[month];

    const headerMonth = MONTHS_NOM[month];

    const matrix = getMonthMatrix(date);

    return (
        
    )

}