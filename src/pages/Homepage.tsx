import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteStudent } from '../redux/studentSlice';
import Table from '../components/Table/Table';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
  const students = useSelector((state: RootState) => state.students.students);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      dispatch(deleteStudent(id));
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Manage Students</h1>
      <button className="btn btn-primary mb-3" onClick={() => navigate('/add')}>
        Add Student
      </button>
      <Table
        students={students}
        onUpdate={(id) => navigate(`/update/${id}`)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Homepage;