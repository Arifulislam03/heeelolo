 let v = [];
 let r = [];
 let current_rooms = 1;
 let current_km = 10;
 let last_km = 10;
 let cleaning_rooms = 1;
 // document.getElementById("myCheck").checked = true;
 jQuery(document).ready(function() {
  jQuery(".styled_form").css("display", "none");
  jQuery('*[data-field-id="field74"]').prop('checked', true)
  jQuery('*[data-field-id="field83"]:first').prop('checked', true)
  jQuery('*[data-field-id="field131"]:first').prop('checked', true)
  jQuery('*[data-field-id="field147"]:first').prop('checked', true)
  jQuery('*[data-field-id="field134"]').attr("placeholder", "Haben Sie noch weitere relevante Informationen zum Umzug?")
  jQuery('*[data-field-id="field122"]').attr("placeholder", "Gibt es noh etwas, was wir wissen können?")
 });
 jQuery('.sumbit1').click(function() {
  jQuery(".styled_form").css("display", "block")
  jQuery(".calc_form").css("display", "none")
  let send_to_fom = {
    rooms: current_rooms,
    km: current_km
  }
  jQuery('*[data-field-id="field145"]').val(JSON.stringify(send_to_fom));
 });
 jQuery('.sumbit2').click(function() {
  jQuery(".styled_form").css("display", "block")
  jQuery(".calc_form").css("display", "none")
  jQuery('*[data-field-id="field145"]').val(JSON.stringify(cleaning_rooms));
 });
 var makeCounter = function() {
  var currentCount = 1;

  function increment() {
    currentCount += 1;
    return currentCount;
  }

  function decrement() {
    currentCount -= 1;
    return currentCount;
  }
  return {
    increment,
    decrement
  }
 };
 let step = makeCounter(); // (*)
 jQuery('.steps_4 .page-next').on("click", function() {
  jQuery.ajax().then(function(result) {
    let errors = jQuery(".error-field").length;
    return errors
  }).then(function(errors) {
    console.log("errors", errors)
    if (errors == 0) {
      let current_step = step.increment()
      console.log("currrent_step", current_step)
      if (current_step > 3) {
        jQuery(".page-next").css("display", "none")
      } else {
        jQuery(".page-next").css("display", "block")
      }
      // if (current_step > 4) {
      //   console.log("delete zuruck")
      //   jQuery(".prev-next-4").css("display", "none")
      // }
    }
  })
 })
 jQuery('.submit-button').on("click", function() {
  console.log("delete zuruck")
  jQuery(".prev-next-4").css("display", "none")
  jQuery(".prev-next-3").css("display", "none")
 })
 jQuery('.steps_3 .page-next').on("click", function() {
  jQuery.ajax().then(function(result) {
    let errors = jQuery(".error-field").length;
    return errors
  }).then(function(errors) {
    console.log("errors", errors)
    if (errors == 0) {
      let current_step = step.increment()
      console.log("currrent_step", current_step)
      if (current_step > 2) {
        // console.log("delete now")
        jQuery(".page-next").css("display", "none")
      } else {
        jQuery(".page-next").css("display", "block")
      }
    }
  })
 })
 jQuery('.page-prev').on("click", function() {
  current_step = step.decrement()
  jQuery(".page-next").css("display", "block")
  console.log("currrent_step", current_step)
 })
 v[0] = Number(jQuery(".moving_price_from").text(), 10)
 v[1] = Number(jQuery(".moving_price_to").text(), 10)
 jQuery("#moving_costs_km").ionRangeSlider({
  min: 10,
  max: 100,
  from: 0,
  to: 100,
  step: 10,
  onChange: function(data) {
    km_rooms(data.from_pretty)
  }
 });

 function km_rooms(km) {
  current_km = km
  anzahl_zimmer = km
  v[0] = Number(jQuery(".moving_price_from").text()) //.replace('+', '')
  v[1] = Number(jQuery(".moving_price_to").text())
  last_km = Number(last_km);
  km = Number(km);
  if (last_km > km) {
    console.log("down")
    v[0] = v[0] - 50;
    v[1] = v[1] - 50;
  }
  if (last_km < km) {
    console.log("up")
    v[0] = v[0] + 50;
    v[1] = v[1] + 50;
  }
  last_km = km;
  jQuery(".moving_price_from").text(v[0]);
  jQuery(".moving_price_to").text(v[1]);
 }
 jQuery("#moving_costs_rooms").ionRangeSlider({
  min: 1,
  max: 10,
  from: 0,
  step: 0.5,
  onChange: function(data) {
    count_rooms(data.from_pretty)
  }
 });

 function count_rooms(count_rooms) {
  current_rooms = count_rooms;
  switch (count_rooms) {
    case '1':
    case '1.5':
      v = [650, 800]; // -50
      break;
    case '2':
    case '2.5':
      v = [950, 1100];
      break;
    case '3':
    case '3.5':
      v = [1250, 1400];
      break;
    case '4':
    case '4.5':
      v = [1550, 1700];
      break;
    case '5':
    case '5.5':
      v = [1850, 2000];
      break;
    case '6':
    case '6.5':
      v = [1150, 2300];
      break;
    case '7':
    case '7.5':
      v = [2450, 2600];
      break;
    case '8':
    case '8.5':
      v = [2750, 2900];
      break;
    case '9':
    case '9.5':
      v = [3050, 3200];
      break;
    case '10':
      v = [3350, 0];
      break;
    default:
      v = [650, 800];
      break
  }
  // рернпроаерить
  if (current_km > 10) {
    switch (current_km) {
      case '20':
        add_to_price = 50;
        break;
      case '30':
        add_to_price = 100;
        break;
      case '40':
        add_to_price = 150;
        break;
      case '50':
        add_to_price = 200;
        break;
      case '60':
        add_to_price = 250;
        break;
      case '70':
        add_to_price = 300;
        break;
      case '80':
        add_to_price = 350;
        break;
      case '90':
        add_to_price = 400;
        break;
      case '100':
        add_to_price = 450;
        break;
    }
    v[0] = v[0] + add_to_price;
    v[1] = v[1] + add_to_price;
  }
  // $(".moving_price_from").text(numberWithCommas(v[0]+20));
  // $(".moving_price_to").text(numberWithCommas(v[1]+20));
  jQuery(".moving_price_from").text(v[0] + 50)
  if (current_rooms != 10) {
    jQuery(".moving_price_to").text(v[1] + 50)
  }
  if (count_rooms == 10) {
    jQuery(".moving_price_to").css("display", "none");
    jQuery(".from_to").css("display", "none")
    plus = jQuery(".plus_symbol").html();
    if (plus != "+") {
      jQuery(".plus_symbol").append("+");
    }
  } else {
    jQuery(".moving_price_to").css("display", "block");
    jQuery(".from_to").css("display", "block");
    jQuery(".plus_symbol").empty()
  }
 }
 jQuery(".irs-max").append("+");

 function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
 }
 jQuery("#cleaning_costs_rooms").ionRangeSlider({
  min: 1,
  max: 10,
  from: 0,
  step: 0.5,
  onChange: function(data) {
    count_cleaning(data.from_pretty)
  }
 });

 function count_cleaning(count_rooms) {
  switch (count_rooms) {
    case '1':
    case '1.5':
      r = [540, 723];
      break;
    case '2':
    case '2.5':
      r = [640, 857];
      break;
    case '3':
    case '3.5':
      r = [805, 1015];
      break;
    case '4':
    case '4.5':
      r = [940, 1257];
      break;
    case '5':
    case '5.5':
      r = [1173, 1490];
      break;
    case '6':
    case '6.5':
      r = [1373, 1757];
      break;
    case '7':
    case '7.5':
      r = [1415, 1640];
      break;
    case '8':
    case '8.5':
      r = [1790, 2190];
      break;
    case '9':
    case '9.5':
      r = [2190, 2490];
      break;
    case '10':
      r = [2490, 0];
      break;
    default:
      r = [321, 471];
      break
  }
  cleaning_rooms = count_rooms;
  jQuery(".moving_price_from").text(r[0])
  jQuery(".moving_price_to").text(r[1])
  if (count_rooms == 10) {
    jQuery(".moving_price_to").css("display", "none");
    jQuery(".from_to").css("display", "none")
    plus = jQuery(".plus_symbol").html();
    if (plus != "+") {
      jQuery(".plus_symbol").append("+");
    }
  } else {
    jQuery(".moving_price_to").css("display", "block");
    jQuery(".from_to").css("display", "block");
    jQuery(".plus_symbol").empty()
  }
 }