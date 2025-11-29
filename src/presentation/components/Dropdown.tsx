import * as React from 'react';

import styles from './Dropdown.module.scss';
import { ControlProps } from '@jsonforms/core';
import { Label } from './Label';
import { Error } from './Error';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  isError?: boolean;
  errorMsg?: string;
  label?: string;
  id?: string;
  required?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  disabled?: boolean;
  className?: string;
}

export const Dropdown = React.forwardRef<HTMLButtonElement, DropdownProps>(
  (
    {
      className,
      errorMsg,
      isError,
      label,
      id,
      required,
      options,
      value,
      onValueChange,
      placeholder = 'Select an option...',
      searchPlaceholder = 'Search...',
      emptyText = 'No option found',
      disabled = false,
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="flex flex-col">
        {label && (
          <Label htmlFor={id} className={'mb-2 font-bold'}>
            <>{label}</>
            {required && <>*</>}
          </Label>
        )}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              variant="outline"
              role="combobox"
              aria-expanded={open}
              disabled={disabled}
              className={cn('w-full justify-between', styles.dropdown, className)}
            >
              {value ? options.find((option) => option.value === value)?.label : placeholder}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0 border-none outline-transparent">
            <Command className={styles.popover}>
              <CommandInput placeholder={searchPlaceholder} className="text-white" />
              <CommandList className="border-none">
                <CommandEmpty className="border-none p-4 text-white">{emptyText}</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={(currentValue) => {
                        onValueChange?.(currentValue === value ? '' : currentValue);
                        setOpen(false);
                      }}
                      className={styles.popoverItem}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === option.value ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {isError && <Error message={errorMsg} />}
      </div>
    );
  },
);

Dropdown.displayName = 'Dropdown';

const Renderer = (props: ControlProps) => {
  const {
    visible,
    data,
    handleChange,
    path,
    uischema: { label, options },
    id,
    errors,
  } = props;

  if (!visible) return null;

  const dropdownOptions: DropdownOption[] = options?.dropdownOptions || [];
  const dropdownId = `${id}-dropdown`;

  return (
    <Dropdown
      id={dropdownId}
      value={data || ''}
      onValueChange={(value) => handleChange(path, value)}
      options={dropdownOptions}
      errorMsg={errors}
      label={label as string}
      required={options?.required}
      placeholder={options?.placeholder}
      searchPlaceholder={options?.searchPlaceholder}
      emptyText={options?.emptyText}
      disabled={options?.disabled}
    />
  );
};

export const FormDropdown = withJsonFormsControlProps(Renderer);
