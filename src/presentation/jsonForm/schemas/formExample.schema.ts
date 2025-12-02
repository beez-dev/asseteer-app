import { Button } from '@/src/presentation/components/Button';
import { Input } from '@/src/presentation/components/Input';
import { GradientButton } from '@/src/presentation/components/GradientButton';
import { Checkbox } from '@/src/presentation/components/Checkbox';
import { Switch } from '@/src/presentation/components/Switch';
import { Dropdown } from '@/src/presentation/components/Dropdown';
import { SocialButton } from '@/src/presentation/components/SocialButton';
import { PasswordInput } from '@/src/presentation/components/PasswordInput';

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
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          label: 'Primary button',
          options: { id: 'form-checkbox' }, // without Id, checkbox doesn't render in forms
          scope: `#/properties/${Checkbox.displayName!}`,
        },
        {
          type: 'Control',
          label: 'Primary switch',
          options: {
            id: 'form-switch',
            enabledLabel: 'Enabled',
            disabledLabel: 'Disabled',
          },
          scope: `#/properties/${Switch.displayName!}`,
        },
        {
          type: 'Control',
          label: 'Dropdown menu',
          options: {
            id: 'dropdown',
            dropdownOptions: [
              {
                label: 'option A',
                value: 'option A value',
              },
              {
                label: 'option B',
                value: 'option B value',
              },
              {
                label: 'option C',
                value: 'option C value',
              },
            ],
          },
          scope: `#/properties/${Dropdown.displayName!}`,
        },
        {
          type: 'Control',
          label: 'Social Button',
          scope: `#/properties/${SocialButton.displayName!}`,
        },
        {
          type: 'Control',
          label: 'Password Input',
          scope: `#/properties/${PasswordInput.displayName!}`,
        },
      ],
    },
  ],
};
