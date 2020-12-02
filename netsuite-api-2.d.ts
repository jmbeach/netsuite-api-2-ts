declare const define: Function;
declare const require: Function;

declare module N {
}

declare module N.config {
  /** @description Method used to load a record.Record object that encapsulates the specified NetSuite configuration page. After the configuration page loads, all preference names and IDs are available to get or set. For more information, see the help topic Preference Names and IDs. You can use the following Record Object Members to get and set preference names and IDs: Record.getField(options) Record.getFields() Record.getText(options) Record.getValue(options) Record.setText(options) Record.setValue(options) */
  export function load(options: LoadOptions): N.record.Record;
  export interface LoadOptions {
    /** @description The NetSuite configuration page you want to access. Use the config.Type enum to set the value. */
    type: string;
    /** @description Determines whether the record is loaded in dynamic mode. If set to true, the record is loaded in dynamic mode. If set to false, the record is loaded in standard mode. For more information, see the help topic SuiteScript 2.0 – Standard and Dynamic Modes. */
    isDynamic?: boolean;
  }

  export const Type: {
    /** @description Set Preferences page (Home > Set Preferences) For more information about the fields on the page, see the help topic User Preferences. */
    USER_PREFERENCES: string;
    /** @description Company Information page (Setup > Company > Company Information). For more information about the fields on the page, see the help topic Company Information. */
    COMPANY_INFORMATION: string;
    /** @description  General Preferences page (Setup > Company > General Preferences) For more information about the fields on the page, see the help topic General Preferences. */
    COMPANY_PREFERENCES: string;
    /** @description  Accounting Preferences page (Setup > Accounting > Accounting Preferences) For more information about the fields on the page, see the help topic Accounting Preferences. */
    ACCOUNTING_PREFERENCES: string;
    /** @description  Accounting Periods page (Setup> Accounting > Manage Accounting Periods) For more information about the fields on the page, see the help topic Accounting Periods. */
    ACCOUNTING_PERIODS: string;
    /** @description  Tax Periods page (Setup > Accounting > Manage Tax Periods) For more information about the fields on the page, see the help topic Tax Periods. */
    TAX_PERIODS: string;
    /** @description Enable Features page (Setup > Company > Enable Features) For more information about feature names and IDs, see the help topic Feature Names and IDs. */
    FEATURES: string;
    /** @description For additional information, see the help topic Posting Time Transactions. */
    TIME_POST: string;
    /** @description For additional information, see the help topic Posting Time Transactions */
    TIME_VOID: string;
  }
}

declare module N.crypto {
  export interface Cipher {
    /** @description Method used to return the cipher data. Sets the output encoding for the crypto.CipherPayload object. */
    final(options: CipherFinalOptions): CipherPayload;
    update(options: CipherUpdateOptions);
  }
  export interface CipherFinalOptions {
    /** @description The output encoding for a crypto.CipherPayload object. The default value is HEX. Use the encode.Encoding enum to set the value */
    outputEncoding?: string;
  }

  export interface CipherPayload {
    /** @description The result of the ciphering process. For example, to take the cipher payload and send it to another system. */
    ciphertext: string;

    /** @description Initialization vector for the cipher payload. You can pass in the iv value to crypto.createDecipher(options) */
    iv: string;
  }

  export interface CipherUpdateOptions {
    /** @description The clear data to be updated */
    input: string;

    /** @description The input encoding. Use the encode.Encoding enum to set the value. The default value is UTF_8. */
    inputEncoding?: string;
  }

  export function createCipher(options: CreateCipherOptions): Cipher;
  export interface CreateCipherOptions {
    /** @description The hash algorithm. Set the value using the crypto.EncryptionAlg enum. */
    algorithm: string;
    /** @description The crypto.SecretKey object. Note: When using the crypto.SecretKey object for an AES algorithm, the length of the text (secret key) that is used to generate the GUID must be 16, 24, or 32 characters. */
    key: SecretKey;
    /** The padding for the cipher text. Set the value using the crypto.Padding enum. By default, the value is set to PKCS5Padding. */
    padding?: string;
  }

  /** @description Method used to create a crypto.Decipher object */
  export function createDecipher(options: CreateDecipherOptions): Decipher;
  export interface CreateDecipherOptions {
    /** @description The hash algorithm. Set by the crypto.EncryptionAlg enum */
    algorithm: string;

    /** @description The crypto.SecretKey object used for encryption. Note: When using the crypto.SecretKey object for an AES algorithm, the length of the text (secret key) that is used to generate the GUID must be 16, 24, or 32 characters */
    key: SecretKey;

    /** @description The padding for the cipher. Set the value using the crypto.Padding enum */
    padding?: any;

    /** @description The initialization vector that was used for encryption */
    iv: string;
  }
  /** @description Method used to create a crypto.Hmac object. */
  export function createHmac(options: CreateHmacOptions): Hmac;

  export interface CreateHmacOptions {
    /** @description The hash algorithm. Use the crypto.HashAlg enum to set this value. */
    algorithm: string;
    /** @description The crypto.SecretKey object. */
    key: string;
  }

  /** @description Method used to create a new crypto.SecretKey object. This method can take a GUID. Use Form.addCredentialField(options) to generate a value */
  export function createSecretKey(options: CreateSecretKeyOptions): SecretKey;

  export interface CreateSecretKeyOptions {
    /** @description A GUID used to generate a secret key. The GUID can resolve to either data or metadata. */
    guid: string;

    /** @description Specifies the encoding for the SecureKey. Set this value using the encode.Encoding enum. The default value is HEX. */
    encoding?: string;
  }

  /** @description Encapsulates a decipher. This object has methods that decrypt. */
  export interface Decipher {
    /** @description Method used to return the clear data. */
    final(options?: DecipherFinalOptions): string;
    /** @description Method used to update cipher data with the specified encoding */
    update(options?: DecipherUpdateOptions);
  }

  export interface DecipherUpdateOptions {
    /** @description The data to update */
    input: string;

    /** @description Specifies the encoding of the input data. Set the value using the encode.Encoding enum. The default value is HEX */
    inputEncoding?: string;
  }

  export interface DecipherFinalOptions {
    /** @description Specifies the encoding for the output. Set the value using the encode.Encoding enum. The default value is UTF_8. */
    outputEncoding?: string;
  }

  export interface DigestOptions {
    /** Specifies the encoding of the output string. Set using the encode.Encoding enum. The default value is HEX */
    outputEncoding?: string;
  }

  export const EncryptionAlg: {
    AES: string;
  }

  export const HashAlg: {
    SHA1,
    SHA256,
    SHA512,
    MD5
  }

  export interface Hmac {
    digest(options: DigestOptions);
  }

  /** @description Encapsulates the handle to the key. The handler does not store the key value. It points to the key stored within the NetSuite system. The GUID is also required to find the key. */
  export interface SecretKey {
    /** @description The encoding used for the clear text value of the secret key. */
    encoding: string;
    /** @description The GUID associated with the secret key */
    guid: string;
  }
}

declare module N.currentRecord {
  export interface FindSublistLineWithValueOptions {
    /** @description The internal ID of the sublist. This value is displayed in the Records Browser. For more information, see the help topic Working with the SuiteScript Records Browser. */
    sublistId: string;
    /** @description The internal ID of a standard or custom sublist field. See, How do I find a field's internal ID? */
    fieldId: string;
    /** @description The value to search for */
    value: any;
  }

  export interface GetSublistFieldOptions {
    /** @description The internal ID of the sublist. This value is displayed in the Records Browser. For more information, see the help topic Working with the SuiteScript Records Browser. */
    sublistId: string;
    /** @description The internal ID of a standard or custom sublist field. */
    fieldId: string;
    /** @description The line number for the field. Note that line indexing begins at 0 with SuiteScript 2.0. */
    line: number;
  }

  export interface GetCurrentSublistFieldOptions {
    /** @description The internal ID of a standard or custom sublist field */
    fieldId: string;
    /** @description The internal ID of the sublist */
    sublistId: string;
  }

  export interface CurrentRecord {
    /**
       * return array of names of all body fields, including machine header field and matrix header fields
       * @return {string[]}
       */
    getFields();

    /**
     * return array of names of all sublists
     * @return {string[]}
     */
    getSublists();

    /**
     * return value of the field
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    getValue(options: IFieldIdOption);

    /**
     * set value of the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setValue(options: SetValueOptions): CurrentRecord;

    id: number;

    type: string;

    /**
     * get value of the field in text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    getText(options);

    /**
     * set value of the field by text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string} options.text ----- The text or texts to change the field value to.
     *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
     *     null value. Passing in null deselects all currentlsy selected values. If the field type is not multiselect: this
     *     parameter accepts only a single string value.
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setText(options);

    /**
     * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
     */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions);

    /**
     * return value of a sublist field
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    getSublistValue(options: GetSublistValueOptions);

    /**
     * return value of a sublist field in text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */
    getSublistText(options);

    /**
     * set the value of a sublist field in text representation (available for deferred dynamic only)
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string} options.text
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     */
    setSublistText(options);

    /**
     * return line count of sublist
     */
    getLineCount(options: GetLineCountOptions): number;

    /**
     * insert a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {string} options.beforeLineInstanceId
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @return {Line} [new line object]
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and beforeLineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and beforeLineInstanceId
     *     are missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable or before exists and before is an instanceId that does not point to a line in the sublist.
     */
    insertLine(options);

    /**
     * remove a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {string} options.lineInstanceId
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and lineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and lineInstanceId are
     *     missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable
     */
    removeLine(options);

    /** @description selects an existing line in a sublist */
    selectLine(options: SelectLineOptions): CurrentRecord;

    /**
     * select a new line at the end of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Line} [new line object]
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     * @restriction only available in dynamic record
     */
    selectNewLine(options);

    /**
     * cancel the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     * @restriction only available in dynamic record
     */
    cancelLine(options);

    /**
     * commit the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     * @restriction only available in dynamic record
     */
    commitLine(options);

    /** @description Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: ISublistIdOption): number;

    /**
     * return value of a sublist field on the current selected sublist line
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions): number | Date | string | Array<any> | boolean;


    /**
     * set the value for field in the current selected line
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions): CurrentRecord;

    /**
     * return the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    getCurrentSublistText(options);

    /**
     * set the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    setCurrentSublistText(options);

    /**
     * save record updates to the system
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @return {number} id of submitted record
     */
    save(options);

    /**
     * return a value indicating if the field has a subrecord
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */
    hasSubrecord(options);

    /**
     * get the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} [client-side subrecord implementation]
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     */
    getSubrecord(options);

    /**
     * remove the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} same record, for chaining
     */
    removeSubrecord(options);

    /**
     * return a value indicating if the associated sublist field has a subrecord
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {boolean}
     */
    hasSublistSubrecord(options);

    /**
     * get the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record} [client-side subrecord implementation]
     */
    getSublistSubrecord(options);

    /**
     * remove the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record} same record, for chaining
     */
    removeSublistSubrecord(options);

    /**
     * return a value indicating if the associated sublist field has a subrecord on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {boolean}
     */
    hasCurrentSublistSubrecord(options);

    /**
     * get the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record} [client-side subrecord implementation]
     */
    getCurrentSublistSubrecord(options);

    /**
     * remove the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record} same record, for chaining
     */
    removeCurrentSublistSubrecord(options);

    /**
     * returns the specified sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist} [requested sublist]
     */
    getSublist(options);

    /**
     * return array of names of all fields in a sublistï»¿
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefinedï»¿
     */
    getSublistFields(options);

    /**
     * return field object from record
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    getField(options: GetFieldOptions): Field;


    /**
     * return field object from record's sublist
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    getSublistField(options: GetSublistFieldOptions): Field;

    /**
     * return field object from record's sublist current line
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @restriction only available in dynamic record
     */
    getCurrentSublistField(options: GetCurrentSublistFieldOptions): Field;

    /**
     * set the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Record} same record, for chaining
     */
    setMatrixHeaderValue(options);

    /**
     * get the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    getMatrixHeaderValue(options);

    /**
     * set the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in deferred dynamic record
     * @return {Record} same record, for chaining
     */
    setMatrixSublistValue(options);

    /**
     * get the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    getMatrixSublistValue(options);

    /**
     * get the field for the specified header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field} [requested field]
     */
    getMatrixHeaderField(options);

    /**
     * get the field for the specified sublist in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field} [requested field]
     */
    getMatrixSublistField(options);

    /**
     * returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.value the column number for the field
     * @param {number} options.column the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    findMatrixSublistLineWithValue(options);

    /**
     * returns the number of columns for the specified matrix.
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    getMatrixHeaderCount(options);

    /**
     * set the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string} options.value - the value to set it to
     * @param {boolean} options.ignoreFieldChange (optional) - Ignore the field change script (default false)
     * @param {boolean} options.fireSlavingSync (optional) - Flag to perform slaving synchronously (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {Record} same record, for chaining
     */
    setCurrentMatrixSublistValue(options);

    /**
     * get the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {number|Date|string}
     */
    getCurrentMatrixSublistValue(options);
  }
  export interface Field {
    /**
     * Return label of the field
     * @readonly
     */
    label: string;
    /**
     * Return id of the field
     * @readonly
     */
    id: string;
    /**
     * Disabled state of the field
     */
    isDisabled: boolean;
    /**
     * Display state of the field
     */
    isDisplay: boolean;
    /**
     * Mandatory state of the field
     */
    isMandatory: boolean;
    /**
     * Read Only state of the field
     */
    isReadOnly: boolean;
    /**
     * Visible state of the field
     */
    isVisible: boolean;
    /**
     * Return type of the field
     * @readonly
     */
    type: string;
    /**
     * Return the sublistId of the field
     * @readonly
     */
    sublistId: string;
    /**
     * Returns if the field is a popup
     * @readonly
     */
    isPopup: boolean;
    /**
     * get JSON format of the object
     */
    toJSON(): string;

    toString(): string;
  }

  function get(): CurrentRecord;

  export interface GetCurrentSublistValueOptions {
    fieldId: string;
    sublistId: string;
  }

  export interface GetFieldOptions {
    fieldId: string;
  }

  export interface GetLineCountOptions { sublistId: string }

  export interface GetSublistValueOptions {
    sublistId: string;
    fieldId: string;
    line: number;
  }

  export interface IFieldIdOption { fieldId: string; }

  export interface ISublistIdOption { sublistId: string; }

  export interface SelectLineOptions {
    /** @description The internal ID of the sublist. This value is displayed in the Records Browser. For more information, see the help topic */
    sublistId: string;
    /** @description The line number to select in the sublist. Note that line indexing begins at 0 with SuiteScript 2.0 */
    line: number;
  }

  export interface SetCurrentSublistValueOptions {
    sublistId: string;
    fieldId: string;
    value: any;
    ignoreFieldChange?: boolean;
  }

  export interface SetValueOptions {
    fieldId: string;
    value: any;
    ignoreFieldChange?: boolean;
  }
}

declare module N.email {
  export interface CustomRecord {
    /** @description - Custom record instance ID to attach Message record to. */
    id: number;
    /** @description - Custom Record record type to attach Message record to. */
    recordType: string;
  }
  /**
 * @description Send email with bounce back
 * @governance 20 units
 * @restriction Supported by all client and server side scirpts; The maximum number of total recipients (recipient + cc + bcc) allowed is 10
 */

  /** @description RelatedRecords represents the NetSuite records to which an Email Message record should be attached. */

  export interface RelatedRecords {
    /** @description - Transaction record to attach Message record to. */
    transactionId: number;
    /** @description - Activity record to attach Message record to. */
    activityId: number;
    /** @description - Entity record to attach Message record to. */
    entityId: number;
    /** @description - Custom record to attach Message record to. */
    customRecord: CustomRecord;

  }
  export function send(options: SendOptions);

  export interface SendOptions {
    /** @description Sender of the email. */
    author: number;
    /** @description Recipients of the email, Internal ID or array of Email Addresses. */
    recipients: number | string[];
    /** @description CC recipients of the email, Internal ID or array of Email Addresses. */
    cc?: string[];
    /** @description BCC recipients of the email as an EmailEntity, Internal ID or Email Address. */
    bcc?: string[];
    /** @description Email subject. */
    subject: string;
    /** @description Email Body/contents. */
    body: string;
    /** @description (optional) */
    replyTo?: string;
    /** @description Email file attachments. Not supported in client side.
     * @type file.File[]
     */
    attachments?: any[];
    /** @description (optional) */
    relatedRecords?: RelatedRecords;
    /** @description Do not show Message record when viewed from external Entity. Default to false */
    isInternalOnly?: boolean;
  }
}

declare module N.encode {
  export function convert(options: ConvertOptions);

  export interface ConvertOptions {
    /**
     * @description The string to encode
     */
    string: string;

    /**
     * @description The encoding used on the input string. The default value is UTF_8. Use the encode.Encoding to set the value.
     */
    inputEncoding: string;

    /**
     * @description The encoding used on the output string. The default value is UTF_8. Use the encode.Encoding to set the value.
     */
    outputEncoding: string;
  }

  export const Encoding: {
    UTF_8: string;
    BASE_16: string;
    BASE_32: string;
    BASE_64: string;
    BASE_64_URL_SAFE: string;
    HEX: string;
  };
}

declare module N.error {
  /** Creates a new error.SuiteScriptError or error.UserEventError object. Use the error.SuiteScriptError or error.UserEventError object in a try-catch statement to abort script execution. */
  export function create(options: CreateOptions);
  export interface CreateOptions {
    /** @description Error message text displayed in the Details column of the Execution Log. Sets the value for the SuiteScriptError.message or UserEventError.message property. The default value is null.*/
    message: string;
    /** @description User-defined error code. Sets the value for the SuiteScriptError.name or UserEventError.name property */
    name: string;
    /** @description Sets whether email notification is suppressed. If set to false, the system emails the users identified on the applicable script record’s Unhandled Errors subtab when the error is thrown. For additional information on the Unhandled Errors subtab, see the help topic Creating a Script Record. */
    notifyOff?: boolean;
  }
}

declare module N.file {
  /** @description Method used to create a new file in the NetSuite File Cabinet */
  export function create(options: CreateOptions): File;

  export interface CreateOptions {
    /** @description The file name and extension. Sets the value for the File.name property. */
    name: string;

    /** @description  The file type. Sets the value for the File.fileType property. This property is read-only and cannot be changed after the file is created. Use the file.Type enum to set the value. */
    fileType: string;

    /** @description  The file content. File content is lazy loaded; there is no property for it. If the file type is binary (for example, PDF), the file content must be base64 encoded. */
    contents?: string;

    /** @description  The file description. In the UI, the value of description displays the Description field on the file record. Sets the value for the File.description property. */
    description?: string;

    /** @description  optional The internal ID of the folder within the NetSuite File Cabinet. You must set the File Cabinet folder before you upload a file to the NetSuite File Cabinet with File.save(). Sets the value for the File.folder property. */
    folder?: number;

    /** @description  The character encoding on a file. Sets the value for the File.encoding property. Use the file.Encoding enum to set the value. */
    encoding?: string;

    /** @description The inactive status of a file. If set to true, the file is inactive. The default value is false. When a file is inactive, it does not display in the UI unless you select Show Inactives on the File Cabinet page. Sets the value for the File.isInactive property. */
    isInactive?: boolean;

    /** @description The Available without Login status of a file. If set to true, users can download the file outside of a current netSuite login session. The default value is false. Sets the value for the File.isOnline property. */
    isOnline?: boolean;
  }

  /** @description Loads an existing file from the NetSuite File Cabinet */
  export function load(options: LoadOptions): File;

  export interface LoadOptions {
    /** @description The identifier of a file in the File Cabinet. To specify a file in the File Cabinet, you can pass one of the following as the value of this parameter: The internal ID of the file as a number or string The absolute file path to the file in the File Cabinet (for example, ‘Images/myImageFile.jpg’) The relative file path to the file in the File Cabinet (for example, ‘./Images/myImageFile.jpg’ to specify a file path relative to the current folder of your script, or ‘../Images/myImageFile.jpg’ to specify a file path relative to the parent folder of your script) To find the internal ID of the file in the UI, select Documents > Files > File Cabinet. */
    id: number | string;
  }

  export interface File {

    /** @description Method used to: Upload a new file to the NetSuite File Cabinet. Save an updated file to the NetSuite File Cabinet. Note: The File.save() method streams files of any size, provided that the file to save or upload meets File Cabinet limits. Important: If you want to save the file to the NetSuite File Cabinet, you must set a NetSuite File Cabinet folder with the File.folder property. You must do this before you call File.save(). */
    save(): number;
  }
}

declare module N.format {
  export interface FormatOptions {
    /** @description The input data to format. */
    value: any;
    /** @description The field type (for example, DATE, CURRENCY, INTEGER). Set using the format.Type enum */
    type: string;
  }

  /** @description Formats a value from the raw value to its appropriate preference format. */
  export const format: (options: FormatOptions) => string;
  export const Type: {
    DATE: string;
    TIME: string;
    TIMETRACK: string;
    TIMEOFDAY: string;
    DATETIME: string;
    DATETIMETZ: string;
    INTEGER: string;
    POSINTEGER: string;
    PERCENT: string;
    RATE: string;
    RATEHIGHPRECISION: string;
    FLOAT: string;
    POSFLOAT: string;
    NONNEGFLOAT: string;
    POSCURRENCY: string;
    NONNEGCURRENCY: string;
    CURRENCY: string;
    CURRENCY2: string;
    EMAIL: string;
    EMAILS: string;
    URL: string;
    CHECKBOX: string;
    CCNUMBER: string;
    RADIO: string;
    PHONE: string;
    FULLPHONE: string;
    IDENTIFIER: string;
    IDENTIFIERANYCASE: string;
    FUNCTION: string;
    QUOTEDFUNCTION: string;
    MMYYDATE: string;
    CCEXPDATE: string;
    CCVALIDFROM: string;
    COLOR: string;
    PACKAGE: string;
    FURIGANA: string;
    ADDRESS: string;
    TEXT: string;
    TEXTAREA: string;
    SELECT: string;
    DOCUMENT: string;
  }

  export const parse: (options: ParseOptions) => any;
  export interface ParseOptions {
    value: string;
    type: string;
  }
}

declare module N.http {
  export interface ClientResponse {
    body: string;
    code: number;
    headers: any;
  }

  /** @description Sends an HTTP GET request */
  export function get(options: GetOptions): ClientResponse;

  export interface GetOptions {
    /** @description The HTTP URL being requested */
    url: string;
    /** @description The HTTP headers. For more information, see HTTP Header Information */
    headers?: any;
  }

  export function post(options: PostOptions): ClientResponse;

  export interface PostOptions {
    /** @description The HTTP URL being requested */
    url: string;
    /** @description The POST data. */
    body: string | Object;
    /** @description The HTTP headers. For more information, see HTTP Header Information. */
    headers: object;
  }

  export const RedirectType: {
    MEDIA_ITEM: string;
    RECORD: string;
    RESTLET: string;
    SUITELET: string;
    TASK_LINK: string;
  }

  export interface ServerRequest {
    /** @description Returns the number of lines in a sublist */
    getLineCount(options: any): number;
    getSublistValue(options: any): string;
    /** @description read-only HTTP request method */
    method: string;
    /** @description read-only - server request body */
    body: string;
    /** @description read-only - server request files */
    files: object;
    /** @description read-only - server request headers */
    headers: object;
    /** @description read-only - The remote client IP address */
    clientIpAddress: string;
    /** @description read-only - The server request parameters */
    parameters: any;
    /** @description read-only - The server request url */
    url: string;
  }

  export interface WritePageOptions {
    pageObject: N.ui.serverWidget.Form
  }

  export interface SendRedirectOptions {
    /** @description The type of resource redirected to (use http.RedirectType) */
    type: string;
    /** @description The primary ID for this resource. The value you use varies depending on the value of options.type, as follows: MEDIA_ITEM — Use the internal ID of a file stored in the NetSuite File Cabinet. RECORD — Use the record.Type enum to identify the appropriate record type. RESTLET — Use the script ID from the script record of the appropriate RESTlet. SUITELET — Use the script ID from the script record of the appropriate Suitelet. TASK_LINK — Use the appropriate Task ID. Supported IDs are listed in Task IDs. */
    identifier: string;
    /** @description the secondary id for this resource */
    id?: string;
    /** @description for RECORD calls, this determines whether to return a URL for the record in edit mode or view mode */
    editMode?: boolean;
    /** @description additional URL parameters as name/value pairs */
    parameters?: any;
  }

  export interface ServerResponse {
    /** @description Server response headers. key/value pairs with all the headers; if multiple values are assigned to one header name, they are returned as an array */
    headers: any;

    /**
     * Sets the value of a response header.
     * @param {Object} options
     * @param {string} options.name the name of the header
     * @param {string} options.value the value used to set the header
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
     */
    setHeader(options);

    /**
     * Adds a header to the response. If this header has already been set, this will add another line for that header.
     * @param {Object} options
     * @param {string} options.name the name of the header
     * @param {string} options.value the value used to set the header
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_HEADER if the header name or value is invalid
     */
    addHeader(options);

    /**
     * Sets the redirect URL by resolving to a NetSuite resource. Note that all parameters must be prefixed with custparam.
     * @param {Object} options
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} SSS_INVALID_URL_CATEGORY if type is none of RECORD, TASKLINK or SUITELET
     * @throws {error.SuiteScriptError} SSS_INVALID_TASK_ID if type is TASKLINK and an invalid task identifier is passed in the options.identifier parameter
     * @throws {error.SuiteScriptError} SSS_INVALID_RECORD_TYPE if type is RECORD and an invalid record type is passed in the options.identifier parameter
     * @throws {error.SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 if type is SUITELET and an invalid script ID and deployment ID are passed in the options.identifier and options.id parameters
     */
    sendRedirect(options: SendRedirectOptions);

    /**
     * Write information (text/xml/html) to the response.
     * @param {Object} options
     * @param {string} options.output string or file being written
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    write(options);

    /**
     * Write line information (text/xml/html) to the response.
     * @param {Object} options
     * @param {string} options.output string being written
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a string
     */
    writeLine(options);

    /**
     * Generates a page using a page element object.
     * @param {Object} options
     * @param {serverWidget.Assistant|serverWidget.Form|serverWidget.List} options.pageObject standalone page object: assistant, form or list
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    writePage(options: WritePageOptions);

    /**
     * Write a file to the response.
     * @param {Object} options
     * @param {file.File} options.file the file to be written
     * @param {boolean} options.isInline (optional) true if the file is inline
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if the file parameter is not a file.File object
     */
    writeFile(options);

    /**
     * Returns the value for a header returned in the response.
     * @param {Object} options
     * @param {string} options.name the header name
     * @returns {string|Array} the value of the header; if multiple values are assigned to the header name, they are returned as an array
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    getHeader(options);

    /**
     * Generates and renders a PDF directly to the response.
     * @param {Object} options
     * @param {string} options.xmlString content of your PDF
     * @governance 10 units
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    renderPdf(options);

    /**
     * Sets CDN caching for a period of time.
     * @param {Object} options
     * @param {string} options.type constant value to represent the caching duration, see http.CacheDuration enum
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     */
    setCdnCacheable(options);

    /**
     * Returns the object type name (http.ServerResponse)
     * @returns {string}
     */
    toString();

    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */
    toJSON();
  }
}

declare module N.log {
  export function audit(options: LogOptions);
  export function debug(options: LogOptions | string, details?: any);
  export function error(options: LogOptions);
  export interface LogOptions {
    title: string;
    details: any;
  }
}

declare module N.plugin {
  /** @description Returns the script IDs of custom plug-in type implementations. Returns an empty list when there is no custom plug-in type with the script ID available for the executing script. */
  export const findImplementations: (options: FindImplementationsOptions) => string[];

  export interface FindImplementationsOptions {
    /** @description The script ID of the custom plug-in type. */
    type: string;
    /** @description The default value is true, indicating that the default implementation should be included in the list. */
    includeDefault?: boolean;
  }
  /** @description Instantiates an implementation of the custom plugin type. Returns the implementation which is currently selected in the UI (Manage Plug-ins page) when no implementation ID is explicitly provided. */
  export const loadImplementation: (options: LoadImplementationOptions) => any;

  export interface LoadImplementationOptions {
    /** @description The script ID of the custom plug-in type. */
    type: string;
    /** @description The script ID of the custom plug-in implementation. */
    implementation?: string;
  }
}

declare module N.query {
  /** @description type should be a type from query.Type */
  export function create(options: { type: string }): Query;

  export interface CreateColumnOptions {
    /** @description The name of the column. This value sets the Condition.fieldId property. Obtain this value from the Records Browser: https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2019_2/script/record/contact.html 1. Go to the appropriate record type. 2. Scroll until you see the Search Filters table. 3. Locate the appropriate value in the Internal ID column. For more information on the Records Browser, see Using the SuiteScript Records Browser. */
    fieldId: string;
    /** @description name should come from query.FieldContext */
    context?: { name: string };
  }

  export interface CreateConditionOptions {
    /** @description The name of the condition. This value sets the Condition.fieldId property. Obtain this value from the Records Browser: https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2019_2/script/record/contact.html 1. Go to the appropriate record type. 2. Scroll until you see the Search Filters table. 3. Locate the appropriate value in the Internal ID column. For more information on the Records Browser, see Using the SuiteScript Records Browser. */
    fieldId: string;
    /** @description The operator used by the condition. This value sets the Condition.operator parameter. Use the appropriate query.Operator enum value to pass in your argument. This enum holds all the supported values for this parameter */
    operator: string;
    values: any;
  }

  export const FieldContext: {
    /** @description Displays converted currency amounts using the exchange rate that was in effect on a specific date */
    CONVERTED: string;
    /** @description Displays consolidated currency amounts in the base currency. */
    CURRENCY_CONSOLIDATED: string;
    /** @description Displays user-friendly field values. For example, for the entity field on Transaction records, using the DISPLAY enum value displays the name of the entity instead of its ID */
    DISPLAY: string;
    /** @description Displays user-friendly field values for hierarchical fields (for example, “Parent Company : SUB CAD”). This value is similar to the DISPLAY enum value but applies to hierarchical fields. */
    HIERARCHY: string;
    /** @description Displays raw field values for hierarchical fields (for example, “1 : 5”). This value is similar to the RAW enum value but applies to hierarchical fields */
    HIERARCHY_IDENTIFIER: string;
    /** @description Displays raw field values for hierarchical fields (for example, “1 : 5”). This value is similar to the RAW enum value but applies to hierarchical fields. */
    RAW: string;
  };

  export const Operator: {
    AFTER: string;
    AFTER_NOT: string;
    ANY_OF: string;
    ANY_OF_NOT: string;
    BEFORE: string;
    BEFORE_NOT: string;
    BETWEEN: string;
    BETWEEN_NOT: string;
    CONTAIN: string;
    CONTAIN_NOT: string;
    EMPTY: string;
    EMPTY_NOT: string;
    ENDWITH: string;
    ENDWITH_NOT: string;
    EQUAL: string;
    EQUAL_NOT: string;
    GREATER: string;
    GREATER_NOT: string;
    GREATER_OR_EQUAL: string;
    GREATER_OR_EQUAL_NOT: string;
    IS: string;
    IS_NOT: string;
    LESS: string;
    LESS_NOT: string;
    LESS_OR_EQUAL: string;
    LESS_OR_EQUAL_NOT: string;
    ON: string;
    ON_NOT: string;
    ON_OR_AFTER: string;
    ON_OR_AFTER_NOT: string;
    ON_OR_BEFORE: string;
    ON_OR_BEFORE_NOT: string;
    START_WITH: string;
    START_WITH_NOT: string;
    WITHIN: string;
    WITHIN_NOT: string;
  }

  export interface Query {
    columns: any[];
    condition: any;
    createColumn: (options: CreateColumnOptions) => any;
    createCondition: (options: CreateConditionOptions) => any;
    run: () => ResultSet;
  }

  export interface ResultSet {
    results: Array<{ values: any[] }>
  }

  export const Type: {
    CONTACT: string;
    CUSTOM_RECORD_TYPE: string;
    CUSTOMER: string;
    FILE: string;
  };
}

declare module N.record {
  /** @description Creates a new record by copying an existing record in NetSuite. */
  export function copy(options: CopyOptions): Record;
  export interface CopyOptions {
    /** @description The record type. Use the following guidelines: When copying an instance of a standard NetSuite record type, set this value by using the record.Type enum. When copying an instance of a custom record type, set this value by using the custom record type’s string ID. For help finding this ID, see the help topic Custom Record. */
    type: string;
    /** @description The internal ID of the existing record instance in NetSuite. */
    id: string;
    /** @description Determines whether the new record is created in dynamic mode. If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. By default, this value is false. */
    isDynamic?: boolean;
    /** @description Name-value pairs containing default values of fields in the new record. By default, this value is null. For a list of available record default values, see N/record Default Values in the NetSuite Help Center. */
    defaultValues?: any;
  }
  /** @description Creates a new record. */
  export const create: (options: CreateOptions) => Record;

  export interface CreateOptions {
    /** @description The record type. This value determines the Record.type property of the record that is created. This property is read-only on an existing record. Use the following guidelines: When creating an instance of a standard NetSuite record type, set this value by using the record.Type enum. When creating an instance of a custom record type, set this value by using the custom record type’s string ID. For help finding this ID, see the help topic Custom Record. */
    type: string;
    /** @description Determines whether the new record is created in dynamic mode. If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. By default, this value is false */
    isDynamic?: boolean;
    /** @description Name-value pairs containing default values of fields in the new record. By default, this value is null. For a list of available record default values, see N/record Default Values in the NetSuite Help Center */
    defaultValues?: Object;
  }

  /**
 * Delete a record object based on provided type, id and return the id of deleted record
 * @governance 20 units for transactions, 4 for custom records, 10 for all other records
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
 * @since 2015.2
 */
  function del(options: DeleteOptions): number;
  export { del as delete }

  export interface DeleteOptions {
    /** @description record type */
    type: string;
    /** @description record id */
    id: number | string;
  }

  export interface GetFieldOptions {
    /** @description The internal ID of a standard or custom body field. See, How do I find a field's internal ID - https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2904231.html*/
    fieldId: string;
  }

  export interface GetSublistFieldOptions {
    sublistId: string;
    fieldId: string;
    line: number;
  }

  export interface GetSublistOptions {
    /** @description The internal ID of the sublist. This value is displayed in the Records Browser. For more information, see the help topic Working with the SuiteScript Records Browser. */
    sublistId: string;
  }

  export interface InsertLineOptions {
    /** @description The internal ID of the sublist. This value is displayed in the Records Browser. For more information, see the help topic Working with the SuiteScript Records Browser. */
    sublistId: string;
    /** @description The line number to insert. Note that line indexing begins at 0 with SuiteScript 2.0. */
    line: number;
  }

  /** @description Loads an existing record. */
  export const load: (options: LoadOptions) => Record;

  export interface LoadOptions {
    /** @description The record type. Use the following guidelines: When loading an instance of a standard NetSuite record type, set this value by using the record.Type enum. When loading an instance of a custom record type, set this value by using the custom record type’s string ID. For help finding this ID, see the help topic Custom Record. */
    type: string;
    /** @description The internal ID of the existing record instance in NetSuite. The internal ID of the record is displayed on the list page for the record type. */
    id: number | string;
    /** @description Determines whether the record is loaded in dynamic mode. If set to true, the record is loaded in dynamic mode. If set to false, the record is loaded in standard mode. By default, this value is false. */
    isDynamic?: boolean;
    /** @description Name-value pairs containing default values of fields in the new record. By default, this value is null. For a list of available record default values, see N/record Default Values in the NetSuite Help Center. */
    defaultValues?: object;
  }

  export interface GetValueOptions {
    fieldId: string;
  }
  export interface Record {
    /**
     * return array of names of all body fields, including machine header field and matrix header fields
     * @return {string[]}
     */
    getFields();

    /**
     * return array of names of all sublists
     * @return {string[]}
     */
    getSublists();

    /**
     * return value of the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */
    getValue(options: GetFieldOptions);

    /**
     * set value of the field
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setValue(options: SetValueOptions): Record;

    /**
     * get value of the field in text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    getText(options);

    /**
     * set value of the field by text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string} options.text ----- The text or texts to change the field value to.
     *    If the field type is multiselect: - This parameter accepts an array of string values. - This parameter accepts a
     *     null value. Passing in null deselects all currentlsy selected values. If the field type is not multiselect: this
     *     parameter accepts only a single string value.
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */
    setText(options);

    /**
     * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.value
     * @return {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
     */
    findSublistLineWithValue(options);

    /**
     * return value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */
    getSublistValue(options);

    /**
     * set the value of a sublist field (available for deferred dynamic only)
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     */
    setSublistValue(options: SetSublistValueOptions): Record;

    /**
     * return value of a sublist field in text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */
    getSublistText(options);

    /**
     * set the value of a sublist field in text representation (available for deferred dynamic only)
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string} options.text
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     */
    setSublistText(options);

    /**
     * return line count of sublist
     * @return {number}
     */
    getLineCount(options: { sublistId: string }): number;

    /**
     * insert a sublist line
     * @return {Line} [new line object]
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and beforeLineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and beforeLineInstanceId
     *     are missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable or before exists and before is an instanceId that does not point to a line in the sublist.
     */
    insertLine(options: InsertLineOptions);

    /**
     * remove a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {string} options.lineInstanceId
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and lineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and lineInstanceId are
     *     missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable
     */
    removeLine(options);

    /**
     * select a new line at the end of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Line} [new line object]
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     * @restriction only available in dynamic record
     */
    selectNewLine(options);

    /**
     * cancel the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     * @restriction only available in dynamic record
     */
    cancelLine(options);

    /**
     * commit the current selected line
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     * @restriction only available in dynamic record
     */
    commitLine(options: { sublistId: string }): Record;

    /**
     * return value of a sublist field on the current selected sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    getCurrentSublistValue(options);

    /**
     * set the value for field in the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */
    setCurrentSublistValue(options);

    /**
     * return the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */
    getCurrentSublistText(options);

    /**
     * set the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @return {Record} same record, for chaining
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */
    setCurrentSublistText(options);

    /**
     * save record updates to the system
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @return {number} id of submitted record
     */
    save(options?): number;

    /**
     * return a value indicating if the field has a subrecord
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */
    hasSubrecord(options);

    /**
     * get the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} [client-side subrecord implementation]
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     */
    getSubrecord(options);

    /**
     * remove the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record} same record, for chaining
     */
    removeSubrecord(options);

    /**
     * return a value indicating if the associated sublist field has a subrecord
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {boolean}
     */
    hasSublistSubrecord(options);

    /**
     * get the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record} [client-side subrecord implementation]
     */
    getSublistSubrecord(options);

    /**
     * remove the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record} same record, for chaining
     */
    removeSublistSubrecord(options);

    /**
     * return a value indicating if the associated sublist field has a subrecord on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {boolean}
     */
    hasCurrentSublistSubrecord(options);

    /**
     * get the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record} [client-side subrecord implementation]
     */
    getCurrentSublistSubrecord(options);

    /**
     * remove the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record} same record, for chaining
     */
    removeCurrentSublistSubrecord(options);

    /**
     * returns the specified sublist
     * @return {Sublist} [requested sublist]
     */
    getSublist(options: GetSublistOptions);

    /**
     * return array of names of all fields in a sublistï»¿
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefinedï»¿
     */
    getSublistFields(options);

    /**
     * return field object from record
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */
    getField(options: GetFieldOptions);

    /**
     * return field object from record's sublist
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */
    getSublistField(options: GetSublistFieldOptions): N.ui.serverWidget.Field;

    /**
     * return field object from record's sublist current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @restriction only available in dynamic record
     */
    getCurrentSublistField(options);

    /**
     * set the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Record} same record, for chaining
     */
    setMatrixHeaderValue(options);

    /**
     * get the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    getMatrixHeaderValue(options);

    /**
     * set the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in deferred dynamic record
     * @return {Record} same record, for chaining
     */
    setMatrixSublistValue(options);

    /**
     * get the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */
    getMatrixSublistValue(options);

    /**
     * get the field for the specified header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field} [requested field]
     */
    getMatrixHeaderField(options);

    /**
     * get the field for the specified sublist in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field} [requested field]
     */
    getMatrixSublistField(options);

    /**
     * returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.value the column number for the field
     * @param {number} options.column the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    findMatrixSublistLineWithValue(options);

    /**
     * returns the number of columns for the specified matrix.
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */
    getMatrixHeaderCount(options);

    /**
     * set the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string} options.value - the value to set it to
     * @param {boolean} options.ignoreFieldChange (optional) - Ignore the field change script (default false)
     * @param {boolean} options.fireSlavingSync (optional) - Flag to perform slaving synchronously (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {Record} same record, for chaining
     */
    setCurrentMatrixSublistValue(options);

    /**
     * get the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {number|Date|string}
     */
    getCurrentMatrixSublistValue(options);

    id: number;

    type: string;
  }

  export interface SetCurrentSublistValueOptions {
    sublistId: string;
    fieldId: string;
    value: any;
    /** @description =false] ignore field change script and slaving event if set to true */
    ignoreFieldChange?: boolean;
  }

  export interface SetSublistValueOptions {
    /** @description The internal ID of the sublist. This value is displayed in the Records Browser. For more information, see the help topic Working with the SuiteScript Records Browser */
    sublistId: string;
    /** @description The internal ID of a standard or custom sublist field. */
    fieldId: string;
    /** @description The line number of the sublist. Note that line indexing begins at 0 with SuiteScript 2.0 */
    line: number;
    /** @description The value to set the sublist field to. The value type must correspond to the field type being set. For example: Text, Radio and Select fields accept string values. Checkbox fields accept Boolean values. Date and DateTime fields accept Date values. Integer, Float, Currency and Percent fields accept number values. */
    value: any;
  }

  export interface SetValueOptions {
    /** @description The internal ID of a standard or custom body field. See, How do I find a field's internal ID? */
    fieldId: string;
    /** @description The value to set the field to. The value type must correspond to the field type being set. For example: Text, Radio, Select and MultiSelect fields accept string and array of values. Checkbox fields accept Boolean values. Date and DateTime fields accept Date values. Integer, Float, Currency and Percent fields accept number values */
    value: any;
    /** @description If set to true, the field change and slaving event is ignored. By default, this value is false. */
    ignoreFieldChange?: boolean;
  }

  /**
  * commit record field updates to the system
  *
  * @governance 10 units for transactions, 2 for custom records, 5 for all other records
  * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
  * @return {number} id of submitted record
  * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
  */
  export function submitFields(options: SubmitFieldsOptions);

  export interface SubmitFieldsOptions {
    /** @description record type */
    type: string;
    /** @description record id */
    id: number | string;
    /** @description field and value mapping to be submitted */
    values: Object;
    /** @description additonal flags for submission */
    options?: Object;
    /** @description  enable sourcing during record update */
    enablesourcing?: any;
    /** @description ignore mandatory field during record submission */
    ignoreMandatoryFields?: boolean;
  }

  /** @description Enumeration that holds the string values for supported record types. This enum is used to set the value of the Record.type property in cases where you are working with an instance of a standard NetSuite record type. (If you are working with an instance of a custom record type, you set the Record.type property by using the custom record type’s string ID. For more help finding this ID, see the help topic Custom Record.) */
  export const Type: {
    ACCOUNT: string;
    ACCOUNTING_BOOK: string;
    ACCOUNTING_CONTEXT: string;
    ACCOUNTING_PERIOD: string;
    ADV_INTER_COMPANY_JOURNAL_ENTRY: string;
    ALLOCATION_SCHEDULE: string;
    AMORTIZATION_SCHEDULE: string;
    AMORTIZATION_TEMPLATE: string;
    ASSEMBLY_BUILD: string;
    ASSEMBLY_ITEM: string;
    ASSEMBLY_UNBUILD: string;
    BILLING_ACCOUNT: string;
    BILLING_CLASS: string;
    BILLING_RATE_CARD: string;
    BILLING_REVENUE_EVENT: string;
    BILLING_SCHEDULE: string;
    BIN: string;
    BIN_TRANSFER: string;
    BIN_WORKSHEET: string;
    BLANKET_PURCHASE_ORDER: string;
    BOM: string;
    BOM_REVISION: string;
    BUDGET_EXCHANGE_RATE: string;
    BUNDLE_INSTALLATION_SCRIPT: string;
    BULK_OWNERSHIP_TRANSFER: string;
    CALENDAR_EVENT: string;
    CAMPAIGN: string;
    CAMPAIGN_RESPONSE: string;
    CAMPAIGN_TEMPLATE: string;
    CASH_REFUND: string;
    CASH_SALE: string;
    CHARGE: string;
    CHARGE_RULE: string;
    CHECK: string;
    CLASSIFICATION: string;
    CLIENT_SCRIPT: string;
    CMS_CONTENT: string;
    CMS_CONTENT_TYPE: string;
    CMS_PAGE: string;
    COMMERCE_CATEGORY: string;
    COMPETITOR: string;
    CONSOLIDATED_EXCHANGE_RATE: string;
    CONTACT: string;
    CONTACT_CATEGORY: string;
    CONTACT_ROLE: string;
    COST_CATEGORY: string;
    COUPON_CODE: string;
    CREDIT_CARD_CHARGE: string;
    CREDIT_CARD_REFUND: string;
    CREDIT_MEMO: string;
    CURRENCY: string;
    CUSTOMER: string;
    CUSTOMER_CATEGORY: string;
    CUSTOMER_DEPOSIT: string;
    CUSTOMER_MESSAGE: string;
    CUSTOMER_PAYMENT: string;
    CUSTOMER_PAYMENT_AUTHORIZATION: string;
    CUSTOMER_REFUND: string;
    CUSTOMER_STATUS: string;
    CUSTOMER_SUBSIDIARY_RELATIONSHIP: string;
    CUSTOM_RECORD: string;
    CUSTOM_TRANSACTION: string;
    DEPARTMENT: string;
    DEPOSIT: string;
    DEPOSIT_APPLICATION: string;
    DESCRIPTION_ITEM: string;
    DISCOUNT_ITEM: string;
    DOWNLOAD_ITEM: string;
    EMAIL_TEMPLATE: string;
    EMPLOYEE: string;
    EMPLOYEE_CHANGE_REQUEST: string;
    EMPLOYEE_CHANGE_TYPE: string;
    ENTITY_ACCOUNT_MAPPING: string;
    ESTIMATE: string;
    EXPENSE_AMORTIZATION_EVENT: string;
    EXPENSE_CATEGORY: string;
    EXPENSE_PLAN: string;
    EXPENSE_REPORT: string;
    FAIR_VALUE_PRICE: string;
    FIXED_AMOUNT_PROJECT_REVENUE_RULE: string;
    FOLDER: string;
    FULFILLMENT_REQUEST: string;
    GENERAL_TOKEN: string;
    GENERIC_RESOURCE: string;
    GIFT_CERTIFICATE: string;
    GIFT_CERTIFICATE_ITEM: string;
    GL_NUMBERING_SEQUENCE: string;
    GLOBAL_ACCOUNT_MAPPING: string;
    GLOBAL_INVENTORY_RELATIONSHIP: string;
    GOAL: string;
    INBOUND_SHIPMENT: string;
    INTERCOMP_ALLOCATION_SCHEDULE: string;
    INTER_COMPANY_JOURNAL_ENTRY: string;
    INTER_COMPANY_TRANSFER_ORDER: string;
    INVENTORY_ADJUSTMENT: string;
    INVENTORY_COST_REVALUATION: string;
    INVENTORY_COUNT: string;
    INVENTORY_DETAIL: string;
    INVENTORY_ITEM: string;
    INVENTORY_NUMBER: string;
    INVENTORY_STATUS: string;
    INVENTORY_STATUS_CHANGE: string;
    INVENTORY_TRANSFER: string;
    INVOICE: string;
    ISSUE: string;
    ISSUE_PRODUCT: string;
    ISSUE_PRODUCT_VERSION: string;
    ITEM_ACCOUNT_MAPPING: string;
    ITEM_DEMAND_PLAN: string;
    ITEM_FULFILLMENT: string;
    ITEM_GROUP: string;
    ITEM_LOCATION_CONFIGURATION: string;
    ITEM_RECEIPT: string;
    ITEM_REVISION: string;
    ITEM_SUPPLY_PLAN: string;
    JOB: string;
    JOB_STATUS: string;
    JOB_TYPE: string;
    JOURNAL_ENTRY: string;
    KIT_ITEM: string;
    LABOR_BASED_PROJECT_REVENUE_RULE: string;
    LEAD: string;
    LOCATION: string;
    LOT_NUMBERED_ASSEMBLY_ITEM: string;
    LOT_NUMBERED_INVENTORY_ITEM: string;
    MANUFACTURING_COST_TEMPLATE: string;
    MANUFACTURING_OPERATION_TASK: string;
    MANUFACTURING_ROUTING: string;
    MAP_REDUCE_SCRIPT: string;
    MARKUP_ITEM: string;
    MASSUPDATE_SCRIPT: string;
    MERCHANDISE_HIERARCHY_LEVEL: string;
    MERCHANDISE_HIERARCHY_NODE: string;
    MERCHANDISE_HIERARCHY_VERSION: string;
    MESSAGE: string;
    MFG_PLANNED_TIME: string;
    NEXUS: string;
    NON_INVENTORY_ITEM: string;
    NOTE: string;
    NOTE_TYPE: string;
    OPPORTUNITY: string;
    ORDER_SCHEDULE: string;
    OTHER_CHARGE_ITEM: string;
    OTHER_NAME: string;
    OTHER_NAME_CATEGORY: string;
    PARTNER: string;
    PARTNER_CATEGORY: string;
    PAYCHECK: string;
    PAYCHECK_JOURNAL: string;
    PAYMENT_CARD: string;
    PAYMENT_CARD_TOKEN: string;
    PAYMENT_ITEM: string;
    PAYMENT_METHOD: string;
    PAYROLL_ITEM: string;
    PERFORMANCE_REVIEW: string;
    PERFORMANCE_REVIEW_SCHEDULE: string;
    PERIOD_END_JOURNAL: string;
    PCT_COMPLETE_PROJECT_REVENUE_RULE: string;
    PHONE_CALL: string;
    PORTLET: string;
    PRICE_BOOK: string;
    PRICE_LEVEL: string;
    PRICE_PLAN: string;
    PRICING_GROUP: string;
    PROJECT_EXPENSE_TYPE: string;
    PROJECT_TASK: string;
    PROJECT_TEMPLATE: string;
    PROMOTION_CODE: string;
    PROSPECT: string;
    PURCHASE_CONTRACT: string;
    PURCHASE_ORDER: string;
    PURCHASE_REQUISITION: string;
    REALLOCATE_ITEM: string;
    RECEIVE_INBOUND_SHIPMENT: string;
    RESOURCE_ALLOCATION: string;
    RESTLET: string;
    RETURN_AUTHORIZATION: string;
    REVENUE_ARRANGEMENT: string;
    REVENUE_COMMITMENT: string;
    REVENUE_COMMITMENT_REVERSAL: string;
    REVENUE_PLAN: string;
    REV_REC_SCHEDULE: string;
    REV_REC_TEMPLATE: string;
    SALES_ORDER: string;
    SALES_ROLE: string;
    SALES_TAX_ITEM: string;
    SCHEDULED_SCRIPT: string;
    SCHEDULED_SCRIPT_INSTANCE: string;
    SCRIPT_DEPLOYMENT: string;
    SERIALIZED_ASSEMBLY_ITEM: string;
    SERIALIZED_INVENTORY_ITEM: string;
    SERVICE_ITEM: string;
    SHIP_ITEM: string;
    SOLUTION: string;
    STATISTICAL_JOURNAL_ENTRY: string;
    STORE_PICKUP_FULFILLMENT: string;
    SUBSCRIPTION: string;
    SUBSCRIPTION_CHANGE_ORDER: string;
    SUBSCRIPTION_LINE: string;
    SUBSCRIPTION_PLAN: string;
    SUBSIDIARY: string;
    SUBTOTAL_ITEM: string;
    SUITELET: string;
    SUPPLY_CHAIN_SNAPSHOT: string;
    SUPPORT_CASE: string;
    TASK: string;
    TAX_ACCT: string;
    TAX_GROUP: string;
    TAX_PERIOD: string;
    TAX_TYPE: string;
    TERM: string;
    TIME_BILL: string;
    TIME_ENTRY: string;
    TIME_OFF_CHANGE: string;
    TIME_OFF_PLAN: string;
    TIME_OFF_REQUEST: string;
    TIME_OFF_RULE: string;
    TIME_OFF_TYPE: string;
    TIME_SHEET: string;
    TOPIC: string;
    TRANSFER_ORDER: string;
    UNITS_TYPE: string;
    USAGE: string;
    USEREVENT_SCRIPT: string;
    VENDOR: string;
    VENDOR_BILL: string;
    VENDOR_CATEGORY: string;
    VENDOR_CREDIT: string;
    VENDOR_PAYMENT: string;
    VENDOR_RETURN_AUTHORIZATION: string;
    VENDOR_SUBSIDIARY_RELATIONSHIP: string;
    WEBSITE: string;
    WORKFLOW_ACTION_SCRIPT: string;
    WORK_ORDER: string;
    WORK_ORDER_CLOSE: string;
    WORK_ORDER_COMPLETION: string;
    WORK_ORDER_ISSUE: string;
    WORKPLACE: string;
  };
}

declare module N.redirect {
  /**
 * Redirect to a URL
 *
 * @governance 0 units
 * @restriction Can only direct to external URL by suitelet without login
 *
 * @param {Object} options
 * @param {string} options.url
 * @param {Object} options.parameters (optional)
 */
  export function redirect(options);

  /**
   * @description Redirect to a suitelet
   * @governance 0 units
   * @restriction Suitelet and UE only
   */
  export function toSuitelet(options: ToSuiteletOptions);

  export interface ToSuiteletOptions {
    /** @description script Id */
    scriptId: string;
    /** @description deployment Id */
    deploymentId: string;
    /** @description (optional) default to false indicate it is external Suitelet URL */
    isExternal?: boolean;
    /** @description (optional) */
    parameters?: Object;
  }

  /**
   * Redirect to a record
   *
   * @governance 0 units
   * @restriction Suitelet and UE only
   *
   * @param {Object} options
   * @param {string} options.type record type
   * @param {string} options.id  record Id
   * @param {boolean} options.isEditMode (optional) default to false
   * @param {Object} options.parameters (optional)
   */
  export function toRecord(options);

  /**
   * Redirect to a task link
   *
   * @governance 0 units
   * @restriction Suitelet and UE only
   *
   * @param {Object} options
   * @param {string} options.id task Id
   * @param {Object} options.parameters (optional)
   */
  export function toTaskLink(options);

  /**
   * Redirect to saved search
   *
   * @governance 5 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param {Object} options
   * @param {number} options.id search id
   */
  export function toSavedSearch(options);

  /**
   * Redirect to saved search results
   *
   * @governance 5 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param {Object} options
   * @param {number} options.id search id
   */
  export function toSavedSearchResult(options);

  /**
   * Redirect to search
   *
   * @governance 0 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param {Object} options
   * @param {Search} options.Search
   */
  export function toSearch(options);

  /**
   * Redirect to search results
   *
   * @governance 0 units
   * @restriction Supppprted only by afterSubmit user event scripts and client scripts
   *
   * @param {Object} options
   * @param {Search} options.Search
   */
  export function toSearchResult(options);
}

declare module N.runtime {
  export const accountId: string;

  export const envType: string;

  export const EnvType: EnvTypeEnum;
  export interface EnvTypeEnum {
    SANDBOX: string,
    PRODUCTION: string,
    BETA: string,
    INTERNAL: string
  }

  /** @description The trigger of the current script. This property uses values from the runtime.ContextType enum. */
  export const executionContext: string;

  export const getCurrentScript: () => Script;
  export const getCurrentUser: () => User;
  export const getCurrentSession: () => Session;

  export interface Script {
    /** @description Returns the value of a script parameter for the currently executing script. For information on script parameters, see the help topic Creating Script Parameters Overview. */
    getParameter: (options: { name: string }) => any;

    getRemainingUsage(): number;

    id: string;
  }

  export interface Session {
    get(options: SessionGetOptions): string;
    set(options: SessionSetOptions): void;
  }

  export interface SessionGetOptions {
    /** @description Key used to store the session object */
    name: string;
  }

  export interface SessionSetOptions {
    /** @description Key used to store the session object */
    name: string;
    /** @description Value to associate with the key in the user session. */
    value: string;
  }

  export interface User {
    /** @description The internal ID of the currently logged-in contact */
    contact: number;
    /** @description The internal ID of the department for the current user */
    department: number;
    /** @description The e-mail address of the current user. */
    email: string;
    /** @description The internal ID of the current user. */
    id: number;
    /** @description The internal ID of the location of the current user. */
    location: number;
    /** @description The name of the current user. */
    name: string;
    /** @description The internal ID of the role for the current user. */
    role: number;
    /** @description The string value of the center type, or role center, for the current user. */
    roleCenter: string;
    /** @description The custom scriptId of the role for the current user */
    roleId: string;
    /** @description The internal ID of the subsidiary for the current user */
    subsidiary: number;
  }

  /** @description The version of NetSuite that the method is called in. For example, the runtime.version property in an account running NetSuite  is . For example, you can use this method when installing a bundle in another NetSuite accounts to find out the version number before installing the bundle. */
  export const version: string;
}

declare module N.search {
  export interface Column {
    /** @description the search return column name */
    name: string;
    /** @description the join ID for this search return column */
    join: string;
    /** @description the summary type for this column */
    summary: string;
    /** @description formula used for this column */
    formula: string;
    /** @description function used for this column */
    function: string;
    /** @description label used for this column */
    label: string;
    /** @description sort direction for this column; use values from the Sort enum */
    sort: string;
  }

  export function create(options: CreateOptions): N.search.Search;

  /** @description Creates a search.Column object. */
  export function createColumn(options: CreateColumnOptions): Column;

  export interface CreateColumnOptions {
    /** @description the search return column name */
    name: string;
    /** @description the join ID for this search return column */
    join?: string;
    /** @description the summary type for this column */
    summary?: string;
    /** @description formula used for this column */
    formula?: string;
    /** @description function used for this column */
    function?: string;
    /** @description label used for this column */
    label?: string;
    /** @description sort direction for this column; use values from the Sort enum */
    sort?: string;
  }

  export function createFilter(options: CreateFilterOptions): Filter;

  export interface CreateFilterOptions {
    /** @description internal ID of the search field */
    name: string;
    /** @description (optional)  if executing a joined search, this is the join ID used for the search field specified in the name parameter */
    join?: string;
    /** @description search operator */
    operator: string;
    /** @description (optional)  values to be used as filter parameters */
    values?: string | Date | number | string[] | Date[];
    /** @description (optional)  formula used for this filter */
    formula?: string;
    /** @description (optional)  summary type used for this filter */
    summary?: string;
  }

  export interface CreateOptions {
    /** @description The search type that you want to base the search on. Use the search.Type enum for this argument */
    type: string;
    filters?: Filter[] | string[][] | any[];
    filterExpression?: any[];
    columns?: string[] | Column[];
    packageId?: string;
    settings?: any[];
    title?: string;
    id?: string;
    isPublic?: boolean;
  }
  export interface Filter {
    /** @description Name or internal ID of the search field. */
    name: string;

    /** @description Join ID for the search filter. */
    join?: string;

    /** @description Operator used for the search filter. */
    operator: string;

    /** @description Summary type for the search filter. */
    summary?: string;

    /** @description Formula used by the search filter. */
    formula?: string;
  }

  export interface GetRangeOptions {
    /** @description the index number of the first result to return, inclusive */
    start: number;
    /** @description the index number of the last result to return, exclusive */
    end: number;
  }

  export interface GetValueOptions {
    /** @description the name of the search column whose value you want to return */
    name: string;
    /** @description (optional)  the join ID for this search column */
    join?: string;
    /** @description (optional)  the summary type used for this search column */
    summary?: string;
  }

  /**
 * Loads an existing saved search. The saved search could have been created using the UI, or created using search.create()
 * in conjunction with Search.save().
 * @governance 5 units
 * @returns {Search} the loaded search
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} INVALID_SEARCH when a search with the given ID is not found
 * @since 2015.2
 */
  export function load(options: LoadOptions): Search;

  export interface LoadOptions {
    /** @description the customer ID or internal ID of the search */
    id: string;

    /** @description The search type of the saved search to load. Use a value from the search.Type enum for this parameter. This parameter is required if the saved search to load uses a standalone search type. A standalone search type is a search type that does not have a corresponding record type. Typically, the search type of the saved search can be determined automatically based on the corresponding record type. In this case, this parameter is not required. For standalone search types, you must specify the search type explicitly using this parameter. */
    type?: string;
  }

  /** @description Performs a search for one or more body fields on a record. This function supports joined-field lookups. Note that the notation for joined fields is: join_id.field_name */
  export function lookupFields(options: LookupFieldsOptions): any;

  export interface LookupFieldsOptions {
    /** @description the record internal ID of the record type you are searching */
    type: string;
    /** @description the internalId of the record */
    id: string;
    /** @description array of column/field names to look up, or a single column/field name */
    columns: string | string[];
  }

  export const Operator: OperatorEnum;

  export interface OperatorEnum {
    AFTER: string;
    ALLOF: string;
    ANY: string;
    ANYOF: string;
    BEFORE: string;
    BETWEEN: string;
    CONTAINS: string;
    DOESNOTCONTAIN: string;
    DOESNOTSTARTWITH: string;
    EQUALTO: string;
    GREATERTHAN: string;
    GREATERTHANOREQUALTO: string;
    HASKEYWORDS: string;
    IS: string;
    ISEMPTY: string;
    ISNOT: string;
    ISNOTEMPTY: string;
    LESSTHAN: string;
    LESSTHANOREQUALTO: string;
    NONEOF: string;
    NOTAFTER: string;
    NOTALLOF: string;
    NOTBEFORE: string;
    NOTBETWEEN: string;
    NOTEQUALTO: string;
    NOTGREATERTHAN: string;
    NOTGREATERTHANOREQUALTO: string;
    NOTLESSTHAN: string;
    NOTLESSTHANOREQUALTO: string;
    NOTON: string;
    NOTONORAFTER: string;
    NOTONORBEFORE: string;
    NOTWITHIN: string;
    ON: string;
    ONORAFTER: string;
    ONORBEFORE: string;
    STARTSWITH: string;
    WITHIN: string;
  }

  export interface Result {
    /**
     * Record type of the result.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    recordType: string;
    /**
     * @description Record internal ID of the result.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    id: number;
    /**
     * List of columns contained in this result.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    columns: Column[];
    /**
     * Returns the value of a specified search return column. The column may be specified in two ways:
     * 1) by providing a search.Column object
     * 2) by providing name, join and summary parameters
     * @returns {string} string value of the search result column
     * @since 
     */
    getValue(options: Column | GetValueOptions);

    /**
     * Returns the UI display name (i.e. the text value) of a specified search return column.
     * Note that this method is supported on select, image and document fields only.
     * The column may be specified in two ways:
     * 1) by providing a search.Column object
     * 2) by providing name, join and summary parameters
     * @param {Column} column  search return column object whose value you want to return
     * - or -
     * @param {Object} options  the options object
     * @param {string} options.name  the name of the search column whose value you want to return
     * @param {string} options.join (optional)  the join ID for this search column
     * @param {Summary} options.summary (optional)  the summary type used for this search column
     * @returns {string} UI display name (text value) of the search result column
     * @since 
     */
    getText(options);
  }

  export interface ResultSet {
    /**
     * List of columns contained in this result set.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    columns: Column[];
    /** @description Retrieve a slice of the search result set. Only 1000 results can be returned at a time. If there are fewer results available than requested, then the array will be truncated.
     * @governance 10 units
     * @returns {Result[]} the requested slice of the search result set
     */
    getRange(options: GetRangeOptions): Result[];

    /**
     * Calls the developer-defined callback function for every result in this set. The result set processed by each()
     * may have maximum 4000 rows. The callback function has the following signature: boolean callback(result.Result
     * result); If the return value of the callback is false, the iteration over results is stopped, otherwise it
     * continues. Note that the work done in the context of the callback function counts towards the governance of the
     * script that called it.
     * @governance 10 units
     * @param {Function} callback  the function called for each result in the result set
     * @returns {undefined}
     * @since 
     */
    each(callback: (x: Result) => boolean);
  }

  export interface Search {
    /**
     * Search type.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    searchType: string;
    /**
     * Internal ID of the search.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    searchId: number;
    /**
     * Search filters.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER when setting value of different type than search.Filter
     */
    filters: Filter[];
    /**
     * Allows to set or get the search filters in the form of a search filter expression.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR when setting invalid search filter expression
     */
    filterExpression: any[];
    /**
     * Columns to be returned from the search.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN when setting value of different type than search.Column or
     *     string
     */
    columns: Column[] | string[];
    /**
     * Columns to be returned from the search.
     * @returns Setting[]|string[]
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING if an unknown setting parameter name is provided
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING_VALUE if an invalid setting parameter value is provided
     */
    settings: any;
    /**
     * Name of the saved search. Needs to be set before saving the search.
     */
    title: string;
    /**
     * Customer ID of the saved search (string starting with 'customsearch'). If not set, then it is automatically
     * generated upon save.
     */
    id: string;
    /**
     * Specifies whether the search is public or private.
     */
    isPublic: boolean;
    /**
     * Saves the current search as a saved search. Before calling save() the title property must be set. The optional
     * id property may also be set, if it's not then it's automatically generated. The title and id properties may be
     * set:
     * 1) upon creation (parameters title and id of the options object)
     * 2) by explicitly setting the properties (e.g. Search.title = 'foo'; Search.id = 'customsearch_bar'; )
     * 3) by loading a previously saved search (the properties are inherited)
     * @governance 5 units
     * @returns {number} the internal search ID of the saved search
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if title property is not set
     * @throws {SuiteScriptError} NAME_ALREADY_IN_USE if the search name (title property) is not unique
     * @throws {SuiteScriptError} SSS_DUPLICATE_SEARCH_SCRIPT_ID if the search ID (id property) is not unique
     */
    save(options): number;

    /**
     * Runs the current search.
     */
    run(): ResultSet;

    /**
     * Runs the current search with a paged interface.
     * @returns {SearchPagedData} PagedData object that allows user to page through the search result
     * @since 
     */
    runPaged(options);
  }

  export const Sort: SortEnum;

  export interface SortEnum {
    ASC: string;
    DESC: string;
    NONE: string;
  }

  export const Summary: SummaryEnum;

  export interface SummaryEnum {
    GROUP: string;
    COUNT: string;
    SUM: string;
    AVG: string;
    MIN: string;
    MAX: string;
  }

  /** @description Enumeration that holds the string values for search types supported in the N/search Module. This enum is used to pass the type argument to search.create(options). */
  export const Type: TypeEnum;

  export interface TypeEnum {
    ACCOUNT: string;
    ACCOUNTING_BOOK: string;
    ACCOUNTING_CONTEXT: string;
    ACCOUNTING_PERIOD: string;
    ADV_INTER_COMPANY_JOURNAL_ENTRY: string;
    AMORTIZATION_SCHEDULE: string;
    AMORTIZATION_TEMPLATE: string;
    ASSEMBLY_BUILD: string;
    ASSEMBLY_ITEM: string;
    ASSEMBLY_UNBUILD: string;
    BILLING_ACCOUNT: string;
    BILLING_CLASS: string;
    BILLING_RATE_CARD: string;
    BILLING_REVENUE_EVENT: string;
    BILLING_SCHEDULE: string;
    BIN: string;
    BIN_ITEM_BALANCE: string;
    BIN_TRANSFER: string;
    BIN_WORKSHEET: string;
    BLANKET_PURCHASE_ORDER: string;
    BOM: string;
    BOM_REVISION: string;
    BUDGET_EXCHANGE_RATE: string;
    BUNDLE_INSTALLATION_SCRIPT: string;
    CALENDAR_EVENT: string;
    CAMPAIGN: string;
    CASH_REFUND: string;
    CASH_SALE: string;
    CHARGE: string;
    CHARGE_RULE: string;
    CHECK: string;
    CLASSIFICATION: string;
    CLIENT_SCRIPT: string;
    CMS_CONTENT: string;
    CMS_CONTENT_TYPE: string;
    CMS_PAGE: string;
    COMMERCE_CATEGORY: string;
    COMPETITOR: string;
    COM_SEARCH_BOOST: string;
    COM_SEARCH_BOOST_TYPE: string;
    COM_SEARCH_ONE_WAY_SYN: string;
    COM_SEARCH_GROUP_SYN: string;
    CONSOLIDATED_EXCHANGE_RATE: string;
    CONTACT: string;
    CONTACT_CATEGORY: string;
    CONTACT_ROLE: string;
    COST_CATEGORY: string;
    COUPON_CODE: string;
    CREDIT_CARD_CHARGE: string;
    CREDIT_CARD_REFUND: string;
    CREDIT_MEMO: string;
    CROSSCHARGEABLE: string;
    CURRENCY: string;
    CUSTOMER: string;
    CUSTOMER_CATEGORY: string;
    CUSTOMER_DEPOSIT: string;
    CUSTOMER_MESSAGE: string;
    CUSTOMER_PAYMENT: string;
    CUSTOMER_PAYMENT_AUTHORIZATION: string;
    CUSTOMER_REFUND: string;
    CUSTOMER_STATUS: string;
    CUSTOMER_SUBSIDIARY_RELATIONSHIP: string;
    CUSTOM_RECORD: string;
    CUSTOM_TRANSACTION: string;
    DEPARTMENT: string;
    DEPOSIT: string;
    DEPOSIT_APPLICATION: string;
    DESCRIPTION_ITEM: string;
    DISCOUNT_ITEM: string;
    DOWNLOAD_ITEM: string;
    EMPLOYEE: string;
    EMPLOYEE_CHANGE_REQUEST: string;
    EMPLOYEE_CHANGE_TYPE: string;
    ENTITY_ACCOUNT_MAPPING: string;
    ESTIMATE: string;
    EXPENSE_AMORT_PLAN_AND_SCHEDULE: string;
    EXPENSE_AMORTIZATION_EVENT: string;
    EXPENSE_CATEGORY: string;
    EXPENSE_PLAN: string;
    EXPENSE_REPORT: string;
    FAIR_VALUE_PRICE: string;
    FIXED_AMOUNT_PROJECT_REVENUE_RULE: string;
    FOLDER: string;
    FULFILLMENT_REQUEST: string;
    GENERIC_RESOURCE: string;
    GIFT_CERTIFICATE: string;
    GIFT_CERTIFICATE_ITEM: string;
    GL_NUMBERING_SEQUENCE: string;
    GLOBAL_ACCOUNT_MAPPING: string;
    GLOBAL_INVENTORY_RELATIONSHIP: string;
    GOAL: string;
    INBOUND_SHIPMENT: string;
    INTER_COMPANY_JOURNAL_ENTRY: string;
    INTER_COMPANY_TRANSFER_ORDER: string;
    INVENTORY_ADJUSTMENT: string;
    INVENTORY_COST_REVALUATION: string;
    INVENTORY_COUNT: string;
    INVENTORY_DETAIL: string;
    INVENTORY_ITEM: string;
    INVENTORY_NUMBER: string;
    INVENTORY_NUMBER_ITEM: string;
    INVENTORY_STATUS: string;
    INVENTORY_STATUS_LOCATION: string;
    INVENTORY_STATUS_CHANGE: string;
    INVENTORY_TRANSFER: string;
    INVOICE: string;
    INVT_NUMBER_ITEM_BALANCE: string;
    ISSUE: string;
    ITEM_ACCOUNT_MAPPING: string;
    ITEM_BIN_NUMBER: string;
    ITEM_DEMAND_PLAN: string;
    ITEM_FULFILLMENT: string;
    ITEM_GROUP: string;
    ITEM_LOCATION_CONFIGURATION: string;
    ITEM_RECEIPT: string;
    ITEM_REVISION: string;
    ITEM_SUPPLY_PLAN: string;
    JOB: string;
    JOB_STATUS: string;
    JOB_TYPE: string;
    JOURNAL_ENTRY: string;
    KIT_ITEM: string;
    LABOR_BASED_PROJECT_REVENUE_RULE: string;
    LEAD: string;
    LOCATION: string;
    LOT_NUMBERED_ASSEMBLY_ITEM: string;
    LOT_NUMBERED_INVENTORY_ITEM: string;
    MANUFACTURING_COST_TEMPLATE: string;
    MANUFACTURING_OPERATION_TASK: string;
    MANUFACTURING_ROUTING: string;
    MAP_REDUCE_SCRIPT: string;
    MARKUP_ITEM: string;
    MASSUPDATE_SCRIPT: string;
    MERCHANDISE_HIERARCHY_LEVEL: string;
    MERCHANDISE_HIERARCHY_NODE: string;
    MERCHANDISE_HIERARCHY_VERSION: string;
    MESSAGE: string;
    MFG_PLANNED_TIME: string;
    NEXUS: string;
    NON_INVENTORY_ITEM: string;
    NOTE: string;
    NOTE_TYPE: string;
    OPPORTUNITY: string;
    OTHER_CHARGE_ITEM: string;
    OTHER_NAME: string;
    OTHER_NAME_CATEGORY: string;
    PARTNER: string;
    PARTNER_CATEGORY: string;
    PAYCHECK: string;
    PAYCHECK_JOURNAL: string;
    PAYMENT_ITEM: string;
    PAYMENT_METHOD: string;
    PAYROLL_ITEM: string;
    PERFORMANCE_REVIEW: string;
    PERFORMANCE_REVIEW_SCHEDULE: string;
    PERIOD_END_JOURNAL: string;
    PCT_COMPLETE_PROJECT_REVENUE_RULE: string;
    PHONE_CALL: string;
    PORTLET: string;
    PRICE_BOOK: string;
    PRICE_LEVEL: string;
    PRICE_PLAN: string;
    PRICING_GROUP: string;
    PROJECT_EXPENSE_TYPE: string;
    PROJECT_TASK: string;
    PROJECT_TEMPLATE: string;
    PROMOTION_CODE: string;
    PROSPECT: string;
    PURCHASE_CONTRACT: string;
    PURCHASE_ORDER: string;
    PURCHASE_REQUISITION: string;
    RESOURCE_ALLOCATION: string;
    RES_ALLOCATION_TIME_OFF_CONFLICT: string;
    RESTLET: string;
    RETURN_AUTHORIZATION: string;
    REVENUE_ARRANGEMENT: string;
    REVENUE_COMMITMENT: string;
    REVENUE_COMMITMENT_REVERSAL: string;
    REVENUE_PLAN: string;
    REV_REC_PLAN_AND_SCHEDULE: string;
    REV_REC_SCHEDULE: string;
    REV_REC_TEMPLATE: string;
    SALES_ORDER: string;
    SALES_ROLE: string;
    SALES_TAX_ITEM: string;
    SCHEDULED_SCRIPT: string;
    SCHEDULED_SCRIPT_INSTANCE: string;
    SCRIPT_DEPLOYMENT: string;
    SERIALIZED_ASSEMBLY_ITEM: string;
    SERIALIZED_INVENTORY_ITEM: string;
    SERVICE_ITEM: string;
    SHIP_ITEM: string;
    SOLUTION: string;
    STATISTICAL_JOURNAL_ENTRY: string;
    STORE_PICKUP_FULFILLMENT: string;
    SUBSCRIPTION: string;
    SUBSCRIPTION_CHANGE_ORDER: string;
    SUBSCRIPTION_LINE: string;
    SUBSCRIPTION_PLAN: string;
    SUBSIDIARY: string;
    SUBTOTAL_ITEM: string;
    SUITELET: string;
    SUPPLY_CHAIN_SNAPSHOT: string;
    SUPPLY_CHAIN_SNAPSHOT_DETAILS: string;
    SUPPORT_CASE: string;
    TASK: string;
    TAX_GROUP: string;
    TAX_PERIOD: string;
    TAX_TYPE: string;
    TERM: string;
    TIME_APPROVAL: string;
    TIME_BILL: string;
    TIME_ENTRY: string;
    TIME_OFF_CHANGE: string;
    TIME_OFF_PLAN: string;
    TIME_OFF_REQUEST: string;
    TIME_OFF_RULE: string;
    TIME_OFF_TYPE: string;
    TIME_SHEET: string;
    TIMESHEET_APPROVAL: string;
    TOPIC: string;
    TRANSFER_ORDER: string;
    UNITS_TYPE: string;
    USAGE: string;
    USEREVENT_SCRIPT: string;
    VENDOR: string;
    VENDOR_BILL: string;
    VENDOR_CATEGORY: string;
    VENDOR_CREDIT: string;
    VENDOR_PAYMENT: string;
    VENDOR_RETURN_AUTHORIZATION: string;
    VENDOR_SUBSIDIARY_RELATIONSHIP: string;
    WEBSITE: string;
    WORKFLOW_ACTION_SCRIPT: string;
    WORK_ORDER: string;
    WORK_ORDER_CLOSE: string;
    WORK_ORDER_COMPLETION: string;
    WORK_ORDER_ISSUE: string;
    WORKPLACE: string;
    FIN_RPT_AGGREGATE_F_R: string;
    AGGR_FIN_DAT: string;
    BILLING_ACCOUNT_BILL_CYCLE: string;
    BILLING_ACCOUNT_BILL_REQUEST: string;
    DELETED_RECORD: string;
    END_TO_END_TIME: string;
    GL_LINES_AUDIT_LOG: string;
    INSTALLMENT: string;
    INVENTORY_BALANCE: string;
    INVENTORY_NUMBER_BIN: string;
    PERMISSION: string;
    PRICING: string;
    RECENT_RECORD: string;
    ROLE: string;
    SAVED_SEARCH: string;
    SHOPPING_CART: string;
    SUBSCRIPTION_RENEWAL_HISTORY: string;
    SUITE_SCRIPT_DETAIL: string;
    SYSTEM_NOTE: string;
    TAX_DETAIL: string;
    UBER: string;
    ENTITY: string;
    ACTIVITY: string;
    ITEM: string;
    TRANSACTION: string;
    PAYMENT_EVENT: string;
    GATEWAY_NOTIFICATION: string;
    PAYMENT_INSTRUMENT: string;
  }
}

declare module N.search.Search {
  export function run(runable: Function);
}

declare module N.scriptContext {
  export const form: N.ui.serverWidget.Form;
  export const newRecord: N.record.Record;
  export const request: N.http.ServerRequest;
  export const type: string;
}

declare module N.suiteletContext {
  export const request: N.http.ServerRequest;
  export const response: N.http.ServerResponse;
}

declare module N.task {
  /**
 * Creates a task of the given type and returns the task object.
 *
 * @param {Object} options
 * @param {string} options.taskType specifies the type of task to be created; use values from the task.TaskType enum
 * @returns {N.task.ScheduledScriptTask | N.task.MapReduceScriptTask | N.task.CsvImportTask | N.task.EntityDeduplicationTask | N.task.WorkflowTriggerTask | N.task.SearchTask }
 */
  export function create(options: CreateOptions);

  export interface CreateOptions {
    taskType: string;
    scriptId?: any;
    deploymentId?: string;
    params?: any;
    importFile?: N.file.File | string;
    mappingId?: any;
    queueId?: number;
    name?: string;
    linkedFiles?: any;
    entityType?: string;
    masterRecordId?: number;
    masterSelectionMode?: string;
    dedupeMode?: string;
    recordIds?: number[];
    recordType?: string;
    recordId?: number;
    workflowId?: any;
    savedSearchId?: number;
    fieldId?: string;
    filePath?: string;
  }

  /**
   * Check current status of a submitted task. The task to be checked is identified by its task ID.
   *
   * @typedef task.TaskStatus
   * @property {String} status
   *
   * @param {Object} options
   * @param {string} options.taskId
   * @returns {task.TaskStatus}
   */
  export function checkStatus(options);

  export const TaskType: {
    SCHEDULED_SCRIPT: string;
    MAP_REDUCE: string;
    CSV_IMPORT: string;
    ENTITY_DEDUPLICATION: string;
    WORKFLOW_TRIGGER: string;
    SEARCH: string;
    RECORD_ACTION: string;
  };

  export const TaskStatus: {
    PENDING: string;
    PROCESSING: string;
    COMPLETE: string;
    FAILED: string;
  };

  export const MasterSelectionMode: {
    CREATED_EARLIEST: string;
    MOST_RECENT_ACTIVITY: string;
    MOST_POPULATED_FIELDS: string;
    SELECT_BY_ID: string;
  };

  export const DedupeMode: {
    MERGE: string;
    DELETE: string;
    MAKE_MASTER_PARENT: string;
    MARK_AS_NOT_DUPES: string;
  };

  export const DedupeEntityType: {
    CUSTOMER: string;
    CONTACT: string;
    VENDOR: string;
    PARTNER: string;
    LEAD: string;
    PROSPECT: string;
  };

  export const MapReduceStage: {
    GET_INPUT: string;
    MAP: string;
    SHUFFLE: string;
    REDUCE: string;
    SUMMARIZE: string;
  };

  export const ActionCondition: any;
}

declare module N.ui { }
declare module N.ui.serverWidget {
  export interface AddButtonOptions {
    /** @description the script id of button */
    id: string;
    /** @description the label of button */
    label: string;
    /** @description the function name to be triggered onClick for the button */
    functionName?: string;
  }

  export interface AddFieldOptions {
    /** @description Internal id for the field */
    id: string;
    /** @description UI label for the field */
    label: string;
    /** @description Type of the field (use ui.serverWidget.FieldType) */
    type: string;
    /** @description The internalId or scriptId of the source list for this field if it is a select (List/Record) or multi-select field */
    source?: string;
    /** @description Tab or Field Group to add the field to */
    container?: string;
  }

  export interface AddFieldGroupOptions {
    /** @description the script id for field group */
    id: string;
    /** @description the label for field group */
    label: string;
    /** @description the tab where field group should be added */
    tab?: string;
  }

  export interface AddSecretKeyFieldOptions {
    /** @description The internal ID of the secret key field. The internal ID must be in lowercase, contain no spaces, and include the prefix custpage if you are adding the field to an existing page */
    id: string;
    /** @description The script ID of the script that is allowed to use this field */
    restrictToScriptIds?: string[] | string;
    /** @description The UI label for the field */
    label: string;
    /** @description Controls whether use of this secret key is restricted to the same user that originally entered the key. By default, the value is false, which means that multiple users can use the key. If set to true, the secret key applies to a single user. */
    restrictToCurrentUser?: boolean;
    /** @description Id of the form tab or group where the key is placed */
    container?: string;
  }

  export interface Button {
    /**
     * Is the button disabled
     */
    isDisabled: boolean;
    /**
     * The label of the button
     */
    label: string;
    /**
     * Is the button hidden
     */
    isHidden: boolean;
  }

  /**
   * Instantiate a form object (specifying the title, and whether to hide the menu)
   * @restriction Server SuiteScript only
   */
  export function createForm(options: CreateFormOptions): Form;

  export interface CreateFormOptions {
    title: string;
    hideNavBar?: boolean;
  }

  export interface Field {
    /**
     * The internal id of the field.
     * @readonly
     */
    id: string;
    /**
     * The type of the field.
     * @readonly
     */
    type: string;
    /**
     * Update the breakType of the field
     * @param {Object} options
     * @param {FieldBreakType} options.breakType
     */
    updateBreakType(options): Field;

    /**
     * Update the layout type of the field
     * @param {Object} options
     * @param {FieldLayoutType} options.layoutType
     * @return {Field}
     */
    updateLayoutType(options);

    /**
     * the text that gets displayed in lieu of the field value for URL fields
     * @name Field#linkText
     * @type {string}
     */
    linkText: string;
    /**
     * The max length of the field
     * @name Field#maxLength
     * @type {number}
     */
    maxLength: string;
    /**
     * Is the field mandatory
     * @name Field#isMandatory
     * @type {boolean}
     */
    isMandatory: string;
    /**
     * The alias for the field. By default the alias is the field id
     * @name Field#alias
     * @type {string}
     */
    alias: string;
    /**
     * The default value of the field
     * @name Field#defaultValue
     * @type {string}
     */
    defaultValue: string;
    /**
     * Sets the height and width for the field. Only supported on multi-selects,
     * long text, rich text, and fields that get rendered as INPUT (type=text) fields.
     * This API is not supported on list/record fields.
     * @param {Object} options
     * @param {number} options.height
     * @param {number} options.width
     * @return {Field}
     */
    updateDisplaySize(options);

    /** @description Udpdate the field display type */
    updateDisplayType(options: UpdateDisplayTypeOptions): Field;

    /**
     * If Rich Text Editing is enabled, you can use this property
     * to set the height of the rich text field only.
     * @name Field#richTextHeight
     * @type {number}
     */
    richTextHeight: string;
    /**
     * If Rich Text Editing is enabled, you can use this property
     * to set the width of the rich text field only.
     * @name Field#richTextWidth
     * @type {number}
     */
    richTextWidth: string;
    /**
     * The label of the field
     * @name Field#label
     * @type {string}
     */
    label: string;
    /**
     * the number of empty field spaces before/above this field.
     * @name Field#padding
     * @type {number}
     */
    padding: string;
    /**
     * Get the select options for a field
     * @param {Object} options
     * @param {string} [options.filter] A search string to filter the select options that are returned.
     * @param {string} [options.filteroperator]  Supported operators are contains | is | startswith. If not specified, defaults to the contains operator
     */
    getSelectOptions(options?): { value: any, text: any }[];

    /**
     * Set help text for a field
     * @param {Object} options
     * @param {string} options.help The help text for the field
     * @param {boolean} [options.showInlineForAssistant] This means that field help will appear only in a field help popup box when the field label is clicked
     */
    setHelpText(options);

    /**
     * Add a select option to a select field
     * @param {Object} options
     * @param {string} options.value The internal id of the option
     * @param {string} options.text  The display text for this option
     * @param {boolean} [options.isSelected] If true, this option is selected
     */
    addSelectOption(options);
  }

  export const FieldBreakType: {
    NONE: 'NONE';
    STARTCOL: 'STARTCOL';
    STARTROW: 'STARTROW';
  };

  export const FieldDisplayType: {
    NORMAL: string;
    HIDDEN: string;
    READONLY: string;
    DISABLED: string;
    ENTRY: string;
    INLINE: string;
  }

  export const FieldLayoutType: {
    NORMAL: string;
    OUTSIDE: string;
    OUTSIDEBELOW: string;
    OUTSIDEABOVE: string;
    STARTROW: string;
    MIDROW: string;
    ENDROW: string;
  }

  export const FieldType: {
    TEXT: string;
    RADIO: string;
    LABEL: string;
    EMAIL: string;
    PHONE: string;
    DATE: string;
    DATETIME: string;
    DATETIMETZ: string;
    CURRENCY: string;
    FLOAT: string;
    INTEGER: string;
    CHECKBOX: string;
    SELECT: string;
    URL: string;
    TIMEOFDAY: string;
    TEXTAREA: string;
    MULTISELECT: string;
    IMAGE: string;
    INLINEHTML: string;
    PASSWORD: string;
    HELP: string;
    PERCENT: string;
    LONGTEXT: string;
    RICHTEXT: string;
    FILE: string;
  };
  export interface Form {
    /**
     * The form title
     * @name Form#title
     * @type {string}
     */
    title: string;
    /**
     * This method is called during a beforeLoad UE or a suitelet and the message is later displayed on the client side,
     * once the pageInit script is completed. The method takes either an already created Message object or the options
     * object that would be used for creating the message.
     * @param {Object} options
     * @param {message.Message} options.message the message object to be displayed in browser
     * -- or --
     * @param {Object} options the message options object as described in N/ui/message: create()
     */
    addPageInitMessage(options);

    /**
     * Adds a button to the ui form
     * @returns {Button}
     */
    addButton(options: AddButtonOptions);

    /**
     * add a credential field to the ui form
     *
     * @param {Object} options
     * @param {string} options.id the script id of field
     * @param {string} options.label the label of field
     * @param {string[]|string} options.restrictToDomains  List of domains that restrict the destination domains for the credential
     * @param {string[]|string} options.restrictToScriptIds  List of scripts where the credential can be used
     * @param {boolean} [options.restrictToCurrentUser=false] Restrict the use of this credential to the user that creates is
     * @param {string} [options.container]  Id of the form tab where the credential is placed
     * @returns {Field}
     */
    addCredentialField(options);

    /** @description add a secret key field to the ui form */
    addSecretKeyField(options: AddSecretKeyFieldOptions): Field;

    /** @description Add a field to the form */
    addField(options: AddFieldOptions): Field;

    /**
     * Add a field group to the form
     *
     * @return {FieldGroup}
     */
    addFieldGroup(options: AddFieldGroupOptions);

    /**
     * Add a link to the form
     * @param {Object} options
     * @param {string} options.type  The type of link
     * @param {string} options.title  The UI label for the linl
     * @param {string} options.url  The URL the link navigates to
     */
    addPageLink(options);

    /**
     * Add a Sublist to the form
     * @param {Object} options
     * @param {string} options.id  The internal id for the sublist
     * @param {string} options.label The ui label for the sublist
     * @param {string} options.type  The type of sublist
     * @param {string} [options.tab] The id of the tab where to add the sublist to
     * @return {Sublist}
     */
    addSublist(options): Sublist;

    /**
     * Add a Subtab to the form
     * @param {Object} options
     * @param {string} options.id  The internal id for the sub tab
     * @param {string} options.label The UI label for the sub tab
     * @param {string} [options.tab] The tab under which to display this subtab. If empty, it is added to the main tab.
     * @return {Tab}
     */
    addSubtab(options);

    /**
     * Add a Tab to the form
     * @param {Object} options
     * @param {string} options.id  The internal id for the Tab
     * @param {string} options.label The UI label for the tab
     * @return {Tab}
     */
    addTab(options);

    /**
     * Add a Reset button to the form
     * @param {Object} [options]
     * @param {string} [options.label]  The UI label used for this button. If no label is provided, the label defaults to Reset.
     * @return {Button}
     */
    addResetButton(options);

    /**
     * Add a Submit button to the form
     * @param {Object} [options]
     * @param {string} [options.label] The UI label for this button. If no label is provided, the label defaults to Save.
     * @return {Button}
     */
    addSubmitButton(options?);

    /**
     * Get a Button object from its id
     * @param {Object} options
     * @param {string} options.id The id of the button to get
     * @return {Button}
     */
    getButton(options);

    /**
     * Get a Field object from its id
     */
    getField(options: GetFieldOptions): Field;

    /**
     * Get a Subtab object from its id
     * @param {Object} options
     * @param {string} options.id  The id for the Tab to get
     * @return {Tab}
     */
    getSubtab(options);

    /**
     * Get a Subtab object from its id
     * @param {Object} options
     * @param {string} options.id  The id for the Tab to get
     * @return {Tab}
     */
    getTab(options);

    /**
     * Get all the Tab objects
     * @return {Tab[]}
     */
    getTabs();

    /**
     * Get a Sublist object from its id
     * @param {Object} options
     * @param {string} options.id The id for the Sublist to get
     */
    getSublist(options): Sublist;

    /**
     * Insert a field before another field
     * @param {Object} options
     * @param {Field} options.field The field to insert
     * @param {string} options.nextfield  Id of the field to insert before
     */
    insertField(options);

    /**
     * Insert a sublist before another sublist
     * @param {Object} options
     * @param {Sublist} options.sublist   Sublist to insert
     * @param {string} options.nextsublist  Id of the sublist to insert before
     */
    insertSublist(options);

    /**
     * Insert a subtab before another sublist
     * @param {Object} options
     * @param {Subtab} options.subtab   Subtab to insert
     * @param {string} options.nextsub The id of the sublist/subtab you are inserting in front of
     */
    insertSubtab(options);

    /**
     * Insert a Tab before another tab
     * @param {Object} options
     * @param {Tab} options.tab Tab to insert
     * @param {string} options.nexttab    Id of the tab to insert before
     */
    insertTab(options);

    /**
     * Remove a button given its id
     * @param {Object} options
     * @param {string} options.id   Id of the button to remove
     */
    removeButton(options);

    /**
     * Set the default values of many fields at once
     * @param {Object[]} values
     */
    updateDefaultValues(options);

    /**
     * The script file id to be used in the form
     * @name Form#clientScriptFileId
     * @type {number}
     */
    clientScriptFileId: string;
  }

  export interface GetFieldOptions {
    /** @description The id for the field to get */
    id: string;
  }

  /** @description Encalsulates a Sublist in a Form or a serverWidget.Assistant */
  export interface Sublist {
    /**
     * The label of the field group
     */
    label: string;
    /**
     * The number of lines in the Sublist.
     * @readonly
     */
    lineCount: string;
    /**
     * Set an id of a field that is to have unique values accross the rows in the sublist
     *
     * @param {Object} options
     * @param {string} options.id The id of the field to use as a unique field
     */
    updateUniqueFieldId(options): Sublist;

    /**
     * Id of a field designated as a totalling column, which is used to calculate and display a running total for the sublist
     *
     * @param {Object} options
     * @param {string} options.id The id of the field to use as a total field
     */
    updateTotallingFieldId(options): Sublist;

    /**
     * Display type of the sublist.  Possible values are in serverWidget.SublistDisplayType
     */
    displayType: string;
    /**
     * Inline help text to this sublist.
     */
    helpText: string;
    /**
     * Adds a button to the sublist
     *
     * @param {Object} options
     * @param {string} options.id the script id of button
     * @param {string} options.label the label of button
     * @param {string} [options.functionName] the function name to be triggered onClick for the button
     */
    addButton(options): Button;

    /**
     * Returns string value of a sublist field.
     */
    getSublistValue(options: GetSublistValueOptions): string;

    /**
     * Set the value of a field on the list
     */
    setSublistValue(options: SetSublistValueOptions);

    /**
     * Adds refresh all buttons to the sublist
     */
    addRefreshButton(): Button;

    /**
     * Adds a "Mark All" and an "Unmark All" button to a sublist.
     */
    addMarkAllButtons(): Button[];

    /**
     * Add a field, column,  to the Sublist
     * @param {Object} options
     * @param {string} options.id    id of the filed to add
     * @param {string} options.label the UI label for the field
     * @param {string} options.type  the type for this field
     * @param {string} [options.source] The internal id of the source list for this field if the field is a select
     * @param {string} [options.container] Used to specify either a tab or a field group
     * @returns {Field}
     */
    addField(options): Field;

    /**
     * Gets field from sublist
     * @param {Object} options
     * @param {string} options.id    id of the field to get
     */
    getField(options: { id: string }): Field;
  }

  export const SublistType: {
    INLINEEDITOR: string;
    EDITOR: string;
    LIST: string;
    STATICLIST: string;
  }

  export interface GetSublistValueOptions {
    id: string;
    line: number;
  }

  export interface SetSublistValueOptions {
    id: string;
    line: number;
    value: string;
  }

  export const SublistDisplayType: {
    HIDDEN: string;
    NORMAL: string;
  }

  export interface UpdateDisplayTypeOptions {
    displayType: string
  }
}

declare module N.url {
  export function resolveRecord(options: ResolveRecordOptions): string;
  export interface ResolveRecordOptions {
    recordType: string;
    recordId: string;
    isEditMode: boolean;
    params?: any;
  }

  /**
   *
   * @param {Object} options
   * @param {string} options.id
   * @param {Map} options.params (optional) url parameters
   *
   * @return {String} url
   */
  export function resolveTaskLink(options);

  export function resolveScript(options: ResolveScriptOptions): string;

  export interface ResolveScriptOptions {
    scriptId: string;
    deploymentId: string;
    returnExternalUrl?: boolean;
    /** @description Per url.format({query */
    params?: Object;
  }

  /**
   * @param {Object} options
   * @param {string} options.hostType
   * @param {string} options.accountId
   *
   * @return {String} domain
   */
  export function resolveDomain(options);

  /**
   * @param {Object} options
   * @param {string} options.domain
   * @param {Object} options.params query string data parameters as an object
   *
   * @return {String} url
   */
  export function format(options);
}

declare module N.xml {
  /** @description Encapsulation of W3C DOM Document */
  export interface Document {
    /**
     * @description Attempts to adopt a node from another document to this document. If supported, it changes the ownerDocument
     * of the source node, its children, as well as the attached attribute nodes if there are any. If the source
     * node has a parent it is first removed from the child list of its parent.
     *
     * @param {Node} options.source the node to move into this document
     * @returns {Node} the adopted node, or null if this operation fails, such as when the source node comes from a different implementation
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the node cannot be adopted for some reason
     */
    adoptNode(options);

    /**
     * Creates an attribute node of the given name.
     *
     * @param {string} options.name the name of the attribute
     * @param {string} options.value (optional) the value of the attribute; if omitted, the value of the attribute will be empty string
     * @returns {Attr} new attribute node object with name and attribute value set as expected and localName, prefix, and namespaceURI set to null
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be created
     */
    createAttribute(options);

    /**
     * Creates an attribute of the given qualified name and namespace URI.
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to create; can be null
     * @param {string} options.qualifiedName the qualified name of the attribute to instantiate
     * @param {string} options.value (optional) the value of the attribute; if omitted, the value of the attribute will be empty string
     * @returns {Attr} new attribute node object with name, attribute value, namespaceURI, prefix and localName set accordingly
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be created
     */
    createAttributeNS(options);

    /**
     * Creates a CDATASection node whose value is the specified string.
     *
     * @param {string} options.data the data for the CDATASection contents
     * @returns {Node} the new CDATASection node
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the CDATASection node cannot be created
     */
    createCDATASection(options);

    /**
     * Creates a Comment node given the specified string.
     *
     * @param {string} options.data the data for the node
     * @returns {Node} the new Comment node
     */
    createComment(options);

    /**
     * Creates an empty DocumentFragment object.
     *
     * @returns {Node} a new DocumentFragment
     */
    createDocumentFragment();

    /**
     * Creates an element of the type specified.
     *
     * @param {string} options.tagName the name of the element type to instantiate; for XML, this is case-sensitive
     * @returns {Element} a new Element object with the nodeName attribute set to tagName, and localName, prefix, and namespaceURI set to null
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the Element node cannot be created
     */
    createElement(options);

    /**
     * Creates an element of the given qualified name and namespace URI.
     *
     * @param {string} options.namespaceURI the namespace URI of the element to create; can be null
     * @param {string} options.qualifiedName the qualified name of the element type to instantiate
     * @returns {Element} a new Element object with the nodeName, localName, prefix, and namespaceURI set accordingly
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the Element node cannot be created
     */
    createElementNS(options);

    /**
     * Creates a ProcessingInstruction node given the specified name and data strings.
     *
     * @param {string} options.target the target part of the processing instruction
     * @param {string} options.data the data for the node
     * @returns {Node} the new ProcessingInstruction object
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the ProcessingInstruction node cannot be created
     */
    createProcessingInstruction(options);

    /**
     * Creates a Text node given the specified string.
     *
     * @param {string} options.data the data for the node
     * @returns {Node} the new Text node
     */
    createTextNode(options);

    /**
     * Returns the Element that has an ID attribute with the given value. If no such element exists, this returns null.
     *
     * @param {string} options.elementId the unique id value for an element
     * @returns {Element} the matching Element or null if there is none
     */
    getElementById(options);

    /**
     * Returns an array of all the Elements with a given tag name in document order.
     *
     * @param {string} options.tagName the name of the tag to match on; the special value "*" matches all tags; for XML, the tagName parameter is case-sensitive
     * @returns {Element[]} an array containing all the matched Elements
     */
    getElementsByTagName(options);

    /**
     * Returns an array of all the Elements with a given local name and namespace URI in document order.
     *
     * @param {string} options.namespaceURI the namespace URI of the elements to match on; the special value "*" matches all namespaces
     * @param {string} options.localName the local name of the elements to match on; the special value "*" matches all local names
     * @returns {Element[]} an array containing all the matched Elements
     */
    getElementsByTagNameNS(options);

    /**
     * Imports a node from another document to this document, without altering or removing the source node from the original document;
     * this method creates a new copy of the source node.
     *
     * @param {Node} options.importedNode the node to import
     * @param {boolean} options.deep if true, recursively import the subtree under the specified node; if false, import only the node itself, as explained above
     * @returns {Node} the imported node that belongs to this Document
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the node cannot be imported for some reason
     */
    importNode(options);

    /**
     * The Document Type Declaration associated with this document.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    doctype: Object;
    /**
     * This is a convenience attribute that allows direct access to the child node that is the document element of the document.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    documentElement: Element;
    /**
     * The location of the document or null if undefined.
     */
    documentURI: string;
    /**
     * An attribute specifying the encoding used for this document at the time of the parsing.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    inputEncoding: string;
    /**
     * An attribute specifying, as part of the XML declaration, the encoding of this document.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    xmlEncoding: string;
    /**
     * An attribute specifying, as part of the XML declaration, whether this document is standalone. This is false when unspecified.
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the property cannot be set
     */
    xmlStandalone: boolean;
    /**
     * An attribute specifying, as part of the XML declaration, the version number of this document.
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the property cannot be set
     */
    xmlVersion: string;
  }

  /**
   * @description Prepares a String for use in XML by escaping XML markup (for example, angle brackets, quotation marks, and ampersands).
   * @returns {string} the escaped XML
   */
  export function escape(options: EscapeOptions): string;

  export interface EscapeOptions {
    /** @description the XML text to be escaped */
    xmlText: string
  }

  /** @description Encapsulation of W3C DOM Node */
  export interface Node {
    /**
     * Adds the node newChild to the end of the list of children of this node. If the newChild is already in the tree, it is first removed.
     *
     * @param {Node} options.newChild the node to add
     * @returns {Node} the node added
     * @throws {SuiteScriptError} SSS_DOM_EXCEPTION if node cannot be appended for some reason
     */
    appendChild(options);

    /**
     * Returns a duplicate of this node, i.e., serves as a generic copy constructor for nodes. The duplicate node has no parent.
     *
     * @param {boolean} options.deep if true, recursively clone the subtree under the specified node; if false, clone only the node itself (and its attributes, if it is an Element)
     * @returns {Node} the duplicate node
     */
    cloneNode(options);

    /**
     * Compares the reference node, i.e. the node on which this method is being called, with a node, i.e. the one passed as a parameter,
     * with regard to their position in the document and according to the document order.
     *
     * @param {Node} options.other the node to compare against the reference node
     * @returns {int} how the node is positioned relatively to the reference node
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION when the nodes cannot be compared
     */
    compareDocumentPosition(options);

    /**
     * Returns whether this node (if it is an Element) has any attributes.
     *
     * @returns {boolean} true if this node has any attributes, false otherwise
     */
    hasAttributes();

    /**
     * Returns whether this node has any children.
     *
     * @returns {boolean} true if this node has any children, false otherwise
     */
    hasChildNodes();

    /**
     * Inserts the node newChild before the existing child node refChild. If refChild is null, insert newChild at the end of the list of children.
     * If the newChild is already in the tree, it is first removed.
     *
     * @param {Node} options.newChild the node to insert
     * @param {Node} options.refChild the reference node, i.e., the node before which the new node will be inserted
     * @returns {Node} the node being inserted
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be inserted for some reason
     */
    insertBefore(options);

    /**
     * This method checks if the specified namespaceURI is the default namespace or not.
     *
     * @param {string} options.namespaceURI the namespace URI to look for
     * @returns {boolean} true if the specified namespaceURI is the default namespace, false otherwise
     */
    isDefaultNamespace(options);

    /**
     * Tests whether two nodes are equal.
     * This method tests for equality of nodes, not sameness (i.e., whether the two nodes are references to the same object) which can be tested
     * with Node.isSameNode(). All nodes that are the same will also be equal, though the reverse may not be true.
     * Two nodes are equal if and only if the following conditions are satisfied:
     * - The two nodes are of the same type.
     * - The following string attributes are equal: nodeName, localName, namespaceURI, prefix, nodeValue
     * - The attributes maps are equal
     * - The childNodes lists are equal
     *
     * @param {Node} options.other the node to compare equality with
     * @returns {boolean} true if the nodes are equal, false otherwise
     */
    isEqualNode(options);

    /**
     * Returns whether this node is the same node as the given one.
     * This method provides a way to determine whether two Node references returned by the implementation reference the same object.
     * When two Node references are references to the same object, even if through a proxy, the references may be used completely interchangeably,
     * such that all attributes have the same values and calling the same DOM method on either reference always has exactly the same effect.
     *
     * @param {Node} options.other the node to test against
     * @returns {boolean} true if the nodes are the same, false otherwise
     */
    isSameNode(options);

    /**
     * Look up the namespace URI associated to the given prefix, starting from this node.
     *
     * @param {string} options.prefix the prefix to look for; if this parameter is null, the method will return the default namespace URI if any
     * @returns {string} the associated namespace URI or null if none is found
     */
    lookupNamespaceURI(options);

    /**
     * Look up the prefix associated to the given namespace URI, starting from this node. The default namespace declarations are ignored by this method.
     *
     * @param {string} options.namespaceURI the namespace URI to look for
     * @returns {string} an associated namespace prefix if found or null if none is found; if more than one prefix are associated to the namespace prefix, the returned namespace prefix is implementation dependent
     */
    lookupPrefix(options);

    /**
     * Puts all Text nodes in the full depth of the sub-tree underneath this Node, including attribute nodes, into a "normal" form
     * where only structure (e.g., elements, comments, processing instructions, CDATA sections, and entity references) separates
     * Text nodes, i.e., there are neither adjacent Text nodes nor empty Text nodes.
     *
     * @returns {void}
     */
    normalize();

    /**
     * Removes the child node indicated by oldChild from the list of children, and returns it.
     *
     * @param {Node} options.oldChild the node being removed
     * @returns {Node} the node removed
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be removed for some reason
     */
    removeChild(options);

    /**
     * Replaces the child node oldChild with newChild in the list of children, and returns the oldChild node.
     * If the newChild is already in the tree, it is first removed.
     *
     * @param {Node} options.newChild the new node to put in the child list
     * @param {Node} options.oldChild the node being replaced in the list
     * @returns {Node} the node replaced
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be replaced for some reason
     */
    replaceChild(options);

    /**
     * A map of key/value (string->Attr) pairs containing the attributes of this node (if it is an Element) or null otherwise.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    attributes: Object;
    /**
     * The absolute base URI of this node or null if the implementation wasn't able to obtain an absolute URI.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    baseURI: string;
    /**
     * An array of all children of this node. If there are no children, this is an empty array.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    childNodes: Node[];
    /**
     * The first child of this node or null if there is no such node.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    firstChild: Node;
    /**
     * The last child of this node or null if there is no such node.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    lastChild: Node;
    /**
     * The local part of the qualified name of this node.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    localName: string;
    /**
     * The namespace URI of this node, or null if it is unspecified.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    namespaceURI: string;
    /**
     * The node immediately following this node or null if there is no such node.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    nextSibling: Node;
    /**
     * The name of this node, depending on its type.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    nodeName: string;
    /**
     * The type of node as an enum. See xml.NodeType.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    nodeType: string;

    /**
     * The value of this node, depending on its type. When it is defined to be null, setting it has no effect, including if the node is read-only.
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to get or set the property value
     */
    nodeValue: string;
    /**
     * The Document object associated with this node. This is also the Document object used to create new nodes.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    ownerDocument: Document;
    /**
     * The parent of this node. All nodes, except Attr, Document, DocumentFragment, Entity, and Notation may have a parent.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    parentNode: Node;
    /**
     * The namespace prefix of this node, or null if it is unspecified. When it is defined to be null, setting it has no effect, including if the node is read-only.
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to set the property value
     */
    prefix: string;
    /**
     * The node immediately preceding this node or null if there is no such node.
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    previousSibling: Node;
    /**
     * This attribute returns the text content of this node and its descendants. When it is defined to be null, setting it has no effect.
     * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to get or set the property value
     */
    textContent: string;
  }
}

declare module N.xml.Parser {
  /**
   * @description Generate XML Document object from a string.
   * @returns {N.xml.Document}
   */
  export function fromString(options: FromStringOptions): Document;

  export interface FromStringOptions {
    /** @description XML text */
    text: string;
  }
}

declare module N.xml.XPath {
  export function select(options: SelectOptions): Node[];

  export interface SelectOptions {
    /** @description an XPath expression */
    xpath: string;
    /** @description XML node being queried */
    node: Node | Document;
  }
}
