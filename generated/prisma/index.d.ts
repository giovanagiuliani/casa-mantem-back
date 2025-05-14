
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
 * Model clientes
 * 
 */
export type clientes = $Result.DefaultSelection<Prisma.$clientesPayload>
/**
 * Model enderecoscliente
 * 
 */
export type enderecoscliente = $Result.DefaultSelection<Prisma.$enderecosclientePayload>
/**
 * Model prestadores
 * 
 */
export type prestadores = $Result.DefaultSelection<Prisma.$prestadoresPayload>
/**
 * Model servicos
 * 
 */
export type servicos = $Result.DefaultSelection<Prisma.$servicosPayload>
/**
 * Model servicosprestadores
 * 
 */
export type servicosprestadores = $Result.DefaultSelection<Prisma.$servicosprestadoresPayload>
/**
 * Model servicosagendados
 * 
 */
export type servicosagendados = $Result.DefaultSelection<Prisma.$servicosagendadosPayload>
/**
 * Model agendaprestador
 * 
 */
export type agendaprestador = $Result.DefaultSelection<Prisma.$agendaprestadorPayload>
/**
 * Model avaliacoescliente
 * 
 */
export type avaliacoescliente = $Result.DefaultSelection<Prisma.$avaliacoesclientePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.clientes.findMany()
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
   * // Fetch zero or more Clientes
   * const clientes = await prisma.clientes.findMany()
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
   * `prisma.clientes`: Exposes CRUD operations for the **clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.clientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enderecoscliente`: Exposes CRUD operations for the **enderecoscliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecosclientes
    * const enderecosclientes = await prisma.enderecoscliente.findMany()
    * ```
    */
  get enderecoscliente(): Prisma.enderecosclienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestadores`: Exposes CRUD operations for the **prestadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestadores
    * const prestadores = await prisma.prestadores.findMany()
    * ```
    */
  get prestadores(): Prisma.prestadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicos`: Exposes CRUD operations for the **servicos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servicos.findMany()
    * ```
    */
  get servicos(): Prisma.servicosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicosprestadores`: Exposes CRUD operations for the **servicosprestadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicosprestadores
    * const servicosprestadores = await prisma.servicosprestadores.findMany()
    * ```
    */
  get servicosprestadores(): Prisma.servicosprestadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicosagendados`: Exposes CRUD operations for the **servicosagendados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicosagendados
    * const servicosagendados = await prisma.servicosagendados.findMany()
    * ```
    */
  get servicosagendados(): Prisma.servicosagendadosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendaprestador`: Exposes CRUD operations for the **agendaprestador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendaprestadors
    * const agendaprestadors = await prisma.agendaprestador.findMany()
    * ```
    */
  get agendaprestador(): Prisma.agendaprestadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacoescliente`: Exposes CRUD operations for the **avaliacoescliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacoesclientes
    * const avaliacoesclientes = await prisma.avaliacoescliente.findMany()
    * ```
    */
  get avaliacoescliente(): Prisma.avaliacoesclienteDelegate<ExtArgs, ClientOptions>;
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
    clientes: 'clientes',
    enderecoscliente: 'enderecoscliente',
    prestadores: 'prestadores',
    servicos: 'servicos',
    servicosprestadores: 'servicosprestadores',
    servicosagendados: 'servicosagendados',
    agendaprestador: 'agendaprestador',
    avaliacoescliente: 'avaliacoescliente'
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
      modelProps: "clientes" | "enderecoscliente" | "prestadores" | "servicos" | "servicosprestadores" | "servicosagendados" | "agendaprestador" | "avaliacoescliente"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      clientes: {
        payload: Prisma.$clientesPayload<ExtArgs>
        fields: Prisma.clientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findFirst: {
            args: Prisma.clientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findMany: {
            args: Prisma.clientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          create: {
            args: Prisma.clientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          createMany: {
            args: Prisma.clientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          delete: {
            args: Prisma.clientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          update: {
            args: Prisma.clientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          deleteMany: {
            args: Prisma.clientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          upsert: {
            args: Prisma.clientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.clientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      enderecoscliente: {
        payload: Prisma.$enderecosclientePayload<ExtArgs>
        fields: Prisma.enderecosclienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enderecosclienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosclientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enderecosclienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosclientePayload>
          }
          findFirst: {
            args: Prisma.enderecosclienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosclientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enderecosclienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosclientePayload>
          }
          findMany: {
            args: Prisma.enderecosclienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosclientePayload>[]
          }
          create: {
            args: Prisma.enderecosclienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosclientePayload>
          }
          createMany: {
            args: Prisma.enderecosclienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.enderecosclienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosclientePayload>[]
          }
          delete: {
            args: Prisma.enderecosclienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosclientePayload>
          }
          update: {
            args: Prisma.enderecosclienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosclientePayload>
          }
          deleteMany: {
            args: Prisma.enderecosclienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enderecosclienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.enderecosclienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosclientePayload>[]
          }
          upsert: {
            args: Prisma.enderecosclienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosclientePayload>
          }
          aggregate: {
            args: Prisma.EnderecosclienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnderecoscliente>
          }
          groupBy: {
            args: Prisma.enderecosclienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecosclienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.enderecosclienteCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecosclienteCountAggregateOutputType> | number
          }
        }
      }
      prestadores: {
        payload: Prisma.$prestadoresPayload<ExtArgs>
        fields: Prisma.prestadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prestadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prestadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestadoresPayload>
          }
          findFirst: {
            args: Prisma.prestadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prestadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestadoresPayload>
          }
          findMany: {
            args: Prisma.prestadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestadoresPayload>[]
          }
          create: {
            args: Prisma.prestadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestadoresPayload>
          }
          createMany: {
            args: Prisma.prestadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prestadoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestadoresPayload>[]
          }
          delete: {
            args: Prisma.prestadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestadoresPayload>
          }
          update: {
            args: Prisma.prestadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestadoresPayload>
          }
          deleteMany: {
            args: Prisma.prestadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prestadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prestadoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestadoresPayload>[]
          }
          upsert: {
            args: Prisma.prestadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestadoresPayload>
          }
          aggregate: {
            args: Prisma.PrestadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestadores>
          }
          groupBy: {
            args: Prisma.prestadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.prestadoresCountArgs<ExtArgs>
            result: $Utils.Optional<PrestadoresCountAggregateOutputType> | number
          }
        }
      }
      servicos: {
        payload: Prisma.$servicosPayload<ExtArgs>
        fields: Prisma.servicosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosPayload>
          }
          findFirst: {
            args: Prisma.servicosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosPayload>
          }
          findMany: {
            args: Prisma.servicosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosPayload>[]
          }
          create: {
            args: Prisma.servicosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosPayload>
          }
          createMany: {
            args: Prisma.servicosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosPayload>[]
          }
          delete: {
            args: Prisma.servicosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosPayload>
          }
          update: {
            args: Prisma.servicosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosPayload>
          }
          deleteMany: {
            args: Prisma.servicosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.servicosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosPayload>[]
          }
          upsert: {
            args: Prisma.servicosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosPayload>
          }
          aggregate: {
            args: Prisma.ServicosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicos>
          }
          groupBy: {
            args: Prisma.servicosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicosGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicosCountArgs<ExtArgs>
            result: $Utils.Optional<ServicosCountAggregateOutputType> | number
          }
        }
      }
      servicosprestadores: {
        payload: Prisma.$servicosprestadoresPayload<ExtArgs>
        fields: Prisma.servicosprestadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicosprestadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosprestadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicosprestadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosprestadoresPayload>
          }
          findFirst: {
            args: Prisma.servicosprestadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosprestadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicosprestadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosprestadoresPayload>
          }
          findMany: {
            args: Prisma.servicosprestadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosprestadoresPayload>[]
          }
          create: {
            args: Prisma.servicosprestadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosprestadoresPayload>
          }
          createMany: {
            args: Prisma.servicosprestadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicosprestadoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosprestadoresPayload>[]
          }
          delete: {
            args: Prisma.servicosprestadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosprestadoresPayload>
          }
          update: {
            args: Prisma.servicosprestadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosprestadoresPayload>
          }
          deleteMany: {
            args: Prisma.servicosprestadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicosprestadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.servicosprestadoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosprestadoresPayload>[]
          }
          upsert: {
            args: Prisma.servicosprestadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosprestadoresPayload>
          }
          aggregate: {
            args: Prisma.ServicosprestadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicosprestadores>
          }
          groupBy: {
            args: Prisma.servicosprestadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicosprestadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicosprestadoresCountArgs<ExtArgs>
            result: $Utils.Optional<ServicosprestadoresCountAggregateOutputType> | number
          }
        }
      }
      servicosagendados: {
        payload: Prisma.$servicosagendadosPayload<ExtArgs>
        fields: Prisma.servicosagendadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicosagendadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosagendadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicosagendadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosagendadosPayload>
          }
          findFirst: {
            args: Prisma.servicosagendadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosagendadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicosagendadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosagendadosPayload>
          }
          findMany: {
            args: Prisma.servicosagendadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosagendadosPayload>[]
          }
          create: {
            args: Prisma.servicosagendadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosagendadosPayload>
          }
          createMany: {
            args: Prisma.servicosagendadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicosagendadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosagendadosPayload>[]
          }
          delete: {
            args: Prisma.servicosagendadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosagendadosPayload>
          }
          update: {
            args: Prisma.servicosagendadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosagendadosPayload>
          }
          deleteMany: {
            args: Prisma.servicosagendadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicosagendadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.servicosagendadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosagendadosPayload>[]
          }
          upsert: {
            args: Prisma.servicosagendadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicosagendadosPayload>
          }
          aggregate: {
            args: Prisma.ServicosagendadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicosagendados>
          }
          groupBy: {
            args: Prisma.servicosagendadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicosagendadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicosagendadosCountArgs<ExtArgs>
            result: $Utils.Optional<ServicosagendadosCountAggregateOutputType> | number
          }
        }
      }
      agendaprestador: {
        payload: Prisma.$agendaprestadorPayload<ExtArgs>
        fields: Prisma.agendaprestadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agendaprestadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaprestadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agendaprestadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaprestadorPayload>
          }
          findFirst: {
            args: Prisma.agendaprestadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaprestadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agendaprestadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaprestadorPayload>
          }
          findMany: {
            args: Prisma.agendaprestadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaprestadorPayload>[]
          }
          create: {
            args: Prisma.agendaprestadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaprestadorPayload>
          }
          createMany: {
            args: Prisma.agendaprestadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.agendaprestadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaprestadorPayload>[]
          }
          delete: {
            args: Prisma.agendaprestadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaprestadorPayload>
          }
          update: {
            args: Prisma.agendaprestadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaprestadorPayload>
          }
          deleteMany: {
            args: Prisma.agendaprestadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agendaprestadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.agendaprestadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaprestadorPayload>[]
          }
          upsert: {
            args: Prisma.agendaprestadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaprestadorPayload>
          }
          aggregate: {
            args: Prisma.AgendaprestadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendaprestador>
          }
          groupBy: {
            args: Prisma.agendaprestadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendaprestadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.agendaprestadorCountArgs<ExtArgs>
            result: $Utils.Optional<AgendaprestadorCountAggregateOutputType> | number
          }
        }
      }
      avaliacoescliente: {
        payload: Prisma.$avaliacoesclientePayload<ExtArgs>
        fields: Prisma.avaliacoesclienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.avaliacoesclienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesclientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.avaliacoesclienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesclientePayload>
          }
          findFirst: {
            args: Prisma.avaliacoesclienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesclientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.avaliacoesclienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesclientePayload>
          }
          findMany: {
            args: Prisma.avaliacoesclienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesclientePayload>[]
          }
          create: {
            args: Prisma.avaliacoesclienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesclientePayload>
          }
          createMany: {
            args: Prisma.avaliacoesclienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.avaliacoesclienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesclientePayload>[]
          }
          delete: {
            args: Prisma.avaliacoesclienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesclientePayload>
          }
          update: {
            args: Prisma.avaliacoesclienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesclientePayload>
          }
          deleteMany: {
            args: Prisma.avaliacoesclienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.avaliacoesclienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.avaliacoesclienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesclientePayload>[]
          }
          upsert: {
            args: Prisma.avaliacoesclienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesclientePayload>
          }
          aggregate: {
            args: Prisma.AvaliacoesclienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacoescliente>
          }
          groupBy: {
            args: Prisma.avaliacoesclienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacoesclienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.avaliacoesclienteCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacoesclienteCountAggregateOutputType> | number
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
    clientes?: clientesOmit
    enderecoscliente?: enderecosclienteOmit
    prestadores?: prestadoresOmit
    servicos?: servicosOmit
    servicosprestadores?: servicosprestadoresOmit
    servicosagendados?: servicosagendadosOmit
    agendaprestador?: agendaprestadorOmit
    avaliacoescliente?: avaliacoesclienteOmit
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
   * Models
   */

  /**
   * Model clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    idcliente: number | null
  }

  export type ClientesSumAggregateOutputType = {
    idcliente: bigint | null
  }

  export type ClientesMinAggregateOutputType = {
    idcliente: bigint | null
    dtregistro: Date | null
    nmcliente: string | null
    emailcliente: string | null
    senhacliente: string | null
  }

  export type ClientesMaxAggregateOutputType = {
    idcliente: bigint | null
    dtregistro: Date | null
    nmcliente: string | null
    emailcliente: string | null
    senhacliente: string | null
  }

  export type ClientesCountAggregateOutputType = {
    idcliente: number
    dtregistro: number
    nmcliente: number
    emailcliente: number
    senhacliente: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    idcliente?: true
  }

  export type ClientesSumAggregateInputType = {
    idcliente?: true
  }

  export type ClientesMinAggregateInputType = {
    idcliente?: true
    dtregistro?: true
    nmcliente?: true
    emailcliente?: true
    senhacliente?: true
  }

  export type ClientesMaxAggregateInputType = {
    idcliente?: true
    dtregistro?: true
    nmcliente?: true
    emailcliente?: true
    senhacliente?: true
  }

  export type ClientesCountAggregateInputType = {
    idcliente?: true
    dtregistro?: true
    nmcliente?: true
    emailcliente?: true
    senhacliente?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to aggregate.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type clientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientesWhereInput
    orderBy?: clientesOrderByWithAggregationInput | clientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    idcliente: bigint
    dtregistro: Date
    nmcliente: string
    emailcliente: string
    senhacliente: string
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends clientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type clientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcliente?: boolean
    dtregistro?: boolean
    nmcliente?: boolean
    emailcliente?: boolean
    senhacliente?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type clientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcliente?: boolean
    dtregistro?: boolean
    nmcliente?: boolean
    emailcliente?: boolean
    senhacliente?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type clientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcliente?: boolean
    dtregistro?: boolean
    nmcliente?: boolean
    emailcliente?: boolean
    senhacliente?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type clientesSelectScalar = {
    idcliente?: boolean
    dtregistro?: boolean
    nmcliente?: boolean
    emailcliente?: boolean
    senhacliente?: boolean
  }

  export type clientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idcliente" | "dtregistro" | "nmcliente" | "emailcliente" | "senhacliente", ExtArgs["result"]["clientes"]>

  export type $clientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clientes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idcliente: bigint
      dtregistro: Date
      nmcliente: string
      emailcliente: string
      senhacliente: string
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type clientesGetPayload<S extends boolean | null | undefined | clientesDefaultArgs> = $Result.GetResult<Prisma.$clientesPayload, S>

  type clientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface clientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientes'], meta: { name: 'clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {clientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientesFindUniqueArgs>(args: SelectSubset<T, clientesFindUniqueArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs>(args: SelectSubset<T, clientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientesFindFirstArgs>(args?: SelectSubset<T, clientesFindFirstArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs>(args?: SelectSubset<T, clientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `idcliente`
     * const clientesWithIdclienteOnly = await prisma.clientes.findMany({ select: { idcliente: true } })
     * 
     */
    findMany<T extends clientesFindManyArgs>(args?: SelectSubset<T, clientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientes.
     * @param {clientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends clientesCreateArgs>(args: SelectSubset<T, clientesCreateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientesCreateManyArgs>(args?: SelectSubset<T, clientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clientesCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `idcliente`
     * const clientesWithIdclienteOnly = await prisma.clientes.createManyAndReturn({
     *   select: { idcliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clientesCreateManyAndReturnArgs>(args?: SelectSubset<T, clientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clientes.
     * @param {clientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends clientesDeleteArgs>(args: SelectSubset<T, clientesDeleteArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientes.
     * @param {clientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientesUpdateArgs>(args: SelectSubset<T, clientesUpdateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientesDeleteManyArgs>(args?: SelectSubset<T, clientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientesUpdateManyArgs>(args: SelectSubset<T, clientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {clientesUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `idcliente`
     * const clientesWithIdclienteOnly = await prisma.clientes.updateManyAndReturn({
     *   select: { idcliente: true },
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
    updateManyAndReturn<T extends clientesUpdateManyAndReturnArgs>(args: SelectSubset<T, clientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clientes.
     * @param {clientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends clientesUpsertArgs>(args: SelectSubset<T, clientesUpsertArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clientesCountArgs>(
      args?: Subset<T, clientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesGroupByArgs} args - Group by arguments.
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
      T extends clientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientesGroupByArgs['orderBy'] }
        : { orderBy?: clientesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clientes model
   */
  readonly fields: clientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the clientes model
   */
  interface clientesFieldRefs {
    readonly idcliente: FieldRef<"clientes", 'BigInt'>
    readonly dtregistro: FieldRef<"clientes", 'DateTime'>
    readonly nmcliente: FieldRef<"clientes", 'String'>
    readonly emailcliente: FieldRef<"clientes", 'String'>
    readonly senhacliente: FieldRef<"clientes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * clientes findUnique
   */
  export type clientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findUniqueOrThrow
   */
  export type clientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findFirst
   */
  export type clientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findFirstOrThrow
   */
  export type clientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findMany
   */
  export type clientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes create
   */
  export type clientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * The data needed to create a clientes.
     */
    data: XOR<clientesCreateInput, clientesUncheckedCreateInput>
  }

  /**
   * clientes createMany
   */
  export type clientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes createManyAndReturn
   */
  export type clientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes update
   */
  export type clientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * The data needed to update a clientes.
     */
    data: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
    /**
     * Choose, which clientes to update.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes updateMany
   */
  export type clientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * clientes updateManyAndReturn
   */
  export type clientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * clientes upsert
   */
  export type clientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * The filter to search for the clientes to update in case it exists.
     */
    where: clientesWhereUniqueInput
    /**
     * In case the clientes found by the `where` argument doesn't exist, create a new clientes with this data.
     */
    create: XOR<clientesCreateInput, clientesUncheckedCreateInput>
    /**
     * In case the clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
  }

  /**
   * clientes delete
   */
  export type clientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Filter which clientes to delete.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes deleteMany
   */
  export type clientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * clientes without action
   */
  export type clientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
  }


  /**
   * Model enderecoscliente
   */

  export type AggregateEnderecoscliente = {
    _count: EnderecosclienteCountAggregateOutputType | null
    _avg: EnderecosclienteAvgAggregateOutputType | null
    _sum: EnderecosclienteSumAggregateOutputType | null
    _min: EnderecosclienteMinAggregateOutputType | null
    _max: EnderecosclienteMaxAggregateOutputType | null
  }

  export type EnderecosclienteAvgAggregateOutputType = {
    idenderecocliente: number | null
    idcliente: number | null
  }

  export type EnderecosclienteSumAggregateOutputType = {
    idenderecocliente: bigint | null
    idcliente: bigint | null
  }

  export type EnderecosclienteMinAggregateOutputType = {
    idenderecocliente: bigint | null
    idcliente: bigint | null
    cep: string | null
    bairro: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    cidadecliente: string | null
    ufcliente: string | null
  }

  export type EnderecosclienteMaxAggregateOutputType = {
    idenderecocliente: bigint | null
    idcliente: bigint | null
    cep: string | null
    bairro: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    cidadecliente: string | null
    ufcliente: string | null
  }

  export type EnderecosclienteCountAggregateOutputType = {
    idenderecocliente: number
    idcliente: number
    cep: number
    bairro: number
    logradouro: number
    numero: number
    complemento: number
    cidadecliente: number
    ufcliente: number
    _all: number
  }


  export type EnderecosclienteAvgAggregateInputType = {
    idenderecocliente?: true
    idcliente?: true
  }

  export type EnderecosclienteSumAggregateInputType = {
    idenderecocliente?: true
    idcliente?: true
  }

  export type EnderecosclienteMinAggregateInputType = {
    idenderecocliente?: true
    idcliente?: true
    cep?: true
    bairro?: true
    logradouro?: true
    numero?: true
    complemento?: true
    cidadecliente?: true
    ufcliente?: true
  }

  export type EnderecosclienteMaxAggregateInputType = {
    idenderecocliente?: true
    idcliente?: true
    cep?: true
    bairro?: true
    logradouro?: true
    numero?: true
    complemento?: true
    cidadecliente?: true
    ufcliente?: true
  }

  export type EnderecosclienteCountAggregateInputType = {
    idenderecocliente?: true
    idcliente?: true
    cep?: true
    bairro?: true
    logradouro?: true
    numero?: true
    complemento?: true
    cidadecliente?: true
    ufcliente?: true
    _all?: true
  }

  export type EnderecosclienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enderecoscliente to aggregate.
     */
    where?: enderecosclienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecosclientes to fetch.
     */
    orderBy?: enderecosclienteOrderByWithRelationInput | enderecosclienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enderecosclienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecosclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecosclientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enderecosclientes
    **/
    _count?: true | EnderecosclienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecosclienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecosclienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecosclienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecosclienteMaxAggregateInputType
  }

  export type GetEnderecosclienteAggregateType<T extends EnderecosclienteAggregateArgs> = {
        [P in keyof T & keyof AggregateEnderecoscliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnderecoscliente[P]>
      : GetScalarType<T[P], AggregateEnderecoscliente[P]>
  }




  export type enderecosclienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enderecosclienteWhereInput
    orderBy?: enderecosclienteOrderByWithAggregationInput | enderecosclienteOrderByWithAggregationInput[]
    by: EnderecosclienteScalarFieldEnum[] | EnderecosclienteScalarFieldEnum
    having?: enderecosclienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecosclienteCountAggregateInputType | true
    _avg?: EnderecosclienteAvgAggregateInputType
    _sum?: EnderecosclienteSumAggregateInputType
    _min?: EnderecosclienteMinAggregateInputType
    _max?: EnderecosclienteMaxAggregateInputType
  }

  export type EnderecosclienteGroupByOutputType = {
    idenderecocliente: bigint
    idcliente: bigint
    cep: string
    bairro: string
    logradouro: string
    numero: string | null
    complemento: string | null
    cidadecliente: string
    ufcliente: string
    _count: EnderecosclienteCountAggregateOutputType | null
    _avg: EnderecosclienteAvgAggregateOutputType | null
    _sum: EnderecosclienteSumAggregateOutputType | null
    _min: EnderecosclienteMinAggregateOutputType | null
    _max: EnderecosclienteMaxAggregateOutputType | null
  }

  type GetEnderecosclienteGroupByPayload<T extends enderecosclienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecosclienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecosclienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecosclienteGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecosclienteGroupByOutputType[P]>
        }
      >
    >


  export type enderecosclienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idenderecocliente?: boolean
    idcliente?: boolean
    cep?: boolean
    bairro?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    cidadecliente?: boolean
    ufcliente?: boolean
  }, ExtArgs["result"]["enderecoscliente"]>

  export type enderecosclienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idenderecocliente?: boolean
    idcliente?: boolean
    cep?: boolean
    bairro?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    cidadecliente?: boolean
    ufcliente?: boolean
  }, ExtArgs["result"]["enderecoscliente"]>

  export type enderecosclienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idenderecocliente?: boolean
    idcliente?: boolean
    cep?: boolean
    bairro?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    cidadecliente?: boolean
    ufcliente?: boolean
  }, ExtArgs["result"]["enderecoscliente"]>

  export type enderecosclienteSelectScalar = {
    idenderecocliente?: boolean
    idcliente?: boolean
    cep?: boolean
    bairro?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    cidadecliente?: boolean
    ufcliente?: boolean
  }

  export type enderecosclienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idenderecocliente" | "idcliente" | "cep" | "bairro" | "logradouro" | "numero" | "complemento" | "cidadecliente" | "ufcliente", ExtArgs["result"]["enderecoscliente"]>

  export type $enderecosclientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enderecoscliente"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idenderecocliente: bigint
      idcliente: bigint
      cep: string
      bairro: string
      logradouro: string
      numero: string | null
      complemento: string | null
      cidadecliente: string
      ufcliente: string
    }, ExtArgs["result"]["enderecoscliente"]>
    composites: {}
  }

  type enderecosclienteGetPayload<S extends boolean | null | undefined | enderecosclienteDefaultArgs> = $Result.GetResult<Prisma.$enderecosclientePayload, S>

  type enderecosclienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enderecosclienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecosclienteCountAggregateInputType | true
    }

  export interface enderecosclienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enderecoscliente'], meta: { name: 'enderecoscliente' } }
    /**
     * Find zero or one Enderecoscliente that matches the filter.
     * @param {enderecosclienteFindUniqueArgs} args - Arguments to find a Enderecoscliente
     * @example
     * // Get one Enderecoscliente
     * const enderecoscliente = await prisma.enderecoscliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enderecosclienteFindUniqueArgs>(args: SelectSubset<T, enderecosclienteFindUniqueArgs<ExtArgs>>): Prisma__enderecosclienteClient<$Result.GetResult<Prisma.$enderecosclientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enderecoscliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enderecosclienteFindUniqueOrThrowArgs} args - Arguments to find a Enderecoscliente
     * @example
     * // Get one Enderecoscliente
     * const enderecoscliente = await prisma.enderecoscliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enderecosclienteFindUniqueOrThrowArgs>(args: SelectSubset<T, enderecosclienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enderecosclienteClient<$Result.GetResult<Prisma.$enderecosclientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enderecoscliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosclienteFindFirstArgs} args - Arguments to find a Enderecoscliente
     * @example
     * // Get one Enderecoscliente
     * const enderecoscliente = await prisma.enderecoscliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enderecosclienteFindFirstArgs>(args?: SelectSubset<T, enderecosclienteFindFirstArgs<ExtArgs>>): Prisma__enderecosclienteClient<$Result.GetResult<Prisma.$enderecosclientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enderecoscliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosclienteFindFirstOrThrowArgs} args - Arguments to find a Enderecoscliente
     * @example
     * // Get one Enderecoscliente
     * const enderecoscliente = await prisma.enderecoscliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enderecosclienteFindFirstOrThrowArgs>(args?: SelectSubset<T, enderecosclienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__enderecosclienteClient<$Result.GetResult<Prisma.$enderecosclientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecosclientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosclienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecosclientes
     * const enderecosclientes = await prisma.enderecoscliente.findMany()
     * 
     * // Get first 10 Enderecosclientes
     * const enderecosclientes = await prisma.enderecoscliente.findMany({ take: 10 })
     * 
     * // Only select the `idenderecocliente`
     * const enderecosclienteWithIdenderecoclienteOnly = await prisma.enderecoscliente.findMany({ select: { idenderecocliente: true } })
     * 
     */
    findMany<T extends enderecosclienteFindManyArgs>(args?: SelectSubset<T, enderecosclienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecosclientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enderecoscliente.
     * @param {enderecosclienteCreateArgs} args - Arguments to create a Enderecoscliente.
     * @example
     * // Create one Enderecoscliente
     * const Enderecoscliente = await prisma.enderecoscliente.create({
     *   data: {
     *     // ... data to create a Enderecoscliente
     *   }
     * })
     * 
     */
    create<T extends enderecosclienteCreateArgs>(args: SelectSubset<T, enderecosclienteCreateArgs<ExtArgs>>): Prisma__enderecosclienteClient<$Result.GetResult<Prisma.$enderecosclientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecosclientes.
     * @param {enderecosclienteCreateManyArgs} args - Arguments to create many Enderecosclientes.
     * @example
     * // Create many Enderecosclientes
     * const enderecoscliente = await prisma.enderecoscliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enderecosclienteCreateManyArgs>(args?: SelectSubset<T, enderecosclienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enderecosclientes and returns the data saved in the database.
     * @param {enderecosclienteCreateManyAndReturnArgs} args - Arguments to create many Enderecosclientes.
     * @example
     * // Create many Enderecosclientes
     * const enderecoscliente = await prisma.enderecoscliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enderecosclientes and only return the `idenderecocliente`
     * const enderecosclienteWithIdenderecoclienteOnly = await prisma.enderecoscliente.createManyAndReturn({
     *   select: { idenderecocliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends enderecosclienteCreateManyAndReturnArgs>(args?: SelectSubset<T, enderecosclienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecosclientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enderecoscliente.
     * @param {enderecosclienteDeleteArgs} args - Arguments to delete one Enderecoscliente.
     * @example
     * // Delete one Enderecoscliente
     * const Enderecoscliente = await prisma.enderecoscliente.delete({
     *   where: {
     *     // ... filter to delete one Enderecoscliente
     *   }
     * })
     * 
     */
    delete<T extends enderecosclienteDeleteArgs>(args: SelectSubset<T, enderecosclienteDeleteArgs<ExtArgs>>): Prisma__enderecosclienteClient<$Result.GetResult<Prisma.$enderecosclientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enderecoscliente.
     * @param {enderecosclienteUpdateArgs} args - Arguments to update one Enderecoscliente.
     * @example
     * // Update one Enderecoscliente
     * const enderecoscliente = await prisma.enderecoscliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enderecosclienteUpdateArgs>(args: SelectSubset<T, enderecosclienteUpdateArgs<ExtArgs>>): Prisma__enderecosclienteClient<$Result.GetResult<Prisma.$enderecosclientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecosclientes.
     * @param {enderecosclienteDeleteManyArgs} args - Arguments to filter Enderecosclientes to delete.
     * @example
     * // Delete a few Enderecosclientes
     * const { count } = await prisma.enderecoscliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enderecosclienteDeleteManyArgs>(args?: SelectSubset<T, enderecosclienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecosclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosclienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecosclientes
     * const enderecoscliente = await prisma.enderecoscliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enderecosclienteUpdateManyArgs>(args: SelectSubset<T, enderecosclienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecosclientes and returns the data updated in the database.
     * @param {enderecosclienteUpdateManyAndReturnArgs} args - Arguments to update many Enderecosclientes.
     * @example
     * // Update many Enderecosclientes
     * const enderecoscliente = await prisma.enderecoscliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enderecosclientes and only return the `idenderecocliente`
     * const enderecosclienteWithIdenderecoclienteOnly = await prisma.enderecoscliente.updateManyAndReturn({
     *   select: { idenderecocliente: true },
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
    updateManyAndReturn<T extends enderecosclienteUpdateManyAndReturnArgs>(args: SelectSubset<T, enderecosclienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecosclientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enderecoscliente.
     * @param {enderecosclienteUpsertArgs} args - Arguments to update or create a Enderecoscliente.
     * @example
     * // Update or create a Enderecoscliente
     * const enderecoscliente = await prisma.enderecoscliente.upsert({
     *   create: {
     *     // ... data to create a Enderecoscliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enderecoscliente we want to update
     *   }
     * })
     */
    upsert<T extends enderecosclienteUpsertArgs>(args: SelectSubset<T, enderecosclienteUpsertArgs<ExtArgs>>): Prisma__enderecosclienteClient<$Result.GetResult<Prisma.$enderecosclientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecosclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosclienteCountArgs} args - Arguments to filter Enderecosclientes to count.
     * @example
     * // Count the number of Enderecosclientes
     * const count = await prisma.enderecoscliente.count({
     *   where: {
     *     // ... the filter for the Enderecosclientes we want to count
     *   }
     * })
    **/
    count<T extends enderecosclienteCountArgs>(
      args?: Subset<T, enderecosclienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecosclienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enderecoscliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecosclienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecosclienteAggregateArgs>(args: Subset<T, EnderecosclienteAggregateArgs>): Prisma.PrismaPromise<GetEnderecosclienteAggregateType<T>>

    /**
     * Group by Enderecoscliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosclienteGroupByArgs} args - Group by arguments.
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
      T extends enderecosclienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enderecosclienteGroupByArgs['orderBy'] }
        : { orderBy?: enderecosclienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enderecosclienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecosclienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enderecoscliente model
   */
  readonly fields: enderecosclienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enderecoscliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enderecosclienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the enderecoscliente model
   */
  interface enderecosclienteFieldRefs {
    readonly idenderecocliente: FieldRef<"enderecoscliente", 'BigInt'>
    readonly idcliente: FieldRef<"enderecoscliente", 'BigInt'>
    readonly cep: FieldRef<"enderecoscliente", 'String'>
    readonly bairro: FieldRef<"enderecoscliente", 'String'>
    readonly logradouro: FieldRef<"enderecoscliente", 'String'>
    readonly numero: FieldRef<"enderecoscliente", 'String'>
    readonly complemento: FieldRef<"enderecoscliente", 'String'>
    readonly cidadecliente: FieldRef<"enderecoscliente", 'String'>
    readonly ufcliente: FieldRef<"enderecoscliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * enderecoscliente findUnique
   */
  export type enderecosclienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
    /**
     * Filter, which enderecoscliente to fetch.
     */
    where: enderecosclienteWhereUniqueInput
  }

  /**
   * enderecoscliente findUniqueOrThrow
   */
  export type enderecosclienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
    /**
     * Filter, which enderecoscliente to fetch.
     */
    where: enderecosclienteWhereUniqueInput
  }

  /**
   * enderecoscliente findFirst
   */
  export type enderecosclienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
    /**
     * Filter, which enderecoscliente to fetch.
     */
    where?: enderecosclienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecosclientes to fetch.
     */
    orderBy?: enderecosclienteOrderByWithRelationInput | enderecosclienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecosclientes.
     */
    cursor?: enderecosclienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecosclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecosclientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecosclientes.
     */
    distinct?: EnderecosclienteScalarFieldEnum | EnderecosclienteScalarFieldEnum[]
  }

  /**
   * enderecoscliente findFirstOrThrow
   */
  export type enderecosclienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
    /**
     * Filter, which enderecoscliente to fetch.
     */
    where?: enderecosclienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecosclientes to fetch.
     */
    orderBy?: enderecosclienteOrderByWithRelationInput | enderecosclienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecosclientes.
     */
    cursor?: enderecosclienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecosclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecosclientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecosclientes.
     */
    distinct?: EnderecosclienteScalarFieldEnum | EnderecosclienteScalarFieldEnum[]
  }

  /**
   * enderecoscliente findMany
   */
  export type enderecosclienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
    /**
     * Filter, which enderecosclientes to fetch.
     */
    where?: enderecosclienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecosclientes to fetch.
     */
    orderBy?: enderecosclienteOrderByWithRelationInput | enderecosclienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enderecosclientes.
     */
    cursor?: enderecosclienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecosclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecosclientes.
     */
    skip?: number
    distinct?: EnderecosclienteScalarFieldEnum | EnderecosclienteScalarFieldEnum[]
  }

  /**
   * enderecoscliente create
   */
  export type enderecosclienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
    /**
     * The data needed to create a enderecoscliente.
     */
    data: XOR<enderecosclienteCreateInput, enderecosclienteUncheckedCreateInput>
  }

  /**
   * enderecoscliente createMany
   */
  export type enderecosclienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enderecosclientes.
     */
    data: enderecosclienteCreateManyInput | enderecosclienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enderecoscliente createManyAndReturn
   */
  export type enderecosclienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
    /**
     * The data used to create many enderecosclientes.
     */
    data: enderecosclienteCreateManyInput | enderecosclienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enderecoscliente update
   */
  export type enderecosclienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
    /**
     * The data needed to update a enderecoscliente.
     */
    data: XOR<enderecosclienteUpdateInput, enderecosclienteUncheckedUpdateInput>
    /**
     * Choose, which enderecoscliente to update.
     */
    where: enderecosclienteWhereUniqueInput
  }

  /**
   * enderecoscliente updateMany
   */
  export type enderecosclienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enderecosclientes.
     */
    data: XOR<enderecosclienteUpdateManyMutationInput, enderecosclienteUncheckedUpdateManyInput>
    /**
     * Filter which enderecosclientes to update
     */
    where?: enderecosclienteWhereInput
    /**
     * Limit how many enderecosclientes to update.
     */
    limit?: number
  }

  /**
   * enderecoscliente updateManyAndReturn
   */
  export type enderecosclienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
    /**
     * The data used to update enderecosclientes.
     */
    data: XOR<enderecosclienteUpdateManyMutationInput, enderecosclienteUncheckedUpdateManyInput>
    /**
     * Filter which enderecosclientes to update
     */
    where?: enderecosclienteWhereInput
    /**
     * Limit how many enderecosclientes to update.
     */
    limit?: number
  }

  /**
   * enderecoscliente upsert
   */
  export type enderecosclienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
    /**
     * The filter to search for the enderecoscliente to update in case it exists.
     */
    where: enderecosclienteWhereUniqueInput
    /**
     * In case the enderecoscliente found by the `where` argument doesn't exist, create a new enderecoscliente with this data.
     */
    create: XOR<enderecosclienteCreateInput, enderecosclienteUncheckedCreateInput>
    /**
     * In case the enderecoscliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enderecosclienteUpdateInput, enderecosclienteUncheckedUpdateInput>
  }

  /**
   * enderecoscliente delete
   */
  export type enderecosclienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
    /**
     * Filter which enderecoscliente to delete.
     */
    where: enderecosclienteWhereUniqueInput
  }

  /**
   * enderecoscliente deleteMany
   */
  export type enderecosclienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enderecosclientes to delete
     */
    where?: enderecosclienteWhereInput
    /**
     * Limit how many enderecosclientes to delete.
     */
    limit?: number
  }

  /**
   * enderecoscliente without action
   */
  export type enderecosclienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecoscliente
     */
    select?: enderecosclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecoscliente
     */
    omit?: enderecosclienteOmit<ExtArgs> | null
  }


  /**
   * Model prestadores
   */

  export type AggregatePrestadores = {
    _count: PrestadoresCountAggregateOutputType | null
    _avg: PrestadoresAvgAggregateOutputType | null
    _sum: PrestadoresSumAggregateOutputType | null
    _min: PrestadoresMinAggregateOutputType | null
    _max: PrestadoresMaxAggregateOutputType | null
  }

  export type PrestadoresAvgAggregateOutputType = {
    idprestador: number | null
  }

  export type PrestadoresSumAggregateOutputType = {
    idprestador: bigint | null
  }

  export type PrestadoresMinAggregateOutputType = {
    idprestador: bigint | null
    dtregistro: Date | null
    nmprestador: string | null
    cpfprestador: string | null
    senhaprestador: string | null
    cidadeprestador: string | null
    ufprestador: string | null
    celularprestador: string | null
    emailprestador: string | null
    whatsapp: boolean | null
  }

  export type PrestadoresMaxAggregateOutputType = {
    idprestador: bigint | null
    dtregistro: Date | null
    nmprestador: string | null
    cpfprestador: string | null
    senhaprestador: string | null
    cidadeprestador: string | null
    ufprestador: string | null
    celularprestador: string | null
    emailprestador: string | null
    whatsapp: boolean | null
  }

  export type PrestadoresCountAggregateOutputType = {
    idprestador: number
    dtregistro: number
    nmprestador: number
    cpfprestador: number
    senhaprestador: number
    cidadeprestador: number
    ufprestador: number
    celularprestador: number
    emailprestador: number
    whatsapp: number
    _all: number
  }


  export type PrestadoresAvgAggregateInputType = {
    idprestador?: true
  }

  export type PrestadoresSumAggregateInputType = {
    idprestador?: true
  }

  export type PrestadoresMinAggregateInputType = {
    idprestador?: true
    dtregistro?: true
    nmprestador?: true
    cpfprestador?: true
    senhaprestador?: true
    cidadeprestador?: true
    ufprestador?: true
    celularprestador?: true
    emailprestador?: true
    whatsapp?: true
  }

  export type PrestadoresMaxAggregateInputType = {
    idprestador?: true
    dtregistro?: true
    nmprestador?: true
    cpfprestador?: true
    senhaprestador?: true
    cidadeprestador?: true
    ufprestador?: true
    celularprestador?: true
    emailprestador?: true
    whatsapp?: true
  }

  export type PrestadoresCountAggregateInputType = {
    idprestador?: true
    dtregistro?: true
    nmprestador?: true
    cpfprestador?: true
    senhaprestador?: true
    cidadeprestador?: true
    ufprestador?: true
    celularprestador?: true
    emailprestador?: true
    whatsapp?: true
    _all?: true
  }

  export type PrestadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestadores to aggregate.
     */
    where?: prestadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestadores to fetch.
     */
    orderBy?: prestadoresOrderByWithRelationInput | prestadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prestadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prestadores
    **/
    _count?: true | PrestadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestadoresMaxAggregateInputType
  }

  export type GetPrestadoresAggregateType<T extends PrestadoresAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestadores[P]>
      : GetScalarType<T[P], AggregatePrestadores[P]>
  }




  export type prestadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestadoresWhereInput
    orderBy?: prestadoresOrderByWithAggregationInput | prestadoresOrderByWithAggregationInput[]
    by: PrestadoresScalarFieldEnum[] | PrestadoresScalarFieldEnum
    having?: prestadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestadoresCountAggregateInputType | true
    _avg?: PrestadoresAvgAggregateInputType
    _sum?: PrestadoresSumAggregateInputType
    _min?: PrestadoresMinAggregateInputType
    _max?: PrestadoresMaxAggregateInputType
  }

  export type PrestadoresGroupByOutputType = {
    idprestador: bigint
    dtregistro: Date
    nmprestador: string
    cpfprestador: string
    senhaprestador: string
    cidadeprestador: string
    ufprestador: string
    celularprestador: string | null
    emailprestador: string | null
    whatsapp: boolean
    _count: PrestadoresCountAggregateOutputType | null
    _avg: PrestadoresAvgAggregateOutputType | null
    _sum: PrestadoresSumAggregateOutputType | null
    _min: PrestadoresMinAggregateOutputType | null
    _max: PrestadoresMaxAggregateOutputType | null
  }

  type GetPrestadoresGroupByPayload<T extends prestadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestadoresGroupByOutputType[P]>
            : GetScalarType<T[P], PrestadoresGroupByOutputType[P]>
        }
      >
    >


  export type prestadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idprestador?: boolean
    dtregistro?: boolean
    nmprestador?: boolean
    cpfprestador?: boolean
    senhaprestador?: boolean
    cidadeprestador?: boolean
    ufprestador?: boolean
    celularprestador?: boolean
    emailprestador?: boolean
    whatsapp?: boolean
  }, ExtArgs["result"]["prestadores"]>

  export type prestadoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idprestador?: boolean
    dtregistro?: boolean
    nmprestador?: boolean
    cpfprestador?: boolean
    senhaprestador?: boolean
    cidadeprestador?: boolean
    ufprestador?: boolean
    celularprestador?: boolean
    emailprestador?: boolean
    whatsapp?: boolean
  }, ExtArgs["result"]["prestadores"]>

  export type prestadoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idprestador?: boolean
    dtregistro?: boolean
    nmprestador?: boolean
    cpfprestador?: boolean
    senhaprestador?: boolean
    cidadeprestador?: boolean
    ufprestador?: boolean
    celularprestador?: boolean
    emailprestador?: boolean
    whatsapp?: boolean
  }, ExtArgs["result"]["prestadores"]>

  export type prestadoresSelectScalar = {
    idprestador?: boolean
    dtregistro?: boolean
    nmprestador?: boolean
    cpfprestador?: boolean
    senhaprestador?: boolean
    cidadeprestador?: boolean
    ufprestador?: boolean
    celularprestador?: boolean
    emailprestador?: boolean
    whatsapp?: boolean
  }

  export type prestadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idprestador" | "dtregistro" | "nmprestador" | "cpfprestador" | "senhaprestador" | "cidadeprestador" | "ufprestador" | "celularprestador" | "emailprestador" | "whatsapp", ExtArgs["result"]["prestadores"]>

  export type $prestadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prestadores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idprestador: bigint
      dtregistro: Date
      nmprestador: string
      cpfprestador: string
      senhaprestador: string
      cidadeprestador: string
      ufprestador: string
      celularprestador: string | null
      emailprestador: string | null
      whatsapp: boolean
    }, ExtArgs["result"]["prestadores"]>
    composites: {}
  }

  type prestadoresGetPayload<S extends boolean | null | undefined | prestadoresDefaultArgs> = $Result.GetResult<Prisma.$prestadoresPayload, S>

  type prestadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prestadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestadoresCountAggregateInputType | true
    }

  export interface prestadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prestadores'], meta: { name: 'prestadores' } }
    /**
     * Find zero or one Prestadores that matches the filter.
     * @param {prestadoresFindUniqueArgs} args - Arguments to find a Prestadores
     * @example
     * // Get one Prestadores
     * const prestadores = await prisma.prestadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prestadoresFindUniqueArgs>(args: SelectSubset<T, prestadoresFindUniqueArgs<ExtArgs>>): Prisma__prestadoresClient<$Result.GetResult<Prisma.$prestadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prestadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prestadoresFindUniqueOrThrowArgs} args - Arguments to find a Prestadores
     * @example
     * // Get one Prestadores
     * const prestadores = await prisma.prestadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prestadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, prestadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prestadoresClient<$Result.GetResult<Prisma.$prestadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestadoresFindFirstArgs} args - Arguments to find a Prestadores
     * @example
     * // Get one Prestadores
     * const prestadores = await prisma.prestadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prestadoresFindFirstArgs>(args?: SelectSubset<T, prestadoresFindFirstArgs<ExtArgs>>): Prisma__prestadoresClient<$Result.GetResult<Prisma.$prestadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestadoresFindFirstOrThrowArgs} args - Arguments to find a Prestadores
     * @example
     * // Get one Prestadores
     * const prestadores = await prisma.prestadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prestadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, prestadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__prestadoresClient<$Result.GetResult<Prisma.$prestadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prestadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestadores
     * const prestadores = await prisma.prestadores.findMany()
     * 
     * // Get first 10 Prestadores
     * const prestadores = await prisma.prestadores.findMany({ take: 10 })
     * 
     * // Only select the `idprestador`
     * const prestadoresWithIdprestadorOnly = await prisma.prestadores.findMany({ select: { idprestador: true } })
     * 
     */
    findMany<T extends prestadoresFindManyArgs>(args?: SelectSubset<T, prestadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prestadores.
     * @param {prestadoresCreateArgs} args - Arguments to create a Prestadores.
     * @example
     * // Create one Prestadores
     * const Prestadores = await prisma.prestadores.create({
     *   data: {
     *     // ... data to create a Prestadores
     *   }
     * })
     * 
     */
    create<T extends prestadoresCreateArgs>(args: SelectSubset<T, prestadoresCreateArgs<ExtArgs>>): Prisma__prestadoresClient<$Result.GetResult<Prisma.$prestadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prestadores.
     * @param {prestadoresCreateManyArgs} args - Arguments to create many Prestadores.
     * @example
     * // Create many Prestadores
     * const prestadores = await prisma.prestadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prestadoresCreateManyArgs>(args?: SelectSubset<T, prestadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prestadores and returns the data saved in the database.
     * @param {prestadoresCreateManyAndReturnArgs} args - Arguments to create many Prestadores.
     * @example
     * // Create many Prestadores
     * const prestadores = await prisma.prestadores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prestadores and only return the `idprestador`
     * const prestadoresWithIdprestadorOnly = await prisma.prestadores.createManyAndReturn({
     *   select: { idprestador: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prestadoresCreateManyAndReturnArgs>(args?: SelectSubset<T, prestadoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestadoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prestadores.
     * @param {prestadoresDeleteArgs} args - Arguments to delete one Prestadores.
     * @example
     * // Delete one Prestadores
     * const Prestadores = await prisma.prestadores.delete({
     *   where: {
     *     // ... filter to delete one Prestadores
     *   }
     * })
     * 
     */
    delete<T extends prestadoresDeleteArgs>(args: SelectSubset<T, prestadoresDeleteArgs<ExtArgs>>): Prisma__prestadoresClient<$Result.GetResult<Prisma.$prestadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prestadores.
     * @param {prestadoresUpdateArgs} args - Arguments to update one Prestadores.
     * @example
     * // Update one Prestadores
     * const prestadores = await prisma.prestadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prestadoresUpdateArgs>(args: SelectSubset<T, prestadoresUpdateArgs<ExtArgs>>): Prisma__prestadoresClient<$Result.GetResult<Prisma.$prestadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prestadores.
     * @param {prestadoresDeleteManyArgs} args - Arguments to filter Prestadores to delete.
     * @example
     * // Delete a few Prestadores
     * const { count } = await prisma.prestadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prestadoresDeleteManyArgs>(args?: SelectSubset<T, prestadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestadores
     * const prestadores = await prisma.prestadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prestadoresUpdateManyArgs>(args: SelectSubset<T, prestadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestadores and returns the data updated in the database.
     * @param {prestadoresUpdateManyAndReturnArgs} args - Arguments to update many Prestadores.
     * @example
     * // Update many Prestadores
     * const prestadores = await prisma.prestadores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prestadores and only return the `idprestador`
     * const prestadoresWithIdprestadorOnly = await prisma.prestadores.updateManyAndReturn({
     *   select: { idprestador: true },
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
    updateManyAndReturn<T extends prestadoresUpdateManyAndReturnArgs>(args: SelectSubset<T, prestadoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestadoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prestadores.
     * @param {prestadoresUpsertArgs} args - Arguments to update or create a Prestadores.
     * @example
     * // Update or create a Prestadores
     * const prestadores = await prisma.prestadores.upsert({
     *   create: {
     *     // ... data to create a Prestadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestadores we want to update
     *   }
     * })
     */
    upsert<T extends prestadoresUpsertArgs>(args: SelectSubset<T, prestadoresUpsertArgs<ExtArgs>>): Prisma__prestadoresClient<$Result.GetResult<Prisma.$prestadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prestadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestadoresCountArgs} args - Arguments to filter Prestadores to count.
     * @example
     * // Count the number of Prestadores
     * const count = await prisma.prestadores.count({
     *   where: {
     *     // ... the filter for the Prestadores we want to count
     *   }
     * })
    **/
    count<T extends prestadoresCountArgs>(
      args?: Subset<T, prestadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrestadoresAggregateArgs>(args: Subset<T, PrestadoresAggregateArgs>): Prisma.PrismaPromise<GetPrestadoresAggregateType<T>>

    /**
     * Group by Prestadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestadoresGroupByArgs} args - Group by arguments.
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
      T extends prestadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prestadoresGroupByArgs['orderBy'] }
        : { orderBy?: prestadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, prestadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prestadores model
   */
  readonly fields: prestadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prestadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prestadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the prestadores model
   */
  interface prestadoresFieldRefs {
    readonly idprestador: FieldRef<"prestadores", 'BigInt'>
    readonly dtregistro: FieldRef<"prestadores", 'DateTime'>
    readonly nmprestador: FieldRef<"prestadores", 'String'>
    readonly cpfprestador: FieldRef<"prestadores", 'String'>
    readonly senhaprestador: FieldRef<"prestadores", 'String'>
    readonly cidadeprestador: FieldRef<"prestadores", 'String'>
    readonly ufprestador: FieldRef<"prestadores", 'String'>
    readonly celularprestador: FieldRef<"prestadores", 'String'>
    readonly emailprestador: FieldRef<"prestadores", 'String'>
    readonly whatsapp: FieldRef<"prestadores", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * prestadores findUnique
   */
  export type prestadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
    /**
     * Filter, which prestadores to fetch.
     */
    where: prestadoresWhereUniqueInput
  }

  /**
   * prestadores findUniqueOrThrow
   */
  export type prestadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
    /**
     * Filter, which prestadores to fetch.
     */
    where: prestadoresWhereUniqueInput
  }

  /**
   * prestadores findFirst
   */
  export type prestadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
    /**
     * Filter, which prestadores to fetch.
     */
    where?: prestadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestadores to fetch.
     */
    orderBy?: prestadoresOrderByWithRelationInput | prestadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestadores.
     */
    cursor?: prestadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestadores.
     */
    distinct?: PrestadoresScalarFieldEnum | PrestadoresScalarFieldEnum[]
  }

  /**
   * prestadores findFirstOrThrow
   */
  export type prestadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
    /**
     * Filter, which prestadores to fetch.
     */
    where?: prestadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestadores to fetch.
     */
    orderBy?: prestadoresOrderByWithRelationInput | prestadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestadores.
     */
    cursor?: prestadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestadores.
     */
    distinct?: PrestadoresScalarFieldEnum | PrestadoresScalarFieldEnum[]
  }

  /**
   * prestadores findMany
   */
  export type prestadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
    /**
     * Filter, which prestadores to fetch.
     */
    where?: prestadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestadores to fetch.
     */
    orderBy?: prestadoresOrderByWithRelationInput | prestadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prestadores.
     */
    cursor?: prestadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestadores.
     */
    skip?: number
    distinct?: PrestadoresScalarFieldEnum | PrestadoresScalarFieldEnum[]
  }

  /**
   * prestadores create
   */
  export type prestadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
    /**
     * The data needed to create a prestadores.
     */
    data: XOR<prestadoresCreateInput, prestadoresUncheckedCreateInput>
  }

  /**
   * prestadores createMany
   */
  export type prestadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prestadores.
     */
    data: prestadoresCreateManyInput | prestadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prestadores createManyAndReturn
   */
  export type prestadoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
    /**
     * The data used to create many prestadores.
     */
    data: prestadoresCreateManyInput | prestadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prestadores update
   */
  export type prestadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
    /**
     * The data needed to update a prestadores.
     */
    data: XOR<prestadoresUpdateInput, prestadoresUncheckedUpdateInput>
    /**
     * Choose, which prestadores to update.
     */
    where: prestadoresWhereUniqueInput
  }

  /**
   * prestadores updateMany
   */
  export type prestadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prestadores.
     */
    data: XOR<prestadoresUpdateManyMutationInput, prestadoresUncheckedUpdateManyInput>
    /**
     * Filter which prestadores to update
     */
    where?: prestadoresWhereInput
    /**
     * Limit how many prestadores to update.
     */
    limit?: number
  }

  /**
   * prestadores updateManyAndReturn
   */
  export type prestadoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
    /**
     * The data used to update prestadores.
     */
    data: XOR<prestadoresUpdateManyMutationInput, prestadoresUncheckedUpdateManyInput>
    /**
     * Filter which prestadores to update
     */
    where?: prestadoresWhereInput
    /**
     * Limit how many prestadores to update.
     */
    limit?: number
  }

  /**
   * prestadores upsert
   */
  export type prestadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
    /**
     * The filter to search for the prestadores to update in case it exists.
     */
    where: prestadoresWhereUniqueInput
    /**
     * In case the prestadores found by the `where` argument doesn't exist, create a new prestadores with this data.
     */
    create: XOR<prestadoresCreateInput, prestadoresUncheckedCreateInput>
    /**
     * In case the prestadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prestadoresUpdateInput, prestadoresUncheckedUpdateInput>
  }

  /**
   * prestadores delete
   */
  export type prestadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
    /**
     * Filter which prestadores to delete.
     */
    where: prestadoresWhereUniqueInput
  }

  /**
   * prestadores deleteMany
   */
  export type prestadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestadores to delete
     */
    where?: prestadoresWhereInput
    /**
     * Limit how many prestadores to delete.
     */
    limit?: number
  }

  /**
   * prestadores without action
   */
  export type prestadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestadores
     */
    select?: prestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestadores
     */
    omit?: prestadoresOmit<ExtArgs> | null
  }


  /**
   * Model servicos
   */

  export type AggregateServicos = {
    _count: ServicosCountAggregateOutputType | null
    _avg: ServicosAvgAggregateOutputType | null
    _sum: ServicosSumAggregateOutputType | null
    _min: ServicosMinAggregateOutputType | null
    _max: ServicosMaxAggregateOutputType | null
  }

  export type ServicosAvgAggregateOutputType = {
    idservico: number | null
    tipocargahoraria: number | null
  }

  export type ServicosSumAggregateOutputType = {
    idservico: bigint | null
    tipocargahoraria: number | null
  }

  export type ServicosMinAggregateOutputType = {
    idservico: bigint | null
    nmservico: string | null
    tipocargahoraria: number | null
    observacao: string | null
  }

  export type ServicosMaxAggregateOutputType = {
    idservico: bigint | null
    nmservico: string | null
    tipocargahoraria: number | null
    observacao: string | null
  }

  export type ServicosCountAggregateOutputType = {
    idservico: number
    nmservico: number
    tipocargahoraria: number
    observacao: number
    _all: number
  }


  export type ServicosAvgAggregateInputType = {
    idservico?: true
    tipocargahoraria?: true
  }

  export type ServicosSumAggregateInputType = {
    idservico?: true
    tipocargahoraria?: true
  }

  export type ServicosMinAggregateInputType = {
    idservico?: true
    nmservico?: true
    tipocargahoraria?: true
    observacao?: true
  }

  export type ServicosMaxAggregateInputType = {
    idservico?: true
    nmservico?: true
    tipocargahoraria?: true
    observacao?: true
  }

  export type ServicosCountAggregateInputType = {
    idservico?: true
    nmservico?: true
    tipocargahoraria?: true
    observacao?: true
    _all?: true
  }

  export type ServicosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicos to aggregate.
     */
    where?: servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicos to fetch.
     */
    orderBy?: servicosOrderByWithRelationInput | servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicos
    **/
    _count?: true | ServicosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicosMaxAggregateInputType
  }

  export type GetServicosAggregateType<T extends ServicosAggregateArgs> = {
        [P in keyof T & keyof AggregateServicos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicos[P]>
      : GetScalarType<T[P], AggregateServicos[P]>
  }




  export type servicosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicosWhereInput
    orderBy?: servicosOrderByWithAggregationInput | servicosOrderByWithAggregationInput[]
    by: ServicosScalarFieldEnum[] | ServicosScalarFieldEnum
    having?: servicosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicosCountAggregateInputType | true
    _avg?: ServicosAvgAggregateInputType
    _sum?: ServicosSumAggregateInputType
    _min?: ServicosMinAggregateInputType
    _max?: ServicosMaxAggregateInputType
  }

  export type ServicosGroupByOutputType = {
    idservico: bigint
    nmservico: string
    tipocargahoraria: number
    observacao: string | null
    _count: ServicosCountAggregateOutputType | null
    _avg: ServicosAvgAggregateOutputType | null
    _sum: ServicosSumAggregateOutputType | null
    _min: ServicosMinAggregateOutputType | null
    _max: ServicosMaxAggregateOutputType | null
  }

  type GetServicosGroupByPayload<T extends servicosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicosGroupByOutputType[P]>
            : GetScalarType<T[P], ServicosGroupByOutputType[P]>
        }
      >
    >


  export type servicosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idservico?: boolean
    nmservico?: boolean
    tipocargahoraria?: boolean
    observacao?: boolean
  }, ExtArgs["result"]["servicos"]>

  export type servicosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idservico?: boolean
    nmservico?: boolean
    tipocargahoraria?: boolean
    observacao?: boolean
  }, ExtArgs["result"]["servicos"]>

  export type servicosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idservico?: boolean
    nmservico?: boolean
    tipocargahoraria?: boolean
    observacao?: boolean
  }, ExtArgs["result"]["servicos"]>

  export type servicosSelectScalar = {
    idservico?: boolean
    nmservico?: boolean
    tipocargahoraria?: boolean
    observacao?: boolean
  }

  export type servicosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idservico" | "nmservico" | "tipocargahoraria" | "observacao", ExtArgs["result"]["servicos"]>

  export type $servicosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servicos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idservico: bigint
      nmservico: string
      tipocargahoraria: number
      observacao: string | null
    }, ExtArgs["result"]["servicos"]>
    composites: {}
  }

  type servicosGetPayload<S extends boolean | null | undefined | servicosDefaultArgs> = $Result.GetResult<Prisma.$servicosPayload, S>

  type servicosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicosCountAggregateInputType | true
    }

  export interface servicosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servicos'], meta: { name: 'servicos' } }
    /**
     * Find zero or one Servicos that matches the filter.
     * @param {servicosFindUniqueArgs} args - Arguments to find a Servicos
     * @example
     * // Get one Servicos
     * const servicos = await prisma.servicos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicosFindUniqueArgs>(args: SelectSubset<T, servicosFindUniqueArgs<ExtArgs>>): Prisma__servicosClient<$Result.GetResult<Prisma.$servicosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicosFindUniqueOrThrowArgs} args - Arguments to find a Servicos
     * @example
     * // Get one Servicos
     * const servicos = await prisma.servicos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicosFindUniqueOrThrowArgs>(args: SelectSubset<T, servicosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicosClient<$Result.GetResult<Prisma.$servicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosFindFirstArgs} args - Arguments to find a Servicos
     * @example
     * // Get one Servicos
     * const servicos = await prisma.servicos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicosFindFirstArgs>(args?: SelectSubset<T, servicosFindFirstArgs<ExtArgs>>): Prisma__servicosClient<$Result.GetResult<Prisma.$servicosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosFindFirstOrThrowArgs} args - Arguments to find a Servicos
     * @example
     * // Get one Servicos
     * const servicos = await prisma.servicos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicosFindFirstOrThrowArgs>(args?: SelectSubset<T, servicosFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicosClient<$Result.GetResult<Prisma.$servicosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servicos.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servicos.findMany({ take: 10 })
     * 
     * // Only select the `idservico`
     * const servicosWithIdservicoOnly = await prisma.servicos.findMany({ select: { idservico: true } })
     * 
     */
    findMany<T extends servicosFindManyArgs>(args?: SelectSubset<T, servicosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicos.
     * @param {servicosCreateArgs} args - Arguments to create a Servicos.
     * @example
     * // Create one Servicos
     * const Servicos = await prisma.servicos.create({
     *   data: {
     *     // ... data to create a Servicos
     *   }
     * })
     * 
     */
    create<T extends servicosCreateArgs>(args: SelectSubset<T, servicosCreateArgs<ExtArgs>>): Prisma__servicosClient<$Result.GetResult<Prisma.$servicosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicos.
     * @param {servicosCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servicos = await prisma.servicos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicosCreateManyArgs>(args?: SelectSubset<T, servicosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicos and returns the data saved in the database.
     * @param {servicosCreateManyAndReturnArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servicos = await prisma.servicos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicos and only return the `idservico`
     * const servicosWithIdservicoOnly = await prisma.servicos.createManyAndReturn({
     *   select: { idservico: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends servicosCreateManyAndReturnArgs>(args?: SelectSubset<T, servicosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicos.
     * @param {servicosDeleteArgs} args - Arguments to delete one Servicos.
     * @example
     * // Delete one Servicos
     * const Servicos = await prisma.servicos.delete({
     *   where: {
     *     // ... filter to delete one Servicos
     *   }
     * })
     * 
     */
    delete<T extends servicosDeleteArgs>(args: SelectSubset<T, servicosDeleteArgs<ExtArgs>>): Prisma__servicosClient<$Result.GetResult<Prisma.$servicosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicos.
     * @param {servicosUpdateArgs} args - Arguments to update one Servicos.
     * @example
     * // Update one Servicos
     * const servicos = await prisma.servicos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicosUpdateArgs>(args: SelectSubset<T, servicosUpdateArgs<ExtArgs>>): Prisma__servicosClient<$Result.GetResult<Prisma.$servicosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicos.
     * @param {servicosDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servicos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicosDeleteManyArgs>(args?: SelectSubset<T, servicosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servicos = await prisma.servicos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicosUpdateManyArgs>(args: SelectSubset<T, servicosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos and returns the data updated in the database.
     * @param {servicosUpdateManyAndReturnArgs} args - Arguments to update many Servicos.
     * @example
     * // Update many Servicos
     * const servicos = await prisma.servicos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicos and only return the `idservico`
     * const servicosWithIdservicoOnly = await prisma.servicos.updateManyAndReturn({
     *   select: { idservico: true },
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
    updateManyAndReturn<T extends servicosUpdateManyAndReturnArgs>(args: SelectSubset<T, servicosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicos.
     * @param {servicosUpsertArgs} args - Arguments to update or create a Servicos.
     * @example
     * // Update or create a Servicos
     * const servicos = await prisma.servicos.upsert({
     *   create: {
     *     // ... data to create a Servicos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicos we want to update
     *   }
     * })
     */
    upsert<T extends servicosUpsertArgs>(args: SelectSubset<T, servicosUpsertArgs<ExtArgs>>): Prisma__servicosClient<$Result.GetResult<Prisma.$servicosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servicos.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends servicosCountArgs>(
      args?: Subset<T, servicosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicosAggregateArgs>(args: Subset<T, ServicosAggregateArgs>): Prisma.PrismaPromise<GetServicosAggregateType<T>>

    /**
     * Group by Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosGroupByArgs} args - Group by arguments.
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
      T extends servicosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicosGroupByArgs['orderBy'] }
        : { orderBy?: servicosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, servicosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servicos model
   */
  readonly fields: servicosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servicos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the servicos model
   */
  interface servicosFieldRefs {
    readonly idservico: FieldRef<"servicos", 'BigInt'>
    readonly nmservico: FieldRef<"servicos", 'String'>
    readonly tipocargahoraria: FieldRef<"servicos", 'Int'>
    readonly observacao: FieldRef<"servicos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * servicos findUnique
   */
  export type servicosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
    /**
     * Filter, which servicos to fetch.
     */
    where: servicosWhereUniqueInput
  }

  /**
   * servicos findUniqueOrThrow
   */
  export type servicosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
    /**
     * Filter, which servicos to fetch.
     */
    where: servicosWhereUniqueInput
  }

  /**
   * servicos findFirst
   */
  export type servicosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
    /**
     * Filter, which servicos to fetch.
     */
    where?: servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicos to fetch.
     */
    orderBy?: servicosOrderByWithRelationInput | servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicos.
     */
    cursor?: servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicos.
     */
    distinct?: ServicosScalarFieldEnum | ServicosScalarFieldEnum[]
  }

  /**
   * servicos findFirstOrThrow
   */
  export type servicosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
    /**
     * Filter, which servicos to fetch.
     */
    where?: servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicos to fetch.
     */
    orderBy?: servicosOrderByWithRelationInput | servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicos.
     */
    cursor?: servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicos.
     */
    distinct?: ServicosScalarFieldEnum | ServicosScalarFieldEnum[]
  }

  /**
   * servicos findMany
   */
  export type servicosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
    /**
     * Filter, which servicos to fetch.
     */
    where?: servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicos to fetch.
     */
    orderBy?: servicosOrderByWithRelationInput | servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicos.
     */
    cursor?: servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicos.
     */
    skip?: number
    distinct?: ServicosScalarFieldEnum | ServicosScalarFieldEnum[]
  }

  /**
   * servicos create
   */
  export type servicosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
    /**
     * The data needed to create a servicos.
     */
    data: XOR<servicosCreateInput, servicosUncheckedCreateInput>
  }

  /**
   * servicos createMany
   */
  export type servicosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicos.
     */
    data: servicosCreateManyInput | servicosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicos createManyAndReturn
   */
  export type servicosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
    /**
     * The data used to create many servicos.
     */
    data: servicosCreateManyInput | servicosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicos update
   */
  export type servicosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
    /**
     * The data needed to update a servicos.
     */
    data: XOR<servicosUpdateInput, servicosUncheckedUpdateInput>
    /**
     * Choose, which servicos to update.
     */
    where: servicosWhereUniqueInput
  }

  /**
   * servicos updateMany
   */
  export type servicosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicos.
     */
    data: XOR<servicosUpdateManyMutationInput, servicosUncheckedUpdateManyInput>
    /**
     * Filter which servicos to update
     */
    where?: servicosWhereInput
    /**
     * Limit how many servicos to update.
     */
    limit?: number
  }

  /**
   * servicos updateManyAndReturn
   */
  export type servicosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
    /**
     * The data used to update servicos.
     */
    data: XOR<servicosUpdateManyMutationInput, servicosUncheckedUpdateManyInput>
    /**
     * Filter which servicos to update
     */
    where?: servicosWhereInput
    /**
     * Limit how many servicos to update.
     */
    limit?: number
  }

  /**
   * servicos upsert
   */
  export type servicosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
    /**
     * The filter to search for the servicos to update in case it exists.
     */
    where: servicosWhereUniqueInput
    /**
     * In case the servicos found by the `where` argument doesn't exist, create a new servicos with this data.
     */
    create: XOR<servicosCreateInput, servicosUncheckedCreateInput>
    /**
     * In case the servicos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicosUpdateInput, servicosUncheckedUpdateInput>
  }

  /**
   * servicos delete
   */
  export type servicosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
    /**
     * Filter which servicos to delete.
     */
    where: servicosWhereUniqueInput
  }

  /**
   * servicos deleteMany
   */
  export type servicosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicos to delete
     */
    where?: servicosWhereInput
    /**
     * Limit how many servicos to delete.
     */
    limit?: number
  }

  /**
   * servicos without action
   */
  export type servicosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicos
     */
    select?: servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicos
     */
    omit?: servicosOmit<ExtArgs> | null
  }


  /**
   * Model servicosprestadores
   */

  export type AggregateServicosprestadores = {
    _count: ServicosprestadoresCountAggregateOutputType | null
    _avg: ServicosprestadoresAvgAggregateOutputType | null
    _sum: ServicosprestadoresSumAggregateOutputType | null
    _min: ServicosprestadoresMinAggregateOutputType | null
    _max: ServicosprestadoresMaxAggregateOutputType | null
  }

  export type ServicosprestadoresAvgAggregateOutputType = {
    idservicoprestador: number | null
    idservico: number | null
    idprestador: number | null
  }

  export type ServicosprestadoresSumAggregateOutputType = {
    idservicoprestador: bigint | null
    idservico: bigint | null
    idprestador: bigint | null
  }

  export type ServicosprestadoresMinAggregateOutputType = {
    idservicoprestador: bigint | null
    idservico: bigint | null
    idprestador: bigint | null
  }

  export type ServicosprestadoresMaxAggregateOutputType = {
    idservicoprestador: bigint | null
    idservico: bigint | null
    idprestador: bigint | null
  }

  export type ServicosprestadoresCountAggregateOutputType = {
    idservicoprestador: number
    idservico: number
    idprestador: number
    _all: number
  }


  export type ServicosprestadoresAvgAggregateInputType = {
    idservicoprestador?: true
    idservico?: true
    idprestador?: true
  }

  export type ServicosprestadoresSumAggregateInputType = {
    idservicoprestador?: true
    idservico?: true
    idprestador?: true
  }

  export type ServicosprestadoresMinAggregateInputType = {
    idservicoprestador?: true
    idservico?: true
    idprestador?: true
  }

  export type ServicosprestadoresMaxAggregateInputType = {
    idservicoprestador?: true
    idservico?: true
    idprestador?: true
  }

  export type ServicosprestadoresCountAggregateInputType = {
    idservicoprestador?: true
    idservico?: true
    idprestador?: true
    _all?: true
  }

  export type ServicosprestadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicosprestadores to aggregate.
     */
    where?: servicosprestadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosprestadores to fetch.
     */
    orderBy?: servicosprestadoresOrderByWithRelationInput | servicosprestadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicosprestadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosprestadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosprestadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicosprestadores
    **/
    _count?: true | ServicosprestadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicosprestadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicosprestadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicosprestadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicosprestadoresMaxAggregateInputType
  }

  export type GetServicosprestadoresAggregateType<T extends ServicosprestadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateServicosprestadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicosprestadores[P]>
      : GetScalarType<T[P], AggregateServicosprestadores[P]>
  }




  export type servicosprestadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicosprestadoresWhereInput
    orderBy?: servicosprestadoresOrderByWithAggregationInput | servicosprestadoresOrderByWithAggregationInput[]
    by: ServicosprestadoresScalarFieldEnum[] | ServicosprestadoresScalarFieldEnum
    having?: servicosprestadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicosprestadoresCountAggregateInputType | true
    _avg?: ServicosprestadoresAvgAggregateInputType
    _sum?: ServicosprestadoresSumAggregateInputType
    _min?: ServicosprestadoresMinAggregateInputType
    _max?: ServicosprestadoresMaxAggregateInputType
  }

  export type ServicosprestadoresGroupByOutputType = {
    idservicoprestador: bigint
    idservico: bigint
    idprestador: bigint
    _count: ServicosprestadoresCountAggregateOutputType | null
    _avg: ServicosprestadoresAvgAggregateOutputType | null
    _sum: ServicosprestadoresSumAggregateOutputType | null
    _min: ServicosprestadoresMinAggregateOutputType | null
    _max: ServicosprestadoresMaxAggregateOutputType | null
  }

  type GetServicosprestadoresGroupByPayload<T extends servicosprestadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicosprestadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicosprestadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicosprestadoresGroupByOutputType[P]>
            : GetScalarType<T[P], ServicosprestadoresGroupByOutputType[P]>
        }
      >
    >


  export type servicosprestadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idservicoprestador?: boolean
    idservico?: boolean
    idprestador?: boolean
  }, ExtArgs["result"]["servicosprestadores"]>

  export type servicosprestadoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idservicoprestador?: boolean
    idservico?: boolean
    idprestador?: boolean
  }, ExtArgs["result"]["servicosprestadores"]>

  export type servicosprestadoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idservicoprestador?: boolean
    idservico?: boolean
    idprestador?: boolean
  }, ExtArgs["result"]["servicosprestadores"]>

  export type servicosprestadoresSelectScalar = {
    idservicoprestador?: boolean
    idservico?: boolean
    idprestador?: boolean
  }

  export type servicosprestadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idservicoprestador" | "idservico" | "idprestador", ExtArgs["result"]["servicosprestadores"]>

  export type $servicosprestadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servicosprestadores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idservicoprestador: bigint
      idservico: bigint
      idprestador: bigint
    }, ExtArgs["result"]["servicosprestadores"]>
    composites: {}
  }

  type servicosprestadoresGetPayload<S extends boolean | null | undefined | servicosprestadoresDefaultArgs> = $Result.GetResult<Prisma.$servicosprestadoresPayload, S>

  type servicosprestadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicosprestadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicosprestadoresCountAggregateInputType | true
    }

  export interface servicosprestadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servicosprestadores'], meta: { name: 'servicosprestadores' } }
    /**
     * Find zero or one Servicosprestadores that matches the filter.
     * @param {servicosprestadoresFindUniqueArgs} args - Arguments to find a Servicosprestadores
     * @example
     * // Get one Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicosprestadoresFindUniqueArgs>(args: SelectSubset<T, servicosprestadoresFindUniqueArgs<ExtArgs>>): Prisma__servicosprestadoresClient<$Result.GetResult<Prisma.$servicosprestadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicosprestadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicosprestadoresFindUniqueOrThrowArgs} args - Arguments to find a Servicosprestadores
     * @example
     * // Get one Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicosprestadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, servicosprestadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicosprestadoresClient<$Result.GetResult<Prisma.$servicosprestadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicosprestadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosprestadoresFindFirstArgs} args - Arguments to find a Servicosprestadores
     * @example
     * // Get one Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicosprestadoresFindFirstArgs>(args?: SelectSubset<T, servicosprestadoresFindFirstArgs<ExtArgs>>): Prisma__servicosprestadoresClient<$Result.GetResult<Prisma.$servicosprestadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicosprestadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosprestadoresFindFirstOrThrowArgs} args - Arguments to find a Servicosprestadores
     * @example
     * // Get one Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicosprestadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, servicosprestadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicosprestadoresClient<$Result.GetResult<Prisma.$servicosprestadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicosprestadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosprestadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.findMany()
     * 
     * // Get first 10 Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.findMany({ take: 10 })
     * 
     * // Only select the `idservicoprestador`
     * const servicosprestadoresWithIdservicoprestadorOnly = await prisma.servicosprestadores.findMany({ select: { idservicoprestador: true } })
     * 
     */
    findMany<T extends servicosprestadoresFindManyArgs>(args?: SelectSubset<T, servicosprestadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosprestadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicosprestadores.
     * @param {servicosprestadoresCreateArgs} args - Arguments to create a Servicosprestadores.
     * @example
     * // Create one Servicosprestadores
     * const Servicosprestadores = await prisma.servicosprestadores.create({
     *   data: {
     *     // ... data to create a Servicosprestadores
     *   }
     * })
     * 
     */
    create<T extends servicosprestadoresCreateArgs>(args: SelectSubset<T, servicosprestadoresCreateArgs<ExtArgs>>): Prisma__servicosprestadoresClient<$Result.GetResult<Prisma.$servicosprestadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicosprestadores.
     * @param {servicosprestadoresCreateManyArgs} args - Arguments to create many Servicosprestadores.
     * @example
     * // Create many Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicosprestadoresCreateManyArgs>(args?: SelectSubset<T, servicosprestadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicosprestadores and returns the data saved in the database.
     * @param {servicosprestadoresCreateManyAndReturnArgs} args - Arguments to create many Servicosprestadores.
     * @example
     * // Create many Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicosprestadores and only return the `idservicoprestador`
     * const servicosprestadoresWithIdservicoprestadorOnly = await prisma.servicosprestadores.createManyAndReturn({
     *   select: { idservicoprestador: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends servicosprestadoresCreateManyAndReturnArgs>(args?: SelectSubset<T, servicosprestadoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosprestadoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicosprestadores.
     * @param {servicosprestadoresDeleteArgs} args - Arguments to delete one Servicosprestadores.
     * @example
     * // Delete one Servicosprestadores
     * const Servicosprestadores = await prisma.servicosprestadores.delete({
     *   where: {
     *     // ... filter to delete one Servicosprestadores
     *   }
     * })
     * 
     */
    delete<T extends servicosprestadoresDeleteArgs>(args: SelectSubset<T, servicosprestadoresDeleteArgs<ExtArgs>>): Prisma__servicosprestadoresClient<$Result.GetResult<Prisma.$servicosprestadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicosprestadores.
     * @param {servicosprestadoresUpdateArgs} args - Arguments to update one Servicosprestadores.
     * @example
     * // Update one Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicosprestadoresUpdateArgs>(args: SelectSubset<T, servicosprestadoresUpdateArgs<ExtArgs>>): Prisma__servicosprestadoresClient<$Result.GetResult<Prisma.$servicosprestadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicosprestadores.
     * @param {servicosprestadoresDeleteManyArgs} args - Arguments to filter Servicosprestadores to delete.
     * @example
     * // Delete a few Servicosprestadores
     * const { count } = await prisma.servicosprestadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicosprestadoresDeleteManyArgs>(args?: SelectSubset<T, servicosprestadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicosprestadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosprestadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicosprestadoresUpdateManyArgs>(args: SelectSubset<T, servicosprestadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicosprestadores and returns the data updated in the database.
     * @param {servicosprestadoresUpdateManyAndReturnArgs} args - Arguments to update many Servicosprestadores.
     * @example
     * // Update many Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicosprestadores and only return the `idservicoprestador`
     * const servicosprestadoresWithIdservicoprestadorOnly = await prisma.servicosprestadores.updateManyAndReturn({
     *   select: { idservicoprestador: true },
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
    updateManyAndReturn<T extends servicosprestadoresUpdateManyAndReturnArgs>(args: SelectSubset<T, servicosprestadoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosprestadoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicosprestadores.
     * @param {servicosprestadoresUpsertArgs} args - Arguments to update or create a Servicosprestadores.
     * @example
     * // Update or create a Servicosprestadores
     * const servicosprestadores = await prisma.servicosprestadores.upsert({
     *   create: {
     *     // ... data to create a Servicosprestadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicosprestadores we want to update
     *   }
     * })
     */
    upsert<T extends servicosprestadoresUpsertArgs>(args: SelectSubset<T, servicosprestadoresUpsertArgs<ExtArgs>>): Prisma__servicosprestadoresClient<$Result.GetResult<Prisma.$servicosprestadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicosprestadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosprestadoresCountArgs} args - Arguments to filter Servicosprestadores to count.
     * @example
     * // Count the number of Servicosprestadores
     * const count = await prisma.servicosprestadores.count({
     *   where: {
     *     // ... the filter for the Servicosprestadores we want to count
     *   }
     * })
    **/
    count<T extends servicosprestadoresCountArgs>(
      args?: Subset<T, servicosprestadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicosprestadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicosprestadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicosprestadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicosprestadoresAggregateArgs>(args: Subset<T, ServicosprestadoresAggregateArgs>): Prisma.PrismaPromise<GetServicosprestadoresAggregateType<T>>

    /**
     * Group by Servicosprestadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosprestadoresGroupByArgs} args - Group by arguments.
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
      T extends servicosprestadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicosprestadoresGroupByArgs['orderBy'] }
        : { orderBy?: servicosprestadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, servicosprestadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicosprestadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servicosprestadores model
   */
  readonly fields: servicosprestadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servicosprestadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicosprestadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the servicosprestadores model
   */
  interface servicosprestadoresFieldRefs {
    readonly idservicoprestador: FieldRef<"servicosprestadores", 'BigInt'>
    readonly idservico: FieldRef<"servicosprestadores", 'BigInt'>
    readonly idprestador: FieldRef<"servicosprestadores", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * servicosprestadores findUnique
   */
  export type servicosprestadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
    /**
     * Filter, which servicosprestadores to fetch.
     */
    where: servicosprestadoresWhereUniqueInput
  }

  /**
   * servicosprestadores findUniqueOrThrow
   */
  export type servicosprestadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
    /**
     * Filter, which servicosprestadores to fetch.
     */
    where: servicosprestadoresWhereUniqueInput
  }

  /**
   * servicosprestadores findFirst
   */
  export type servicosprestadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
    /**
     * Filter, which servicosprestadores to fetch.
     */
    where?: servicosprestadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosprestadores to fetch.
     */
    orderBy?: servicosprestadoresOrderByWithRelationInput | servicosprestadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicosprestadores.
     */
    cursor?: servicosprestadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosprestadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosprestadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicosprestadores.
     */
    distinct?: ServicosprestadoresScalarFieldEnum | ServicosprestadoresScalarFieldEnum[]
  }

  /**
   * servicosprestadores findFirstOrThrow
   */
  export type servicosprestadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
    /**
     * Filter, which servicosprestadores to fetch.
     */
    where?: servicosprestadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosprestadores to fetch.
     */
    orderBy?: servicosprestadoresOrderByWithRelationInput | servicosprestadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicosprestadores.
     */
    cursor?: servicosprestadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosprestadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosprestadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicosprestadores.
     */
    distinct?: ServicosprestadoresScalarFieldEnum | ServicosprestadoresScalarFieldEnum[]
  }

  /**
   * servicosprestadores findMany
   */
  export type servicosprestadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
    /**
     * Filter, which servicosprestadores to fetch.
     */
    where?: servicosprestadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosprestadores to fetch.
     */
    orderBy?: servicosprestadoresOrderByWithRelationInput | servicosprestadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicosprestadores.
     */
    cursor?: servicosprestadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosprestadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosprestadores.
     */
    skip?: number
    distinct?: ServicosprestadoresScalarFieldEnum | ServicosprestadoresScalarFieldEnum[]
  }

  /**
   * servicosprestadores create
   */
  export type servicosprestadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
    /**
     * The data needed to create a servicosprestadores.
     */
    data: XOR<servicosprestadoresCreateInput, servicosprestadoresUncheckedCreateInput>
  }

  /**
   * servicosprestadores createMany
   */
  export type servicosprestadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicosprestadores.
     */
    data: servicosprestadoresCreateManyInput | servicosprestadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicosprestadores createManyAndReturn
   */
  export type servicosprestadoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
    /**
     * The data used to create many servicosprestadores.
     */
    data: servicosprestadoresCreateManyInput | servicosprestadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicosprestadores update
   */
  export type servicosprestadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
    /**
     * The data needed to update a servicosprestadores.
     */
    data: XOR<servicosprestadoresUpdateInput, servicosprestadoresUncheckedUpdateInput>
    /**
     * Choose, which servicosprestadores to update.
     */
    where: servicosprestadoresWhereUniqueInput
  }

  /**
   * servicosprestadores updateMany
   */
  export type servicosprestadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicosprestadores.
     */
    data: XOR<servicosprestadoresUpdateManyMutationInput, servicosprestadoresUncheckedUpdateManyInput>
    /**
     * Filter which servicosprestadores to update
     */
    where?: servicosprestadoresWhereInput
    /**
     * Limit how many servicosprestadores to update.
     */
    limit?: number
  }

  /**
   * servicosprestadores updateManyAndReturn
   */
  export type servicosprestadoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
    /**
     * The data used to update servicosprestadores.
     */
    data: XOR<servicosprestadoresUpdateManyMutationInput, servicosprestadoresUncheckedUpdateManyInput>
    /**
     * Filter which servicosprestadores to update
     */
    where?: servicosprestadoresWhereInput
    /**
     * Limit how many servicosprestadores to update.
     */
    limit?: number
  }

  /**
   * servicosprestadores upsert
   */
  export type servicosprestadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
    /**
     * The filter to search for the servicosprestadores to update in case it exists.
     */
    where: servicosprestadoresWhereUniqueInput
    /**
     * In case the servicosprestadores found by the `where` argument doesn't exist, create a new servicosprestadores with this data.
     */
    create: XOR<servicosprestadoresCreateInput, servicosprestadoresUncheckedCreateInput>
    /**
     * In case the servicosprestadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicosprestadoresUpdateInput, servicosprestadoresUncheckedUpdateInput>
  }

  /**
   * servicosprestadores delete
   */
  export type servicosprestadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
    /**
     * Filter which servicosprestadores to delete.
     */
    where: servicosprestadoresWhereUniqueInput
  }

  /**
   * servicosprestadores deleteMany
   */
  export type servicosprestadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicosprestadores to delete
     */
    where?: servicosprestadoresWhereInput
    /**
     * Limit how many servicosprestadores to delete.
     */
    limit?: number
  }

  /**
   * servicosprestadores without action
   */
  export type servicosprestadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosprestadores
     */
    select?: servicosprestadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosprestadores
     */
    omit?: servicosprestadoresOmit<ExtArgs> | null
  }


  /**
   * Model servicosagendados
   */

  export type AggregateServicosagendados = {
    _count: ServicosagendadosCountAggregateOutputType | null
    _avg: ServicosagendadosAvgAggregateOutputType | null
    _sum: ServicosagendadosSumAggregateOutputType | null
    _min: ServicosagendadosMinAggregateOutputType | null
    _max: ServicosagendadosMaxAggregateOutputType | null
  }

  export type ServicosagendadosAvgAggregateOutputType = {
    idservicoagendado: number | null
    idservico: number | null
    idprestador: number | null
    idcliente: number | null
    situacao: number | null
  }

  export type ServicosagendadosSumAggregateOutputType = {
    idservicoagendado: bigint | null
    idservico: bigint | null
    idprestador: bigint | null
    idcliente: bigint | null
    situacao: number | null
  }

  export type ServicosagendadosMinAggregateOutputType = {
    idservicoagendado: bigint | null
    idservico: bigint | null
    idprestador: bigint | null
    idcliente: bigint | null
    dtregistro: Date | null
    dtprevisto: Date | null
    horainicio: string | null
    horafim: string | null
    situacao: number | null
  }

  export type ServicosagendadosMaxAggregateOutputType = {
    idservicoagendado: bigint | null
    idservico: bigint | null
    idprestador: bigint | null
    idcliente: bigint | null
    dtregistro: Date | null
    dtprevisto: Date | null
    horainicio: string | null
    horafim: string | null
    situacao: number | null
  }

  export type ServicosagendadosCountAggregateOutputType = {
    idservicoagendado: number
    idservico: number
    idprestador: number
    idcliente: number
    dtregistro: number
    dtprevisto: number
    horainicio: number
    horafim: number
    situacao: number
    _all: number
  }


  export type ServicosagendadosAvgAggregateInputType = {
    idservicoagendado?: true
    idservico?: true
    idprestador?: true
    idcliente?: true
    situacao?: true
  }

  export type ServicosagendadosSumAggregateInputType = {
    idservicoagendado?: true
    idservico?: true
    idprestador?: true
    idcliente?: true
    situacao?: true
  }

  export type ServicosagendadosMinAggregateInputType = {
    idservicoagendado?: true
    idservico?: true
    idprestador?: true
    idcliente?: true
    dtregistro?: true
    dtprevisto?: true
    horainicio?: true
    horafim?: true
    situacao?: true
  }

  export type ServicosagendadosMaxAggregateInputType = {
    idservicoagendado?: true
    idservico?: true
    idprestador?: true
    idcliente?: true
    dtregistro?: true
    dtprevisto?: true
    horainicio?: true
    horafim?: true
    situacao?: true
  }

  export type ServicosagendadosCountAggregateInputType = {
    idservicoagendado?: true
    idservico?: true
    idprestador?: true
    idcliente?: true
    dtregistro?: true
    dtprevisto?: true
    horainicio?: true
    horafim?: true
    situacao?: true
    _all?: true
  }

  export type ServicosagendadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicosagendados to aggregate.
     */
    where?: servicosagendadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosagendados to fetch.
     */
    orderBy?: servicosagendadosOrderByWithRelationInput | servicosagendadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicosagendadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosagendados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosagendados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicosagendados
    **/
    _count?: true | ServicosagendadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicosagendadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicosagendadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicosagendadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicosagendadosMaxAggregateInputType
  }

  export type GetServicosagendadosAggregateType<T extends ServicosagendadosAggregateArgs> = {
        [P in keyof T & keyof AggregateServicosagendados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicosagendados[P]>
      : GetScalarType<T[P], AggregateServicosagendados[P]>
  }




  export type servicosagendadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicosagendadosWhereInput
    orderBy?: servicosagendadosOrderByWithAggregationInput | servicosagendadosOrderByWithAggregationInput[]
    by: ServicosagendadosScalarFieldEnum[] | ServicosagendadosScalarFieldEnum
    having?: servicosagendadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicosagendadosCountAggregateInputType | true
    _avg?: ServicosagendadosAvgAggregateInputType
    _sum?: ServicosagendadosSumAggregateInputType
    _min?: ServicosagendadosMinAggregateInputType
    _max?: ServicosagendadosMaxAggregateInputType
  }

  export type ServicosagendadosGroupByOutputType = {
    idservicoagendado: bigint
    idservico: bigint
    idprestador: bigint
    idcliente: bigint
    dtregistro: Date
    dtprevisto: Date
    horainicio: string
    horafim: string | null
    situacao: number
    _count: ServicosagendadosCountAggregateOutputType | null
    _avg: ServicosagendadosAvgAggregateOutputType | null
    _sum: ServicosagendadosSumAggregateOutputType | null
    _min: ServicosagendadosMinAggregateOutputType | null
    _max: ServicosagendadosMaxAggregateOutputType | null
  }

  type GetServicosagendadosGroupByPayload<T extends servicosagendadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicosagendadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicosagendadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicosagendadosGroupByOutputType[P]>
            : GetScalarType<T[P], ServicosagendadosGroupByOutputType[P]>
        }
      >
    >


  export type servicosagendadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idservicoagendado?: boolean
    idservico?: boolean
    idprestador?: boolean
    idcliente?: boolean
    dtregistro?: boolean
    dtprevisto?: boolean
    horainicio?: boolean
    horafim?: boolean
    situacao?: boolean
  }, ExtArgs["result"]["servicosagendados"]>

  export type servicosagendadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idservicoagendado?: boolean
    idservico?: boolean
    idprestador?: boolean
    idcliente?: boolean
    dtregistro?: boolean
    dtprevisto?: boolean
    horainicio?: boolean
    horafim?: boolean
    situacao?: boolean
  }, ExtArgs["result"]["servicosagendados"]>

  export type servicosagendadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idservicoagendado?: boolean
    idservico?: boolean
    idprestador?: boolean
    idcliente?: boolean
    dtregistro?: boolean
    dtprevisto?: boolean
    horainicio?: boolean
    horafim?: boolean
    situacao?: boolean
  }, ExtArgs["result"]["servicosagendados"]>

  export type servicosagendadosSelectScalar = {
    idservicoagendado?: boolean
    idservico?: boolean
    idprestador?: boolean
    idcliente?: boolean
    dtregistro?: boolean
    dtprevisto?: boolean
    horainicio?: boolean
    horafim?: boolean
    situacao?: boolean
  }

  export type servicosagendadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idservicoagendado" | "idservico" | "idprestador" | "idcliente" | "dtregistro" | "dtprevisto" | "horainicio" | "horafim" | "situacao", ExtArgs["result"]["servicosagendados"]>

  export type $servicosagendadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servicosagendados"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idservicoagendado: bigint
      idservico: bigint
      idprestador: bigint
      idcliente: bigint
      dtregistro: Date
      dtprevisto: Date
      horainicio: string
      horafim: string | null
      situacao: number
    }, ExtArgs["result"]["servicosagendados"]>
    composites: {}
  }

  type servicosagendadosGetPayload<S extends boolean | null | undefined | servicosagendadosDefaultArgs> = $Result.GetResult<Prisma.$servicosagendadosPayload, S>

  type servicosagendadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicosagendadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicosagendadosCountAggregateInputType | true
    }

  export interface servicosagendadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servicosagendados'], meta: { name: 'servicosagendados' } }
    /**
     * Find zero or one Servicosagendados that matches the filter.
     * @param {servicosagendadosFindUniqueArgs} args - Arguments to find a Servicosagendados
     * @example
     * // Get one Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicosagendadosFindUniqueArgs>(args: SelectSubset<T, servicosagendadosFindUniqueArgs<ExtArgs>>): Prisma__servicosagendadosClient<$Result.GetResult<Prisma.$servicosagendadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicosagendados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicosagendadosFindUniqueOrThrowArgs} args - Arguments to find a Servicosagendados
     * @example
     * // Get one Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicosagendadosFindUniqueOrThrowArgs>(args: SelectSubset<T, servicosagendadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicosagendadosClient<$Result.GetResult<Prisma.$servicosagendadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicosagendados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosagendadosFindFirstArgs} args - Arguments to find a Servicosagendados
     * @example
     * // Get one Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicosagendadosFindFirstArgs>(args?: SelectSubset<T, servicosagendadosFindFirstArgs<ExtArgs>>): Prisma__servicosagendadosClient<$Result.GetResult<Prisma.$servicosagendadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicosagendados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosagendadosFindFirstOrThrowArgs} args - Arguments to find a Servicosagendados
     * @example
     * // Get one Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicosagendadosFindFirstOrThrowArgs>(args?: SelectSubset<T, servicosagendadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicosagendadosClient<$Result.GetResult<Prisma.$servicosagendadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicosagendados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosagendadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.findMany()
     * 
     * // Get first 10 Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.findMany({ take: 10 })
     * 
     * // Only select the `idservicoagendado`
     * const servicosagendadosWithIdservicoagendadoOnly = await prisma.servicosagendados.findMany({ select: { idservicoagendado: true } })
     * 
     */
    findMany<T extends servicosagendadosFindManyArgs>(args?: SelectSubset<T, servicosagendadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosagendadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicosagendados.
     * @param {servicosagendadosCreateArgs} args - Arguments to create a Servicosagendados.
     * @example
     * // Create one Servicosagendados
     * const Servicosagendados = await prisma.servicosagendados.create({
     *   data: {
     *     // ... data to create a Servicosagendados
     *   }
     * })
     * 
     */
    create<T extends servicosagendadosCreateArgs>(args: SelectSubset<T, servicosagendadosCreateArgs<ExtArgs>>): Prisma__servicosagendadosClient<$Result.GetResult<Prisma.$servicosagendadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicosagendados.
     * @param {servicosagendadosCreateManyArgs} args - Arguments to create many Servicosagendados.
     * @example
     * // Create many Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicosagendadosCreateManyArgs>(args?: SelectSubset<T, servicosagendadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicosagendados and returns the data saved in the database.
     * @param {servicosagendadosCreateManyAndReturnArgs} args - Arguments to create many Servicosagendados.
     * @example
     * // Create many Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicosagendados and only return the `idservicoagendado`
     * const servicosagendadosWithIdservicoagendadoOnly = await prisma.servicosagendados.createManyAndReturn({
     *   select: { idservicoagendado: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends servicosagendadosCreateManyAndReturnArgs>(args?: SelectSubset<T, servicosagendadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosagendadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicosagendados.
     * @param {servicosagendadosDeleteArgs} args - Arguments to delete one Servicosagendados.
     * @example
     * // Delete one Servicosagendados
     * const Servicosagendados = await prisma.servicosagendados.delete({
     *   where: {
     *     // ... filter to delete one Servicosagendados
     *   }
     * })
     * 
     */
    delete<T extends servicosagendadosDeleteArgs>(args: SelectSubset<T, servicosagendadosDeleteArgs<ExtArgs>>): Prisma__servicosagendadosClient<$Result.GetResult<Prisma.$servicosagendadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicosagendados.
     * @param {servicosagendadosUpdateArgs} args - Arguments to update one Servicosagendados.
     * @example
     * // Update one Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicosagendadosUpdateArgs>(args: SelectSubset<T, servicosagendadosUpdateArgs<ExtArgs>>): Prisma__servicosagendadosClient<$Result.GetResult<Prisma.$servicosagendadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicosagendados.
     * @param {servicosagendadosDeleteManyArgs} args - Arguments to filter Servicosagendados to delete.
     * @example
     * // Delete a few Servicosagendados
     * const { count } = await prisma.servicosagendados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicosagendadosDeleteManyArgs>(args?: SelectSubset<T, servicosagendadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicosagendados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosagendadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicosagendadosUpdateManyArgs>(args: SelectSubset<T, servicosagendadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicosagendados and returns the data updated in the database.
     * @param {servicosagendadosUpdateManyAndReturnArgs} args - Arguments to update many Servicosagendados.
     * @example
     * // Update many Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicosagendados and only return the `idservicoagendado`
     * const servicosagendadosWithIdservicoagendadoOnly = await prisma.servicosagendados.updateManyAndReturn({
     *   select: { idservicoagendado: true },
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
    updateManyAndReturn<T extends servicosagendadosUpdateManyAndReturnArgs>(args: SelectSubset<T, servicosagendadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicosagendadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicosagendados.
     * @param {servicosagendadosUpsertArgs} args - Arguments to update or create a Servicosagendados.
     * @example
     * // Update or create a Servicosagendados
     * const servicosagendados = await prisma.servicosagendados.upsert({
     *   create: {
     *     // ... data to create a Servicosagendados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicosagendados we want to update
     *   }
     * })
     */
    upsert<T extends servicosagendadosUpsertArgs>(args: SelectSubset<T, servicosagendadosUpsertArgs<ExtArgs>>): Prisma__servicosagendadosClient<$Result.GetResult<Prisma.$servicosagendadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicosagendados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosagendadosCountArgs} args - Arguments to filter Servicosagendados to count.
     * @example
     * // Count the number of Servicosagendados
     * const count = await prisma.servicosagendados.count({
     *   where: {
     *     // ... the filter for the Servicosagendados we want to count
     *   }
     * })
    **/
    count<T extends servicosagendadosCountArgs>(
      args?: Subset<T, servicosagendadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicosagendadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicosagendados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicosagendadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicosagendadosAggregateArgs>(args: Subset<T, ServicosagendadosAggregateArgs>): Prisma.PrismaPromise<GetServicosagendadosAggregateType<T>>

    /**
     * Group by Servicosagendados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicosagendadosGroupByArgs} args - Group by arguments.
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
      T extends servicosagendadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicosagendadosGroupByArgs['orderBy'] }
        : { orderBy?: servicosagendadosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, servicosagendadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicosagendadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servicosagendados model
   */
  readonly fields: servicosagendadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servicosagendados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicosagendadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the servicosagendados model
   */
  interface servicosagendadosFieldRefs {
    readonly idservicoagendado: FieldRef<"servicosagendados", 'BigInt'>
    readonly idservico: FieldRef<"servicosagendados", 'BigInt'>
    readonly idprestador: FieldRef<"servicosagendados", 'BigInt'>
    readonly idcliente: FieldRef<"servicosagendados", 'BigInt'>
    readonly dtregistro: FieldRef<"servicosagendados", 'DateTime'>
    readonly dtprevisto: FieldRef<"servicosagendados", 'DateTime'>
    readonly horainicio: FieldRef<"servicosagendados", 'String'>
    readonly horafim: FieldRef<"servicosagendados", 'String'>
    readonly situacao: FieldRef<"servicosagendados", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * servicosagendados findUnique
   */
  export type servicosagendadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
    /**
     * Filter, which servicosagendados to fetch.
     */
    where: servicosagendadosWhereUniqueInput
  }

  /**
   * servicosagendados findUniqueOrThrow
   */
  export type servicosagendadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
    /**
     * Filter, which servicosagendados to fetch.
     */
    where: servicosagendadosWhereUniqueInput
  }

  /**
   * servicosagendados findFirst
   */
  export type servicosagendadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
    /**
     * Filter, which servicosagendados to fetch.
     */
    where?: servicosagendadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosagendados to fetch.
     */
    orderBy?: servicosagendadosOrderByWithRelationInput | servicosagendadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicosagendados.
     */
    cursor?: servicosagendadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosagendados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosagendados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicosagendados.
     */
    distinct?: ServicosagendadosScalarFieldEnum | ServicosagendadosScalarFieldEnum[]
  }

  /**
   * servicosagendados findFirstOrThrow
   */
  export type servicosagendadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
    /**
     * Filter, which servicosagendados to fetch.
     */
    where?: servicosagendadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosagendados to fetch.
     */
    orderBy?: servicosagendadosOrderByWithRelationInput | servicosagendadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicosagendados.
     */
    cursor?: servicosagendadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosagendados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosagendados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicosagendados.
     */
    distinct?: ServicosagendadosScalarFieldEnum | ServicosagendadosScalarFieldEnum[]
  }

  /**
   * servicosagendados findMany
   */
  export type servicosagendadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
    /**
     * Filter, which servicosagendados to fetch.
     */
    where?: servicosagendadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicosagendados to fetch.
     */
    orderBy?: servicosagendadosOrderByWithRelationInput | servicosagendadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicosagendados.
     */
    cursor?: servicosagendadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicosagendados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicosagendados.
     */
    skip?: number
    distinct?: ServicosagendadosScalarFieldEnum | ServicosagendadosScalarFieldEnum[]
  }

  /**
   * servicosagendados create
   */
  export type servicosagendadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
    /**
     * The data needed to create a servicosagendados.
     */
    data: XOR<servicosagendadosCreateInput, servicosagendadosUncheckedCreateInput>
  }

  /**
   * servicosagendados createMany
   */
  export type servicosagendadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicosagendados.
     */
    data: servicosagendadosCreateManyInput | servicosagendadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicosagendados createManyAndReturn
   */
  export type servicosagendadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
    /**
     * The data used to create many servicosagendados.
     */
    data: servicosagendadosCreateManyInput | servicosagendadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicosagendados update
   */
  export type servicosagendadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
    /**
     * The data needed to update a servicosagendados.
     */
    data: XOR<servicosagendadosUpdateInput, servicosagendadosUncheckedUpdateInput>
    /**
     * Choose, which servicosagendados to update.
     */
    where: servicosagendadosWhereUniqueInput
  }

  /**
   * servicosagendados updateMany
   */
  export type servicosagendadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicosagendados.
     */
    data: XOR<servicosagendadosUpdateManyMutationInput, servicosagendadosUncheckedUpdateManyInput>
    /**
     * Filter which servicosagendados to update
     */
    where?: servicosagendadosWhereInput
    /**
     * Limit how many servicosagendados to update.
     */
    limit?: number
  }

  /**
   * servicosagendados updateManyAndReturn
   */
  export type servicosagendadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
    /**
     * The data used to update servicosagendados.
     */
    data: XOR<servicosagendadosUpdateManyMutationInput, servicosagendadosUncheckedUpdateManyInput>
    /**
     * Filter which servicosagendados to update
     */
    where?: servicosagendadosWhereInput
    /**
     * Limit how many servicosagendados to update.
     */
    limit?: number
  }

  /**
   * servicosagendados upsert
   */
  export type servicosagendadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
    /**
     * The filter to search for the servicosagendados to update in case it exists.
     */
    where: servicosagendadosWhereUniqueInput
    /**
     * In case the servicosagendados found by the `where` argument doesn't exist, create a new servicosagendados with this data.
     */
    create: XOR<servicosagendadosCreateInput, servicosagendadosUncheckedCreateInput>
    /**
     * In case the servicosagendados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicosagendadosUpdateInput, servicosagendadosUncheckedUpdateInput>
  }

  /**
   * servicosagendados delete
   */
  export type servicosagendadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
    /**
     * Filter which servicosagendados to delete.
     */
    where: servicosagendadosWhereUniqueInput
  }

  /**
   * servicosagendados deleteMany
   */
  export type servicosagendadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicosagendados to delete
     */
    where?: servicosagendadosWhereInput
    /**
     * Limit how many servicosagendados to delete.
     */
    limit?: number
  }

  /**
   * servicosagendados without action
   */
  export type servicosagendadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicosagendados
     */
    select?: servicosagendadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicosagendados
     */
    omit?: servicosagendadosOmit<ExtArgs> | null
  }


  /**
   * Model agendaprestador
   */

  export type AggregateAgendaprestador = {
    _count: AgendaprestadorCountAggregateOutputType | null
    _avg: AgendaprestadorAvgAggregateOutputType | null
    _sum: AgendaprestadorSumAggregateOutputType | null
    _min: AgendaprestadorMinAggregateOutputType | null
    _max: AgendaprestadorMaxAggregateOutputType | null
  }

  export type AgendaprestadorAvgAggregateOutputType = {
    idagendaprestador: number | null
    idprestador: number | null
    idservicoagendado: number | null
  }

  export type AgendaprestadorSumAggregateOutputType = {
    idagendaprestador: bigint | null
    idprestador: bigint | null
    idservicoagendado: bigint | null
  }

  export type AgendaprestadorMinAggregateOutputType = {
    idagendaprestador: bigint | null
    idprestador: bigint | null
    idservicoagendado: bigint | null
    dtregistro: Date | null
    dtprevisto: Date | null
    horainicio: string | null
    horafim: string | null
  }

  export type AgendaprestadorMaxAggregateOutputType = {
    idagendaprestador: bigint | null
    idprestador: bigint | null
    idservicoagendado: bigint | null
    dtregistro: Date | null
    dtprevisto: Date | null
    horainicio: string | null
    horafim: string | null
  }

  export type AgendaprestadorCountAggregateOutputType = {
    idagendaprestador: number
    idprestador: number
    idservicoagendado: number
    dtregistro: number
    dtprevisto: number
    horainicio: number
    horafim: number
    _all: number
  }


  export type AgendaprestadorAvgAggregateInputType = {
    idagendaprestador?: true
    idprestador?: true
    idservicoagendado?: true
  }

  export type AgendaprestadorSumAggregateInputType = {
    idagendaprestador?: true
    idprestador?: true
    idservicoagendado?: true
  }

  export type AgendaprestadorMinAggregateInputType = {
    idagendaprestador?: true
    idprestador?: true
    idservicoagendado?: true
    dtregistro?: true
    dtprevisto?: true
    horainicio?: true
    horafim?: true
  }

  export type AgendaprestadorMaxAggregateInputType = {
    idagendaprestador?: true
    idprestador?: true
    idservicoagendado?: true
    dtregistro?: true
    dtprevisto?: true
    horainicio?: true
    horafim?: true
  }

  export type AgendaprestadorCountAggregateInputType = {
    idagendaprestador?: true
    idprestador?: true
    idservicoagendado?: true
    dtregistro?: true
    dtprevisto?: true
    horainicio?: true
    horafim?: true
    _all?: true
  }

  export type AgendaprestadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agendaprestador to aggregate.
     */
    where?: agendaprestadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendaprestadors to fetch.
     */
    orderBy?: agendaprestadorOrderByWithRelationInput | agendaprestadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agendaprestadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendaprestadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendaprestadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agendaprestadors
    **/
    _count?: true | AgendaprestadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendaprestadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendaprestadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendaprestadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendaprestadorMaxAggregateInputType
  }

  export type GetAgendaprestadorAggregateType<T extends AgendaprestadorAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendaprestador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendaprestador[P]>
      : GetScalarType<T[P], AggregateAgendaprestador[P]>
  }




  export type agendaprestadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendaprestadorWhereInput
    orderBy?: agendaprestadorOrderByWithAggregationInput | agendaprestadorOrderByWithAggregationInput[]
    by: AgendaprestadorScalarFieldEnum[] | AgendaprestadorScalarFieldEnum
    having?: agendaprestadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendaprestadorCountAggregateInputType | true
    _avg?: AgendaprestadorAvgAggregateInputType
    _sum?: AgendaprestadorSumAggregateInputType
    _min?: AgendaprestadorMinAggregateInputType
    _max?: AgendaprestadorMaxAggregateInputType
  }

  export type AgendaprestadorGroupByOutputType = {
    idagendaprestador: bigint
    idprestador: bigint
    idservicoagendado: bigint | null
    dtregistro: Date
    dtprevisto: Date
    horainicio: string
    horafim: string | null
    _count: AgendaprestadorCountAggregateOutputType | null
    _avg: AgendaprestadorAvgAggregateOutputType | null
    _sum: AgendaprestadorSumAggregateOutputType | null
    _min: AgendaprestadorMinAggregateOutputType | null
    _max: AgendaprestadorMaxAggregateOutputType | null
  }

  type GetAgendaprestadorGroupByPayload<T extends agendaprestadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendaprestadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendaprestadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendaprestadorGroupByOutputType[P]>
            : GetScalarType<T[P], AgendaprestadorGroupByOutputType[P]>
        }
      >
    >


  export type agendaprestadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idagendaprestador?: boolean
    idprestador?: boolean
    idservicoagendado?: boolean
    dtregistro?: boolean
    dtprevisto?: boolean
    horainicio?: boolean
    horafim?: boolean
  }, ExtArgs["result"]["agendaprestador"]>

  export type agendaprestadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idagendaprestador?: boolean
    idprestador?: boolean
    idservicoagendado?: boolean
    dtregistro?: boolean
    dtprevisto?: boolean
    horainicio?: boolean
    horafim?: boolean
  }, ExtArgs["result"]["agendaprestador"]>

  export type agendaprestadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idagendaprestador?: boolean
    idprestador?: boolean
    idservicoagendado?: boolean
    dtregistro?: boolean
    dtprevisto?: boolean
    horainicio?: boolean
    horafim?: boolean
  }, ExtArgs["result"]["agendaprestador"]>

  export type agendaprestadorSelectScalar = {
    idagendaprestador?: boolean
    idprestador?: boolean
    idservicoagendado?: boolean
    dtregistro?: boolean
    dtprevisto?: boolean
    horainicio?: boolean
    horafim?: boolean
  }

  export type agendaprestadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idagendaprestador" | "idprestador" | "idservicoagendado" | "dtregistro" | "dtprevisto" | "horainicio" | "horafim", ExtArgs["result"]["agendaprestador"]>

  export type $agendaprestadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agendaprestador"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idagendaprestador: bigint
      idprestador: bigint
      idservicoagendado: bigint | null
      dtregistro: Date
      dtprevisto: Date
      horainicio: string
      horafim: string | null
    }, ExtArgs["result"]["agendaprestador"]>
    composites: {}
  }

  type agendaprestadorGetPayload<S extends boolean | null | undefined | agendaprestadorDefaultArgs> = $Result.GetResult<Prisma.$agendaprestadorPayload, S>

  type agendaprestadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agendaprestadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendaprestadorCountAggregateInputType | true
    }

  export interface agendaprestadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agendaprestador'], meta: { name: 'agendaprestador' } }
    /**
     * Find zero or one Agendaprestador that matches the filter.
     * @param {agendaprestadorFindUniqueArgs} args - Arguments to find a Agendaprestador
     * @example
     * // Get one Agendaprestador
     * const agendaprestador = await prisma.agendaprestador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agendaprestadorFindUniqueArgs>(args: SelectSubset<T, agendaprestadorFindUniqueArgs<ExtArgs>>): Prisma__agendaprestadorClient<$Result.GetResult<Prisma.$agendaprestadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendaprestador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agendaprestadorFindUniqueOrThrowArgs} args - Arguments to find a Agendaprestador
     * @example
     * // Get one Agendaprestador
     * const agendaprestador = await prisma.agendaprestador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agendaprestadorFindUniqueOrThrowArgs>(args: SelectSubset<T, agendaprestadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agendaprestadorClient<$Result.GetResult<Prisma.$agendaprestadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendaprestador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaprestadorFindFirstArgs} args - Arguments to find a Agendaprestador
     * @example
     * // Get one Agendaprestador
     * const agendaprestador = await prisma.agendaprestador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agendaprestadorFindFirstArgs>(args?: SelectSubset<T, agendaprestadorFindFirstArgs<ExtArgs>>): Prisma__agendaprestadorClient<$Result.GetResult<Prisma.$agendaprestadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendaprestador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaprestadorFindFirstOrThrowArgs} args - Arguments to find a Agendaprestador
     * @example
     * // Get one Agendaprestador
     * const agendaprestador = await prisma.agendaprestador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agendaprestadorFindFirstOrThrowArgs>(args?: SelectSubset<T, agendaprestadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__agendaprestadorClient<$Result.GetResult<Prisma.$agendaprestadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendaprestadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaprestadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendaprestadors
     * const agendaprestadors = await prisma.agendaprestador.findMany()
     * 
     * // Get first 10 Agendaprestadors
     * const agendaprestadors = await prisma.agendaprestador.findMany({ take: 10 })
     * 
     * // Only select the `idagendaprestador`
     * const agendaprestadorWithIdagendaprestadorOnly = await prisma.agendaprestador.findMany({ select: { idagendaprestador: true } })
     * 
     */
    findMany<T extends agendaprestadorFindManyArgs>(args?: SelectSubset<T, agendaprestadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaprestadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendaprestador.
     * @param {agendaprestadorCreateArgs} args - Arguments to create a Agendaprestador.
     * @example
     * // Create one Agendaprestador
     * const Agendaprestador = await prisma.agendaprestador.create({
     *   data: {
     *     // ... data to create a Agendaprestador
     *   }
     * })
     * 
     */
    create<T extends agendaprestadorCreateArgs>(args: SelectSubset<T, agendaprestadorCreateArgs<ExtArgs>>): Prisma__agendaprestadorClient<$Result.GetResult<Prisma.$agendaprestadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendaprestadors.
     * @param {agendaprestadorCreateManyArgs} args - Arguments to create many Agendaprestadors.
     * @example
     * // Create many Agendaprestadors
     * const agendaprestador = await prisma.agendaprestador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agendaprestadorCreateManyArgs>(args?: SelectSubset<T, agendaprestadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agendaprestadors and returns the data saved in the database.
     * @param {agendaprestadorCreateManyAndReturnArgs} args - Arguments to create many Agendaprestadors.
     * @example
     * // Create many Agendaprestadors
     * const agendaprestador = await prisma.agendaprestador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agendaprestadors and only return the `idagendaprestador`
     * const agendaprestadorWithIdagendaprestadorOnly = await prisma.agendaprestador.createManyAndReturn({
     *   select: { idagendaprestador: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends agendaprestadorCreateManyAndReturnArgs>(args?: SelectSubset<T, agendaprestadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaprestadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agendaprestador.
     * @param {agendaprestadorDeleteArgs} args - Arguments to delete one Agendaprestador.
     * @example
     * // Delete one Agendaprestador
     * const Agendaprestador = await prisma.agendaprestador.delete({
     *   where: {
     *     // ... filter to delete one Agendaprestador
     *   }
     * })
     * 
     */
    delete<T extends agendaprestadorDeleteArgs>(args: SelectSubset<T, agendaprestadorDeleteArgs<ExtArgs>>): Prisma__agendaprestadorClient<$Result.GetResult<Prisma.$agendaprestadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendaprestador.
     * @param {agendaprestadorUpdateArgs} args - Arguments to update one Agendaprestador.
     * @example
     * // Update one Agendaprestador
     * const agendaprestador = await prisma.agendaprestador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agendaprestadorUpdateArgs>(args: SelectSubset<T, agendaprestadorUpdateArgs<ExtArgs>>): Prisma__agendaprestadorClient<$Result.GetResult<Prisma.$agendaprestadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendaprestadors.
     * @param {agendaprestadorDeleteManyArgs} args - Arguments to filter Agendaprestadors to delete.
     * @example
     * // Delete a few Agendaprestadors
     * const { count } = await prisma.agendaprestador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agendaprestadorDeleteManyArgs>(args?: SelectSubset<T, agendaprestadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendaprestadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaprestadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendaprestadors
     * const agendaprestador = await prisma.agendaprestador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agendaprestadorUpdateManyArgs>(args: SelectSubset<T, agendaprestadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendaprestadors and returns the data updated in the database.
     * @param {agendaprestadorUpdateManyAndReturnArgs} args - Arguments to update many Agendaprestadors.
     * @example
     * // Update many Agendaprestadors
     * const agendaprestador = await prisma.agendaprestador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agendaprestadors and only return the `idagendaprestador`
     * const agendaprestadorWithIdagendaprestadorOnly = await prisma.agendaprestador.updateManyAndReturn({
     *   select: { idagendaprestador: true },
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
    updateManyAndReturn<T extends agendaprestadorUpdateManyAndReturnArgs>(args: SelectSubset<T, agendaprestadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaprestadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agendaprestador.
     * @param {agendaprestadorUpsertArgs} args - Arguments to update or create a Agendaprestador.
     * @example
     * // Update or create a Agendaprestador
     * const agendaprestador = await prisma.agendaprestador.upsert({
     *   create: {
     *     // ... data to create a Agendaprestador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendaprestador we want to update
     *   }
     * })
     */
    upsert<T extends agendaprestadorUpsertArgs>(args: SelectSubset<T, agendaprestadorUpsertArgs<ExtArgs>>): Prisma__agendaprestadorClient<$Result.GetResult<Prisma.$agendaprestadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendaprestadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaprestadorCountArgs} args - Arguments to filter Agendaprestadors to count.
     * @example
     * // Count the number of Agendaprestadors
     * const count = await prisma.agendaprestador.count({
     *   where: {
     *     // ... the filter for the Agendaprestadors we want to count
     *   }
     * })
    **/
    count<T extends agendaprestadorCountArgs>(
      args?: Subset<T, agendaprestadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendaprestadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendaprestador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaprestadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendaprestadorAggregateArgs>(args: Subset<T, AgendaprestadorAggregateArgs>): Prisma.PrismaPromise<GetAgendaprestadorAggregateType<T>>

    /**
     * Group by Agendaprestador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaprestadorGroupByArgs} args - Group by arguments.
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
      T extends agendaprestadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agendaprestadorGroupByArgs['orderBy'] }
        : { orderBy?: agendaprestadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, agendaprestadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaprestadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agendaprestador model
   */
  readonly fields: agendaprestadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agendaprestador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agendaprestadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the agendaprestador model
   */
  interface agendaprestadorFieldRefs {
    readonly idagendaprestador: FieldRef<"agendaprestador", 'BigInt'>
    readonly idprestador: FieldRef<"agendaprestador", 'BigInt'>
    readonly idservicoagendado: FieldRef<"agendaprestador", 'BigInt'>
    readonly dtregistro: FieldRef<"agendaprestador", 'DateTime'>
    readonly dtprevisto: FieldRef<"agendaprestador", 'DateTime'>
    readonly horainicio: FieldRef<"agendaprestador", 'String'>
    readonly horafim: FieldRef<"agendaprestador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * agendaprestador findUnique
   */
  export type agendaprestadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
    /**
     * Filter, which agendaprestador to fetch.
     */
    where: agendaprestadorWhereUniqueInput
  }

  /**
   * agendaprestador findUniqueOrThrow
   */
  export type agendaprestadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
    /**
     * Filter, which agendaprestador to fetch.
     */
    where: agendaprestadorWhereUniqueInput
  }

  /**
   * agendaprestador findFirst
   */
  export type agendaprestadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
    /**
     * Filter, which agendaprestador to fetch.
     */
    where?: agendaprestadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendaprestadors to fetch.
     */
    orderBy?: agendaprestadorOrderByWithRelationInput | agendaprestadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agendaprestadors.
     */
    cursor?: agendaprestadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendaprestadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendaprestadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendaprestadors.
     */
    distinct?: AgendaprestadorScalarFieldEnum | AgendaprestadorScalarFieldEnum[]
  }

  /**
   * agendaprestador findFirstOrThrow
   */
  export type agendaprestadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
    /**
     * Filter, which agendaprestador to fetch.
     */
    where?: agendaprestadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendaprestadors to fetch.
     */
    orderBy?: agendaprestadorOrderByWithRelationInput | agendaprestadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agendaprestadors.
     */
    cursor?: agendaprestadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendaprestadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendaprestadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendaprestadors.
     */
    distinct?: AgendaprestadorScalarFieldEnum | AgendaprestadorScalarFieldEnum[]
  }

  /**
   * agendaprestador findMany
   */
  export type agendaprestadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
    /**
     * Filter, which agendaprestadors to fetch.
     */
    where?: agendaprestadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendaprestadors to fetch.
     */
    orderBy?: agendaprestadorOrderByWithRelationInput | agendaprestadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agendaprestadors.
     */
    cursor?: agendaprestadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendaprestadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendaprestadors.
     */
    skip?: number
    distinct?: AgendaprestadorScalarFieldEnum | AgendaprestadorScalarFieldEnum[]
  }

  /**
   * agendaprestador create
   */
  export type agendaprestadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
    /**
     * The data needed to create a agendaprestador.
     */
    data: XOR<agendaprestadorCreateInput, agendaprestadorUncheckedCreateInput>
  }

  /**
   * agendaprestador createMany
   */
  export type agendaprestadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agendaprestadors.
     */
    data: agendaprestadorCreateManyInput | agendaprestadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agendaprestador createManyAndReturn
   */
  export type agendaprestadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
    /**
     * The data used to create many agendaprestadors.
     */
    data: agendaprestadorCreateManyInput | agendaprestadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agendaprestador update
   */
  export type agendaprestadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
    /**
     * The data needed to update a agendaprestador.
     */
    data: XOR<agendaprestadorUpdateInput, agendaprestadorUncheckedUpdateInput>
    /**
     * Choose, which agendaprestador to update.
     */
    where: agendaprestadorWhereUniqueInput
  }

  /**
   * agendaprestador updateMany
   */
  export type agendaprestadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agendaprestadors.
     */
    data: XOR<agendaprestadorUpdateManyMutationInput, agendaprestadorUncheckedUpdateManyInput>
    /**
     * Filter which agendaprestadors to update
     */
    where?: agendaprestadorWhereInput
    /**
     * Limit how many agendaprestadors to update.
     */
    limit?: number
  }

  /**
   * agendaprestador updateManyAndReturn
   */
  export type agendaprestadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
    /**
     * The data used to update agendaprestadors.
     */
    data: XOR<agendaprestadorUpdateManyMutationInput, agendaprestadorUncheckedUpdateManyInput>
    /**
     * Filter which agendaprestadors to update
     */
    where?: agendaprestadorWhereInput
    /**
     * Limit how many agendaprestadors to update.
     */
    limit?: number
  }

  /**
   * agendaprestador upsert
   */
  export type agendaprestadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
    /**
     * The filter to search for the agendaprestador to update in case it exists.
     */
    where: agendaprestadorWhereUniqueInput
    /**
     * In case the agendaprestador found by the `where` argument doesn't exist, create a new agendaprestador with this data.
     */
    create: XOR<agendaprestadorCreateInput, agendaprestadorUncheckedCreateInput>
    /**
     * In case the agendaprestador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agendaprestadorUpdateInput, agendaprestadorUncheckedUpdateInput>
  }

  /**
   * agendaprestador delete
   */
  export type agendaprestadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
    /**
     * Filter which agendaprestador to delete.
     */
    where: agendaprestadorWhereUniqueInput
  }

  /**
   * agendaprestador deleteMany
   */
  export type agendaprestadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agendaprestadors to delete
     */
    where?: agendaprestadorWhereInput
    /**
     * Limit how many agendaprestadors to delete.
     */
    limit?: number
  }

  /**
   * agendaprestador without action
   */
  export type agendaprestadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendaprestador
     */
    select?: agendaprestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendaprestador
     */
    omit?: agendaprestadorOmit<ExtArgs> | null
  }


  /**
   * Model avaliacoescliente
   */

  export type AggregateAvaliacoescliente = {
    _count: AvaliacoesclienteCountAggregateOutputType | null
    _avg: AvaliacoesclienteAvgAggregateOutputType | null
    _sum: AvaliacoesclienteSumAggregateOutputType | null
    _min: AvaliacoesclienteMinAggregateOutputType | null
    _max: AvaliacoesclienteMaxAggregateOutputType | null
  }

  export type AvaliacoesclienteAvgAggregateOutputType = {
    idavaliacaocliente: number | null
    idservicoagendado: number | null
    nota: number | null
  }

  export type AvaliacoesclienteSumAggregateOutputType = {
    idavaliacaocliente: bigint | null
    idservicoagendado: bigint | null
    nota: number | null
  }

  export type AvaliacoesclienteMinAggregateOutputType = {
    idavaliacaocliente: bigint | null
    idservicoagendado: bigint | null
    dtregistro: Date | null
    nota: number | null
  }

  export type AvaliacoesclienteMaxAggregateOutputType = {
    idavaliacaocliente: bigint | null
    idservicoagendado: bigint | null
    dtregistro: Date | null
    nota: number | null
  }

  export type AvaliacoesclienteCountAggregateOutputType = {
    idavaliacaocliente: number
    idservicoagendado: number
    dtregistro: number
    nota: number
    _all: number
  }


  export type AvaliacoesclienteAvgAggregateInputType = {
    idavaliacaocliente?: true
    idservicoagendado?: true
    nota?: true
  }

  export type AvaliacoesclienteSumAggregateInputType = {
    idavaliacaocliente?: true
    idservicoagendado?: true
    nota?: true
  }

  export type AvaliacoesclienteMinAggregateInputType = {
    idavaliacaocliente?: true
    idservicoagendado?: true
    dtregistro?: true
    nota?: true
  }

  export type AvaliacoesclienteMaxAggregateInputType = {
    idavaliacaocliente?: true
    idservicoagendado?: true
    dtregistro?: true
    nota?: true
  }

  export type AvaliacoesclienteCountAggregateInputType = {
    idavaliacaocliente?: true
    idservicoagendado?: true
    dtregistro?: true
    nota?: true
    _all?: true
  }

  export type AvaliacoesclienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacoescliente to aggregate.
     */
    where?: avaliacoesclienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoesclientes to fetch.
     */
    orderBy?: avaliacoesclienteOrderByWithRelationInput | avaliacoesclienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: avaliacoesclienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoesclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoesclientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned avaliacoesclientes
    **/
    _count?: true | AvaliacoesclienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacoesclienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacoesclienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacoesclienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacoesclienteMaxAggregateInputType
  }

  export type GetAvaliacoesclienteAggregateType<T extends AvaliacoesclienteAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacoescliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacoescliente[P]>
      : GetScalarType<T[P], AggregateAvaliacoescliente[P]>
  }




  export type avaliacoesclienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacoesclienteWhereInput
    orderBy?: avaliacoesclienteOrderByWithAggregationInput | avaliacoesclienteOrderByWithAggregationInput[]
    by: AvaliacoesclienteScalarFieldEnum[] | AvaliacoesclienteScalarFieldEnum
    having?: avaliacoesclienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacoesclienteCountAggregateInputType | true
    _avg?: AvaliacoesclienteAvgAggregateInputType
    _sum?: AvaliacoesclienteSumAggregateInputType
    _min?: AvaliacoesclienteMinAggregateInputType
    _max?: AvaliacoesclienteMaxAggregateInputType
  }

  export type AvaliacoesclienteGroupByOutputType = {
    idavaliacaocliente: bigint
    idservicoagendado: bigint
    dtregistro: Date
    nota: number
    _count: AvaliacoesclienteCountAggregateOutputType | null
    _avg: AvaliacoesclienteAvgAggregateOutputType | null
    _sum: AvaliacoesclienteSumAggregateOutputType | null
    _min: AvaliacoesclienteMinAggregateOutputType | null
    _max: AvaliacoesclienteMaxAggregateOutputType | null
  }

  type GetAvaliacoesclienteGroupByPayload<T extends avaliacoesclienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacoesclienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacoesclienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacoesclienteGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacoesclienteGroupByOutputType[P]>
        }
      >
    >


  export type avaliacoesclienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idavaliacaocliente?: boolean
    idservicoagendado?: boolean
    dtregistro?: boolean
    nota?: boolean
  }, ExtArgs["result"]["avaliacoescliente"]>

  export type avaliacoesclienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idavaliacaocliente?: boolean
    idservicoagendado?: boolean
    dtregistro?: boolean
    nota?: boolean
  }, ExtArgs["result"]["avaliacoescliente"]>

  export type avaliacoesclienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idavaliacaocliente?: boolean
    idservicoagendado?: boolean
    dtregistro?: boolean
    nota?: boolean
  }, ExtArgs["result"]["avaliacoescliente"]>

  export type avaliacoesclienteSelectScalar = {
    idavaliacaocliente?: boolean
    idservicoagendado?: boolean
    dtregistro?: boolean
    nota?: boolean
  }

  export type avaliacoesclienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idavaliacaocliente" | "idservicoagendado" | "dtregistro" | "nota", ExtArgs["result"]["avaliacoescliente"]>

  export type $avaliacoesclientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "avaliacoescliente"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idavaliacaocliente: bigint
      idservicoagendado: bigint
      dtregistro: Date
      nota: number
    }, ExtArgs["result"]["avaliacoescliente"]>
    composites: {}
  }

  type avaliacoesclienteGetPayload<S extends boolean | null | undefined | avaliacoesclienteDefaultArgs> = $Result.GetResult<Prisma.$avaliacoesclientePayload, S>

  type avaliacoesclienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<avaliacoesclienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacoesclienteCountAggregateInputType | true
    }

  export interface avaliacoesclienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['avaliacoescliente'], meta: { name: 'avaliacoescliente' } }
    /**
     * Find zero or one Avaliacoescliente that matches the filter.
     * @param {avaliacoesclienteFindUniqueArgs} args - Arguments to find a Avaliacoescliente
     * @example
     * // Get one Avaliacoescliente
     * const avaliacoescliente = await prisma.avaliacoescliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends avaliacoesclienteFindUniqueArgs>(args: SelectSubset<T, avaliacoesclienteFindUniqueArgs<ExtArgs>>): Prisma__avaliacoesclienteClient<$Result.GetResult<Prisma.$avaliacoesclientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacoescliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {avaliacoesclienteFindUniqueOrThrowArgs} args - Arguments to find a Avaliacoescliente
     * @example
     * // Get one Avaliacoescliente
     * const avaliacoescliente = await prisma.avaliacoescliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends avaliacoesclienteFindUniqueOrThrowArgs>(args: SelectSubset<T, avaliacoesclienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__avaliacoesclienteClient<$Result.GetResult<Prisma.$avaliacoesclientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacoescliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesclienteFindFirstArgs} args - Arguments to find a Avaliacoescliente
     * @example
     * // Get one Avaliacoescliente
     * const avaliacoescliente = await prisma.avaliacoescliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends avaliacoesclienteFindFirstArgs>(args?: SelectSubset<T, avaliacoesclienteFindFirstArgs<ExtArgs>>): Prisma__avaliacoesclienteClient<$Result.GetResult<Prisma.$avaliacoesclientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacoescliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesclienteFindFirstOrThrowArgs} args - Arguments to find a Avaliacoescliente
     * @example
     * // Get one Avaliacoescliente
     * const avaliacoescliente = await prisma.avaliacoescliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends avaliacoesclienteFindFirstOrThrowArgs>(args?: SelectSubset<T, avaliacoesclienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__avaliacoesclienteClient<$Result.GetResult<Prisma.$avaliacoesclientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacoesclientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesclienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacoesclientes
     * const avaliacoesclientes = await prisma.avaliacoescliente.findMany()
     * 
     * // Get first 10 Avaliacoesclientes
     * const avaliacoesclientes = await prisma.avaliacoescliente.findMany({ take: 10 })
     * 
     * // Only select the `idavaliacaocliente`
     * const avaliacoesclienteWithIdavaliacaoclienteOnly = await prisma.avaliacoescliente.findMany({ select: { idavaliacaocliente: true } })
     * 
     */
    findMany<T extends avaliacoesclienteFindManyArgs>(args?: SelectSubset<T, avaliacoesclienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacoesclientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacoescliente.
     * @param {avaliacoesclienteCreateArgs} args - Arguments to create a Avaliacoescliente.
     * @example
     * // Create one Avaliacoescliente
     * const Avaliacoescliente = await prisma.avaliacoescliente.create({
     *   data: {
     *     // ... data to create a Avaliacoescliente
     *   }
     * })
     * 
     */
    create<T extends avaliacoesclienteCreateArgs>(args: SelectSubset<T, avaliacoesclienteCreateArgs<ExtArgs>>): Prisma__avaliacoesclienteClient<$Result.GetResult<Prisma.$avaliacoesclientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacoesclientes.
     * @param {avaliacoesclienteCreateManyArgs} args - Arguments to create many Avaliacoesclientes.
     * @example
     * // Create many Avaliacoesclientes
     * const avaliacoescliente = await prisma.avaliacoescliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends avaliacoesclienteCreateManyArgs>(args?: SelectSubset<T, avaliacoesclienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacoesclientes and returns the data saved in the database.
     * @param {avaliacoesclienteCreateManyAndReturnArgs} args - Arguments to create many Avaliacoesclientes.
     * @example
     * // Create many Avaliacoesclientes
     * const avaliacoescliente = await prisma.avaliacoescliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacoesclientes and only return the `idavaliacaocliente`
     * const avaliacoesclienteWithIdavaliacaoclienteOnly = await prisma.avaliacoescliente.createManyAndReturn({
     *   select: { idavaliacaocliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends avaliacoesclienteCreateManyAndReturnArgs>(args?: SelectSubset<T, avaliacoesclienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacoesclientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacoescliente.
     * @param {avaliacoesclienteDeleteArgs} args - Arguments to delete one Avaliacoescliente.
     * @example
     * // Delete one Avaliacoescliente
     * const Avaliacoescliente = await prisma.avaliacoescliente.delete({
     *   where: {
     *     // ... filter to delete one Avaliacoescliente
     *   }
     * })
     * 
     */
    delete<T extends avaliacoesclienteDeleteArgs>(args: SelectSubset<T, avaliacoesclienteDeleteArgs<ExtArgs>>): Prisma__avaliacoesclienteClient<$Result.GetResult<Prisma.$avaliacoesclientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacoescliente.
     * @param {avaliacoesclienteUpdateArgs} args - Arguments to update one Avaliacoescliente.
     * @example
     * // Update one Avaliacoescliente
     * const avaliacoescliente = await prisma.avaliacoescliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends avaliacoesclienteUpdateArgs>(args: SelectSubset<T, avaliacoesclienteUpdateArgs<ExtArgs>>): Prisma__avaliacoesclienteClient<$Result.GetResult<Prisma.$avaliacoesclientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacoesclientes.
     * @param {avaliacoesclienteDeleteManyArgs} args - Arguments to filter Avaliacoesclientes to delete.
     * @example
     * // Delete a few Avaliacoesclientes
     * const { count } = await prisma.avaliacoescliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends avaliacoesclienteDeleteManyArgs>(args?: SelectSubset<T, avaliacoesclienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacoesclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesclienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacoesclientes
     * const avaliacoescliente = await prisma.avaliacoescliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends avaliacoesclienteUpdateManyArgs>(args: SelectSubset<T, avaliacoesclienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacoesclientes and returns the data updated in the database.
     * @param {avaliacoesclienteUpdateManyAndReturnArgs} args - Arguments to update many Avaliacoesclientes.
     * @example
     * // Update many Avaliacoesclientes
     * const avaliacoescliente = await prisma.avaliacoescliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacoesclientes and only return the `idavaliacaocliente`
     * const avaliacoesclienteWithIdavaliacaoclienteOnly = await prisma.avaliacoescliente.updateManyAndReturn({
     *   select: { idavaliacaocliente: true },
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
    updateManyAndReturn<T extends avaliacoesclienteUpdateManyAndReturnArgs>(args: SelectSubset<T, avaliacoesclienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacoesclientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacoescliente.
     * @param {avaliacoesclienteUpsertArgs} args - Arguments to update or create a Avaliacoescliente.
     * @example
     * // Update or create a Avaliacoescliente
     * const avaliacoescliente = await prisma.avaliacoescliente.upsert({
     *   create: {
     *     // ... data to create a Avaliacoescliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacoescliente we want to update
     *   }
     * })
     */
    upsert<T extends avaliacoesclienteUpsertArgs>(args: SelectSubset<T, avaliacoesclienteUpsertArgs<ExtArgs>>): Prisma__avaliacoesclienteClient<$Result.GetResult<Prisma.$avaliacoesclientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacoesclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesclienteCountArgs} args - Arguments to filter Avaliacoesclientes to count.
     * @example
     * // Count the number of Avaliacoesclientes
     * const count = await prisma.avaliacoescliente.count({
     *   where: {
     *     // ... the filter for the Avaliacoesclientes we want to count
     *   }
     * })
    **/
    count<T extends avaliacoesclienteCountArgs>(
      args?: Subset<T, avaliacoesclienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacoesclienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacoescliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacoesclienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacoesclienteAggregateArgs>(args: Subset<T, AvaliacoesclienteAggregateArgs>): Prisma.PrismaPromise<GetAvaliacoesclienteAggregateType<T>>

    /**
     * Group by Avaliacoescliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesclienteGroupByArgs} args - Group by arguments.
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
      T extends avaliacoesclienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: avaliacoesclienteGroupByArgs['orderBy'] }
        : { orderBy?: avaliacoesclienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, avaliacoesclienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacoesclienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the avaliacoescliente model
   */
  readonly fields: avaliacoesclienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for avaliacoescliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__avaliacoesclienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the avaliacoescliente model
   */
  interface avaliacoesclienteFieldRefs {
    readonly idavaliacaocliente: FieldRef<"avaliacoescliente", 'BigInt'>
    readonly idservicoagendado: FieldRef<"avaliacoescliente", 'BigInt'>
    readonly dtregistro: FieldRef<"avaliacoescliente", 'DateTime'>
    readonly nota: FieldRef<"avaliacoescliente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * avaliacoescliente findUnique
   */
  export type avaliacoesclienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
    /**
     * Filter, which avaliacoescliente to fetch.
     */
    where: avaliacoesclienteWhereUniqueInput
  }

  /**
   * avaliacoescliente findUniqueOrThrow
   */
  export type avaliacoesclienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
    /**
     * Filter, which avaliacoescliente to fetch.
     */
    where: avaliacoesclienteWhereUniqueInput
  }

  /**
   * avaliacoescliente findFirst
   */
  export type avaliacoesclienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
    /**
     * Filter, which avaliacoescliente to fetch.
     */
    where?: avaliacoesclienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoesclientes to fetch.
     */
    orderBy?: avaliacoesclienteOrderByWithRelationInput | avaliacoesclienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacoesclientes.
     */
    cursor?: avaliacoesclienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoesclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoesclientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacoesclientes.
     */
    distinct?: AvaliacoesclienteScalarFieldEnum | AvaliacoesclienteScalarFieldEnum[]
  }

  /**
   * avaliacoescliente findFirstOrThrow
   */
  export type avaliacoesclienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
    /**
     * Filter, which avaliacoescliente to fetch.
     */
    where?: avaliacoesclienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoesclientes to fetch.
     */
    orderBy?: avaliacoesclienteOrderByWithRelationInput | avaliacoesclienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacoesclientes.
     */
    cursor?: avaliacoesclienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoesclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoesclientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacoesclientes.
     */
    distinct?: AvaliacoesclienteScalarFieldEnum | AvaliacoesclienteScalarFieldEnum[]
  }

  /**
   * avaliacoescliente findMany
   */
  export type avaliacoesclienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
    /**
     * Filter, which avaliacoesclientes to fetch.
     */
    where?: avaliacoesclienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoesclientes to fetch.
     */
    orderBy?: avaliacoesclienteOrderByWithRelationInput | avaliacoesclienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing avaliacoesclientes.
     */
    cursor?: avaliacoesclienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoesclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoesclientes.
     */
    skip?: number
    distinct?: AvaliacoesclienteScalarFieldEnum | AvaliacoesclienteScalarFieldEnum[]
  }

  /**
   * avaliacoescliente create
   */
  export type avaliacoesclienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
    /**
     * The data needed to create a avaliacoescliente.
     */
    data: XOR<avaliacoesclienteCreateInput, avaliacoesclienteUncheckedCreateInput>
  }

  /**
   * avaliacoescliente createMany
   */
  export type avaliacoesclienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many avaliacoesclientes.
     */
    data: avaliacoesclienteCreateManyInput | avaliacoesclienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * avaliacoescliente createManyAndReturn
   */
  export type avaliacoesclienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
    /**
     * The data used to create many avaliacoesclientes.
     */
    data: avaliacoesclienteCreateManyInput | avaliacoesclienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * avaliacoescliente update
   */
  export type avaliacoesclienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
    /**
     * The data needed to update a avaliacoescliente.
     */
    data: XOR<avaliacoesclienteUpdateInput, avaliacoesclienteUncheckedUpdateInput>
    /**
     * Choose, which avaliacoescliente to update.
     */
    where: avaliacoesclienteWhereUniqueInput
  }

  /**
   * avaliacoescliente updateMany
   */
  export type avaliacoesclienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update avaliacoesclientes.
     */
    data: XOR<avaliacoesclienteUpdateManyMutationInput, avaliacoesclienteUncheckedUpdateManyInput>
    /**
     * Filter which avaliacoesclientes to update
     */
    where?: avaliacoesclienteWhereInput
    /**
     * Limit how many avaliacoesclientes to update.
     */
    limit?: number
  }

  /**
   * avaliacoescliente updateManyAndReturn
   */
  export type avaliacoesclienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
    /**
     * The data used to update avaliacoesclientes.
     */
    data: XOR<avaliacoesclienteUpdateManyMutationInput, avaliacoesclienteUncheckedUpdateManyInput>
    /**
     * Filter which avaliacoesclientes to update
     */
    where?: avaliacoesclienteWhereInput
    /**
     * Limit how many avaliacoesclientes to update.
     */
    limit?: number
  }

  /**
   * avaliacoescliente upsert
   */
  export type avaliacoesclienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
    /**
     * The filter to search for the avaliacoescliente to update in case it exists.
     */
    where: avaliacoesclienteWhereUniqueInput
    /**
     * In case the avaliacoescliente found by the `where` argument doesn't exist, create a new avaliacoescliente with this data.
     */
    create: XOR<avaliacoesclienteCreateInput, avaliacoesclienteUncheckedCreateInput>
    /**
     * In case the avaliacoescliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<avaliacoesclienteUpdateInput, avaliacoesclienteUncheckedUpdateInput>
  }

  /**
   * avaliacoescliente delete
   */
  export type avaliacoesclienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
    /**
     * Filter which avaliacoescliente to delete.
     */
    where: avaliacoesclienteWhereUniqueInput
  }

  /**
   * avaliacoescliente deleteMany
   */
  export type avaliacoesclienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacoesclientes to delete
     */
    where?: avaliacoesclienteWhereInput
    /**
     * Limit how many avaliacoesclientes to delete.
     */
    limit?: number
  }

  /**
   * avaliacoescliente without action
   */
  export type avaliacoesclienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoescliente
     */
    select?: avaliacoesclienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoescliente
     */
    omit?: avaliacoesclienteOmit<ExtArgs> | null
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


  export const ClientesScalarFieldEnum: {
    idcliente: 'idcliente',
    dtregistro: 'dtregistro',
    nmcliente: 'nmcliente',
    emailcliente: 'emailcliente',
    senhacliente: 'senhacliente'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const EnderecosclienteScalarFieldEnum: {
    idenderecocliente: 'idenderecocliente',
    idcliente: 'idcliente',
    cep: 'cep',
    bairro: 'bairro',
    logradouro: 'logradouro',
    numero: 'numero',
    complemento: 'complemento',
    cidadecliente: 'cidadecliente',
    ufcliente: 'ufcliente'
  };

  export type EnderecosclienteScalarFieldEnum = (typeof EnderecosclienteScalarFieldEnum)[keyof typeof EnderecosclienteScalarFieldEnum]


  export const PrestadoresScalarFieldEnum: {
    idprestador: 'idprestador',
    dtregistro: 'dtregistro',
    nmprestador: 'nmprestador',
    cpfprestador: 'cpfprestador',
    senhaprestador: 'senhaprestador',
    cidadeprestador: 'cidadeprestador',
    ufprestador: 'ufprestador',
    celularprestador: 'celularprestador',
    emailprestador: 'emailprestador',
    whatsapp: 'whatsapp'
  };

  export type PrestadoresScalarFieldEnum = (typeof PrestadoresScalarFieldEnum)[keyof typeof PrestadoresScalarFieldEnum]


  export const ServicosScalarFieldEnum: {
    idservico: 'idservico',
    nmservico: 'nmservico',
    tipocargahoraria: 'tipocargahoraria',
    observacao: 'observacao'
  };

  export type ServicosScalarFieldEnum = (typeof ServicosScalarFieldEnum)[keyof typeof ServicosScalarFieldEnum]


  export const ServicosprestadoresScalarFieldEnum: {
    idservicoprestador: 'idservicoprestador',
    idservico: 'idservico',
    idprestador: 'idprestador'
  };

  export type ServicosprestadoresScalarFieldEnum = (typeof ServicosprestadoresScalarFieldEnum)[keyof typeof ServicosprestadoresScalarFieldEnum]


  export const ServicosagendadosScalarFieldEnum: {
    idservicoagendado: 'idservicoagendado',
    idservico: 'idservico',
    idprestador: 'idprestador',
    idcliente: 'idcliente',
    dtregistro: 'dtregistro',
    dtprevisto: 'dtprevisto',
    horainicio: 'horainicio',
    horafim: 'horafim',
    situacao: 'situacao'
  };

  export type ServicosagendadosScalarFieldEnum = (typeof ServicosagendadosScalarFieldEnum)[keyof typeof ServicosagendadosScalarFieldEnum]


  export const AgendaprestadorScalarFieldEnum: {
    idagendaprestador: 'idagendaprestador',
    idprestador: 'idprestador',
    idservicoagendado: 'idservicoagendado',
    dtregistro: 'dtregistro',
    dtprevisto: 'dtprevisto',
    horainicio: 'horainicio',
    horafim: 'horafim'
  };

  export type AgendaprestadorScalarFieldEnum = (typeof AgendaprestadorScalarFieldEnum)[keyof typeof AgendaprestadorScalarFieldEnum]


  export const AvaliacoesclienteScalarFieldEnum: {
    idavaliacaocliente: 'idavaliacaocliente',
    idservicoagendado: 'idservicoagendado',
    dtregistro: 'dtregistro',
    nota: 'nota'
  };

  export type AvaliacoesclienteScalarFieldEnum = (typeof AvaliacoesclienteScalarFieldEnum)[keyof typeof AvaliacoesclienteScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type clientesWhereInput = {
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    idcliente?: BigIntFilter<"clientes"> | bigint | number
    dtregistro?: DateTimeFilter<"clientes"> | Date | string
    nmcliente?: StringFilter<"clientes"> | string
    emailcliente?: StringFilter<"clientes"> | string
    senhacliente?: StringFilter<"clientes"> | string
  }

  export type clientesOrderByWithRelationInput = {
    idcliente?: SortOrder
    dtregistro?: SortOrder
    nmcliente?: SortOrder
    emailcliente?: SortOrder
    senhacliente?: SortOrder
  }

  export type clientesWhereUniqueInput = Prisma.AtLeast<{
    idcliente?: bigint | number
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    dtregistro?: DateTimeFilter<"clientes"> | Date | string
    nmcliente?: StringFilter<"clientes"> | string
    emailcliente?: StringFilter<"clientes"> | string
    senhacliente?: StringFilter<"clientes"> | string
  }, "idcliente">

  export type clientesOrderByWithAggregationInput = {
    idcliente?: SortOrder
    dtregistro?: SortOrder
    nmcliente?: SortOrder
    emailcliente?: SortOrder
    senhacliente?: SortOrder
    _count?: clientesCountOrderByAggregateInput
    _avg?: clientesAvgOrderByAggregateInput
    _max?: clientesMaxOrderByAggregateInput
    _min?: clientesMinOrderByAggregateInput
    _sum?: clientesSumOrderByAggregateInput
  }

  export type clientesScalarWhereWithAggregatesInput = {
    AND?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    OR?: clientesScalarWhereWithAggregatesInput[]
    NOT?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    idcliente?: BigIntWithAggregatesFilter<"clientes"> | bigint | number
    dtregistro?: DateTimeWithAggregatesFilter<"clientes"> | Date | string
    nmcliente?: StringWithAggregatesFilter<"clientes"> | string
    emailcliente?: StringWithAggregatesFilter<"clientes"> | string
    senhacliente?: StringWithAggregatesFilter<"clientes"> | string
  }

  export type enderecosclienteWhereInput = {
    AND?: enderecosclienteWhereInput | enderecosclienteWhereInput[]
    OR?: enderecosclienteWhereInput[]
    NOT?: enderecosclienteWhereInput | enderecosclienteWhereInput[]
    idenderecocliente?: BigIntFilter<"enderecoscliente"> | bigint | number
    idcliente?: BigIntFilter<"enderecoscliente"> | bigint | number
    cep?: StringFilter<"enderecoscliente"> | string
    bairro?: StringFilter<"enderecoscliente"> | string
    logradouro?: StringFilter<"enderecoscliente"> | string
    numero?: StringNullableFilter<"enderecoscliente"> | string | null
    complemento?: StringNullableFilter<"enderecoscliente"> | string | null
    cidadecliente?: StringFilter<"enderecoscliente"> | string
    ufcliente?: StringFilter<"enderecoscliente"> | string
  }

  export type enderecosclienteOrderByWithRelationInput = {
    idenderecocliente?: SortOrder
    idcliente?: SortOrder
    cep?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    cidadecliente?: SortOrder
    ufcliente?: SortOrder
  }

  export type enderecosclienteWhereUniqueInput = Prisma.AtLeast<{
    idenderecocliente?: bigint | number
    AND?: enderecosclienteWhereInput | enderecosclienteWhereInput[]
    OR?: enderecosclienteWhereInput[]
    NOT?: enderecosclienteWhereInput | enderecosclienteWhereInput[]
    idcliente?: BigIntFilter<"enderecoscliente"> | bigint | number
    cep?: StringFilter<"enderecoscliente"> | string
    bairro?: StringFilter<"enderecoscliente"> | string
    logradouro?: StringFilter<"enderecoscliente"> | string
    numero?: StringNullableFilter<"enderecoscliente"> | string | null
    complemento?: StringNullableFilter<"enderecoscliente"> | string | null
    cidadecliente?: StringFilter<"enderecoscliente"> | string
    ufcliente?: StringFilter<"enderecoscliente"> | string
  }, "idenderecocliente">

  export type enderecosclienteOrderByWithAggregationInput = {
    idenderecocliente?: SortOrder
    idcliente?: SortOrder
    cep?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    cidadecliente?: SortOrder
    ufcliente?: SortOrder
    _count?: enderecosclienteCountOrderByAggregateInput
    _avg?: enderecosclienteAvgOrderByAggregateInput
    _max?: enderecosclienteMaxOrderByAggregateInput
    _min?: enderecosclienteMinOrderByAggregateInput
    _sum?: enderecosclienteSumOrderByAggregateInput
  }

  export type enderecosclienteScalarWhereWithAggregatesInput = {
    AND?: enderecosclienteScalarWhereWithAggregatesInput | enderecosclienteScalarWhereWithAggregatesInput[]
    OR?: enderecosclienteScalarWhereWithAggregatesInput[]
    NOT?: enderecosclienteScalarWhereWithAggregatesInput | enderecosclienteScalarWhereWithAggregatesInput[]
    idenderecocliente?: BigIntWithAggregatesFilter<"enderecoscliente"> | bigint | number
    idcliente?: BigIntWithAggregatesFilter<"enderecoscliente"> | bigint | number
    cep?: StringWithAggregatesFilter<"enderecoscliente"> | string
    bairro?: StringWithAggregatesFilter<"enderecoscliente"> | string
    logradouro?: StringWithAggregatesFilter<"enderecoscliente"> | string
    numero?: StringNullableWithAggregatesFilter<"enderecoscliente"> | string | null
    complemento?: StringNullableWithAggregatesFilter<"enderecoscliente"> | string | null
    cidadecliente?: StringWithAggregatesFilter<"enderecoscliente"> | string
    ufcliente?: StringWithAggregatesFilter<"enderecoscliente"> | string
  }

  export type prestadoresWhereInput = {
    AND?: prestadoresWhereInput | prestadoresWhereInput[]
    OR?: prestadoresWhereInput[]
    NOT?: prestadoresWhereInput | prestadoresWhereInput[]
    idprestador?: BigIntFilter<"prestadores"> | bigint | number
    dtregistro?: DateTimeFilter<"prestadores"> | Date | string
    nmprestador?: StringFilter<"prestadores"> | string
    cpfprestador?: StringFilter<"prestadores"> | string
    senhaprestador?: StringFilter<"prestadores"> | string
    cidadeprestador?: StringFilter<"prestadores"> | string
    ufprestador?: StringFilter<"prestadores"> | string
    celularprestador?: StringNullableFilter<"prestadores"> | string | null
    emailprestador?: StringNullableFilter<"prestadores"> | string | null
    whatsapp?: BoolFilter<"prestadores"> | boolean
  }

  export type prestadoresOrderByWithRelationInput = {
    idprestador?: SortOrder
    dtregistro?: SortOrder
    nmprestador?: SortOrder
    cpfprestador?: SortOrder
    senhaprestador?: SortOrder
    cidadeprestador?: SortOrder
    ufprestador?: SortOrder
    celularprestador?: SortOrderInput | SortOrder
    emailprestador?: SortOrderInput | SortOrder
    whatsapp?: SortOrder
  }

  export type prestadoresWhereUniqueInput = Prisma.AtLeast<{
    idprestador?: bigint | number
    AND?: prestadoresWhereInput | prestadoresWhereInput[]
    OR?: prestadoresWhereInput[]
    NOT?: prestadoresWhereInput | prestadoresWhereInput[]
    dtregistro?: DateTimeFilter<"prestadores"> | Date | string
    nmprestador?: StringFilter<"prestadores"> | string
    cpfprestador?: StringFilter<"prestadores"> | string
    senhaprestador?: StringFilter<"prestadores"> | string
    cidadeprestador?: StringFilter<"prestadores"> | string
    ufprestador?: StringFilter<"prestadores"> | string
    celularprestador?: StringNullableFilter<"prestadores"> | string | null
    emailprestador?: StringNullableFilter<"prestadores"> | string | null
    whatsapp?: BoolFilter<"prestadores"> | boolean
  }, "idprestador">

  export type prestadoresOrderByWithAggregationInput = {
    idprestador?: SortOrder
    dtregistro?: SortOrder
    nmprestador?: SortOrder
    cpfprestador?: SortOrder
    senhaprestador?: SortOrder
    cidadeprestador?: SortOrder
    ufprestador?: SortOrder
    celularprestador?: SortOrderInput | SortOrder
    emailprestador?: SortOrderInput | SortOrder
    whatsapp?: SortOrder
    _count?: prestadoresCountOrderByAggregateInput
    _avg?: prestadoresAvgOrderByAggregateInput
    _max?: prestadoresMaxOrderByAggregateInput
    _min?: prestadoresMinOrderByAggregateInput
    _sum?: prestadoresSumOrderByAggregateInput
  }

  export type prestadoresScalarWhereWithAggregatesInput = {
    AND?: prestadoresScalarWhereWithAggregatesInput | prestadoresScalarWhereWithAggregatesInput[]
    OR?: prestadoresScalarWhereWithAggregatesInput[]
    NOT?: prestadoresScalarWhereWithAggregatesInput | prestadoresScalarWhereWithAggregatesInput[]
    idprestador?: BigIntWithAggregatesFilter<"prestadores"> | bigint | number
    dtregistro?: DateTimeWithAggregatesFilter<"prestadores"> | Date | string
    nmprestador?: StringWithAggregatesFilter<"prestadores"> | string
    cpfprestador?: StringWithAggregatesFilter<"prestadores"> | string
    senhaprestador?: StringWithAggregatesFilter<"prestadores"> | string
    cidadeprestador?: StringWithAggregatesFilter<"prestadores"> | string
    ufprestador?: StringWithAggregatesFilter<"prestadores"> | string
    celularprestador?: StringNullableWithAggregatesFilter<"prestadores"> | string | null
    emailprestador?: StringNullableWithAggregatesFilter<"prestadores"> | string | null
    whatsapp?: BoolWithAggregatesFilter<"prestadores"> | boolean
  }

  export type servicosWhereInput = {
    AND?: servicosWhereInput | servicosWhereInput[]
    OR?: servicosWhereInput[]
    NOT?: servicosWhereInput | servicosWhereInput[]
    idservico?: BigIntFilter<"servicos"> | bigint | number
    nmservico?: StringFilter<"servicos"> | string
    tipocargahoraria?: IntFilter<"servicos"> | number
    observacao?: StringNullableFilter<"servicos"> | string | null
  }

  export type servicosOrderByWithRelationInput = {
    idservico?: SortOrder
    nmservico?: SortOrder
    tipocargahoraria?: SortOrder
    observacao?: SortOrderInput | SortOrder
  }

  export type servicosWhereUniqueInput = Prisma.AtLeast<{
    idservico?: bigint | number
    AND?: servicosWhereInput | servicosWhereInput[]
    OR?: servicosWhereInput[]
    NOT?: servicosWhereInput | servicosWhereInput[]
    nmservico?: StringFilter<"servicos"> | string
    tipocargahoraria?: IntFilter<"servicos"> | number
    observacao?: StringNullableFilter<"servicos"> | string | null
  }, "idservico">

  export type servicosOrderByWithAggregationInput = {
    idservico?: SortOrder
    nmservico?: SortOrder
    tipocargahoraria?: SortOrder
    observacao?: SortOrderInput | SortOrder
    _count?: servicosCountOrderByAggregateInput
    _avg?: servicosAvgOrderByAggregateInput
    _max?: servicosMaxOrderByAggregateInput
    _min?: servicosMinOrderByAggregateInput
    _sum?: servicosSumOrderByAggregateInput
  }

  export type servicosScalarWhereWithAggregatesInput = {
    AND?: servicosScalarWhereWithAggregatesInput | servicosScalarWhereWithAggregatesInput[]
    OR?: servicosScalarWhereWithAggregatesInput[]
    NOT?: servicosScalarWhereWithAggregatesInput | servicosScalarWhereWithAggregatesInput[]
    idservico?: BigIntWithAggregatesFilter<"servicos"> | bigint | number
    nmservico?: StringWithAggregatesFilter<"servicos"> | string
    tipocargahoraria?: IntWithAggregatesFilter<"servicos"> | number
    observacao?: StringNullableWithAggregatesFilter<"servicos"> | string | null
  }

  export type servicosprestadoresWhereInput = {
    AND?: servicosprestadoresWhereInput | servicosprestadoresWhereInput[]
    OR?: servicosprestadoresWhereInput[]
    NOT?: servicosprestadoresWhereInput | servicosprestadoresWhereInput[]
    idservicoprestador?: BigIntFilter<"servicosprestadores"> | bigint | number
    idservico?: BigIntFilter<"servicosprestadores"> | bigint | number
    idprestador?: BigIntFilter<"servicosprestadores"> | bigint | number
  }

  export type servicosprestadoresOrderByWithRelationInput = {
    idservicoprestador?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
  }

  export type servicosprestadoresWhereUniqueInput = Prisma.AtLeast<{
    idservicoprestador?: bigint | number
    AND?: servicosprestadoresWhereInput | servicosprestadoresWhereInput[]
    OR?: servicosprestadoresWhereInput[]
    NOT?: servicosprestadoresWhereInput | servicosprestadoresWhereInput[]
    idservico?: BigIntFilter<"servicosprestadores"> | bigint | number
    idprestador?: BigIntFilter<"servicosprestadores"> | bigint | number
  }, "idservicoprestador">

  export type servicosprestadoresOrderByWithAggregationInput = {
    idservicoprestador?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
    _count?: servicosprestadoresCountOrderByAggregateInput
    _avg?: servicosprestadoresAvgOrderByAggregateInput
    _max?: servicosprestadoresMaxOrderByAggregateInput
    _min?: servicosprestadoresMinOrderByAggregateInput
    _sum?: servicosprestadoresSumOrderByAggregateInput
  }

  export type servicosprestadoresScalarWhereWithAggregatesInput = {
    AND?: servicosprestadoresScalarWhereWithAggregatesInput | servicosprestadoresScalarWhereWithAggregatesInput[]
    OR?: servicosprestadoresScalarWhereWithAggregatesInput[]
    NOT?: servicosprestadoresScalarWhereWithAggregatesInput | servicosprestadoresScalarWhereWithAggregatesInput[]
    idservicoprestador?: BigIntWithAggregatesFilter<"servicosprestadores"> | bigint | number
    idservico?: BigIntWithAggregatesFilter<"servicosprestadores"> | bigint | number
    idprestador?: BigIntWithAggregatesFilter<"servicosprestadores"> | bigint | number
  }

  export type servicosagendadosWhereInput = {
    AND?: servicosagendadosWhereInput | servicosagendadosWhereInput[]
    OR?: servicosagendadosWhereInput[]
    NOT?: servicosagendadosWhereInput | servicosagendadosWhereInput[]
    idservicoagendado?: BigIntFilter<"servicosagendados"> | bigint | number
    idservico?: BigIntFilter<"servicosagendados"> | bigint | number
    idprestador?: BigIntFilter<"servicosagendados"> | bigint | number
    idcliente?: BigIntFilter<"servicosagendados"> | bigint | number
    dtregistro?: DateTimeFilter<"servicosagendados"> | Date | string
    dtprevisto?: DateTimeFilter<"servicosagendados"> | Date | string
    horainicio?: StringFilter<"servicosagendados"> | string
    horafim?: StringNullableFilter<"servicosagendados"> | string | null
    situacao?: IntFilter<"servicosagendados"> | number
  }

  export type servicosagendadosOrderByWithRelationInput = {
    idservicoagendado?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
    idcliente?: SortOrder
    dtregistro?: SortOrder
    dtprevisto?: SortOrder
    horainicio?: SortOrder
    horafim?: SortOrderInput | SortOrder
    situacao?: SortOrder
  }

  export type servicosagendadosWhereUniqueInput = Prisma.AtLeast<{
    idservicoagendado?: bigint | number
    AND?: servicosagendadosWhereInput | servicosagendadosWhereInput[]
    OR?: servicosagendadosWhereInput[]
    NOT?: servicosagendadosWhereInput | servicosagendadosWhereInput[]
    idservico?: BigIntFilter<"servicosagendados"> | bigint | number
    idprestador?: BigIntFilter<"servicosagendados"> | bigint | number
    idcliente?: BigIntFilter<"servicosagendados"> | bigint | number
    dtregistro?: DateTimeFilter<"servicosagendados"> | Date | string
    dtprevisto?: DateTimeFilter<"servicosagendados"> | Date | string
    horainicio?: StringFilter<"servicosagendados"> | string
    horafim?: StringNullableFilter<"servicosagendados"> | string | null
    situacao?: IntFilter<"servicosagendados"> | number
  }, "idservicoagendado">

  export type servicosagendadosOrderByWithAggregationInput = {
    idservicoagendado?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
    idcliente?: SortOrder
    dtregistro?: SortOrder
    dtprevisto?: SortOrder
    horainicio?: SortOrder
    horafim?: SortOrderInput | SortOrder
    situacao?: SortOrder
    _count?: servicosagendadosCountOrderByAggregateInput
    _avg?: servicosagendadosAvgOrderByAggregateInput
    _max?: servicosagendadosMaxOrderByAggregateInput
    _min?: servicosagendadosMinOrderByAggregateInput
    _sum?: servicosagendadosSumOrderByAggregateInput
  }

  export type servicosagendadosScalarWhereWithAggregatesInput = {
    AND?: servicosagendadosScalarWhereWithAggregatesInput | servicosagendadosScalarWhereWithAggregatesInput[]
    OR?: servicosagendadosScalarWhereWithAggregatesInput[]
    NOT?: servicosagendadosScalarWhereWithAggregatesInput | servicosagendadosScalarWhereWithAggregatesInput[]
    idservicoagendado?: BigIntWithAggregatesFilter<"servicosagendados"> | bigint | number
    idservico?: BigIntWithAggregatesFilter<"servicosagendados"> | bigint | number
    idprestador?: BigIntWithAggregatesFilter<"servicosagendados"> | bigint | number
    idcliente?: BigIntWithAggregatesFilter<"servicosagendados"> | bigint | number
    dtregistro?: DateTimeWithAggregatesFilter<"servicosagendados"> | Date | string
    dtprevisto?: DateTimeWithAggregatesFilter<"servicosagendados"> | Date | string
    horainicio?: StringWithAggregatesFilter<"servicosagendados"> | string
    horafim?: StringNullableWithAggregatesFilter<"servicosagendados"> | string | null
    situacao?: IntWithAggregatesFilter<"servicosagendados"> | number
  }

  export type agendaprestadorWhereInput = {
    AND?: agendaprestadorWhereInput | agendaprestadorWhereInput[]
    OR?: agendaprestadorWhereInput[]
    NOT?: agendaprestadorWhereInput | agendaprestadorWhereInput[]
    idagendaprestador?: BigIntFilter<"agendaprestador"> | bigint | number
    idprestador?: BigIntFilter<"agendaprestador"> | bigint | number
    idservicoagendado?: BigIntNullableFilter<"agendaprestador"> | bigint | number | null
    dtregistro?: DateTimeFilter<"agendaprestador"> | Date | string
    dtprevisto?: DateTimeFilter<"agendaprestador"> | Date | string
    horainicio?: StringFilter<"agendaprestador"> | string
    horafim?: StringNullableFilter<"agendaprestador"> | string | null
  }

  export type agendaprestadorOrderByWithRelationInput = {
    idagendaprestador?: SortOrder
    idprestador?: SortOrder
    idservicoagendado?: SortOrderInput | SortOrder
    dtregistro?: SortOrder
    dtprevisto?: SortOrder
    horainicio?: SortOrder
    horafim?: SortOrderInput | SortOrder
  }

  export type agendaprestadorWhereUniqueInput = Prisma.AtLeast<{
    idagendaprestador?: bigint | number
    AND?: agendaprestadorWhereInput | agendaprestadorWhereInput[]
    OR?: agendaprestadorWhereInput[]
    NOT?: agendaprestadorWhereInput | agendaprestadorWhereInput[]
    idprestador?: BigIntFilter<"agendaprestador"> | bigint | number
    idservicoagendado?: BigIntNullableFilter<"agendaprestador"> | bigint | number | null
    dtregistro?: DateTimeFilter<"agendaprestador"> | Date | string
    dtprevisto?: DateTimeFilter<"agendaprestador"> | Date | string
    horainicio?: StringFilter<"agendaprestador"> | string
    horafim?: StringNullableFilter<"agendaprestador"> | string | null
  }, "idagendaprestador">

  export type agendaprestadorOrderByWithAggregationInput = {
    idagendaprestador?: SortOrder
    idprestador?: SortOrder
    idservicoagendado?: SortOrderInput | SortOrder
    dtregistro?: SortOrder
    dtprevisto?: SortOrder
    horainicio?: SortOrder
    horafim?: SortOrderInput | SortOrder
    _count?: agendaprestadorCountOrderByAggregateInput
    _avg?: agendaprestadorAvgOrderByAggregateInput
    _max?: agendaprestadorMaxOrderByAggregateInput
    _min?: agendaprestadorMinOrderByAggregateInput
    _sum?: agendaprestadorSumOrderByAggregateInput
  }

  export type agendaprestadorScalarWhereWithAggregatesInput = {
    AND?: agendaprestadorScalarWhereWithAggregatesInput | agendaprestadorScalarWhereWithAggregatesInput[]
    OR?: agendaprestadorScalarWhereWithAggregatesInput[]
    NOT?: agendaprestadorScalarWhereWithAggregatesInput | agendaprestadorScalarWhereWithAggregatesInput[]
    idagendaprestador?: BigIntWithAggregatesFilter<"agendaprestador"> | bigint | number
    idprestador?: BigIntWithAggregatesFilter<"agendaprestador"> | bigint | number
    idservicoagendado?: BigIntNullableWithAggregatesFilter<"agendaprestador"> | bigint | number | null
    dtregistro?: DateTimeWithAggregatesFilter<"agendaprestador"> | Date | string
    dtprevisto?: DateTimeWithAggregatesFilter<"agendaprestador"> | Date | string
    horainicio?: StringWithAggregatesFilter<"agendaprestador"> | string
    horafim?: StringNullableWithAggregatesFilter<"agendaprestador"> | string | null
  }

  export type avaliacoesclienteWhereInput = {
    AND?: avaliacoesclienteWhereInput | avaliacoesclienteWhereInput[]
    OR?: avaliacoesclienteWhereInput[]
    NOT?: avaliacoesclienteWhereInput | avaliacoesclienteWhereInput[]
    idavaliacaocliente?: BigIntFilter<"avaliacoescliente"> | bigint | number
    idservicoagendado?: BigIntFilter<"avaliacoescliente"> | bigint | number
    dtregistro?: DateTimeFilter<"avaliacoescliente"> | Date | string
    nota?: IntFilter<"avaliacoescliente"> | number
  }

  export type avaliacoesclienteOrderByWithRelationInput = {
    idavaliacaocliente?: SortOrder
    idservicoagendado?: SortOrder
    dtregistro?: SortOrder
    nota?: SortOrder
  }

  export type avaliacoesclienteWhereUniqueInput = Prisma.AtLeast<{
    idavaliacaocliente?: bigint | number
    AND?: avaliacoesclienteWhereInput | avaliacoesclienteWhereInput[]
    OR?: avaliacoesclienteWhereInput[]
    NOT?: avaliacoesclienteWhereInput | avaliacoesclienteWhereInput[]
    idservicoagendado?: BigIntFilter<"avaliacoescliente"> | bigint | number
    dtregistro?: DateTimeFilter<"avaliacoescliente"> | Date | string
    nota?: IntFilter<"avaliacoescliente"> | number
  }, "idavaliacaocliente">

  export type avaliacoesclienteOrderByWithAggregationInput = {
    idavaliacaocliente?: SortOrder
    idservicoagendado?: SortOrder
    dtregistro?: SortOrder
    nota?: SortOrder
    _count?: avaliacoesclienteCountOrderByAggregateInput
    _avg?: avaliacoesclienteAvgOrderByAggregateInput
    _max?: avaliacoesclienteMaxOrderByAggregateInput
    _min?: avaliacoesclienteMinOrderByAggregateInput
    _sum?: avaliacoesclienteSumOrderByAggregateInput
  }

  export type avaliacoesclienteScalarWhereWithAggregatesInput = {
    AND?: avaliacoesclienteScalarWhereWithAggregatesInput | avaliacoesclienteScalarWhereWithAggregatesInput[]
    OR?: avaliacoesclienteScalarWhereWithAggregatesInput[]
    NOT?: avaliacoesclienteScalarWhereWithAggregatesInput | avaliacoesclienteScalarWhereWithAggregatesInput[]
    idavaliacaocliente?: BigIntWithAggregatesFilter<"avaliacoescliente"> | bigint | number
    idservicoagendado?: BigIntWithAggregatesFilter<"avaliacoescliente"> | bigint | number
    dtregistro?: DateTimeWithAggregatesFilter<"avaliacoescliente"> | Date | string
    nota?: IntWithAggregatesFilter<"avaliacoescliente"> | number
  }

  export type clientesCreateInput = {
    idcliente?: bigint | number
    dtregistro?: Date | string
    nmcliente: string
    emailcliente: string
    senhacliente: string
  }

  export type clientesUncheckedCreateInput = {
    idcliente?: bigint | number
    dtregistro?: Date | string
    nmcliente: string
    emailcliente: string
    senhacliente: string
  }

  export type clientesUpdateInput = {
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nmcliente?: StringFieldUpdateOperationsInput | string
    emailcliente?: StringFieldUpdateOperationsInput | string
    senhacliente?: StringFieldUpdateOperationsInput | string
  }

  export type clientesUncheckedUpdateInput = {
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nmcliente?: StringFieldUpdateOperationsInput | string
    emailcliente?: StringFieldUpdateOperationsInput | string
    senhacliente?: StringFieldUpdateOperationsInput | string
  }

  export type clientesCreateManyInput = {
    idcliente?: bigint | number
    dtregistro?: Date | string
    nmcliente: string
    emailcliente: string
    senhacliente: string
  }

  export type clientesUpdateManyMutationInput = {
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nmcliente?: StringFieldUpdateOperationsInput | string
    emailcliente?: StringFieldUpdateOperationsInput | string
    senhacliente?: StringFieldUpdateOperationsInput | string
  }

  export type clientesUncheckedUpdateManyInput = {
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nmcliente?: StringFieldUpdateOperationsInput | string
    emailcliente?: StringFieldUpdateOperationsInput | string
    senhacliente?: StringFieldUpdateOperationsInput | string
  }

  export type enderecosclienteCreateInput = {
    idenderecocliente?: bigint | number
    idcliente: bigint | number
    cep: string
    bairro: string
    logradouro: string
    numero?: string | null
    complemento?: string | null
    cidadecliente: string
    ufcliente: string
  }

  export type enderecosclienteUncheckedCreateInput = {
    idenderecocliente?: bigint | number
    idcliente: bigint | number
    cep: string
    bairro: string
    logradouro: string
    numero?: string | null
    complemento?: string | null
    cidadecliente: string
    ufcliente: string
  }

  export type enderecosclienteUpdateInput = {
    idenderecocliente?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    cep?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    cidadecliente?: StringFieldUpdateOperationsInput | string
    ufcliente?: StringFieldUpdateOperationsInput | string
  }

  export type enderecosclienteUncheckedUpdateInput = {
    idenderecocliente?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    cep?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    cidadecliente?: StringFieldUpdateOperationsInput | string
    ufcliente?: StringFieldUpdateOperationsInput | string
  }

  export type enderecosclienteCreateManyInput = {
    idenderecocliente?: bigint | number
    idcliente: bigint | number
    cep: string
    bairro: string
    logradouro: string
    numero?: string | null
    complemento?: string | null
    cidadecliente: string
    ufcliente: string
  }

  export type enderecosclienteUpdateManyMutationInput = {
    idenderecocliente?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    cep?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    cidadecliente?: StringFieldUpdateOperationsInput | string
    ufcliente?: StringFieldUpdateOperationsInput | string
  }

  export type enderecosclienteUncheckedUpdateManyInput = {
    idenderecocliente?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    cep?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    cidadecliente?: StringFieldUpdateOperationsInput | string
    ufcliente?: StringFieldUpdateOperationsInput | string
  }

  export type prestadoresCreateInput = {
    idprestador?: bigint | number
    dtregistro?: Date | string
    nmprestador: string
    cpfprestador: string
    senhaprestador: string
    cidadeprestador: string
    ufprestador: string
    celularprestador?: string | null
    emailprestador?: string | null
    whatsapp?: boolean
  }

  export type prestadoresUncheckedCreateInput = {
    idprestador?: bigint | number
    dtregistro?: Date | string
    nmprestador: string
    cpfprestador: string
    senhaprestador: string
    cidadeprestador: string
    ufprestador: string
    celularprestador?: string | null
    emailprestador?: string | null
    whatsapp?: boolean
  }

  export type prestadoresUpdateInput = {
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nmprestador?: StringFieldUpdateOperationsInput | string
    cpfprestador?: StringFieldUpdateOperationsInput | string
    senhaprestador?: StringFieldUpdateOperationsInput | string
    cidadeprestador?: StringFieldUpdateOperationsInput | string
    ufprestador?: StringFieldUpdateOperationsInput | string
    celularprestador?: NullableStringFieldUpdateOperationsInput | string | null
    emailprestador?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type prestadoresUncheckedUpdateInput = {
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nmprestador?: StringFieldUpdateOperationsInput | string
    cpfprestador?: StringFieldUpdateOperationsInput | string
    senhaprestador?: StringFieldUpdateOperationsInput | string
    cidadeprestador?: StringFieldUpdateOperationsInput | string
    ufprestador?: StringFieldUpdateOperationsInput | string
    celularprestador?: NullableStringFieldUpdateOperationsInput | string | null
    emailprestador?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type prestadoresCreateManyInput = {
    idprestador?: bigint | number
    dtregistro?: Date | string
    nmprestador: string
    cpfprestador: string
    senhaprestador: string
    cidadeprestador: string
    ufprestador: string
    celularprestador?: string | null
    emailprestador?: string | null
    whatsapp?: boolean
  }

  export type prestadoresUpdateManyMutationInput = {
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nmprestador?: StringFieldUpdateOperationsInput | string
    cpfprestador?: StringFieldUpdateOperationsInput | string
    senhaprestador?: StringFieldUpdateOperationsInput | string
    cidadeprestador?: StringFieldUpdateOperationsInput | string
    ufprestador?: StringFieldUpdateOperationsInput | string
    celularprestador?: NullableStringFieldUpdateOperationsInput | string | null
    emailprestador?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type prestadoresUncheckedUpdateManyInput = {
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nmprestador?: StringFieldUpdateOperationsInput | string
    cpfprestador?: StringFieldUpdateOperationsInput | string
    senhaprestador?: StringFieldUpdateOperationsInput | string
    cidadeprestador?: StringFieldUpdateOperationsInput | string
    ufprestador?: StringFieldUpdateOperationsInput | string
    celularprestador?: NullableStringFieldUpdateOperationsInput | string | null
    emailprestador?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type servicosCreateInput = {
    idservico?: bigint | number
    nmservico: string
    tipocargahoraria?: number
    observacao?: string | null
  }

  export type servicosUncheckedCreateInput = {
    idservico?: bigint | number
    nmservico: string
    tipocargahoraria?: number
    observacao?: string | null
  }

  export type servicosUpdateInput = {
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    nmservico?: StringFieldUpdateOperationsInput | string
    tipocargahoraria?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicosUncheckedUpdateInput = {
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    nmservico?: StringFieldUpdateOperationsInput | string
    tipocargahoraria?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicosCreateManyInput = {
    idservico?: bigint | number
    nmservico: string
    tipocargahoraria?: number
    observacao?: string | null
  }

  export type servicosUpdateManyMutationInput = {
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    nmservico?: StringFieldUpdateOperationsInput | string
    tipocargahoraria?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicosUncheckedUpdateManyInput = {
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    nmservico?: StringFieldUpdateOperationsInput | string
    tipocargahoraria?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicosprestadoresCreateInput = {
    idservicoprestador?: bigint | number
    idservico: bigint | number
    idprestador: bigint | number
  }

  export type servicosprestadoresUncheckedCreateInput = {
    idservicoprestador?: bigint | number
    idservico: bigint | number
    idprestador: bigint | number
  }

  export type servicosprestadoresUpdateInput = {
    idservicoprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type servicosprestadoresUncheckedUpdateInput = {
    idservicoprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type servicosprestadoresCreateManyInput = {
    idservicoprestador?: bigint | number
    idservico: bigint | number
    idprestador: bigint | number
  }

  export type servicosprestadoresUpdateManyMutationInput = {
    idservicoprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type servicosprestadoresUncheckedUpdateManyInput = {
    idservicoprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type servicosagendadosCreateInput = {
    idservicoagendado?: bigint | number
    idservico: bigint | number
    idprestador: bigint | number
    idcliente: bigint | number
    dtregistro?: Date | string
    dtprevisto: Date | string
    horainicio: string
    horafim?: string | null
    situacao: number
  }

  export type servicosagendadosUncheckedCreateInput = {
    idservicoagendado?: bigint | number
    idservico: bigint | number
    idprestador: bigint | number
    idcliente: bigint | number
    dtregistro?: Date | string
    dtprevisto: Date | string
    horainicio: string
    horafim?: string | null
    situacao: number
  }

  export type servicosagendadosUpdateInput = {
    idservicoagendado?: BigIntFieldUpdateOperationsInput | bigint | number
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dtprevisto?: DateTimeFieldUpdateOperationsInput | Date | string
    horainicio?: StringFieldUpdateOperationsInput | string
    horafim?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: IntFieldUpdateOperationsInput | number
  }

  export type servicosagendadosUncheckedUpdateInput = {
    idservicoagendado?: BigIntFieldUpdateOperationsInput | bigint | number
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dtprevisto?: DateTimeFieldUpdateOperationsInput | Date | string
    horainicio?: StringFieldUpdateOperationsInput | string
    horafim?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: IntFieldUpdateOperationsInput | number
  }

  export type servicosagendadosCreateManyInput = {
    idservicoagendado?: bigint | number
    idservico: bigint | number
    idprestador: bigint | number
    idcliente: bigint | number
    dtregistro?: Date | string
    dtprevisto: Date | string
    horainicio: string
    horafim?: string | null
    situacao: number
  }

  export type servicosagendadosUpdateManyMutationInput = {
    idservicoagendado?: BigIntFieldUpdateOperationsInput | bigint | number
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dtprevisto?: DateTimeFieldUpdateOperationsInput | Date | string
    horainicio?: StringFieldUpdateOperationsInput | string
    horafim?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: IntFieldUpdateOperationsInput | number
  }

  export type servicosagendadosUncheckedUpdateManyInput = {
    idservicoagendado?: BigIntFieldUpdateOperationsInput | bigint | number
    idservico?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dtprevisto?: DateTimeFieldUpdateOperationsInput | Date | string
    horainicio?: StringFieldUpdateOperationsInput | string
    horafim?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: IntFieldUpdateOperationsInput | number
  }

  export type agendaprestadorCreateInput = {
    idagendaprestador?: bigint | number
    idprestador: bigint | number
    idservicoagendado?: bigint | number | null
    dtregistro?: Date | string
    dtprevisto: Date | string
    horainicio: string
    horafim?: string | null
  }

  export type agendaprestadorUncheckedCreateInput = {
    idagendaprestador?: bigint | number
    idprestador: bigint | number
    idservicoagendado?: bigint | number | null
    dtregistro?: Date | string
    dtprevisto: Date | string
    horainicio: string
    horafim?: string | null
  }

  export type agendaprestadorUpdateInput = {
    idagendaprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idservicoagendado?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dtprevisto?: DateTimeFieldUpdateOperationsInput | Date | string
    horainicio?: StringFieldUpdateOperationsInput | string
    horafim?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agendaprestadorUncheckedUpdateInput = {
    idagendaprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idservicoagendado?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dtprevisto?: DateTimeFieldUpdateOperationsInput | Date | string
    horainicio?: StringFieldUpdateOperationsInput | string
    horafim?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agendaprestadorCreateManyInput = {
    idagendaprestador?: bigint | number
    idprestador: bigint | number
    idservicoagendado?: bigint | number | null
    dtregistro?: Date | string
    dtprevisto: Date | string
    horainicio: string
    horafim?: string | null
  }

  export type agendaprestadorUpdateManyMutationInput = {
    idagendaprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idservicoagendado?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dtprevisto?: DateTimeFieldUpdateOperationsInput | Date | string
    horainicio?: StringFieldUpdateOperationsInput | string
    horafim?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agendaprestadorUncheckedUpdateManyInput = {
    idagendaprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idprestador?: BigIntFieldUpdateOperationsInput | bigint | number
    idservicoagendado?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dtprevisto?: DateTimeFieldUpdateOperationsInput | Date | string
    horainicio?: StringFieldUpdateOperationsInput | string
    horafim?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type avaliacoesclienteCreateInput = {
    idavaliacaocliente?: bigint | number
    idservicoagendado: bigint | number
    dtregistro?: Date | string
    nota: number
  }

  export type avaliacoesclienteUncheckedCreateInput = {
    idavaliacaocliente?: bigint | number
    idservicoagendado: bigint | number
    dtregistro?: Date | string
    nota: number
  }

  export type avaliacoesclienteUpdateInput = {
    idavaliacaocliente?: BigIntFieldUpdateOperationsInput | bigint | number
    idservicoagendado?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacoesclienteUncheckedUpdateInput = {
    idavaliacaocliente?: BigIntFieldUpdateOperationsInput | bigint | number
    idservicoagendado?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacoesclienteCreateManyInput = {
    idavaliacaocliente?: bigint | number
    idservicoagendado: bigint | number
    dtregistro?: Date | string
    nota: number
  }

  export type avaliacoesclienteUpdateManyMutationInput = {
    idavaliacaocliente?: BigIntFieldUpdateOperationsInput | bigint | number
    idservicoagendado?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacoesclienteUncheckedUpdateManyInput = {
    idavaliacaocliente?: BigIntFieldUpdateOperationsInput | bigint | number
    idservicoagendado?: BigIntFieldUpdateOperationsInput | bigint | number
    dtregistro?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type clientesCountOrderByAggregateInput = {
    idcliente?: SortOrder
    dtregistro?: SortOrder
    nmcliente?: SortOrder
    emailcliente?: SortOrder
    senhacliente?: SortOrder
  }

  export type clientesAvgOrderByAggregateInput = {
    idcliente?: SortOrder
  }

  export type clientesMaxOrderByAggregateInput = {
    idcliente?: SortOrder
    dtregistro?: SortOrder
    nmcliente?: SortOrder
    emailcliente?: SortOrder
    senhacliente?: SortOrder
  }

  export type clientesMinOrderByAggregateInput = {
    idcliente?: SortOrder
    dtregistro?: SortOrder
    nmcliente?: SortOrder
    emailcliente?: SortOrder
    senhacliente?: SortOrder
  }

  export type clientesSumOrderByAggregateInput = {
    idcliente?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type enderecosclienteCountOrderByAggregateInput = {
    idenderecocliente?: SortOrder
    idcliente?: SortOrder
    cep?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    cidadecliente?: SortOrder
    ufcliente?: SortOrder
  }

  export type enderecosclienteAvgOrderByAggregateInput = {
    idenderecocliente?: SortOrder
    idcliente?: SortOrder
  }

  export type enderecosclienteMaxOrderByAggregateInput = {
    idenderecocliente?: SortOrder
    idcliente?: SortOrder
    cep?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    cidadecliente?: SortOrder
    ufcliente?: SortOrder
  }

  export type enderecosclienteMinOrderByAggregateInput = {
    idenderecocliente?: SortOrder
    idcliente?: SortOrder
    cep?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    cidadecliente?: SortOrder
    ufcliente?: SortOrder
  }

  export type enderecosclienteSumOrderByAggregateInput = {
    idenderecocliente?: SortOrder
    idcliente?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type prestadoresCountOrderByAggregateInput = {
    idprestador?: SortOrder
    dtregistro?: SortOrder
    nmprestador?: SortOrder
    cpfprestador?: SortOrder
    senhaprestador?: SortOrder
    cidadeprestador?: SortOrder
    ufprestador?: SortOrder
    celularprestador?: SortOrder
    emailprestador?: SortOrder
    whatsapp?: SortOrder
  }

  export type prestadoresAvgOrderByAggregateInput = {
    idprestador?: SortOrder
  }

  export type prestadoresMaxOrderByAggregateInput = {
    idprestador?: SortOrder
    dtregistro?: SortOrder
    nmprestador?: SortOrder
    cpfprestador?: SortOrder
    senhaprestador?: SortOrder
    cidadeprestador?: SortOrder
    ufprestador?: SortOrder
    celularprestador?: SortOrder
    emailprestador?: SortOrder
    whatsapp?: SortOrder
  }

  export type prestadoresMinOrderByAggregateInput = {
    idprestador?: SortOrder
    dtregistro?: SortOrder
    nmprestador?: SortOrder
    cpfprestador?: SortOrder
    senhaprestador?: SortOrder
    cidadeprestador?: SortOrder
    ufprestador?: SortOrder
    celularprestador?: SortOrder
    emailprestador?: SortOrder
    whatsapp?: SortOrder
  }

  export type prestadoresSumOrderByAggregateInput = {
    idprestador?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type servicosCountOrderByAggregateInput = {
    idservico?: SortOrder
    nmservico?: SortOrder
    tipocargahoraria?: SortOrder
    observacao?: SortOrder
  }

  export type servicosAvgOrderByAggregateInput = {
    idservico?: SortOrder
    tipocargahoraria?: SortOrder
  }

  export type servicosMaxOrderByAggregateInput = {
    idservico?: SortOrder
    nmservico?: SortOrder
    tipocargahoraria?: SortOrder
    observacao?: SortOrder
  }

  export type servicosMinOrderByAggregateInput = {
    idservico?: SortOrder
    nmservico?: SortOrder
    tipocargahoraria?: SortOrder
    observacao?: SortOrder
  }

  export type servicosSumOrderByAggregateInput = {
    idservico?: SortOrder
    tipocargahoraria?: SortOrder
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

  export type servicosprestadoresCountOrderByAggregateInput = {
    idservicoprestador?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
  }

  export type servicosprestadoresAvgOrderByAggregateInput = {
    idservicoprestador?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
  }

  export type servicosprestadoresMaxOrderByAggregateInput = {
    idservicoprestador?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
  }

  export type servicosprestadoresMinOrderByAggregateInput = {
    idservicoprestador?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
  }

  export type servicosprestadoresSumOrderByAggregateInput = {
    idservicoprestador?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
  }

  export type servicosagendadosCountOrderByAggregateInput = {
    idservicoagendado?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
    idcliente?: SortOrder
    dtregistro?: SortOrder
    dtprevisto?: SortOrder
    horainicio?: SortOrder
    horafim?: SortOrder
    situacao?: SortOrder
  }

  export type servicosagendadosAvgOrderByAggregateInput = {
    idservicoagendado?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
    idcliente?: SortOrder
    situacao?: SortOrder
  }

  export type servicosagendadosMaxOrderByAggregateInput = {
    idservicoagendado?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
    idcliente?: SortOrder
    dtregistro?: SortOrder
    dtprevisto?: SortOrder
    horainicio?: SortOrder
    horafim?: SortOrder
    situacao?: SortOrder
  }

  export type servicosagendadosMinOrderByAggregateInput = {
    idservicoagendado?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
    idcliente?: SortOrder
    dtregistro?: SortOrder
    dtprevisto?: SortOrder
    horainicio?: SortOrder
    horafim?: SortOrder
    situacao?: SortOrder
  }

  export type servicosagendadosSumOrderByAggregateInput = {
    idservicoagendado?: SortOrder
    idservico?: SortOrder
    idprestador?: SortOrder
    idcliente?: SortOrder
    situacao?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type agendaprestadorCountOrderByAggregateInput = {
    idagendaprestador?: SortOrder
    idprestador?: SortOrder
    idservicoagendado?: SortOrder
    dtregistro?: SortOrder
    dtprevisto?: SortOrder
    horainicio?: SortOrder
    horafim?: SortOrder
  }

  export type agendaprestadorAvgOrderByAggregateInput = {
    idagendaprestador?: SortOrder
    idprestador?: SortOrder
    idservicoagendado?: SortOrder
  }

  export type agendaprestadorMaxOrderByAggregateInput = {
    idagendaprestador?: SortOrder
    idprestador?: SortOrder
    idservicoagendado?: SortOrder
    dtregistro?: SortOrder
    dtprevisto?: SortOrder
    horainicio?: SortOrder
    horafim?: SortOrder
  }

  export type agendaprestadorMinOrderByAggregateInput = {
    idagendaprestador?: SortOrder
    idprestador?: SortOrder
    idservicoagendado?: SortOrder
    dtregistro?: SortOrder
    dtprevisto?: SortOrder
    horainicio?: SortOrder
    horafim?: SortOrder
  }

  export type agendaprestadorSumOrderByAggregateInput = {
    idagendaprestador?: SortOrder
    idprestador?: SortOrder
    idservicoagendado?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type avaliacoesclienteCountOrderByAggregateInput = {
    idavaliacaocliente?: SortOrder
    idservicoagendado?: SortOrder
    dtregistro?: SortOrder
    nota?: SortOrder
  }

  export type avaliacoesclienteAvgOrderByAggregateInput = {
    idavaliacaocliente?: SortOrder
    idservicoagendado?: SortOrder
    nota?: SortOrder
  }

  export type avaliacoesclienteMaxOrderByAggregateInput = {
    idavaliacaocliente?: SortOrder
    idservicoagendado?: SortOrder
    dtregistro?: SortOrder
    nota?: SortOrder
  }

  export type avaliacoesclienteMinOrderByAggregateInput = {
    idavaliacaocliente?: SortOrder
    idservicoagendado?: SortOrder
    dtregistro?: SortOrder
    nota?: SortOrder
  }

  export type avaliacoesclienteSumOrderByAggregateInput = {
    idavaliacaocliente?: SortOrder
    idservicoagendado?: SortOrder
    nota?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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