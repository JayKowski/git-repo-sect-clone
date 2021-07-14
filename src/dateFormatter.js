import differenceInDays from 'date-fns/differenceInDays';
import { format } from 'date-fns'

function dateFormatter(date) {
    const splitDate = date.split('T');
    const splittedDate = splitDate[0].split('-');
    const diffDays = differenceInDays(new Date(), new Date(splittedDate[0], splittedDate[1], splittedDate[2]))

    return  format(new Date(splittedDate[0], splittedDate[1], splittedDate[2]), 'PP');
}


export default dateFormatter;