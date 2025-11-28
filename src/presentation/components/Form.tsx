import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialCells } from '@jsonforms/material-renderers';
import { schema, uiSchema } from '@/src/presentation/jsonForm/formExample.schema';
import Renderers from '@/src/presentation/jsonForm/registry';

export const FormExample = () => {
  const [data, setData] = useState({});
  return (
    <JsonForms
      schema={schema}
      uischema={uiSchema}
      data={data}
      renderers={Renderers}
      cells={materialCells}
      onChange={({ data }) => setData(data)}
    />
  );
};
