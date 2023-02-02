import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate.js'
import Cards from '../UI/Cards';

function ExpenseItem(props) {


    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
   

    // const [title, newtitle] = useState(props.title);

    // const clickhandler = () => {
    //     newtitle(inputtitle);
    // }

    // const [inputtitle, newinputtitle] = useState();
    // const inputhandler = (event) => {
    //     newinputtitle(event.target.value);
    // }

    console.log(props);

    //const Date=props.date.toString();
    return (
        <Cards className='mainContainer'>
            <div>
                <ExpenseDate
                    Month={month}
                    Year={year}
                    Day={day}
                ></ExpenseDate>
            </div>
            <div className='container'>{props.title}
                <div className='pricebtn'>{props.amount }</div>
                
            </div>
           
        </Cards>
    );
}

export default ExpenseItem;