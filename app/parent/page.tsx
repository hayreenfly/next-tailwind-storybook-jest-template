'use client';
import { useState } from 'react';
import Form from '@/components/Form';

// Define the interface for the form data
export interface FormData {
  name: string;
  email: string;
  date: string;
}

// Initial form data
const initialFormData: FormData = {
  name: '',
  email: '',
  date: '',
};

export default function ParentPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // Handle input change
  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the field in state
    }));
  };

  // Reset the form
  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    resetForm(); // Optionally reset after submission
  };

  return (
    <div className="mx-auto max-w-md flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Controlled Form Example</h1>
      <Form
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={resetForm}
      />

      <div className="w-full mt-8">
        <pre className="p-4 bg-gray-100 rounded-md overflow-auto text-sm">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
