
export interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string | number;
  onChange: (value: string) => void;
}