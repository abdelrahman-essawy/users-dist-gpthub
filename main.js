/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("cors");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const graphql_1 = __webpack_require__(6);
const apollo_1 = __webpack_require__(7);
const graphql_type_json_1 = __webpack_require__(8);
const users_module_1 = __webpack_require__(9);
const auth_module_1 = __webpack_require__(43);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloFederationDriver,
                context: ({ req }) => ({ req }),
                resolvers: { JSON: graphql_type_json_1.GraphQLJSONObject },
                autoSchemaFile: {
                    federation: 2,
                },
                buildSchemaOptions: {},
            }),
        ],
    })
], AppModule);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("graphql-type-json");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const nestjs_query_graphql_1 = __webpack_require__(10);
const nestjs_query_typeorm_1 = __webpack_require__(11);
const user_1 = __webpack_require__(12);
const hashing_1 = __webpack_require__(33);
const user_entity_1 = __webpack_require__(39);
const users_service_1 = __webpack_require__(41);
const auth_module_1 = __webpack_require__(43);
const auth_resolver_1 = __webpack_require__(60);
const database_module_1 = __webpack_require__(70);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [nestjs_query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([user_entity_1.UserEntity])],
                resolvers: [
                    {
                        DTOClass: user_1.UserDto,
                        EntityClass: user_entity_1.UserEntity,
                        pagingStrategy: nestjs_query_graphql_1.PagingStrategies.NONE,
                        create: { disabled: true },
                        update: { disabled: true },
                        referenceBy: { key: 'id' },
                    },
                ],
            }),
            hashing_1.HashingModule,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            database_module_1.UsersDatabaseModule,
        ],
        providers: [users_service_1.UsersService, auth_resolver_1.AuthResolver],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@ptc-org/nestjs-query-graphql");

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("@ptc-org/nestjs-query-typeorm");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = void 0;
const tslib_1 = __webpack_require__(1);
const _core_1 = __webpack_require__(14);
const graphql_1 = __webpack_require__(6);
const nestjs_query_graphql_1 = __webpack_require__(10);
let UserDto = class UserDto {
    constructor(user) {
        Object.assign(this, user);
    }
};
exports.UserDto = UserDto;
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.IDField)(() => graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(() => String),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", Boolean)
], UserDto.prototype, "verified", void 0);
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)({
        nullable: true,
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserDto.prototype, "birthday", void 0);
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(() => _core_1.UserRole),
    tslib_1.__metadata("design:type", typeof (_b = typeof _core_1.UserRole !== "undefined" && _core_1.UserRole) === "function" ? _b : Object)
], UserDto.prototype, "role", void 0);
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserDto.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UserDto.prototype, "updatedAt", void 0);
exports.UserDto = UserDto = tslib_1.__decorate([
    (0, graphql_1.ObjectType)('User'),
    (0, graphql_1.Directive)('@key(fields: "id")'),
    tslib_1.__metadata("design:paramtypes", [UserDto])
], UserDto);
(0, graphql_1.registerEnumType)(_core_1.UserRole, {
    name: 'UserRole',
});


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(15), exports);
// export * from './proto/generated';
tslib_1.__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(18), exports);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IRepository = void 0;
/**
 * Blueprint abstract class for a generic repository handling CRUD operations for entities of type T.
 */
class IRepository {
}
exports.IRepository = IRepository;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IMongoDatabaseService = exports.ISQLDatabaseService = exports.DatabaseService = void 0;
class DatabaseService {
}
exports.DatabaseService = DatabaseService;
class ISQLDatabaseService {
}
exports.ISQLDatabaseService = ISQLDatabaseService;
class IMongoDatabaseService {
}
exports.IMongoDatabaseService = IMongoDatabaseService;


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HashingService = void 0;
class HashingService {
}
exports.HashingService = HashingService;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["USER"] = "USER";
})(UserRole || (exports.UserRole = UserRole = {}));


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceFormat = exports.ResourceType = void 0;
var ResourceType;
(function (ResourceType) {
    ResourceType["BOOK"] = "BOOK";
    ResourceType["VIDEO"] = "VIDEO";
    ResourceType["AUDIO"] = "AUDIO";
    ResourceType["IMAGE"] = "IMAGE";
    ResourceType["DOCUMENT"] = "DOCUMENT";
    ResourceType["ARTICLE"] = "ARTICLE";
    ResourceType["CODE"] = "CODE";
    ResourceType["OTHER"] = "OTHER";
})(ResourceType || (exports.ResourceType = ResourceType = {}));
var ResourceFormat;
(function (ResourceFormat) {
    ResourceFormat["PDF"] = "PDF";
    ResourceFormat["DOC"] = "DOC";
    ResourceFormat["DOCX"] = "DOCX";
    ResourceFormat["XLS"] = "XLS";
    ResourceFormat["XLSX"] = "XLSX";
    ResourceFormat["PPT"] = "PPT";
    ResourceFormat["PPTX"] = "PPTX";
    ResourceFormat["MP3"] = "MP3";
    ResourceFormat["MP4"] = "MP4";
    ResourceFormat["WAV"] = "WAV";
    ResourceFormat["AVI"] = "AVI";
    ResourceFormat["MKV"] = "MKV";
    ResourceFormat["JPG"] = "JPG";
    ResourceFormat["JPEG"] = "JPEG";
    ResourceFormat["PNG"] = "PNG";
    ResourceFormat["GIF"] = "GIF";
    ResourceFormat["OTHER"] = "OTHER";
})(ResourceFormat || (exports.ResourceFormat = ResourceFormat = {}));


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomType = void 0;
var RoomType;
(function (RoomType) {
    RoomType["PUBLIC"] = "PUBLIC";
    RoomType["PRIVATE"] = "PRIVATE";
})(RoomType || (exports.RoomType = RoomType = {}));


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const mapped_types_1 = __webpack_require__(30);
const register_dto_1 = __webpack_require__(31);
class UpdateUserDto extends (0, mapped_types_1.PartialType)(register_dto_1.RegisterUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterUserDto = void 0;
const tslib_1 = __webpack_require__(1);
const graphql_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(32);
let RegisterUserDto = class RegisterUserDto {
    constructor(createUserInput) {
        Object.assign(this, createUserInput);
    }
};
exports.RegisterUserDto = RegisterUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, graphql_1.Field)(() => String),
    tslib_1.__metadata("design:type", String)
], RegisterUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(20),
    (0, graphql_1.Field)(() => String),
    tslib_1.__metadata("design:type", String)
], RegisterUserDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
    }),
    (0, graphql_1.Field)(() => String),
    tslib_1.__metadata("design:type", String)
], RegisterUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(20),
    (0, graphql_1.Field)(() => String),
    tslib_1.__metadata("design:type", String)
], RegisterUserDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(20),
    (0, graphql_1.Field)(() => String),
    tslib_1.__metadata("design:type", String)
], RegisterUserDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], RegisterUserDto.prototype, "birthday", void 0);
exports.RegisterUserDto = RegisterUserDto = tslib_1.__decorate([
    (0, graphql_1.InputType)({ description: 'Create new user' }),
    tslib_1.__metadata("design:paramtypes", [RegisterUserDto])
], RegisterUserDto);


/***/ }),
/* 32 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HashingModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const bcript_1 = __webpack_require__(35);
const _core_1 = __webpack_require__(14);
let HashingModule = class HashingModule {
};
exports.HashingModule = HashingModule;
exports.HashingModule = HashingModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: _core_1.HashingService,
                useClass: bcript_1.BcryptService,
            },
        ],
        exports: [
            {
                provide: _core_1.HashingService,
                useClass: bcript_1.BcryptService,
            },
        ],
    })
], HashingModule);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(37), exports);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BcriptModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const bcript_service_1 = __webpack_require__(37);
const _core_1 = __webpack_require__(14);
let BcriptModule = class BcriptModule {
};
exports.BcriptModule = BcriptModule;
exports.BcriptModule = BcriptModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: _core_1.HashingService,
                useClass: bcript_service_1.BcryptService,
            },
        ],
        exports: [
            {
                provide: _core_1.HashingService,
                useClass: bcript_service_1.BcryptService,
            },
        ],
    })
], BcriptModule);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BcryptService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const bcrypt = tslib_1.__importStar(__webpack_require__(38));
let BcryptService = class BcryptService {
    hash(data) {
        return bcrypt.hash(data, 10);
    }
    compare(data, hash) {
        return bcrypt.compare(data, hash);
    }
};
exports.BcryptService = BcryptService;
exports.BcryptService = BcryptService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], BcryptService);


/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEntity = void 0;
const tslib_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(40);
const _core_1 = __webpack_require__(14);
const bcrypt = tslib_1.__importStar(__webpack_require__(38));
let UserEntity = class UserEntity extends typeorm_1.BaseEntity {
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
};
exports.UserEntity = UserEntity;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], UserEntity.prototype, "verified", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserEntity.prototype, "birthday", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ enum: _core_1.UserRole, default: _core_1.UserRole.USER, type: 'enum' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof _core_1.UserRole !== "undefined" && _core_1.UserRole) === "function" ? _b : Object)
], UserEntity.prototype, "role", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "hashedRefreshToken", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserEntity.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UserEntity.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.BeforeInsert)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserEntity.prototype, "hashPassword", null);
exports.UserEntity = UserEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('users', {
        name: 'users',
        comment: 'Users table',
        orderBy: {
            createdAt: 'DESC',
        },
    })
], UserEntity);


/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const nestjs_query_typeorm_1 = __webpack_require__(11);
const typeorm_1 = __webpack_require__(42);
const typeorm_2 = __webpack_require__(40);
const user_entity_1 = __webpack_require__(39);
let UsersService = class UsersService extends nestjs_query_typeorm_1.TypeOrmQueryService {
    constructor(userRepository) {
        super(userRepository);
        this.userRepository = userRepository;
    }
    async findByUsernameOrEmailOrFail(username, email) {
        return await this.userRepository.findOneOrFail({
            where: [{ username }, { email }],
            comment: 'Find user by username or email',
        });
    }
    async updateRefreshToken(id, refreshToken) {
        await this.userRepository.update(id, {
            hashedRefreshToken: refreshToken,
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);


/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(44);
const config_1 = __webpack_require__(45);
const jwt_module_1 = __webpack_require__(46);
const strategies_1 = __webpack_require__(47);
const hashing_1 = __webpack_require__(33);
const users_module_1 = __webpack_require__(9);
const auth_service_1 = __webpack_require__(52);
const local_strategy_1 = __webpack_require__(58);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_module_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    secret: configService.get('JWT_ACCESS_SECRET'),
                    signOptions: { expiresIn: '15m' },
                }),
            }),
            config_1.ConfigModule,
            hashing_1.HashingModule,
            strategies_1.StrategiesModule,
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
        ],
        exports: [auth_service_1.AuthService],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy],
    })
], AuthModule);


/***/ }),
/* 44 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 45 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 46 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt/dist/jwt.module");

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StrategiesModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(45);
const jwt_strategy_1 = __webpack_require__(49);
const refresh_jwt_strategy_1 = __webpack_require__(51);
let StrategiesModule = class StrategiesModule {
};
exports.StrategiesModule = StrategiesModule;
exports.StrategiesModule = StrategiesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        providers: [jwt_strategy_1.JwtStrategy, refresh_jwt_strategy_1.RefreshJwtStrategy],
        exports: [jwt_strategy_1.JwtStrategy, refresh_jwt_strategy_1.RefreshJwtStrategy],
    })
], StrategiesModule);


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = exports.cookieAccessExtractor = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(44);
const passport_jwt_1 = __webpack_require__(50);
const config_1 = __webpack_require__(45);
const cookieAccessExtractor = (req) => {
    if (!req.cookies)
        return null;
    if (req.cookies['accessToken']) {
        console.log('req.cookies', req.cookies['accessToken']);
        return req.cookies['accessToken'].replace('Bearer ', '').trim();
    }
    return null;
};
exports.cookieAccessExtractor = cookieAccessExtractor;
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                exports.cookieAccessExtractor,
                passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            ignoreExpiration: true, // TODO: set to false
            secretOrKey: configService.get('JWT_ACCESS_SECRET'),
        });
        this.configService = configService;
    }
    async validate(payload) {
        return payload;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),
/* 50 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshJwtStrategy = exports.cookieRefreshExtractor = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(44);
const passport_jwt_1 = __webpack_require__(50);
const config_1 = __webpack_require__(45);
const cookieRefreshExtractor = (req) => {
    console.log('req.cookies', req.cookies);
    if (req && req.cookies) {
        return req.cookies['refreshToken'];
    }
    return null;
};
exports.cookieRefreshExtractor = cookieRefreshExtractor;
let RefreshJwtStrategy = class RefreshJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'refresh-jwt') {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                exports.cookieRefreshExtractor,
                passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            ignoreExpiration: true,
            secretOrKey: configService.get('JWT_ACCESS_SECRET'),
        });
        this.configService = configService;
    }
    validate(req, payload) {
        const refreshToken = req.cookies['refreshToken'];
        console.log('refreshToken', refreshToken);
        if (!refreshToken) {
            throw new common_1.ForbiddenException('Refresh token malformed');
        }
        return {
            ...payload,
            refreshToken,
        };
    }
};
exports.RefreshJwtStrategy = RefreshJwtStrategy;
exports.RefreshJwtStrategy = RefreshJwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], RefreshJwtStrategy);


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(53);
const _core_1 = __webpack_require__(14);
const auth_1 = __webpack_require__(54);
const users_service_1 = __webpack_require__(41);
let AuthService = class AuthService {
    constructor(jwtService, hashingService, usersService) {
        this.jwtService = jwtService;
        this.hashingService = hashingService;
        this.usersService = usersService;
    }
    /**
     * Authenticates a user.
     * @returns A Promise resolving to the authenticated user.
     * @throws NotAcceptableException if the email or username already exists.
     * @param credentials
     */
    async validateUser(credentials) {
        const user = await this.usersService.findByUsernameOrEmailOrFail(credentials.username, credentials.email);
        const isCredentialsCorrect = await this.hashingService.compare(credentials.password, user.password);
        if (!isCredentialsCorrect)
            throw new common_1.UnauthorizedException({ message: 'Invalid credentials' });
        return user;
    }
    async login(user) {
        const tokens = await this.generateTokens(user);
        await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
    async refreshToken(user, refreshToken) {
        const isRefreshTokenValid = await this.hashingService.compare(refreshToken, user.hashedRefreshToken);
        if (!isRefreshTokenValid)
            throw new common_1.UnauthorizedException({ message: 'Invalid refresh token' });
        return this.login(user);
    }
    /**
     * Registers a user.
     * @param UserInfo The user's information.
     */
    async register(UserInfo) {
        return await this.usersService.createOne(UserInfo);
    }
    async generateTokens(user) {
        const tokenPayload = new auth_1.UserTokenPayload(user);
        const accessToken = await this.generateToken(tokenPayload, {
            expiresIn: '15m',
        });
        const refreshToken = await this.generateToken(tokenPayload, {
            expiresIn: '7d',
        });
        return { accessToken, refreshToken };
    }
    async generateToken(payload, options) {
        return this.jwtService.sign({ ...payload }, options);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof _core_1.HashingService !== "undefined" && _core_1.HashingService) === "function" ? _b : Object, typeof (_c = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _c : Object])
], AuthService);


/***/ }),
/* 53 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterResponse = exports.LoginResponseDto = void 0;
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);
var login_response_dto_1 = __webpack_require__(56);
Object.defineProperty(exports, "LoginResponseDto", ({ enumerable: true, get: function () { return login_response_dto_1.LoginResponseDto; } }));
var register_response_dto_1 = __webpack_require__(57);
Object.defineProperty(exports, "RegisterResponse", ({ enumerable: true, get: function () { return register_response_dto_1.RegisterResponse; } }));


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserTokenPayload = exports.LoginUserDto = void 0;
const tslib_1 = __webpack_require__(1);
const graphql_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(32);
let LoginUserDto = class LoginUserDto {
    constructor(loginUserDto) {
        Object.assign(this, loginUserDto);
    }
};
exports.LoginUserDto = LoginUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.ValidateIf)((o) => !o.username || o.email, {
        message: 'Email or username is required',
    }),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(20),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.ValidateIf)((o) => !o.email || o.username, {
        message: 'Email or username is required',
    }),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
exports.LoginUserDto = LoginUserDto = tslib_1.__decorate([
    (0, graphql_1.InputType)('Credentials', { description: 'Login user' }),
    tslib_1.__metadata("design:paramtypes", [LoginUserDto])
], LoginUserDto);
class UserTokenPayload {
    constructor(tokenPayload) {
        this.id = tokenPayload.id;
    }
}
exports.UserTokenPayload = UserTokenPayload;


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginResponseDto = void 0;
const tslib_1 = __webpack_require__(1);
const nestjs_query_graphql_1 = __webpack_require__(10);
const graphql_1 = __webpack_require__(6);
const _core_1 = __webpack_require__(14);
const user_1 = __webpack_require__(12);
let LoginResponseDto = class LoginResponseDto {
    constructor(user, accessToken, refreshToken) {
        Object.assign(this, { user, accessToken, refreshToken });
    }
};
exports.LoginResponseDto = LoginResponseDto;
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(() => String),
    tslib_1.__metadata("design:type", String)
], LoginResponseDto.prototype, "accessToken", void 0);
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(() => String),
    tslib_1.__metadata("design:type", String)
], LoginResponseDto.prototype, "refreshToken", void 0);
tslib_1.__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(() => user_1.UserDto),
    tslib_1.__metadata("design:type", typeof (_b = typeof user_1.UserDto !== "undefined" && user_1.UserDto) === "function" ? _b : Object)
], LoginResponseDto.prototype, "user", void 0);
exports.LoginResponseDto = LoginResponseDto = tslib_1.__decorate([
    (0, graphql_1.ObjectType)('LoginResponseDto', { description: 'Login response' }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof _core_1.IUser !== "undefined" && _core_1.IUser) === "function" ? _a : Object, String, String])
], LoginResponseDto);


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterResponse = void 0;
const tslib_1 = __webpack_require__(1);
const graphql_1 = __webpack_require__(6);
const _core_1 = __webpack_require__(14);
const login_response_dto_1 = __webpack_require__(56);
let RegisterResponse = class RegisterResponse extends login_response_dto_1.LoginResponseDto {
    constructor(user, accessToken, refreshToken) {
        super(user, accessToken, refreshToken);
        this.user = user;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
};
exports.RegisterResponse = RegisterResponse;
exports.RegisterResponse = RegisterResponse = tslib_1.__decorate([
    (0, graphql_1.ObjectType)('RegisterResponse', { description: 'Register response' }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof _core_1.IUser !== "undefined" && _core_1.IUser) === "function" ? _a : Object, String, String])
], RegisterResponse);


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(44);
const passport_local_1 = __webpack_require__(59);
const auth_service_1 = __webpack_require__(52);
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
        this.authService = authService;
    }
    async validate(email, password) {
        const user = await this.authService.validateUser({ email, password });
        if (!user)
            throw new common_1.UnauthorizedException();
        return user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),
/* 59 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthResolver = void 0;
const tslib_1 = __webpack_require__(1);
const graphql_1 = __webpack_require__(6);
const _core_1 = __webpack_require__(14);
const guards_1 = __webpack_require__(61);
const user_1 = __webpack_require__(12);
const auth_1 = __webpack_require__(54);
const common_1 = __webpack_require__(2);
const decorators_1 = __webpack_require__(65);
const auth_service_1 = __webpack_require__(52);
const local_guard_1 = __webpack_require__(69);
const users_service_1 = __webpack_require__(41);
// @UseGuards(RolesGuard)
// @UseGuards(AuthGuard)
let AuthResolver = class AuthResolver {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async login(credentials, user) {
        const { accessToken, refreshToken } = await this.authService.login(user);
        return new auth_1.LoginResponseDto(user, accessToken, refreshToken);
    }
    async register(userInfo) {
        const user = await this.authService.register(userInfo);
        const { accessToken, refreshToken } = await this.authService.login(user);
        return new auth_1.RegisterResponse(user, accessToken, refreshToken);
    }
    async refreshToken(user) {
        return this.authService.refreshToken(user, user.refreshToken);
    }
    // @Roles([UserRole.ADMIN])
    // @UseInterceptors(ParseUserFromToken)
    // @UseGuards(LocalGuard)
    async me(user) {
        return this.usersService.findById(user.id);
    }
};
exports.AuthResolver = AuthResolver;
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => auth_1.LoginResponseDto, {
        description: 'Login a user with username or email and password, returns JWT token.',
    }),
    (0, common_1.UseGuards)(local_guard_1.LocalGuard),
    tslib_1.__param(0, (0, graphql_1.Args)('credentials')),
    tslib_1.__param(1, (0, decorators_1.UserTokenPayload)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof auth_1.LoginUserDto !== "undefined" && auth_1.LoginUserDto) === "function" ? _c : Object, typeof (_d = typeof _core_1.IUser !== "undefined" && _core_1.IUser) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthResolver.prototype, "login", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => auth_1.RegisterResponse),
    tslib_1.__param(0, (0, graphql_1.Args)('userInfo')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof auth_1.RegisterUserDto !== "undefined" && auth_1.RegisterUserDto) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthResolver.prototype, "register", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => auth_1.LoginResponseDto),
    (0, common_1.UseGuards)(guards_1.RefreshJwtGuard),
    tslib_1.__param(0, (0, decorators_1.UserTokenPayload)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthResolver.prototype, "refreshToken", null);
tslib_1.__decorate([
    (0, graphql_1.Query)(() => user_1.UserDto),
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    tslib_1.__param(0, (0, decorators_1.UserTokenPayload)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof user_1.UserDto !== "undefined" && user_1.UserDto) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthResolver.prototype, "me", null);
exports.AuthResolver = AuthResolver = tslib_1.__decorate([
    (0, graphql_1.Resolver)(() => user_1.UserDto),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object])
], AuthResolver);


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(62), exports);
tslib_1.__exportStar(__webpack_require__(63), exports);
tslib_1.__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GuardsModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
let GuardsModule = class GuardsModule {
};
exports.GuardsModule = GuardsModule;
exports.GuardsModule = GuardsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
    })
], GuardsModule);


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtGuard = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const graphql_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(44);
/**
 * Custom GraphQL authentication guard that extends the AuthGuard('jwt') class.
 * This guard is responsible for authenticating requests using JWT tokens.
 */
let JwtGuard = class JwtGuard extends (0, passport_1.AuthGuard)('jwt') {
    getRequest(context) {
        const gqlCtx = graphql_1.GqlExecutionContext.create(context);
        const ctx = gqlCtx.getContext();
        return ctx.req;
    }
};
exports.JwtGuard = JwtGuard;
exports.JwtGuard = JwtGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], JwtGuard);


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshJwtGuard = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const graphql_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(44);
/**
 * Custom GraphQL authentication guard that extends the AuthGuard('jwt') class.
 * This guard is responsible for authenticating requests using JWT tokens.
 */
let RefreshJwtGuard = class RefreshJwtGuard extends (0, passport_1.AuthGuard)('refresh-jwt') {
    getRequest(context) {
        const gqlCtx = graphql_1.GqlExecutionContext.create(context);
        const ctx = gqlCtx.getContext();
        return ctx.req;
    }
};
exports.RefreshJwtGuard = RefreshJwtGuard;
exports.RefreshJwtGuard = RefreshJwtGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], RefreshJwtGuard);


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(67), exports);
tslib_1.__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParseToken = exports.CatchToken = void 0;
const common_1 = __webpack_require__(2);
const graphql_1 = __webpack_require__(6);
const extractTokenFromRequest = (ctx) => {
    const ctxGql = graphql_1.GqlExecutionContext.create(ctx);
    const request = ctxGql.getContext().req;
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader) {
        throw new common_1.UnauthorizedException();
    }
    return authorizationHeader.replace('Bearer ', '');
};
exports.CatchToken = (0, common_1.createParamDecorator)((data, ctx) => extractTokenFromRequest(ctx));
exports.ParseToken = (0, common_1.createParamDecorator)((data, ctx) => extractTokenFromRequest(ctx));


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserTokenPayload = void 0;
const common_1 = __webpack_require__(2);
const graphql_1 = __webpack_require__(6);
exports.UserTokenPayload = (0, common_1.createParamDecorator)((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
});


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalGuard = void 0;
const passport_1 = __webpack_require__(44);
const graphql_1 = __webpack_require__(6);
class LocalGuard extends (0, passport_1.AuthGuard)('local') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const gqlReq = ctx.getContext().req;
        const { credentials: { email, password, username }, } = ctx.getArgs();
        gqlReq.body.email = email;
        gqlReq.body.username = username;
        gqlReq.body.password = password;
        return gqlReq;
    }
}
exports.LocalGuard = LocalGuard;


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersDatabaseModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(42);
const config_1 = __webpack_require__(45);
const typeorm_2 = __webpack_require__(40);
const user_entity_1 = __webpack_require__(39);
const hashing_1 = __webpack_require__(33);
let UsersDatabaseModule = class UsersDatabaseModule {
};
exports.UsersDatabaseModule = UsersDatabaseModule;
exports.UsersDatabaseModule = UsersDatabaseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    entities: [user_entity_1.UserEntity],
                    url: configService.get('USERS_POSTGRES_URL'),
                    keepConnectionAlive: true,
                    synchronize: true,
                }),
            }),
            hashing_1.HashingModule,
        ],
        providers: [
            {
                provide: 'USERS_DATABASE_SERVICE',
                useFactory: (dataSource) => dataSource.getRepository(user_entity_1.UserEntity),
                inject: [typeorm_2.DataSource],
            },
        ],
        exports: ['USERS_DATABASE_SERVICE'],
    })
], UsersDatabaseModule);


/***/ }),
/* 71 */
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeORMExceptionFilter = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(40);
const error_1 = __webpack_require__(74);
let TypeORMExceptionFilter = class TypeORMExceptionFilter {
    catch(exception) {
        switch (true) {
            case exception instanceof typeorm_1.EntityNotFoundError:
                throw new error_1.GraphQLError('Entity not found.', {
                    extensions: { code: CODES.ENTITY_NOT_FOUND },
                });
            default:
                throw new error_1.GraphQLError(exception.message, {
                    extensions: { code: CODES.TYPEORM_ERROR },
                });
        }
    }
};
exports.TypeORMExceptionFilter = TypeORMExceptionFilter;
exports.TypeORMExceptionFilter = TypeORMExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)(typeorm_1.TypeORMError)
], TypeORMExceptionFilter);
const CODES = {
    ENTITY_NOT_FOUND: 'ENTITY_NOT_FOUND',
    TYPEORM_ERROR: 'TYPEORM_ERROR',
};


/***/ }),
/* 74 */
/***/ ((module) => {

module.exports = require("graphql/error");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const core_1 = __webpack_require__(3);
const cors_1 = tslib_1.__importDefault(__webpack_require__(4));
const app_module_1 = __webpack_require__(5);
const cookie_parser_1 = tslib_1.__importDefault(__webpack_require__(71));
const filters_1 = __webpack_require__(72);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, cookie_parser_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe());
    const globalPrefix = 'graphql';
    app.setGlobalPrefix(globalPrefix);
    app.useGlobalFilters(new filters_1.TypeORMExceptionFilter());
    const port = process.env.PORT || 3001;
    // CORS configuration
    app.use((0, cors_1.default)({
        origin: '*', // Change this to the specific origin of your frontend in production
        credentials: true,
    }));
    // Set up routes for GraphQL playground
    app.use(`/${globalPrefix}`, (req, res, next) => {
        if (req.url.startsWith('/graphql')) {
            // Allow CSRF token header for Apollo Playground
            res.setHeader('Access-Control-Allow-Headers', 'csrf-token');
        }
        next();
    });
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;