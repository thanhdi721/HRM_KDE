import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd'

dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};


const SetTime = () => {

  const minuteOptions = [];
  for (let i = 5; i <= 60; i += 5) {
    minuteOptions.push(i);
  }

  return (
    <TimePicker onChange={onChange}/>
  );
};

export default SetTime;
