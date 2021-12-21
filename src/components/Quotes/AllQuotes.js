import QuoteList from "./components/QuoteList";

const DUMMY_NOTES = [
    {
        id: 'q1', author: 'Max', text: 'Learning React is fun'
    },
    {
        id: 'q2', author: 'Seb', text: 'Learning Node is great'
    },    
];

const AllQuotes = () => {
    return(
        <QuoteList quotes={DUMMY_NOTES}/>
    );
};

export default AllQuotes;