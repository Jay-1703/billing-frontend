import { useState } from 'react';

export const useFormData = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  return {
    formData,
    handleChange,
  };
};
