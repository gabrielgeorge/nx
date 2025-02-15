export interface Schema {
  name: string;
  skipTests?: boolean;
  directory?: string;
  export?: boolean;
  routing?: boolean;
  js?: boolean;
  fileName?: string;
  inSourceTests?: boolean;
  skipFormat?: boolean;
  nameAndDirectoryFormat?: 'as-provided' | 'derived';

  /**
   * @deprecated Provide the `directory` option instead and use the `as-provided` format. It will be removed in Nx v18.
   */
  flat?: boolean;
  /**
   * @deprecated Provide the desired `directory` option instead and use the `as-provided` format. It will be removed in Nx v18.
   */
  pascalCaseDirectory?: boolean;
  /**
   * @deprecated Provide the desired `name` option instead and use the `as-provided` format. It will be removed in Nx v18.
   */
  pascalCaseFiles?: boolean;
  /**
   * @deprecated Provide the `directory` option instead. The project will be determined from the directory provided. It will be removed in Nx v18.
   */
  project?: string;
}

export interface NormalizedSchema extends Schema {
  projectName: string;
  projectSourceRoot: string;
  fileName: string;
  className: string;
  filePath: string;
}
