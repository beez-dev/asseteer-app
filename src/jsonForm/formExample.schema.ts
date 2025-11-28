import { Button } from '@/src/components/Button';
import { Input } from '@/src/components/Input';
import { GradientButton } from '@/src/components/GradientButton';

export const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      description: 'Please enter your name',
    },
  },
};

export const uiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'HorizontalLayout',

      elements: [
        { type: 'Control', label: 'Primary button', scope: `#/properties/${Button.displayName!}` },
        {
          type: 'Control',
          label: 'Input text',
          options: { placeholder: 'Please input your text' },
          scope: `#/properties/${Input.displayName}`,
        },
        {
          type: 'VerticalLayout',
          elements: [
            {
              type: 'Control',
              label: 'Secondary Button',
              scope: `#/properties/${Button.displayName!}`,
            },
            {
              type: 'Control',
              label: 'Ternary Button',
              scope: `#/properties/${Button.displayName!}`,
            },
          ],
        },
        {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              label: 'Gradient Button',
              scope: `#/properties/${GradientButton.displayName!}`,
            },
          ],
        },
      ],
    },
  ],
};
