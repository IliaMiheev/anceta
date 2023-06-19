function List(e) {
    return (
        <ol>
            <li>firstName1 = {e.firstName1}</li>
            <li>lastName1 = {e.lastName1}</li>
            <li>age = {e.age}</li>
            <p></p>
        </ol>
    );
}
function zadanie() {
    const object = [
        {
            firstName1: 'Vika',
            lastName1: 'Miheev',
            age1: 16
        },
        {
            firstName1: 'Polina',
            lastName1: 'Provornicova',
            age1: 16
        }
    ]
    return (
        <>
            <List firstName1={object[0].firstName1} lastName1={object[0].lastName1} age={object[0].age1} />
            <List firstName1={object[1].firstName1} lastName1={object[1].lastName1} age={object[1].age1} />
        </>
    );
}
export default zadanie;
