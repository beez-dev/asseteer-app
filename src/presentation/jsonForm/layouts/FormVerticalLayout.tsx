import React from 'react';
import { JsonFormsDispatch, withJsonFormsLayoutProps } from '@jsonforms/react';
import Stack from '@mui/material/Stack';
import { Layout, LayoutProps, UISchemaElement } from '@jsonforms/core';

const VERTICAL_LAYOUT_GAP = 2;

const VerticalLayout = ({
  visible,
  uischema,
  schema,
  path,
  enabled,
  renderers,
  cells,
  verticalSpacing = VERTICAL_LAYOUT_GAP,
}: LayoutProps & { verticalSpacing: number }) => {
  const { elements = [] } = (uischema ?? {}) as Layout;

  if (!visible || elements.length === 0) {
    return null;
  }

  return (
    <Stack spacing={verticalSpacing}>
      {(elements as UISchemaElement[]).map((child, index) => (
        <JsonFormsDispatch
          key={`${path}-${index}`}
          schema={schema}
          uischema={child}
          path={path}
          enabled={enabled}
          renderers={renderers}
          cells={cells}
        />
      ))}
    </Stack>
  );
};

export const FormVerticalLayout = withJsonFormsLayoutProps(VerticalLayout);
