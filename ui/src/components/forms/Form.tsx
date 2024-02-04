import React, { ReactNode } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

interface FormProps {
  handleSubmit: (values: any) => void; // eslint-disable-line
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ handleSubmit, children }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="w-full" onSubmit={methods.handleSubmit(handleSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
