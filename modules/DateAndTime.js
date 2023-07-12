import { DateTime } from './luxon.js';

const dateData = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

export default dateData;