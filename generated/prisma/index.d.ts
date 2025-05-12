
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model College
 * 
 */
export type College = $Result.DefaultSelection<Prisma.$CollegePayload>
/**
 * Model UserCollege
 * 
 */
export type UserCollege = $Result.DefaultSelection<Prisma.$UserCollegePayload>
/**
 * Model CollegeEmailDomain
 * 
 */
export type CollegeEmailDomain = $Result.DefaultSelection<Prisma.$CollegeEmailDomainPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectUpvote
 * 
 */
export type ProjectUpvote = $Result.DefaultSelection<Prisma.$ProjectUpvotePayload>
/**
 * Model ProjectCollaborator
 * 
 */
export type ProjectCollaborator = $Result.DefaultSelection<Prisma.$ProjectCollaboratorPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model ProjectTag
 * 
 */
export type ProjectTag = $Result.DefaultSelection<Prisma.$ProjectTagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  STUDENT: 'STUDENT',
  FACULTY: 'FACULTY',
  GENERAL: 'GENERAL'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const ProjectUserRole: {
  OWNER: 'OWNER',
  MEMBER: 'MEMBER',
  VIEWER: 'VIEWER'
};

export type ProjectUserRole = (typeof ProjectUserRole)[keyof typeof ProjectUserRole]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type ProjectUserRole = $Enums.ProjectUserRole

export const ProjectUserRole: typeof $Enums.ProjectUserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.college`: Exposes CRUD operations for the **College** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colleges
    * const colleges = await prisma.college.findMany()
    * ```
    */
  get college(): Prisma.CollegeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCollege`: Exposes CRUD operations for the **UserCollege** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserColleges
    * const userColleges = await prisma.userCollege.findMany()
    * ```
    */
  get userCollege(): Prisma.UserCollegeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collegeEmailDomain`: Exposes CRUD operations for the **CollegeEmailDomain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollegeEmailDomains
    * const collegeEmailDomains = await prisma.collegeEmailDomain.findMany()
    * ```
    */
  get collegeEmailDomain(): Prisma.CollegeEmailDomainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectUpvote`: Exposes CRUD operations for the **ProjectUpvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectUpvotes
    * const projectUpvotes = await prisma.projectUpvote.findMany()
    * ```
    */
  get projectUpvote(): Prisma.ProjectUpvoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectCollaborator`: Exposes CRUD operations for the **ProjectCollaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectCollaborators
    * const projectCollaborators = await prisma.projectCollaborator.findMany()
    * ```
    */
  get projectCollaborator(): Prisma.ProjectCollaboratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectTag`: Exposes CRUD operations for the **ProjectTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTags
    * const projectTags = await prisma.projectTag.findMany()
    * ```
    */
  get projectTag(): Prisma.ProjectTagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    College: 'College',
    UserCollege: 'UserCollege',
    CollegeEmailDomain: 'CollegeEmailDomain',
    Project: 'Project',
    ProjectUpvote: 'ProjectUpvote',
    ProjectCollaborator: 'ProjectCollaborator',
    Tag: 'Tag',
    ProjectTag: 'ProjectTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "college" | "userCollege" | "collegeEmailDomain" | "project" | "projectUpvote" | "projectCollaborator" | "tag" | "projectTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      College: {
        payload: Prisma.$CollegePayload<ExtArgs>
        fields: Prisma.CollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findFirst: {
            args: Prisma.CollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findMany: {
            args: Prisma.CollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          create: {
            args: Prisma.CollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          createMany: {
            args: Prisma.CollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          delete: {
            args: Prisma.CollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          update: {
            args: Prisma.CollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          deleteMany: {
            args: Prisma.CollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          upsert: {
            args: Prisma.CollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          aggregate: {
            args: Prisma.CollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollege>
          }
          groupBy: {
            args: Prisma.CollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeCountAggregateOutputType> | number
          }
        }
      }
      UserCollege: {
        payload: Prisma.$UserCollegePayload<ExtArgs>
        fields: Prisma.UserCollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollegePayload>
          }
          findFirst: {
            args: Prisma.UserCollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollegePayload>
          }
          findMany: {
            args: Prisma.UserCollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollegePayload>[]
          }
          create: {
            args: Prisma.UserCollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollegePayload>
          }
          createMany: {
            args: Prisma.UserCollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollegePayload>[]
          }
          delete: {
            args: Prisma.UserCollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollegePayload>
          }
          update: {
            args: Prisma.UserCollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollegePayload>
          }
          deleteMany: {
            args: Prisma.UserCollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollegePayload>[]
          }
          upsert: {
            args: Prisma.UserCollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollegePayload>
          }
          aggregate: {
            args: Prisma.UserCollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCollege>
          }
          groupBy: {
            args: Prisma.UserCollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCollegeCountArgs<ExtArgs>
            result: $Utils.Optional<UserCollegeCountAggregateOutputType> | number
          }
        }
      }
      CollegeEmailDomain: {
        payload: Prisma.$CollegeEmailDomainPayload<ExtArgs>
        fields: Prisma.CollegeEmailDomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeEmailDomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeEmailDomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeEmailDomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeEmailDomainPayload>
          }
          findFirst: {
            args: Prisma.CollegeEmailDomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeEmailDomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeEmailDomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeEmailDomainPayload>
          }
          findMany: {
            args: Prisma.CollegeEmailDomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeEmailDomainPayload>[]
          }
          create: {
            args: Prisma.CollegeEmailDomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeEmailDomainPayload>
          }
          createMany: {
            args: Prisma.CollegeEmailDomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeEmailDomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeEmailDomainPayload>[]
          }
          delete: {
            args: Prisma.CollegeEmailDomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeEmailDomainPayload>
          }
          update: {
            args: Prisma.CollegeEmailDomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeEmailDomainPayload>
          }
          deleteMany: {
            args: Prisma.CollegeEmailDomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeEmailDomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeEmailDomainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeEmailDomainPayload>[]
          }
          upsert: {
            args: Prisma.CollegeEmailDomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeEmailDomainPayload>
          }
          aggregate: {
            args: Prisma.CollegeEmailDomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollegeEmailDomain>
          }
          groupBy: {
            args: Prisma.CollegeEmailDomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeEmailDomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeEmailDomainCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeEmailDomainCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectUpvote: {
        payload: Prisma.$ProjectUpvotePayload<ExtArgs>
        fields: Prisma.ProjectUpvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectUpvoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUpvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectUpvoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUpvotePayload>
          }
          findFirst: {
            args: Prisma.ProjectUpvoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUpvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectUpvoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUpvotePayload>
          }
          findMany: {
            args: Prisma.ProjectUpvoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUpvotePayload>[]
          }
          create: {
            args: Prisma.ProjectUpvoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUpvotePayload>
          }
          createMany: {
            args: Prisma.ProjectUpvoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectUpvoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUpvotePayload>[]
          }
          delete: {
            args: Prisma.ProjectUpvoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUpvotePayload>
          }
          update: {
            args: Prisma.ProjectUpvoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUpvotePayload>
          }
          deleteMany: {
            args: Prisma.ProjectUpvoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpvoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpvoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUpvotePayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpvoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUpvotePayload>
          }
          aggregate: {
            args: Prisma.ProjectUpvoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectUpvote>
          }
          groupBy: {
            args: Prisma.ProjectUpvoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectUpvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectUpvoteCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectUpvoteCountAggregateOutputType> | number
          }
        }
      }
      ProjectCollaborator: {
        payload: Prisma.$ProjectCollaboratorPayload<ExtArgs>
        fields: Prisma.ProjectCollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectCollaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectCollaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          findFirst: {
            args: Prisma.ProjectCollaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectCollaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          findMany: {
            args: Prisma.ProjectCollaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>[]
          }
          create: {
            args: Prisma.ProjectCollaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          createMany: {
            args: Prisma.ProjectCollaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCollaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>[]
          }
          delete: {
            args: Prisma.ProjectCollaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          update: {
            args: Prisma.ProjectCollaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.ProjectCollaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectCollaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectCollaboratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>[]
          }
          upsert: {
            args: Prisma.ProjectCollaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCollaboratorPayload>
          }
          aggregate: {
            args: Prisma.ProjectCollaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectCollaborator>
          }
          groupBy: {
            args: Prisma.ProjectCollaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectCollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCollaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCollaboratorCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      ProjectTag: {
        payload: Prisma.$ProjectTagPayload<ExtArgs>
        fields: Prisma.ProjectTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          findFirst: {
            args: Prisma.ProjectTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          findMany: {
            args: Prisma.ProjectTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>[]
          }
          create: {
            args: Prisma.ProjectTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          createMany: {
            args: Prisma.ProjectTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>[]
          }
          delete: {
            args: Prisma.ProjectTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          update: {
            args: Prisma.ProjectTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>[]
          }
          upsert: {
            args: Prisma.ProjectTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          aggregate: {
            args: Prisma.ProjectTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTag>
          }
          groupBy: {
            args: Prisma.ProjectTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTagCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    college?: CollegeOmit
    userCollege?: UserCollegeOmit
    collegeEmailDomain?: CollegeEmailDomainOmit
    project?: ProjectOmit
    projectUpvote?: ProjectUpvoteOmit
    projectCollaborator?: ProjectCollaboratorOmit
    tag?: TagOmit
    projectTag?: ProjectTagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userColleges: number
    projectUpvotes: number
    ProjectCollaborator: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userColleges?: boolean | UserCountOutputTypeCountUserCollegesArgs
    projectUpvotes?: boolean | UserCountOutputTypeCountProjectUpvotesArgs
    ProjectCollaborator?: boolean | UserCountOutputTypeCountProjectCollaboratorArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCollegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCollegeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectUpvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectUpvoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectCollaboratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCollaboratorWhereInput
  }


  /**
   * Count Type CollegeCountOutputType
   */

  export type CollegeCountOutputType = {
    userColleges: number
    projects: number
    emailDomains: number
  }

  export type CollegeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userColleges?: boolean | CollegeCountOutputTypeCountUserCollegesArgs
    projects?: boolean | CollegeCountOutputTypeCountProjectsArgs
    emailDomains?: boolean | CollegeCountOutputTypeCountEmailDomainsArgs
  }

  // Custom InputTypes
  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCountOutputType
     */
    select?: CollegeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountUserCollegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCollegeWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountEmailDomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeEmailDomainWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    upvotes: number
    collaborators: number
    tags: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upvotes?: boolean | ProjectCountOutputTypeCountUpvotesArgs
    collaborators?: boolean | ProjectCountOutputTypeCountCollaboratorsArgs
    tags?: boolean | ProjectCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUpvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectUpvoteWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCollaboratorWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    projects: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | TagCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    username: string | null
    email: string | null
    avatarUrl: string | null
    isSuperAdmin: boolean | null
    githubUsername: string | null
    createdAt: Date | null
    websiteUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    username: string | null
    email: string | null
    avatarUrl: string | null
    isSuperAdmin: boolean | null
    githubUsername: string | null
    createdAt: Date | null
    websiteUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    middleName: number
    lastName: number
    username: number
    email: number
    avatarUrl: number
    isSuperAdmin: number
    githubUsername: number
    createdAt: number
    websiteUrl: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    username?: true
    email?: true
    avatarUrl?: true
    isSuperAdmin?: true
    githubUsername?: true
    createdAt?: true
    websiteUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    username?: true
    email?: true
    avatarUrl?: true
    isSuperAdmin?: true
    githubUsername?: true
    createdAt?: true
    websiteUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    username?: true
    email?: true
    avatarUrl?: true
    isSuperAdmin?: true
    githubUsername?: true
    createdAt?: true
    websiteUrl?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    middleName: string | null
    lastName: string | null
    username: string
    email: string
    avatarUrl: string | null
    isSuperAdmin: boolean
    githubUsername: string | null
    createdAt: Date
    websiteUrl: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    username?: boolean
    email?: boolean
    avatarUrl?: boolean
    isSuperAdmin?: boolean
    githubUsername?: boolean
    createdAt?: boolean
    websiteUrl?: boolean
    userColleges?: boolean | User$userCollegesArgs<ExtArgs>
    projectUpvotes?: boolean | User$projectUpvotesArgs<ExtArgs>
    ProjectCollaborator?: boolean | User$ProjectCollaboratorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    username?: boolean
    email?: boolean
    avatarUrl?: boolean
    isSuperAdmin?: boolean
    githubUsername?: boolean
    createdAt?: boolean
    websiteUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    username?: boolean
    email?: boolean
    avatarUrl?: boolean
    isSuperAdmin?: boolean
    githubUsername?: boolean
    createdAt?: boolean
    websiteUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    username?: boolean
    email?: boolean
    avatarUrl?: boolean
    isSuperAdmin?: boolean
    githubUsername?: boolean
    createdAt?: boolean
    websiteUrl?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "middleName" | "lastName" | "username" | "email" | "avatarUrl" | "isSuperAdmin" | "githubUsername" | "createdAt" | "websiteUrl", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userColleges?: boolean | User$userCollegesArgs<ExtArgs>
    projectUpvotes?: boolean | User$projectUpvotesArgs<ExtArgs>
    ProjectCollaborator?: boolean | User$ProjectCollaboratorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userColleges: Prisma.$UserCollegePayload<ExtArgs>[]
      projectUpvotes: Prisma.$ProjectUpvotePayload<ExtArgs>[]
      ProjectCollaborator: Prisma.$ProjectCollaboratorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      middleName: string | null
      lastName: string | null
      username: string
      email: string
      avatarUrl: string | null
      isSuperAdmin: boolean
      githubUsername: string | null
      createdAt: Date
      websiteUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userColleges<T extends User$userCollegesArgs<ExtArgs> = {}>(args?: Subset<T, User$userCollegesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectUpvotes<T extends User$projectUpvotesArgs<ExtArgs> = {}>(args?: Subset<T, User$projectUpvotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProjectCollaborator<T extends User$ProjectCollaboratorArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectCollaboratorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly isSuperAdmin: FieldRef<"User", 'Boolean'>
    readonly githubUsername: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly websiteUrl: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userColleges
   */
  export type User$userCollegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
    where?: UserCollegeWhereInput
    orderBy?: UserCollegeOrderByWithRelationInput | UserCollegeOrderByWithRelationInput[]
    cursor?: UserCollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCollegeScalarFieldEnum | UserCollegeScalarFieldEnum[]
  }

  /**
   * User.projectUpvotes
   */
  export type User$projectUpvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
    where?: ProjectUpvoteWhereInput
    orderBy?: ProjectUpvoteOrderByWithRelationInput | ProjectUpvoteOrderByWithRelationInput[]
    cursor?: ProjectUpvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectUpvoteScalarFieldEnum | ProjectUpvoteScalarFieldEnum[]
  }

  /**
   * User.ProjectCollaborator
   */
  export type User$ProjectCollaboratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    where?: ProjectCollaboratorWhereInput
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    cursor?: ProjectCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCollaboratorScalarFieldEnum | ProjectCollaboratorScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model College
   */

  export type AggregateCollege = {
    _count: CollegeCountAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  export type CollegeMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    shortName: string | null
    logoUrl: string | null
    coverImageUrl: string | null
    description: string | null
    location: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollegeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    shortName: string | null
    logoUrl: string | null
    coverImageUrl: string | null
    description: string | null
    location: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollegeCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    shortName: number
    logoUrl: number
    coverImageUrl: number
    description: number
    location: number
    website: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollegeMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    shortName?: true
    logoUrl?: true
    coverImageUrl?: true
    description?: true
    location?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollegeMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    shortName?: true
    logoUrl?: true
    coverImageUrl?: true
    description?: true
    location?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollegeCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    shortName?: true
    logoUrl?: true
    coverImageUrl?: true
    description?: true
    location?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which College to aggregate.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colleges
    **/
    _count?: true | CollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeMaxAggregateInputType
  }

  export type GetCollegeAggregateType<T extends CollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollege[P]>
      : GetScalarType<T[P], AggregateCollege[P]>
  }




  export type CollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeWhereInput
    orderBy?: CollegeOrderByWithAggregationInput | CollegeOrderByWithAggregationInput[]
    by: CollegeScalarFieldEnum[] | CollegeScalarFieldEnum
    having?: CollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeCountAggregateInputType | true
    _min?: CollegeMinAggregateInputType
    _max?: CollegeMaxAggregateInputType
  }

  export type CollegeGroupByOutputType = {
    id: string
    name: string
    slug: string
    shortName: string | null
    logoUrl: string | null
    coverImageUrl: string | null
    description: string | null
    location: string | null
    website: string | null
    createdAt: Date
    updatedAt: Date
    _count: CollegeCountAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  type GetCollegeGroupByPayload<T extends CollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeGroupByOutputType[P]>
        }
      >
    >


  export type CollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    shortName?: boolean
    logoUrl?: boolean
    coverImageUrl?: boolean
    description?: boolean
    location?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userColleges?: boolean | College$userCollegesArgs<ExtArgs>
    projects?: boolean | College$projectsArgs<ExtArgs>
    emailDomains?: boolean | College$emailDomainsArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    shortName?: boolean
    logoUrl?: boolean
    coverImageUrl?: boolean
    description?: boolean
    location?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    shortName?: boolean
    logoUrl?: boolean
    coverImageUrl?: boolean
    description?: boolean
    location?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    shortName?: boolean
    logoUrl?: boolean
    coverImageUrl?: boolean
    description?: boolean
    location?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "shortName" | "logoUrl" | "coverImageUrl" | "description" | "location" | "website" | "createdAt" | "updatedAt", ExtArgs["result"]["college"]>
  export type CollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userColleges?: boolean | College$userCollegesArgs<ExtArgs>
    projects?: boolean | College$projectsArgs<ExtArgs>
    emailDomains?: boolean | College$emailDomainsArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "College"
    objects: {
      userColleges: Prisma.$UserCollegePayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      emailDomains: Prisma.$CollegeEmailDomainPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      shortName: string | null
      logoUrl: string | null
      coverImageUrl: string | null
      description: string | null
      location: string | null
      website: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["college"]>
    composites: {}
  }

  type CollegeGetPayload<S extends boolean | null | undefined | CollegeDefaultArgs> = $Result.GetResult<Prisma.$CollegePayload, S>

  type CollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeCountAggregateInputType | true
    }

  export interface CollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['College'], meta: { name: 'College' } }
    /**
     * Find zero or one College that matches the filter.
     * @param {CollegeFindUniqueArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeFindUniqueArgs>(args: SelectSubset<T, CollegeFindUniqueArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one College that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeFindUniqueOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeFindFirstArgs>(args?: SelectSubset<T, CollegeFindFirstArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colleges
     * const colleges = await prisma.college.findMany()
     * 
     * // Get first 10 Colleges
     * const colleges = await prisma.college.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeWithIdOnly = await prisma.college.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeFindManyArgs>(args?: SelectSubset<T, CollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a College.
     * @param {CollegeCreateArgs} args - Arguments to create a College.
     * @example
     * // Create one College
     * const College = await prisma.college.create({
     *   data: {
     *     // ... data to create a College
     *   }
     * })
     * 
     */
    create<T extends CollegeCreateArgs>(args: SelectSubset<T, CollegeCreateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colleges.
     * @param {CollegeCreateManyArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeCreateManyArgs>(args?: SelectSubset<T, CollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colleges and returns the data saved in the database.
     * @param {CollegeCreateManyAndReturnArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a College.
     * @param {CollegeDeleteArgs} args - Arguments to delete one College.
     * @example
     * // Delete one College
     * const College = await prisma.college.delete({
     *   where: {
     *     // ... filter to delete one College
     *   }
     * })
     * 
     */
    delete<T extends CollegeDeleteArgs>(args: SelectSubset<T, CollegeDeleteArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one College.
     * @param {CollegeUpdateArgs} args - Arguments to update one College.
     * @example
     * // Update one College
     * const college = await prisma.college.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeUpdateArgs>(args: SelectSubset<T, CollegeUpdateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colleges.
     * @param {CollegeDeleteManyArgs} args - Arguments to filter Colleges to delete.
     * @example
     * // Delete a few Colleges
     * const { count } = await prisma.college.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeDeleteManyArgs>(args?: SelectSubset<T, CollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeUpdateManyArgs>(args: SelectSubset<T, CollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges and returns the data updated in the database.
     * @param {CollegeUpdateManyAndReturnArgs} args - Arguments to update many Colleges.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one College.
     * @param {CollegeUpsertArgs} args - Arguments to update or create a College.
     * @example
     * // Update or create a College
     * const college = await prisma.college.upsert({
     *   create: {
     *     // ... data to create a College
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the College we want to update
     *   }
     * })
     */
    upsert<T extends CollegeUpsertArgs>(args: SelectSubset<T, CollegeUpsertArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCountArgs} args - Arguments to filter Colleges to count.
     * @example
     * // Count the number of Colleges
     * const count = await prisma.college.count({
     *   where: {
     *     // ... the filter for the Colleges we want to count
     *   }
     * })
    **/
    count<T extends CollegeCountArgs>(
      args?: Subset<T, CollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollegeAggregateArgs>(args: Subset<T, CollegeAggregateArgs>): Prisma.PrismaPromise<GetCollegeAggregateType<T>>

    /**
     * Group by College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeGroupByArgs['orderBy'] }
        : { orderBy?: CollegeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the College model
   */
  readonly fields: CollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for College.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userColleges<T extends College$userCollegesArgs<ExtArgs> = {}>(args?: Subset<T, College$userCollegesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends College$projectsArgs<ExtArgs> = {}>(args?: Subset<T, College$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailDomains<T extends College$emailDomainsArgs<ExtArgs> = {}>(args?: Subset<T, College$emailDomainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the College model
   */
  interface CollegeFieldRefs {
    readonly id: FieldRef<"College", 'String'>
    readonly name: FieldRef<"College", 'String'>
    readonly slug: FieldRef<"College", 'String'>
    readonly shortName: FieldRef<"College", 'String'>
    readonly logoUrl: FieldRef<"College", 'String'>
    readonly coverImageUrl: FieldRef<"College", 'String'>
    readonly description: FieldRef<"College", 'String'>
    readonly location: FieldRef<"College", 'String'>
    readonly website: FieldRef<"College", 'String'>
    readonly createdAt: FieldRef<"College", 'DateTime'>
    readonly updatedAt: FieldRef<"College", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * College findUnique
   */
  export type CollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findUniqueOrThrow
   */
  export type CollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findFirst
   */
  export type CollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findFirstOrThrow
   */
  export type CollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findMany
   */
  export type CollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which Colleges to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College create
   */
  export type CollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a College.
     */
    data: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
  }

  /**
   * College createMany
   */
  export type CollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College createManyAndReturn
   */
  export type CollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College update
   */
  export type CollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a College.
     */
    data: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
    /**
     * Choose, which College to update.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College updateMany
   */
  export type CollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College updateManyAndReturn
   */
  export type CollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College upsert
   */
  export type CollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the College to update in case it exists.
     */
    where: CollegeWhereUniqueInput
    /**
     * In case the College found by the `where` argument doesn't exist, create a new College with this data.
     */
    create: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
    /**
     * In case the College was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
  }

  /**
   * College delete
   */
  export type CollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter which College to delete.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College deleteMany
   */
  export type CollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colleges to delete
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to delete.
     */
    limit?: number
  }

  /**
   * College.userColleges
   */
  export type College$userCollegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
    where?: UserCollegeWhereInput
    orderBy?: UserCollegeOrderByWithRelationInput | UserCollegeOrderByWithRelationInput[]
    cursor?: UserCollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCollegeScalarFieldEnum | UserCollegeScalarFieldEnum[]
  }

  /**
   * College.projects
   */
  export type College$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * College.emailDomains
   */
  export type College$emailDomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainInclude<ExtArgs> | null
    where?: CollegeEmailDomainWhereInput
    orderBy?: CollegeEmailDomainOrderByWithRelationInput | CollegeEmailDomainOrderByWithRelationInput[]
    cursor?: CollegeEmailDomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollegeEmailDomainScalarFieldEnum | CollegeEmailDomainScalarFieldEnum[]
  }

  /**
   * College without action
   */
  export type CollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
  }


  /**
   * Model UserCollege
   */

  export type AggregateUserCollege = {
    _count: UserCollegeCountAggregateOutputType | null
    _min: UserCollegeMinAggregateOutputType | null
    _max: UserCollegeMaxAggregateOutputType | null
  }

  export type UserCollegeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    collegeId: string | null
    userType: $Enums.UserType | null
    isAdmin: boolean | null
    degreeType: string | null
    branch: string | null
    verified: boolean | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type UserCollegeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    collegeId: string | null
    userType: $Enums.UserType | null
    isAdmin: boolean | null
    degreeType: string | null
    branch: string | null
    verified: boolean | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type UserCollegeCountAggregateOutputType = {
    id: number
    userId: number
    collegeId: number
    userType: number
    isAdmin: number
    degreeType: number
    branch: number
    verified: number
    joinedAt: number
    leftAt: number
    _all: number
  }


  export type UserCollegeMinAggregateInputType = {
    id?: true
    userId?: true
    collegeId?: true
    userType?: true
    isAdmin?: true
    degreeType?: true
    branch?: true
    verified?: true
    joinedAt?: true
    leftAt?: true
  }

  export type UserCollegeMaxAggregateInputType = {
    id?: true
    userId?: true
    collegeId?: true
    userType?: true
    isAdmin?: true
    degreeType?: true
    branch?: true
    verified?: true
    joinedAt?: true
    leftAt?: true
  }

  export type UserCollegeCountAggregateInputType = {
    id?: true
    userId?: true
    collegeId?: true
    userType?: true
    isAdmin?: true
    degreeType?: true
    branch?: true
    verified?: true
    joinedAt?: true
    leftAt?: true
    _all?: true
  }

  export type UserCollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCollege to aggregate.
     */
    where?: UserCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserColleges to fetch.
     */
    orderBy?: UserCollegeOrderByWithRelationInput | UserCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserColleges
    **/
    _count?: true | UserCollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCollegeMaxAggregateInputType
  }

  export type GetUserCollegeAggregateType<T extends UserCollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCollege[P]>
      : GetScalarType<T[P], AggregateUserCollege[P]>
  }




  export type UserCollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCollegeWhereInput
    orderBy?: UserCollegeOrderByWithAggregationInput | UserCollegeOrderByWithAggregationInput[]
    by: UserCollegeScalarFieldEnum[] | UserCollegeScalarFieldEnum
    having?: UserCollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCollegeCountAggregateInputType | true
    _min?: UserCollegeMinAggregateInputType
    _max?: UserCollegeMaxAggregateInputType
  }

  export type UserCollegeGroupByOutputType = {
    id: string
    userId: string
    collegeId: string
    userType: $Enums.UserType
    isAdmin: boolean
    degreeType: string | null
    branch: string | null
    verified: boolean
    joinedAt: Date
    leftAt: Date | null
    _count: UserCollegeCountAggregateOutputType | null
    _min: UserCollegeMinAggregateOutputType | null
    _max: UserCollegeMaxAggregateOutputType | null
  }

  type GetUserCollegeGroupByPayload<T extends UserCollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCollegeGroupByOutputType[P]>
            : GetScalarType<T[P], UserCollegeGroupByOutputType[P]>
        }
      >
    >


  export type UserCollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    collegeId?: boolean
    userType?: boolean
    isAdmin?: boolean
    degreeType?: boolean
    branch?: boolean
    verified?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCollege"]>

  export type UserCollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    collegeId?: boolean
    userType?: boolean
    isAdmin?: boolean
    degreeType?: boolean
    branch?: boolean
    verified?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCollege"]>

  export type UserCollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    collegeId?: boolean
    userType?: boolean
    isAdmin?: boolean
    degreeType?: boolean
    branch?: boolean
    verified?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCollege"]>

  export type UserCollegeSelectScalar = {
    id?: boolean
    userId?: boolean
    collegeId?: boolean
    userType?: boolean
    isAdmin?: boolean
    degreeType?: boolean
    branch?: boolean
    verified?: boolean
    joinedAt?: boolean
    leftAt?: boolean
  }

  export type UserCollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "collegeId" | "userType" | "isAdmin" | "degreeType" | "branch" | "verified" | "joinedAt" | "leftAt", ExtArgs["result"]["userCollege"]>
  export type UserCollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type UserCollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type UserCollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $UserCollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCollege"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      college: Prisma.$CollegePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      collegeId: string
      userType: $Enums.UserType
      isAdmin: boolean
      degreeType: string | null
      branch: string | null
      verified: boolean
      joinedAt: Date
      leftAt: Date | null
    }, ExtArgs["result"]["userCollege"]>
    composites: {}
  }

  type UserCollegeGetPayload<S extends boolean | null | undefined | UserCollegeDefaultArgs> = $Result.GetResult<Prisma.$UserCollegePayload, S>

  type UserCollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCollegeCountAggregateInputType | true
    }

  export interface UserCollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCollege'], meta: { name: 'UserCollege' } }
    /**
     * Find zero or one UserCollege that matches the filter.
     * @param {UserCollegeFindUniqueArgs} args - Arguments to find a UserCollege
     * @example
     * // Get one UserCollege
     * const userCollege = await prisma.userCollege.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCollegeFindUniqueArgs>(args: SelectSubset<T, UserCollegeFindUniqueArgs<ExtArgs>>): Prisma__UserCollegeClient<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCollege that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCollegeFindUniqueOrThrowArgs} args - Arguments to find a UserCollege
     * @example
     * // Get one UserCollege
     * const userCollege = await prisma.userCollege.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCollegeClient<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCollege that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollegeFindFirstArgs} args - Arguments to find a UserCollege
     * @example
     * // Get one UserCollege
     * const userCollege = await prisma.userCollege.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCollegeFindFirstArgs>(args?: SelectSubset<T, UserCollegeFindFirstArgs<ExtArgs>>): Prisma__UserCollegeClient<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCollege that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollegeFindFirstOrThrowArgs} args - Arguments to find a UserCollege
     * @example
     * // Get one UserCollege
     * const userCollege = await prisma.userCollege.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCollegeClient<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserColleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserColleges
     * const userColleges = await prisma.userCollege.findMany()
     * 
     * // Get first 10 UserColleges
     * const userColleges = await prisma.userCollege.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCollegeWithIdOnly = await prisma.userCollege.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCollegeFindManyArgs>(args?: SelectSubset<T, UserCollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCollege.
     * @param {UserCollegeCreateArgs} args - Arguments to create a UserCollege.
     * @example
     * // Create one UserCollege
     * const UserCollege = await prisma.userCollege.create({
     *   data: {
     *     // ... data to create a UserCollege
     *   }
     * })
     * 
     */
    create<T extends UserCollegeCreateArgs>(args: SelectSubset<T, UserCollegeCreateArgs<ExtArgs>>): Prisma__UserCollegeClient<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserColleges.
     * @param {UserCollegeCreateManyArgs} args - Arguments to create many UserColleges.
     * @example
     * // Create many UserColleges
     * const userCollege = await prisma.userCollege.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCollegeCreateManyArgs>(args?: SelectSubset<T, UserCollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserColleges and returns the data saved in the database.
     * @param {UserCollegeCreateManyAndReturnArgs} args - Arguments to create many UserColleges.
     * @example
     * // Create many UserColleges
     * const userCollege = await prisma.userCollege.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserColleges and only return the `id`
     * const userCollegeWithIdOnly = await prisma.userCollege.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCollege.
     * @param {UserCollegeDeleteArgs} args - Arguments to delete one UserCollege.
     * @example
     * // Delete one UserCollege
     * const UserCollege = await prisma.userCollege.delete({
     *   where: {
     *     // ... filter to delete one UserCollege
     *   }
     * })
     * 
     */
    delete<T extends UserCollegeDeleteArgs>(args: SelectSubset<T, UserCollegeDeleteArgs<ExtArgs>>): Prisma__UserCollegeClient<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCollege.
     * @param {UserCollegeUpdateArgs} args - Arguments to update one UserCollege.
     * @example
     * // Update one UserCollege
     * const userCollege = await prisma.userCollege.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCollegeUpdateArgs>(args: SelectSubset<T, UserCollegeUpdateArgs<ExtArgs>>): Prisma__UserCollegeClient<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserColleges.
     * @param {UserCollegeDeleteManyArgs} args - Arguments to filter UserColleges to delete.
     * @example
     * // Delete a few UserColleges
     * const { count } = await prisma.userCollege.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCollegeDeleteManyArgs>(args?: SelectSubset<T, UserCollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserColleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserColleges
     * const userCollege = await prisma.userCollege.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCollegeUpdateManyArgs>(args: SelectSubset<T, UserCollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserColleges and returns the data updated in the database.
     * @param {UserCollegeUpdateManyAndReturnArgs} args - Arguments to update many UserColleges.
     * @example
     * // Update many UserColleges
     * const userCollege = await prisma.userCollege.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserColleges and only return the `id`
     * const userCollegeWithIdOnly = await prisma.userCollege.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCollege.
     * @param {UserCollegeUpsertArgs} args - Arguments to update or create a UserCollege.
     * @example
     * // Update or create a UserCollege
     * const userCollege = await prisma.userCollege.upsert({
     *   create: {
     *     // ... data to create a UserCollege
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCollege we want to update
     *   }
     * })
     */
    upsert<T extends UserCollegeUpsertArgs>(args: SelectSubset<T, UserCollegeUpsertArgs<ExtArgs>>): Prisma__UserCollegeClient<$Result.GetResult<Prisma.$UserCollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserColleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollegeCountArgs} args - Arguments to filter UserColleges to count.
     * @example
     * // Count the number of UserColleges
     * const count = await prisma.userCollege.count({
     *   where: {
     *     // ... the filter for the UserColleges we want to count
     *   }
     * })
    **/
    count<T extends UserCollegeCountArgs>(
      args?: Subset<T, UserCollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCollege.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCollegeAggregateArgs>(args: Subset<T, UserCollegeAggregateArgs>): Prisma.PrismaPromise<GetUserCollegeAggregateType<T>>

    /**
     * Group by UserCollege.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollegeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCollegeGroupByArgs['orderBy'] }
        : { orderBy?: UserCollegeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCollege model
   */
  readonly fields: UserCollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCollege.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCollege model
   */
  interface UserCollegeFieldRefs {
    readonly id: FieldRef<"UserCollege", 'String'>
    readonly userId: FieldRef<"UserCollege", 'String'>
    readonly collegeId: FieldRef<"UserCollege", 'String'>
    readonly userType: FieldRef<"UserCollege", 'UserType'>
    readonly isAdmin: FieldRef<"UserCollege", 'Boolean'>
    readonly degreeType: FieldRef<"UserCollege", 'String'>
    readonly branch: FieldRef<"UserCollege", 'String'>
    readonly verified: FieldRef<"UserCollege", 'Boolean'>
    readonly joinedAt: FieldRef<"UserCollege", 'DateTime'>
    readonly leftAt: FieldRef<"UserCollege", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCollege findUnique
   */
  export type UserCollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
    /**
     * Filter, which UserCollege to fetch.
     */
    where: UserCollegeWhereUniqueInput
  }

  /**
   * UserCollege findUniqueOrThrow
   */
  export type UserCollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
    /**
     * Filter, which UserCollege to fetch.
     */
    where: UserCollegeWhereUniqueInput
  }

  /**
   * UserCollege findFirst
   */
  export type UserCollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
    /**
     * Filter, which UserCollege to fetch.
     */
    where?: UserCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserColleges to fetch.
     */
    orderBy?: UserCollegeOrderByWithRelationInput | UserCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserColleges.
     */
    cursor?: UserCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserColleges.
     */
    distinct?: UserCollegeScalarFieldEnum | UserCollegeScalarFieldEnum[]
  }

  /**
   * UserCollege findFirstOrThrow
   */
  export type UserCollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
    /**
     * Filter, which UserCollege to fetch.
     */
    where?: UserCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserColleges to fetch.
     */
    orderBy?: UserCollegeOrderByWithRelationInput | UserCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserColleges.
     */
    cursor?: UserCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserColleges.
     */
    distinct?: UserCollegeScalarFieldEnum | UserCollegeScalarFieldEnum[]
  }

  /**
   * UserCollege findMany
   */
  export type UserCollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
    /**
     * Filter, which UserColleges to fetch.
     */
    where?: UserCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserColleges to fetch.
     */
    orderBy?: UserCollegeOrderByWithRelationInput | UserCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserColleges.
     */
    cursor?: UserCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserColleges.
     */
    skip?: number
    distinct?: UserCollegeScalarFieldEnum | UserCollegeScalarFieldEnum[]
  }

  /**
   * UserCollege create
   */
  export type UserCollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCollege.
     */
    data: XOR<UserCollegeCreateInput, UserCollegeUncheckedCreateInput>
  }

  /**
   * UserCollege createMany
   */
  export type UserCollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserColleges.
     */
    data: UserCollegeCreateManyInput | UserCollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCollege createManyAndReturn
   */
  export type UserCollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * The data used to create many UserColleges.
     */
    data: UserCollegeCreateManyInput | UserCollegeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCollege update
   */
  export type UserCollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCollege.
     */
    data: XOR<UserCollegeUpdateInput, UserCollegeUncheckedUpdateInput>
    /**
     * Choose, which UserCollege to update.
     */
    where: UserCollegeWhereUniqueInput
  }

  /**
   * UserCollege updateMany
   */
  export type UserCollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserColleges.
     */
    data: XOR<UserCollegeUpdateManyMutationInput, UserCollegeUncheckedUpdateManyInput>
    /**
     * Filter which UserColleges to update
     */
    where?: UserCollegeWhereInput
    /**
     * Limit how many UserColleges to update.
     */
    limit?: number
  }

  /**
   * UserCollege updateManyAndReturn
   */
  export type UserCollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * The data used to update UserColleges.
     */
    data: XOR<UserCollegeUpdateManyMutationInput, UserCollegeUncheckedUpdateManyInput>
    /**
     * Filter which UserColleges to update
     */
    where?: UserCollegeWhereInput
    /**
     * Limit how many UserColleges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCollege upsert
   */
  export type UserCollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCollege to update in case it exists.
     */
    where: UserCollegeWhereUniqueInput
    /**
     * In case the UserCollege found by the `where` argument doesn't exist, create a new UserCollege with this data.
     */
    create: XOR<UserCollegeCreateInput, UserCollegeUncheckedCreateInput>
    /**
     * In case the UserCollege was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCollegeUpdateInput, UserCollegeUncheckedUpdateInput>
  }

  /**
   * UserCollege delete
   */
  export type UserCollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
    /**
     * Filter which UserCollege to delete.
     */
    where: UserCollegeWhereUniqueInput
  }

  /**
   * UserCollege deleteMany
   */
  export type UserCollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserColleges to delete
     */
    where?: UserCollegeWhereInput
    /**
     * Limit how many UserColleges to delete.
     */
    limit?: number
  }

  /**
   * UserCollege without action
   */
  export type UserCollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollege
     */
    select?: UserCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollege
     */
    omit?: UserCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollegeInclude<ExtArgs> | null
  }


  /**
   * Model CollegeEmailDomain
   */

  export type AggregateCollegeEmailDomain = {
    _count: CollegeEmailDomainCountAggregateOutputType | null
    _min: CollegeEmailDomainMinAggregateOutputType | null
    _max: CollegeEmailDomainMaxAggregateOutputType | null
  }

  export type CollegeEmailDomainMinAggregateOutputType = {
    id: string | null
    domain: string | null
    collegeId: string | null
  }

  export type CollegeEmailDomainMaxAggregateOutputType = {
    id: string | null
    domain: string | null
    collegeId: string | null
  }

  export type CollegeEmailDomainCountAggregateOutputType = {
    id: number
    domain: number
    collegeId: number
    _all: number
  }


  export type CollegeEmailDomainMinAggregateInputType = {
    id?: true
    domain?: true
    collegeId?: true
  }

  export type CollegeEmailDomainMaxAggregateInputType = {
    id?: true
    domain?: true
    collegeId?: true
  }

  export type CollegeEmailDomainCountAggregateInputType = {
    id?: true
    domain?: true
    collegeId?: true
    _all?: true
  }

  export type CollegeEmailDomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollegeEmailDomain to aggregate.
     */
    where?: CollegeEmailDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeEmailDomains to fetch.
     */
    orderBy?: CollegeEmailDomainOrderByWithRelationInput | CollegeEmailDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeEmailDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeEmailDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeEmailDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollegeEmailDomains
    **/
    _count?: true | CollegeEmailDomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeEmailDomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeEmailDomainMaxAggregateInputType
  }

  export type GetCollegeEmailDomainAggregateType<T extends CollegeEmailDomainAggregateArgs> = {
        [P in keyof T & keyof AggregateCollegeEmailDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollegeEmailDomain[P]>
      : GetScalarType<T[P], AggregateCollegeEmailDomain[P]>
  }




  export type CollegeEmailDomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeEmailDomainWhereInput
    orderBy?: CollegeEmailDomainOrderByWithAggregationInput | CollegeEmailDomainOrderByWithAggregationInput[]
    by: CollegeEmailDomainScalarFieldEnum[] | CollegeEmailDomainScalarFieldEnum
    having?: CollegeEmailDomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeEmailDomainCountAggregateInputType | true
    _min?: CollegeEmailDomainMinAggregateInputType
    _max?: CollegeEmailDomainMaxAggregateInputType
  }

  export type CollegeEmailDomainGroupByOutputType = {
    id: string
    domain: string
    collegeId: string
    _count: CollegeEmailDomainCountAggregateOutputType | null
    _min: CollegeEmailDomainMinAggregateOutputType | null
    _max: CollegeEmailDomainMaxAggregateOutputType | null
  }

  type GetCollegeEmailDomainGroupByPayload<T extends CollegeEmailDomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeEmailDomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeEmailDomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeEmailDomainGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeEmailDomainGroupByOutputType[P]>
        }
      >
    >


  export type CollegeEmailDomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    collegeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeEmailDomain"]>

  export type CollegeEmailDomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    collegeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeEmailDomain"]>

  export type CollegeEmailDomainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    collegeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeEmailDomain"]>

  export type CollegeEmailDomainSelectScalar = {
    id?: boolean
    domain?: boolean
    collegeId?: boolean
  }

  export type CollegeEmailDomainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domain" | "collegeId", ExtArgs["result"]["collegeEmailDomain"]>
  export type CollegeEmailDomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type CollegeEmailDomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type CollegeEmailDomainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $CollegeEmailDomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollegeEmailDomain"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domain: string
      collegeId: string
    }, ExtArgs["result"]["collegeEmailDomain"]>
    composites: {}
  }

  type CollegeEmailDomainGetPayload<S extends boolean | null | undefined | CollegeEmailDomainDefaultArgs> = $Result.GetResult<Prisma.$CollegeEmailDomainPayload, S>

  type CollegeEmailDomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeEmailDomainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeEmailDomainCountAggregateInputType | true
    }

  export interface CollegeEmailDomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollegeEmailDomain'], meta: { name: 'CollegeEmailDomain' } }
    /**
     * Find zero or one CollegeEmailDomain that matches the filter.
     * @param {CollegeEmailDomainFindUniqueArgs} args - Arguments to find a CollegeEmailDomain
     * @example
     * // Get one CollegeEmailDomain
     * const collegeEmailDomain = await prisma.collegeEmailDomain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeEmailDomainFindUniqueArgs>(args: SelectSubset<T, CollegeEmailDomainFindUniqueArgs<ExtArgs>>): Prisma__CollegeEmailDomainClient<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollegeEmailDomain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeEmailDomainFindUniqueOrThrowArgs} args - Arguments to find a CollegeEmailDomain
     * @example
     * // Get one CollegeEmailDomain
     * const collegeEmailDomain = await prisma.collegeEmailDomain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeEmailDomainFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeEmailDomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeEmailDomainClient<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollegeEmailDomain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeEmailDomainFindFirstArgs} args - Arguments to find a CollegeEmailDomain
     * @example
     * // Get one CollegeEmailDomain
     * const collegeEmailDomain = await prisma.collegeEmailDomain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeEmailDomainFindFirstArgs>(args?: SelectSubset<T, CollegeEmailDomainFindFirstArgs<ExtArgs>>): Prisma__CollegeEmailDomainClient<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollegeEmailDomain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeEmailDomainFindFirstOrThrowArgs} args - Arguments to find a CollegeEmailDomain
     * @example
     * // Get one CollegeEmailDomain
     * const collegeEmailDomain = await prisma.collegeEmailDomain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeEmailDomainFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeEmailDomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeEmailDomainClient<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollegeEmailDomains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeEmailDomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollegeEmailDomains
     * const collegeEmailDomains = await prisma.collegeEmailDomain.findMany()
     * 
     * // Get first 10 CollegeEmailDomains
     * const collegeEmailDomains = await prisma.collegeEmailDomain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeEmailDomainWithIdOnly = await prisma.collegeEmailDomain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeEmailDomainFindManyArgs>(args?: SelectSubset<T, CollegeEmailDomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollegeEmailDomain.
     * @param {CollegeEmailDomainCreateArgs} args - Arguments to create a CollegeEmailDomain.
     * @example
     * // Create one CollegeEmailDomain
     * const CollegeEmailDomain = await prisma.collegeEmailDomain.create({
     *   data: {
     *     // ... data to create a CollegeEmailDomain
     *   }
     * })
     * 
     */
    create<T extends CollegeEmailDomainCreateArgs>(args: SelectSubset<T, CollegeEmailDomainCreateArgs<ExtArgs>>): Prisma__CollegeEmailDomainClient<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollegeEmailDomains.
     * @param {CollegeEmailDomainCreateManyArgs} args - Arguments to create many CollegeEmailDomains.
     * @example
     * // Create many CollegeEmailDomains
     * const collegeEmailDomain = await prisma.collegeEmailDomain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeEmailDomainCreateManyArgs>(args?: SelectSubset<T, CollegeEmailDomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollegeEmailDomains and returns the data saved in the database.
     * @param {CollegeEmailDomainCreateManyAndReturnArgs} args - Arguments to create many CollegeEmailDomains.
     * @example
     * // Create many CollegeEmailDomains
     * const collegeEmailDomain = await prisma.collegeEmailDomain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollegeEmailDomains and only return the `id`
     * const collegeEmailDomainWithIdOnly = await prisma.collegeEmailDomain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeEmailDomainCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeEmailDomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollegeEmailDomain.
     * @param {CollegeEmailDomainDeleteArgs} args - Arguments to delete one CollegeEmailDomain.
     * @example
     * // Delete one CollegeEmailDomain
     * const CollegeEmailDomain = await prisma.collegeEmailDomain.delete({
     *   where: {
     *     // ... filter to delete one CollegeEmailDomain
     *   }
     * })
     * 
     */
    delete<T extends CollegeEmailDomainDeleteArgs>(args: SelectSubset<T, CollegeEmailDomainDeleteArgs<ExtArgs>>): Prisma__CollegeEmailDomainClient<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollegeEmailDomain.
     * @param {CollegeEmailDomainUpdateArgs} args - Arguments to update one CollegeEmailDomain.
     * @example
     * // Update one CollegeEmailDomain
     * const collegeEmailDomain = await prisma.collegeEmailDomain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeEmailDomainUpdateArgs>(args: SelectSubset<T, CollegeEmailDomainUpdateArgs<ExtArgs>>): Prisma__CollegeEmailDomainClient<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollegeEmailDomains.
     * @param {CollegeEmailDomainDeleteManyArgs} args - Arguments to filter CollegeEmailDomains to delete.
     * @example
     * // Delete a few CollegeEmailDomains
     * const { count } = await prisma.collegeEmailDomain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeEmailDomainDeleteManyArgs>(args?: SelectSubset<T, CollegeEmailDomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollegeEmailDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeEmailDomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollegeEmailDomains
     * const collegeEmailDomain = await prisma.collegeEmailDomain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeEmailDomainUpdateManyArgs>(args: SelectSubset<T, CollegeEmailDomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollegeEmailDomains and returns the data updated in the database.
     * @param {CollegeEmailDomainUpdateManyAndReturnArgs} args - Arguments to update many CollegeEmailDomains.
     * @example
     * // Update many CollegeEmailDomains
     * const collegeEmailDomain = await prisma.collegeEmailDomain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollegeEmailDomains and only return the `id`
     * const collegeEmailDomainWithIdOnly = await prisma.collegeEmailDomain.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollegeEmailDomainUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeEmailDomainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollegeEmailDomain.
     * @param {CollegeEmailDomainUpsertArgs} args - Arguments to update or create a CollegeEmailDomain.
     * @example
     * // Update or create a CollegeEmailDomain
     * const collegeEmailDomain = await prisma.collegeEmailDomain.upsert({
     *   create: {
     *     // ... data to create a CollegeEmailDomain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollegeEmailDomain we want to update
     *   }
     * })
     */
    upsert<T extends CollegeEmailDomainUpsertArgs>(args: SelectSubset<T, CollegeEmailDomainUpsertArgs<ExtArgs>>): Prisma__CollegeEmailDomainClient<$Result.GetResult<Prisma.$CollegeEmailDomainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollegeEmailDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeEmailDomainCountArgs} args - Arguments to filter CollegeEmailDomains to count.
     * @example
     * // Count the number of CollegeEmailDomains
     * const count = await prisma.collegeEmailDomain.count({
     *   where: {
     *     // ... the filter for the CollegeEmailDomains we want to count
     *   }
     * })
    **/
    count<T extends CollegeEmailDomainCountArgs>(
      args?: Subset<T, CollegeEmailDomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeEmailDomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollegeEmailDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeEmailDomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollegeEmailDomainAggregateArgs>(args: Subset<T, CollegeEmailDomainAggregateArgs>): Prisma.PrismaPromise<GetCollegeEmailDomainAggregateType<T>>

    /**
     * Group by CollegeEmailDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeEmailDomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollegeEmailDomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeEmailDomainGroupByArgs['orderBy'] }
        : { orderBy?: CollegeEmailDomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollegeEmailDomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeEmailDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollegeEmailDomain model
   */
  readonly fields: CollegeEmailDomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollegeEmailDomain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeEmailDomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CollegeEmailDomain model
   */
  interface CollegeEmailDomainFieldRefs {
    readonly id: FieldRef<"CollegeEmailDomain", 'String'>
    readonly domain: FieldRef<"CollegeEmailDomain", 'String'>
    readonly collegeId: FieldRef<"CollegeEmailDomain", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CollegeEmailDomain findUnique
   */
  export type CollegeEmailDomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainInclude<ExtArgs> | null
    /**
     * Filter, which CollegeEmailDomain to fetch.
     */
    where: CollegeEmailDomainWhereUniqueInput
  }

  /**
   * CollegeEmailDomain findUniqueOrThrow
   */
  export type CollegeEmailDomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainInclude<ExtArgs> | null
    /**
     * Filter, which CollegeEmailDomain to fetch.
     */
    where: CollegeEmailDomainWhereUniqueInput
  }

  /**
   * CollegeEmailDomain findFirst
   */
  export type CollegeEmailDomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainInclude<ExtArgs> | null
    /**
     * Filter, which CollegeEmailDomain to fetch.
     */
    where?: CollegeEmailDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeEmailDomains to fetch.
     */
    orderBy?: CollegeEmailDomainOrderByWithRelationInput | CollegeEmailDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollegeEmailDomains.
     */
    cursor?: CollegeEmailDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeEmailDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeEmailDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollegeEmailDomains.
     */
    distinct?: CollegeEmailDomainScalarFieldEnum | CollegeEmailDomainScalarFieldEnum[]
  }

  /**
   * CollegeEmailDomain findFirstOrThrow
   */
  export type CollegeEmailDomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainInclude<ExtArgs> | null
    /**
     * Filter, which CollegeEmailDomain to fetch.
     */
    where?: CollegeEmailDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeEmailDomains to fetch.
     */
    orderBy?: CollegeEmailDomainOrderByWithRelationInput | CollegeEmailDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollegeEmailDomains.
     */
    cursor?: CollegeEmailDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeEmailDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeEmailDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollegeEmailDomains.
     */
    distinct?: CollegeEmailDomainScalarFieldEnum | CollegeEmailDomainScalarFieldEnum[]
  }

  /**
   * CollegeEmailDomain findMany
   */
  export type CollegeEmailDomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainInclude<ExtArgs> | null
    /**
     * Filter, which CollegeEmailDomains to fetch.
     */
    where?: CollegeEmailDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeEmailDomains to fetch.
     */
    orderBy?: CollegeEmailDomainOrderByWithRelationInput | CollegeEmailDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollegeEmailDomains.
     */
    cursor?: CollegeEmailDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeEmailDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeEmailDomains.
     */
    skip?: number
    distinct?: CollegeEmailDomainScalarFieldEnum | CollegeEmailDomainScalarFieldEnum[]
  }

  /**
   * CollegeEmailDomain create
   */
  export type CollegeEmailDomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainInclude<ExtArgs> | null
    /**
     * The data needed to create a CollegeEmailDomain.
     */
    data: XOR<CollegeEmailDomainCreateInput, CollegeEmailDomainUncheckedCreateInput>
  }

  /**
   * CollegeEmailDomain createMany
   */
  export type CollegeEmailDomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollegeEmailDomains.
     */
    data: CollegeEmailDomainCreateManyInput | CollegeEmailDomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollegeEmailDomain createManyAndReturn
   */
  export type CollegeEmailDomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * The data used to create many CollegeEmailDomains.
     */
    data: CollegeEmailDomainCreateManyInput | CollegeEmailDomainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollegeEmailDomain update
   */
  export type CollegeEmailDomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainInclude<ExtArgs> | null
    /**
     * The data needed to update a CollegeEmailDomain.
     */
    data: XOR<CollegeEmailDomainUpdateInput, CollegeEmailDomainUncheckedUpdateInput>
    /**
     * Choose, which CollegeEmailDomain to update.
     */
    where: CollegeEmailDomainWhereUniqueInput
  }

  /**
   * CollegeEmailDomain updateMany
   */
  export type CollegeEmailDomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollegeEmailDomains.
     */
    data: XOR<CollegeEmailDomainUpdateManyMutationInput, CollegeEmailDomainUncheckedUpdateManyInput>
    /**
     * Filter which CollegeEmailDomains to update
     */
    where?: CollegeEmailDomainWhereInput
    /**
     * Limit how many CollegeEmailDomains to update.
     */
    limit?: number
  }

  /**
   * CollegeEmailDomain updateManyAndReturn
   */
  export type CollegeEmailDomainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * The data used to update CollegeEmailDomains.
     */
    data: XOR<CollegeEmailDomainUpdateManyMutationInput, CollegeEmailDomainUncheckedUpdateManyInput>
    /**
     * Filter which CollegeEmailDomains to update
     */
    where?: CollegeEmailDomainWhereInput
    /**
     * Limit how many CollegeEmailDomains to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollegeEmailDomain upsert
   */
  export type CollegeEmailDomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainInclude<ExtArgs> | null
    /**
     * The filter to search for the CollegeEmailDomain to update in case it exists.
     */
    where: CollegeEmailDomainWhereUniqueInput
    /**
     * In case the CollegeEmailDomain found by the `where` argument doesn't exist, create a new CollegeEmailDomain with this data.
     */
    create: XOR<CollegeEmailDomainCreateInput, CollegeEmailDomainUncheckedCreateInput>
    /**
     * In case the CollegeEmailDomain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeEmailDomainUpdateInput, CollegeEmailDomainUncheckedUpdateInput>
  }

  /**
   * CollegeEmailDomain delete
   */
  export type CollegeEmailDomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainInclude<ExtArgs> | null
    /**
     * Filter which CollegeEmailDomain to delete.
     */
    where: CollegeEmailDomainWhereUniqueInput
  }

  /**
   * CollegeEmailDomain deleteMany
   */
  export type CollegeEmailDomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollegeEmailDomains to delete
     */
    where?: CollegeEmailDomainWhereInput
    /**
     * Limit how many CollegeEmailDomains to delete.
     */
    limit?: number
  }

  /**
   * CollegeEmailDomain without action
   */
  export type CollegeEmailDomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeEmailDomain
     */
    select?: CollegeEmailDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeEmailDomain
     */
    omit?: CollegeEmailDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeEmailDomainInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    upvotesCount: number | null
  }

  export type ProjectSumAggregateOutputType = {
    upvotesCount: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    collegeId: string | null
    githubUrl: string | null
    isCollaborative: boolean | null
    isLookingForContributors: boolean | null
    upvotesCount: number | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    collegeId: string | null
    githubUrl: string | null
    isCollaborative: boolean | null
    isLookingForContributors: boolean | null
    upvotesCount: number | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    collegeId: number
    githubUrl: number
    isCollaborative: number
    isLookingForContributors: number
    upvotesCount: number
    createdAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    upvotesCount?: true
  }

  export type ProjectSumAggregateInputType = {
    upvotesCount?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    collegeId?: true
    githubUrl?: true
    isCollaborative?: true
    isLookingForContributors?: true
    upvotesCount?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    collegeId?: true
    githubUrl?: true
    isCollaborative?: true
    isLookingForContributors?: true
    upvotesCount?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    collegeId?: true
    githubUrl?: true
    isCollaborative?: true
    isLookingForContributors?: true
    upvotesCount?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    slug: string
    description: string | null
    collegeId: string | null
    githubUrl: string | null
    isCollaborative: boolean
    isLookingForContributors: boolean
    upvotesCount: number
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    collegeId?: boolean
    githubUrl?: boolean
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: boolean
    createdAt?: boolean
    college?: boolean | Project$collegeArgs<ExtArgs>
    upvotes?: boolean | Project$upvotesArgs<ExtArgs>
    collaborators?: boolean | Project$collaboratorsArgs<ExtArgs>
    tags?: boolean | Project$tagsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    collegeId?: boolean
    githubUrl?: boolean
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: boolean
    createdAt?: boolean
    college?: boolean | Project$collegeArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    collegeId?: boolean
    githubUrl?: boolean
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: boolean
    createdAt?: boolean
    college?: boolean | Project$collegeArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    collegeId?: boolean
    githubUrl?: boolean
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: boolean
    createdAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "collegeId" | "githubUrl" | "isCollaborative" | "isLookingForContributors" | "upvotesCount" | "createdAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | Project$collegeArgs<ExtArgs>
    upvotes?: boolean | Project$upvotesArgs<ExtArgs>
    collaborators?: boolean | Project$collaboratorsArgs<ExtArgs>
    tags?: boolean | Project$tagsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | Project$collegeArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | Project$collegeArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs> | null
      upvotes: Prisma.$ProjectUpvotePayload<ExtArgs>[]
      collaborators: Prisma.$ProjectCollaboratorPayload<ExtArgs>[]
      tags: Prisma.$ProjectTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      description: string | null
      collegeId: string | null
      githubUrl: string | null
      isCollaborative: boolean
      isLookingForContributors: boolean
      upvotesCount: number
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends Project$collegeArgs<ExtArgs> = {}>(args?: Subset<T, Project$collegeArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    upvotes<T extends Project$upvotesArgs<ExtArgs> = {}>(args?: Subset<T, Project$upvotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborators<T extends Project$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Project$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Project$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Project$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly slug: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly collegeId: FieldRef<"Project", 'String'>
    readonly githubUrl: FieldRef<"Project", 'String'>
    readonly isCollaborative: FieldRef<"Project", 'Boolean'>
    readonly isLookingForContributors: FieldRef<"Project", 'Boolean'>
    readonly upvotesCount: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.college
   */
  export type Project$collegeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    where?: CollegeWhereInput
  }

  /**
   * Project.upvotes
   */
  export type Project$upvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
    where?: ProjectUpvoteWhereInput
    orderBy?: ProjectUpvoteOrderByWithRelationInput | ProjectUpvoteOrderByWithRelationInput[]
    cursor?: ProjectUpvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectUpvoteScalarFieldEnum | ProjectUpvoteScalarFieldEnum[]
  }

  /**
   * Project.collaborators
   */
  export type Project$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    where?: ProjectCollaboratorWhereInput
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    cursor?: ProjectCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCollaboratorScalarFieldEnum | ProjectCollaboratorScalarFieldEnum[]
  }

  /**
   * Project.tags
   */
  export type Project$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    where?: ProjectTagWhereInput
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    cursor?: ProjectTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectUpvote
   */

  export type AggregateProjectUpvote = {
    _count: ProjectUpvoteCountAggregateOutputType | null
    _min: ProjectUpvoteMinAggregateOutputType | null
    _max: ProjectUpvoteMaxAggregateOutputType | null
  }

  export type ProjectUpvoteMinAggregateOutputType = {
    userId: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type ProjectUpvoteMaxAggregateOutputType = {
    userId: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type ProjectUpvoteCountAggregateOutputType = {
    userId: number
    projectId: number
    createdAt: number
    _all: number
  }


  export type ProjectUpvoteMinAggregateInputType = {
    userId?: true
    projectId?: true
    createdAt?: true
  }

  export type ProjectUpvoteMaxAggregateInputType = {
    userId?: true
    projectId?: true
    createdAt?: true
  }

  export type ProjectUpvoteCountAggregateInputType = {
    userId?: true
    projectId?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectUpvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectUpvote to aggregate.
     */
    where?: ProjectUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUpvotes to fetch.
     */
    orderBy?: ProjectUpvoteOrderByWithRelationInput | ProjectUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectUpvotes
    **/
    _count?: true | ProjectUpvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectUpvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectUpvoteMaxAggregateInputType
  }

  export type GetProjectUpvoteAggregateType<T extends ProjectUpvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectUpvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectUpvote[P]>
      : GetScalarType<T[P], AggregateProjectUpvote[P]>
  }




  export type ProjectUpvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectUpvoteWhereInput
    orderBy?: ProjectUpvoteOrderByWithAggregationInput | ProjectUpvoteOrderByWithAggregationInput[]
    by: ProjectUpvoteScalarFieldEnum[] | ProjectUpvoteScalarFieldEnum
    having?: ProjectUpvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectUpvoteCountAggregateInputType | true
    _min?: ProjectUpvoteMinAggregateInputType
    _max?: ProjectUpvoteMaxAggregateInputType
  }

  export type ProjectUpvoteGroupByOutputType = {
    userId: string
    projectId: string
    createdAt: Date
    _count: ProjectUpvoteCountAggregateOutputType | null
    _min: ProjectUpvoteMinAggregateOutputType | null
    _max: ProjectUpvoteMaxAggregateOutputType | null
  }

  type GetProjectUpvoteGroupByPayload<T extends ProjectUpvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectUpvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectUpvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectUpvoteGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectUpvoteGroupByOutputType[P]>
        }
      >
    >


  export type ProjectUpvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectUpvote"]>

  export type ProjectUpvoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectUpvote"]>

  export type ProjectUpvoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectUpvote"]>

  export type ProjectUpvoteSelectScalar = {
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
  }

  export type ProjectUpvoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "projectId" | "createdAt", ExtArgs["result"]["projectUpvote"]>
  export type ProjectUpvoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectUpvoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectUpvoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectUpvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectUpvote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      projectId: string
      createdAt: Date
    }, ExtArgs["result"]["projectUpvote"]>
    composites: {}
  }

  type ProjectUpvoteGetPayload<S extends boolean | null | undefined | ProjectUpvoteDefaultArgs> = $Result.GetResult<Prisma.$ProjectUpvotePayload, S>

  type ProjectUpvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectUpvoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectUpvoteCountAggregateInputType | true
    }

  export interface ProjectUpvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectUpvote'], meta: { name: 'ProjectUpvote' } }
    /**
     * Find zero or one ProjectUpvote that matches the filter.
     * @param {ProjectUpvoteFindUniqueArgs} args - Arguments to find a ProjectUpvote
     * @example
     * // Get one ProjectUpvote
     * const projectUpvote = await prisma.projectUpvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectUpvoteFindUniqueArgs>(args: SelectSubset<T, ProjectUpvoteFindUniqueArgs<ExtArgs>>): Prisma__ProjectUpvoteClient<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectUpvote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectUpvoteFindUniqueOrThrowArgs} args - Arguments to find a ProjectUpvote
     * @example
     * // Get one ProjectUpvote
     * const projectUpvote = await prisma.projectUpvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectUpvoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectUpvoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectUpvoteClient<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectUpvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpvoteFindFirstArgs} args - Arguments to find a ProjectUpvote
     * @example
     * // Get one ProjectUpvote
     * const projectUpvote = await prisma.projectUpvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectUpvoteFindFirstArgs>(args?: SelectSubset<T, ProjectUpvoteFindFirstArgs<ExtArgs>>): Prisma__ProjectUpvoteClient<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectUpvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpvoteFindFirstOrThrowArgs} args - Arguments to find a ProjectUpvote
     * @example
     * // Get one ProjectUpvote
     * const projectUpvote = await prisma.projectUpvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectUpvoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectUpvoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectUpvoteClient<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectUpvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpvoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectUpvotes
     * const projectUpvotes = await prisma.projectUpvote.findMany()
     * 
     * // Get first 10 ProjectUpvotes
     * const projectUpvotes = await prisma.projectUpvote.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const projectUpvoteWithUserIdOnly = await prisma.projectUpvote.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ProjectUpvoteFindManyArgs>(args?: SelectSubset<T, ProjectUpvoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectUpvote.
     * @param {ProjectUpvoteCreateArgs} args - Arguments to create a ProjectUpvote.
     * @example
     * // Create one ProjectUpvote
     * const ProjectUpvote = await prisma.projectUpvote.create({
     *   data: {
     *     // ... data to create a ProjectUpvote
     *   }
     * })
     * 
     */
    create<T extends ProjectUpvoteCreateArgs>(args: SelectSubset<T, ProjectUpvoteCreateArgs<ExtArgs>>): Prisma__ProjectUpvoteClient<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectUpvotes.
     * @param {ProjectUpvoteCreateManyArgs} args - Arguments to create many ProjectUpvotes.
     * @example
     * // Create many ProjectUpvotes
     * const projectUpvote = await prisma.projectUpvote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectUpvoteCreateManyArgs>(args?: SelectSubset<T, ProjectUpvoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectUpvotes and returns the data saved in the database.
     * @param {ProjectUpvoteCreateManyAndReturnArgs} args - Arguments to create many ProjectUpvotes.
     * @example
     * // Create many ProjectUpvotes
     * const projectUpvote = await prisma.projectUpvote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectUpvotes and only return the `userId`
     * const projectUpvoteWithUserIdOnly = await prisma.projectUpvote.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectUpvoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectUpvoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectUpvote.
     * @param {ProjectUpvoteDeleteArgs} args - Arguments to delete one ProjectUpvote.
     * @example
     * // Delete one ProjectUpvote
     * const ProjectUpvote = await prisma.projectUpvote.delete({
     *   where: {
     *     // ... filter to delete one ProjectUpvote
     *   }
     * })
     * 
     */
    delete<T extends ProjectUpvoteDeleteArgs>(args: SelectSubset<T, ProjectUpvoteDeleteArgs<ExtArgs>>): Prisma__ProjectUpvoteClient<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectUpvote.
     * @param {ProjectUpvoteUpdateArgs} args - Arguments to update one ProjectUpvote.
     * @example
     * // Update one ProjectUpvote
     * const projectUpvote = await prisma.projectUpvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpvoteUpdateArgs>(args: SelectSubset<T, ProjectUpvoteUpdateArgs<ExtArgs>>): Prisma__ProjectUpvoteClient<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectUpvotes.
     * @param {ProjectUpvoteDeleteManyArgs} args - Arguments to filter ProjectUpvotes to delete.
     * @example
     * // Delete a few ProjectUpvotes
     * const { count } = await prisma.projectUpvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectUpvoteDeleteManyArgs>(args?: SelectSubset<T, ProjectUpvoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectUpvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectUpvotes
     * const projectUpvote = await prisma.projectUpvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpvoteUpdateManyArgs>(args: SelectSubset<T, ProjectUpvoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectUpvotes and returns the data updated in the database.
     * @param {ProjectUpvoteUpdateManyAndReturnArgs} args - Arguments to update many ProjectUpvotes.
     * @example
     * // Update many ProjectUpvotes
     * const projectUpvote = await prisma.projectUpvote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectUpvotes and only return the `userId`
     * const projectUpvoteWithUserIdOnly = await prisma.projectUpvote.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpvoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpvoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectUpvote.
     * @param {ProjectUpvoteUpsertArgs} args - Arguments to update or create a ProjectUpvote.
     * @example
     * // Update or create a ProjectUpvote
     * const projectUpvote = await prisma.projectUpvote.upsert({
     *   create: {
     *     // ... data to create a ProjectUpvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectUpvote we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpvoteUpsertArgs>(args: SelectSubset<T, ProjectUpvoteUpsertArgs<ExtArgs>>): Prisma__ProjectUpvoteClient<$Result.GetResult<Prisma.$ProjectUpvotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectUpvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpvoteCountArgs} args - Arguments to filter ProjectUpvotes to count.
     * @example
     * // Count the number of ProjectUpvotes
     * const count = await prisma.projectUpvote.count({
     *   where: {
     *     // ... the filter for the ProjectUpvotes we want to count
     *   }
     * })
    **/
    count<T extends ProjectUpvoteCountArgs>(
      args?: Subset<T, ProjectUpvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectUpvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectUpvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectUpvoteAggregateArgs>(args: Subset<T, ProjectUpvoteAggregateArgs>): Prisma.PrismaPromise<GetProjectUpvoteAggregateType<T>>

    /**
     * Group by ProjectUpvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpvoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectUpvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectUpvoteGroupByArgs['orderBy'] }
        : { orderBy?: ProjectUpvoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectUpvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectUpvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectUpvote model
   */
  readonly fields: ProjectUpvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectUpvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectUpvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectUpvote model
   */
  interface ProjectUpvoteFieldRefs {
    readonly userId: FieldRef<"ProjectUpvote", 'String'>
    readonly projectId: FieldRef<"ProjectUpvote", 'String'>
    readonly createdAt: FieldRef<"ProjectUpvote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectUpvote findUnique
   */
  export type ProjectUpvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUpvote to fetch.
     */
    where: ProjectUpvoteWhereUniqueInput
  }

  /**
   * ProjectUpvote findUniqueOrThrow
   */
  export type ProjectUpvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUpvote to fetch.
     */
    where: ProjectUpvoteWhereUniqueInput
  }

  /**
   * ProjectUpvote findFirst
   */
  export type ProjectUpvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUpvote to fetch.
     */
    where?: ProjectUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUpvotes to fetch.
     */
    orderBy?: ProjectUpvoteOrderByWithRelationInput | ProjectUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectUpvotes.
     */
    cursor?: ProjectUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectUpvotes.
     */
    distinct?: ProjectUpvoteScalarFieldEnum | ProjectUpvoteScalarFieldEnum[]
  }

  /**
   * ProjectUpvote findFirstOrThrow
   */
  export type ProjectUpvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUpvote to fetch.
     */
    where?: ProjectUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUpvotes to fetch.
     */
    orderBy?: ProjectUpvoteOrderByWithRelationInput | ProjectUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectUpvotes.
     */
    cursor?: ProjectUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectUpvotes.
     */
    distinct?: ProjectUpvoteScalarFieldEnum | ProjectUpvoteScalarFieldEnum[]
  }

  /**
   * ProjectUpvote findMany
   */
  export type ProjectUpvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUpvotes to fetch.
     */
    where?: ProjectUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUpvotes to fetch.
     */
    orderBy?: ProjectUpvoteOrderByWithRelationInput | ProjectUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectUpvotes.
     */
    cursor?: ProjectUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUpvotes.
     */
    skip?: number
    distinct?: ProjectUpvoteScalarFieldEnum | ProjectUpvoteScalarFieldEnum[]
  }

  /**
   * ProjectUpvote create
   */
  export type ProjectUpvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectUpvote.
     */
    data: XOR<ProjectUpvoteCreateInput, ProjectUpvoteUncheckedCreateInput>
  }

  /**
   * ProjectUpvote createMany
   */
  export type ProjectUpvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectUpvotes.
     */
    data: ProjectUpvoteCreateManyInput | ProjectUpvoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectUpvote createManyAndReturn
   */
  export type ProjectUpvoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectUpvotes.
     */
    data: ProjectUpvoteCreateManyInput | ProjectUpvoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectUpvote update
   */
  export type ProjectUpvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectUpvote.
     */
    data: XOR<ProjectUpvoteUpdateInput, ProjectUpvoteUncheckedUpdateInput>
    /**
     * Choose, which ProjectUpvote to update.
     */
    where: ProjectUpvoteWhereUniqueInput
  }

  /**
   * ProjectUpvote updateMany
   */
  export type ProjectUpvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectUpvotes.
     */
    data: XOR<ProjectUpvoteUpdateManyMutationInput, ProjectUpvoteUncheckedUpdateManyInput>
    /**
     * Filter which ProjectUpvotes to update
     */
    where?: ProjectUpvoteWhereInput
    /**
     * Limit how many ProjectUpvotes to update.
     */
    limit?: number
  }

  /**
   * ProjectUpvote updateManyAndReturn
   */
  export type ProjectUpvoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * The data used to update ProjectUpvotes.
     */
    data: XOR<ProjectUpvoteUpdateManyMutationInput, ProjectUpvoteUncheckedUpdateManyInput>
    /**
     * Filter which ProjectUpvotes to update
     */
    where?: ProjectUpvoteWhereInput
    /**
     * Limit how many ProjectUpvotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectUpvote upsert
   */
  export type ProjectUpvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectUpvote to update in case it exists.
     */
    where: ProjectUpvoteWhereUniqueInput
    /**
     * In case the ProjectUpvote found by the `where` argument doesn't exist, create a new ProjectUpvote with this data.
     */
    create: XOR<ProjectUpvoteCreateInput, ProjectUpvoteUncheckedCreateInput>
    /**
     * In case the ProjectUpvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpvoteUpdateInput, ProjectUpvoteUncheckedUpdateInput>
  }

  /**
   * ProjectUpvote delete
   */
  export type ProjectUpvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
    /**
     * Filter which ProjectUpvote to delete.
     */
    where: ProjectUpvoteWhereUniqueInput
  }

  /**
   * ProjectUpvote deleteMany
   */
  export type ProjectUpvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectUpvotes to delete
     */
    where?: ProjectUpvoteWhereInput
    /**
     * Limit how many ProjectUpvotes to delete.
     */
    limit?: number
  }

  /**
   * ProjectUpvote without action
   */
  export type ProjectUpvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUpvote
     */
    select?: ProjectUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUpvote
     */
    omit?: ProjectUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUpvoteInclude<ExtArgs> | null
  }


  /**
   * Model ProjectCollaborator
   */

  export type AggregateProjectCollaborator = {
    _count: ProjectCollaboratorCountAggregateOutputType | null
    _min: ProjectCollaboratorMinAggregateOutputType | null
    _max: ProjectCollaboratorMaxAggregateOutputType | null
  }

  export type ProjectCollaboratorMinAggregateOutputType = {
    userId: string | null
    projectId: string | null
    role: $Enums.ProjectUserRole | null
    joinedAt: Date | null
  }

  export type ProjectCollaboratorMaxAggregateOutputType = {
    userId: string | null
    projectId: string | null
    role: $Enums.ProjectUserRole | null
    joinedAt: Date | null
  }

  export type ProjectCollaboratorCountAggregateOutputType = {
    userId: number
    projectId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type ProjectCollaboratorMinAggregateInputType = {
    userId?: true
    projectId?: true
    role?: true
    joinedAt?: true
  }

  export type ProjectCollaboratorMaxAggregateInputType = {
    userId?: true
    projectId?: true
    role?: true
    joinedAt?: true
  }

  export type ProjectCollaboratorCountAggregateInputType = {
    userId?: true
    projectId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type ProjectCollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCollaborator to aggregate.
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCollaborators to fetch.
     */
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectCollaborators
    **/
    _count?: true | ProjectCollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectCollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectCollaboratorMaxAggregateInputType
  }

  export type GetProjectCollaboratorAggregateType<T extends ProjectCollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectCollaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectCollaborator[P]>
      : GetScalarType<T[P], AggregateProjectCollaborator[P]>
  }




  export type ProjectCollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCollaboratorWhereInput
    orderBy?: ProjectCollaboratorOrderByWithAggregationInput | ProjectCollaboratorOrderByWithAggregationInput[]
    by: ProjectCollaboratorScalarFieldEnum[] | ProjectCollaboratorScalarFieldEnum
    having?: ProjectCollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCollaboratorCountAggregateInputType | true
    _min?: ProjectCollaboratorMinAggregateInputType
    _max?: ProjectCollaboratorMaxAggregateInputType
  }

  export type ProjectCollaboratorGroupByOutputType = {
    userId: string
    projectId: string
    role: $Enums.ProjectUserRole
    joinedAt: Date
    _count: ProjectCollaboratorCountAggregateOutputType | null
    _min: ProjectCollaboratorMinAggregateOutputType | null
    _max: ProjectCollaboratorMaxAggregateOutputType | null
  }

  type GetProjectCollaboratorGroupByPayload<T extends ProjectCollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectCollaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectCollaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectCollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectCollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type ProjectCollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCollaborator"]>

  export type ProjectCollaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCollaborator"]>

  export type ProjectCollaboratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCollaborator"]>

  export type ProjectCollaboratorSelectScalar = {
    userId?: boolean
    projectId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type ProjectCollaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "projectId" | "role" | "joinedAt", ExtArgs["result"]["projectCollaborator"]>
  export type ProjectCollaboratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectCollaboratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectCollaboratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectCollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectCollaborator"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      projectId: string
      role: $Enums.ProjectUserRole
      joinedAt: Date
    }, ExtArgs["result"]["projectCollaborator"]>
    composites: {}
  }

  type ProjectCollaboratorGetPayload<S extends boolean | null | undefined | ProjectCollaboratorDefaultArgs> = $Result.GetResult<Prisma.$ProjectCollaboratorPayload, S>

  type ProjectCollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectCollaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCollaboratorCountAggregateInputType | true
    }

  export interface ProjectCollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectCollaborator'], meta: { name: 'ProjectCollaborator' } }
    /**
     * Find zero or one ProjectCollaborator that matches the filter.
     * @param {ProjectCollaboratorFindUniqueArgs} args - Arguments to find a ProjectCollaborator
     * @example
     * // Get one ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectCollaboratorFindUniqueArgs>(args: SelectSubset<T, ProjectCollaboratorFindUniqueArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectCollaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectCollaboratorFindUniqueOrThrowArgs} args - Arguments to find a ProjectCollaborator
     * @example
     * // Get one ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectCollaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectCollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCollaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorFindFirstArgs} args - Arguments to find a ProjectCollaborator
     * @example
     * // Get one ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectCollaboratorFindFirstArgs>(args?: SelectSubset<T, ProjectCollaboratorFindFirstArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCollaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorFindFirstOrThrowArgs} args - Arguments to find a ProjectCollaborator
     * @example
     * // Get one ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectCollaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectCollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectCollaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectCollaborators
     * const projectCollaborators = await prisma.projectCollaborator.findMany()
     * 
     * // Get first 10 ProjectCollaborators
     * const projectCollaborators = await prisma.projectCollaborator.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const projectCollaboratorWithUserIdOnly = await prisma.projectCollaborator.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ProjectCollaboratorFindManyArgs>(args?: SelectSubset<T, ProjectCollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectCollaborator.
     * @param {ProjectCollaboratorCreateArgs} args - Arguments to create a ProjectCollaborator.
     * @example
     * // Create one ProjectCollaborator
     * const ProjectCollaborator = await prisma.projectCollaborator.create({
     *   data: {
     *     // ... data to create a ProjectCollaborator
     *   }
     * })
     * 
     */
    create<T extends ProjectCollaboratorCreateArgs>(args: SelectSubset<T, ProjectCollaboratorCreateArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectCollaborators.
     * @param {ProjectCollaboratorCreateManyArgs} args - Arguments to create many ProjectCollaborators.
     * @example
     * // Create many ProjectCollaborators
     * const projectCollaborator = await prisma.projectCollaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCollaboratorCreateManyArgs>(args?: SelectSubset<T, ProjectCollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectCollaborators and returns the data saved in the database.
     * @param {ProjectCollaboratorCreateManyAndReturnArgs} args - Arguments to create many ProjectCollaborators.
     * @example
     * // Create many ProjectCollaborators
     * const projectCollaborator = await prisma.projectCollaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectCollaborators and only return the `userId`
     * const projectCollaboratorWithUserIdOnly = await prisma.projectCollaborator.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCollaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCollaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectCollaborator.
     * @param {ProjectCollaboratorDeleteArgs} args - Arguments to delete one ProjectCollaborator.
     * @example
     * // Delete one ProjectCollaborator
     * const ProjectCollaborator = await prisma.projectCollaborator.delete({
     *   where: {
     *     // ... filter to delete one ProjectCollaborator
     *   }
     * })
     * 
     */
    delete<T extends ProjectCollaboratorDeleteArgs>(args: SelectSubset<T, ProjectCollaboratorDeleteArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectCollaborator.
     * @param {ProjectCollaboratorUpdateArgs} args - Arguments to update one ProjectCollaborator.
     * @example
     * // Update one ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectCollaboratorUpdateArgs>(args: SelectSubset<T, ProjectCollaboratorUpdateArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectCollaborators.
     * @param {ProjectCollaboratorDeleteManyArgs} args - Arguments to filter ProjectCollaborators to delete.
     * @example
     * // Delete a few ProjectCollaborators
     * const { count } = await prisma.projectCollaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectCollaboratorDeleteManyArgs>(args?: SelectSubset<T, ProjectCollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectCollaborators
     * const projectCollaborator = await prisma.projectCollaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectCollaboratorUpdateManyArgs>(args: SelectSubset<T, ProjectCollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCollaborators and returns the data updated in the database.
     * @param {ProjectCollaboratorUpdateManyAndReturnArgs} args - Arguments to update many ProjectCollaborators.
     * @example
     * // Update many ProjectCollaborators
     * const projectCollaborator = await prisma.projectCollaborator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectCollaborators and only return the `userId`
     * const projectCollaboratorWithUserIdOnly = await prisma.projectCollaborator.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectCollaboratorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectCollaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectCollaborator.
     * @param {ProjectCollaboratorUpsertArgs} args - Arguments to update or create a ProjectCollaborator.
     * @example
     * // Update or create a ProjectCollaborator
     * const projectCollaborator = await prisma.projectCollaborator.upsert({
     *   create: {
     *     // ... data to create a ProjectCollaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectCollaborator we want to update
     *   }
     * })
     */
    upsert<T extends ProjectCollaboratorUpsertArgs>(args: SelectSubset<T, ProjectCollaboratorUpsertArgs<ExtArgs>>): Prisma__ProjectCollaboratorClient<$Result.GetResult<Prisma.$ProjectCollaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorCountArgs} args - Arguments to filter ProjectCollaborators to count.
     * @example
     * // Count the number of ProjectCollaborators
     * const count = await prisma.projectCollaborator.count({
     *   where: {
     *     // ... the filter for the ProjectCollaborators we want to count
     *   }
     * })
    **/
    count<T extends ProjectCollaboratorCountArgs>(
      args?: Subset<T, ProjectCollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectCollaboratorAggregateArgs>(args: Subset<T, ProjectCollaboratorAggregateArgs>): Prisma.PrismaPromise<GetProjectCollaboratorAggregateType<T>>

    /**
     * Group by ProjectCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCollaboratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectCollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectCollaboratorGroupByArgs['orderBy'] }
        : { orderBy?: ProjectCollaboratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectCollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectCollaborator model
   */
  readonly fields: ProjectCollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectCollaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectCollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectCollaborator model
   */
  interface ProjectCollaboratorFieldRefs {
    readonly userId: FieldRef<"ProjectCollaborator", 'String'>
    readonly projectId: FieldRef<"ProjectCollaborator", 'String'>
    readonly role: FieldRef<"ProjectCollaborator", 'ProjectUserRole'>
    readonly joinedAt: FieldRef<"ProjectCollaborator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectCollaborator findUnique
   */
  export type ProjectCollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCollaborator to fetch.
     */
    where: ProjectCollaboratorWhereUniqueInput
  }

  /**
   * ProjectCollaborator findUniqueOrThrow
   */
  export type ProjectCollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCollaborator to fetch.
     */
    where: ProjectCollaboratorWhereUniqueInput
  }

  /**
   * ProjectCollaborator findFirst
   */
  export type ProjectCollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCollaborator to fetch.
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCollaborators to fetch.
     */
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCollaborators.
     */
    cursor?: ProjectCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCollaborators.
     */
    distinct?: ProjectCollaboratorScalarFieldEnum | ProjectCollaboratorScalarFieldEnum[]
  }

  /**
   * ProjectCollaborator findFirstOrThrow
   */
  export type ProjectCollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCollaborator to fetch.
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCollaborators to fetch.
     */
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCollaborators.
     */
    cursor?: ProjectCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCollaborators.
     */
    distinct?: ProjectCollaboratorScalarFieldEnum | ProjectCollaboratorScalarFieldEnum[]
  }

  /**
   * ProjectCollaborator findMany
   */
  export type ProjectCollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCollaborators to fetch.
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCollaborators to fetch.
     */
    orderBy?: ProjectCollaboratorOrderByWithRelationInput | ProjectCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectCollaborators.
     */
    cursor?: ProjectCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCollaborators.
     */
    skip?: number
    distinct?: ProjectCollaboratorScalarFieldEnum | ProjectCollaboratorScalarFieldEnum[]
  }

  /**
   * ProjectCollaborator create
   */
  export type ProjectCollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectCollaborator.
     */
    data: XOR<ProjectCollaboratorCreateInput, ProjectCollaboratorUncheckedCreateInput>
  }

  /**
   * ProjectCollaborator createMany
   */
  export type ProjectCollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectCollaborators.
     */
    data: ProjectCollaboratorCreateManyInput | ProjectCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectCollaborator createManyAndReturn
   */
  export type ProjectCollaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectCollaborators.
     */
    data: ProjectCollaboratorCreateManyInput | ProjectCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectCollaborator update
   */
  export type ProjectCollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectCollaborator.
     */
    data: XOR<ProjectCollaboratorUpdateInput, ProjectCollaboratorUncheckedUpdateInput>
    /**
     * Choose, which ProjectCollaborator to update.
     */
    where: ProjectCollaboratorWhereUniqueInput
  }

  /**
   * ProjectCollaborator updateMany
   */
  export type ProjectCollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectCollaborators.
     */
    data: XOR<ProjectCollaboratorUpdateManyMutationInput, ProjectCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCollaborators to update
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * Limit how many ProjectCollaborators to update.
     */
    limit?: number
  }

  /**
   * ProjectCollaborator updateManyAndReturn
   */
  export type ProjectCollaboratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * The data used to update ProjectCollaborators.
     */
    data: XOR<ProjectCollaboratorUpdateManyMutationInput, ProjectCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCollaborators to update
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * Limit how many ProjectCollaborators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectCollaborator upsert
   */
  export type ProjectCollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectCollaborator to update in case it exists.
     */
    where: ProjectCollaboratorWhereUniqueInput
    /**
     * In case the ProjectCollaborator found by the `where` argument doesn't exist, create a new ProjectCollaborator with this data.
     */
    create: XOR<ProjectCollaboratorCreateInput, ProjectCollaboratorUncheckedCreateInput>
    /**
     * In case the ProjectCollaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectCollaboratorUpdateInput, ProjectCollaboratorUncheckedUpdateInput>
  }

  /**
   * ProjectCollaborator delete
   */
  export type ProjectCollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
    /**
     * Filter which ProjectCollaborator to delete.
     */
    where: ProjectCollaboratorWhereUniqueInput
  }

  /**
   * ProjectCollaborator deleteMany
   */
  export type ProjectCollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCollaborators to delete
     */
    where?: ProjectCollaboratorWhereInput
    /**
     * Limit how many ProjectCollaborators to delete.
     */
    limit?: number
  }

  /**
   * ProjectCollaborator without action
   */
  export type ProjectCollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCollaborator
     */
    select?: ProjectCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCollaborator
     */
    omit?: ProjectCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCollaboratorInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    slug: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    projects?: boolean | Tag$projectsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Tag$projectsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      projects: Prisma.$ProjectTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Tag$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly slug: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.projects
   */
  export type Tag$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    where?: ProjectTagWhereInput
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    cursor?: ProjectTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model ProjectTag
   */

  export type AggregateProjectTag = {
    _count: ProjectTagCountAggregateOutputType | null
    _min: ProjectTagMinAggregateOutputType | null
    _max: ProjectTagMaxAggregateOutputType | null
  }

  export type ProjectTagMinAggregateOutputType = {
    projectId: string | null
    tagId: string | null
  }

  export type ProjectTagMaxAggregateOutputType = {
    projectId: string | null
    tagId: string | null
  }

  export type ProjectTagCountAggregateOutputType = {
    projectId: number
    tagId: number
    _all: number
  }


  export type ProjectTagMinAggregateInputType = {
    projectId?: true
    tagId?: true
  }

  export type ProjectTagMaxAggregateInputType = {
    projectId?: true
    tagId?: true
  }

  export type ProjectTagCountAggregateInputType = {
    projectId?: true
    tagId?: true
    _all?: true
  }

  export type ProjectTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTag to aggregate.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTags
    **/
    _count?: true | ProjectTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTagMaxAggregateInputType
  }

  export type GetProjectTagAggregateType<T extends ProjectTagAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTag[P]>
      : GetScalarType<T[P], AggregateProjectTag[P]>
  }




  export type ProjectTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTagWhereInput
    orderBy?: ProjectTagOrderByWithAggregationInput | ProjectTagOrderByWithAggregationInput[]
    by: ProjectTagScalarFieldEnum[] | ProjectTagScalarFieldEnum
    having?: ProjectTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTagCountAggregateInputType | true
    _min?: ProjectTagMinAggregateInputType
    _max?: ProjectTagMaxAggregateInputType
  }

  export type ProjectTagGroupByOutputType = {
    projectId: string
    tagId: string
    _count: ProjectTagCountAggregateOutputType | null
    _min: ProjectTagMinAggregateOutputType | null
    _max: ProjectTagMaxAggregateOutputType | null
  }

  type GetProjectTagGroupByPayload<T extends ProjectTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTagGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTagGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    tagId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTag"]>

  export type ProjectTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    tagId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTag"]>

  export type ProjectTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    tagId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTag"]>

  export type ProjectTagSelectScalar = {
    projectId?: boolean
    tagId?: boolean
  }

  export type ProjectTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectId" | "tagId", ExtArgs["result"]["projectTag"]>
  export type ProjectTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ProjectTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ProjectTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $ProjectTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTag"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: string
      tagId: string
    }, ExtArgs["result"]["projectTag"]>
    composites: {}
  }

  type ProjectTagGetPayload<S extends boolean | null | undefined | ProjectTagDefaultArgs> = $Result.GetResult<Prisma.$ProjectTagPayload, S>

  type ProjectTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTagCountAggregateInputType | true
    }

  export interface ProjectTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTag'], meta: { name: 'ProjectTag' } }
    /**
     * Find zero or one ProjectTag that matches the filter.
     * @param {ProjectTagFindUniqueArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTagFindUniqueArgs>(args: SelectSubset<T, ProjectTagFindUniqueArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTagFindUniqueOrThrowArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindFirstArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTagFindFirstArgs>(args?: SelectSubset<T, ProjectTagFindFirstArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindFirstOrThrowArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTags
     * const projectTags = await prisma.projectTag.findMany()
     * 
     * // Get first 10 ProjectTags
     * const projectTags = await prisma.projectTag.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectTagWithProjectIdOnly = await prisma.projectTag.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends ProjectTagFindManyArgs>(args?: SelectSubset<T, ProjectTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTag.
     * @param {ProjectTagCreateArgs} args - Arguments to create a ProjectTag.
     * @example
     * // Create one ProjectTag
     * const ProjectTag = await prisma.projectTag.create({
     *   data: {
     *     // ... data to create a ProjectTag
     *   }
     * })
     * 
     */
    create<T extends ProjectTagCreateArgs>(args: SelectSubset<T, ProjectTagCreateArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTags.
     * @param {ProjectTagCreateManyArgs} args - Arguments to create many ProjectTags.
     * @example
     * // Create many ProjectTags
     * const projectTag = await prisma.projectTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTagCreateManyArgs>(args?: SelectSubset<T, ProjectTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectTags and returns the data saved in the database.
     * @param {ProjectTagCreateManyAndReturnArgs} args - Arguments to create many ProjectTags.
     * @example
     * // Create many ProjectTags
     * const projectTag = await prisma.projectTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectTags and only return the `projectId`
     * const projectTagWithProjectIdOnly = await prisma.projectTag.createManyAndReturn({
     *   select: { projectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectTag.
     * @param {ProjectTagDeleteArgs} args - Arguments to delete one ProjectTag.
     * @example
     * // Delete one ProjectTag
     * const ProjectTag = await prisma.projectTag.delete({
     *   where: {
     *     // ... filter to delete one ProjectTag
     *   }
     * })
     * 
     */
    delete<T extends ProjectTagDeleteArgs>(args: SelectSubset<T, ProjectTagDeleteArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTag.
     * @param {ProjectTagUpdateArgs} args - Arguments to update one ProjectTag.
     * @example
     * // Update one ProjectTag
     * const projectTag = await prisma.projectTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTagUpdateArgs>(args: SelectSubset<T, ProjectTagUpdateArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTags.
     * @param {ProjectTagDeleteManyArgs} args - Arguments to filter ProjectTags to delete.
     * @example
     * // Delete a few ProjectTags
     * const { count } = await prisma.projectTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTagDeleteManyArgs>(args?: SelectSubset<T, ProjectTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTags
     * const projectTag = await prisma.projectTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTagUpdateManyArgs>(args: SelectSubset<T, ProjectTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTags and returns the data updated in the database.
     * @param {ProjectTagUpdateManyAndReturnArgs} args - Arguments to update many ProjectTags.
     * @example
     * // Update many ProjectTags
     * const projectTag = await prisma.projectTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectTags and only return the `projectId`
     * const projectTagWithProjectIdOnly = await prisma.projectTag.updateManyAndReturn({
     *   select: { projectId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectTag.
     * @param {ProjectTagUpsertArgs} args - Arguments to update or create a ProjectTag.
     * @example
     * // Update or create a ProjectTag
     * const projectTag = await prisma.projectTag.upsert({
     *   create: {
     *     // ... data to create a ProjectTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTag we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTagUpsertArgs>(args: SelectSubset<T, ProjectTagUpsertArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagCountArgs} args - Arguments to filter ProjectTags to count.
     * @example
     * // Count the number of ProjectTags
     * const count = await prisma.projectTag.count({
     *   where: {
     *     // ... the filter for the ProjectTags we want to count
     *   }
     * })
    **/
    count<T extends ProjectTagCountArgs>(
      args?: Subset<T, ProjectTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectTagAggregateArgs>(args: Subset<T, ProjectTagAggregateArgs>): Prisma.PrismaPromise<GetProjectTagAggregateType<T>>

    /**
     * Group by ProjectTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTagGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTag model
   */
  readonly fields: ProjectTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectTag model
   */
  interface ProjectTagFieldRefs {
    readonly projectId: FieldRef<"ProjectTag", 'String'>
    readonly tagId: FieldRef<"ProjectTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTag findUnique
   */
  export type ProjectTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag findUniqueOrThrow
   */
  export type ProjectTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag findFirst
   */
  export type ProjectTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTags.
     */
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag findFirstOrThrow
   */
  export type ProjectTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTags.
     */
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag findMany
   */
  export type ProjectTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTags to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag create
   */
  export type ProjectTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTag.
     */
    data: XOR<ProjectTagCreateInput, ProjectTagUncheckedCreateInput>
  }

  /**
   * ProjectTag createMany
   */
  export type ProjectTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTags.
     */
    data: ProjectTagCreateManyInput | ProjectTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectTag createManyAndReturn
   */
  export type ProjectTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectTags.
     */
    data: ProjectTagCreateManyInput | ProjectTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTag update
   */
  export type ProjectTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTag.
     */
    data: XOR<ProjectTagUpdateInput, ProjectTagUncheckedUpdateInput>
    /**
     * Choose, which ProjectTag to update.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag updateMany
   */
  export type ProjectTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTags.
     */
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTags to update
     */
    where?: ProjectTagWhereInput
    /**
     * Limit how many ProjectTags to update.
     */
    limit?: number
  }

  /**
   * ProjectTag updateManyAndReturn
   */
  export type ProjectTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * The data used to update ProjectTags.
     */
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTags to update
     */
    where?: ProjectTagWhereInput
    /**
     * Limit how many ProjectTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTag upsert
   */
  export type ProjectTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTag to update in case it exists.
     */
    where: ProjectTagWhereUniqueInput
    /**
     * In case the ProjectTag found by the `where` argument doesn't exist, create a new ProjectTag with this data.
     */
    create: XOR<ProjectTagCreateInput, ProjectTagUncheckedCreateInput>
    /**
     * In case the ProjectTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTagUpdateInput, ProjectTagUncheckedUpdateInput>
  }

  /**
   * ProjectTag delete
   */
  export type ProjectTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter which ProjectTag to delete.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag deleteMany
   */
  export type ProjectTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTags to delete
     */
    where?: ProjectTagWhereInput
    /**
     * Limit how many ProjectTags to delete.
     */
    limit?: number
  }

  /**
   * ProjectTag without action
   */
  export type ProjectTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    username: 'username',
    email: 'email',
    avatarUrl: 'avatarUrl',
    isSuperAdmin: 'isSuperAdmin',
    githubUsername: 'githubUsername',
    createdAt: 'createdAt',
    websiteUrl: 'websiteUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CollegeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    shortName: 'shortName',
    logoUrl: 'logoUrl',
    coverImageUrl: 'coverImageUrl',
    description: 'description',
    location: 'location',
    website: 'website',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollegeScalarFieldEnum = (typeof CollegeScalarFieldEnum)[keyof typeof CollegeScalarFieldEnum]


  export const UserCollegeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    collegeId: 'collegeId',
    userType: 'userType',
    isAdmin: 'isAdmin',
    degreeType: 'degreeType',
    branch: 'branch',
    verified: 'verified',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt'
  };

  export type UserCollegeScalarFieldEnum = (typeof UserCollegeScalarFieldEnum)[keyof typeof UserCollegeScalarFieldEnum]


  export const CollegeEmailDomainScalarFieldEnum: {
    id: 'id',
    domain: 'domain',
    collegeId: 'collegeId'
  };

  export type CollegeEmailDomainScalarFieldEnum = (typeof CollegeEmailDomainScalarFieldEnum)[keyof typeof CollegeEmailDomainScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    collegeId: 'collegeId',
    githubUrl: 'githubUrl',
    isCollaborative: 'isCollaborative',
    isLookingForContributors: 'isLookingForContributors',
    upvotesCount: 'upvotesCount',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectUpvoteScalarFieldEnum: {
    userId: 'userId',
    projectId: 'projectId',
    createdAt: 'createdAt'
  };

  export type ProjectUpvoteScalarFieldEnum = (typeof ProjectUpvoteScalarFieldEnum)[keyof typeof ProjectUpvoteScalarFieldEnum]


  export const ProjectCollaboratorScalarFieldEnum: {
    userId: 'userId',
    projectId: 'projectId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type ProjectCollaboratorScalarFieldEnum = (typeof ProjectCollaboratorScalarFieldEnum)[keyof typeof ProjectCollaboratorScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const ProjectTagScalarFieldEnum: {
    projectId: 'projectId',
    tagId: 'tagId'
  };

  export type ProjectTagScalarFieldEnum = (typeof ProjectTagScalarFieldEnum)[keyof typeof ProjectTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProjectUserRole'
   */
  export type EnumProjectUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectUserRole'>
    


  /**
   * Reference to a field of type 'ProjectUserRole[]'
   */
  export type ListEnumProjectUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectUserRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isSuperAdmin?: BoolFilter<"User"> | boolean
    githubUsername?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    websiteUrl?: StringNullableFilter<"User"> | string | null
    userColleges?: UserCollegeListRelationFilter
    projectUpvotes?: ProjectUpvoteListRelationFilter
    ProjectCollaborator?: ProjectCollaboratorListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    username?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isSuperAdmin?: SortOrder
    githubUsername?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    userColleges?: UserCollegeOrderByRelationAggregateInput
    projectUpvotes?: ProjectUpvoteOrderByRelationAggregateInput
    ProjectCollaborator?: ProjectCollaboratorOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isSuperAdmin?: BoolFilter<"User"> | boolean
    githubUsername?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    websiteUrl?: StringNullableFilter<"User"> | string | null
    userColleges?: UserCollegeListRelationFilter
    projectUpvotes?: ProjectUpvoteListRelationFilter
    ProjectCollaborator?: ProjectCollaboratorListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    username?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isSuperAdmin?: SortOrder
    githubUsername?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    middleName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    isSuperAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    githubUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    websiteUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CollegeWhereInput = {
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    id?: UuidFilter<"College"> | string
    name?: StringFilter<"College"> | string
    slug?: StringFilter<"College"> | string
    shortName?: StringNullableFilter<"College"> | string | null
    logoUrl?: StringNullableFilter<"College"> | string | null
    coverImageUrl?: StringNullableFilter<"College"> | string | null
    description?: StringNullableFilter<"College"> | string | null
    location?: StringNullableFilter<"College"> | string | null
    website?: StringNullableFilter<"College"> | string | null
    createdAt?: DateTimeFilter<"College"> | Date | string
    updatedAt?: DateTimeFilter<"College"> | Date | string
    userColleges?: UserCollegeListRelationFilter
    projects?: ProjectListRelationFilter
    emailDomains?: CollegeEmailDomainListRelationFilter
  }

  export type CollegeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortName?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userColleges?: UserCollegeOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    emailDomains?: CollegeEmailDomainOrderByRelationAggregateInput
  }

  export type CollegeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    name?: StringFilter<"College"> | string
    shortName?: StringNullableFilter<"College"> | string | null
    logoUrl?: StringNullableFilter<"College"> | string | null
    coverImageUrl?: StringNullableFilter<"College"> | string | null
    description?: StringNullableFilter<"College"> | string | null
    location?: StringNullableFilter<"College"> | string | null
    website?: StringNullableFilter<"College"> | string | null
    createdAt?: DateTimeFilter<"College"> | Date | string
    updatedAt?: DateTimeFilter<"College"> | Date | string
    userColleges?: UserCollegeListRelationFilter
    projects?: ProjectListRelationFilter
    emailDomains?: CollegeEmailDomainListRelationFilter
  }, "id" | "slug">

  export type CollegeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortName?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollegeCountOrderByAggregateInput
    _max?: CollegeMaxOrderByAggregateInput
    _min?: CollegeMinOrderByAggregateInput
  }

  export type CollegeScalarWhereWithAggregatesInput = {
    AND?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    OR?: CollegeScalarWhereWithAggregatesInput[]
    NOT?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"College"> | string
    name?: StringWithAggregatesFilter<"College"> | string
    slug?: StringWithAggregatesFilter<"College"> | string
    shortName?: StringNullableWithAggregatesFilter<"College"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"College"> | string | null
    coverImageUrl?: StringNullableWithAggregatesFilter<"College"> | string | null
    description?: StringNullableWithAggregatesFilter<"College"> | string | null
    location?: StringNullableWithAggregatesFilter<"College"> | string | null
    website?: StringNullableWithAggregatesFilter<"College"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"College"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"College"> | Date | string
  }

  export type UserCollegeWhereInput = {
    AND?: UserCollegeWhereInput | UserCollegeWhereInput[]
    OR?: UserCollegeWhereInput[]
    NOT?: UserCollegeWhereInput | UserCollegeWhereInput[]
    id?: UuidFilter<"UserCollege"> | string
    userId?: UuidFilter<"UserCollege"> | string
    collegeId?: UuidFilter<"UserCollege"> | string
    userType?: EnumUserTypeFilter<"UserCollege"> | $Enums.UserType
    isAdmin?: BoolFilter<"UserCollege"> | boolean
    degreeType?: StringNullableFilter<"UserCollege"> | string | null
    branch?: StringNullableFilter<"UserCollege"> | string | null
    verified?: BoolFilter<"UserCollege"> | boolean
    joinedAt?: DateTimeFilter<"UserCollege"> | Date | string
    leftAt?: DateTimeNullableFilter<"UserCollege"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }

  export type UserCollegeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
    userType?: SortOrder
    isAdmin?: SortOrder
    degreeType?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    verified?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    college?: CollegeOrderByWithRelationInput
  }

  export type UserCollegeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCollegeWhereInput | UserCollegeWhereInput[]
    OR?: UserCollegeWhereInput[]
    NOT?: UserCollegeWhereInput | UserCollegeWhereInput[]
    userId?: UuidFilter<"UserCollege"> | string
    collegeId?: UuidFilter<"UserCollege"> | string
    userType?: EnumUserTypeFilter<"UserCollege"> | $Enums.UserType
    isAdmin?: BoolFilter<"UserCollege"> | boolean
    degreeType?: StringNullableFilter<"UserCollege"> | string | null
    branch?: StringNullableFilter<"UserCollege"> | string | null
    verified?: BoolFilter<"UserCollege"> | boolean
    joinedAt?: DateTimeFilter<"UserCollege"> | Date | string
    leftAt?: DateTimeNullableFilter<"UserCollege"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }, "id">

  export type UserCollegeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
    userType?: SortOrder
    isAdmin?: SortOrder
    degreeType?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    verified?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    _count?: UserCollegeCountOrderByAggregateInput
    _max?: UserCollegeMaxOrderByAggregateInput
    _min?: UserCollegeMinOrderByAggregateInput
  }

  export type UserCollegeScalarWhereWithAggregatesInput = {
    AND?: UserCollegeScalarWhereWithAggregatesInput | UserCollegeScalarWhereWithAggregatesInput[]
    OR?: UserCollegeScalarWhereWithAggregatesInput[]
    NOT?: UserCollegeScalarWhereWithAggregatesInput | UserCollegeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserCollege"> | string
    userId?: UuidWithAggregatesFilter<"UserCollege"> | string
    collegeId?: UuidWithAggregatesFilter<"UserCollege"> | string
    userType?: EnumUserTypeWithAggregatesFilter<"UserCollege"> | $Enums.UserType
    isAdmin?: BoolWithAggregatesFilter<"UserCollege"> | boolean
    degreeType?: StringNullableWithAggregatesFilter<"UserCollege"> | string | null
    branch?: StringNullableWithAggregatesFilter<"UserCollege"> | string | null
    verified?: BoolWithAggregatesFilter<"UserCollege"> | boolean
    joinedAt?: DateTimeWithAggregatesFilter<"UserCollege"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"UserCollege"> | Date | string | null
  }

  export type CollegeEmailDomainWhereInput = {
    AND?: CollegeEmailDomainWhereInput | CollegeEmailDomainWhereInput[]
    OR?: CollegeEmailDomainWhereInput[]
    NOT?: CollegeEmailDomainWhereInput | CollegeEmailDomainWhereInput[]
    id?: UuidFilter<"CollegeEmailDomain"> | string
    domain?: StringFilter<"CollegeEmailDomain"> | string
    collegeId?: UuidFilter<"CollegeEmailDomain"> | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }

  export type CollegeEmailDomainOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    collegeId?: SortOrder
    college?: CollegeOrderByWithRelationInput
  }

  export type CollegeEmailDomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domain?: string
    AND?: CollegeEmailDomainWhereInput | CollegeEmailDomainWhereInput[]
    OR?: CollegeEmailDomainWhereInput[]
    NOT?: CollegeEmailDomainWhereInput | CollegeEmailDomainWhereInput[]
    collegeId?: UuidFilter<"CollegeEmailDomain"> | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
  }, "id" | "domain">

  export type CollegeEmailDomainOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    collegeId?: SortOrder
    _count?: CollegeEmailDomainCountOrderByAggregateInput
    _max?: CollegeEmailDomainMaxOrderByAggregateInput
    _min?: CollegeEmailDomainMinOrderByAggregateInput
  }

  export type CollegeEmailDomainScalarWhereWithAggregatesInput = {
    AND?: CollegeEmailDomainScalarWhereWithAggregatesInput | CollegeEmailDomainScalarWhereWithAggregatesInput[]
    OR?: CollegeEmailDomainScalarWhereWithAggregatesInput[]
    NOT?: CollegeEmailDomainScalarWhereWithAggregatesInput | CollegeEmailDomainScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CollegeEmailDomain"> | string
    domain?: StringWithAggregatesFilter<"CollegeEmailDomain"> | string
    collegeId?: UuidWithAggregatesFilter<"CollegeEmailDomain"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: UuidFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    collegeId?: UuidNullableFilter<"Project"> | string | null
    githubUrl?: StringNullableFilter<"Project"> | string | null
    isCollaborative?: BoolFilter<"Project"> | boolean
    isLookingForContributors?: BoolFilter<"Project"> | boolean
    upvotesCount?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    college?: XOR<CollegeNullableScalarRelationFilter, CollegeWhereInput> | null
    upvotes?: ProjectUpvoteListRelationFilter
    collaborators?: ProjectCollaboratorListRelationFilter
    tags?: ProjectTagListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    collegeId?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    isCollaborative?: SortOrder
    isLookingForContributors?: SortOrder
    upvotesCount?: SortOrder
    createdAt?: SortOrder
    college?: CollegeOrderByWithRelationInput
    upvotes?: ProjectUpvoteOrderByRelationAggregateInput
    collaborators?: ProjectCollaboratorOrderByRelationAggregateInput
    tags?: ProjectTagOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    collegeId?: UuidNullableFilter<"Project"> | string | null
    githubUrl?: StringNullableFilter<"Project"> | string | null
    isCollaborative?: BoolFilter<"Project"> | boolean
    isLookingForContributors?: BoolFilter<"Project"> | boolean
    upvotesCount?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    college?: XOR<CollegeNullableScalarRelationFilter, CollegeWhereInput> | null
    upvotes?: ProjectUpvoteListRelationFilter
    collaborators?: ProjectCollaboratorListRelationFilter
    tags?: ProjectTagListRelationFilter
  }, "id" | "slug">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    collegeId?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    isCollaborative?: SortOrder
    isLookingForContributors?: SortOrder
    upvotesCount?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    slug?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    collegeId?: UuidNullableWithAggregatesFilter<"Project"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    isCollaborative?: BoolWithAggregatesFilter<"Project"> | boolean
    isLookingForContributors?: BoolWithAggregatesFilter<"Project"> | boolean
    upvotesCount?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectUpvoteWhereInput = {
    AND?: ProjectUpvoteWhereInput | ProjectUpvoteWhereInput[]
    OR?: ProjectUpvoteWhereInput[]
    NOT?: ProjectUpvoteWhereInput | ProjectUpvoteWhereInput[]
    userId?: UuidFilter<"ProjectUpvote"> | string
    projectId?: UuidFilter<"ProjectUpvote"> | string
    createdAt?: DateTimeFilter<"ProjectUpvote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectUpvoteOrderByWithRelationInput = {
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectUpvoteWhereUniqueInput = Prisma.AtLeast<{
    userId_projectId?: ProjectUpvoteUserIdProjectIdCompoundUniqueInput
    AND?: ProjectUpvoteWhereInput | ProjectUpvoteWhereInput[]
    OR?: ProjectUpvoteWhereInput[]
    NOT?: ProjectUpvoteWhereInput | ProjectUpvoteWhereInput[]
    userId?: UuidFilter<"ProjectUpvote"> | string
    projectId?: UuidFilter<"ProjectUpvote"> | string
    createdAt?: DateTimeFilter<"ProjectUpvote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "userId_projectId">

  export type ProjectUpvoteOrderByWithAggregationInput = {
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectUpvoteCountOrderByAggregateInput
    _max?: ProjectUpvoteMaxOrderByAggregateInput
    _min?: ProjectUpvoteMinOrderByAggregateInput
  }

  export type ProjectUpvoteScalarWhereWithAggregatesInput = {
    AND?: ProjectUpvoteScalarWhereWithAggregatesInput | ProjectUpvoteScalarWhereWithAggregatesInput[]
    OR?: ProjectUpvoteScalarWhereWithAggregatesInput[]
    NOT?: ProjectUpvoteScalarWhereWithAggregatesInput | ProjectUpvoteScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"ProjectUpvote"> | string
    projectId?: UuidWithAggregatesFilter<"ProjectUpvote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectUpvote"> | Date | string
  }

  export type ProjectCollaboratorWhereInput = {
    AND?: ProjectCollaboratorWhereInput | ProjectCollaboratorWhereInput[]
    OR?: ProjectCollaboratorWhereInput[]
    NOT?: ProjectCollaboratorWhereInput | ProjectCollaboratorWhereInput[]
    userId?: UuidFilter<"ProjectCollaborator"> | string
    projectId?: UuidFilter<"ProjectCollaborator"> | string
    role?: EnumProjectUserRoleFilter<"ProjectCollaborator"> | $Enums.ProjectUserRole
    joinedAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectCollaboratorOrderByWithRelationInput = {
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectCollaboratorWhereUniqueInput = Prisma.AtLeast<{
    userId_projectId?: ProjectCollaboratorUserIdProjectIdCompoundUniqueInput
    AND?: ProjectCollaboratorWhereInput | ProjectCollaboratorWhereInput[]
    OR?: ProjectCollaboratorWhereInput[]
    NOT?: ProjectCollaboratorWhereInput | ProjectCollaboratorWhereInput[]
    userId?: UuidFilter<"ProjectCollaborator"> | string
    projectId?: UuidFilter<"ProjectCollaborator"> | string
    role?: EnumProjectUserRoleFilter<"ProjectCollaborator"> | $Enums.ProjectUserRole
    joinedAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "userId_projectId">

  export type ProjectCollaboratorOrderByWithAggregationInput = {
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: ProjectCollaboratorCountOrderByAggregateInput
    _max?: ProjectCollaboratorMaxOrderByAggregateInput
    _min?: ProjectCollaboratorMinOrderByAggregateInput
  }

  export type ProjectCollaboratorScalarWhereWithAggregatesInput = {
    AND?: ProjectCollaboratorScalarWhereWithAggregatesInput | ProjectCollaboratorScalarWhereWithAggregatesInput[]
    OR?: ProjectCollaboratorScalarWhereWithAggregatesInput[]
    NOT?: ProjectCollaboratorScalarWhereWithAggregatesInput | ProjectCollaboratorScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"ProjectCollaborator"> | string
    projectId?: UuidWithAggregatesFilter<"ProjectCollaborator"> | string
    role?: EnumProjectUserRoleWithAggregatesFilter<"ProjectCollaborator"> | $Enums.ProjectUserRole
    joinedAt?: DateTimeWithAggregatesFilter<"ProjectCollaborator"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: UuidFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    projects?: ProjectTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    projects?: ProjectTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    projects?: ProjectTagListRelationFilter
  }, "id" | "name" | "slug">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    slug?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type ProjectTagWhereInput = {
    AND?: ProjectTagWhereInput | ProjectTagWhereInput[]
    OR?: ProjectTagWhereInput[]
    NOT?: ProjectTagWhereInput | ProjectTagWhereInput[]
    projectId?: UuidFilter<"ProjectTag"> | string
    tagId?: UuidFilter<"ProjectTag"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type ProjectTagOrderByWithRelationInput = {
    projectId?: SortOrder
    tagId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type ProjectTagWhereUniqueInput = Prisma.AtLeast<{
    projectId_tagId?: ProjectTagProjectIdTagIdCompoundUniqueInput
    AND?: ProjectTagWhereInput | ProjectTagWhereInput[]
    OR?: ProjectTagWhereInput[]
    NOT?: ProjectTagWhereInput | ProjectTagWhereInput[]
    projectId?: UuidFilter<"ProjectTag"> | string
    tagId?: UuidFilter<"ProjectTag"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "projectId_tagId">

  export type ProjectTagOrderByWithAggregationInput = {
    projectId?: SortOrder
    tagId?: SortOrder
    _count?: ProjectTagCountOrderByAggregateInput
    _max?: ProjectTagMaxOrderByAggregateInput
    _min?: ProjectTagMinOrderByAggregateInput
  }

  export type ProjectTagScalarWhereWithAggregatesInput = {
    AND?: ProjectTagScalarWhereWithAggregatesInput | ProjectTagScalarWhereWithAggregatesInput[]
    OR?: ProjectTagScalarWhereWithAggregatesInput[]
    NOT?: ProjectTagScalarWhereWithAggregatesInput | ProjectTagScalarWhereWithAggregatesInput[]
    projectId?: UuidWithAggregatesFilter<"ProjectTag"> | string
    tagId?: UuidWithAggregatesFilter<"ProjectTag"> | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    username: string
    email: string
    avatarUrl?: string | null
    isSuperAdmin?: boolean
    githubUsername?: string | null
    createdAt?: Date | string
    websiteUrl?: string | null
    userColleges?: UserCollegeCreateNestedManyWithoutUserInput
    projectUpvotes?: ProjectUpvoteCreateNestedManyWithoutUserInput
    ProjectCollaborator?: ProjectCollaboratorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    username: string
    email: string
    avatarUrl?: string | null
    isSuperAdmin?: boolean
    githubUsername?: string | null
    createdAt?: Date | string
    websiteUrl?: string | null
    userColleges?: UserCollegeUncheckedCreateNestedManyWithoutUserInput
    projectUpvotes?: ProjectUpvoteUncheckedCreateNestedManyWithoutUserInput
    ProjectCollaborator?: ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userColleges?: UserCollegeUpdateManyWithoutUserNestedInput
    projectUpvotes?: ProjectUpvoteUpdateManyWithoutUserNestedInput
    ProjectCollaborator?: ProjectCollaboratorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userColleges?: UserCollegeUncheckedUpdateManyWithoutUserNestedInput
    projectUpvotes?: ProjectUpvoteUncheckedUpdateManyWithoutUserNestedInput
    ProjectCollaborator?: ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    username: string
    email: string
    avatarUrl?: string | null
    isSuperAdmin?: boolean
    githubUsername?: string | null
    createdAt?: Date | string
    websiteUrl?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollegeCreateInput = {
    id?: string
    name: string
    slug: string
    shortName?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    description?: string | null
    location?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userColleges?: UserCollegeCreateNestedManyWithoutCollegeInput
    projects?: ProjectCreateNestedManyWithoutCollegeInput
    emailDomains?: CollegeEmailDomainCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    shortName?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    description?: string | null
    location?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userColleges?: UserCollegeUncheckedCreateNestedManyWithoutCollegeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCollegeInput
    emailDomains?: CollegeEmailDomainUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userColleges?: UserCollegeUpdateManyWithoutCollegeNestedInput
    projects?: ProjectUpdateManyWithoutCollegeNestedInput
    emailDomains?: CollegeEmailDomainUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userColleges?: UserCollegeUncheckedUpdateManyWithoutCollegeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCollegeNestedInput
    emailDomains?: CollegeEmailDomainUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateManyInput = {
    id?: string
    name: string
    slug: string
    shortName?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    description?: string | null
    location?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollegeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCollegeCreateInput = {
    id?: string
    userType: $Enums.UserType
    isAdmin?: boolean
    degreeType?: string | null
    branch?: string | null
    verified: boolean
    joinedAt: Date | string
    leftAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserCollegesInput
    college: CollegeCreateNestedOneWithoutUserCollegesInput
  }

  export type UserCollegeUncheckedCreateInput = {
    id?: string
    userId: string
    collegeId: string
    userType: $Enums.UserType
    isAdmin?: boolean
    degreeType?: string | null
    branch?: string | null
    verified: boolean
    joinedAt: Date | string
    leftAt?: Date | string | null
  }

  export type UserCollegeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserCollegesNestedInput
    college?: CollegeUpdateOneRequiredWithoutUserCollegesNestedInput
  }

  export type UserCollegeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCollegeCreateManyInput = {
    id?: string
    userId: string
    collegeId: string
    userType: $Enums.UserType
    isAdmin?: boolean
    degreeType?: string | null
    branch?: string | null
    verified: boolean
    joinedAt: Date | string
    leftAt?: Date | string | null
  }

  export type UserCollegeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCollegeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CollegeEmailDomainCreateInput = {
    id?: string
    domain: string
    college: CollegeCreateNestedOneWithoutEmailDomainsInput
  }

  export type CollegeEmailDomainUncheckedCreateInput = {
    id?: string
    domain: string
    collegeId: string
  }

  export type CollegeEmailDomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    college?: CollegeUpdateOneRequiredWithoutEmailDomainsNestedInput
  }

  export type CollegeEmailDomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeEmailDomainCreateManyInput = {
    id?: string
    domain: string
    collegeId: string
  }

  export type CollegeEmailDomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeEmailDomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
    college?: CollegeCreateNestedOneWithoutProjectsInput
    upvotes?: ProjectUpvoteCreateNestedManyWithoutProjectInput
    collaborators?: ProjectCollaboratorCreateNestedManyWithoutProjectInput
    tags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    collegeId?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
    upvotes?: ProjectUpvoteUncheckedCreateNestedManyWithoutProjectInput
    collaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutProjectInput
    tags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneWithoutProjectsNestedInput
    upvotes?: ProjectUpvoteUpdateManyWithoutProjectNestedInput
    collaborators?: ProjectCollaboratorUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collegeId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: ProjectUpvoteUncheckedUpdateManyWithoutProjectNestedInput
    collaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    collegeId?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collegeId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpvoteCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectUpvotesInput
    project: ProjectCreateNestedOneWithoutUpvotesInput
  }

  export type ProjectUpvoteUncheckedCreateInput = {
    userId: string
    projectId: string
    createdAt?: Date | string
  }

  export type ProjectUpvoteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectUpvotesNestedInput
    project?: ProjectUpdateOneRequiredWithoutUpvotesNestedInput
  }

  export type ProjectUpvoteUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpvoteCreateManyInput = {
    userId: string
    projectId: string
    createdAt?: Date | string
  }

  export type ProjectUpvoteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpvoteUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorCreateInput = {
    role: $Enums.ProjectUserRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectCollaboratorInput
    project: ProjectCreateNestedOneWithoutCollaboratorsInput
  }

  export type ProjectCollaboratorUncheckedCreateInput = {
    userId: string
    projectId: string
    role: $Enums.ProjectUserRole
    joinedAt?: Date | string
  }

  export type ProjectCollaboratorUpdateInput = {
    role?: EnumProjectUserRoleFieldUpdateOperationsInput | $Enums.ProjectUserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectCollaboratorNestedInput
    project?: ProjectUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type ProjectCollaboratorUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectUserRoleFieldUpdateOperationsInput | $Enums.ProjectUserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorCreateManyInput = {
    userId: string
    projectId: string
    role: $Enums.ProjectUserRole
    joinedAt?: Date | string
  }

  export type ProjectCollaboratorUpdateManyMutationInput = {
    role?: EnumProjectUserRoleFieldUpdateOperationsInput | $Enums.ProjectUserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectUserRoleFieldUpdateOperationsInput | $Enums.ProjectUserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    slug: string
    projects?: ProjectTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    projects?: ProjectTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    projects?: ProjectTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    projects?: ProjectTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    slug: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTagCreateInput = {
    project: ProjectCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutProjectsInput
  }

  export type ProjectTagUncheckedCreateInput = {
    projectId: string
    tagId: string
  }

  export type ProjectTagUpdateInput = {
    project?: ProjectUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectTagUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTagCreateManyInput = {
    projectId: string
    tagId: string
  }

  export type ProjectTagUpdateManyMutationInput = {

  }

  export type ProjectTagUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCollegeListRelationFilter = {
    every?: UserCollegeWhereInput
    some?: UserCollegeWhereInput
    none?: UserCollegeWhereInput
  }

  export type ProjectUpvoteListRelationFilter = {
    every?: ProjectUpvoteWhereInput
    some?: ProjectUpvoteWhereInput
    none?: ProjectUpvoteWhereInput
  }

  export type ProjectCollaboratorListRelationFilter = {
    every?: ProjectCollaboratorWhereInput
    some?: ProjectCollaboratorWhereInput
    none?: ProjectCollaboratorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCollegeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectUpvoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCollaboratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    isSuperAdmin?: SortOrder
    githubUsername?: SortOrder
    createdAt?: SortOrder
    websiteUrl?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    isSuperAdmin?: SortOrder
    githubUsername?: SortOrder
    createdAt?: SortOrder
    websiteUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    isSuperAdmin?: SortOrder
    githubUsername?: SortOrder
    createdAt?: SortOrder
    websiteUrl?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type CollegeEmailDomainListRelationFilter = {
    every?: CollegeEmailDomainWhereInput
    some?: CollegeEmailDomainWhereInput
    none?: CollegeEmailDomainWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollegeEmailDomainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollegeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortName?: SortOrder
    logoUrl?: SortOrder
    coverImageUrl?: SortOrder
    description?: SortOrder
    location?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollegeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortName?: SortOrder
    logoUrl?: SortOrder
    coverImageUrl?: SortOrder
    description?: SortOrder
    location?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollegeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortName?: SortOrder
    logoUrl?: SortOrder
    coverImageUrl?: SortOrder
    description?: SortOrder
    location?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CollegeScalarRelationFilter = {
    is?: CollegeWhereInput
    isNot?: CollegeWhereInput
  }

  export type UserCollegeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
    userType?: SortOrder
    isAdmin?: SortOrder
    degreeType?: SortOrder
    branch?: SortOrder
    verified?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type UserCollegeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
    userType?: SortOrder
    isAdmin?: SortOrder
    degreeType?: SortOrder
    branch?: SortOrder
    verified?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type UserCollegeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    collegeId?: SortOrder
    userType?: SortOrder
    isAdmin?: SortOrder
    degreeType?: SortOrder
    branch?: SortOrder
    verified?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CollegeEmailDomainCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    collegeId?: SortOrder
  }

  export type CollegeEmailDomainMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    collegeId?: SortOrder
  }

  export type CollegeEmailDomainMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    collegeId?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CollegeNullableScalarRelationFilter = {
    is?: CollegeWhereInput | null
    isNot?: CollegeWhereInput | null
  }

  export type ProjectTagListRelationFilter = {
    every?: ProjectTagWhereInput
    some?: ProjectTagWhereInput
    none?: ProjectTagWhereInput
  }

  export type ProjectTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    collegeId?: SortOrder
    githubUrl?: SortOrder
    isCollaborative?: SortOrder
    isLookingForContributors?: SortOrder
    upvotesCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    upvotesCount?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    collegeId?: SortOrder
    githubUrl?: SortOrder
    isCollaborative?: SortOrder
    isLookingForContributors?: SortOrder
    upvotesCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    collegeId?: SortOrder
    githubUrl?: SortOrder
    isCollaborative?: SortOrder
    isLookingForContributors?: SortOrder
    upvotesCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    upvotesCount?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectUpvoteUserIdProjectIdCompoundUniqueInput = {
    userId: string
    projectId: string
  }

  export type ProjectUpvoteCountOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectUpvoteMaxOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectUpvoteMinOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumProjectUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectUserRole | EnumProjectUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectUserRole[] | ListEnumProjectUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectUserRole[] | ListEnumProjectUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectUserRoleFilter<$PrismaModel> | $Enums.ProjectUserRole
  }

  export type ProjectCollaboratorUserIdProjectIdCompoundUniqueInput = {
    userId: string
    projectId: string
  }

  export type ProjectCollaboratorCountOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type ProjectCollaboratorMaxOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type ProjectCollaboratorMinOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumProjectUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectUserRole | EnumProjectUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectUserRole[] | ListEnumProjectUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectUserRole[] | ListEnumProjectUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.ProjectUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectUserRoleFilter<$PrismaModel>
    _max?: NestedEnumProjectUserRoleFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type ProjectTagProjectIdTagIdCompoundUniqueInput = {
    projectId: string
    tagId: string
  }

  export type ProjectTagCountOrderByAggregateInput = {
    projectId?: SortOrder
    tagId?: SortOrder
  }

  export type ProjectTagMaxOrderByAggregateInput = {
    projectId?: SortOrder
    tagId?: SortOrder
  }

  export type ProjectTagMinOrderByAggregateInput = {
    projectId?: SortOrder
    tagId?: SortOrder
  }

  export type UserCollegeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCollegeCreateWithoutUserInput, UserCollegeUncheckedCreateWithoutUserInput> | UserCollegeCreateWithoutUserInput[] | UserCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollegeCreateOrConnectWithoutUserInput | UserCollegeCreateOrConnectWithoutUserInput[]
    createMany?: UserCollegeCreateManyUserInputEnvelope
    connect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
  }

  export type ProjectUpvoteCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectUpvoteCreateWithoutUserInput, ProjectUpvoteUncheckedCreateWithoutUserInput> | ProjectUpvoteCreateWithoutUserInput[] | ProjectUpvoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUpvoteCreateOrConnectWithoutUserInput | ProjectUpvoteCreateOrConnectWithoutUserInput[]
    createMany?: ProjectUpvoteCreateManyUserInputEnvelope
    connect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
  }

  export type ProjectCollaboratorCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput> | ProjectCollaboratorCreateWithoutUserInput[] | ProjectCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutUserInput | ProjectCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCollaboratorCreateManyUserInputEnvelope
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
  }

  export type UserCollegeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCollegeCreateWithoutUserInput, UserCollegeUncheckedCreateWithoutUserInput> | UserCollegeCreateWithoutUserInput[] | UserCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollegeCreateOrConnectWithoutUserInput | UserCollegeCreateOrConnectWithoutUserInput[]
    createMany?: UserCollegeCreateManyUserInputEnvelope
    connect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
  }

  export type ProjectUpvoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectUpvoteCreateWithoutUserInput, ProjectUpvoteUncheckedCreateWithoutUserInput> | ProjectUpvoteCreateWithoutUserInput[] | ProjectUpvoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUpvoteCreateOrConnectWithoutUserInput | ProjectUpvoteCreateOrConnectWithoutUserInput[]
    createMany?: ProjectUpvoteCreateManyUserInputEnvelope
    connect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
  }

  export type ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput> | ProjectCollaboratorCreateWithoutUserInput[] | ProjectCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutUserInput | ProjectCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCollaboratorCreateManyUserInputEnvelope
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCollegeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCollegeCreateWithoutUserInput, UserCollegeUncheckedCreateWithoutUserInput> | UserCollegeCreateWithoutUserInput[] | UserCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollegeCreateOrConnectWithoutUserInput | UserCollegeCreateOrConnectWithoutUserInput[]
    upsert?: UserCollegeUpsertWithWhereUniqueWithoutUserInput | UserCollegeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCollegeCreateManyUserInputEnvelope
    set?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    disconnect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    delete?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    connect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    update?: UserCollegeUpdateWithWhereUniqueWithoutUserInput | UserCollegeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCollegeUpdateManyWithWhereWithoutUserInput | UserCollegeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCollegeScalarWhereInput | UserCollegeScalarWhereInput[]
  }

  export type ProjectUpvoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectUpvoteCreateWithoutUserInput, ProjectUpvoteUncheckedCreateWithoutUserInput> | ProjectUpvoteCreateWithoutUserInput[] | ProjectUpvoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUpvoteCreateOrConnectWithoutUserInput | ProjectUpvoteCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpvoteUpsertWithWhereUniqueWithoutUserInput | ProjectUpvoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectUpvoteCreateManyUserInputEnvelope
    set?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    disconnect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    delete?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    connect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    update?: ProjectUpvoteUpdateWithWhereUniqueWithoutUserInput | ProjectUpvoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpvoteUpdateManyWithWhereWithoutUserInput | ProjectUpvoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectUpvoteScalarWhereInput | ProjectUpvoteScalarWhereInput[]
  }

  export type ProjectCollaboratorUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput> | ProjectCollaboratorCreateWithoutUserInput[] | ProjectCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutUserInput | ProjectCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: ProjectCollaboratorUpsertWithWhereUniqueWithoutUserInput | ProjectCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCollaboratorCreateManyUserInputEnvelope
    set?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    disconnect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    delete?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    update?: ProjectCollaboratorUpdateWithWhereUniqueWithoutUserInput | ProjectCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectCollaboratorUpdateManyWithWhereWithoutUserInput | ProjectCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
  }

  export type UserCollegeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCollegeCreateWithoutUserInput, UserCollegeUncheckedCreateWithoutUserInput> | UserCollegeCreateWithoutUserInput[] | UserCollegeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollegeCreateOrConnectWithoutUserInput | UserCollegeCreateOrConnectWithoutUserInput[]
    upsert?: UserCollegeUpsertWithWhereUniqueWithoutUserInput | UserCollegeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCollegeCreateManyUserInputEnvelope
    set?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    disconnect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    delete?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    connect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    update?: UserCollegeUpdateWithWhereUniqueWithoutUserInput | UserCollegeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCollegeUpdateManyWithWhereWithoutUserInput | UserCollegeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCollegeScalarWhereInput | UserCollegeScalarWhereInput[]
  }

  export type ProjectUpvoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectUpvoteCreateWithoutUserInput, ProjectUpvoteUncheckedCreateWithoutUserInput> | ProjectUpvoteCreateWithoutUserInput[] | ProjectUpvoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUpvoteCreateOrConnectWithoutUserInput | ProjectUpvoteCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpvoteUpsertWithWhereUniqueWithoutUserInput | ProjectUpvoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectUpvoteCreateManyUserInputEnvelope
    set?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    disconnect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    delete?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    connect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    update?: ProjectUpvoteUpdateWithWhereUniqueWithoutUserInput | ProjectUpvoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpvoteUpdateManyWithWhereWithoutUserInput | ProjectUpvoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectUpvoteScalarWhereInput | ProjectUpvoteScalarWhereInput[]
  }

  export type ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput> | ProjectCollaboratorCreateWithoutUserInput[] | ProjectCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutUserInput | ProjectCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: ProjectCollaboratorUpsertWithWhereUniqueWithoutUserInput | ProjectCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCollaboratorCreateManyUserInputEnvelope
    set?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    disconnect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    delete?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    update?: ProjectCollaboratorUpdateWithWhereUniqueWithoutUserInput | ProjectCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectCollaboratorUpdateManyWithWhereWithoutUserInput | ProjectCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
  }

  export type UserCollegeCreateNestedManyWithoutCollegeInput = {
    create?: XOR<UserCollegeCreateWithoutCollegeInput, UserCollegeUncheckedCreateWithoutCollegeInput> | UserCollegeCreateWithoutCollegeInput[] | UserCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: UserCollegeCreateOrConnectWithoutCollegeInput | UserCollegeCreateOrConnectWithoutCollegeInput[]
    createMany?: UserCollegeCreateManyCollegeInputEnvelope
    connect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutCollegeInput = {
    create?: XOR<ProjectCreateWithoutCollegeInput, ProjectUncheckedCreateWithoutCollegeInput> | ProjectCreateWithoutCollegeInput[] | ProjectUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCollegeInput | ProjectCreateOrConnectWithoutCollegeInput[]
    createMany?: ProjectCreateManyCollegeInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CollegeEmailDomainCreateNestedManyWithoutCollegeInput = {
    create?: XOR<CollegeEmailDomainCreateWithoutCollegeInput, CollegeEmailDomainUncheckedCreateWithoutCollegeInput> | CollegeEmailDomainCreateWithoutCollegeInput[] | CollegeEmailDomainUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeEmailDomainCreateOrConnectWithoutCollegeInput | CollegeEmailDomainCreateOrConnectWithoutCollegeInput[]
    createMany?: CollegeEmailDomainCreateManyCollegeInputEnvelope
    connect?: CollegeEmailDomainWhereUniqueInput | CollegeEmailDomainWhereUniqueInput[]
  }

  export type UserCollegeUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<UserCollegeCreateWithoutCollegeInput, UserCollegeUncheckedCreateWithoutCollegeInput> | UserCollegeCreateWithoutCollegeInput[] | UserCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: UserCollegeCreateOrConnectWithoutCollegeInput | UserCollegeCreateOrConnectWithoutCollegeInput[]
    createMany?: UserCollegeCreateManyCollegeInputEnvelope
    connect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<ProjectCreateWithoutCollegeInput, ProjectUncheckedCreateWithoutCollegeInput> | ProjectCreateWithoutCollegeInput[] | ProjectUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCollegeInput | ProjectCreateOrConnectWithoutCollegeInput[]
    createMany?: ProjectCreateManyCollegeInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CollegeEmailDomainUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<CollegeEmailDomainCreateWithoutCollegeInput, CollegeEmailDomainUncheckedCreateWithoutCollegeInput> | CollegeEmailDomainCreateWithoutCollegeInput[] | CollegeEmailDomainUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeEmailDomainCreateOrConnectWithoutCollegeInput | CollegeEmailDomainCreateOrConnectWithoutCollegeInput[]
    createMany?: CollegeEmailDomainCreateManyCollegeInputEnvelope
    connect?: CollegeEmailDomainWhereUniqueInput | CollegeEmailDomainWhereUniqueInput[]
  }

  export type UserCollegeUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<UserCollegeCreateWithoutCollegeInput, UserCollegeUncheckedCreateWithoutCollegeInput> | UserCollegeCreateWithoutCollegeInput[] | UserCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: UserCollegeCreateOrConnectWithoutCollegeInput | UserCollegeCreateOrConnectWithoutCollegeInput[]
    upsert?: UserCollegeUpsertWithWhereUniqueWithoutCollegeInput | UserCollegeUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: UserCollegeCreateManyCollegeInputEnvelope
    set?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    disconnect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    delete?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    connect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    update?: UserCollegeUpdateWithWhereUniqueWithoutCollegeInput | UserCollegeUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: UserCollegeUpdateManyWithWhereWithoutCollegeInput | UserCollegeUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: UserCollegeScalarWhereInput | UserCollegeScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<ProjectCreateWithoutCollegeInput, ProjectUncheckedCreateWithoutCollegeInput> | ProjectCreateWithoutCollegeInput[] | ProjectUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCollegeInput | ProjectCreateOrConnectWithoutCollegeInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCollegeInput | ProjectUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: ProjectCreateManyCollegeInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCollegeInput | ProjectUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCollegeInput | ProjectUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CollegeEmailDomainUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<CollegeEmailDomainCreateWithoutCollegeInput, CollegeEmailDomainUncheckedCreateWithoutCollegeInput> | CollegeEmailDomainCreateWithoutCollegeInput[] | CollegeEmailDomainUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeEmailDomainCreateOrConnectWithoutCollegeInput | CollegeEmailDomainCreateOrConnectWithoutCollegeInput[]
    upsert?: CollegeEmailDomainUpsertWithWhereUniqueWithoutCollegeInput | CollegeEmailDomainUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: CollegeEmailDomainCreateManyCollegeInputEnvelope
    set?: CollegeEmailDomainWhereUniqueInput | CollegeEmailDomainWhereUniqueInput[]
    disconnect?: CollegeEmailDomainWhereUniqueInput | CollegeEmailDomainWhereUniqueInput[]
    delete?: CollegeEmailDomainWhereUniqueInput | CollegeEmailDomainWhereUniqueInput[]
    connect?: CollegeEmailDomainWhereUniqueInput | CollegeEmailDomainWhereUniqueInput[]
    update?: CollegeEmailDomainUpdateWithWhereUniqueWithoutCollegeInput | CollegeEmailDomainUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: CollegeEmailDomainUpdateManyWithWhereWithoutCollegeInput | CollegeEmailDomainUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: CollegeEmailDomainScalarWhereInput | CollegeEmailDomainScalarWhereInput[]
  }

  export type UserCollegeUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<UserCollegeCreateWithoutCollegeInput, UserCollegeUncheckedCreateWithoutCollegeInput> | UserCollegeCreateWithoutCollegeInput[] | UserCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: UserCollegeCreateOrConnectWithoutCollegeInput | UserCollegeCreateOrConnectWithoutCollegeInput[]
    upsert?: UserCollegeUpsertWithWhereUniqueWithoutCollegeInput | UserCollegeUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: UserCollegeCreateManyCollegeInputEnvelope
    set?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    disconnect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    delete?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    connect?: UserCollegeWhereUniqueInput | UserCollegeWhereUniqueInput[]
    update?: UserCollegeUpdateWithWhereUniqueWithoutCollegeInput | UserCollegeUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: UserCollegeUpdateManyWithWhereWithoutCollegeInput | UserCollegeUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: UserCollegeScalarWhereInput | UserCollegeScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<ProjectCreateWithoutCollegeInput, ProjectUncheckedCreateWithoutCollegeInput> | ProjectCreateWithoutCollegeInput[] | ProjectUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCollegeInput | ProjectCreateOrConnectWithoutCollegeInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCollegeInput | ProjectUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: ProjectCreateManyCollegeInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCollegeInput | ProjectUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCollegeInput | ProjectUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CollegeEmailDomainUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<CollegeEmailDomainCreateWithoutCollegeInput, CollegeEmailDomainUncheckedCreateWithoutCollegeInput> | CollegeEmailDomainCreateWithoutCollegeInput[] | CollegeEmailDomainUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeEmailDomainCreateOrConnectWithoutCollegeInput | CollegeEmailDomainCreateOrConnectWithoutCollegeInput[]
    upsert?: CollegeEmailDomainUpsertWithWhereUniqueWithoutCollegeInput | CollegeEmailDomainUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: CollegeEmailDomainCreateManyCollegeInputEnvelope
    set?: CollegeEmailDomainWhereUniqueInput | CollegeEmailDomainWhereUniqueInput[]
    disconnect?: CollegeEmailDomainWhereUniqueInput | CollegeEmailDomainWhereUniqueInput[]
    delete?: CollegeEmailDomainWhereUniqueInput | CollegeEmailDomainWhereUniqueInput[]
    connect?: CollegeEmailDomainWhereUniqueInput | CollegeEmailDomainWhereUniqueInput[]
    update?: CollegeEmailDomainUpdateWithWhereUniqueWithoutCollegeInput | CollegeEmailDomainUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: CollegeEmailDomainUpdateManyWithWhereWithoutCollegeInput | CollegeEmailDomainUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: CollegeEmailDomainScalarWhereInput | CollegeEmailDomainScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserCollegesInput = {
    create?: XOR<UserCreateWithoutUserCollegesInput, UserUncheckedCreateWithoutUserCollegesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCollegesInput
    connect?: UserWhereUniqueInput
  }

  export type CollegeCreateNestedOneWithoutUserCollegesInput = {
    create?: XOR<CollegeCreateWithoutUserCollegesInput, CollegeUncheckedCreateWithoutUserCollegesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutUserCollegesInput
    connect?: CollegeWhereUniqueInput
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutUserCollegesNestedInput = {
    create?: XOR<UserCreateWithoutUserCollegesInput, UserUncheckedCreateWithoutUserCollegesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCollegesInput
    upsert?: UserUpsertWithoutUserCollegesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCollegesInput, UserUpdateWithoutUserCollegesInput>, UserUncheckedUpdateWithoutUserCollegesInput>
  }

  export type CollegeUpdateOneRequiredWithoutUserCollegesNestedInput = {
    create?: XOR<CollegeCreateWithoutUserCollegesInput, CollegeUncheckedCreateWithoutUserCollegesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutUserCollegesInput
    upsert?: CollegeUpsertWithoutUserCollegesInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutUserCollegesInput, CollegeUpdateWithoutUserCollegesInput>, CollegeUncheckedUpdateWithoutUserCollegesInput>
  }

  export type CollegeCreateNestedOneWithoutEmailDomainsInput = {
    create?: XOR<CollegeCreateWithoutEmailDomainsInput, CollegeUncheckedCreateWithoutEmailDomainsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutEmailDomainsInput
    connect?: CollegeWhereUniqueInput
  }

  export type CollegeUpdateOneRequiredWithoutEmailDomainsNestedInput = {
    create?: XOR<CollegeCreateWithoutEmailDomainsInput, CollegeUncheckedCreateWithoutEmailDomainsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutEmailDomainsInput
    upsert?: CollegeUpsertWithoutEmailDomainsInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutEmailDomainsInput, CollegeUpdateWithoutEmailDomainsInput>, CollegeUncheckedUpdateWithoutEmailDomainsInput>
  }

  export type CollegeCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CollegeCreateWithoutProjectsInput, CollegeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutProjectsInput
    connect?: CollegeWhereUniqueInput
  }

  export type ProjectUpvoteCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectUpvoteCreateWithoutProjectInput, ProjectUpvoteUncheckedCreateWithoutProjectInput> | ProjectUpvoteCreateWithoutProjectInput[] | ProjectUpvoteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUpvoteCreateOrConnectWithoutProjectInput | ProjectUpvoteCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectUpvoteCreateManyProjectInputEnvelope
    connect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
  }

  export type ProjectCollaboratorCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput> | ProjectCollaboratorCreateWithoutProjectInput[] | ProjectCollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutProjectInput | ProjectCollaboratorCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectCollaboratorCreateManyProjectInputEnvelope
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
  }

  export type ProjectTagCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type ProjectUpvoteUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectUpvoteCreateWithoutProjectInput, ProjectUpvoteUncheckedCreateWithoutProjectInput> | ProjectUpvoteCreateWithoutProjectInput[] | ProjectUpvoteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUpvoteCreateOrConnectWithoutProjectInput | ProjectUpvoteCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectUpvoteCreateManyProjectInputEnvelope
    connect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
  }

  export type ProjectCollaboratorUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput> | ProjectCollaboratorCreateWithoutProjectInput[] | ProjectCollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutProjectInput | ProjectCollaboratorCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectCollaboratorCreateManyProjectInputEnvelope
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
  }

  export type ProjectTagUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CollegeUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<CollegeCreateWithoutProjectsInput, CollegeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutProjectsInput
    upsert?: CollegeUpsertWithoutProjectsInput
    disconnect?: CollegeWhereInput | boolean
    delete?: CollegeWhereInput | boolean
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutProjectsInput, CollegeUpdateWithoutProjectsInput>, CollegeUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectUpvoteUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectUpvoteCreateWithoutProjectInput, ProjectUpvoteUncheckedCreateWithoutProjectInput> | ProjectUpvoteCreateWithoutProjectInput[] | ProjectUpvoteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUpvoteCreateOrConnectWithoutProjectInput | ProjectUpvoteCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectUpvoteUpsertWithWhereUniqueWithoutProjectInput | ProjectUpvoteUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectUpvoteCreateManyProjectInputEnvelope
    set?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    disconnect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    delete?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    connect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    update?: ProjectUpvoteUpdateWithWhereUniqueWithoutProjectInput | ProjectUpvoteUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectUpvoteUpdateManyWithWhereWithoutProjectInput | ProjectUpvoteUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectUpvoteScalarWhereInput | ProjectUpvoteScalarWhereInput[]
  }

  export type ProjectCollaboratorUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput> | ProjectCollaboratorCreateWithoutProjectInput[] | ProjectCollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutProjectInput | ProjectCollaboratorCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectCollaboratorUpsertWithWhereUniqueWithoutProjectInput | ProjectCollaboratorUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectCollaboratorCreateManyProjectInputEnvelope
    set?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    disconnect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    delete?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    update?: ProjectCollaboratorUpdateWithWhereUniqueWithoutProjectInput | ProjectCollaboratorUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectCollaboratorUpdateManyWithWhereWithoutProjectInput | ProjectCollaboratorUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
  }

  export type ProjectTagUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutProjectInput | ProjectTagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutProjectInput | ProjectTagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutProjectInput | ProjectTagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type ProjectUpvoteUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectUpvoteCreateWithoutProjectInput, ProjectUpvoteUncheckedCreateWithoutProjectInput> | ProjectUpvoteCreateWithoutProjectInput[] | ProjectUpvoteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUpvoteCreateOrConnectWithoutProjectInput | ProjectUpvoteCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectUpvoteUpsertWithWhereUniqueWithoutProjectInput | ProjectUpvoteUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectUpvoteCreateManyProjectInputEnvelope
    set?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    disconnect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    delete?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    connect?: ProjectUpvoteWhereUniqueInput | ProjectUpvoteWhereUniqueInput[]
    update?: ProjectUpvoteUpdateWithWhereUniqueWithoutProjectInput | ProjectUpvoteUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectUpvoteUpdateManyWithWhereWithoutProjectInput | ProjectUpvoteUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectUpvoteScalarWhereInput | ProjectUpvoteScalarWhereInput[]
  }

  export type ProjectCollaboratorUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput> | ProjectCollaboratorCreateWithoutProjectInput[] | ProjectCollaboratorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCollaboratorCreateOrConnectWithoutProjectInput | ProjectCollaboratorCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectCollaboratorUpsertWithWhereUniqueWithoutProjectInput | ProjectCollaboratorUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectCollaboratorCreateManyProjectInputEnvelope
    set?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    disconnect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    delete?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    connect?: ProjectCollaboratorWhereUniqueInput | ProjectCollaboratorWhereUniqueInput[]
    update?: ProjectCollaboratorUpdateWithWhereUniqueWithoutProjectInput | ProjectCollaboratorUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectCollaboratorUpdateManyWithWhereWithoutProjectInput | ProjectCollaboratorUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
  }

  export type ProjectTagUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutProjectInput | ProjectTagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutProjectInput | ProjectTagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutProjectInput | ProjectTagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectUpvotesInput = {
    create?: XOR<UserCreateWithoutProjectUpvotesInput, UserUncheckedCreateWithoutProjectUpvotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectUpvotesInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutUpvotesInput = {
    create?: XOR<ProjectCreateWithoutUpvotesInput, ProjectUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUpvotesInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProjectUpvotesNestedInput = {
    create?: XOR<UserCreateWithoutProjectUpvotesInput, UserUncheckedCreateWithoutProjectUpvotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectUpvotesInput
    upsert?: UserUpsertWithoutProjectUpvotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectUpvotesInput, UserUpdateWithoutProjectUpvotesInput>, UserUncheckedUpdateWithoutProjectUpvotesInput>
  }

  export type ProjectUpdateOneRequiredWithoutUpvotesNestedInput = {
    create?: XOR<ProjectCreateWithoutUpvotesInput, ProjectUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUpvotesInput
    upsert?: ProjectUpsertWithoutUpvotesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUpvotesInput, ProjectUpdateWithoutUpvotesInput>, ProjectUncheckedUpdateWithoutUpvotesInput>
  }

  export type UserCreateNestedOneWithoutProjectCollaboratorInput = {
    create?: XOR<UserCreateWithoutProjectCollaboratorInput, UserUncheckedCreateWithoutProjectCollaboratorInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectCollaboratorInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCollaboratorsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumProjectUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.ProjectUserRole
  }

  export type UserUpdateOneRequiredWithoutProjectCollaboratorNestedInput = {
    create?: XOR<UserCreateWithoutProjectCollaboratorInput, UserUncheckedCreateWithoutProjectCollaboratorInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectCollaboratorInput
    upsert?: UserUpsertWithoutProjectCollaboratorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectCollaboratorInput, UserUpdateWithoutProjectCollaboratorInput>, UserUncheckedUpdateWithoutProjectCollaboratorInput>
  }

  export type ProjectUpdateOneRequiredWithoutCollaboratorsNestedInput = {
    create?: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCollaboratorsInput
    upsert?: ProjectUpsertWithoutCollaboratorsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCollaboratorsInput, ProjectUpdateWithoutCollaboratorsInput>, ProjectUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type ProjectTagCreateNestedManyWithoutTagInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type ProjectTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type ProjectTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutTagInput | ProjectTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutTagInput | ProjectTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutTagInput | ProjectTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type ProjectTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutTagInput | ProjectTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutTagInput | ProjectTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutTagInput | ProjectTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTagsInput = {
    create?: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTagsInput
    connect?: ProjectWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TagCreateOrConnectWithoutProjectsInput
    connect?: TagWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTagsInput
    upsert?: ProjectUpsertWithoutTagsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTagsInput, ProjectUpdateWithoutTagsInput>, ProjectUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TagCreateOrConnectWithoutProjectsInput
    upsert?: TagUpsertWithoutProjectsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutProjectsInput, TagUpdateWithoutProjectsInput>, TagUncheckedUpdateWithoutProjectsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProjectUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectUserRole | EnumProjectUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectUserRole[] | ListEnumProjectUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectUserRole[] | ListEnumProjectUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectUserRoleFilter<$PrismaModel> | $Enums.ProjectUserRole
  }

  export type NestedEnumProjectUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectUserRole | EnumProjectUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectUserRole[] | ListEnumProjectUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectUserRole[] | ListEnumProjectUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.ProjectUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectUserRoleFilter<$PrismaModel>
    _max?: NestedEnumProjectUserRoleFilter<$PrismaModel>
  }

  export type UserCollegeCreateWithoutUserInput = {
    id?: string
    userType: $Enums.UserType
    isAdmin?: boolean
    degreeType?: string | null
    branch?: string | null
    verified: boolean
    joinedAt: Date | string
    leftAt?: Date | string | null
    college: CollegeCreateNestedOneWithoutUserCollegesInput
  }

  export type UserCollegeUncheckedCreateWithoutUserInput = {
    id?: string
    collegeId: string
    userType: $Enums.UserType
    isAdmin?: boolean
    degreeType?: string | null
    branch?: string | null
    verified: boolean
    joinedAt: Date | string
    leftAt?: Date | string | null
  }

  export type UserCollegeCreateOrConnectWithoutUserInput = {
    where: UserCollegeWhereUniqueInput
    create: XOR<UserCollegeCreateWithoutUserInput, UserCollegeUncheckedCreateWithoutUserInput>
  }

  export type UserCollegeCreateManyUserInputEnvelope = {
    data: UserCollegeCreateManyUserInput | UserCollegeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpvoteCreateWithoutUserInput = {
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutUpvotesInput
  }

  export type ProjectUpvoteUncheckedCreateWithoutUserInput = {
    projectId: string
    createdAt?: Date | string
  }

  export type ProjectUpvoteCreateOrConnectWithoutUserInput = {
    where: ProjectUpvoteWhereUniqueInput
    create: XOR<ProjectUpvoteCreateWithoutUserInput, ProjectUpvoteUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpvoteCreateManyUserInputEnvelope = {
    data: ProjectUpvoteCreateManyUserInput | ProjectUpvoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCollaboratorCreateWithoutUserInput = {
    role: $Enums.ProjectUserRole
    joinedAt?: Date | string
    project: ProjectCreateNestedOneWithoutCollaboratorsInput
  }

  export type ProjectCollaboratorUncheckedCreateWithoutUserInput = {
    projectId: string
    role: $Enums.ProjectUserRole
    joinedAt?: Date | string
  }

  export type ProjectCollaboratorCreateOrConnectWithoutUserInput = {
    where: ProjectCollaboratorWhereUniqueInput
    create: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type ProjectCollaboratorCreateManyUserInputEnvelope = {
    data: ProjectCollaboratorCreateManyUserInput | ProjectCollaboratorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCollegeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCollegeWhereUniqueInput
    update: XOR<UserCollegeUpdateWithoutUserInput, UserCollegeUncheckedUpdateWithoutUserInput>
    create: XOR<UserCollegeCreateWithoutUserInput, UserCollegeUncheckedCreateWithoutUserInput>
  }

  export type UserCollegeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCollegeWhereUniqueInput
    data: XOR<UserCollegeUpdateWithoutUserInput, UserCollegeUncheckedUpdateWithoutUserInput>
  }

  export type UserCollegeUpdateManyWithWhereWithoutUserInput = {
    where: UserCollegeScalarWhereInput
    data: XOR<UserCollegeUpdateManyMutationInput, UserCollegeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCollegeScalarWhereInput = {
    AND?: UserCollegeScalarWhereInput | UserCollegeScalarWhereInput[]
    OR?: UserCollegeScalarWhereInput[]
    NOT?: UserCollegeScalarWhereInput | UserCollegeScalarWhereInput[]
    id?: UuidFilter<"UserCollege"> | string
    userId?: UuidFilter<"UserCollege"> | string
    collegeId?: UuidFilter<"UserCollege"> | string
    userType?: EnumUserTypeFilter<"UserCollege"> | $Enums.UserType
    isAdmin?: BoolFilter<"UserCollege"> | boolean
    degreeType?: StringNullableFilter<"UserCollege"> | string | null
    branch?: StringNullableFilter<"UserCollege"> | string | null
    verified?: BoolFilter<"UserCollege"> | boolean
    joinedAt?: DateTimeFilter<"UserCollege"> | Date | string
    leftAt?: DateTimeNullableFilter<"UserCollege"> | Date | string | null
  }

  export type ProjectUpvoteUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectUpvoteWhereUniqueInput
    update: XOR<ProjectUpvoteUpdateWithoutUserInput, ProjectUpvoteUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectUpvoteCreateWithoutUserInput, ProjectUpvoteUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpvoteUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectUpvoteWhereUniqueInput
    data: XOR<ProjectUpvoteUpdateWithoutUserInput, ProjectUpvoteUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpvoteUpdateManyWithWhereWithoutUserInput = {
    where: ProjectUpvoteScalarWhereInput
    data: XOR<ProjectUpvoteUpdateManyMutationInput, ProjectUpvoteUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectUpvoteScalarWhereInput = {
    AND?: ProjectUpvoteScalarWhereInput | ProjectUpvoteScalarWhereInput[]
    OR?: ProjectUpvoteScalarWhereInput[]
    NOT?: ProjectUpvoteScalarWhereInput | ProjectUpvoteScalarWhereInput[]
    userId?: UuidFilter<"ProjectUpvote"> | string
    projectId?: UuidFilter<"ProjectUpvote"> | string
    createdAt?: DateTimeFilter<"ProjectUpvote"> | Date | string
  }

  export type ProjectCollaboratorUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectCollaboratorWhereUniqueInput
    update: XOR<ProjectCollaboratorUpdateWithoutUserInput, ProjectCollaboratorUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCollaboratorCreateWithoutUserInput, ProjectCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type ProjectCollaboratorUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectCollaboratorWhereUniqueInput
    data: XOR<ProjectCollaboratorUpdateWithoutUserInput, ProjectCollaboratorUncheckedUpdateWithoutUserInput>
  }

  export type ProjectCollaboratorUpdateManyWithWhereWithoutUserInput = {
    where: ProjectCollaboratorScalarWhereInput
    data: XOR<ProjectCollaboratorUpdateManyMutationInput, ProjectCollaboratorUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectCollaboratorScalarWhereInput = {
    AND?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
    OR?: ProjectCollaboratorScalarWhereInput[]
    NOT?: ProjectCollaboratorScalarWhereInput | ProjectCollaboratorScalarWhereInput[]
    userId?: UuidFilter<"ProjectCollaborator"> | string
    projectId?: UuidFilter<"ProjectCollaborator"> | string
    role?: EnumProjectUserRoleFilter<"ProjectCollaborator"> | $Enums.ProjectUserRole
    joinedAt?: DateTimeFilter<"ProjectCollaborator"> | Date | string
  }

  export type UserCollegeCreateWithoutCollegeInput = {
    id?: string
    userType: $Enums.UserType
    isAdmin?: boolean
    degreeType?: string | null
    branch?: string | null
    verified: boolean
    joinedAt: Date | string
    leftAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserCollegesInput
  }

  export type UserCollegeUncheckedCreateWithoutCollegeInput = {
    id?: string
    userId: string
    userType: $Enums.UserType
    isAdmin?: boolean
    degreeType?: string | null
    branch?: string | null
    verified: boolean
    joinedAt: Date | string
    leftAt?: Date | string | null
  }

  export type UserCollegeCreateOrConnectWithoutCollegeInput = {
    where: UserCollegeWhereUniqueInput
    create: XOR<UserCollegeCreateWithoutCollegeInput, UserCollegeUncheckedCreateWithoutCollegeInput>
  }

  export type UserCollegeCreateManyCollegeInputEnvelope = {
    data: UserCollegeCreateManyCollegeInput | UserCollegeCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutCollegeInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
    upvotes?: ProjectUpvoteCreateNestedManyWithoutProjectInput
    collaborators?: ProjectCollaboratorCreateNestedManyWithoutProjectInput
    tags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCollegeInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
    upvotes?: ProjectUpvoteUncheckedCreateNestedManyWithoutProjectInput
    collaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutProjectInput
    tags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCollegeInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCollegeInput, ProjectUncheckedCreateWithoutCollegeInput>
  }

  export type ProjectCreateManyCollegeInputEnvelope = {
    data: ProjectCreateManyCollegeInput | ProjectCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type CollegeEmailDomainCreateWithoutCollegeInput = {
    id?: string
    domain: string
  }

  export type CollegeEmailDomainUncheckedCreateWithoutCollegeInput = {
    id?: string
    domain: string
  }

  export type CollegeEmailDomainCreateOrConnectWithoutCollegeInput = {
    where: CollegeEmailDomainWhereUniqueInput
    create: XOR<CollegeEmailDomainCreateWithoutCollegeInput, CollegeEmailDomainUncheckedCreateWithoutCollegeInput>
  }

  export type CollegeEmailDomainCreateManyCollegeInputEnvelope = {
    data: CollegeEmailDomainCreateManyCollegeInput | CollegeEmailDomainCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type UserCollegeUpsertWithWhereUniqueWithoutCollegeInput = {
    where: UserCollegeWhereUniqueInput
    update: XOR<UserCollegeUpdateWithoutCollegeInput, UserCollegeUncheckedUpdateWithoutCollegeInput>
    create: XOR<UserCollegeCreateWithoutCollegeInput, UserCollegeUncheckedCreateWithoutCollegeInput>
  }

  export type UserCollegeUpdateWithWhereUniqueWithoutCollegeInput = {
    where: UserCollegeWhereUniqueInput
    data: XOR<UserCollegeUpdateWithoutCollegeInput, UserCollegeUncheckedUpdateWithoutCollegeInput>
  }

  export type UserCollegeUpdateManyWithWhereWithoutCollegeInput = {
    where: UserCollegeScalarWhereInput
    data: XOR<UserCollegeUpdateManyMutationInput, UserCollegeUncheckedUpdateManyWithoutCollegeInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutCollegeInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCollegeInput, ProjectUncheckedUpdateWithoutCollegeInput>
    create: XOR<ProjectCreateWithoutCollegeInput, ProjectUncheckedCreateWithoutCollegeInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCollegeInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCollegeInput, ProjectUncheckedUpdateWithoutCollegeInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCollegeInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCollegeInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: UuidFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    collegeId?: UuidNullableFilter<"Project"> | string | null
    githubUrl?: StringNullableFilter<"Project"> | string | null
    isCollaborative?: BoolFilter<"Project"> | boolean
    isLookingForContributors?: BoolFilter<"Project"> | boolean
    upvotesCount?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type CollegeEmailDomainUpsertWithWhereUniqueWithoutCollegeInput = {
    where: CollegeEmailDomainWhereUniqueInput
    update: XOR<CollegeEmailDomainUpdateWithoutCollegeInput, CollegeEmailDomainUncheckedUpdateWithoutCollegeInput>
    create: XOR<CollegeEmailDomainCreateWithoutCollegeInput, CollegeEmailDomainUncheckedCreateWithoutCollegeInput>
  }

  export type CollegeEmailDomainUpdateWithWhereUniqueWithoutCollegeInput = {
    where: CollegeEmailDomainWhereUniqueInput
    data: XOR<CollegeEmailDomainUpdateWithoutCollegeInput, CollegeEmailDomainUncheckedUpdateWithoutCollegeInput>
  }

  export type CollegeEmailDomainUpdateManyWithWhereWithoutCollegeInput = {
    where: CollegeEmailDomainScalarWhereInput
    data: XOR<CollegeEmailDomainUpdateManyMutationInput, CollegeEmailDomainUncheckedUpdateManyWithoutCollegeInput>
  }

  export type CollegeEmailDomainScalarWhereInput = {
    AND?: CollegeEmailDomainScalarWhereInput | CollegeEmailDomainScalarWhereInput[]
    OR?: CollegeEmailDomainScalarWhereInput[]
    NOT?: CollegeEmailDomainScalarWhereInput | CollegeEmailDomainScalarWhereInput[]
    id?: UuidFilter<"CollegeEmailDomain"> | string
    domain?: StringFilter<"CollegeEmailDomain"> | string
    collegeId?: UuidFilter<"CollegeEmailDomain"> | string
  }

  export type UserCreateWithoutUserCollegesInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    username: string
    email: string
    avatarUrl?: string | null
    isSuperAdmin?: boolean
    githubUsername?: string | null
    createdAt?: Date | string
    websiteUrl?: string | null
    projectUpvotes?: ProjectUpvoteCreateNestedManyWithoutUserInput
    ProjectCollaborator?: ProjectCollaboratorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserCollegesInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    username: string
    email: string
    avatarUrl?: string | null
    isSuperAdmin?: boolean
    githubUsername?: string | null
    createdAt?: Date | string
    websiteUrl?: string | null
    projectUpvotes?: ProjectUpvoteUncheckedCreateNestedManyWithoutUserInput
    ProjectCollaborator?: ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserCollegesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCollegesInput, UserUncheckedCreateWithoutUserCollegesInput>
  }

  export type CollegeCreateWithoutUserCollegesInput = {
    id?: string
    name: string
    slug: string
    shortName?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    description?: string | null
    location?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutCollegeInput
    emailDomains?: CollegeEmailDomainCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutUserCollegesInput = {
    id?: string
    name: string
    slug: string
    shortName?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    description?: string | null
    location?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutCollegeInput
    emailDomains?: CollegeEmailDomainUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutUserCollegesInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutUserCollegesInput, CollegeUncheckedCreateWithoutUserCollegesInput>
  }

  export type UserUpsertWithoutUserCollegesInput = {
    update: XOR<UserUpdateWithoutUserCollegesInput, UserUncheckedUpdateWithoutUserCollegesInput>
    create: XOR<UserCreateWithoutUserCollegesInput, UserUncheckedCreateWithoutUserCollegesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCollegesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCollegesInput, UserUncheckedUpdateWithoutUserCollegesInput>
  }

  export type UserUpdateWithoutUserCollegesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectUpvotes?: ProjectUpvoteUpdateManyWithoutUserNestedInput
    ProjectCollaborator?: ProjectCollaboratorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCollegesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectUpvotes?: ProjectUpvoteUncheckedUpdateManyWithoutUserNestedInput
    ProjectCollaborator?: ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollegeUpsertWithoutUserCollegesInput = {
    update: XOR<CollegeUpdateWithoutUserCollegesInput, CollegeUncheckedUpdateWithoutUserCollegesInput>
    create: XOR<CollegeCreateWithoutUserCollegesInput, CollegeUncheckedCreateWithoutUserCollegesInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutUserCollegesInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutUserCollegesInput, CollegeUncheckedUpdateWithoutUserCollegesInput>
  }

  export type CollegeUpdateWithoutUserCollegesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutCollegeNestedInput
    emailDomains?: CollegeEmailDomainUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutUserCollegesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutCollegeNestedInput
    emailDomains?: CollegeEmailDomainUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateWithoutEmailDomainsInput = {
    id?: string
    name: string
    slug: string
    shortName?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    description?: string | null
    location?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userColleges?: UserCollegeCreateNestedManyWithoutCollegeInput
    projects?: ProjectCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutEmailDomainsInput = {
    id?: string
    name: string
    slug: string
    shortName?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    description?: string | null
    location?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userColleges?: UserCollegeUncheckedCreateNestedManyWithoutCollegeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutEmailDomainsInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutEmailDomainsInput, CollegeUncheckedCreateWithoutEmailDomainsInput>
  }

  export type CollegeUpsertWithoutEmailDomainsInput = {
    update: XOR<CollegeUpdateWithoutEmailDomainsInput, CollegeUncheckedUpdateWithoutEmailDomainsInput>
    create: XOR<CollegeCreateWithoutEmailDomainsInput, CollegeUncheckedCreateWithoutEmailDomainsInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutEmailDomainsInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutEmailDomainsInput, CollegeUncheckedUpdateWithoutEmailDomainsInput>
  }

  export type CollegeUpdateWithoutEmailDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userColleges?: UserCollegeUpdateManyWithoutCollegeNestedInput
    projects?: ProjectUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutEmailDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userColleges?: UserCollegeUncheckedUpdateManyWithoutCollegeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
    shortName?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    description?: string | null
    location?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userColleges?: UserCollegeCreateNestedManyWithoutCollegeInput
    emailDomains?: CollegeEmailDomainCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
    shortName?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    description?: string | null
    location?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userColleges?: UserCollegeUncheckedCreateNestedManyWithoutCollegeInput
    emailDomains?: CollegeEmailDomainUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutProjectsInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutProjectsInput, CollegeUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectUpvoteCreateWithoutProjectInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectUpvotesInput
  }

  export type ProjectUpvoteUncheckedCreateWithoutProjectInput = {
    userId: string
    createdAt?: Date | string
  }

  export type ProjectUpvoteCreateOrConnectWithoutProjectInput = {
    where: ProjectUpvoteWhereUniqueInput
    create: XOR<ProjectUpvoteCreateWithoutProjectInput, ProjectUpvoteUncheckedCreateWithoutProjectInput>
  }

  export type ProjectUpvoteCreateManyProjectInputEnvelope = {
    data: ProjectUpvoteCreateManyProjectInput | ProjectUpvoteCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCollaboratorCreateWithoutProjectInput = {
    role: $Enums.ProjectUserRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectCollaboratorInput
  }

  export type ProjectCollaboratorUncheckedCreateWithoutProjectInput = {
    userId: string
    role: $Enums.ProjectUserRole
    joinedAt?: Date | string
  }

  export type ProjectCollaboratorCreateOrConnectWithoutProjectInput = {
    where: ProjectCollaboratorWhereUniqueInput
    create: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCollaboratorCreateManyProjectInputEnvelope = {
    data: ProjectCollaboratorCreateManyProjectInput | ProjectCollaboratorCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTagCreateWithoutProjectInput = {
    tag: TagCreateNestedOneWithoutProjectsInput
  }

  export type ProjectTagUncheckedCreateWithoutProjectInput = {
    tagId: string
  }

  export type ProjectTagCreateOrConnectWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    create: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTagCreateManyProjectInputEnvelope = {
    data: ProjectTagCreateManyProjectInput | ProjectTagCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CollegeUpsertWithoutProjectsInput = {
    update: XOR<CollegeUpdateWithoutProjectsInput, CollegeUncheckedUpdateWithoutProjectsInput>
    create: XOR<CollegeCreateWithoutProjectsInput, CollegeUncheckedCreateWithoutProjectsInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutProjectsInput, CollegeUncheckedUpdateWithoutProjectsInput>
  }

  export type CollegeUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userColleges?: UserCollegeUpdateManyWithoutCollegeNestedInput
    emailDomains?: CollegeEmailDomainUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userColleges?: UserCollegeUncheckedUpdateManyWithoutCollegeNestedInput
    emailDomains?: CollegeEmailDomainUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type ProjectUpvoteUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectUpvoteWhereUniqueInput
    update: XOR<ProjectUpvoteUpdateWithoutProjectInput, ProjectUpvoteUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectUpvoteCreateWithoutProjectInput, ProjectUpvoteUncheckedCreateWithoutProjectInput>
  }

  export type ProjectUpvoteUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectUpvoteWhereUniqueInput
    data: XOR<ProjectUpvoteUpdateWithoutProjectInput, ProjectUpvoteUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectUpvoteUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectUpvoteScalarWhereInput
    data: XOR<ProjectUpvoteUpdateManyMutationInput, ProjectUpvoteUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCollaboratorUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectCollaboratorWhereUniqueInput
    update: XOR<ProjectCollaboratorUpdateWithoutProjectInput, ProjectCollaboratorUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectCollaboratorCreateWithoutProjectInput, ProjectCollaboratorUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCollaboratorUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectCollaboratorWhereUniqueInput
    data: XOR<ProjectCollaboratorUpdateWithoutProjectInput, ProjectCollaboratorUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCollaboratorUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectCollaboratorScalarWhereInput
    data: XOR<ProjectCollaboratorUpdateManyMutationInput, ProjectCollaboratorUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectTagUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    update: XOR<ProjectTagUpdateWithoutProjectInput, ProjectTagUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTagUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    data: XOR<ProjectTagUpdateWithoutProjectInput, ProjectTagUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectTagUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectTagScalarWhereInput
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectTagScalarWhereInput = {
    AND?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
    OR?: ProjectTagScalarWhereInput[]
    NOT?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
    projectId?: UuidFilter<"ProjectTag"> | string
    tagId?: UuidFilter<"ProjectTag"> | string
  }

  export type UserCreateWithoutProjectUpvotesInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    username: string
    email: string
    avatarUrl?: string | null
    isSuperAdmin?: boolean
    githubUsername?: string | null
    createdAt?: Date | string
    websiteUrl?: string | null
    userColleges?: UserCollegeCreateNestedManyWithoutUserInput
    ProjectCollaborator?: ProjectCollaboratorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectUpvotesInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    username: string
    email: string
    avatarUrl?: string | null
    isSuperAdmin?: boolean
    githubUsername?: string | null
    createdAt?: Date | string
    websiteUrl?: string | null
    userColleges?: UserCollegeUncheckedCreateNestedManyWithoutUserInput
    ProjectCollaborator?: ProjectCollaboratorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectUpvotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectUpvotesInput, UserUncheckedCreateWithoutProjectUpvotesInput>
  }

  export type ProjectCreateWithoutUpvotesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
    college?: CollegeCreateNestedOneWithoutProjectsInput
    collaborators?: ProjectCollaboratorCreateNestedManyWithoutProjectInput
    tags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUpvotesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    collegeId?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
    collaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutProjectInput
    tags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUpvotesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUpvotesInput, ProjectUncheckedCreateWithoutUpvotesInput>
  }

  export type UserUpsertWithoutProjectUpvotesInput = {
    update: XOR<UserUpdateWithoutProjectUpvotesInput, UserUncheckedUpdateWithoutProjectUpvotesInput>
    create: XOR<UserCreateWithoutProjectUpvotesInput, UserUncheckedCreateWithoutProjectUpvotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectUpvotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectUpvotesInput, UserUncheckedUpdateWithoutProjectUpvotesInput>
  }

  export type UserUpdateWithoutProjectUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userColleges?: UserCollegeUpdateManyWithoutUserNestedInput
    ProjectCollaborator?: ProjectCollaboratorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userColleges?: UserCollegeUncheckedUpdateManyWithoutUserNestedInput
    ProjectCollaborator?: ProjectCollaboratorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutUpvotesInput = {
    update: XOR<ProjectUpdateWithoutUpvotesInput, ProjectUncheckedUpdateWithoutUpvotesInput>
    create: XOR<ProjectCreateWithoutUpvotesInput, ProjectUncheckedCreateWithoutUpvotesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUpvotesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUpvotesInput, ProjectUncheckedUpdateWithoutUpvotesInput>
  }

  export type ProjectUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneWithoutProjectsNestedInput
    collaborators?: ProjectCollaboratorUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collegeId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserCreateWithoutProjectCollaboratorInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    username: string
    email: string
    avatarUrl?: string | null
    isSuperAdmin?: boolean
    githubUsername?: string | null
    createdAt?: Date | string
    websiteUrl?: string | null
    userColleges?: UserCollegeCreateNestedManyWithoutUserInput
    projectUpvotes?: ProjectUpvoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectCollaboratorInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    username: string
    email: string
    avatarUrl?: string | null
    isSuperAdmin?: boolean
    githubUsername?: string | null
    createdAt?: Date | string
    websiteUrl?: string | null
    userColleges?: UserCollegeUncheckedCreateNestedManyWithoutUserInput
    projectUpvotes?: ProjectUpvoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectCollaboratorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectCollaboratorInput, UserUncheckedCreateWithoutProjectCollaboratorInput>
  }

  export type ProjectCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
    college?: CollegeCreateNestedOneWithoutProjectsInput
    upvotes?: ProjectUpvoteCreateNestedManyWithoutProjectInput
    tags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    collegeId?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
    upvotes?: ProjectUpvoteUncheckedCreateNestedManyWithoutProjectInput
    tags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCollaboratorsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
  }

  export type UserUpsertWithoutProjectCollaboratorInput = {
    update: XOR<UserUpdateWithoutProjectCollaboratorInput, UserUncheckedUpdateWithoutProjectCollaboratorInput>
    create: XOR<UserCreateWithoutProjectCollaboratorInput, UserUncheckedCreateWithoutProjectCollaboratorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectCollaboratorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectCollaboratorInput, UserUncheckedUpdateWithoutProjectCollaboratorInput>
  }

  export type UserUpdateWithoutProjectCollaboratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userColleges?: UserCollegeUpdateManyWithoutUserNestedInput
    projectUpvotes?: ProjectUpvoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectCollaboratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userColleges?: UserCollegeUncheckedUpdateManyWithoutUserNestedInput
    projectUpvotes?: ProjectUpvoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutCollaboratorsInput = {
    update: XOR<ProjectUpdateWithoutCollaboratorsInput, ProjectUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<ProjectCreateWithoutCollaboratorsInput, ProjectUncheckedCreateWithoutCollaboratorsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCollaboratorsInput, ProjectUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type ProjectUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneWithoutProjectsNestedInput
    upvotes?: ProjectUpvoteUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collegeId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: ProjectUpvoteUncheckedUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectTagCreateWithoutTagInput = {
    project: ProjectCreateNestedOneWithoutTagsInput
  }

  export type ProjectTagUncheckedCreateWithoutTagInput = {
    projectId: string
  }

  export type ProjectTagCreateOrConnectWithoutTagInput = {
    where: ProjectTagWhereUniqueInput
    create: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput>
  }

  export type ProjectTagCreateManyTagInputEnvelope = {
    data: ProjectTagCreateManyTagInput | ProjectTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTagUpsertWithWhereUniqueWithoutTagInput = {
    where: ProjectTagWhereUniqueInput
    update: XOR<ProjectTagUpdateWithoutTagInput, ProjectTagUncheckedUpdateWithoutTagInput>
    create: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput>
  }

  export type ProjectTagUpdateWithWhereUniqueWithoutTagInput = {
    where: ProjectTagWhereUniqueInput
    data: XOR<ProjectTagUpdateWithoutTagInput, ProjectTagUncheckedUpdateWithoutTagInput>
  }

  export type ProjectTagUpdateManyWithWhereWithoutTagInput = {
    where: ProjectTagScalarWhereInput
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyWithoutTagInput>
  }

  export type ProjectCreateWithoutTagsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
    college?: CollegeCreateNestedOneWithoutProjectsInput
    upvotes?: ProjectUpvoteCreateNestedManyWithoutProjectInput
    collaborators?: ProjectCollaboratorCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    collegeId?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
    upvotes?: ProjectUpvoteUncheckedCreateNestedManyWithoutProjectInput
    collaborators?: ProjectCollaboratorUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTagsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
  }

  export type TagUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
  }

  export type TagCreateOrConnectWithoutProjectsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectUpsertWithoutTagsInput = {
    update: XOR<ProjectUpdateWithoutTagsInput, ProjectUncheckedUpdateWithoutTagsInput>
    create: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTagsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTagsInput, ProjectUncheckedUpdateWithoutTagsInput>
  }

  export type ProjectUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneWithoutProjectsNestedInput
    upvotes?: ProjectUpvoteUpdateManyWithoutProjectNestedInput
    collaborators?: ProjectCollaboratorUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collegeId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: ProjectUpvoteUncheckedUpdateManyWithoutProjectNestedInput
    collaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TagUpsertWithoutProjectsInput = {
    update: XOR<TagUpdateWithoutProjectsInput, TagUncheckedUpdateWithoutProjectsInput>
    create: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutProjectsInput, TagUncheckedUpdateWithoutProjectsInput>
  }

  export type TagUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type UserCollegeCreateManyUserInput = {
    id?: string
    collegeId: string
    userType: $Enums.UserType
    isAdmin?: boolean
    degreeType?: string | null
    branch?: string | null
    verified: boolean
    joinedAt: Date | string
    leftAt?: Date | string | null
  }

  export type ProjectUpvoteCreateManyUserInput = {
    projectId: string
    createdAt?: Date | string
  }

  export type ProjectCollaboratorCreateManyUserInput = {
    projectId: string
    role: $Enums.ProjectUserRole
    joinedAt?: Date | string
  }

  export type UserCollegeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    college?: CollegeUpdateOneRequiredWithoutUserCollegesNestedInput
  }

  export type UserCollegeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCollegeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUpvoteUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutUpvotesNestedInput
  }

  export type ProjectUpvoteUncheckedUpdateWithoutUserInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpvoteUncheckedUpdateManyWithoutUserInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorUpdateWithoutUserInput = {
    role?: EnumProjectUserRoleFieldUpdateOperationsInput | $Enums.ProjectUserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type ProjectCollaboratorUncheckedUpdateWithoutUserInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectUserRoleFieldUpdateOperationsInput | $Enums.ProjectUserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorUncheckedUpdateManyWithoutUserInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectUserRoleFieldUpdateOperationsInput | $Enums.ProjectUserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCollegeCreateManyCollegeInput = {
    id?: string
    userId: string
    userType: $Enums.UserType
    isAdmin?: boolean
    degreeType?: string | null
    branch?: string | null
    verified: boolean
    joinedAt: Date | string
    leftAt?: Date | string | null
  }

  export type ProjectCreateManyCollegeInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    githubUrl?: string | null
    isCollaborative?: boolean
    isLookingForContributors?: boolean
    upvotesCount?: number
    createdAt?: Date | string
  }

  export type CollegeEmailDomainCreateManyCollegeInput = {
    id?: string
    domain: string
  }

  export type UserCollegeUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserCollegesNestedInput
  }

  export type UserCollegeUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCollegeUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: ProjectUpvoteUpdateManyWithoutProjectNestedInput
    collaborators?: ProjectCollaboratorUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: ProjectUpvoteUncheckedUpdateManyWithoutProjectNestedInput
    collaborators?: ProjectCollaboratorUncheckedUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isCollaborative?: BoolFieldUpdateOperationsInput | boolean
    isLookingForContributors?: BoolFieldUpdateOperationsInput | boolean
    upvotesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeEmailDomainUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeEmailDomainUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeEmailDomainUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpvoteCreateManyProjectInput = {
    userId: string
    createdAt?: Date | string
  }

  export type ProjectCollaboratorCreateManyProjectInput = {
    userId: string
    role: $Enums.ProjectUserRole
    joinedAt?: Date | string
  }

  export type ProjectTagCreateManyProjectInput = {
    tagId: string
  }

  export type ProjectUpvoteUpdateWithoutProjectInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectUpvotesNestedInput
  }

  export type ProjectUpvoteUncheckedUpdateWithoutProjectInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpvoteUncheckedUpdateManyWithoutProjectInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorUpdateWithoutProjectInput = {
    role?: EnumProjectUserRoleFieldUpdateOperationsInput | $Enums.ProjectUserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectCollaboratorNestedInput
  }

  export type ProjectCollaboratorUncheckedUpdateWithoutProjectInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectUserRoleFieldUpdateOperationsInput | $Enums.ProjectUserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCollaboratorUncheckedUpdateManyWithoutProjectInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectUserRoleFieldUpdateOperationsInput | $Enums.ProjectUserRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTagUpdateWithoutProjectInput = {
    tag?: TagUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectTagUncheckedUpdateWithoutProjectInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTagUncheckedUpdateManyWithoutProjectInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTagCreateManyTagInput = {
    projectId: string
  }

  export type ProjectTagUpdateWithoutTagInput = {
    project?: ProjectUpdateOneRequiredWithoutTagsNestedInput
  }

  export type ProjectTagUncheckedUpdateWithoutTagInput = {
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTagUncheckedUpdateManyWithoutTagInput = {
    projectId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}