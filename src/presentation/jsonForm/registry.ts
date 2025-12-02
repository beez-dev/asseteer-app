import { and, optionIs, rankWith, scopeEndsWith, uiTypeIs } from '@jsonforms/core';

//Components
import { Button, FormButton } from '@/src/presentation/components/Button';
import { FormInput, Input } from '@/src/presentation/components/Input';
import { materialRenderers } from '@jsonforms/material-renderers';
import { FormGradientButton, GradientButton } from '@/src/presentation/components/GradientButton';
import { Checkbox, FormCheckbox } from '@/src/presentation/components/Checkbox';
import { Switch, FormSwitch } from '@/src/presentation/components/Switch';
import { FormDropdown, Dropdown } from '@/src/presentation/components/Dropdown';
import { SocialButton, FormSocialButton } from '@/src/presentation/components/SocialButton';
import { PasswordInput, FormPasswordInput } from '@/src/presentation/components/PasswordInput';
import { LinkedText } from '@/src/presentation/components/LinkedText';

const COMPONENT_PRIORITY = 10;

//Layouts
import { FormVerticalLayout } from '@/src/presentation/jsonForm/layouts/FormVerticalLayout';

const FormButtonTester = rankWith(COMPONENT_PRIORITY, scopeEndsWith(Button.displayName!));
const InputTester = rankWith(COMPONENT_PRIORITY + 1, scopeEndsWith(Input.displayName!));
const FormGradientButtonTester = rankWith(
  COMPONENT_PRIORITY + 2,
  scopeEndsWith(GradientButton.displayName!),
);
const FormCheckboxTester = rankWith(COMPONENT_PRIORITY + 3, scopeEndsWith(Checkbox.displayName!));
const FormSwitchTester = rankWith(COMPONENT_PRIORITY + 4, scopeEndsWith(Switch.displayName!));
const FormDropdownTester = rankWith(COMPONENT_PRIORITY + 5, scopeEndsWith(Dropdown.displayName!));
const FormSocialButtonTester = rankWith(
  COMPONENT_PRIORITY + 6,
  scopeEndsWith(SocialButton.displayName!),
);
const FormPasswordInputTester = rankWith(
  COMPONENT_PRIORITY + 7,
  scopeEndsWith(PasswordInput.displayName!),
);
const FormLinkedTextTester = rankWith(
  COMPONENT_PRIORITY + 8,
  scopeEndsWith(LinkedText.displayName!),
);

const FormComponentRenderers = [
  ...materialRenderers,
  { tester: FormButtonTester, renderer: FormButton },
  { tester: InputTester, renderer: FormInput },
  { tester: FormGradientButtonTester, renderer: FormGradientButton },
  { tester: FormGradientButtonTester, renderer: FormGradientButton },
  { tester: FormCheckboxTester, renderer: FormCheckbox },
  { tester: FormSwitchTester, renderer: FormSwitch },
  { tester: FormDropdownTester, renderer: FormDropdown },
  { tester: FormSocialButtonTester, renderer: FormSocialButton },
  { tester: FormPasswordInputTester, renderer: FormPasswordInput },
  // non-control type from components
  { tester: FormLinkedTextTester, renderer: LinkedText }, //
];

// Registrations for custom layouts

export const spacedVerticalLayoutTester = rankWith(
  100,
  and(uiTypeIs('VerticalLayout'), optionIs('gap', 'md')),
);

const FormLayoutRenderers = [
  ...FormComponentRenderers,
  {
    tester: spacedVerticalLayoutTester,
    renderer: FormVerticalLayout,
  },
];

export { FormComponentRenderers, FormLayoutRenderers };
