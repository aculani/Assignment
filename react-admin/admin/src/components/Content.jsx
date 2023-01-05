import ContentHeading from "./Content/ContentHeading";
import ContentWrapper from "./Content/ContentWrapper";
import DynamicModal from '../components/utils/DynamicModal';
import ContentTableWrapper from './Content/ContentTableWrappper';
import { useState } from 'react';
import PostCreate from "./Blogs/PostCreate";

export default function Content() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <ContentWrapper>
                <DynamicModal show={show} handleClose={handleClose} title="Create Post" content={<PostCreate />} />
                <ContentHeading title="Blog Post" handleShow={handleShow} />
                <ContentTableWrapper>
                    <thead>
                        <tr>
                            <th width="1">#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th width="1">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>How to become peaceful</td>
                            <td>...</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <button className='btn btn-outline-primary me-2'>Edit</button>
                                <button className='btn btn-outline-danger'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </ContentTableWrapper>
            </ContentWrapper>

        </>
    );
}