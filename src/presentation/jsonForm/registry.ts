import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { Button, FormButton } from '@/src/presentation/components/Button';
import { FormInput, Input } from '@/src/presentation/components/Input';
import { materialRenderers } from '@jsonforms/material-renderers';
import { FormGradientButton, GradientButton } from '@/src/presentation/components/GradientButton';
import { Checkbox, FormCheckbox } from '@/src/presentation/components/Checkbox';

const PRIORITY = 10;

const FormButtonTester = rankWith(PRIORITY, scopeEndsWith(Button.displayName!));
const InputTester = rankWith(PRIORITY + 1, scopeEndsWith(Input.displayName!));
const FormGradientButtonTester = rankWith(PRIORITY + 2, scopeEndsWith(GradientButton.displayName!));
const FormCheckboxTester = rankWith(PRIORITY + 3, scopeEndsWith(Checkbox.displayName!));

const Renderers = [
  ...materialRenderers,
  { tester: FormButtonTester, renderer: FormButton },
  { tester: InputTester, renderer: FormInput },
  { tester: FormGradientButtonTester, renderer: FormGradientButton },
  { tester: FormGradientButtonTester, renderer: FormGradientButton },
  { tester: FormCheckboxTester, renderer: FormCheckbox },
];

export default Renderers;
