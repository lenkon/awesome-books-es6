import { DateTime } from "./luxon.js";

const showDate = () => {  
  document.getElementById('date-time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  setInterval(showDate, 5000);
}

export default showDate;