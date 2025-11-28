import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { Button, FormButton } from '@/src/components/Button';
import { FormInput, Input } from '@/src/components/Input';
import { materialRenderers } from '@jsonforms/material-renderers';
import { FormGradientButton, GradientButton } from '@/src/components/GradientButton';

const PRIORITY = 10;

const FormButtonTester = rankWith(PRIORITY, scopeEndsWith(Button.displayName!));
const FormGradientButtonTester = rankWith(PRIORITY, scopeEndsWith(GradientButton.displayName!));
const InputTester = rankWith(PRIORITY, scopeEndsWith(Input.displayName!));

const Renderers = [
  ...materialRenderers,
  { tester: FormButtonTester, renderer: FormButton },
  { tester: InputTester, renderer: FormInput },
  { tester: FormGradientButtonTester, renderer: FormGradientButton },
];

export default Renderers;
