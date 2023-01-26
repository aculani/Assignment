import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CategoryCreate({ afterSubmit }) {
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const submit = () => {
    axios.post('http://localhost:8000/categories', { name, description })
      .then((res) => {
        console.log('hello')
        toast.success('amjilttai nemegdlee');
        afterSubmit(res.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error('aldaa garlaa');
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Form.Group className="mb-3" controlId="form.name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name of the category..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
