import React, { useRef, FormEvent } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchMicroDataRequest } from '../../actions/fetchData';

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const value = inputRef.current?.value;

    if (!value) {
      return;
    }

    dispatch(fetchMicroDataRequest(value));
  }

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Country" ref={inputRef} />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Search
