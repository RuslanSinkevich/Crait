// Слайдер
var swiper = new Swiper(".HeaderSlide", {
  slidesPerView: 1,
  loop: true,
  speed: 1500,
  navigation: {
    nextEl: ".swiper-button-next-n",
    prevEl: ".swiper-button-prev-n",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletActiveClass: "slider-active-class",
    bulletClass: " slider-inactive-class ",
  },
});

var prodOfDay = new Swiper(".prodOfDay", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".prodOfDay-button-next",
    prevEl: ".prodOfDay-button-prev",
  },
});

// Таймер обратный отсчёт
function timer(expiry) {
  return {
    expiry: expiry,
    remaining:null,
    init() {
      this.setRemaining()
      let timInter = setInterval(() => {
        this.setRemaining();
        this.stopTimer(timInter)
      }, 1000);
    },
    setRemaining() {
      const diff = this.expiry - new Date().getTime();
      this.remaining =  parseInt(diff / 1000);
    },
    stopTimer(timInter){
      if(this.remaining <= 0 )
      {
        clearInterval(timInter)
      }
    },
    days() {
      return {
      	value:this.remaining / 86400,
        remaining:this.remaining % 86400
      };
    },
    hours() {
      return {
      	value:this.days().remaining / 3600,
        remaining:this.days().remaining % 3600
      };
    },
    minutes() {
    	return {
      	value:this.hours().remaining / 60,
        remaining:this.hours().remaining % 60
      };
    },
    seconds() {
    	return {
      	value:this.minutes().remaining,
      };
    },
    format(value) {
      return ("0" + parseInt(value)).slice(-2)
    },
    time(){
    	return {
      	days:this.format(this.days().value),
        hours:this.format(this.hours().value),
        minutes:this.format(this.minutes().value),
        seconds:this.format(this.seconds().value),
      }
    },
  }
}

// Склонение даты
function decleOfData(num, type) {
  
  function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }
  if (type === 'hours') {
    return declOfNum(num, ["час", "часа", "часов"]);
  } else if (type === 'minutes') {
    return declOfNum(num, ["минута", "минуты", "минут"]);
  } else if (type === 'seconds') {
    return declOfNum(num, ["секунда", "секунды", "секунд"]);
  } else {
    return "error type!";
  }
}




