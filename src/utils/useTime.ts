import { format } from 'date-fns';
import { ref } from 'vue';

const DateFormats = {
  'HH:mm:ss': 1000,
  'hh:mm:ss a': 1000,
  'hh:mm a': 10000
}
export type DateFormat = keyof typeof DateFormats;

export default function useTime(dateStringFormat: DateFormat) {
  const time = ref(format(new Date(), dateStringFormat));
  setInterval(() => {
    time.value = format(new Date(), dateStringFormat);
  }, DateFormats[dateStringFormat])

  return time;
}