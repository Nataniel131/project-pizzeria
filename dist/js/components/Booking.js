import { select, templates } from '../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking {
  constructor (element) {
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();
  }

  render (element) {
    const thisBooking = this;

    const bookingTemplates = templates.bookingWidget();

    thisBooking.dom = {};

    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = bookingTemplates;

    thisBooking.dom.peopleAmount = document.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = document.querySelector(select.booking.hoursAmount);
    thisBooking.dom.datePicker = document.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPicker = document.querySelector(select.widgets.hourPicker.wrapper);
  }

  initWidgets () {
    const thisBooking = this;

    thisBooking.dom.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.dom.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.dom.datePickerWidget = new DatePicker(thisBooking.dom.datePicker);
    thisBooking.dom.hourPickerWidget = new HourPicker(thisBooking.dom.hourPicker);
    /*thisBooking.dom.peopleAmountWidget.addEventListener('updated', function () {

    })

    thisBooking.dom.hoursAmountWidget.addEventListener('updated', function () {

    })*/
  }
}

export default Booking;