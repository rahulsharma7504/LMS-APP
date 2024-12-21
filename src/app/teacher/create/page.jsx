'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-hot-toast';

const CourseCreatePage = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api/course', { title });
      toast.success('Course created successfully!');
      router.push(`/teacher/course/${res.data.id}`);
    } catch (error) {
      toast.error('Failed to create course');
    }
  };

  return (
    <Container className="my-5 p-4 bg-light rounded shadow">
      <h1 className="mb-4 text-center">Create a New Course</h1>
      <Form>
        <Form.Group className="mb-3" controlId="courseTitle">
          <Form.Label className="h5">Course Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Advanced Web Development"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3"
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button
            variant="secondary"
            className="px-4 py-2"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="px-4 py-2"
            onClick={handleSubmit}
            disabled={!title.length}
          >
            Continue
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default CourseCreatePage;
