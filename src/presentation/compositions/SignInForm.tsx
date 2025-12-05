import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialCells } from '@jsonforms/material-renderers';
import { schema, uiSchema } from '@/src/presentation/jsonForm/schemas/SignIn.schema';
import { FormLayoutRenderers } from '@/src/presentation/jsonForm/registry';

import { GradientButton } from '@/src/presentation/components/GradientButton';
import { DialogTitle } from '@/src/presentation/components/DialogueTitle';
import { Separator } from '@/src/presentation/components/Separator';
import { SocialButton } from '@/src/presentation/components/SocialButton';
import { DialogueContainer } from '@/src/presentation/containers/Dialogue';

export const SignInForm = () => {
  const [data, setData] = useState({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(data, undefined, 2)); // TODO
  };

  return (
    <DialogueContainer>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <DialogTitle title="Welcome Back" subTitle="Sign in to your artist hub" className="mb-8" />
        <JsonForms
          schema={schema}
          uischema={uiSchema}
          data={data}
          renderers={FormLayoutRenderers}
          cells={materialCells}
          onChange={({ data }) => setData(data)}
        />
        <div className="flex flex-col gap-y-6">
          <GradientButton type="submit" className="mt-2">
            Submit
          </GradientButton>
          <Separator text="Or continue with google" />
          <SocialButton>Sign in with Google</SocialButton>
        </div>
      </form>
    </DialogueContainer>
  );
};
