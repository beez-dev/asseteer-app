import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { Button, FormButton } from '@/src/components/Button';
import { FormInput, Input } from '@/src/components/Input';
import { materialRenderers } from '@jsonforms/material-renderers';

const PRIORITY = 10;

const FormButtonTester = rankWith(PRIORITY, scopeEndsWith(Button.displayName!));
const InputTester = rankWith(PRIORITY, scopeEndsWith(Input.displayName!));

const Renderers = [
  ...materialRenderers,
  { tester: FormButtonTester, renderer: FormButton },
  { tester: InputTester, renderer: FormInput },
];

export default Renderers;
