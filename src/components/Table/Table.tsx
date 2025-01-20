import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Student } from '../../redux/studentSlice';
import './Table.scss';
import { TableProps } from '../../types/table.types';



const Table: React.FC<TableProps> = ({ students, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.includes(search) ||
      student.age.toString().includes(search)
  );

  const columns = [
    { name: 'ID', selector: (row: Student) => row.id, sortable: true },
    { name: 'Name', selector: (row: Student) => row.name, sortable: true },
    { name: 'Age', selector: (row: Student) => row.age, sortable: true },
    { name: 'Email', selector: (row: Student) => row.email, sortable: true },
    {
      name: 'Actions',
      cell: (row: Student) => (
        <>
          <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => onUpdate(row.id)}
          >
            Update
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(row.id)}
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="table-wrapper">
      <div className="search-bar mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Name, Age, or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredStudents}
        pagination
        responsive
        highlightOnHover
        customStyles={{
          rows: { style: { minHeight: '60px' } },
          headCells: { style: { backgroundColor: '#007bff', color: 'white' } },
        }}
      />
    </div>
  );
};

export default Table;