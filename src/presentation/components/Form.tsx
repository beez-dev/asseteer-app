import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialCells } from '@jsonforms/material-renderers';
import { schema, uiSchema } from '@/src/presentation/jsonForm/formExample.schema';
import Renderers from '@/src/presentation/jsonForm/registry';
import { Button } from './Button';

export const FormExample = () => {
  const [data, setData] = useState({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(data, undefined, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-8 border">
        <JsonForms
          schema={schema}
          uischema={uiSchema}
          data={data}
          renderers={Renderers}
          cells={materialCells}
          onChange={({ data }) => setData(data)}
        />
      </div>
      <Button type="submit" className="mt-2">
        Submit
      </Button>
    </form>
  );
};
