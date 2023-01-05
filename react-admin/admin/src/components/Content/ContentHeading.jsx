import { GrAddCircle } from "react-icons/gr";
import Button from 'react-bootstrap/Button';



export default function ContentHeading({ title, handleShow }) {

    return (
        <>
            <div className='d-flex justify-content-between align-tems-center'>
                <div>
                    <h1>
                        {title}
                    </h1>
                </div>
                <div>
                    <Button size="sm" variant="primary" onClick={handleShow}>Create <GrAddCircle /></Button>
                </div>
            </div>
        </>
    );
}

