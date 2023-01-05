import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import MyComponent from './PostContent';

export default function PostCreate() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="form.name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name of the article..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}>
                    <MyComponent value="Setgegdel bichne uu" />
                </Form.Control>
            </Form.Group>

            <Button variant="secondary">
                Close
            </Button>
            <Button variant="primary">Save</Button>

        </Form>
    );
}
