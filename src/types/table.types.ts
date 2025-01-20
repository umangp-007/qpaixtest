import { Student } from "../redux/studentSlice";

export interface TableProps {
  students: Student[];
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}