import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addStudent, updateStudent } from '../redux/studentSlice';
import { RootState } from '../redux/store';
import { toast } from 'react-toastify';

const StudentForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector((state: RootState) => state.students.students);

  const student = students.find((s) => s.id === id) || {
    id: '',
    name: '',
    age: '',
    email: '',
  };

  const [formData, setFormData] = useState(student);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.email) {
      toast.error('All fields are required!');
      return;
    }

    if (Number(formData.age) < 0) {
      toast.error('Age cannot be a negative number!');
      return;
    }

    if (id) {
      dispatch(updateStudent(formData));
      toast.success('Student updated successfully!');
    } else {
      dispatch(addStudent({ ...formData, id: Date.now().toString() }));
      toast.success('Student added successfully!');
    }

    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="my-4">{id ? 'Update' : 'Add'} Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="form-control no-scroll"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value.replace(/[^0-9]/g, '') })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
