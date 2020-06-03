import { RequiredKeys } from 'utility-types';

type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined };

// Expect: "req" | "reqUndef"
type Keys = RequiredKeys<Props>;
