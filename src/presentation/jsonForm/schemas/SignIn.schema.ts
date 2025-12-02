import { Input } from '@/src/presentation/components/Input';
import { Checkbox } from '@/src/presentation/components/Checkbox';
import { LinkedText } from '@/src/presentation/components/LinkedText';
import { PasswordInput } from '@/src/presentation/components/PasswordInput';

export const schema = {
  type: 'object', // TODO - form schema
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
      type: 'VerticalLayout',
      options: {
        gap: 'md',
      },
      elements: [
        {
          type: 'Control',
          label: 'Email address',
          scope: `#/properties/${Input.displayName!}`,
          options: { placeholder: 'Please enter your email address' },
        },
        {
          type: 'Control',
          label: 'Password',
          options: { placeholder: 'Please input your password' },
          scope: `#/properties/${PasswordInput.displayName!}`,
        },
        {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              label: 'Remember me',
              scope: `#/properties/${Checkbox.displayName!}`,
            },
            {
              type: 'Control',
              label: 'Forgot password',
              scope: `#/properties/${LinkedText.displayName!}`,
            },
          ],
        },
      ],
    },
  ],
};
