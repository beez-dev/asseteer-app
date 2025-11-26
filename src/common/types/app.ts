import { INPUT_STATES } from '@/src/constants/app';

export type INPUT_STATES = (typeof INPUT_STATES)[keyof typeof INPUT_STATES];
