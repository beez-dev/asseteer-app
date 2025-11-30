import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { Button, FormButton } from '@/src/presentation/components/Button';
import { FormInput, Input } from '@/src/presentation/components/Input';
import { materialRenderers } from '@jsonforms/material-renderers';
import { FormGradientButton, GradientButton } from '@/src/presentation/components/GradientButton';
import { Checkbox, FormCheckbox } from '@/src/presentation/components/Checkbox';
import { Switch, FormSwitch } from '@/src/presentation/components/Switch';
import { FormDropdown, Dropdown } from '@/src/presentation/components/Dropdown';
import { SocialButton, FormSocialButton } from '@/src/presentation/components/SocialButton';

const PRIORITY = 10;

const FormButtonTester = rankWith(PRIORITY, scopeEndsWith(Button.displayName!));
const InputTester = rankWith(PRIORITY + 1, scopeEndsWith(Input.displayName!));
const FormGradientButtonTester = rankWith(PRIORITY + 2, scopeEndsWith(GradientButton.displayName!));
const FormCheckboxTester = rankWith(PRIORITY + 3, scopeEndsWith(Checkbox.displayName!));
const FormSwitchTester = rankWith(PRIORITY + 4, scopeEndsWith(Switch.displayName!));
const FormDropdownTester = rankWith(PRIORITY + 5, scopeEndsWith(Dropdown.displayName!));
const FormSocialButtonTester = rankWith(PRIORITY + 6, scopeEndsWith(SocialButton.displayName!));

const Renderers = [
  ...materialRenderers,
  { tester: FormButtonTester, renderer: FormButton },
  { tester: InputTester, renderer: FormInput },
  { tester: FormGradientButtonTester, renderer: FormGradientButton },
  { tester: FormGradientButtonTester, renderer: FormGradientButton },
  { tester: FormCheckboxTester, renderer: FormCheckbox },
  { tester: FormSwitchTester, renderer: FormSwitch },
  { tester: FormDropdownTester, renderer: FormDropdown },
  { tester: FormSocialButtonTester, renderer: FormSocialButton },
];

export default Renderers;
