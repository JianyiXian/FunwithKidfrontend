import MyEventItem from "./MyEventItem";


const MyEvents = props => {
    const deleteHandler = e => {
        e.preventDefault();

    }

    return (
        <>
            <MyEventItem onClickDelete={deleteHandler} />
            <MyEventItem /></>);
}

export default MyEvents;