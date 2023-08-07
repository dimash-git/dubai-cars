import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import $ from "jquery";
import Lightpick from "lightpick";
import "lightpick/css/lightpick.css";
import * as ionRangeSlider from "ion-rangeslider";
import "ion-rangeslider/css/ion.rangeSlider.min.css";
import IMask from "imask";

const phoneInit = () => {
  const inputPhone = document.querySelector("#phone");
  if (inputPhone) {
    intlTelInput(inputPhone, {
      initialCountry: "auto",
      geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            callback(data.country_code);
          })
          .catch(function () {
            callback("us");
          });
      },
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    });
  }

  const mask = IMask(inputPhone, {
    mask: "+{7}(000)000-00-00",
  });
};

const datesRangeInit = () => {
  const priceEl = document.querySelector(".price #number");
  if (priceEl) {
    console.log(priceEl);
    const picker = new Lightpick({
      field: document.getElementById("dates"),
      singleDate: false,
      onSelect: function (start, end) {
        let str = "";
        str += start ? start.format("Do MMMM YYYY") + " to " : "";
        str += end ? end.format("Do MMMM YYYY") : "...";
        document.getElementById("dates").innerHTML = str;

        if (start && end) {
          // console.log(
          //   typeof start["_i"] == "number",
          //   typeof end["_i"] == "number"
          // );
          if (typeof start["_i"] == "number" && typeof end["_i"] == "number") {
            let endDate = new Date(end["_i"]);
            let startDate = new Date(start["_i"]);
            let dayDiff = endDate - startDate;
            dayDiff = dayDiff / (1000 * 60 * 60 * 24);
            dayDiff = Math.floor(dayDiff) + 1;
            // console.log(endDate, startDate);
            // console.log(dayDiff);
            priceEl.innerHTML = dayDiff * parseInt(priceEl.dataset.price);
          } else {
            priceEl.innerHTML = priceEl.dataset.price;
          }
        }
      },
    });
  }

  if ($(".range").length) {
    console.log("range indeed");
    $(".range").ionRangeSlider({
      skin: "round",
    });
  }
};

export { phoneInit, datesRangeInit };
