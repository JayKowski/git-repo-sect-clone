import differenceInDays from 'date-fns/differenceInDays';
import { format } from 'date-fns'

function dateFormatter(date) {
    const splitDate = date.split('T');
    const splittedDate = splitDate[0].split('-');
    console.log(splitDate[0]);
    const diffDays = differenceInDays(new Date(), new Date(splittedDate[0], splittedDate[1], splittedDate[2]))
    console.log(format(new Date(splittedDate[0], splittedDate[1], splittedDate[2]), 'PP'));

    return  format(new Date(splittedDate[0], splittedDate[1], splittedDate[2]), 'PP');
}


export default dateFormatter;