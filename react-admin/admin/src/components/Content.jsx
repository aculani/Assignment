import ContentHeading from "./Content/ContentHeading";
import ContentTableWrapper from "./Content/ContentTableWrappper";
import ContentWrapper from "./Content/ContentWrapper";

export default function Content() {
    return (
        <>
            <ContentWrapper>
                <ContentHeading title="Blog Post" />
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