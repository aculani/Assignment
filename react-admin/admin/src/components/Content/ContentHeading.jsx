import { GrAddCircle } from "react-icons/gr";
export default function ContentHeading({ title }) {
    return (
        <div className='d-flex justify-content-between align-tems-center'>
            <div>
                <h1>
                    {title}
                </h1>
            </div>
            <div>
                <button className='btn btn-sm btn-primary mt-2'>Create <GrAddCircle /></button>
            </div>
        </div>
    );
}