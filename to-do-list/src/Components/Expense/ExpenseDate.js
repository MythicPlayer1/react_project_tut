

function ExpenseDate(props) {
    return (
        <div className="date">
            <div>{props.Year}</div>
            <div>{props.Month}</div>
            <div>{props.Day}</div>
        </div>
    );
}

export default ExpenseDate;