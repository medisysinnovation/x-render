import React from 'react';
import FormRender from '@medisys/form-render';
import './index.less';

interface FormProps {
  value: any;
  onChange: (value) => void;
}

const Form: React.FC<FormProps> = ({ value, onChange = () => {} }) => {
  const formSchema = {
    type: 'object',
    properties: {
      tag: {
        title: 'Tag',
        type: 'string',
        'ui:options': {
          placeholder: 'Please Enter',
        },
      },
      phone: {
        title: 'Phone No',
        type: 'string',
        'ui:options': {
          placeholder: 'Please Enter',
        },
      },
      address: {
        title: 'Address',
        type: 'string',
      },
    },
    required: ['tag'],
  };

  return (
    <FormRender
      displayType="col"
      schema={formSchema}
      formData={value}
      showValidate={false}
      onChange={onChange}
    />
  );
};

export default Form;
