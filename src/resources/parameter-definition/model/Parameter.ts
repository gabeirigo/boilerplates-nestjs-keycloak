class Parameter {
    constructor(
        public name: string,
        public label: string,
        public description: string,
        public category: string,
        public category_name: string,
        public field_type: 'TEXT' | 'NUMBER' | 'CHECK' | 'SELECT',
        public options: {},
    ) {}
}

export default Parameter;
