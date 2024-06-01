import type { FieldTypeParameter } from '@prisma/client';
import type { JsonValue } from '@prisma/client/runtime/library';

export class ParameterDefinition {
    constructor(
        public name: string,
        public label: string,
        public description: string,
        public field_type: FieldTypeParameter,
        public parameter_category_id: string,
        public options?: JsonValue[],
    ) {}
}
