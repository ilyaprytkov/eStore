module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[project]/.next-internal/server/app/(withLayout)/product-type/edit/[productTypeId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/productTypesAction.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "001f26de30f130cc7ba92aa3c40912c63927a1934d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$productTypesAction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductTypes"],
    "404f7cf4d3c360a2953945efb247064a251d996a76",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$productTypesAction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProductType"],
    "40bb7a10a3ac6b84dcfc6e9640908e6de94ad45926",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$productTypesAction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUniqueProductType"],
    "40f83147397bb699afff9550e17157e16f87123bf1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$productTypesAction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProductType"],
    "60905c982ff91b96d5370b67ad2ef34cf4eb092c1e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$productTypesAction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductType"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$withLayout$292f$product$2d$type$2f$edit$2f5b$productTypeId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$productTypesAction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(withLayout)/product-type/edit/[productTypeId]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/productTypesAction.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$productTypesAction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/productTypesAction.js [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/(withLayout)/product-type/edit/[productTypeId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/productTypesAction.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$productTypesAction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/productTypesAction.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/src/actions/productTypesAction.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"001f26de30f130cc7ba92aa3c40912c63927a1934d":{"name":"getProductTypes"},"404f7cf4d3c360a2953945efb247064a251d996a76":{"name":"createProductType"},"40bb7a10a3ac6b84dcfc6e9640908e6de94ad45926":{"name":"getUniqueProductType"},"40f83147397bb699afff9550e17157e16f87123bf1":{"name":"deleteProductType"},"60905c982ff91b96d5370b67ad2ef34cf4eb092c1e":{"name":"updateProductType"}},"src/actions/productTypesAction.js",""] */ __turbopack_context__.s([
    "createProductType",
    ()=>createProductType,
    "deleteProductType",
    ()=>deleteProductType,
    "getProductTypes",
    ()=>getProductTypes,
    "getUniqueProductType",
    ()=>getUniqueProductType,
    "updateProductType",
    ()=>updateProductType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/prisma/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function createProductType(formData) {
    const data = {
        name: formData.get("name")
    };
    const existingProductType = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].productType.findUnique({
        where: {
            name: data.name
        }
    });
    if (!existingProductType) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].productType.create({
            data: {
                name: data.name
            }
        });
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/product-type/add?errorMessage=Product Type already exists.`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/product-type", "page");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/product-type");
}
async function getProductTypes() {
    const productTypes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].productType.findMany();
    return productTypes;
}
async function getUniqueProductType(productTypeId) {
    const productType = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].productType.findUnique({
        where: {
            id: parseInt(productTypeId)
        }
    });
    return productType;
}
async function updateProductType(formData, productTypeId) {
    const data = {
        name: formData.get("name")
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].productType.update({
        where: {
            id: parseInt(productTypeId)
        },
        data: {
            name: data.name
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/product-type", "page");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/product-type");
}
async function deleteProductType(productTypeId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].productType.delete({
        where: {
            id: productTypeId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/product-type", "page");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createProductType,
    getProductTypes,
    getUniqueProductType,
    updateProductType,
    deleteProductType
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProductType, "404f7cf4d3c360a2953945efb247064a251d996a76", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductTypes, "001f26de30f130cc7ba92aa3c40912c63927a1934d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUniqueProductType, "40bb7a10a3ac6b84dcfc6e9640908e6de94ad45926", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductType, "60905c982ff91b96d5370b67ad2ef34cf4eb092c1e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProductType, "40f83147397bb699afff9550e17157e16f87123bf1", null);
}),
"[project]/src/generated/prisma/client.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 * If you're looking for something you can import in the client-side of your application, please refer to the `browser.ts` file instead.
 *
 * 🟢 You can import this file directly.
 */ __turbopack_context__.s([
    "PrismaClient",
    ()=>PrismaClient
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
(()=>{
    const e = new Error("Cannot find module './internal/class.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './internal/prismaNamespace.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './enums.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__import$2e$meta__ = {
    get url () {
        return __turbopack_context__.F("src/generated/prisma/client.ts");
    },
    env: {
        DEV: true,
        PROD: false,
        MODE: "development",
        BASE_URL: "/",
        SSR: true
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
;
globalThis['__dirname'] = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["dirname"]((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url));
;
;
;
;
const PrismaClient = $Class.getPrismaClientClass();
;
}),
"[project]/src/shared/lib/prisma/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dotenv/config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$better$2d$sqlite3$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-better-sqlite3/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/generated/prisma/client.ts [app-rsc] (ecmascript) <locals>");
;
;
;
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$better$2d$sqlite3$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaBetterSqlite3"]({
    url: connectionString
});
const prisma = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrismaClient"]({
    adapter
});
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1rkirt4._.js.map