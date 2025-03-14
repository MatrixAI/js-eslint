declare const _default: {
    rules: {
        'no-aliased-imports': {
            meta: {
                type: string;
                fixable: string;
                hasSuggestions: boolean;
                schema: {
                    type: string;
                    properties: {
                        aliases: {
                            type: string;
                            items: {
                                type: string;
                                properties: {
                                    prefix: {
                                        type: string;
                                    };
                                    target: {
                                        type: string;
                                    };
                                };
                                required: string[];
                            };
                            default: {
                                prefix: string;
                                target: string;
                            }[];
                        };
                        includeFolders: {
                            type: string;
                            items: {
                                type: string;
                            };
                            default: string[];
                        };
                        autoFix: {
                            type: string;
                        };
                    };
                    additionalProperties: boolean;
                }[];
                messages: {
                    noAlias: string;
                    noAliasNoAutofix: string;
                };
            };
            defaultOptions: {
                aliases: {
                    prefix: string;
                    target: string;
                }[];
                includeFolders: string[];
                autoFix: boolean;
            }[];
            create(context: any): {
                importDeclaration(node: any): void;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map